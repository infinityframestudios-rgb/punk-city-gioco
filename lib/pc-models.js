// PUNK CITY – personaggi 3D low-poly fatti a mano (forme semplici + cel-shading + contorno).
// Altezza ~1 unità, piedi a y=0, guardano verso +z. Ogni modello ha i suoi materiali (per i lampi quando viene colpito).
import * as THREE from './three.module.min.js';
export {THREE};
const GRAD=(()=>{const s=[48,96,150,198,230,255],d=new Uint8Array(s.length*4);s.forEach((v,i)=>{d[i*4]=d[i*4+1]=d[i*4+2]=v;d[i*4+3]=255});const t=new THREE.DataTexture(d,s.length,1,THREE.RGBAFormat);t.minFilter=t.magFilter=THREE.NearestFilter;t.needsUpdate=true;return t})();
export const PI=Math.PI;
function kit(){const mats=[],cache={};
 const OUT=new THREE.MeshBasicMaterial({color:0x07030b,side:THREE.BackSide,transparent:true});mats.push(OUT);OUT.userData.outline=1;
 const M=(c,o={})=>{const k=[c,o.e||0,o.side||0,o.map?o.map.uuid:0].join('_');if(cache[k])return cache[k];
  const m=new THREE.MeshToonMaterial({color:o.map?0xffffff:c,map:o.map||null,gradientMap:GRAD,emissive:o.e||0x000000,transparent:true,side:o.side||THREE.FrontSide});m.userData.e0=new THREE.Color(o.e||0);mats.push(m);return cache[k]=m};
 const P=(par,geo,col,pos=[0,0,0],o={})=>{const m=new THREE.Mesh(geo,col.isMaterial?col:M(col,o));m.position.set(...pos);if(o.rot)m.rotation.set(...o.rot);if(o.sc)m.scale.set(...o.sc);par.add(m);
  if(o.line!==false){const l=new THREE.Mesh(geo,OUT);l.scale.setScalar(o.line||1.08);m.add(l)}return m};
 const G=(par,pos=[0,0,0])=>{const g=new THREE.Group();g.position.set(...pos);par.add(g);return g};
 return{mats,M,P,G,OUT}}
const sph=(r,w=14,h=10)=>new THREE.SphereGeometry(r,w,h),cap=(r,l,s=8)=>new THREE.CapsuleGeometry(r,Math.max(.001,l),3,s),box=(w,h,d)=>new THREE.BoxGeometry(w,h,d),
 cyl=(a,b,h,s=10)=>new THREE.CylinderGeometry(a,b,h,s),cone=(r,h,s=6)=>new THREE.ConeGeometry(r,h,s),
 lathe=(pts,s=14,p0=0,pl=PI*2)=>new THREE.LatheGeometry(pts.map(([x,y])=>new THREE.Vector2(x,y)),s,p0,pl);
// arto a due pezzi con perno in alto (spalla/anca) e gomito/ginocchio
function limb(K,par,pos,len,r,col,o={}){const g=K.G(par,pos);K.P(g,cap(r,len*.5-r),col,[0,-len*.25,0],{line:1.04,map:o.map});const lo=K.G(g,[0,-len*.5,0]);
 K.P(lo,cap(r*.9,len*.5-r),o.lowCol??col,[0,-len*.25,0],{line:1.04,map:o.lowMap||o.map});
 if(o.rings)o.rings.forEach(y=>K.P(lo,cyl(r*.98,r*.98,.014,10),0xffa040,[0,-len*y,0],{e:0xff8a20,line:false}));
 let end=K.G(lo,[0,-len*.5,0]);
 if(o.foot)K.P(end,box(r*2.3,.07,r*3.2),o.footCol??0x0d0b10,[0,.01,r*.65],{line:1.06});
 if(o.hand)K.P(end,sph(r*1.15,8,6),o.handCol??0xe0a988,[0,-r*.15,0],{line:1.08});
 return{g,lo,end}}
// testa con viso semplice: occhi (bianco + iride), sopracciglia, naso, bocca, orecchie
function face(K,head,{r=.075,skin=0xe6ae8c,iris=0x3a1810,brow=0x16101a,stern=.25,eyeGlow=null,mouth=0x8a4038}={}){
 K.P(head,sph(r,16,12),skin,[0,0,0],{sc:[.92,1.05,.96],line:1.04});
 const eyes=[];[-1,1].forEach(s=>{const e=K.G(head,[s*r*.32,r*.08,r*.78]);K.P(e,sph(r*.18,8,6),0xffffff,[0,0,0],{sc:[1.1,.72,.35],line:false});
  const glow=eyeGlow&&s==1;K.P(e,sph(r*.1,8,6),glow?eyeGlow:iris,[0,-r*.01,r*.05],{sc:[1,1,.5],line:false,e:glow?eyeGlow:0});
  K.P(e,sph(r*.035,6,4),0xffffff,[r*.03,r*.03,r*.08],{line:false});eyes.push(e);
  K.P(head,box(r*.34,r*.045,r*.04),brow,[s*r*.34,r*.28,r*.82],{rot:[0,0,-s*stern],line:false});
  K.P(head,sph(r*.14,8,6),skin,[s*r*.92,0,0],{sc:[.35,.85,.6],line:1.05})});
 K.P(head,box(r*.06,r*.1,r*.08),skin,[0,-r*.05,r*.9],{line:false});
 K.P(head,box(r*.22,r*.03,r*.03),mouth,[0,-r*.38,r*.82],{line:false});
 return eyes}

