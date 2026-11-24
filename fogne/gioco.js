import * as THREE from '../lib/three.module.min.js';
import { makeRas, makeKiri, makeLyra, makeSable, makeMedico, makeZero, makeGorm, makeBrick, makeRatto, makeCittadino, anima } from '../lib/pc-models.js?v=10';

const CHIAVE = 'punkcity-cap1-v2';
const CHIAVE_OLD = 'punkcity-cap1-v1';
const V = '9';
const W = 1280, H = 720;
const $ = (id) => document.getElementById(id);
const ASSET = (n) => 'assets/' + n + '?v=' + V;
const sizeAt = (y) => 175 + (y - 330) * 0.42;
const SPEED = 1.75;
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

const FAB = {
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
  nila: () => makeCittadino(0x204038, 0xe0b090),
  spina: () => makeCittadino(0x302418, 0xd0a888),
  guardia: () => makeCittadino(0x5a1828, 0xc89878),
};

const ROOM = {
  infermeria: {
    nome: 'INFERMERIA', sotto: 'clandestina · Le Fogne', bg: 'infermeria.jpg', depth: 2, tilt: 0.42,
    walk: [[470,690],[500,520],[560,400],[720,345],[900,345],[1040,400],[1100,530],[1070,690]],
    spawn: [780, 600],
    people: [
      { id: 'kiri', x: 575, y: 430, yaw: 0.4 },
      { id: 'medico', x: 650, y: 385, yaw: -0.5 },
    ],
    doors: [{ id: 'mercato', x: 1010, y: 355, r: 80, label: 'Mercato' }],
  },
  mercato: {
    nome: 'MERCATO', sotto: 'delle Fogne', bg: 'mercato.jpg', depth: 1.7, tilt: 0.5,
    walk: [[280,700],[360,520],[470,370],[600,295],[760,290],[920,360],[1060,530],[1020,700]],
    spawn: [520, 620],
    from: { infermeria: [500, 620], passerella: [660, 340] },
    people: [
      { id: 'nila', x: 390, y: 470, yaw: 0.6 },
      { id: 'spina', x: 980, y: 500, yaw: -0.6 },
      { id: 'lyra', x: 800, y: 340, yaw: 3.0 },
    ],
    doors: [
      { id: 'infermeria', x: 430, y: 320, r: 80, label: 'Infermeria' },
      { id: 'passerella', x: 660, y: 275, r: 80, label: 'Passerella' },
    ],
  },
  passerella: {
    nome: 'PASSERELLA', sotto: 'sopra il canale', bg: 'passerella.jpg', depth: 1.4, tilt: 0.62,
    walk: [[430,710],[500,520],[560,360],[600,245],[680,245],[740,360],[800,520],[850,710]],
    spawn: [640, 640],
    from: { mercato: [640, 650], deposito: [640, 280] },
    people: [{ id: 'sable', x: 545, y: 400, yaw: 0.3 }],
    doors: [
      { id: 'mercato', x: 640, y: 680, r: 90, label: 'Mercato' },
      { id: 'deposito', x: 640, y: 245, r: 80, label: 'Deposito' },
    ],
    trappola: { x: 640, y: 430, r: 70, id: 'ratti' },
  },
  deposito: {
    nome: 'DEPOSITO', sotto: 'di Re Gorm', bg: 'deposito.jpg', depth: 2, tilt: 0.42,
    walk: [[340,700],[400,500],[500,375],[720,325],[980,335],[1100,470],[1070,700]],
    spawn: [520, 620],
    from: { passerella: [480, 600], sala: [980, 420] },
    people: [],
    doors: [
      { id: 'passerella', x: 400, y: 355, r: 80, label: 'Passerella' },
      { id: 'sala', x: 1010, y: 330, r: 80, label: 'Sala del re', serve: 'casse' },
    ],
    casse: { x: 830, y: 400, r: 80 },
  },
  sala: {
    nome: 'SALA DI RE GORM', sotto: 'Le Fogne', bg: 'sala.jpg', depth: 2, tilt: 0.42,
    walk: [[300,700],[360,500],[480,395],[700,345],[880,370],[980,500],[1000,700]],
    blockers: [{ x: 980, y: 360, rx: 130, ry: 70 }],
    spawn: [640, 620],
    from: { deposito: [400, 520], rust: [980, 530] },
    people: [],
    doors: [
      { id: 'deposito', x: 360, y: 380, r: 80, label: 'Deposito' },
      { id: 'rust', x: 1040, y: 520, r: 80, label: 'Rust Alley', serve: 'fine' },
    ],
    boss: { x: 900, y: 400, r: 95 },
  },
  rust: {
    nome: 'RUST ALLEY', sotto: 'la soglia', bg: 'rust.jpg', depth: 1.8, tilt: 0.5,
    walk: [[240,700],[300,500],[400,375],[720,335],[1020,380],[1140,560],[1100,700]],
    spawn: [500, 620],
    from: { sala: [340, 420] },
    people: [{ id: 'brick', x: 900, y: 410, yaw: -0.8 }],
    doors: [{ id: 'sala', x: 320, y: 360, r: 80, label: 'Indietro' }],
  },
};

