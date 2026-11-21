import * as THREE from '../lib/three.module.min.js';
import { makeRas, makeKiri, makeLyra, makeSable, makeMedico, makeZero, makeGorm, makeBrick, makeRatto, makeCittadino, anima } from '../lib/pc-models.js';

const CHIAVE = 'punkcity-cap1-v1';
const $ = (id) => document.getElementById(id);
const FABB = {
  ras: (o) => makeRas(o || { sword: 'back' }),
  rasIntero: () => makeRas({ sword: 'hand', alba: false }),
  rasFerito: () => { const m = makeRas({ sword: 'back', alba: false }); m.userData.armL.g.visible = false; return m; },
  kiri: () => makeKiri(),
  lyra: () => makeLyra(),
  sable: () => makeSable(),
  medico: () => makeMedico(),
  zero: () => makeZero(),
  gorm: () => makeGorm(),
  brick: () => makeBrick(),
  ratto: () => makeRatto(),
  aram: () => makeCittadino(0x1a2744, 0xc8a080),
  nadia: () => makeCittadino(0x4a2040, 0xf0c0a8),
  guardia: () => makeCittadino(0x5a1828, 0xc89878),
  nila: () => makeCittadino(0x204038, 0xe0b090),
  spina: () => makeCittadino(0x302418, 0xd0a888),
};

const STANZE = {
  infermeria: { nome: 'Infermeria clandestina', w: 7, d: 6, pav: 0x3a2a34, neon: 0x5ef0d0, spawn: [0, 1.6],
    gente: [['kiri', -1.3, -1.1, 0.5], ['medico', 1.4, -1.3, -0.4]],
    porte: [[3.1, 0, 'mercato', 'Mercato']] },
  mercato: { nome: 'Mercato delle Fogne', w: 10, d: 8, pav: 0x4a3038, neon: 0xff4f9a, spawn: [-3, 1.5],
    gente: [['nila', -1.5, -2.2, 0.6], ['spina', 1.2, -1.4, -0.8], ['lyra', 2.4, 0.4, 2.4]],
    porte: [[-4.4, 0, 'infermeria', 'Infermeria'], [0, -3.4, 'passerella', 'Passerella']] },
  passerella: { nome: 'Passerella', w: 6, d: 12, pav: 0x2a3140, neon: 0x7ef0ff, spawn: [0, 4.2],
    gente: [['sable', 1.6, -2.2, -1.2]],
    porte: [[0, 5.2, 'mercato', 'Mercato'], [0, -5.2, 'deposito', 'Deposito']],
    trappola: { z: 0, id: 'ratti' } },
  deposito: { nome: 'Deposito di Re Gorm', w: 8, d: 8, pav: 0x1c1410, neon: 0xffd27a, spawn: [0, 2.6],
    gente: [],
    casse: [0, -1.2],
    porte: [[0, 3.4, 'passerella', 'Passerella'], [3.4, 0, 'sala', 'Sala del re', 'casse']] },
  sala: { nome: 'Sala di Re Gorm', w: 8, d: 8, pav: 0x2a1018, neon: 0xff2040, spawn: [0, 2.4],
    gente: [], boss: true,
    porte: [[0, 3.4, 'deposito', 'Deposito'], [0, -3.2, 'rust', 'Rust Alley', 'fine']] },
  rust: { nome: 'Soglia di Rust Alley', w: 7, d: 7, pav: 0x2a1c12, neon: 0xff8844, spawn: [0, 2],
    gente: [['brick', 0, -1.4, 0.2]], porte: [[0, 3, 'sala', 'Indietro']] },
};

let S = null;
let modo = 'titolo';
let tempo = 0;
let mondo, eroe, cam, renderer, scena, luceAlba;
const gente = [];
const porte = [];
let casseMesh = null;
let joy = { on: false, x: 0, y: 0 };
let vicino = null;
let dlg = null;
let bat = null;
let audioCtx = null;
let muto = false;

function base() {
  return {
    v: 1, prologo: false, stanza: 'infermeria', x: 0, z: 1.6, soldi: 15,
    oggetti: { medikit: 1, stim: 0 },
    party: [{ id: 'ras', xp: 0, hp: 96, mp: 22 }, { id: 'kiri', xp: 0, hp: 84, mp: 28 }],
    flag: {}, sceltaGorm: null,
  };
}
function salva() {
  if (!S) return;
  if (eroe && modo === 'gioco') { S.x = eroe.position.x; S.z = eroe.position.z; }
  localStorage.setItem(CHIAVE, JSON.stringify(S));
}
function carica() { try { return JSON.parse(localStorage.getItem(CHIAVE) || 'null'); } catch { return null; } }
function lvDi(xp) { return 1 + Math.floor(xp / 50); }
function scheda(p) {
  const lv = lvDi(p.xp);
  const b = p.id === 'ras' ? { hp: 96, atk: 14, mp: 22, spd: 11, nome: 'Ras' } : { hp: 84, atk: 11, mp: 28, spd: 13, nome: 'Kiri' };
  return { ...p, ...b, lv, hpMax: b.hp + (lv - 1) * 16, atk: b.atk + (lv - 1) * 2, mpMax: b.mp + (lv - 1) * 3 };
}
function eroeRas() { return scheda(S.party[0]); }
function kiri() { return scheda(S.party[1]); }