// ---------------- RAS ----------------
export function makeRas({sword='back',alba=true}={}){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const COAT=0x141018,LIN=0xc24b66,VEST=0x8e1a28,PANTS=0x1c1e2a,BOOT=0x101014,SKIN=0xe4b898,HAIR=0x100e14;
 const L=limb(K,body,[-.05,.64,0],.62,.024,PANTS,{foot:1,footCol:BOOT}),R=limb(K,body,[.05,.64,0],.62,.024,PANTS,{foot:1,footCol:BOOT});
 K.P(body,cyl(.085,.095,.05,14),PANTS,[0,.64,0],{sc:[1.2,1,.68],line:1.03});
 const torso=K.G(body,[0,.66,0]);
 K.P(torso,lathe([[.001,-.02],[.062,-.02],[.082,.05],[.098,.14],[.1,.24],[.055,.33],[.001,.35]],18),VEST,[0,.02,.012],{sc:[1,1,.6],line:1.025});
 [.1,.18,.26].forEach(y=>K.P(torso,sph(.007,6,4),0xe6c36a,[0,y,.072],{e:0x4a3810,line:false}));
 const chain=new THREE.Mesh(new THREE.TorusGeometry(.036,.0022,4,16,PI),K.M(0xe6c36a,{e:0x3a2c08}));chain.position.set(.012,.16,.074);chain.rotation.set(.2,0,PI+.2);torso.add(chain);
 K.P(torso,cyl(.09,.095,.025,12),0x0c0c10,[0,0,0],{sc:[1.15,1,.62],line:false});
 K.P(torso,box(.028,.018,.01),0xe6c36a,[.035,0,.05],{e:0x4a3810,line:false});
 const coat=K.G(torso,[0,0,0]);
 const cpts=[[.1,.3],[.108,.2],[.095,.08],[.1,-.04],[.125,-.18],[.16,-.32],[.185,-.4]];
 const gap=1.45,phi=Math.PI/2+gap/2;
 K.P(coat,lathe(cpts,24,phi,Math.PI*2-gap),COAT,[0,0,0],{sc:[1,1,.7],line:1.02});
 K.P(coat,lathe(cpts,24,phi,Math.PI*2-gap),K.M(LIN,{side:THREE.BackSide}),[0,0,0],{sc:[.975,1,.68],line:false});
 [-1,1].forEach(s=>K.P(torso,sph(.048,12,8),COAT,[s*.115,.27,0],{sc:[1.2,.7,1],line:1.03}));
 K.P(torso,lathe([[.055,.28],[.072,.34],[.04,.39]],12,.2,Math.PI*2-.5),COAT,[0,0,-.005],{sc:[1,1,.78],line:1.03});
 K.P(torso,cyl(.028,.032,.045,10),SKIN,[0,.35,0],{line:false});
 function braccioAlba(K,torso){
  const g=K.G(torso,[-.14,.25,0]);
  K.P(g,sph(.036,12,8),0x3a342c,[0,.005,0],{e:0x3a2810,line:1.03});
  K.P(g,cyl(.02,.024,.11,10),0xcbbda0,[0,-.07,0],{e:0x5a4c34,line:1.02});
  const lo=K.G(g,[0,-.13,0]);
  K.P(lo,cyl(.018,.022,.12,10),0xeadcc0,[0,-.07,0],{e:0xfff1d4,line:1.02});
  K.P(lo,cyl(.024,.024,.01,8),0xfff8ea,[0,-.015,0],{e:0xffffff,line:false});
  K.P(lo,cyl(.007,.007,.11,6),0xffb45a,[.022,-.06,0],{e:0xff9a30,line:false});
  const end=K.G(lo,[0,-.13,0]);
  K.P(end,box(.046,.024,.022),0xf6e8d0,[0,-.008,.006],{e:0xfff4dc,line:false});
  [-.014,0,.014].forEach(x=>K.P(end,box(.009,.032,.009),0xf0d8b0,[x,-.03,.008],{e:0xffe0a8,line:false}));
  const palmo=K.P(end,box(.032,.007,.016),0xfff8e8,[0,-.016,.014],{e:0xffffff,line:false});
  const light=new THREE.PointLight(0xffe0a2,.65,1.3,2);light.position.set(0,-.015,.025);end.add(light);
  return{g,lo,end,light,palmo}}
 const armL=limb(K,torso,[.14,.25,0],.4,.022,COAT,{hand:1,handCol:0x141414});
 const armR=alba?braccioAlba(K,torso):limb(K,torso,[-.14,.25,0],.4,.022,COAT,{hand:1,handCol:0x141414});
 const pistol=new THREE.Group();
 K.P(pistol,box(.02,.035,.05),0x161616,[0,0,.028],{line:1.04});
 K.P(pistol,cyl(.007,.007,.06,8),0x101010,[0,.006,.07],{rot:[PI/2,0,0],line:false});
 armL.end.add(pistol);pistol.position.set(0,-.012,.012);pistol.rotation.x=.35;
 const head=K.G(torso,[0,.4,0]);
 const eyes=face(K,head,{r:.058,skin:SKIN,iris:0x3a1812,brow:0x0e0a10,stern:.6,mouth:0x6a3030});
 K.P(head,new THREE.SphereGeometry(.066,18,14,0,PI*2,0,PI*.6),HAIR,[0,.012,-.006],{sc:[1.02,.88,1.02],line:1.025});
 K.P(head,sph(.04,12,8),HAIR,[.015,.006,.015],{sc:[1.45,.5,.65],line:1.03});
 K.P(head,box(.009,.05,.014),0xc41830,[.042,.01,.02],{rot:[.2,0,-.5],e:0x500010,line:false});
 const sw=new THREE.Group();const tip=new THREE.Object3D(),base=new THREE.Object3D();
 K.P(sw,box(.016,.62,.006),0x2a1018,[0,.36,0],{e:0x4a0610,line:1.03});
 K.P(sw,box(.005,.62,.008),0xff2848,[.009,.36,0],{e:0xff1830,line:false});
 K.P(sw,box(.04,.022,.016),0x14080c,[0,.06,0],{line:false});
 K.P(sw,cyl(.01,.01,.1,6),0x0c0c10,[0,0,0]);
 tip.position.y=.68;base.position.y=.05;sw.add(tip,base);
 const putSword=m=>{if(m=='hand'){sw.scale.setScalar(1);armR.end.add(sw);sw.position.set(.01,-.02,.02);sw.rotation.set(PI/2,0,.2)}
  else{torso.add(sw);sw.position.set(.04,.34,-.05);sw.rotation.set(.35,.15,1.05);sw.scale.setScalar(.72)}};
 putSword(sword);
 root.userData={K,body,torso,head,L,R,armL,armR,coat,sword:sw,tip,swBase:base,eyes,putSword,h:1.22,alba:alba?armR.light:null,albaArm:alba?armR:null};ff9(root.userData);return root}