let S = null, modo = 'titolo', tempo = 0;
let renderer, scena, cam, luceAlba;
let DEPTH = 2, TILT = 0.42, poly = ROOM.infermeria.walk, blockers = [];
let grid, GW, GH, CELL = 8;
const gente = [];
let ras = null;
let bgMesh = null, bgMap = {};
let joy = { on: false, x: 0, y: 0 };
let vicino = null, dlg = null, path = [];
let fadeBusy = false;
const tasti = {};
let SC = 1, OX = 0, OY = 0;

function base() {
  return {
    v: 2, prologo: false, stanza: 'infermeria', x: 780, y: 600, soldi: 15,
    oggetti: { medikit: 1, stim: 0 },
    party: [{ id: 'ras', xp: 0, hp: 96, mp: 22 }, { id: 'kiri', xp: 0, hp: 84, mp: 28 }],
    flag: {}, sceltaGorm: null,
  };
}
function salva() {
  if (!S) return;
  if (ras && modo === 'gioco') { S.x = ras.x; S.y = ras.y; }
  localStorage.setItem(CHIAVE, JSON.stringify(S));
}
function migra(raw) {
  if (!raw) return null;
  if (raw.v === 2 && raw.y != null) return raw;
  const st = ROOM[raw.stanza] || ROOM.infermeria;
  raw.v = 2; raw.x = st.spawn[0]; raw.y = st.spawn[1];
  return raw;
}
function carica() {
  try {
    const a = JSON.parse(localStorage.getItem(CHIAVE) || 'null');
    if (a) return migra(a);
    const b = JSON.parse(localStorage.getItem(CHIAVE_OLD) || 'null');
    return migra(b);
  } catch { return null; }
}
function lvDi(xp) { return 1 + Math.floor(xp / 50); }
function scheda(p) {
  const lv = lvDi(p.xp);
  const b = p.id === 'ras' ? { hp: 96, atk: 14, mp: 22, spd: 11, nome: 'Ras' } : { hp: 84, atk: 11, mp: 28, spd: 13, nome: 'Kiri' };
  return { ...p, ...b, lv, hpMax: b.hp + (lv - 1) * 16, atk: b.atk + (lv - 1) * 2, mpMax: b.mp + (lv - 1) * 3 };
}
function eroeRas() { return scheda(S.party[0]); }
function hud() {
  if (!S) return;
  const r = eroeRas();
  $('risorse').textContent = `Lv ${r.lv}  ·  ${r.hp}/${r.hpMax} PV  ·  ${S.soldi} soldi`;
}

let audioCtx = null, muto = false;
function musica() {
  if (muto || audioCtx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  audioCtx = new AC();
  const g = audioCtx.createGain(); g.gain.value = 0.045; g.connect(audioCtx.destination);
  const o = audioCtx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 55;
  const f = audioCtx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220;
  o.connect(f); f.connect(g); o.start();
  const p = audioCtx.createOscillator(); p.type = 'triangle'; p.frequency.value = 220;
  const pg = audioCtx.createGain(); pg.gain.value = 0.02; p.connect(pg); pg.connect(g); p.start();
}

function glowTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.needsUpdate = true; return t;
}
let GT;

function init3d() {
  const canvas = $('gl');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 1);
  scena = new THREE.Scene();
  cam = new THREE.OrthographicCamera(0, W, 0, -H, -4000, 4000);
  cam.position.z = 0;
  GT = glowTex();
  scena.add(new THREE.HemisphereLight(0x9a88b8, 0x2a1a20, 1.35));
  const key = new THREE.DirectionalLight(0xffb070, 1.7); key.position.set(-1, 1.2, 1.4); scena.add(key);
  const pink = new THREE.DirectionalLight(0xff3cc0, 0.6); pink.position.set(1.4, 0.6, 0.2); scena.add(pink);
  const rim = new THREE.DirectionalLight(0x60c8ff, 1.5); rim.position.set(0.2, 0.8, -1.5); scena.add(rim);
  luceAlba = new THREE.PointLight(0xffe0a2, 0, 8); scena.add(luceAlba);
  const loader = new THREE.TextureLoader();
  Object.keys(ROOM).forEach((id) => {
    const t = loader.load(ASSET(ROOM[id].bg));
    t.colorSpace = THREE.SRGBColorSpace; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: t, depthTest: false, depthWrite: false }));
    m.position.set(W / 2, -H / 2, -3000); m.renderOrder = -1000; m.visible = false;
    scena.add(m); bgMap[id] = m;
  });
}