function musica() {
  if (muto || audioCtx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  audioCtx = new AC();
  const g = audioCtx.createGain();
  g.gain.value = 0.045;
  g.connect(audioCtx.destination);
  const o = audioCtx.createOscillator();
  o.type = 'sawtooth';
  o.frequency.value = 55;
  const f = audioCtx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 220;
  o.connect(f); f.connect(g); o.start();
  const p = audioCtx.createOscillator();
  p.type = 'triangle';
  p.frequency.value = 220;
  const pg = audioCtx.createGain();
  pg.gain.value = 0.02;
  p.connect(pg); pg.connect(g); p.start();
  setInterval(() => { if (!audioCtx || muto) return; p.frequency.setValueAtTime([196, 220, 247, 175][Math.floor(tempo) % 4], audioCtx.currentTime); }, 1400);
}

function init3d() {
  const canvas = $('c');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x05010a);
  scena = new THREE.Scene();
  scena.fog = new THREE.Fog(0x05010a, 9, 24);
  cam = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 40);
  scena.add(new THREE.AmbientLight(0xb7a8c4, 0.85));
  const dir = new THREE.DirectionalLight(0xffb070, 1.4);
  dir.position.set(-1, 2.2, 1.4);
  scena.add(dir);
  const pink = new THREE.DirectionalLight(0xff3cc0, 0.55);
  pink.position.set(1.4, 1.0, 0.2);
  scena.add(pink);
  const rim = new THREE.DirectionalLight(0x60c8ff, 1.15);
  rim.position.set(0.2, 1.2, -1.5);
  scena.add(rim);
  luceAlba = new THREE.PointLight(0xffe0a2, 0, 4);
  scena.add(luceAlba);
  mondo = new THREE.Group();
  scena.add(mondo);
  addEventListener('resize', () => {
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}

function box(w, h, d, colore, x, y, z) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color: colore }));
  m.position.set(x, y, z);
  mondo.add(m);
  return m;
}
function svuota() {
  while (mondo.children.length) mondo.remove(mondo.children[0]);
  gente.length = 0;
  porte.length = 0;
  casseMesh = null;
  eroe = null;
}
function metti(id, x, z, ry, fab) {
  const m = (fab || FABB[id])();
  m.position.set(x, 0, z);
  m.rotation.y = ry || 0;
  m.scale.setScalar(id === 'gorm' || id === 'zero' || id === 'brick' ? 1.45 : 1.35);
  mondo.add(m);
  const rec = { id, m, x, z, mode: 'idle' };
  gente.push(rec);
  return rec;
}
function tubo(x, z) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 8), new THREE.MeshLambertMaterial({ color: 0x39424a }));
  m.position.set(x, 1.1, z);
  mondo.add(m);
}

function costruisci(id) {
  const st = STANZE[id];
  svuota();
  scena.fog.color.set(0x05010a);
  renderer.setClearColor(0x05010a);
  box(st.w, 0.2, st.d, st.pav, 0, -0.1, 0);
  box(st.w, 1.6, 0.2, 0x2c2230, 0, 0.8, -st.d / 2);
  box(st.w, 1.6, 0.2, 0x2c2230, 0, 0.8, st.d / 2);
  box(0.2, 1.6, st.d, 0x2c2230, -st.w / 2, 0.8, 0);
  box(0.2, 1.6, st.d, 0x2c2230, st.w / 2, 0.8, 0);
  const neon = new THREE.Mesh(new THREE.BoxGeometry(st.w * 0.7, 0.06, 0.06), new THREE.MeshBasicMaterial({ color: st.neon }));
  neon.position.set(0, 1.7, -st.d / 2 + 0.16);
  mondo.add(neon);
  const fill = new THREE.PointLight(st.neon, 2.4, 14);
  fill.position.set(0, 1.6, 0);
  mondo.add(fill);
  tubo(st.w / 2 - 0.4, -1);
  const rasFab = S.flag.braccio ? () => makeRas({ sword: 'back' }) : FABB.rasFerito;
  if (modo !== 'prologo') {
    const r = metti('ras', S.x, S.z, Math.PI, rasFab);
    eroe = r.m;
  }
  (st.gente || []).forEach(([chi, x, z, ry]) => metti(chi, x, z, ry));
  if (st.casse && !S.flag.casse) {
    casseMesh = box(0.9, 0.55, 0.6, 0xc8a24a, st.casse[0], 0.28, st.casse[1]);
  }
  (st.porte || []).forEach(([x, z, verso, nome, serve]) => {
    if (serve && !S.flag[serve]) return;
    const p = box(0.7, 1.2, 0.15, 0x3a2030, x, 0.6, z);
    porte.push({ x, z, verso, nome, mesh: p });
  });
  if (id === 'sala' && !S.flag.gormFatto) metti('gorm', 0, -1.6, 0.4);
  else if (id === 'sala' && S.sceltaGorm === 'risparmia') metti('gorm', 0, -1.6, 0.4);
  $('luogo').textContent = st.nome;
  hud();
}

function hud() {
  if (!S) return;
  const r = eroeRas();
  $('risorse').textContent = `Lv ${r.lv}  ·  ${r.hp}/${r.hpMax} PV  ·  ${S.soldi} soldi`;
}