// ---------------- KIRI ----------------
export function makeKiri(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const SUIT=0x1c2532,CL=0x2c4458,TEAL=0x2a7a8a;
 const L=limb(K,body,[-.045,.47,0],.45,.03,SUIT,{foot:1,footCol:0x10141a}),R=limb(K,body,[.045,.47,0],.45,.03,SUIT,{foot:1,footCol:0x10141a});
 K.P(body,cyl(.085,.08,.07,12),SUIT,[0,.47,0],{sc:[1,1,.7]});K.P(body,box(.035,.05,.03),0x3a2a20,[.085,.44,.02],{line:1.1});
 const torso=K.G(body,[0,.49,0]);
 K.P(torso,lathe([[.001,-.02],[.075,-.02],[.08,.08],[.098,.19],[.1,.24],[.06,.3],[.001,.3]],12),SUIT,[0,0,0],{sc:[1,1,.68],line:1.04});
 K.P(torso,box(.012,.2,.004),0x40e0ff,[.035,.14,.07],{e:0x00a0c0,line:false,rot:[0,0,.2]});                                 // linea luminosa della tuta
 const coat=K.G(torso,[0,0,0]);const cp=[[.11,.27],[.105,.15],[.1,.04],[.12,-.06],[.14,-.14]];
 K.P(coat,lathe(cp,14,.9,PI*2-1.8),CL,[0,0,-.005],{sc:[1,1,.8],line:1.03});K.P(coat,lathe(cp,14,.9,PI*2-1.8),K.M(0x16303a,{side:THREE.BackSide}),[0,0,-.005],{sc:[.98,1,.78],line:false});
 K.P(torso,new THREE.TorusGeometry(.06,.028,6,12),TEAL,[0,.3,0],{rot:[PI/2,0,0],sc:[1,.85,1],line:1.06});                    // sciarpa
 K.P(torso,box(.05,.16,.02),TEAL,[-.04,.2,-.07],{rot:[.3,0,.2],line:1.08});
 const armL=limb(K,torso,[.125,.25,0],.34,.028,CL,{hand:1,lowCol:SUIT}),armR=limb(K,torso,[-.125,.25,0],.34,.028,CL,{hand:1,lowCol:SUIT});
 const kunai=new THREE.Group();K.P(kunai,cone(.012,.09,4),0xb0d8e8,[0,.06,0],{e:0x206070,line:false});K.P(kunai,cyl(.007,.007,.05,5),0x111111,[0,0,0],{line:false});armR.end.add(kunai);kunai.rotation.x=PI/2;kunai.position.z=.01;
 const head=K.G(torso,[0,.41,0]);head.scale.setScalar(1.1);
 const eyes=face(K,head,{r:.07,skin:0xd8a68c,iris:0x1a2a30,stern:.12,eyeGlow:0x30f0ff,mouth:0x8a4a48});
 K.P(head,new THREE.SphereGeometry(.076,14,10,0,PI*2,0,PI*.5),0x14262e,[0,.012,-.006],{rot:[-.5,0,0],line:1.05});
 [[-.04,.045,.062,.4],[0,.05,.07,.05],[.035,.045,.064,-.35]].forEach(([x,y,z,rz])=>K.P(head,cone(.02,.06,4),0x14262e,[x,y,z],{rot:[PI-.6,0,rz],line:1.1}));
 K.P(head,new THREE.SphereGeometry(.098,14,10,PI/2+PI*.3,PI*2-PI*.6,0,PI*.8),CL,[0,.0,-.005],{line:1.04,side:THREE.DoubleSide}); // cappuccio aperto davanti
 K.P(head,cone(.05,.1,8),CL,[0,.09,-.04],{rot:[-.6,0,0],line:1.06});
 root.userData={K,body,torso,head,L,R,armL,armR,coat,kunai,eyes,h:.93};ff9(root.userData);return root}