function wrap(model) {
  const root = new THREE.Group(), tilt = new THREE.Group(), yaw = new THREE.Group();
  root.add(tilt); tilt.add(yaw); yaw.add(model);
  tilt.rotation.x = TILT;
  root.userData = { ...model.userData, tilt, yaw, inner: model };
  return root;
}
function shadowBlob() {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: GT, color: 0x000000, transparent: true, opacity: 0.65, depthTest: false, depthWrite: false }));
  scena.add(m); return m;
}
function actor(model, x, y, yaw) {
  const a = { m: model, x, y, yaw, tyaw: yaw, ph: 0, moving: 0, sh: shadowBlob(), mode: 'idle' };
  scena.add(model); place(a); return a;
}
function place(a) {
  const s = sizeAt(a.y); a.s = s;
  a.m.position.set(a.x, -a.y, -1000 + a.y);
  a.m.scale.setScalar(s);
  if (a.m.userData.tilt) a.m.userData.tilt.rotation.x = TILT;
  a.sh.position.set(a.x, -a.y - s * 0.005, -3000);
  a.sh.scale.set(s * 0.42, s * 0.12, 1);
  a.sh.visible = a.m.visible;
}

function inPoly(x, y, P = poly) {
  let c = false;
  for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
    const [xi, yi] = P[i], [xj, yj] = P[j];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c;
  }
  return c;
}
function walk(x, y) {
  if (!inPoly(x, y)) return false;
  return !blockers.some((b) => ((x - b.x) / b.rx) ** 2 + ((y - b.y) / b.ry) ** 2 < 1);
}
function rebuildGrid() {
  GW = W / CELL | 0; GH = H / CELL | 0;
  grid = new Uint8Array(GW * GH);
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) grid[j * GW + i] = walk(i * CELL + 4, j * CELL + 4) ? 1 : 0;
}
function nearestWalk(x, y) {
  let best = null, bd = 1e18;
  for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) if (grid[j * GW + i]) {
    const cx = i * CELL + 4, cy = j * CELL + 4, d = (cx - x) ** 2 + ((cy - y) * DEPTH) ** 2;
    if (d < bd) { bd = d; best = [cx, cy]; }
  }
  return best;
}
function findPath(sx, sy, tx, ty) {
  if (!walk(tx, ty)) { const n = nearestWalk(tx, ty); if (!n) return []; [tx, ty] = n; }
  const si = (sx / CELL | 0) + (sy / CELL | 0) * GW, ti = (tx / CELL | 0) + (ty / CELL | 0) * GW;
  if (si < 0 || ti < 0 || si >= grid.length || ti >= grid.length) return [];
  const prev = new Int32Array(grid.length).fill(-1), dist = new Float32Array(grid.length).fill(1e18);
  const heap = [si]; dist[si] = 0;
  const D = [[1, 0, 1], [-1, 0, 1], [0, 1, DEPTH], [0, -1, DEPTH], [1, 1, Math.hypot(1, DEPTH)], [-1, 1, Math.hypot(1, DEPTH)], [1, -1, Math.hypot(1, DEPTH)], [-1, -1, Math.hypot(1, DEPTH)]];
  while (heap.length) {
    let bi = 0; for (let k = 1; k < heap.length; k++) if (dist[heap[k]] < dist[heap[bi]]) bi = k;
    const i = heap.splice(bi, 1)[0]; if (i === ti) break;
    const x = i % GW, y = i / GW | 0;
    for (const [dx, dy, c] of D) {
      const nx = x + dx, ny = y + dy, j = nx + ny * GW;
      if (nx < 0 || ny < 0 || nx >= GW || ny >= GH || !grid[j]) continue;
      const nd = dist[i] + c;
      if (nd < dist[j]) { dist[j] = nd; prev[j] = i; heap.push(j); }
    }
  }
  if (prev[ti] < 0 && si !== ti) return [];
  const out = [];
  for (let i = ti; i >= 0; i = prev[i]) { out.push([i % GW * CELL + 4, (i / GW | 0) * CELL + 4]); if (i === si) break; }
  return out.reverse();
}

function svuotaGente() {
  gente.forEach((g) => { scena.remove(g.m); scena.remove(g.sh); });
  gente.length = 0;
}
function metti(id, x, y, yaw, fab) {
  const model = wrap((fab || FAB[id])());
  const a = actor(model, x, y, yaw || 0);
  a.id = id;
  gente.push(a);
  return a;
}

