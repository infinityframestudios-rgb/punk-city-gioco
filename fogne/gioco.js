import * as THREE from '../lib/three.module.min.js';
import { makeRas, makeKiri, makeLyra, makeSable, makeMedico, makeZero, makeGorm, makeBrick, makeRatto, makeCittadino, makeVex, makeMercante, anima } from '../lib/pc-models.js';

const CHIAVE = 'punkcity-cap2-v1';
const $ = (id) => document.getElementById(id);
const FABB = {
  ras: (o) => makeRas(o || { sword: 'back' }),
  rasIntero: () => makeRas({ sword: 'hand', alba: false }),
  rasFerito: () => { const m = makeRas({ sword: 'back', alba: false }); m.userData.armR.g.visible = false; return m; },
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
  varga: () => makeCittadino(0x1a1a22, 0xb09078),
  teo: () => makeCittadino(0x3a2830, 0xd8b8a0),
  esattore: () => makeCittadino(0x5a1828, 0xc89878),
  fabbro: () => makeCittadino(0x2a2420, 0xc4a088),
  lavandaia: () => makeCittadino(0x204038, 0xe0b090),
  ragazzo: () => makeCittadino(0x243044, 0xe8c0a0),
  vecchio: () => makeCittadino(0x302418, 0xd0a888),
  sordo: () => makeCittadino(0x1c2430, 0xc8b098),
  debitore: () => makeCittadino(0x3a3038, 0xd0b0a0),
  debitoreb: () => makeCittadino(0x2a2830, 0xc8a890),
  edda: () => makeCittadino(0x3a3040, 0xe4c8b8),
  ruggine: () => makeCittadino(0x4a3020, 0xc8a080),
  vex: () => makeVex(),
  mercante: () => makeMercante(),
  banditore: () => makeCittadino(0x3a2848, 0xd8b8a0),
};

const STANZE = {
  infermeria: { nome: 'Clinica clandestina', w: 7, d: 6, pav: 0x8a6a72, muro: 0x6d5560, aria: 0x4a343c, neon: 0x7ef6d8, caldo: 0xffc48a, spawn: [0, 1.6],
    gente: [['medico', 1.2, -1.2, -0.4]],
    porte: [[3.1, 0, 'mercato', 'Mercato']] },
  mercato: { nome: 'Mercato sotto il ponte', w: 11, d: 8, pav: 0x9a5c64, muro: 0x724650, aria: 0x5a3038, neon: 0xff5fa8, caldo: 0xffb060, spawn: [-3.2, 1.6],
    gente: [['teo', -1.6, -2.2, 0.5], ['fabbro', 0.2, -2.3, 0.4], ['lavandaia', 2.2, -1.8, -0.6], ['ragazzo', 3.2, 0.2, 2.2], ['vecchio', -3.2, -0.4, 1.2], ['esattore', 1.2, 1.4, 3]],
    porte: [[-4.8, 0, 'infermeria', 'Clinica'], [4.6, 0, 'rifugio', 'Cisterna', 'dettoVoci'], [0, -3.4, 'sala', 'Chiatta', 'mattina']] },
  rifugio: { nome: 'Cisterna vuota', w: 6, d: 6, pav: 0x6e5664, muro: 0x584450, aria: 0x3e3038, neon: 0x8ef6ff, caldo: 0xffd0a8, spawn: [0, 1.6],
    gente: [['kiri', 0, -1.2, 0.4]],
    porte: [[0, 2.5, 'mercato', 'Mercato'], [2.5, 0, 'pozzo', 'Il Pozzo', 'kiriCisterna']] },
  pozzo: { nome: 'Il Pozzo', w: 8, d: 8, pav: 0x8a6244, muro: 0x6a4c34, aria: 0x4a3424, neon: 0xffd98a, caldo: 0xffe0b0, spawn: [0, 2.4],
    gente: [['sordo', 0, -1.3, 0.2]],
    porte: [[0, 3.4, 'rifugio', 'Cisterna'], [3.4, 0, 'sala', 'Chiatta di Gorm', 'registro']] },
  sala: { nome: 'Chiatta di Re Gorm', w: 8, d: 8, pav: 0x7a3e48, muro: 0x5e323c, aria: 0x421820, neon: 0xff4d6a, caldo: 0xffb070, spawn: [0, 2.4],
    gente: [], boss: true,
    porte: [[-3.4, 0, 'pozzo', 'Pozzo'], [0, 3.4, 'mercato', 'Mercato', 'mattina'], [0, -3.2, 'cortile', 'Rust Alley', 'uomini'], [3.4, 0, 'galleria', 'Mercato Nero', 'cap2']] },
  cortile: { nome: 'Rust Alley, cortile', w: 8, d: 8, pav: 0x3a2418, neon: 0xff8844, spawn: [0, 2.4],
    gente: [['brick', 0.2, -1.2, 0.3], ['debitore', -1.3, -1.5, 0.2], ['debitoreb', 1.4, -0.8, -0.4]],
    porte: [[0, 3.4, 'sala', 'Chiatta'], [3.3, 0, 'casa', 'Casa di Edda', 'brickVisto'], [-3.3, 0, 'scale', 'Scale', 'edda']] },
  casa: { nome: 'Casa della signora Edda', w: 6, d: 6, pav: 0x2a2430, neon: 0xc8a0ff, spawn: [0, 1.6],
    gente: [['edda', 0, -1.1, 0.2]],
    porte: [[0, 2.5, 'cortile', 'Cortile']] },
  scale: { nome: 'Scale della palazzina', w: 5, d: 7, pav: 0x241810, neon: 0xffaa66, spawn: [0, 2],
    gente: [['brick', 0, -1.2, 0.2]],
    porte: [[0, 2.8, 'cortile', 'Cortile'], [0, -2.8, 'magazzino', 'Magazzino', 'brickUnito']] },
  magazzino: { nome: 'Magazzino di Madre Ruggine', w: 9, d: 8, pav: 0x2a1c14, neon: 0xff6633, spawn: [0, 2.4],
    gente: [['ruggine', 0, -1.6, 0.2], ['guardia', -1.6, -0.8, 0.8], ['guardia', 1.5, -0.7, -0.6], ['kiri', 1.2, 1.2, 2.6]],
    porte: [[0, 3.4, 'scale', 'Scale'], [0, -3.3, 'tetti', 'Tetti', 'ruggine']] },
  tetti: { nome: 'Tetti di Rust Alley', w: 8, d: 10, pav: 0x1a2030, neon: 0x66ccff, spawn: [0, 3.2],
    gente: [['zero', 0, -2.4, 0.2], ['kiri', -2.2, 1.4, 1]],
    porte: [[0, 4.2, 'magazzino', 'Magazzino'], [0, -4.2, 'sala', 'Chiatta', 'zeroFatto'], [3.4, 0, 'galleria', 'Mercato Nero', 'cap2']] },
  galleria: { nome: 'Mercato Nero, galleria', w: 9, d: 7, pav: 0x6e4e86, muro: 0x523e68, aria: 0x382848, neon: 0xd090ff, caldo: 0xffb48a, spawn: [0, 2.2],
    gente: [['vex', 0, -1.4, 0.2], ['kiri', -1.6, 1.2, 0.8], ['brick', 1.5, 1.1, -0.4]],
    porte: [[0, 3.1, 'tetti', 'Tetti'], [0, -3.1, 'piazza', 'Piazza delle aste', 'patto']] },
  piazza: { nome: 'Piazza delle aste', w: 8, d: 8, pav: 0x8a5460, muro: 0x624048, aria: 0x4a3038, neon: 0xffd98a, caldo: 0xffc070, spawn: [0, 2.4],
    gente: [['banditore', 0, -1.3, 0.2]],
    porte: [[0, 3.4, 'galleria', 'Galleria'], [0, -3.3, 'caveau', 'Caveau', 'treChiavi']],
    codice: [2.4, 0.4] },
  caveau: { nome: 'Caveau', w: 8, d: 8, pav: 0x52426e, muro: 0x3e3458, aria: 0x2c2440, neon: 0x9af0ff, caldo: 0xffe0a8, spawn: [0, 2.4],
    gente: [['mercante', 0, -1.8, 0.2]],
    porte: [[0, 3.4, 'piazza', 'Piazza']] },
};