// ---------------- RATTO DI FERRO ----------------
export function makeRatto(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const FUR=0x6e6a76,HOOD=0x43285a,PANTS=0x23202a,MET=0x55525c;
 const L=limb(K,body,[-.07,.44,0],.42,.04,PANTS,{foot:1,footCol:0x141216}),R=limb(K,body,[.07,.44,0],.42,.04,PANTS,{foot:1,footCol:0x141216});
 L.g.rotation.x=-.25;L.lo.rotation.x=.45;R.g.rotation.x=.1;R.lo.rotation.x=.3;
 const torso=K.G(body,[0,.45,0]);torso.rotation.x=.38;
 K.P(torso,lathe([[.001,-.03],[.105,-.03],[.12,.08],[.14,.2],[.13,.27],[.07,.32],[.001,.33]],12),HOOD,[0,0,0],{sc:[1,1,.8],line:1.04});
 [[.05,.1,.1],[-.06,.18,.1],[.0,.05,-.11]].forEach(([x,y,z])=>K.P(torso,box(.04,.04,.01),0x6aa040,[x,y,z],{rot:[0,0,.4],e:0x203010,line:false})); // toppe verdi
 K.P(torso,sph(.07,10,8),MET,[-.13,.27,0],{sc:[1.2,.8,1.1],line:1.06,flat:true});[0,1,2].forEach(i=>K.P(torso,cone(.016,.06,5),0xa0a0aa,[-.15+i*.02,.32,-.02+i*.02],{rot:[0,0,.5-i*.3],line:false}));
 K.P(torso,new THREE.SphereGeometry(.1,12,8,0,PI*2,0,PI*.5),HOOD,[0,.29,-.05],{rot:[-.9,0,0],line:1.04,side:THREE.DoubleSide});   // cappuccio abbassato
 const armL=limb(K,torso,[.15,.25,0],.38,.038,HOOD,{hand:1,handCol:0x2a2830,lowCol:0x2a2830}),armR=limb(K,torso,[-.15,.25,0],.38,.038,HOOD,{hand:1,handCol:0x2a2830});
 armL.g.rotation.set(-.5,0,.25);armL.lo.rotation.x=-.9;armR.g.rotation.set(-.3,0,-.2);armR.lo.rotation.x=-.8;
 const club=new THREE.Group();K.P(club,cyl(.022,.028,.5,8),0x7a3e22,[0,.2,0],{line:1.08});[.1,.25,.38].forEach(y=>K.P(club,cyl(.03,.03,.02,8),0x40362e,[0,y,0],{line:false}));armL.end.add(club);club.rotation.x=PI/2+.3;
 const head=K.G(torso,[0,.36,.05]);head.rotation.x=-.3;
 K.P(head,sph(.085,14,10),FUR,[0,0,0],{sc:[.95,.9,1.05],line:1.05});
 K.P(head,cone(.06,.15,10),FUR,[0,-.02,.1],{rot:[PI/2,0,0],line:1.06});K.P(head,sph(.018,8,6),0xd07080,[0,-.02,.18],{line:false});
 const eyes=[];[-1,1].forEach(s=>{const e=K.G(head,[s*.04,.025,.065]);K.P(e,sph(.016,8,6),0xffe040,[0,0,0],{e:0xb09000,sc:[1,.7,.6],line:false});K.P(e,sph(.007,6,4),0x000000,[0,0,.009],{line:false});eyes.push(e);
  K.P(head,box(.04,.008,.01),0x111111,[s*.04,.05,.07],{rot:[0,0,s*.45],line:false});
  const ear=K.G(head,[s*.065,.07,-.01]);K.P(ear,sph(.045,10,8),FUR,[0,.02,0],{sc:[1,1,.3],line:1.08});K.P(ear,sph(.03,8,6),0xc07a88,[0,.02,.012],{sc:[1,1,.2],line:false});ear.rotation.z=-s*.4;
  K.P(head,cone(.007,.025,4),0xf0f0e0,[s*.015,-.06,.15],{rot:[PI,0,0],line:false})});
 K.P(head,cyl(.012,.012,.02,6),0xb0b0b8,[.07,.0,.02],{rot:[0,0,PI/2],line:false});               // piercing
 // coda di metallo
 const pts=[[0,.42,-.08],[0,.3,-.25],[.05,.12,-.38],[.15,.05,-.5],[.25,.12,-.58]].map(p=>new THREE.Vector3(...p));
 const tail=K.P(body,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),16,.014,5),0x8a8090,[0,0,0],{line:1.15});
 root.userData={K,body,torso,head,L,R,armL,armR,club,tail,eyes,h:1};ff9(root.userData);return root}