function costruisci(id, da) {
  const st = ROOM[id];
  if (!st) return;
  Object.values(bgMap).forEach((m) => { m.visible = false; });
  if (bgMap[id]) bgMap[id].visible = true;
  DEPTH = st.depth; TILT = st.tilt; poly = st.walk; blockers = st.blockers || [];
  rebuildGrid();
  svuotaGente();
  const from = (da && st.from && st.from[da]) || st.spawn;
  let sx = (S && S.stanza === id && S.x > 50 && S.y > 50 && !da) ? S.x : from[0];
  let sy = (S && S.stanza === id && S.x > 50 && S.y > 50 && !da) ? S.y : from[1];
  if (!walk(sx, sy)) { const n = nearestWalk(sx, sy); if (n) { sx = n[0]; sy = n[1]; } }
  const rasFab = () => (S && S.flag.braccio ? makeRas({ sword: 'back', alba: true }) : FAB.rasFerito());
  if (modo !== 'prologo') {
    ras = metti('ras', sx, sy, Math.PI, rasFab);
  } else ras = null;
  (st.people || []).forEach((p) => {
    if (p.id === 'gorm' && S && !S.flag.gormFatto && !S.sceltaGorm) return;
    if (p.id === 'gorm' && S && S.sceltaGorm === 'elimina') return;
    metti(p.id, p.x, p.y, p.yaw);
  });
  if (id === 'sala' && S && (S.flag.gormFatto || !S.flag.gormFatto)) {
    if (S.sceltaGorm !== 'elimina') metti('gorm', 900, 395, -0.6);
  }
  S.stanza = id; S.x = sx; S.y = sy;
  $('luogo').textContent = st.nome;
  $('sottoLuogo').textContent = st.sotto;
  hud();
  path = [];
}

function entra(id) {
  const st = ROOM[id];
  if (!st) return;
  if (id === 'sala' && !S.flag.casse) { parla([['KIRI', 'Prima le casse. Gorm non apre a chi arriva a mani vuote.']]); return; }
  if (id === 'rust' && !S.flag.fine) { parla([['', 'Brick non fa passare. Prima si chiude il conto con Gorm.']]); return; }
  const da = S.stanza;
  $('fade').classList.add('on'); fadeBusy = true;
  setTimeout(() => {
    S.stanza = id; S.x = 0; S.y = 0;
    costruisci(id, da);
    salva();
    $('fade').classList.remove('on'); fadeBusy = false;
  }, 400);
}

function cammina(dt) {
  if (!ras || modo !== 'gioco' || dlg || fadeBusy) return;
  let x = 0, z = 0;
  if (joy.on) { x = joy.x; z = joy.y; }
  if (tasti.ArrowUp || tasti.w || tasti.W) z -= 1;
  if (tasti.ArrowDown || tasti.s || tasti.S) z += 1;
  if (tasti.ArrowLeft || tasti.a || tasti.A) x -= 1;
  if (tasti.ArrowRight || tasti.d || tasti.D) x += 1;
  const sp = SPEED * sizeAt(ras.y) * dt;
  ras.moving = 0;
  if (x || z) {
    path = [];
    const l = Math.hypot(x, z) || 1;
    const nx = ras.x + (x / l) * sp, ny = ras.y + (z / l) * sp / DEPTH;
    if (walk(nx, ny)) { ras.x = nx; ras.y = ny; ras.moving = 1; }
    else if (walk(nx, ras.y)) { ras.x = nx; ras.moving = 1; }
    else if (walk(ras.x, ny)) { ras.y = ny; ras.moving = 1; }
    ras.tyaw = Math.atan2(x, -z);
  } else if (path.length) {
    const [tx, ty] = path[0], dx = tx - ras.x, dz = (ty - ras.y) * DEPTH, L = Math.hypot(dx, dz);
    if (L < 8) path.shift();
    else { ras.x += dx / L * sp; ras.y += dz / L * sp / DEPTH; ras.moving = 1; ras.tyaw = Math.atan2(dx, -dz); }
  }
  let dy = ras.tyaw - ras.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  ras.yaw += dy * Math.min(1, dt * 12);
  if (ras.m.userData.yaw) ras.m.userData.yaw.rotation.y = ras.yaw;
  ras.mode = ras.moving ? 'walk' : 'idle';

  const st = ROOM[S.stanza];
  if (st.trappola && !S.flag[st.trappola.id] && Math.hypot(ras.x - st.trappola.x, (ras.y - st.trappola.y) * DEPTH) < st.trappola.r) {
    S.flag[st.trappola.id] = true; salva();
    apriBattaglia([{ id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 8, soldi: 14, xp: 20 }, { id: 'ratto', nome: 'Ratto di Ferro', hp: 36, atk: 8, def: 2, spd: 7, soldi: 14, xp: 20 }], 'ratti');
    return;
  }
  if (st.boss && !S.flag.gormFatto && Math.hypot(ras.x - st.boss.x, (ras.y - st.boss.y) * DEPTH) < st.boss.r) {
    ras.y = Math.min(ras.y + 40, st.spawn[1]);
    parla([
      ['RE GORM', 'Re Gorm, delle Fogne. Tu sei il ragazzo senza braccio che cammina ancora. Male.'],
      ['RAS', 'Il braccio c’è. Non è il mio. Il resto sì.'],
    ], () => apriBattaglia([{ id: 'gorm', nome: 'Re Gorm', hp: 110, atk: 13, def: 4, spd: 7, soldi: 40, xp: 60, boss: 1 }, { id: 'guardia', nome: 'Guardia di Gorm', hp: 48, atk: 10, def: 3, spd: 6, soldi: 16, xp: 22 }], 'gorm'));
    return;
  }

  vicino = null;
  let best = 1e9;
  gente.forEach((g) => {
    if (g.id === 'ras') return;
    const d = Math.hypot(ras.x - g.x, (ras.y - g.y) * DEPTH);
    if (d < 80 && d < best) { best = d; vicino = g; }
  });
  (st.doors || []).forEach((p) => {
    const d = Math.hypot(ras.x - p.x, (ras.y - p.y) * DEPTH);
    if (d < p.r && d < best) { best = d; vicino = { id: 'porta', porta: p }; }
  });
  if (st.casse && !S.flag.casse) {
    const d = Math.hypot(ras.x - st.casse.x, (ras.y - st.casse.y) * DEPTH);
    if (d < st.casse.r && d < best) { best = d; vicino = { id: 'casse' }; }
  }
  $('azione').classList.toggle('nascosto', !vicino);
  $('azione').textContent = !vicino ? 'Parla' : vicino.id === 'casse' ? 'Apri' : vicino.id === 'porta' ? (vicino.porta.label || 'Entra') : 'Parla';
}