let S = null;
let modo = 'titolo';
let tempo = 0;
let mondo, eroe, cam, renderer, scena, luceAlba;
const gente = [];
const porte = [];
let casseMesh, codiceMesh = null;
let joy = { on: false, x: 0, y: 0 };
let vicino = null;
let dlg = null;
let bat = null;
let audioCtx = null;
let muto = false;

function base() {
  return {
    v: 2, prologo: false, stanza: 'infermeria', x: 0, z: 1.6, soldi: 15, rispetto: 0,
    oggetti: { medikit: 1, stim: 0, registro: 0, chiave: 0 },
    party: [{ id: 'ras', xp: 0, hp: 96, mp: 22 }, { id: 'kiri', xp: 0, hp: 84, mp: 28 }],
    flag: {}, sceltaGorm: null, sceltaRuggine: null, covo: null,
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
  const basi = {
    ras: { hp: 96, atk: 14, mp: 22, spd: 11, nome: 'Ras' },
    kiri: { hp: 84, atk: 11, mp: 28, spd: 13, nome: 'Kiri' },
    brick: { hp: 120, atk: 16, mp: 8, spd: 8, nome: 'Brick' },
    vex: { hp: 72, atk: 10, mp: 36, spd: 14, nome: 'Vex' },
  };
  const b = basi[p.id] || basi.ras;
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
  renderer.setClearColor(0x070308);
  scena = new THREE.Scene();
  scena.fog = new THREE.Fog(0x140810, 8, 22);
  cam = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 40);
  scena.add(new THREE.AmbientLight(0xb7a8c4, 1.15));
  const dir = new THREE.DirectionalLight(0xfff0f4, 1.25);
  dir.position.set(2, 6, 3);
  scena.add(dir);
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
  codiceMesh = null;
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
  const aria = st.aria || st.pav;
  scena.fog.color.setHex(aria);
  scena.fog.near = st.aria ? 12 : 8;
  scena.fog.far = st.aria ? 32 : 22;
  renderer.setClearColor(aria);
  const muro = st.muro || 0x2c2230;
  box(st.w, 0.2, st.d, st.pav, 0, -0.1, 0);
  box(st.w, 1.6, 0.2, muro, 0, 0.8, -st.d / 2);
  box(st.w, 1.6, 0.2, muro, 0, 0.8, st.d / 2);
  box(0.2, 1.6, st.d, muro, -st.w / 2, 0.8, 0);
  box(0.2, 1.6, st.d, muro, st.w / 2, 0.8, 0);
  const neonMat = new THREE.MeshBasicMaterial({ color: st.neon });
  const neon = new THREE.Mesh(new THREE.BoxGeometry(st.w * 0.72, 0.07, 0.07), neonMat);
  neon.position.set(0, 1.72, -st.d / 2 + 0.16);
  mondo.add(neon);
  if (st.caldo) {
    const lato = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, st.d * 0.55), new THREE.MeshBasicMaterial({ color: st.caldo }));
    lato.position.set(-st.w / 2 + 0.16, 1.45, 0);
    mondo.add(lato);
    const pozza = box(1.7, 0.04, 1.5, st.caldo, -st.w * 0.22, 0.02, 0.15);
    pozza.material = new THREE.MeshBasicMaterial({ color: st.caldo });
    const lampada = new THREE.PointLight(st.caldo, 3.2, 11);
    lampada.position.set(-st.w * 0.22, 1.5, 0.15);
    mondo.add(lampada);
  }
  const fill = new THREE.PointLight(st.neon, st.caldo ? 5.5 : 2.4, st.caldo ? 20 : 14);
  fill.position.set(0.4, 1.7, -0.4);
  mondo.add(fill);
  tubo(st.w / 2 - 0.4, -1);
  const rasFab = S.flag.braccio ? () => makeRas({ sword: 'back' }) : FABB.rasFerito;
  if (modo !== 'prologo') {
    const r = metti('ras', S.x, S.z, Math.PI, rasFab);
    eroe = r.m;
  }
  (st.gente || []).forEach(([chi, x, z, ry]) => {
    if (id === 'mercato' && chi === 'esattore' && S.flag.mercatoIntro) return;
    if ((id === 'cortile' || id === 'scale') && chi === 'brick' && S.flag.brickUnito) return;
    if (id === 'scale' && chi === 'brick' && !S.flag.edda) return;
    if (id === 'magazzino' && S.flag.brickUnito && chi === 'kiri') metti('brick', -1.3, 1.1, 0.4);
    if (id === 'caveau' && chi === 'mercante' && S.flag.mercanteFatto) return;
    metti(chi, x, z, ry);
  });
  if (st.casse && !S.flag.casse) {
    casseMesh = box(0.9, 0.55, 0.6, 0xc8a24a, st.casse[0], 0.28, st.casse[1]);
  }
  if (st.codice && S.flag.pass && !S.flag.codice) {
    codiceMesh = box(0.28, 0.12, 0.18, 0xffd27a, st.codice[0], 0.2, st.codice[1]);
  }
  (st.porte || []).forEach(([x, z, verso, nome, serve]) => {
    if (serve && !S.flag[serve]) return;
    const p = box(0.7, 1.2, 0.15, 0x3a2030, x, 0.6, z);
    porte.push({ x, z, verso, nome, mesh: p });
  });
  if (id === 'sala' && !S.flag.gormFatto) metti('gorm', 0, -1.6, 0.4);
  else if (id === 'sala' && S.sceltaGorm === 'risparmia') metti('gorm', 0, -1.6, 0.4);
  if (id === 'sala' && S.flag.mattina && S.sceltaGorm !== 'risparmia') metti('sordo', 1.15, -1.1, -0.2);
  if (id === 'sala' && S.flag.zeroFatto) {
    if (!gente.some((g) => g.id === 'kiri')) metti('kiri', -1.2, 0.5, 0.6);
    if (!gente.some((g) => g.id === 'brick')) metti('brick', 1.15, 0.4, -0.5);
  }
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
    apriBattaglia([{ id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 8, soldi: 14, xp: 20 }, { id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 7, soldi: 14, xp: 20 }]);
  }
  if (S.stanza === 'sala' && S.flag.registro && !S.flag.gormFatto && !S.flag.mattina && Math.abs(eroe.position.z) < 0.6) {
    eroe.position.z = 1.6;
    parla([
      ['GORM', 'Il figlio dell\'ingegnere. Con il braccio che vale un quartiere.'],
      ['RAS', 'Vale di più.'],
      ['GORM', 'Tutto vale quanto qualcuno paga. È l\'unica legge che conosco.'],
      ['RAS', 'Allora te ne insegno un\'altra.'],
      ['GORM', 'Sentiamo.'],
      ['RAS', 'Stanotte il mercato non ti paga. Domani nemmeno. Il terzo esattore ti ruba da due anni e i Varga sanno quanto prendi meglio di te.'],
      ['', '…'],
      ['GORM', 'Tu hai preso il mio registro.'],
      ['RAS', 'L\'ho letto. Ci sono i nomi di chi ha portato via i miei.'],
      ['GORM', 'Era lavoro.'],
      ['RAS', 'Anche questo.'],
    ], () => apriBattaglia([
      { id: 'gorm', nome: 'Re Gorm', hp: 120, atk: 13, def: 4, spd: 7, soldi: 80, xp: 70, boss: 1 },
      { id: 'guardia', nome: 'Guardia di Gorm', hp: 48, atk: 10, def: 3, spd: 6, soldi: 16, xp: 22 },
    ], 'gorm'));
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
  if (codiceMesh) {
    const d = Math.hypot(codiceMesh.position.x - eroe.position.x, codiceMesh.position.z - eroe.position.z);
    if (d < best) vicino = { id: 'codice' };
  }
  $('azione').classList.toggle('nascosto', !vicino);
  $('azione').textContent = vicino && (vicino.id === 'casse' || vicino.id === 'codice') ? 'Apri' : 'Parla';
}