// ---------------- DRONE VESPA ----------------
export function makeDrone(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const Y=0xf0c020,B=0x18161c;
 const core=K.G(body,[0,0,0]);
 for(let i=0;i<5;i++)K.P(core,cyl(.12-Math.abs(i-1.5)*.012,.12-Math.abs(i-1.5)*.012,.07,12),i%2?Y:B,[0,0,-.12+i*.06],{rot:[PI/2,0,0],line:i==0||i==4?1.04:false,flat:false});
 K.P(core,sph(.12,14,10),B,[0,0,.17],{sc:[1,.9,.8],line:1.04});
 const eye=K.P(core,sph(.05,12,8),0xff2030,[0,0,.25],{e:0xff1020,line:false});
 K.P(core,cone(.07,.18,10),Y,[0,0,-.27],{rot:[-PI/2,0,0],line:1.05});K.P(core,cone(.02,.1,6),B,[0,0,-.4],{rot:[-PI/2,0,0],line:false});  // pungiglione
 const gun=K.G(core,[0,-.13,.05]);K.P(gun,cyl(.035,.035,.2,10),B,[0,0,.05],{rot:[PI/2,0,0]});K.P(gun,cyl(.024,.024,.01,10),0xff3040,[0,0,.155],{rot:[PI/2,0,0],e:0xff1020,line:false});
 const muzzle=new THREE.Object3D();muzzle.position.set(0,0,.17);gun.add(muzzle);
 const rotors=[];[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([sx,sz])=>{const arm=K.P(core,box(.25,.025,.025),B,[sx*.15,.08,sz*.1],{rot:[0,-sx*sz*.6,0],line:1.1});
  const hub=K.G(core,[sx*.26,.11,sz*.18]);K.P(hub,cyl(.03,.03,.04,8),Y,[0,0,0]);const disc=new THREE.Mesh(new THREE.CircleGeometry(.13,20),new THREE.MeshBasicMaterial({color:0xfff080,transparent:true,opacity:.3,side:THREE.DoubleSide,depthWrite:false}));
  disc.rotation.x=-PI/2;disc.position.y=.03;hub.add(disc);K.mats.push(disc.material);const bl=K.P(hub,box(.24,.004,.03),0x333333,[0,.03,0],{line:false});rotors.push(bl)});
 root.userData={K,body,core,eye,gun,muzzle,rotors,h:.5,flying:1};ff9(root.userData);return root}