function cammina(dt) {
  if (!eroe || modo !== 'gioco' || dlg || bat) return;
  let x = 0, z = 0;
  if (joy.on) { x = joy.x; z = joy.y; }
  if (tasti.ArrowUp || tasti.w || tasti.W) z -= 1;
  if (tasti.ArrowDown || tasti.s || tasti.S) z += 1;
  if (tasti.ArrowLeft || tasti.a || tasti.A) x -= 1;
  if (tasti.ArrowRight || tasti.d || tasti.D) x += 1;
  const st = STANZE[S.stanza];
  const ras = gente.find((g) => g.id === 'ras');
  if (x || z) {
    const l = Math.hypot(x, z) || 1;
    eroe.position.x = Math.max(-st.w / 2 + 0.5, Math.min(st.w / 2 - 0.5, eroe.position.x + (x / l) * dt * 2.3));
    eroe.position.z = Math.max(-st.d / 2 + 0.5, Math.min(st.d / 2 - 0.5, eroe.position.z + (z / l) * dt * 2.3));
    eroe.rotation.y = Math.atan2(x, z);
    ras.mode = 'walk';
  } else ras.mode = 'idle';
  const hit = porte.find((p) => Math.hypot(p.x - eroe.position.x, p.z - eroe.position.z) < 0.7);
  if (hit) entra(hit.verso);
  if (st.trappola && !S.flag[st.trappola.id] && Math.abs(eroe.position.z - st.trappola.z) < 0.7) {
    S.flag[st.trappola.id] = true;
    salva();
    apriBattaglia([{ id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 8, soldi: 14, xp: 20 }, { id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 7, soldi: 14, xp: 20 }], 'ratti');
  }
  if (S.stanza === 'sala' && !S.flag.gormFatto && Math.abs(eroe.position.z) < 0.8) {
    eroe.position.z = 1.6;
    parla([
      ['RE GORM', 'Re Gorm, delle Fogne. Tu sei il ragazzo senza braccio che cammina ancora. Male.'],
      ['RAS', 'Il braccio c’è. Non è il mio. Il resto sì.'],
    ], () => apriBattaglia([{ id: 'gorm', nome: 'Re Gorm', hp: 110, atk: 13, def: 4, spd: 7, soldi: 40, xp: 60, boss: 1 }, { id: 'guardia', nome: 'Guardia di Gorm', hp: 48, atk: 10, def: 3, spd: 6, soldi: 16, xp: 22 }], 'gorm'));
  }
  vicino = null;
  let best = 1.6;
  gente.forEach((g) => {
    if (g.id === 'ras') return;
    const d = Math.hypot(g.m.position.x - eroe.position.x, g.m.position.z - eroe.position.z);
    if (d < best) { best = d; vicino = g; }
  });
  if (casseMesh) {
    const d = Math.hypot(casseMesh.position.x - eroe.position.x, casseMesh.position.z - eroe.position.z);
    if (d < best) vicino = { id: 'casse' };
  }
  $('azione').classList.toggle('nascosto', !vicino);
  $('azione').textContent = vicino && vicino.id === 'casse' ? 'Apri' : 'Parla';
}

function entra(id) {
  if (!STANZE[id]) return;
  if (id === 'sala' && !S.flag.casse) return;
  if (id === 'rust' && !S.flag.fine) return;
  S.stanza = id;
  const st = STANZE[id];
  S.x = st.spawn[0];
  S.z = st.spawn[1];
  salva();
  costruisci(id);
}

const TESTI = {
  kiri() {
    if (!S.flag.kiriBrief) {
      S.flag.kiriBrief = true;
      return [['KIRI', 'Sei sveglio. Il Braccio Alba tiene. Non chiedere di chi era prima: ora ascolta te.'], ['RAS', 'Aram e Nadia non si alzano. Zero Hollow li ha lasciati lì, e me qui.'], ['KIRI', 'Le Fogne sono il mercato che Re Gorm non dichiara. I suoi soldi passano sotto la città. Se gliene togli, esce dal buco.'], ['RAS', 'Allora si parte dal mercato.']];
    }
    return [['KIRI', 'Io resto un passo dietro di te. Se cadi, ti tiro su. Non fare l’eroe da solo: l’ha già fatto Aram.']];
  },
  medico() { return [['DOTTOR SEME', 'Il taglio è chiuso. Il Braccio Alba non è una protesi da vetrina: è un debito che si muove. Se brucia, non è un guasto. Sei tu.']]; },
  nila() {
    const primo = !S.flag.nila;
    S.flag.nila = true;
    return primo
      ? [['NILA', 'Nila. Vendo quello che i medici veri non tengono in vista. Le casse di Gorm sono nel deposito, dopo la passerella. Se le apri, i Ratti arrivano di corsa.']]
      : [['NILA', 'Di nuovo. Medikit a 20, stim a 15.']];
  },
  spina() { return [['SPINA', 'Gorm conta le monete due volte. Se gliene manca una, manda i Ratti. Se gliene mancano tutte, scende lui. Porta una corona di tubi. Ridicola, finché non ti colpisce.']]; },
  lyra() {
    S.flag.lyra = true;
    return [['LYRA', 'Lyra. La frusta è mia, il neon anche. Se Gorm cade, il vicolo sopra respira.'], ['RAS', 'Vieni con noi.'], ['LYRA', 'Non ancora. Ho un conto aperto più su, e non lo chiudo in una fogna. Quando servi una frusta, la senti.']];
  },
  sable() {
    S.flag.sable = true;
    return [['SABLE', 'Sable. Requiem è carico. Non spreco un colpo per una rissa da fogna.'], ['RAS', 'E se il re resta in piedi?'], ['SABLE', 'Allora il secondo colpo è gratis. Vai. Io vedo la passerella da qui.']];
  },
  brick() { return [['BRICK', 'Brick. Questo è il muro di Rust Alley. Di là non si passa ancora: Madre Ruggine non apre a chi ha le scarpe bagnate di fogna.'], ['RAS', 'Gorm è sistemato. A modo mio.'], ['BRICK', 'Il modo conta. Madre Ruggine lo saprà. Torna quando la ruggine chiama, non prima.']]; },
  gorm() {
    if (S.sceltaGorm === 'risparmia') return [['RE GORM', 'Mi hai lasciato la corona e tolto il deposito. È peggio di una lama. Me lo segno, Ras.']];
    return [['RE GORM', 'Avvicinati, se vuoi finire quello che hai iniziato.']];
  },
};