function entra(id) {
  if (!STANZE[id]) return;
  if (id === 'sala' && !S.flag.registro && !S.flag.mattina) return;
  S.stanza = id;
  const st = STANZE[id];
  S.x = st.spawn[0];
  S.z = st.spawn[1];
  salva();
  costruisci(id);
  dopoEntrata(id);
}

function dopoEntrata(id) {
  if (modo !== 'gioco') return;
  if (id === 'mercato' && !S.flag.mercatoIntro) return scenaMercato();
  if (id === 'mercato' && S.sceltaGorm && !S.flag.mattina) return scenaMattina();
  if (id === 'rifugio' && S.flag.dettoVoci && !S.flag.kiriCisterna) return scenaKiri();
  if (id === 'pozzo' && S.flag.kiriCisterna && !S.flag.registro) return scenaSordo();
  if (id === 'sala' && S.flag.mattina && !S.flag.uomini) return scenaUomini();
  if (id === 'cortile' && S.flag.uomini && !S.flag.brickVisto) return scenaBrick();
  if (id === 'casa' && S.flag.brickVisto && !S.flag.edda) return scenaEdda();
  if (id === 'scale' && S.flag.edda && !S.flag.brickUnito) return scenaScale();
  if (id === 'magazzino' && S.flag.brickUnito && !S.flag.ruggineVista) return scenaRuggine();
  if (id === 'tetti' && S.flag.ruggine && !S.flag.zeroFatto) return scenaZero();
  if (id === 'sala' && S.flag.zeroFatto && !S.flag.cap2) return scenaFine2();
  if (id === 'galleria' && S.flag.cap2 && !S.flag.patto) return scenaVex();
  if (id === 'piazza' && S.flag.patto && !S.flag.pass) return scenaBanditore();
  if (id === 'caveau' && S.flag.treChiavi && !S.flag.mercanteFatto) return scenaCaveau();
  if (id === 'galleria' && S.flag.cilindro && !S.flag.vexUnita) return scenaVexDopo();
}

const VEND = {
  fabbro: [
    ['IL FABBRO', 'Paghiamo il venerdì. Gli esattori sono tre. Il terzo ruba anche a Gorm, e Gorm non lo sa.'],
    ['RAS', 'Come lo sai tu?'],
    ['IL FABBRO', 'Perché da me prende due volte.'],
  ],
  lavandaia: [
    ['LA LAVANDAIA', 'Mio figlio lavora al Pozzo. Conta le monete. Se lo nomini, ti ammazzo io prima di Gorm.'],
    ['RAS', 'Non lo nomino.'],
    ['LA LAVANDAIA', 'Lo dicono tutti.'],
    ['RAS', 'Io no.'],
  ],
  ragazzo: [
    ['IL RAGAZZO DEI TUBI', 'Gorm vuole il tuo braccio. Ha detto che con quei soldi compra tutto il quartiere est.'],
    ['RAS', 'Chi gliel\'ha detto, del braccio?'],
    ['IL RAGAZZO DEI TUBI', 'Il medico ha la porta sottile. E la gente ha fame.'],
  ],
  vecchio: [
    ['IL VECCHIO DEL PONTE', 'Tuo padre una volta mi ha detto che le città non le comanda chi ha le armi. Le comanda chi ha i registri.'],
    ['RAS', 'E Gorm ce li ha?'],
    ['IL VECCHIO DEL PONTE', 'Gorm ha un solo registro. E un solo uomo che lo tiene.'],
  ],
};