function interagisci() {
  if (!vicino || modo !== 'gioco' || dlg) return;
  if (vicino.id === 'porta') { entra(vicino.porta.id); return; }
  if (vicino.id === 'casse') {
    S.flag.casse = true; S.soldi += 80; salva(); hud();
    parla([
      ['RAS', 'Casse di Gorm. Le apro.'],
      ['', 'Ottanta soldi del re passano nelle tue tasche. Nel deposito suona un allarme basso.'],
    ], () => {
      apriBattaglia([{ id: 'guardia', nome: 'Guardia di Gorm', hp: 58, atk: 11, def: 3, spd: 7, soldi: 22, xp: 28 }, { id: 'ratto', nome: 'Ratto di Ferro', hp: 34, atk: 8, def: 2, spd: 8, soldi: 12, xp: 16 }], 'casse');
    });
    return;
  }
  const fn = TESTI[vicino.id];
  if (!fn) return;
  if (vicino.id === 'nila') { parla(fn(), () => negozio()); return; }
  parla(fn(), () => { if (vicino) vicino.mode = 'idle'; salva(); });
  vicino.mode = 'talk';
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
    const primo = !S.flag.nila; S.flag.nila = true;
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

function parla(linee, fine) { dlg = { linee, i: 0, fine }; mostraRiga(); }
function mostraRiga() {
  const r = dlg.linee[dlg.i];
  $('dialogo').classList.remove('nascosto');
  $('chi').textContent = r[0] || '';
  $('testo').textContent = r[1];
  $('scelte').innerHTML = '';
}
function avanza() {
  if (!dlg || $('scelte').childElementCount) return;
  dlg.i += 1;
  if (dlg.i >= dlg.linee.length) {
    const fine = dlg.fine; dlg = null;
    $('dialogo').classList.add('nascosto');
    gente.forEach((g) => { if (g.mode === 'talk') g.mode = 'idle'; });
    if (fine) fine(); return;
  }
  mostraRiga();
}
function scelte(lista, fine) {
  dlg = { linee: [['', lista.testo || '']], i: 0, fine: null };
  mostraRiga();
  $('scelte').innerHTML = '';
  lista.voci.forEach((v) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = v[0];
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
  S.soldi -= prezzo; S.oggetti[id] = (S.oggetti[id] || 0) + 1; salva(); hud();
  parla([['NILA', 'Preso. Non sprecarlo sulla prima sbucciatura.']], () => {});
}

function apriBattaglia(gruppo, incontroId) {
  salva();
  const boss = gruppo.some((n) => n.boss);
  const id = incontroId || (boss ? 'gorm' : 'scontro');
  sessionStorage.setItem('pc_battaglia', JSON.stringify({
    from: 'fogne', incontroId: id,
    titolo: boss ? 'Re Gorm' : gruppo.map((n) => n.nome).filter((n, i, a) => a.indexOf(n) === i).join(' · '),
    party: S.party.map((p) => { const s = scheda(p); return { id: p.id, hp: p.hp, hpMax: s.hpMax, mp: p.mp, mpMax: s.mpMax, atk: s.atk, spd: s.spd, lv: s.lv }; }),
    oggetti: { medikit: S.oggetti.medikit || 0, stim: S.oggetti.stim || 0 },
    incontro: gruppo, alba: !!S.flag.braccio,
  }));
  location.href = '../battaglia/?da=fogne&v=7';
}

function vittoria() {
  const xp = bat.nemici.reduce((s, n) => s + (n.xp || 0), 0);
  const soldi = bat.nemici.reduce((s, n) => s + (n.soldi || 0), 0);
  const primaLv = S.party.map((p) => lvDi(p.xp));
  S.party.forEach((p) => {
    const primaMax = scheda(p).hpMax; p.xp += xp; const dopo = scheda(p);
    if (p.hp > 0) p.hp = Math.min(dopo.hpMax, p.hp + (dopo.hpMax - primaMax));
  });
  S.soldi += soldi;
  const su = S.party.some((p, i) => lvDi(p.xp) > primaLv[i]);
  const boss = bat.nemici.some((n) => n.boss);
  bat = null; modo = 'gioco'; $('joy').classList.remove('nascosto'); hud(); salva();
  const extra = su ? ' La squadra sale di livello.' : '';
  if (boss) {
    S.flag.gormFatto = true; salva();
    parla([['', `Gorm cede. +${soldi} soldi, +${xp} esperienza.${extra}`]], () => sceltaGorm());
    return;
  }
  parla([['', `Fine scontro. +${soldi} soldi, +${xp} esperienza.${extra}`]], () => {});
}
function sconfitta() {
  bat = null;
  S.party.forEach((p) => { const s = scheda(p); p.hp = Math.max(1, Math.floor(s.hpMax / 2)); });
  const st = ROOM[S.stanza];
  if (ras && st) { ras.x = st.spawn[0]; ras.y = st.spawn[1]; S.x = ras.x; S.y = ras.y; }
  modo = 'gioco'; $('joy').classList.remove('nascosto'); salva();
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
        if (g) { g.m.visible = false; g.sh.visible = false; }
        chiudiCapitolo([['RAS', 'Per Aram. Per Nadia. E perché tu non scelga al posto di un altro.'], ['', 'Gorm non si rialza. La scelta resta scritta.'], ['KIRI', 'Lo hai fatto tu, non Zero. Ricordatelo quando Rust Alley chiede il conto.']]);
      }],
    ],
  });
}
function chiudiCapitolo(linee) {
  S.flag.fine = true; salva();
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
  { gente: [['aram', 500, 500, 0.2], ['nadia', 620, 490, -0.1], ['rasIntero', 780, 560, -0.4]], linee: [
    ['ARAM', 'Stanotte il vicolo è troppo quieto, Ras. I Varga non pagano il silenzio.'],
    ['NADIA', 'Tuo padre diceva: se il neon trema, qualcuno ha già deciso.'],
    ['RAS', 'Aram, porta Nadia verso il covo. Io chiudo la strada.']] },
  { gente: [['aram', 500, 500, 0.2], ['nadia', 620, 490, 0], ['rasIntero', 800, 560, -0.4], ['zero', 640, 360, Math.PI]], linee: [
    ['ZERO HOLLOW', 'Zero Hollow. Non è un nome. È quello che resta quando una famiglia finisce.'],
    ['ARAM', 'Ras, indietro—'],
    ['', 'Due lampi. Aram e Nadia cadono. Zero non li guarda più.']] },
  { gente: [['rasFerito', 700, 540, 0.2], ['zero', 560, 380, 0.4]], linee: [
    ['ZERO HOLLOW', 'Tu no. Tu devi ricordare chi ha spento i tuoi.'],
    ['', 'La lama gli prende il braccio sinistro. Lo lascia vivo, nella notte rossa.']] },
  { gente: [['rasFerito', 720, 540, 0.2], ['kiri', 560, 480, 0.6]], linee: [
    ['KIRI', 'Ras. Resta qui. Non chiudere gli occhi. Ti porto da chi non fa domande.'],
    ['RAS', 'Aram… Nadia…']] },
  { gente: [['ras', 740, 560, -0.2], ['medico', 600, 430, 0.4], ['kiri', 520, 470, 0.3]], linee: [
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
  Object.values(bgMap).forEach((m) => { m.visible = false; });
  if (passoPrologo >= 4 && bgMap.infermeria) bgMap.infermeria.visible = true;
  svuotaGente(); ras = null;
  DEPTH = 2; TILT = 0.42; poly = ROOM.infermeria.walk; blockers = []; rebuildGrid();
  p.gente.forEach(([id, x, y, yaw]) => metti(id, x, y, yaw, FAB[id]));
  $('luogo').textContent = 'PROLOGO';
  $('sottoLuogo').textContent = 'La notte rossa';
  parla(p.linee, () => {
    passoPrologo += 1;
    if (passoPrologo < PROLOGO.length) scenaPrologo();
    else {
      S.prologo = true; S.flag.braccio = true; S.stanza = 'infermeria'; S.x = 780; S.y = 600;
      modo = 'gioco'; $('joy').classList.remove('nascosto'); salva();
      costruisci('infermeria');
      parla(TESTI.kiri(), () => {});
    }
  });
}

let bat = null;
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
  if (E.party) E.party.forEach((up) => { const p = S.party.find((x) => x.id === up.id); if (p) { p.hp = Math.max(0, up.hp); p.mp = Math.max(0, up.mp); } });
  if (E.oggetti) { S.oggetti.medikit = E.oggetti.medikit || 0; S.oggetti.stim = E.oggetti.stim || 0; }
  costruisci(S.stanza);
  hud();
  bat = { nemici: (E.incontro || []).map((n) => ({ ...n })) };
  if (E.ok) vittoria(); else sconfitta();
  return true;
}

function apriPausa() {
  if (modo !== 'gioco' && modo !== 'pausa') return;
  modo = 'pausa'; $('pausa').classList.remove('nascosto'); mostraScheda('squadra');
}
function mostraScheda(quale) {
  $('schedePausa').innerHTML = '';
  [['squadra', 'Squadra'], ['oggetti', 'Oggetti'], ['salva', 'Salva'], ['opzioni', 'Opzioni']].forEach(([id, n]) => {
    const b = document.createElement('button'); b.textContent = n; b.className = id === quale ? 'on' : '';
    b.onclick = () => mostraScheda(id); $('schedePausa').appendChild(b);
  });
  const el = $('corpoPausa');
  if (quale === 'squadra') {
    el.innerHTML = S.party.map((p) => { const s = scheda(p); return `<p><b>${s.nome}</b> · livello ${s.lv}<br>${p.hp}/${s.hpMax} PV · ${p.mp}/${s.mpMax} PM · attacco ${s.atk}</p>`; }).join('');
  } else if (quale === 'oggetti') {
    el.innerHTML = '';
    const usa = (id, label) => {
      const b = document.createElement('button'); b.textContent = `${label} ×${S.oggetti[id] || 0}`; b.disabled = !(S.oggetti[id] > 0);
      b.onclick = () => {
        const p = S.party[0], s = scheda(p);
        if (id === 'medikit') p.hp = Math.min(s.hpMax, p.hp + 40); else p.mp = Math.min(s.mpMax, p.mp + 12);
        S.oggetti[id] -= 1; salva(); hud(); mostraScheda('oggetti');
      };
      el.appendChild(b);
    };
    usa('medikit', 'Medikit'); usa('stim', 'Stim');
    el.insertAdjacentHTML('beforeend', '<p>Il medikit cura Ras. Lo stim gli rende i PM.</p>');
  } else if (quale === 'salva') {
    salva(); el.innerHTML = '<p>Partita salvata su questo telefono. Il gioco salva da solo a ogni stanza, dopo uno scontro e quando scegli su Gorm.</p>';
  } else {
    el.innerHTML = '';
    const b = document.createElement('button'); b.textContent = muto ? 'Musica: spenta' : 'Musica: accesa';
    b.onclick = () => { muto = !muto; if (audioCtx) (muto ? audioCtx.suspend() : audioCtx.resume()); mostraScheda('opzioni'); };
    el.appendChild(b);
  }
}

function nuova() {
  if (carica() && !confirm('C’è già una partita su questo telefono. La nuova la sostituisce.')) return;
  S = base(); localStorage.removeItem(CHIAVE); musica(); avviaPrologo();
}
function continua() {
  S = carica(); if (!S) return;
  musica(); $('titolo').classList.add('nascosto'); $('hud').classList.remove('nascosto');
  if (!S.prologo) avviaPrologo();
  else { modo = 'gioco'; $('joy').classList.remove('nascosto'); costruisci(S.stanza); }
}

function bind() {
  if (applicaEsito()) return;
  const salvaNota = carica();
  $('continua').disabled = !salvaNota;
  $('notaSalva').textContent = salvaNota ? `Salvataggio: ${ROOM[salvaNota.stanza]?.nome || 'in corso'}${salvaNota.sceltaGorm ? ' · scelta su Gorm fatta' : ''}` : 'Nessuna partita salvata.';
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
  const zona = $('joy'), pomo = $('pomello');
  function setJoy(cx, cy, on) {
    const r = zona.getBoundingClientRect();
    const dx = Math.max(-1, Math.min(1, (cx - (r.left + r.width / 2)) / (r.width / 2)));
    const dy = Math.max(-1, Math.min(1, (cy - (r.top + r.height / 2)) / (r.height / 2)));
    joy = { on, x: dx, y: dy };
    const pad = r.width, knob = pomo.offsetWidth || pad * 0.44, mid = (pad - knob) / 2, travel = pad * 0.24;
    pomo.style.left = (mid + dx * travel) + 'px'; pomo.style.top = (mid + dy * travel) + 'px';
  }
  zona.addEventListener('pointerdown', (e) => { zona.setPointerCapture(e.pointerId); setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointermove', (e) => { if (joy.on) setJoy(e.clientX, e.clientY, true); });
  zona.addEventListener('pointerup', () => { joy = { on: false, x: 0, y: 0 }; const pad = zona.getBoundingClientRect().width, knob = pomo.offsetWidth || pad * 0.44, mid = (pad - knob) / 2; pomo.style.left = mid + 'px'; pomo.style.top = mid + 'px'; });
  $('stage').addEventListener('pointerdown', (e) => {
    if (e.target.closest('button,#dialogo,#pausa,#titolo,#fine,#joy,#hud')) return;
    if (modo !== 'gioco' || dlg || !ras) return;
    const [x, y] = [(e.clientX - OX) / SC, (e.clientY - OY) / SC];
    path = findPath(ras.x, ras.y, x, y);
  });
  addEventListener('pointerdown', () => musica(), { once: true });
}

function frame(ms) {
  const dt = Math.min(0.05, (ms - (frame.t || ms)) / 1000); frame.t = ms; tempo += dt;
  if (modo === 'gioco') cammina(dt);
  gente.forEach((g) => {
    try {
      const inner = g.m.userData.inner || g.m;
      anima(inner, tempo + (g.x || 0) * 0.01, g.mode || (g.moving ? 'walk' : 'idle'));
    } catch (e) {}
    place(g);
  });
  if (luceAlba) {
    luceAlba.intensity = 0;
    try {
      if (ras && S && S.flag.braccio && ras.m.userData.inner) {
        const d = ras.m.userData.inner.userData;
        const end = d && d.armL && d.armL.end;
        if (end) { end.updateWorldMatrix(true, false); end.getWorldPosition(luceAlba.position); luceAlba.intensity = 1.1; }
      }
    } catch (e) {}
  }
  renderer.render(scena, cam);
  requestAnimationFrame(frame);
}

init3d();
bind();
// screen fit like the Covo
(() => {
  const body = document.body, wrap = $('wrap'), stage = $('stage');
  const fit = () => {
    const vv = window.visualViewport, vw = vv ? vv.width : innerWidth, vh = vv ? vv.height : innerHeight;
    body.classList.toggle('portrait', vh > vw && (isTouch || vw < 900));
    const r = wrap.getBoundingClientRect(), w = r.width || vw, h = r.height || vh;
    SC = Math.min(w / W, h / H);
    const ox = (w - W * SC) / 2, oy = (h - H * SC) / 2;
    stage.style.transform = `translate(${ox}px,${oy}px) scale(${SC})`;
    OX = r.left + ox; OY = r.top + oy;
    const pr = Math.max(0.75, Math.min(2.5, SC * (window.devicePixelRatio || 1)));
    if (Math.abs(renderer.getPixelRatio() - pr) > 0.01) { renderer.setPixelRatio(pr); renderer.setSize(W, H, false); }
    window.scrollTo(0, 0);
  };
  let tm = [];
  const sched = () => { tm.forEach(clearTimeout); fit(); tm = [50, 150, 350, 700, 1200].map((ms) => setTimeout(fit, ms)); };
  addEventListener('resize', sched); addEventListener('orientationchange', sched);
  if (window.visualViewport) { visualViewport.addEventListener('resize', sched); visualViewport.addEventListener('scroll', () => window.scrollTo(0, 0)); }
  $('rotok').addEventListener('click', () => { body.classList.add('ok'); sched(); });
  sched();
})();
if (bgMap.infermeria) bgMap.infermeria.visible = true;
requestAnimationFrame(frame);
window.__punk = { room: () => S && S.stanza, warp: (id) => { if (S) { S.x = 0; S.y = 0; costruisci(id); } }, walk, ras: () => ras };