function interagisci() {
  if (!vicino || modo !== 'gioco' || dlg) return;
  if (vicino.id === 'casse') {
    S.flag.casse = true;
    S.soldi += 80;
    salva();
    parla([
      ['RAS', 'Casse di Gorm. Le apro.'],
      ['', 'Ottanta soldi del re passano nelle tue tasche. Nel deposito suona un allarme basso.'],
    ], () => {
      costruisci('deposito');
      apriBattaglia([{ id: 'guardia', nome: 'Guardia di Gorm', hp: 58, atk: 11, def: 3, spd: 7, soldi: 22, xp: 28 }, { id: 'ratto', nome: 'Ratto di Ferro', hp: 34, atk: 8, def: 2, spd: 8, soldi: 12, xp: 16 }], 'casse');
    });
    return;
  }
  const fn = TESTI[vicino.id];
  if (!fn) return;
  if (vicino.id === 'nila') {
    parla(fn(), () => negozio());
    return;
  }
  parla(fn(), () => { vicino.mode = 'idle'; salva(); });
  vicino.mode = 'talk';
}

function parla(linee, fine) {
  dlg = { linee, i: 0, fine };
  mostraRiga();
}
function mostraRiga() {
  const r = dlg.linee[dlg.i];
  $('dialogo').classList.remove('nascosto');
  $('chi').textContent = r[0] || '';
  $('testo').textContent = r[1];
  $('scelte').innerHTML = '';
  const chi = gente.find((g) => g.id === (r[0] || '').toLowerCase().split(' ')[0]);
  if (chi) chi.mode = 'talk';
}
function avanza() {
  if (!dlg || $('scelte').childElementCount) return;
  dlg.i += 1;
  if (dlg.i >= dlg.linee.length) {
    const fine = dlg.fine;
    dlg = null;
    $('dialogo').classList.add('nascosto');
    gente.forEach((g) => { if (g.mode === 'talk') g.mode = 'idle'; });
    if (fine) fine();
    return;
  }
  mostraRiga();
}
function scelte(lista, fine) {
  dlg = { linee: [['', lista.testo || '']], i: 0, fine: null };
  mostraRiga();
  $('scelte').innerHTML = '';
  lista.voci.forEach((v) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = v[0];
    b.onclick = () => { dlg = null; $('dialogo').classList.add('nascosto'); v[1](); if (fine) fine(); };
    $('scelte').appendChild(b);
  });
}

function negozio() {
  scelte({
    testo: 'Nila aspetta. I medikit costano 20, gli stim 15.',
    voci: [
      ['Medikit · 20', () => compra('medikit', 20)],
      ['Stim · 15', () => compra('stim', 15)],
      ['Basta così', () => salva()],
    ],
  });
}
function compra(id, prezzo) {
  if (S.soldi < prezzo) { parla([['NILA', 'Ti mancano i soldi. Torna quando il re è più povero.']], () => salva()); return; }
  S.soldi -= prezzo;
  S.oggetti[id] = (S.oggetti[id] || 0) + 1;
  salva();
  hud();
  parla([['NILA', 'Preso. Non sprecarlo sulla prima sbucciatura.']], () => {});
}