function scenaMercato() {
  S.flag.mercatoIntro = true;
  salva();
  parla([
    ['ESATTORE', 'Teo. Settimana.'],
    ['TEO', 'Ho pagato martedì.'],
    ['ESATTORE', 'Martedì era martedì. Oggi Gorm ha alzato.'],
    ['', 'Teo apre una scatola di latta. Dentro poche monete. L\'esattore le prende tutte.'],
    ['ESATTORE', 'Manca la metà. Giovedì la metà più la metà.'],
    ['', 'Se ne va.'],
    ['RAS', 'Quanto alza?'],
    ['TEO', 'Quanto vuole. Tu sei il figlio dell\'ingegnere.'],
    ['RAS', 'Lo ero.'],
    ['TEO', 'Tua madre mi aggiustava la pompa gratis. Non diceva mai niente. Lasciava l\'attrezzo sul banco e se ne andava.'],
    ['RAS', 'Chi ha portato via i corpi?'],
    ['', '…'],
    ['TEO', 'Non qui.'],
    ['RAS', 'Allora dimmi dove.'],
    ['TEO', 'Al Pozzo. Dove Gorm conta i soldi. Ma ragazzo… tu da solo sei un\'altra cosa che Gorm vende.'],
    ['RAS', 'Lo so. Per questo prima ascolto.'],
    ['', 'Missione: Chi paga, chi ha paura. Parla con i venditori del mercato. Ognuno ti dà un pezzo del giro di Gorm.'],
  ], () => { costruisci('mercato'); });
}
function scenaKiri() {
  S.flag.kiriCisterna = true;
  salva();
  parla([
    ['RAS', 'Sei tu.'],
    ['KIRI', 'Sei vivo. Non era scontato.'],
    ['RAS', 'Perché mi hai salvato?'],
    ['KIRI', 'Perché eri per terra.'],
    ['RAS', 'Ce n\'è tanta, di gente per terra, nelle Fogne.'],
    ['', '…'],
    ['KIRI', 'Gorm sa dove dormi. Domani manda qualcuno.'],
    ['RAS', 'Lo so.'],
    ['KIRI', 'E allora?'],
    ['RAS', 'Allora domani non dormo qui. Dormo dove tiene il registro.'],
    ['KIRI', 'Non vuoi ammazzarlo?'],
    ['RAS', 'Voglio che smetta di contare. Il resto viene dopo.'],
    ['KIRI', 'Ti serve qualcuno che apra le porte.'],
    ['RAS', 'Me lo stai offrendo?'],
    ['KIRI', 'Te lo sto dicendo. Decidi tu cosa farci.'],
  ], () => salva());
}
function scenaSordo() {
  S.flag.registro = true;
  S.oggetti.registro = 1;
  salva();
  parla([
    ['SORDO', 'Non ho sentito entrare nessuno.'],
    ['RAS', 'Non dovevi.'],
    ['SORDO', 'Se mi uccidi, Gorm ne mette un altro domani.'],
    ['RAS', 'Non ti uccido. Ti chiedo quanto prende Gorm dal mercato.'],
    ['SORDO', 'Il doppio di quanto dice.'],
    ['RAS', 'E quanto passa ai Varga?'],
    ['SORDO', 'Come sai dei Varga?'],
    ['RAS', 'Tu sai contare. Io so ascoltare.'],
    ['', '…'],
    ['RAS', 'Il registro.'],
    ['SORDO', 'Se te lo do, sono morto.'],
    ['RAS', 'Se non me lo dai, domani Gorm saprà che il terzo esattore ruba, e che tu lo sapevi. Così sei morto lo stesso, ma per una cosa che non hai fatto.'],
    ['', 'Sordo guarda Kiri. Kiri non si muove.'],
    ['SORDO', 'Cosa mi dai?'],
    ['RAS', 'Un motivo per restare vivo. È più di quello che ti dà lui.'],
    ['', 'Sordo spinge il registro sul tavolo. Bottino: Registro di Gorm.'],
  ], () => { hud(); salva(); });
}
function scenaMattina() {
  S.flag.mattina = true;
  salva();
  parla([
    ['TEO', 'Giovedì cosa paghiamo?'],
    ['RAS', 'Quello che potete. A me.'],
    ['TEO', 'E cosa cambia?'],
    ['RAS', 'Che se uno vi tocca, lo sa a chi deve rispondere.'],
    ['TEO', 'Gorm diceva la stessa cosa.'],
    ['RAS', 'Gorm non mantiene.'],
    ['', '…'],
    ['TEO', 'La prima è per tua madre.'],
    ['', 'Ras prende la moneta. Kiri lo guarda dal ponte.'],
    ['KIRI', 'Adesso ti conoscono.'],
    ['RAS', 'E adesso cosa succede?'],
    ['KIRI', 'Adesso ti cercano.'],
  ], () => scelte({
    testo: 'Covo: la chiatta di Gorm. Bottino: Corona di Bulloni.',
    voci: [
      ['Base al mercato', () => { S.covo = 'base'; S.soldi += 40; S.oggetti.corona = 1; salva(); }],
      ['Traghetto', () => { S.covo = 'traghetto'; S.soldi += 40; S.oggetti.corona = 1; salva(); }],
      ['Smantella', () => { S.covo = 'smantella'; S.soldi += 90; S.oggetti.corona = 1; salva(); }],
    ],
  }));
}
function scenaUomini() {
  S.flag.uomini = true;
  salva();
  const secondo = S.sceltaGorm === 'risparmia'
    ? ['GORM', 'Ti servono soldi, prima.']
    : ['SORDO', 'Ti servono soldi, prima.'];
  parla([
    ['RAS', 'Mi servono uomini.'],
    secondo,
    ['RAS', 'I soldi si trovano. Gli uomini che restano no.'],
    ['KIRI', 'A Rust Alley c\'è uno grosso. Picchia per chi paga.'],
    ['RAS', 'Chi paga?'],
    ['KIRI', 'Gente che lui disprezza. Lo si vede da come chiude la porta quando esce.'],
    ['RAS', 'Perché lo fa, allora?'],
    ['KIRI', 'Vai a vedere.'],
  ], () => costruisci('sala'));
}
function scenaBrick() {
  S.flag.brickVisto = true;
  salva();
  parla([
    ['BRICK', 'Mi hanno detto di farti male. Dammi un motivo per non farlo.'],
    ['DEBITORE', 'Domani. Giuro.'],
    ['BRICK', 'Domani torno. Non giurare. Non serve a niente.'],
    ['', 'Lo lascia. Si gira. Vede Ras.'],
    ['BRICK', 'Tu non sei di qui.'],
    ['RAS', 'No.'],
    ['BRICK', 'Allora vattene prima che qualcuno mi paghi per te.'],
    ['RAS', 'Chi ti paga oggi?'],
    ['BRICK', 'Uno che non conosci.'],
    ['RAS', 'E ti piace?'],
    ['', '…'],
    ['BRICK', 'Non mi pagano per farmelo piacere.'],
  ], () => salva());
}
function scenaEdda() {
  S.flag.edda = true;
  S.soldi = Math.max(0, S.soldi - 30);
  salva();
  parla([
    ['EDDA', 'Tu chi sei?'],
    ['RAS', 'Un amico di suo figlio.'],
    ['EDDA', 'Mio figlio non ha amici. Ha gente che gli deve dei soldi e gente a cui li deve.'],
    ['RAS', 'Allora sono la seconda cosa, ma al contrario.'],
    ['', 'Lei lo guarda a lungo.'],
    ['EDDA', 'Lui lo sa che sei qui?'],
    ['RAS', 'No.'],
    ['EDDA', 'Si arrabbierà.'],
    ['RAS', 'Lo so.'],
    ['EDDA', 'E perché lo fai?'],
    ['RAS', 'Perché nessuno l\'ha fatto per mia madre.'],
    ['', 'Ras lascia la busta e la ricevuta della clinica: sei mesi di cure pagati. Se ne va prima che lei possa rispondere.'],
  ], () => { hud(); salva(); });
}
function scenaScale() {
  S.flag.brickUnito = true;
  if (!S.party.some((p) => p.id === 'brick')) S.party.push({ id: 'brick', xp: 0, hp: 120, mp: 8 });
  salva();
  parla([
    ['BRICK', 'Sei mesi.'],
    ['RAS', 'Sì.'],
    ['BRICK', 'Cosa vuoi?'],
    ['RAS', 'Niente.'],
    ['BRICK', 'Nessuno vuole niente.'],
    ['RAS', 'Io oggi no.'],
    ['BRICK', 'E domani?'],
    ['RAS', 'Domani te lo chiedo in faccia. E tu puoi dire di no.'],
    ['', '…'],
    ['BRICK', 'Mio padre diceva che un uomo che ti fa un regalo ti ha già comprato.'],
    ['RAS', 'Allora tuo padre non ha mai ricevuto un regalo.'],
    ['', '…'],
    ['BRICK', 'Domani alle sei. Dove?'],
    ['RAS', 'Alla chiatta.'],
    ['BRICK', 'Non per te. Per lei.'],
    ['RAS', 'Mi va bene.'],
    ['', 'Brick si unisce alla famiglia.'],
  ], () => { hud(); costruisci('scale'); });
}
function scenaRuggine() {
  S.flag.ruggineVista = true;
  salva();
  const alto = (S.rispetto || 0) >= 0;
  parla([
    ['RUGGINE', 'Il ragazzo del braccio. Hai fatto inginocchiare Gorm.'],
    ['RAS', 'Ho fatto smettere Gorm.'],
    ['RUGGINE', 'Ognuno racconta le cose come gli conviene.'],
    ['RAS', 'Mi serve passare per Rust Alley. Per arrivare al Mercato.'],
    ['RUGGINE', 'Ci passano in tanti. Poi tornano con gli amici e si fermano.'],
    ['RAS', 'Io non mi fermo.'],
    ['RUGGINE', 'Lo dicevano anche quelli.'],
    ['RAS', 'Loro non ti hanno offerto niente. Io ti offro questo: il quartiere resta tuo. Le regole restano tue. Io ho il passaggio, e se qualcuno ti attacca, rispondo io.'],
    ['RUGGINE', 'E se io dico di no?'],
    ['RAS', 'Allora passo lo stesso. Ma non sarò più un amico che passa.'],
    ['', '…'],
    ['RUGGINE', 'Mi stai minacciando a casa mia.'],
    ['RAS', 'Ti sto dicendo il prezzo. Le minacce non le faccio. Non servono due volte.'],
  ], () => {
    if (alto) {
      S.sceltaRuggine = 'accordo';
      S.flag.ruggine = true;
      S.oggetti.chiave = 1;
      S.covo = S.covo || 'officina';
      salva();
      parla([
        ['RUGGINE', 'Il passaggio, non il quartiere.'],
        ['RAS', 'Il passaggio.'],
        ['RUGGINE', 'Il giorno che rompi il patto, ti vengo a cercare io. Di persona.'],
        ['RAS', 'Allora non ci vedremo mai più.'],
        ['', 'Madre Ruggine ti lascia la Chiave Inglese Madre. Officina condivisa: le riparazioni costano meno.'],
      ], () => hud());
    } else {
      parla([
        ['RUGGINE', 'Prenditelo, allora.'],
        ['RAS', 'Peccato. Mi stavi simpatica.'],
      ], () => apriBattaglia([{ id: 'ruggine', nome: 'Madre Ruggine', hp: 130, atk: 14, def: 4, spd: 9, soldi: 70, xp: 80, boss: 1 }, { id: 'guardia', nome: 'Gente di Ruggine', hp: 40, atk: 9, def: 2, spd: 8, soldi: 12, xp: 16 }], 'ruggine'));
    }
  });
}
function scenaZero() {
  parla([
    ['ZERO', 'Ti hanno rimesso il braccio.'],
    ['RAS', 'Sei tu.'],
    ['ZERO', 'Sono io.'],
  ], () => apriBattaglia([{ id: 'zero', nome: 'Zero Hollow', hp: 999, atk: 18, def: 8, spd: 14, soldi: 0, xp: 0 }], 'zero'));
}
function scenaFine2() {
  S.flag.cap2 = true;
  salva();
  parla([
    ['BRICK', 'Chi era?'],
    ['RAS', 'Quello che ha ucciso i miei.'],
    ['BRICK', 'E ti ha lasciato vivo. Due volte.'],
    ['RAS', 'Sì.'],
    ['BRICK', 'Non mi piace un uomo che non finisce il lavoro. Vuol dire che lavora per qualcun altro.'],
    ['KIRI', 'Lavora per i Varga.'],
    ['BRICK', 'E tu come lo sai?'],
    ['', '…'],
    ['KIRI', 'Lo sanno tutti.'],
    ['RAS', 'Brick.'],
    ['BRICK', 'Dimmi.'],
    ['RAS', 'Qui dentro non si mente. Fuori fate quello che serve.'],
    ['BRICK', 'Va bene. Hai sentito?'],
    ['KIRI', 'Ho sentito.'],
  ], () => {
    const guerra = S.sceltaRuggine === 'guerra';
    scelte({
      testo: guerra
        ? 'Covo: Magazzino di Rust Alley. In mano hai la Chiave Inglese Madre.'
        : 'Officina condivisa. Madre Ruggine ti ha lasciato la Chiave Inglese Madre. Riparazioni −20%.',
      voci: guerra
        ? [
          ['Base secondaria', () => chiudiDue('base')],
          ['Attività', () => chiudiDue('attivita')],
          ['Smantella', () => chiudiDue('smantella')],
        ]
        : [['Tienila così', () => chiudiDue('officina')]],
    });
  });
}
function chiudiDue(covo) {
  S.covo = covo;
  S.soldi += 50;
  S.flag.cap2 = true;
  salva();
  const testo = S.sceltaRuggine === 'guerra'
    ? 'Hai preso Rust Alley con la forza. Zero ti ha lasciato vivo un\'altra volta: non sei ancora un problema.'
    : 'Madre Ruggine tiene il quartiere. Tu hai il passaggio. Zero ti ha lasciato vivo: non sei ancora un problema.';
  parla([['', testo], ['RAS', 'Ci servono uomini. E un nome.']], () => entra('galleria'));
}