// ---------------- LYRA ----------------
export function makeLyra(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const JACK=0x3a1230,PINK=0xff4f9a,PANT=0x1a1020;
 const L=limb(K,body,[-.048,.48,0],.46,.03,PANT,{foot:1,footCol:0x120810}),R=limb(K,body,[.048,.48,0],.46,.03,PANT,{foot:1,footCol:0x120810});
 K.P(body,cyl(.082,.078,.06,12),PANT,[0,.48,0],{sc:[1,1,.7]});
 const torso=K.G(body,[0,.5,0]);
 K.P(torso,lathe([[.001,-.02],[.07,-.02],[.078,.1],[.09,.2],[.055,.28],[.001,.29]],12),0x2a0c22,[0,0,0],{sc:[1,1,.66],line:1.04});
 K.P(torso,box(.16,.22,.04),JACK,[0,.12,-.02],{line:1.04});
 K.P(torso,box(.02,.18,.012),PINK,[.055,.12,.03],{e:0xff2080,line:false});
 const armL=limb(K,torso,[.13,.24,0],.34,.026,JACK,{hand:1}),armR=limb(K,torso,[-.13,.24,0],.34,.026,JACK,{hand:1});
 const whip=K.G(armR.end,[0,-.02,.02]);
 const curva=new THREE.QuadraticBezierCurve3(new THREE.Vector3(0,0,0),new THREE.Vector3(.15,.05,.2),new THREE.Vector3(.28,-.15,.05));
 K.P(whip,new THREE.TubeGeometry(curva,12,.012,6),PINK,[0,0,0],{e:0xff3088,line:false});
 const head=K.G(torso,[0,.38,0]);head.scale.setScalar(1.08);
 const eyes=face(K,head,{r:.07,skin:0xf0b89a,iris:0xff4fa0,stern:.05,eyeGlow:0xff4fa0,mouth:0xa84868});
 const hair=0x140810;
 K.P(head,new THREE.SphereGeometry(.08,14,10,0,PI*2,0,PI*.55),hair,[0,.02,-.01],{rot:[-.35,0,0],line:1.05});
 [[-.05,.02,-.04],[.05,.02,-.04]].forEach(([x,y,z],i)=>K.P(head,box(.03,.16,.03),hair,[x,y,z],{rot:[.2,0,i?-.3:.3],line:1.06}));
 K.P(head,cone(.018,.1,4),PINK,[.04,.07,.04],{rot:[-.4,0,-.5],e:0x802050,line:false});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,whip,h:.95};ff9(root.userData);return root}

// ---------------- SABLE ----------------
export function makeSable(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const COAT=0x102028,CYAN=0x3de0ff;
 const L=limb(K,body,[-.05,.5,0],.5,.032,0x0c1418,{foot:1,footCol:0x080c10}),R=limb(K,body,[.05,.5,0],.5,.032,0x0c1418,{foot:1,footCol:0x080c10});
 K.P(body,cyl(.09,.085,.06,12),0x0c1418,[0,.5,0],{sc:[1,1,.68]});
 const torso=K.G(body,[0,.52,0]);
 K.P(torso,lathe([[.001,-.02],[.08,-.02],[.09,.12],[.1,.24],[.06,.32],[.001,.33]],12),COAT,[0,0,0],{sc:[1,1,.64],line:1.04});
 K.P(torso,box(.2,.42,.05),COAT,[0,.08,-.03],{line:1.03});
 K.P(torso,box(.012,.28,.012),CYAN,[0,.1,.02],{e:0x00c0e0,line:false});
 const armL=limb(K,torso,[.14,.26,0],.36,.028,COAT,{hand:1,handCol:0xc89880}),armR=limb(K,torso,[-.14,.26,0],.36,.028,COAT,{hand:1,handCol:0xc89880});
 const rifle=K.G(torso,[.08,.2,-.08]);
 K.P(rifle,box(.03,.62,.03),0x1a1418,[0,.1,0],{line:1.04});
 K.P(rifle,box(.012,.5,.012),0xff2040,[.02,.15,0],{e:0xff1028,line:false});
 K.P(rifle,cone(.02,.12,5),0xd0dde8,[0,.48,0],{e:0x406070,line:false});
 const head=K.G(torso,[0,.42,0]);head.scale.setScalar(1.05);
 const eyes=face(K,head,{r:.08,skin:0xd8b8a4,iris:0x143040,stern:.4,eyeGlow:0x40f0ff,mouth:0x704048});
 K.P(head,new THREE.SphereGeometry(.072,12,8,0,PI*2,0,PI*.48),0x0c1014,[0,.03,0],{line:1.05});
 K.P(head,box(.09,.02,.04),0x0c1014,[0,.055,.04],{line:false});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,rifle,h:1.02};ff9(root.userData);return root}

// ---------------- MEDICO, ZERO, GORM ----------------
export function makeMedico(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.05,.48,0],.46,.032,0x1a1c22,{foot:1}),R=limb(K,body,[.05,.48,0],.46,.032,0x1a1c22,{foot:1});
 const torso=K.G(body,[0,.5,0]);
 K.P(torso,lathe([[.001,-.02],[.1,-.02],[.11,.16],[.1,.28],[.05,.34],[.001,.35]],12),0xf2f4f6,[0,0,0],{sc:[1,1,.7],line:1.04});
 K.P(torso,box(.16,.08,.02),0xc23a4a,[0,.12,.07],{line:false});
 const armL=limb(K,torso,[.14,.26,0],.34,.03,0xf2f4f6,{hand:1}),armR=limb(K,torso,[-.14,.26,0],.34,.03,0xf2f4f6,{hand:1});
 const head=K.G(torso,[0,.4,0]);
 const eyes=face(K,head,{r:.072,skin:0xc8a088,iris:0x203040,stern:.1,mouth:0x604040});
 K.P(head,box(.09,.035,.02),0xd8dee6,[0,.04,.07],{line:false});
 K.P(head,sph(.02,8,6),0x40e080,[.05,.02,.08],{e:0x20c060,line:false});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,h:.96};ff9(root.userData);return root}