const NEMICI = { ratto: () => makeRatto(), gorm: () => makeGorm(), guardia: () => FABB.guardia() };
function apriBattaglia(gruppo, incontroId) {
  salva();
  const boss = gruppo.some((n) => n.boss);
  const id = incontroId || (boss ? 'gorm' : 'scontro');
  sessionStorage.setItem('pc_battaglia', JSON.stringify({
    from: 'fogne',
    incontroId: id,
    titolo: boss ? 'Re Gorm' : gruppo.map((n) => n.nome).filter((n, i, a) => a.indexOf(n) === i).join(' · '),
    party: S.party.map((p) => { const s = scheda(p); return { id: p.id, hp: p.hp, hpMax: s.hpMax, mp: p.mp, mpMax: s.mpMax, atk: s.atk, spd: s.spd, lv: s.lv }; }),
    oggetti: { medikit: S.oggetti.medikit || 0, stim: S.oggetti.stim || 0 },
    incontro: gruppo,
    alba: !!S.flag.braccio,
  }));
  location.href = '../battaglia/?da=fogne&v=7';
}
function round() {
  const viviE = bat.nemici.filter((n) => n.hp > 0);
  const viviP = S.party.filter((p) => p.hp > 0);
  if (!viviE.length) return vittoria();
  if (!viviP.length) return sconfitta();
  bat.coda = viviP.map((p) => ({ side: 'p', ref: p, spd: scheda(p).spd })).concat(viviE.map((n) => ({ side: 'e', ref: n, spd: n.spd || 8 })));
  bat.coda.sort((a, b) => b.spd - a.spd);
  bat.i = 0;
  passo();
}
function passo() {
  if (!bat) return;
  const viviE = bat.nemici.filter((n) => n.hp > 0);
  const viviP = S.party.filter((p) => p.hp > 0);
  if (!viviE.length) return vittoria();
  if (!viviP.length) return sconfitta();
  if (bat.i >= bat.coda.length) return round();
  const u = bat.coda[bat.i];
  if (u.ref.hp <= 0) { bat.i += 1; return passo(); }
  disegnaBat();
  if (u.side === 'e') {
    $('batComandi').innerHTML = '';
    setTimeout(() => colpoNemico(u.ref), 550);
  } else {
    comandi(u.ref);
  }
}
function disegnaBat() {
  const riga = (nome, hp, max, extra) => `<div class="chi"><b>${nome}</b> ${extra || ''}<div class="barra"><span style="width:${Math.max(0, hp / max * 100)}%"></span></div></div>`;
  $('batEroi').innerHTML = S.party.map((p) => { const s = scheda(p); return riga(s.nome, p.hp, s.hpMax, `Lv ${s.lv} · PM ${p.mp}`); }).join('');
  $('batNemici').innerHTML = bat.nemici.map((n) => riga(n.nome, n.hp, n.hpMax)).join('');
}
function comandi(p) {
  const s = scheda(p);
  const com = [['Attacca', () => colpoEroe(p, s.atk, `${s.nome} colpisce.`)], ['Difendi', () => { p.difesa = true; $('log').textContent = `${s.nome} si copre.`; bat.i += 1; passo(); }]];
  if (p.id === 'ras') com.push(['Taglio Alba', () => { if (p.mp < 6) return; p.mp -= 6; colpoEroe(p, s.atk + 8, 'Il Braccio Alba taglia.'); }]);
  if (p.id === 'kiri') com.push(['Rattoppo', () => { if (p.mp < 5) return; p.mp -= 5; const t = S.party.slice().sort((a, b) => a.hp - b.hp)[0]; const ts = scheda(t); t.hp = Math.min(ts.hpMax, t.hp + 34); $('log').textContent = 'Kiri chiude il taglio.'; bat.i += 1; passo(); }]);
  if (S.oggetti.medikit) com.push(['Medikit', () => { S.oggetti.medikit -= 1; p.hp = Math.min(s.hpMax, p.hp + 40); $('log').textContent = 'Medikit.'; bat.i += 1; passo(); }]);
  $('batComandi').innerHTML = '';
  com.forEach(([n, f]) => {
    const b = document.createElement('button');
    b.className = 'grosso';
    b.textContent = n;
    b.onclick = () => f();
    $('batComandi').appendChild(b);
  });
  $('log').textContent = `${s.nome}, tocca a te.`;
}
function bersaglio() { return bat.nemici.find((n) => n.hp > 0); }
function colpoEroe(p, potenza, frase) {
  const t = bersaglio();
  if (!t) return vittoria();
  const d = Math.max(1, potenza + Math.floor(Math.random() * 4) - t.def);
  t.hp -= d;
  if (t.mesh) { t.mesh.userData.mode = 'fight'; setTimeout(() => { if (t.mesh) t.mesh.userData.freeze = false; }, 400); }
  const ras = gente.find((g) => g.id === 'ras');
  if (ras) ras.mode = 'fight';
  $('log').textContent = `${frase} ${d} danni.`;
  $('batComandi').innerHTML = '';
  setTimeout(() => { if (ras) ras.mode = 'idle'; bat.i += 1; passo(); }, 480);
}
function colpoNemico(n) {
  const vivi = S.party.filter((p) => p.hp > 0);
  const t = vivi[Math.floor(Math.random() * vivi.length)];
  const s = scheda(t);
  let d = Math.max(1, n.atk + Math.floor(Math.random() * 3) - Math.floor(s.atk / 6));
  if (t.difesa) { d = Math.max(1, Math.floor(d / 2)); t.difesa = false; }
  t.hp = Math.max(0, t.hp - d);
  if (n.mesh) n.mesh.userData.mode = 'fight';
  $('log').textContent = `${n.nome} colpisce ${s.nome}: ${d}.`;
  setTimeout(() => { bat.i += 1; passo(); }, 500);
}
function vittoria() {
  const xp = bat.nemici.reduce((s, n) => s + (n.xp || 0), 0);
  const soldi = bat.nemici.reduce((s, n) => s + (n.soldi || 0), 0);
  const primaLv = S.party.map((p) => lvDi(p.xp));
  S.party.forEach((p) => {
    const primaMax = scheda(p).hpMax;
    p.xp += xp;
    const dopo = scheda(p);
    if (p.hp > 0) p.hp = Math.min(dopo.hpMax, p.hp + (dopo.hpMax - primaMax));
  });
  S.soldi += soldi;
  const su = S.party.some((p, i) => lvDi(p.xp) > primaLv[i]);
  const boss = bat.nemici.some((n) => n.boss);
  bat.nemici.forEach((n) => n.mesh && mondo.remove(n.mesh));
  bat = null;
  if ($('battaglia')) $('battaglia').classList.add('nascosto');
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  hud();
  salva();
  const extra = su ? ' La squadra sale di livello.' : '';
  if (boss) {
    S.flag.gormFatto = true;
    const g = gente.find((x) => x.id === 'gorm');
    if (g) g.m.visible = true;
    parla([['', `Gorm cede. +${soldi} soldi, +${xp} esperienza.${extra}`]], () => sceltaGorm());
    return;
  }
  parla([['', `Fine scontro. +${soldi} soldi, +${xp} esperienza.${extra}`]], () => {});
}
function sconfitta() {
  bat.nemici.forEach((n) => n.mesh && mondo.remove(n.mesh));
  bat = null;
  if ($('battaglia')) $('battaglia').classList.add('nascosto');
  S.party.forEach((p) => { const s = scheda(p); p.hp = Math.max(1, Math.floor(s.hpMax / 2)); });
  if (eroe) { eroe.position.z = Math.min(2.4, (STANZE[S.stanza].d / 2) - 0.8); S.z = eroe.position.z; }
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  salva();
  parla([['KIRI', 'Non qui. Ti tiro su. La prossima volta si para, non si fa i belli.']], () => {});
}
function sceltaGorm() {
  scelte({
    testo: 'Gorm è a terra, vivo. Ras deve scegliere. La scelta resta salvata.',
    voci: [
      ['Lo risparmio', () => {
        S.sceltaGorm = 'risparmia';
        chiudiCapitolo([['RAS', 'Vivi. E di’ a chi comanda che Ras ha scelto di non essere Zero.'], ['RE GORM', 'Peggio di una lama. Me lo segno.'], ['KIRI', 'Allora non siamo lui. Rust Alley è oltre quella porta, ma Brick non fa passare ancora.']]);
      }],
      ['Lo elimino', () => {
        S.sceltaGorm = 'elimina';
        const g = gente.find((x) => x.id === 'gorm');
        if (g) { mondo.remove(g.m); gente.splice(gente.indexOf(g), 1); }
        chiudiCapitolo([['RAS', 'Per Aram. Per Nadia. E perché tu non scelga al posto di un altro.'], ['', 'Gorm non si rialza. La scelta resta scritta.'], ['KIRI', 'Lo hai fatto tu, non Zero. Ricordatelo quando Rust Alley chiede il conto.']]);
      }],
    ],
  });
}
function chiudiCapitolo(linee) {
  S.flag.fine = true;
  salva();
  parla(linee, () => {
    costruisci('sala');
    $('fineTesto').textContent = S.sceltaGorm === 'risparmia'
      ? 'Hai risparmiato Re Gorm. Le Fogne restano sue di nome, non di tasca. La scelta è nel salvataggio.'
      : 'Hai eliminato Re Gorm. Le Fogne non hanno più un re. La scelta è nel salvataggio.';
    $('fine').classList.remove('nascosto');
    $('joy').classList.add('nascosto');
    $('azione').classList.add('nascosto');
    modo = 'fine';
  });
}