const FASI = ['vetro', 'ferro', 'carne'];
function segnaChiavi() {
  if (S.flag.pass && S.flag.frequenza && S.flag.codice) S.flag.treChiavi = true;
}
function scenaVex() {
  S.flag.patto = true;
  salva();
  parla([
    ['VEX', 'Siete in tre e fate rumore come in dieci.'],
    ['RAS', 'Mi hanno detto che trovi le cose.'],
    ['VEX', 'Trovo le cose degli altri. Le mie no.'],
    ['RAS', 'Cosa ti manca?'],
    ['VEX', 'Sei anni.'],
    ['', '…'],
    ['VEX', 'Mi sono svegliata un giorno con ventiquattro anni e i ricordi di una di diciotto. Qualcuno ha preso il resto.'],
    ['RAS', 'Chi?'],
    ['VEX', 'Quelli che possono. I Varga.'],
    ['RAS', 'E perché?'],
    ['VEX', 'Perché dentro c\'era qualcosa che non dovevo ricordare. Tipo il nome di chi ha mandato un uomo in una cucina delle Fogne, una certa notte.'],
    ['RAS', 'Come lo sai?'],
    ['VEX', 'Non lo so. Ho solo il buco della forma giusta.'],
    ['RAS', 'Dove sono i tuoi ricordi?'],
    ['VEX', 'In vendita. Il Mercante Senza Volto li ha messi all\'asta. Lotto diciassette.'],
    ['RAS', 'Quanto?'],
    ['VEX', 'Più di quanto hai. Più di quanto avrai quest\'anno.'],
    ['RAS', 'Allora non li compro.'],
    ['VEX', 'Allora siamo a posto. Ciao.'],
    ['RAS', 'Li prendo.'],
    ['', 'Vex smette di scrivere.'],
    ['VEX', 'Dal Mercante non si ruba.'],
    ['RAS', 'Perché?'],
    ['VEX', 'Perché nessuno ci ha mai provato e poi è rimasto in giro a raccontarlo.'],
    ['RAS', 'Allora sarò il primo che lo racconta.'],
    ['VEX', 'E io cosa ci guadagno?'],
    ['RAS', 'I tuoi sei anni.'],
    ['VEX', 'E tu?'],
    ['RAS', 'Il nome.'],
    ['', '…'],
    ['VEX', 'Un patto semplice.'],
    ['RAS', 'Gli altri si rompono.'],
  ], () => salva());
}
function scenaBanditore() {
  const dovuto = 40;
  const presi = Math.min(S.soldi, dovuto);
  S.soldi -= presi;
  S.flag.pass = true;
  S.flag.frequenza = true;
  segnaChiavi();
  salva();
  parla([
    ['VEX (radio)', 'Il banditore gioca. Perde ogni giovedì. Chi gli deve dei soldi lo tiene per il collo.'],
    ['BRICK', 'Lo prendo io per il collo?'],
    ['RAS', 'No. Gli paghiamo il debito.'],
    ['BRICK', 'Con cosa?'],
    ['RAS', 'Con i soldi del mercato di Teo. Lo restituiamo dopo.'],
    ['BANDITORE', 'Perché lo fai?'],
    ['RAS', 'Perché domani mi presti il pass.'],
    ['BANDITORE', 'E se lo dico al Mercante?'],
    ['RAS', 'Il Mercante ti fa pagare il debito con gli interessi. Io no.'],
    ['', '…'],
    ['BANDITORE', 'Domani alle dieci. Non mi conosci.'],
    ['RAS', 'Non ti ho mai visto.'],
    ['KIRI (radio)', 'Le guardie cambiano turno ogni ventidue minuti. Al terzo cambio il caveau resta scoperto per novanta secondi.'],
    ['RAS', 'Novanta bastano?'],
    ['KIRI', 'Per te no. Per me sì.'],
    ['', 'Manca il codice di un compratore. È in piazza, su una teca.'],
  ], () => { hud(); salva(); });
}
function scenaCaveau() {
  parla([
    ['', 'Teche di vetro. Dentro, piccoli cilindri luminosi: ricordi venduti. Kiri apre la teca diciassette.'],
    ['MERCANTE', 'Quel lotto ha un compratore.'],
    ['', 'Una maschera liscia, senza tratti. La voce cambia a ogni frase.'],
    ['MERCANTE', 'Ogni cosa qui ha un prezzo. Anche tu.'],
    ['RAS', 'E quanto valgo?'],
    ['MERCANTE', 'Ieri niente. Oggi un braccio. Domani forse una città. È per questo che compro presto.'],
    ['RAS', 'Io non sono in vendita.'],
    ['MERCANTE', 'Lo dicono tutti finché non hanno fame.'],
    ['RAS', 'Io ho già avuto fame.'],
    ['', '…'],
    ['MERCANTE', 'Rimetti a posto il cilindro e ti lascio uscire. È l\'unica offerta. Non è un\'asta.'],
    ['RAS', 'Questo cilindro è di una donna che non sa chi è. Tu lo vendi a chi paga per tenerla così.'],
    ['MERCANTE', 'Io vendo. Non chiedo cosa ci fanno.'],
    ['RAS', 'Lo so. È il tuo problema.'],
  ], () => apriBattaglia([{ id: 'mercante', nome: 'Mercante Senza Volto', hp: 150, atk: 12, def: 4, spd: 11, soldi: 90, xp: 90, boss: 1 }], 'mercante'));
}
function scenaDopoMercante() {
  S.flag.mercanteFatto = true;
  S.flag.cilindro = true;
  S.oggetti.maschera = 1;
  S.soldi += 40;
  salva();
  parla([
    ['MERCANTE', 'Sotto la maschera non c\'è niente che ti interessi.'],
    ['RAS', 'Non volevo vederla.'],
    ['MERCANTE', 'Allora cosa vuoi?'],
    ['RAS', 'Chi ha comprato il lotto diciassette?'],
    ['MERCANTE', 'Nessuno. L\'ho messo all\'asta per vedere chi veniva a prenderlo. Ora lo so.'],
    ['RAS', 'E a chi lo dici?'],
    ['MERCANTE', 'A chi paga di più.'],
    ['RAS', 'Allora pago io. Il tuo silenzio.'],
    ['MERCANTE', 'Con cosa?'],
    ['RAS', 'Con la tua vita. È l\'unica cosa che hai e che non hai mai messo in vendita.'],
    ['', 'Bottino: Maschera dei Mille.'],
  ], () => entra('galleria'));
}
function scenaVexDopo() {
  if (!S.party.some((p) => p.id === 'vex')) S.party.push({ id: 'vex', xp: 0, hp: 72, mp: 36 });
  parla([
    ['', 'Vex collega il cilindro. Chiude gli occhi. Le tremano le mani. Ras resta in piedi, non la tocca.'],
    ['VEX', 'C\'è una stanza bianca. Io sono lì. Lavoro.'],
    ['RAS', 'Per chi?'],
    ['VEX', 'Per loro. Sul Neurolink. Io l\'ho aiutato a costruirlo.'],
    ['', '…'],
    ['RAS', 'Il nome.'],
    ['VEX', 'È a pezzi. Ci vorrà tempo. Il resto è ancora cifrato.'],
    ['RAS', 'Quanto tempo?'],
    ['VEX', 'Non lo so. Avevi detto che il patto era semplice.'],
    ['RAS', 'Lo è. Tu me lo dai quando ce l\'hai. Io aspetto.'],
    ['VEX', 'E nel frattempo?'],
    ['RAS', 'Nel frattempo sei dei nostri. Se vuoi.'],
    ['VEX', 'Ho appena scoperto che ho costruito la gabbia in cui vivete tutti.'],
    ['RAS', 'Allora aiutaci ad aprirla.'],
    ['', 'Vex stacca il cavo.'],
    ['VEX', 'Non lo faccio per te.'],
    ['RAS', 'Nessuno lo fa per me. Va bene così.'],
  ], () => {
    salva();
    scelte({
      testo: 'Covo: il Caveau. In mano hai la Maschera dei Mille.',
      voci: [
        ['Base', () => chiudiTre('base')],
        ['Banco dei pegni', () => chiudiTre('banco')],
        ['Smantella', () => chiudiTre('smantella')],
      ],
    });
  });
}
function chiudiTre(covo) {
  S.covo3 = covo;
  if (covo === 'smantella') S.soldi += 80;
  S.flag.vexUnita = true;
  if (!S.party.some((p) => p.id === 'vex')) S.party.push({ id: 'vex', xp: 0, hp: 72, mp: 36 });
  S.flag.cap3 = true;
  salva();
  $('fine').querySelector('h1').textContent = 'Mercato Nero';
  $('fineTesto').textContent = 'Vex è dei vostri. Il nome è ancora a pezzi. La scelta sul caveau è nel salvataggio.';
  $('fine').classList.remove('nascosto');
  $('joy').classList.add('nascosto');
  $('azione').classList.add('nascosto');
  modo = 'fine';
}