export function makeZero(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.07,.55,0],.55,.04,0x10080c,{foot:1,footCol:0x080406}),R=limb(K,body,[.07,.55,0],.55,.04,0x10080c,{foot:1,footCol:0x080406});
 const torso=K.G(body,[0,.58,0]);
 K.P(torso,lathe([[.001,-.02],[.12,-.02],[.13,.18],[.14,.32],[.08,.42],[.001,.43]],10),0x14080c,[0,0,0],{sc:[1,1,.7],line:1.03});
 K.P(torso,box(.02,.36,.012),0xff2030,[0,.16,.08],{e:0xff1020,line:false});
 const armL=limb(K,torso,[.16,.3,0],.42,.036,0x10080c,{hand:1,handCol:0x201014}),armR=limb(K,torso,[-.16,.3,0],.42,.036,0x10080c,{hand:1,handCol:0x201014});
 const lama=K.G(armR.end);K.P(lama,box(.012,.42,.04),0xc0c8d0,[0,.16,0],{e:0x8090a0,line:false});
 const head=K.G(torso,[0,.48,0]);
 K.P(head,box(.12,.14,.1),0x0a0608,[0,0,0],{line:1.04});
 const eyes=[];[-1,1].forEach(s=>{const e=K.P(head,box(.035,.012,.01),0xff2030,[s*.03,.02,.055],{e:0xff1020,line:false});eyes.push(e)});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,lama,h:1.2};ff9(root.userData);return root}

export function makeGorm(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.09,.5,0],.48,.05,0x2a140c,{foot:1,footCol:0x100804}),R=limb(K,body,[.09,.5,0],.48,.05,0x2a140c,{foot:1,footCol:0x100804});
 const torso=K.G(body,[0,.52,0]);
 K.P(torso,lathe([[.001,-.04],[.16,-.04],[.18,.12],[.17,.28],[.1,.36],[.001,.37]],12),0x6a1830,[0,0,0],{sc:[1.15,1,.8],line:1.03});
 K.P(torso,box(.22,.1,.04),0xe0b048,[0,.2,.1],{e:0x806020,line:false});
 const armL=limb(K,torso,[.2,.26,0],.36,.045,0x4a1020,{hand:1,handCol:0xc09070}),armR=limb(K,torso,[-.2,.26,0],.36,.045,0x4a1020,{hand:1,handCol:0xc09070});
 const head=K.G(torso,[0,.42,0]);head.scale.setScalar(1.15);
 const eyes=face(K,head,{r:.08,skin:0xc89878,iris:0x401810,stern:.55,mouth:0x602020});
 for(let i=0;i<5;i++)K.P(head,cyl(.012,.02,.16,5),0xb08a40,[Math.cos(i/5*PI*2)*.09,.1,Math.sin(i/5*PI*2)*.09],{e:0x806030,line:false});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,h:1.15};ff9(root.userData);return root}

export function makeBrick(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.1,.52,0],.5,.055,0x3a2a24,{foot:1}),R=limb(K,body,[.1,.52,0],.5,.055,0x3a2a24,{foot:1});
 const torso=K.G(body,[0,.54,0]);
 K.P(torso,box(.34,.4,.2),0x8a4030,[0,.12,0],{line:1.03});
 const armL=limb(K,torso,[.22,.28,0],.38,.05,0x6a3428,{hand:1}),armR=limb(K,torso,[-.22,.28,0],.38,.05,0x6a3428,{hand:1});
 const head=K.G(torso,[0,.42,0]);
 const eyes=face(K,head,{r:.09,skin:0xd0a888,iris:0x302010,stern:.2,mouth:0x704040});
 K.P(head,box(.16,.04,.08),0x3a241c,[0,.08,0],{line:1.05});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,h:1.2};ff9(root.userData);return root}

export function makeVex(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.05,.48,0],.46,.03,0x241830,{foot:1}),R=limb(K,body,[.05,.48,0],.46,.03,0x241830,{foot:1});
 const torso=K.G(body,[0,.5,0]);
 K.P(torso,lathe([[.001,-.02],[.09,-.02],[.1,.14],[.08,.26],[.04,.32],[.001,.33]],10),0x3a2060,[0,0,0],{sc:[1,1,.7],line:1.04});
 const armL=limb(K,torso,[.13,.24,0],.32,.028,0x2a1848,{hand:1}),armR=limb(K,torso,[-.13,.24,0],.32,.028,0x2a1848,{hand:1});
 const head=K.G(torso,[0,.38,0]);
 const eyes=face(K,head,{r:.07,skin:0xe4c0b0,iris:0x204060,stern:.05,mouth:0x804858});
 K.P(head,cyl(.012,.012,.22,6),0x9b6bff,[0,.02,-.1],{rot:[PI/2,0,0],e:0x6633aa,line:false});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,h:.94};ff9(root.userData);return root}