const PROLOGO = [
  { luce: 0x4a1020, gente: [['aram', -0.7, 0.15, 0.15], ['nadia', 0.15, 0.05, -0.1], ['rasIntero', 0.85, 0.2, -0.35]], linee: [
    ['ARAM', 'Stanotte il vicolo è troppo quieto, Ras. I Varga non pagano il silenzio.'],
    ['NADIA', 'Tuo padre diceva: se il neon trema, qualcuno ha già deciso.'],
    ['RAS', 'Aram, porta Nadia verso il covo. Io chiudo la strada.']] },
  { luce: 0x6a1020, gente: [['aram', -0.85, 0.1, 0.2], ['nadia', 0.15, -0.05, 0], ['rasIntero', 0.9, 0.15, -0.4], ['zero', 0.05, 1.15, 3.05]], linee: [
    ['ZERO HOLLOW', 'Zero Hollow. Non è un nome. È quello che resta quando una famiglia finisce.'],
    ['ARAM', 'Ras, indietro—'],
    ['', 'Due lampi. Aram e Nadia cadono. Zero non li guarda più.']] },
  { luce: 0x6a0814, gente: [['rasFerito', 0.2, 0.2, 0], ['zero', -0.6, 1.1, 2.8]], linee: [
    ['ZERO HOLLOW', 'Tu no. Tu devi ricordare chi ha spento i tuoi.'],
    ['', 'La lama gli prende il braccio sinistro. Lo lascia vivo, nella notte rossa.']] },
  { luce: 0x102028, gente: [['rasFerito', 0.4, 0.2, 0.2], ['kiri', -0.8, 0.6, 0.8]], linee: [
    ['KIRI', 'Ras. Resta qui. Non chiudere gli occhi. Ti porto da chi non fa domande.'],
    ['RAS', 'Aram… Nadia…']] },
  { luce: 0x103038, gente: [['ras', 0.35, 0.15, -0.2], ['medico', -0.55, 0.05, 0.45], ['kiri', -1.05, 0.35, 0.15]], linee: [
    ['DOTTOR SEME', 'Il braccio vecchio è andato. Questo è il Braccio Alba. Obbedisce a te, non a lui.'],
    ['RAS', 'Pesa come un debito. Va bene. I debiti li riscuoto.'],
    ['KIRI', 'Allora si scende. Le Fogne tengono i soldi di Re Gorm.']] },
];
let passoPrologo = 0;
function avviaPrologo() {
  modo = 'prologo';
  $('titolo').classList.add('nascosto');
  $('hud').classList.remove('nascosto');
  $('joy').classList.add('nascosto');
  passoPrologo = 0;
  scenaPrologo();
}
function scenaPrologo() {
  const p = PROLOGO[passoPrologo];
  svuota();
  renderer.setClearColor(p.luce);
  box(8, 0.2, 6, p.luce, 0, -0.1, 0);
  p.gente.forEach(([id, x, z, ry]) => metti(id, x, z, ry, FABB[id]));
  $('luogo').textContent = 'Prologo · La notte rossa';
  parla(p.linee, () => {
    passoPrologo += 1;
    if (passoPrologo < PROLOGO.length) scenaPrologo();
    else {
      S.prologo = true;
      S.flag.braccio = true;
      S.stanza = 'infermeria';
      S.x = 0; S.z = 1.6;
      modo = 'gioco';
      $('joy').classList.remove('nascosto');
      salva();
      costruisci('infermeria');
      parla(TESTI.kiri(), () => {});
    }
  });
}