const TESTI = {
  medico() {
    return [['DOC', 'Piano. Quel braccio non sa ancora quanto sei arrabbiato. Imparerà.']];
  },
  kiri() {
    return [['KIRI', 'Te lo sto dicendo. Decidi tu cosa farci.']];
  },
  teo() {
    if (S.sceltaGorm === 'elimina' && S.flag.mattina) return [['', 'Teo non ti saluta.']];
    return null;
  },
  brick() {
    return [['BRICK', 'Non mi pagano per farmelo piacere.']];
  },
  sordo() {
    return S.flag.registro
      ? [['SORDO', 'Il registro è tuo. Non farmene pentire.']]
      : [['SORDO', 'Non ho sentito entrare nessuno.']];
  },
  gorm() {
    if (S.sceltaGorm === 'risparmia') return [['GORM', 'Te ne pentirai.'], ['RAS', 'Forse. Ma lo deciderò io quando.']];
    return [['GORM', 'Avvicinati.']];
  },
  edda() { return [['EDDA', 'Mio figlio non ha amici. Ha gente che gli deve dei soldi e gente a cui li deve.']]; },
  ruggine() {
    return S.sceltaRuggine === 'accordo'
      ? [['RUGGINE', 'Il passaggio, non il quartiere.']]
      : [['RUGGINE', 'Ognuno racconta le cose come gli conviene.']];
  },
};

function interagisci() {
  if (!vicino || modo !== 'gioco' || dlg) return;
  if (VEND[vicino.id]) {
    const id = vicino.id;
    const prima = !S.flag['v_' + id];
    S.flag['v_' + id] = true;
    if (prima) S.flag.voci = (S.flag.voci || 0) + 1;
    parla(VEND[id], () => {
      if ((S.flag.voci || 0) >= 4 && !S.flag.dettoVoci) {
        S.flag.dettoVoci = true;
        salva();
        parla([['', 'Hai sentito il giro di Gorm. Kiri ti aspetta alla cisterna.']], () => costruisci('mercato'));
        return;
      }
      salva();
    });
    vicino.mode = 'talk';
    return;
  }
  if (vicino.id === 'teo') {
    const extra = TESTI.teo();
    if (extra) { parla(extra, () => {}); return; }
    negozio();
    return;
  }
  const fn = TESTI[vicino.id];
  if (!fn) return;
  const linee = fn();
  if (!linee) return;
  parla(linee, () => salva());
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
  const sconto = S.covo === 'base' || S.covo === 'officina';
  const med = sconto ? 18 : 20;
  const stim = sconto ? 12 : 15;
  scelte({
    testo: sconto ? 'Teo. Con il covo, filtri e bende costano meno.' : 'Teo. Filtri e bende.',
    voci: [
      [`Medikit · ${med}`, () => compra('medikit', med)],
      [`Stim · ${stim}`, () => compra('stim', stim)],
      ['Basta così', () => salva()],
    ],
  });
}
function compra(id, prezzo) {
  if (S.soldi < prezzo) { parla([['TEO', 'Ti mancano i soldi.']], () => salva()); return; }
  S.soldi -= prezzo;
  S.oggetti[id] = (S.oggetti[id] || 0) + 1;
  salva();
  hud();
  parla([['TEO', 'Preso.']], () => {});
}