export function makeMercante(){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.06,.5,0],.5,.035,0x140810,{foot:1}),R=limb(K,body,[.06,.5,0],.5,.035,0x140810,{foot:1});
 const torso=K.G(body,[0,.52,0]);
 K.P(torso,lathe([[.001,-.02],[.12,-.02],[.14,.18],[.1,.32],[.04,.4],[.001,.41]],12),0x1a1020,[0,0,0],{sc:[1,1,.75],line:1.04});
 const armL=limb(K,torso,[.16,.26,0],.36,.03,0x120810,{hand:1,handCol:0xd8d2c8}),armR=limb(K,torso,[-.16,.26,0],.36,.03,0x120810,{hand:1,handCol:0xd8d2c8});
 const head=K.G(torso,[0,.42,0]);
 K.P(head,sph(.09,16,12),0xe8e4dc,[0,0,0],{sc:[.9,1.15,.82],line:1.04});
 root.userData={K,body,torso,head,L,R,armL,armR,h:1.05};ff9(root.userData);return root}

export function makeCittadino(colore=0x243044,pelle=0xe0b090){const K=kit(),root=new THREE.Group(),body=K.G(root);
 const L=limb(K,body,[-.05,.48,0],.46,.03,colore,{foot:1}),R=limb(K,body,[.05,.48,0],.46,.03,colore,{foot:1});
 const torso=K.G(body,[0,.5,0]);
 K.P(torso,lathe([[.001,-.02],[.09,-.02],[.1,.14],[.08,.26],[.04,.32],[.001,.33]],10),colore,[0,0,0],{sc:[1,1,.7],line:1.04});
 const armL=limb(K,torso,[.13,.24,0],.32,.028,colore,{hand:1}),armR=limb(K,torso,[-.13,.24,0],.32,.028,colore,{hand:1});
 const head=K.G(torso,[0,.38,0]);
 const eyes=face(K,head,{r:.07,skin:pelle,iris:0x302418,stern:.15});
 K.P(head,new THREE.SphereGeometry(.075,12,8,0,PI*2,0,PI*.5),0x1a120c,[0,.02,0],{line:1.05});
 root.userData={K,body,torso,head,L,R,armL,armR,eyes,h:.94};ff9(root.userData);return root}

function ff9(){}

export function anima(model,t,mode='idle'){
 const d=model.userData;if(!d||!d.L||d.freeze)return;
 const walk=mode==='walk',talk=mode==='talk',fight=mode==='fight';
 const sp=walk?1:fight?8.5:1.6,s=Math.sin(t*sp),c=Math.cos(t*sp);
 d.body.position.y=walk?Math.abs(Math.sin(t*2))*.015:Math.sin(t*1.5)*.008;
 d.torso.rotation.x=(walk?.06:0)+(talk?Math.sin(t*6)*.04:0);
 d.torso.rotation.y=talk?Math.sin(t*2.1)*.14:walk?s*.05:Math.sin(t*.7)*.03;
 if(d.head){d.head.rotation.x=talk?Math.sin(t*7)*.08:0;d.head.rotation.y=talk?Math.sin(t*1.6)*.16:walk?s*.04:0}
 const leg=walk?s*.5:fight?s*.1:Math.sin(t*1.1)*.03;
 d.L.g.rotation.x=leg;d.R.g.rotation.x=-leg;
 d.L.lo.rotation.x=walk?Math.max(0,-s)*.95:.06;d.R.lo.rotation.x=walk?Math.max(0,s)*.95:.06;
 if(d.armL&&d.armR){
  if(fight){d.armR.g.rotation.x=-.35+s*1.15;d.armR.lo.rotation.x=-.45;d.armL.g.rotation.x=-.25-s*.45;d.armL.lo.rotation.x=-.3}
  else{d.armL.g.rotation.x=walk?s*.4:-.08;d.armR.g.rotation.x=walk?-s*.4:-.08;d.armL.lo.rotation.x=d.armR.lo.rotation.x=walk?-.2:-.12}
 }
 if(d.coat){d.coat.rotation.z=walk?s*.05:0;d.coat.rotation.x=walk?.04:0}
 if(d.alba)d.alba.intensity=1.05+Math.sin(t*3)*.3;
 if(d.whip)d.whip.rotation.z=Math.sin(t*(fight?12:2))*(fight?.7:.06);
 if(d.rotors)d.rotors.forEach((r,i)=>r.rotation.y+=.4*(i%2?1:-1));
}

// lampo bianco/colore su tutto il modello (quando viene colpito)
export function flash(model,col=0xffffff,amt=1){model.userData.K.mats.forEach(m=>{if(m.userData.outline||!m.emissive)return;m.emissive.copy(m.userData.e0).lerp(new THREE.Color(col),amt)})}
export function setOpacity(model,a){model.userData.K.mats.forEach(m=>{m.opacity=a*(m.userData.op0??(m.userData.op0=m.opacity))})}