function apriPausa() {
  if (modo !== 'gioco' || dlg || bat) return;
  modo = 'pausa';
  $('pausa').classList.remove('nascosto');
  mostraScheda('squadra');
}
function mostraScheda(quale) {
  const nomi = [['squadra', 'Squadra'], ['oggetti', 'Oggetti'], ['salva', 'Salva'], ['opzioni', 'Opzioni']];
  $('schedePausa').innerHTML = '';
  nomi.forEach(([id, n]) => {
    const b = document.createElement('button');
    b.textContent = n;
    b.className = id === quale ? 'on' : '';
    b.onclick = () => mostraScheda(id);
    $('schedePausa').appendChild(b);
  });
  const el = $('corpoPausa');
  if (quale === 'squadra') {
    el.innerHTML = S.party.map((p) => { const s = scheda(p); return `<p><b>${s.nome}</b> · livello ${s.lv}<br>${p.hp}/${s.hpMax} PV · ${p.mp}/${s.mpMax} PM · attacco ${s.atk}</p>`; }).join('')
      + `<p>${S.flag.lyra ? 'Lyra l’hai incontrata al mercato. Non è ancora in squadra.' : 'Lyra non l’hai ancora incontrata.'}<br>${S.flag.sable ? 'Sable tiene la passerella. Requiem resta suo.' : 'Sable non l’hai ancora vista.'}</p>`
      + `<p>Scelta su Gorm: ${S.sceltaGorm === 'risparmia' ? 'risparmiato' : S.sceltaGorm === 'elimina' ? 'eliminato' : 'ancora da fare'}.</p>`;
  } else if (quale === 'oggetti') {
    el.innerHTML = '';
    const usa = (id, label) => {
      const b = document.createElement('button');
      b.textContent = `${label} ×${S.oggetti[id] || 0}`;
      b.disabled = !(S.oggetti[id] > 0);
      b.onclick = () => {
        const p = S.party[0];
        const s = scheda(p);
        if (id === 'medikit') p.hp = Math.min(s.hpMax, p.hp + 40);
        else p.mp = Math.min(s.mpMax, p.mp + 12);
        S.oggetti[id] -= 1;
        salva(); hud(); mostraScheda('oggetti');
      };
      el.appendChild(b);
    };
    usa('medikit', 'Medikit');
    usa('stim', 'Stim');
    el.insertAdjacentHTML('beforeend', '<p>Il medikit cura Ras. Lo stim gli rende i PM.</p>');
  } else if (quale === 'salva') {
    salva();
    el.innerHTML = '<p>Partita salvata su questo telefono. Il gioco salva da solo a ogni stanza, dopo uno scontro e quando scegli su Gorm.</p>';
  } else {
    el.innerHTML = '';
    const b = document.createElement('button');
    b.textContent = muto ? 'Musica: spenta' : 'Musica: accesa';
    b.onclick = () => { muto = !muto; if (audioCtx) audioCtx.suspend && (muto ? audioCtx.suspend() : audioCtx.resume()); mostraScheda('opzioni'); };
    el.appendChild(b);
  }
}