const NEMICI = {
  ratto: () => makeRatto(),
  gorm: () => makeGorm(),
  guardia: () => FABB.guardia(),
  ruggine: () => FABB.ruggine(),
  zero: () => makeZero(),
  mercante: () => makeMercante(),
};
function apriBattaglia(gruppo, copione) {
  if (copione === 'gorm' && S.flag.registro) gruppo = gruppo.filter((n) => n.id !== 'guardia');
  modo = 'battaglia';
  $('azione').classList.add('nascosto');
  $('joy').classList.add('nascosto');
  bat = { nemici: gruppo.map((n, i) => ({ ...n, hpMax: n.hp, i })), i: 0, coda: [], copione: copione || '', round: 0, colpi: 0, fase: 'vetro' };
  $('battaglia').classList.remove('nascosto');
  gente.forEach((g) => { if (g.id === 'gorm' || g.id === 'ruggine' || g.id === 'zero' || g.id === 'mercante') g.m.visible = false; });
  gruppo.forEach((n, i) => {
    const m = (NEMICI[n.id] || FABB.guardia)();
    m.position.set(-1.2 + i * 1.2, 0, -2.2);
    m.scale.setScalar(n.boss ? 1.15 : 1);
    mondo.add(m);
    bat.nemici[i].mesh = m;
  });
  if (copione === 'gorm' && S.flag.registro) $('log').textContent = 'Il venerdì non lo pagano più, capo.';
  round();
}
function round() {
  if (!bat) return;
  const viviE = bat.nemici.filter((n) => n.hp > 0);
  const viviP = S.party.filter((p) => p.hp > 0);
  if (bat.copione === 'zero') {
    bat.round += 1;
    if (bat.round > 3) return cadutaZero();
  }
  if (bat.copione === 'mercante') bat.fase = FASI[Math.floor((bat.colpi || 0) / 3) % 3];
  if (!viviE.length) return bat.copione === 'zero' ? cadutaZero() : vittoria();
  if (!viviP.length) return bat.copione === 'zero' ? cadutaZero() : sconfitta();
  bat.coda = viviP.map((p) => ({ side: 'p', ref: p, spd: scheda(p).spd })).concat(viviE.map((n) => ({ side: 'e', ref: n, spd: n.spd || 8 })));
  bat.coda.sort((a, b) => b.spd - a.spd);
  bat.i = 0;
  passo();
}
function passo() {
  if (!bat) return;
  const viviE = bat.nemici.filter((n) => n.hp > 0);
  const viviP = S.party.filter((p) => p.hp > 0);
  if (!viviE.length) return bat.copione === 'zero' ? cadutaZero() : vittoria();
  if (!viviP.length) return bat.copione === 'zero' ? cadutaZero() : sconfitta();
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
  if (p.id === 'brick') com.push(['Pugno', () => colpoEroe(p, s.atk + 4, 'Brick chiude il pugno.')]);
  if (p.id === 'vex') com.push(['Impulso', () => { if (p.mp < 6) return; p.mp -= 6; colpoEroe(p, s.atk + 6, 'Vex manda l\'impulso.'); }]);
  if (bat && bat.copione === 'mercante') {
    const i = com.findIndex((x) => x[0] === 'Attacca');
    if (i >= 0) com.splice(i, 1);
    FASI.forEach((fase) => com.unshift([fase[0].toUpperCase() + fase.slice(1), () => colpoEroe(p, s.atk, `${s.nome} colpisce il ${fase}.`, fase === bat.fase)]));
  }
  if (S.oggetti.medikit) com.push(['Medikit', () => { S.oggetti.medikit -= 1; p.hp = Math.min(s.hpMax, p.hp + 40); $('log').textContent = 'Medikit.'; bat.i += 1; passo(); }]);
  $('batComandi').innerHTML = '';
  com.forEach(([n, f]) => {
    const b = document.createElement('button');
    b.className = 'grosso';
    b.textContent = n;
    b.onclick = () => f();
    $('batComandi').appendChild(b);
  });
  $('log').textContent = bat && bat.copione === 'mercante'
    ? `Vex: Adesso è ${bat.fase}. Colpisci il ${bat.fase}.`
    : `${s.nome}, tocca a te.`;
}
function bersaglio() { return bat.nemici.find((n) => n.hp > 0); }
function colpoEroe(p, potenza, frase, giusto) {
  const t = bersaglio();
  if (!t) return vittoria();
  let d = Math.max(1, potenza + Math.floor(Math.random() * 4) - t.def);
  if (bat && bat.copione === 'mercante' && typeof giusto === 'boolean') {
    d = giusto ? d * 2 : Math.max(1, Math.floor(d * 0.35));
    bat.colpi = (bat.colpi || 0) + 1;
    bat.fase = FASI[Math.floor(bat.colpi / 3) % 3];
    frase = giusto ? frase : frase + ' Niente.';
  }
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
  if (bat.copione === 'zero' && bat.round < 3) d = Math.min(d, 8);
  if (bat.copione === 'zero' && bat.round >= 3) return cadutaZero();
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
  const boss = bat.copione === 'gorm' || bat.nemici.some((n) => n.boss && n.id === 'gorm');
  const ruggine = bat.copione === 'ruggine';
  const mercante = bat.copione === 'mercante';
  bat.nemici.forEach((n) => n.mesh && mondo.remove(n.mesh));
  bat = null;
  $('battaglia').classList.add('nascosto');
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  hud();
  salva();
  const extra = su ? ' La squadra sale di livello.' : '';
  if (mercante) {
    scenaDopoMercante();
    return;
  }
  if (ruggine) {
    S.sceltaRuggine = 'guerra';
    S.flag.ruggine = true;
    S.oggetti.chiave = 1;
    salva();
    parla([
      ['RUGGINE', 'Hai vinto. Non vuol dire che hai ragione.'],
      ['RAS', 'No. Vuol dire che decido io.'],
      ['', 'Bottino: Chiave Inglese Madre.'],
    ], () => hud());
    return;
  }
  if (boss) {
    S.flag.gormFatto = true;
    const g = gente.find((x) => x.id === 'gorm');
    if (g) g.m.visible = true;
    parla([
      ['GORM', 'Fallo. Davanti a loro. Così imparano.'],
      ['RAS', 'Cosa devono imparare?'],
      ['GORM', 'Chi comanda.'],
    ], () => sceltaGorm());
    return;
  }
  parla([['', `Fine scontro. +${soldi} soldi, +${xp} esperienza.${extra}`]], () => {});
}
function sconfitta() {
  const copione = bat && bat.copione;
  bat.nemici.forEach((n) => n.mesh && mondo.remove(n.mesh));
  bat = null;
  $('battaglia').classList.add('nascosto');
  S.party.forEach((p) => { const s = scheda(p); p.hp = Math.max(1, Math.floor(s.hpMax / 2)); });
  if (eroe) { eroe.position.z = Math.min(2.4, (STANZE[S.stanza].d / 2) - 0.8); S.z = eroe.position.z; }
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  salva();
  if (copione === 'ruggine') {
    parla([['', 'Ras è a terra. Si rialza.']], () => apriBattaglia([{ id: 'ruggine', nome: 'Madre Ruggine', hp: 130, atk: 14, def: 4, spd: 9, soldi: 70, xp: 80, boss: 1 }, { id: 'guardia', nome: 'Gente di Ruggine', hp: 40, atk: 9, def: 2, spd: 8, soldi: 12, xp: 16 }], 'ruggine'));
    return;
  }
  if (copione === 'mercante') {
    parla([['', 'Ras è a terra. Si rialza.']], () => apriBattaglia([{ id: 'mercante', nome: 'Mercante Senza Volto', hp: 150, atk: 12, def: 4, spd: 11, soldi: 90, xp: 90, boss: 1 }], 'mercante'));
    return;
  }
  parla([['', 'Ras è a terra. Si rialza.']], () => {});
}
function cadutaZero() {
  if (!bat && S.flag.zeroFatto) return;
  if (bat) {
    bat.nemici.forEach((n) => n.mesh && mondo.remove(n.mesh));
    bat = null;
  }
  $('battaglia').classList.add('nascosto');
  S.party.forEach((p) => {
    const s = scheda(p);
    if (p.id === 'ras') p.hp = Math.max(1, Math.floor(s.hpMax * 0.35));
    else if (p.hp <= 0) p.hp = Math.max(1, Math.floor(s.hpMax / 2));
  });
  S.flag.zeroFatto = true;
  modo = 'gioco';
  $('joy').classList.remove('nascosto');
  if (eroe) { eroe.position.z = 1.4; S.z = 1.4; }
  salva();
  parla([
    ['', 'Ras cade al terzo turno. Zero si inginocchia accanto a lui. Parla piano.'],
    ['ZERO', 'Non sei ancora un problema.'],
    ['RAS', 'Perché non mi uccidi?'],
    ['ZERO', 'Perché nessuno me l\'ha chiesto.'],
    ['', 'Si rialza. Guarda Kiri, nascosta dietro un comignolo. Un istante solo. Poi se ne va.'],
  ], () => hud());
}
function sceltaGorm() {
  scelte({
    testo: 'Ras guarda il molo. La gente guarda lui.',
    voci: [
      ['Risparmiare Gorm', () => {
        S.sceltaGorm = 'risparmia';
        S.rispetto = (S.rispetto || 0) + 1;
        S.flag.gormFatto = true;
        salva();
        parla([
          ['RAS', 'Domani restituisci al mercato quello che hai preso questo mese. Poi lavori per me.'],
          ['GORM', 'E se dico di no?'],
          ['RAS', 'Non lo dici.'],
          ['', '…'],
          ['GORM', 'Perché mi lasci vivere?'],
          ['RAS', 'Perché un uomo che deve qualcosa lavora meglio di un uomo morto.'],
          ['GORM', 'Te ne pentirai.'],
          ['RAS', 'Forse. Ma lo deciderò io quando.'],
        ], () => entra('mercato'));
      }],
      ['Eliminarlo', () => {
        S.sceltaGorm = 'elimina';
        S.rispetto = (S.rispetto || 0) - 1;
        S.flag.gormFatto = true;
        const g = gente.find((x) => x.id === 'gorm');
        if (g) { mondo.remove(g.m); gente.splice(gente.indexOf(g), 1); }
        salva();
        parla([
          ['RAS', 'Chi ha preso i corpi dei miei?'],
          ['GORM', 'I miei uomini. Su ordine.'],
          ['RAS', 'Allora anche questo è un ordine.'],
          ['', 'Stacco al nero. Quando torna la luce, la corona di bulloni è sul tavolo. Ras non la prende. La lascia lì.'],
        ], () => entra('mercato'));
      }],
    ],
  });
}

const PROLOGO = [
  { luce: 0x4a1020, gente: [['aram', -0.8, 0.2, 0.2], ['nadia', 0.15, 0.05, -0.1], ['zero', 0.4, 1.35, 2.8], ['varga', -1.3, 0.8, 1.4], ['varga', 1.3, 0.7, 1.5]], linee: [
    ['ZERO', 'Sedetevi. Non vi faccio alzare la voce, e voi non la fate alzare a me.'],
    ['ARAM', 'Questa è casa mia.'],
    ['ZERO', 'Stanotte no.'],
    ['', 'Nadia mette una mano sul braccio di Aram. Lui si siede.'],
    ['ZERO', 'Il Don vuole il codice. Non vuole voi. Ci tiene che lo sappiate.'],
    ['NADIA', 'Il Don vuole sempre una cosa sola. Poi ne vuole un\'altra.'],
    ['ZERO', 'Può darsi. Io porto i messaggi, non li scrivo.'],
    ['', '…'],
    ['ARAM', 'Non c\'è niente da portare.'],
    ['ZERO', 'Trent\'anni nelle torri. Avete progettato l\'impianto che ha in testa ogni persona di questa città. E adesso non c\'è niente?'],
    ['ARAM', 'Abbiamo progettato una gabbia. Ce ne siamo accorti tardi.'],
    ['', 'Zero guarda la foto sul frigorifero: un ragazzo con un casco da corriere.'],
    ['ZERO', 'Vostro figlio?'],
    ['NADIA', 'Lui non sa niente.'],
    ['ZERO', 'Lo so. Per questo non è qui.'],
    ['', 'Zero si avvicina al tavolo. Parla piano.'],
    ['ZERO', 'Ve lo chiedo una volta. Dove?'],
    ['ARAM', 'Se lo dico, domani tocca a lui. Lo sappiamo tutti e tre.'],
    ['', '…'],
    ['ZERO', 'Fuori.'],
    ['', 'Gli uomini escono. Zero resta solo con loro.'],
    ['ARAM', 'Ti chiedo una cosa. Una sola.'],
    ['ZERO', 'Dimmi.'],
    ['ARAM', 'Il ragazzo. Quando arriva, lascialo vivere.'],
    ['', 'Lo schermo resta sul volto di Zero. Non risponde.'],
    ['', 'Stacco al nero. Due spari.']] },
  { luce: 0x6a0814, gente: [['rasIntero', 0.7, 0.3, 0.2], ['zero', -0.4, 1.15, 2.4]], linee: [
    ['RAS', 'Papà?'],
    ['', 'Zero è in piedi in cucina. Non si gira subito.'],
    ['ZERO', 'Sei arrivato tardi.'],
    ['RAS', 'Chi sei?'],
    ['ZERO', 'Uno che ha finito.'],
    ['', 'Ras guarda dietro di lui. Vede. Si lancia. Zero lo ferma con una mano sola, lo sbatte contro il muro. Una lama corta si accende.'],
    ['ZERO', 'Non eri nell\'ordine.'],
    ['', 'Un colpo. Ras urla. Il braccio destro cade sul pavimento.'],
    ['ZERO', 'Questo è per ricordartelo. Tu non c\'eri. Continua a non esserci.'],
    ['', 'Zero esce. Ras resta a terra. La foto sul frigorifero è macchiata di sangue.']] },
  { luce: 0x102028, gente: [['rasFerito', 0.35, 0.15, 0.1], ['kiri', -0.85, 0.55, 0.7]], linee: [
    ['RAS', 'Chi sei…'],
    ['KIRI', 'Una che passava.'],
    ['RAS', 'Non passa nessuno, qui.'],
    ['KIRI', 'Allora sono una che non passava. Stai zitto. Respira.'],
    ['RAS', 'I miei…'],
    ['KIRI', 'Lo so.'],
    ['', 'Bussa tre volte su una porta di metallo. Si apre una fessura di luce.']] },
  { luce: 0x103038, gente: [['rasFerito', 0.4, 0.1, 0], ['medico', -0.7, 0.05, 0.4], ['kiri', -1.15, 0.45, 0.2]], linee: [
    ['DOC', 'Chi è?'],
    ['KIRI', 'Lo sai chi è.'],
    ['DOC', 'Speravo di non doverlo mai sapere.'],
    ['', 'Doc apre un armadietto. Dentro c\'è un braccio meccanico, con una targhetta: Per R.'],
    ['KIRI', 'Te l\'hanno lasciato loro.'],
    ['DOC', 'Mi hanno pagato tre anni fa. Se succede qualcosa. Io ho preso i soldi e ho sperato che non succedesse niente.'],
    ['KIRI', 'È successo.'],
    ['DOC', 'Tienilo fermo.'],
    ['', 'Stacco. Rumore di metallo. Una luce ambrata si accende dove prima c\'era il buio.']] },
  { luce: 0x183028, gente: [['ras', 0.35, 0.15, -0.15], ['medico', -0.7, 0.1, 0.35]], linee: [
    ['RAS', 'Di chi è?'],
    ['DOC', 'Tuo. Da prima che tu nascessi a questa mattina.'],
    ['RAS', 'Chi mi ha portato qui?'],
    ['DOC', 'Una ragazza. Se n\'è andata.'],
    ['RAS', 'Chi paga?'],
    ['DOC', 'È già pagato.'],
    ['', '…'],
    ['RAS', 'Da chi?'],
    ['DOC', 'Da gente che non può più chiedertelo indietro.'],
    ['', 'Ras si alza. Si appoggia al muro con il braccio nuovo. Il muro si incrina.'],
    ['DOC', 'Piano. Quel braccio non sa ancora quanto sei arrabbiato. Imparerà.'],
    ['RAS', 'Dove sono i miei?'],
    ['DOC', 'Li hanno portati via stanotte. Gli uomini di Gorm puliscono per i Varga. Non c\'è una tomba, se è quello che chiedi.'],
    ['', 'Ras resta fermo. Poi prende la giacca.'],
    ['DOC', 'Dove vai?'],
    ['RAS', 'A vedere chi ha pulito.']] },
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
      + `<p>Rispetto ${S.rispetto || 0}. Gorm: ${S.sceltaGorm === 'risparmia' ? 'risparmiato' : S.sceltaGorm === 'elimina' ? 'eliminato' : 'ancora da fare'}.<br>Madre Ruggine: ${S.sceltaRuggine || 'ancora da fare'}. Brick: ${S.flag.brickUnito ? 'in famiglia' : 'non ancora'}. Vex: ${S.flag.vexUnita ? 'in famiglia' : 'non ancora'}.</p>`;
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
    const dest = new THREE.Vector3(eroe.position.x, 1.45, eroe.position.z + 2.05);
    cam.position.lerp(dest, 0.12);
    cam.lookAt(eroe.position.x, 1.0, eroe.position.z - 0.2);
    if (S && S.flag.braccio) {
      luceAlba.intensity = 1.2;
      const arm = eroe.userData.albaArm || eroe.userData.armR;
      if (arm && arm.end) arm.end.getWorldPosition(luceAlba.position);
    }
    else luceAlba.intensity = 0;
  } else {
    cam.position.set(0.15, 1.25, 2.15);
    cam.lookAt(0, 1.0, 0.2);
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
  else { modo = 'gioco'; $('joy').classList.remove('nascosto'); costruisci(S.stanza); dopoEntrata(S.stanza); }
}

function bind() {
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
    pomo.style.left = (39 + dx * 30) + 'px';
    pomo.style.top = (39 + dy * 30) + 'px';
  }
  zona.addEventListener('pointerdown', (e) => { zona.setPointerCapture(e.pointerId); setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointermove', (e) => { if (joy.on) setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointerup', () => { joy = { on: false, x: 0, y: 0 }; pomo.style.left = '39px'; pomo.style.top = '39px'; });
  addEventListener('pointerdown', () => musica(), { once: true });
}

init3d();
bind();
const anteprima = new URLSearchParams(location.search).get('anteprima');
if (anteprima && STANZE[anteprima]) {
  S = base();
  S.prologo = true;
  S.flag.braccio = true;
  S.flag.cap2 = true;
  S.flag.patto = true;
  modo = 'gioco';
  $('titolo').classList.add('nascosto');
  $('hud').classList.remove('nascosto');
  $('joy').classList.remove('nascosto');
  costruisci(anteprima);
}
cam.position.set(0.2, 1.35, 2.55);
requestAnimationFrame(loop);