const tasti = {};
function loop(ms) {
  try { frame(ms); }
  catch (err) { window.__punk = { errore: String(err && err.stack || err) }; }
  requestAnimationFrame(loop);
}
function frame(ms) {
  const dt = Math.min(0.05, (ms - (loop.t || ms)) / 1000);
  loop.t = ms;
  tempo += dt;
  if (modo === 'gioco') cammina(dt);
  gente.forEach((g) => anima(g.m, tempo + (g.x || 0), g.mode || 'idle'));
  if (bat) bat.nemici.forEach((n) => n.mesh && anima(n.mesh, tempo, 'idle'));
  if (eroe) {
    const dest = new THREE.Vector3(eroe.position.x + 2.8, 3.35, eroe.position.z + 3.9);
    cam.position.lerp(dest, 0.12);
    cam.lookAt(eroe.position.x - 0.3, 0.85, eroe.position.z - 0.4);
    if (S && S.flag.braccio) { luceAlba.intensity = 1.2; eroe.userData.armL.end.getWorldPosition(luceAlba.position); }
    else luceAlba.intensity = 0;
  } else {
    cam.position.set(2.6, 3.1, 4.0);
    cam.lookAt(-0.2, 0.9, -0.3);
  }
  renderer.render(scena, cam);
}

function nuova() {
  if (carica() && !confirm('C’è già una partita su questo telefono. La nuova la sostituisce.')) return;
  S = base();
  localStorage.removeItem(CHIAVE);
  musica();
  avviaPrologo();
}
function continua() {
  S = carica();
  if (!S) return;
  musica();
  $('titolo').classList.add('nascosto');
  $('hud').classList.remove('nascosto');
  if (!S.prologo) avviaPrologo();
  else { modo = 'gioco'; $('joy').classList.remove('nascosto'); costruisci(S.stanza); }
}

function applicaEsito() {
  let E;
  try { E = JSON.parse(sessionStorage.getItem('pc_battaglia_esito') || 'null'); } catch { E = null; }
  if (!E) return false;
  sessionStorage.removeItem('pc_battaglia_esito');
  S = carica();
  if (!S) return false;
  musica();
  $('titolo').classList.add('nascosto');
  $('hud').classList.remove('nascosto');
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  if (E.party) {
    E.party.forEach((up) => {
      const p = S.party.find((x) => x.id === up.id);
      if (p) { p.hp = Math.max(0, up.hp); p.mp = Math.max(0, up.mp); }
    });
  }
  if (E.oggetti) {
    S.oggetti.medikit = E.oggetti.medikit || 0;
    S.oggetti.stim = E.oggetti.stim || 0;
  }
  costruisci(S.stanza);
  hud();
  bat = { nemici: (E.incontro || []).map((n) => ({ ...n, mesh: null })) };
  if (E.ok) vittoria();
  else sconfitta();
  return true;
}

function bind() {
  if (applicaEsito()) return;
  const salvaNota = carica();
  $('continua').disabled = !salvaNota;
  $('notaSalva').textContent = salvaNota ? `Salvataggio: ${STANZE[salvaNota.stanza]?.nome || 'in corso'}${salvaNota.sceltaGorm ? ' · scelta su Gorm fatta' : ''}` : 'Nessuna partita salvata.';
  $('nuova').onclick = nuova;
  $('continua').onclick = continua;
  $('dialogo').onclick = avanza;
  $('azione').onclick = (e) => { e.stopPropagation(); interagisci(); };
  $('pausaBtn').onclick = apriPausa;
  $('chiudiPausa').onclick = () => { modo = 'gioco'; $('pausa').classList.add('nascosto'); };
  $('tornaTitolo').onclick = () => location.reload();
  addEventListener('keydown', (e) => {
    tasti[e.key] = true;
    if (e.key === 'Enter' || e.key === ' ') { if (dlg) avanza(); else if (vicino) interagisci(); }
    if (e.key === 'Escape') { if (modo === 'pausa') $('chiudiPausa').click(); else apriPausa(); }
  });
  addEventListener('keyup', (e) => { tasti[e.key] = false; });
  const zona = $('joy');
  const pomo = $('pomello');
  function setJoy(cx, cy, on) {
    const r = zona.getBoundingClientRect();
    const dx = Math.max(-1, Math.min(1, (cx - (r.left + r.width / 2)) / (r.width / 2)));
    const dy = Math.max(-1, Math.min(1, (cy - (r.top + r.height / 2)) / (r.height / 2)));
    joy = { on, x: dx, y: dy };
    const pad = zona.getBoundingClientRect().width;
    const knob = pomo.getBoundingClientRect().width || pad * 0.44;
    const mid = (pad - knob) / 2;
    const travel = pad * 0.24;
    pomo.style.left = (mid + dx * travel) + 'px';
    pomo.style.top = (mid + dy * travel) + 'px';
  }
  zona.addEventListener('pointerdown', (e) => { zona.setPointerCapture(e.pointerId); setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointermove', (e) => { if (joy.on) setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointerup', () => { joy = { on: false, x: 0, y: 0 }; const pad = zona.getBoundingClientRect().width; const knob = pomo.offsetWidth || pad * 0.44; const mid = (pad - knob) / 2; pomo.style.left = mid + 'px'; pomo.style.top = mid + 'px'; });
  addEventListener('pointerdown', () => musica(), { once: true });
}

init3d();
bind();
cam.position.set(2.6, 3.1, 4.0);
requestAnimationFrame(loop);
