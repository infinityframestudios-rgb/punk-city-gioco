var $c=1,$h=2,xn=3,an=0,pt=1,pl=2;var ni=100;var Ha=204,Va=205;var ml=0,Qh=1,eu=2,Un=0,tu=1,nu=2,iu=3,ru=4,su=5,au=6,ou=7;var Qc=300,Ci=301,Pi=302,Wa=303,Xa=304,Xs=306,ja=1e3,lr=1001,qa=1002,wt=1003,lu=1004;var Ur=1005;var sn=1006,sa=1007;var Ti=1008;var Sn=1009,eh=1010,th=1011,cr=1012,fl=1013,si=1014,Mn=1015,br=1016,gl=1017,vl=1018,Li=1020,nh=35902,ih=1021,rh=1022,Dt=1023,sh=1024,ah=1025,hr=1026,Ii=1027,oh=1028,_l=1029,lh=1030,xl=1031;var yl=1033,os=33776,ls=33777,cs=33778,hs=33779,Ya=35840,Za=35841,Ja=35842,Ka=35843,$a=36196,Qa=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,po=37819,mo=37820,fo=37821,us=36492,go=36494,vo=36495,ch=36283,_o=36284,xo=36285,yo=36286;var ms=2300,Mo=2301,aa=2302,$l=2400,Ql=2401,ec=2402;var Ei="",nn="srgb",zn="srgb-linear",Ml="display-p3",js="display-p3-linear",fs="linear",Ze="srgb",gs="rec709",vs="p3";var ui=7680;var hh=515;var tc=35044;var nc="300 es",Ui=2e3,_s=2001,Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ds=Math.PI/180,So=180/Math.PI;function Hi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(vt[255&i]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[255&e]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[63&t|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[255&n]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function oa(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pe=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],y=r[0],g=r[3],m=r[6],_=r[1],v=r[4],x=r[7],C=r[2],T=r[5],R=r[8];return s[0]=a*y+o*_+l*C,s[3]=a*g+o*v+l*T,s[6]=a*m+o*x+l*R,s[1]=c*y+h*_+u*C,s[4]=c*g+h*v+u*T,s[7]=c*m+h*x+u*R,s[2]=d*y+p*_+f*C,s[5]=d*g+p*v+f*T,s[8]=d*m+p*x+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=u*y,e[1]=(r*c-h*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},la=new Pe;function uh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hu(){let i=xs("canvas");return i.style.display="block",i}var ic={};function ps(i){i in ic||(ic[i]=!0,console.warn(i))}var rc=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sc=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[zn]:{transfer:fs,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[nn]:{transfer:Ze,primaries:gs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[js]:{transfer:fs,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(sc),fromReference:i=>i.applyMatrix3(rc)},[Ml]:{transfer:Ze,primaries:vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(sc),fromReference:i=>i.applyMatrix3(rc).convertLinearToSRGB()}},uu=new Set([zn,js]),Ve={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ki[e].toReference;return(0,Ki[t].fromReference)(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ki[i].primaries},getTransfer:function(i){return i===Ei?fs:Ki[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ki[e].luminanceCoefficients)}};function Ai(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function ca(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var di,bo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=xs("canvas")),di.width=e.width,di.height=e.height;let n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Ai(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Ai(t[n]/255)):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},du=0,ys=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ha(r[a].image)):s.push(ha(r[a]))}else s=ha(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pu=0,Nt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=Dt,l=Sn,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Hi(),this.name="",this.source=new ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=Qc,Nt.DEFAULT_ANISOTROPY=1;var We=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,C=(m+1)/2,T=(h+d)/4,R=(u+y)/4,U=(f+g)/4;return v>x&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=T/n,s=R/n):x>C?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=U/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=U/s),this.set(n,r,s,t),this}let _=Math.sqrt((g-f)*(g-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Nt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ys(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ms=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==f){let g=1-o,m=l*d+c*p+h*f+u*y,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*_);g=Math.sin(g*T)/C,o=Math.sin(o*T)/C}let x=o*_;if(l=l*g+d*x,c=c*g+p*x,h=h*g+f*x,u=u*g+y*x,g===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ua=new E,ac=new on,ln=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Nr.subVectors(this.max,$i),pi.subVectors(e.a,$i),mi.subVectors(e.b,$i),fi.subVectors(e.c,$i),wn.subVectors(mi,pi),An.subVectors(fi,mi),Zn.subVectors(pi,fi);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Zn.z,Zn.y,wn.z,0,-wn.x,An.z,0,-An.x,Zn.z,0,-Zn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Zn.y,Zn.x,0];return!!da(t,pi,mi,fi,Nr)&&(t=[1,0,0,0,1,0,0,0,1],!!da(t,pi,mi,fi,Nr)&&(Or.crossVectors(wn,An),t=[Or.x,Or.y,Or.z],da(t,pi,mi,fi,Nr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Zt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mn=[new E,new E,new E,new E,new E,new E,new E,new E],Zt=new E,Dr=new ln,pi=new E,mi=new E,fi=new E,wn=new E,An=new E,Zn=new E,$i=new E,Nr=new E,Or=new E,Jn=new E;function da(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Jn.fromArray(i,s);let o=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mu=new ln,Qi=new E,pa=new E,cn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(pa)),this.expandByPoint(Qi.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new E,ma=new E,Fr=new E,Rn=new E,fa=new E,Br=new E,ga=new E,Di=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ma.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(ma);let s=.5*e.distanceTo(t),a=-this.direction.dot(Fr),o=Rn.dot(this.direction),l=-Rn.dot(Fr),c=Rn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ma).addScaledVector(Fr,d),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){fa.subVectors(t,e),Br.subVectors(n,e),ga.crossVectors(fa,Br);let a,o=this.direction.dot(ga);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Rn.subVectors(this.origin,e);let l=a*this.direction.dot(Br.crossVectors(Rn,Br));if(l<0)return null;let c=a*this.direction.dot(fa.cross(Rn));if(c<0||l+c>o)return null;let h=-a*Rn.dot(ga);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,f,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,y,g)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,f,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d+y*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,gu)}lookAt(e,t,n){let r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Cn.crossVectors(n,It),Cn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Cn.crossVectors(n,It)),Cn.normalize(),zr.crossVectors(It,Cn),r[0]=Cn.x,r[4]=zr.x,r[8]=It.x,r[1]=Cn.y,r[5]=zr.y,r[9]=It.y,r[2]=Cn.z,r[6]=zr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],y=n[6],g=n[10],m=n[14],_=n[3],v=n[7],x=n[11],C=n[15],T=r[0],R=r[4],U=r[8],N=r[12],B=r[1],H=r[5],z=r[9],q=r[13],G=r[2],Y=r[6],j=r[10],re=r[14],se=r[3],le=r[7],_e=r[11],Q=r[15];return s[0]=a*T+o*B+l*G+c*se,s[4]=a*R+o*H+l*Y+c*le,s[8]=a*U+o*z+l*j+c*_e,s[12]=a*N+o*q+l*re+c*Q,s[1]=h*T+u*B+d*G+p*se,s[5]=h*R+u*H+d*Y+p*le,s[9]=h*U+u*z+d*j+p*_e,s[13]=h*N+u*q+d*re+p*Q,s[2]=f*T+y*B+g*G+m*se,s[6]=f*R+y*H+g*Y+m*le,s[10]=f*U+y*z+g*j+m*_e,s[14]=f*N+y*q+g*re+m*Q,s[3]=_*T+v*B+x*G+C*se,s[7]=_*R+v*H+x*Y+C*le,s[11]=_*U+v*z+x*j+C*_e,s[15]=_*N+v*q+x*re+C*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],y=e[13],g=e[14],m=e[15],_=u*g*c-y*d*c+y*l*p-o*g*p-u*l*m+o*d*m,v=f*d*c-h*g*c-f*l*p+a*g*p+h*l*m-a*d*m,x=h*y*c-f*u*c+f*o*p-a*y*p-h*o*m+a*u*m,C=f*u*l-h*y*l-f*o*d+a*y*d+h*o*g-a*u*g,T=t*_+n*v+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=_*R,e[1]=(y*d*s-u*g*s-y*r*p+n*g*p+u*r*m-n*d*m)*R,e[2]=(o*g*s-y*l*s+y*r*c-n*g*c-o*r*m+n*l*m)*R,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=v*R,e[5]=(h*g*s-f*d*s+f*r*p-t*g*p-h*r*m+t*d*m)*R,e[6]=(f*l*s-a*g*s-f*r*c+t*g*c+a*r*m-t*l*m)*R,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=x*R,e[9]=(f*u*s-h*y*s-f*n*p+t*y*p+h*n*m-t*u*m)*R,e[10]=(a*y*s-f*o*s+f*n*c-t*y*c-a*n*m+t*o*m)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=C*R,e[13]=(h*y*r-f*u*r+f*n*d-t*y*d-h*n*g+t*u*g)*R,e[14]=(f*o*r-a*y*r-f*n*l+t*y*l+a*n*g-t*o*g)*R,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,y=a*h,g=a*u,m=o*u,_=l*c,v=l*h,x=l*u,C=n.x,T=n.y,R=n.z;return r[0]=(1-(y+m))*C,r[1]=(p+x)*C,r[2]=(f-v)*C,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(d+m))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(f+v)*R,r[9]=(g-_)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=gi.set(r[0],r[1],r[2]).length(),a=gi.set(r[4],r[5],r[6]).length(),o=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);let l=1/s,c=1/a,h=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,f;if(o===Ui)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==_s)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,f,y;if(o===Ui)f=(a+s)*u,y=-2*u;else{if(o!==_s)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gi=new E,Jt=new we,fu=new E(0,0,0),gu=new E(1,1,1),Cn=new E,zr=new E,It=new E,oc=new we,lc=new on,hn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},vu=0,cc=new E,vi=new on,gn=new we,kr=new E,er=new E,_u=new E,xu=new on,hc=new E(1,0,0),uc=new E(0,1,0),dc=new E(0,0,1),pc={type:"added"},yu={type:"removed"},_i={type:"childadded",child:null},va={type:"childremoved",child:null},gt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new hn,n=new on,r=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Pe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(er,kr,this.up):gn.lookAt(kr,er,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pc),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yu),va.child=e,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pc),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,_u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};gt.DEFAULT_UP=new E(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new E,vn=new E,_a=new E,_n=new E,xi=new E,yi=new E,mc=new E,xa=new E,ya=new E,Ma=new E,Sa=new We,ba=new We,Ea=new We,In=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),vn.subVectors(n,t),_a.subVectors(e,t);let a=Kt.dot(Kt),o=Kt.dot(vn),l=Kt.dot(_a),c=vn.dot(vn),h=vn.dot(_a),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n)!==null&&_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Sa.setScalar(0),ba.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sa,s.x),a.addScaledVector(ba,s.y),a.addScaledVector(Ea,s.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),vn.subVectors(e,t),Kt.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),.5*Kt.cross(vn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;xi.subVectors(r,n),yi.subVectors(s,n),xa.subVectors(e,n);let l=xi.dot(xa),c=yi.dot(xa);if(l<=0&&c<=0)return t.copy(n);ya.subVectors(e,r);let h=xi.dot(ya),u=yi.dot(ya);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xi,a);Ma.subVectors(e,s);let p=xi.dot(Ma),f=yi.dot(Ma);if(f>=0&&p<=f)return t.copy(s);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(yi,o);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return mc.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(mc,o);let m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=cu(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ta(a,s,e+1/3),this.g=Ta(a,s,e),this.b=Ta(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ve.fromWorkingColorSpace(_t.copy(this),e),65536*Math.round(ft(255*_t.r,0,255))+256*Math.round(ft(255*_t.g,0,255))+Math.round(ft(255*_t.b,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(_t.copy(this),t);let n=_t.r,r=_t.g,s=_t.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=nn){Ve.fromWorkingColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,r=_t.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Gr);let n=oa(Pn.h,Gr.h,t),r=oa(Pn.s,Gr.s,t),s=oa(Pn.l,Gr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Re;Re.NAMES=dh;var Mu=0,On=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=1,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==an&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bp=Su();function Su(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new E,Hr=new te,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var bs=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ae=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bu=0,kt=new we,wa=new gt,Mi=new E,Ut=new ln,tr=new ln,dt=new E,ot=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?Es:bs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ae(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Ut.min,tr.min),Ut.expandByPoint(dt),dt.addVectors(Ut.max,tr.max),Ut.expandByPoint(dt)):(Ut.expandByPoint(tr.min),Ut.expandByPoint(tr.max))}Ut.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),dt.add(Mi)),r=Math.max(r,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new E,l[U]=new E;let c=new E,h=new E,u=new E,d=new te,p=new te,f=new te,y=new E,g=new E;function m(U,N,B){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,B),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,B),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let H=1/(p.x*f.y-f.x*p.y);isFinite(H)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(H),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(H),o[U].add(y),o[N].add(y),o[B].add(y),l[U].add(g),l[N].add(g),l[B].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,N=_.length;U<N;++U){let B=_[U],H=B.start;for(let z=H,q=H+B.count;z<q;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new E,x=new E,C=new E,T=new E;function R(U){C.fromBufferAttribute(r,U),T.copy(C);let N=o[U];v.copy(N),v.sub(C.multiplyScalar(C.dot(N))).normalize(),x.crossVectors(T,N);let B=x.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,B)}for(let U=0,N=_.length;U<N;++U){let B=_[U],H=B.start;for(let z=H,q=H+B.count;z<q;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let y=0,g=l.length;y<g;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fc=new we,Kn=new Di,Vr=new cn,gc=new E,Wr=new E,Xr=new E,jr=new E,Aa=new E,qr=new E,vc=new E,Yr=new E,st=class extends gt{constructor(e=new ot,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Aa.fromBufferAttribute(u,e),a?qr.addScaledVector(Aa,h):qr.addScaledVector(Aa.sub(t),h))}t.add(qr)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),Vr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Vr,gc)===null||Kn.origin.distanceToSquared(gc)>(e.far-e.near)**2))return;fc.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(fc),n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Kn)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=Zr(this,m,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);f<y;f+=3)r=Zr(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=a[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=Zr(this,m,e,n,c,h,u,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)r=Zr(this,a,e,n,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Zr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Wr),i.getVertexPosition(l,Xr),i.getVertexPosition(c,jr);let h=(function(u,d,p,f,y,g,m,_){let v;if(v=d.side===pt?f.intersectTriangle(m,g,y,!0,_):f.intersectTriangle(y,g,m,d.side===an,_),v===null)return null;Yr.copy(_),Yr.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(Yr);return x<p.near||x>p.far?null:{distance:x,point:Yr.clone(),object:u}})(i,e,t,n,Wr,Xr,jr,vc);if(h){let u=new E;In.getBarycoord(vc,Wr,Xr,jr,u),r&&(h.uv=In.getInterpolatedAttribute(r,o,l,c,u,new te)),s&&(h.uv1=In.getInterpolatedAttribute(s,o,l,c,u,new te)),a&&(h.normal=In.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};In.getNormal(Wr,Xr,jr,d.normal),h.face=d,h.barycoord=u}return h}var Qt=class i extends ot{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(y,g,m,_,v,x,C,T,R,U,N){let B=x/R,H=C/U,z=x/2,q=C/2,G=T/2,Y=R+1,j=U+1,re=0,se=0,le=new E;for(let _e=0;_e<j;_e++){let Q=_e*H-q;for(let ne=0;ne<Y;ne++){let me=ne*B-z;le[y]=me*_,le[g]=Q*v,le[m]=G,c.push(le.x,le.y,le.z),le[y]=0,le[g]=0,le[m]=T>0?1:-1,h.push(le.x,le.y,le.z),u.push(ne/R),u.push(1-_e/U),re+=1}}for(let _e=0;_e<U;_e++)for(let Q=0;Q<R;Q++){let ne=d+Q+Y*_e,me=d+Q+Y*(_e+1),he=d+(Q+1)+Y*(_e+1),A=d+(Q+1)+Y*_e;l.push(ne,me,A),l.push(me,he,A),se+=6}o.addGroup(p,se,N),p+=se,d+=re}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ni(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){let e={};for(let t=0;t<i.length;t++){let n=Ni(i[t]);for(let r in n)e[r]=n[r]}return e}function ph(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}var Eu={clone:Ni,merge:bt},un=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ur=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ln=new E,_c=new te,xc=new te,xt=class extends ur{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*So*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ds*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*So*Math.atan(Math.tan(.5*ds*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,_c,xc),t.subVectors(xc,_c)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ds*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Si=-90,wo=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xt(Si,1,e,t);r.layers=this.layers,this.add(r);let s=new xt(Si,1,e,t);s.layers=this.layers,this.add(s);let a=new xt(Si,1,e,t);a.layers=this.layers,this.add(a);let o=new xt(Si,1,e,t);o.layers=this.layers,this.add(o);let l=new xt(Si,1,e,t);l.layers=this.layers,this.add(l);let c=new xt(Si,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==_s)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ts=class extends Nt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ci,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ts(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qt(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pt,blending:0});s.uniforms.tEquirect.value=t;let a=new st(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=sn),new wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ra=new E,Tu=new E,wu=new Pe,yn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ra.subVectors(n,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wu.getNormalMatrix(e),r=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new cn,Jr=new E,Oi=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],y=r[10],g=r[11],m=r[12],_=r[13],v=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,g-p,x-m).normalize(),n[1].setComponents(l+s,d+c,g+p,x+m).normalize(),n[2].setComponents(l+a,d+h,g+f,x+_).normalize(),n[3].setComponents(l-a,d-h,g-f,x-_).normalize(),n[4].setComponents(l-o,d-u,g-y,x-v).normalize(),t===Ui)n[5].setComponents(l+o,d+u,g+y,x+v).normalize();else{if(t!==_s)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function mh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Au(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var dr=class i extends ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],y=[],g=[];for(let m=0;m<h;m++){let _=m*d-a;for(let v=0;v<c;v++){let x=v*u-s;f.push(x,-_,0),y.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let v=_+c*m,x=_+c*(m+1),C=_+1+c*(m+1),T=_+1+c*m;p.push(v,x,T),p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ce={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},oe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},rn={basic:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:bt([oe.points,oe.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:bt([oe.common,oe.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:bt([oe.sprite,oe.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:bt([oe.common,oe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:bt([oe.lights,oe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};rn.physical={uniforms:bt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};var Kr={r:0,b:0,g:0},Qn=new hn,Ru=new we;function Cu(i,e,t,n,r,s,a){let o=new Re(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(g){let m=g.isScene===!0?g.background:null;return m&&m.isTexture&&(m=(g.backgroundBlurriness>0?t:e).get(m)),m}function y(g,m){g.getRGB(Kr,ph(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,y(o,h)},render:function(g){let m=!1,_=f(g);_===null?y(o,h):_&&_.isColor&&(y(_,1),m=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(g,m){let _=f(m);_&&(_.isCubeTexture||_.mapping===Xs)?(c===void 0&&(c=new st(new Qt(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ni(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Qn.copy(m.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ru.makeRotationFromEuler(Qn)),c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Ze,u===_&&d===_.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new st(new dr(2,2),new un({name:"BackgroundMaterial",uniforms:Ni(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(_.colorSpace)!==Ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Pu(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(m){return i.bindVertexArray(m)}function l(m){return i.deleteVertexArray(m)}function c(m){let _=[],v=[],x=[];for(let C=0;C<t;C++)_[C]=0,v[C]=0,x[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:x,object:m,attributes:{},index:null}}function h(){let m=s.newAttributes;for(let _=0,v=m.length;_<v;_++)m[_]=0}function u(m){d(m,0)}function d(m,_){let v=s.newAttributes,x=s.enabledAttributes,C=s.attributeDivisors;v[m]=1,x[m]===0&&(i.enableVertexAttribArray(m),x[m]=1),C[m]!==_&&(i.vertexAttribDivisor(m,_),C[m]=_)}function p(){let m=s.newAttributes,_=s.enabledAttributes;for(let v=0,x=_.length;v<x;v++)_[v]!==m[v]&&(i.disableVertexAttribArray(v),_[v]=0)}function f(m,_,v,x,C,T,R){R===!0?i.vertexAttribIPointer(m,_,v,C,T):i.vertexAttribPointer(m,_,v,x,C,T)}function y(){g(),a=!0,s!==r&&(s=r,o(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(m,_,v,x,C){let T=!1,R=(function(U,N,B){let H=B.wireframe===!0,z=n[U.id];z===void 0&&(z={},n[U.id]=z);let q=z[N.id];q===void 0&&(q={},z[N.id]=q);let G=q[H];return G===void 0&&(G=c(i.createVertexArray()),q[H]=G),G})(x,v,_);s!==R&&(s=R,o(s.object)),T=(function(U,N,B,H){let z=s.attributes,q=N.attributes,G=0,Y=B.getAttributes();for(let j in Y)if(Y[j].location>=0){let re=z[j],se=q[j];if(se===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==H})(m,x,v,C),T&&(function(U,N,B,H){let z={},q=N.attributes,G=0,Y=B.getAttributes();for(let j in Y)if(Y[j].location>=0){let re=q[j];re===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(re=U.instanceColor));let se={};se.attribute=re,re&&re.data&&(se.data=re.data),z[j]=se,G++}s.attributes=z,s.attributesNum=G,s.index=H})(m,x,v,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(U,N,B,H){h();let z=H.attributes,q=B.getAttributes(),G=N.defaultAttributeValues;for(let Y in q){let j=q[Y];if(j.location>=0){let re=z[Y];if(re===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){let se=re.normalized,le=re.itemSize,_e=e.get(re);if(_e===void 0)continue;let Q=_e.buffer,ne=_e.type,me=_e.bytesPerElement,he=ne===i.INT||ne===i.UNSIGNED_INT||re.gpuType===fl;if(re.isInterleavedBufferAttribute){let A=re.data,M=A.stride,O=re.offset;if(A.isInstancedInterleavedBuffer){for(let V=0;V<j.locationSize;V++)d(j.location+V,A.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let V=0;V<j.locationSize;V++)u(j.location+V);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let V=0;V<j.locationSize;V++)f(j.location+V,le/j.locationSize,ne,se,M*me,(O+le/j.locationSize*V)*me,he)}else{if(re.isInstancedBufferAttribute){for(let A=0;A<j.locationSize;A++)d(j.location+A,re.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let A=0;A<j.locationSize;A++)u(j.location+A);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let A=0;A<j.locationSize;A++)f(j.location+A,le/j.locationSize,ne,se,le*me,le/j.locationSize*A*me,he)}}else if(G!==void 0){let se=G[Y];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(j.location,se);break;case 3:i.vertexAttrib3fv(j.location,se);break;case 4:i.vertexAttrib4fv(j.location,se);break;default:i.vertexAttrib1fv(j.location,se)}}}}p()})(m,_,v,x),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))},reset:y,resetDefaultState:g,dispose:function(){y();for(let m in n){let _=n[m];for(let v in _){let x=_[v];for(let C in x)l(x[C].object),delete x[C];delete _[v]}delete n[m]}},releaseStatesOfGeometry:function(m){if(n[m.id]===void 0)return;let _=n[m.id];for(let v in _){let x=_[v];for(let C in x)l(x[C].object),delete x[C];delete _[v]}delete n[m.id]},releaseStatesOfProgram:function(m){for(let _ in n){let v=n[_];if(v[m.id]===void 0)continue;let x=v[m.id];for(let C in x)l(x[C].object),delete x[C];delete v[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Lu(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u];for(let u=0;u<l.length;u++)t.update(h,n,l[u])}}}function Iu(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===Dt||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Sn&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Mn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Uu(i){let e=this,t=null,n=0,r=!1,s=!1,a=new yn,o=new Pe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let g=d+4*f,m=u.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let _=0,v=d;_!==f;++_,v+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!y)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let m=s?0:n,_=4*m,v=g.clippingState||null;l.value=v,v=c(p,u,_,d);for(let x=0;x!==_;++x)v[x]=t[x];g.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}}}function Du(i){let e=new WeakMap;function t(r,s){return s===Wa?r.mapping=Ci:s===Xa&&(r.mapping=Pi),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Wa||s===Xa){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Ao(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var ws=class extends ur{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yc=[.125,.215,.35,.446,.526,.582],nr=20,Ca=new ws,Mc=new Re,Pa=null,La=0,Ia=0,Ua=!1,ti=(1+Math.sqrt(5))/2,bi=1/ti,Sc=[new E(-ti,bi,0),new E(ti,bi,0),new E(-bi,0,ti),new E(bi,0,ti),new E(0,ti,-bi),new E(0,ti,bi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Ia),this._renderer.xr.enabled=Ua,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:br,format:Dt,colorSpace:zn,depthBuffer:!1},r=bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+yc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=yc[d-a+4-1]:d===0&&(f=0),c.push(f);let y=1/(p-2),g=-y,m=1+y,_=[g,g,m,g,m,m,g,g,m,m,g,m],v=6,x=6,C=3,T=2,R=1,U=new Float32Array(C*x*v),N=new Float32Array(T*x*v),B=new Float32Array(R*x*v);for(let z=0;z<v;z++){let q=z%3*2/3-1,G=z>2?0:-1,Y=[q,G,0,q+2/3,G,0,q+2/3,G+1,0,q,G,0,q+2/3,G+1,0,q,G+1,0];U.set(Y,C*x*z),N.set(_,T*x*z);let j=[z,z,z,z,z,z];B.set(j,R*x*z)}let H=new ot;H.setAttribute("position",new Gt(U,C)),H.setAttribute("uv",new Gt(N,T)),H.setAttribute("faceIndex",new Gt(B,R)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(nr),h=new E(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,r){let s=new xt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Mc),l.toneMapping=Un,l.autoClear=!1;let u=new Fn({name:"PMREM.Background",side:pt,depthWrite:!1,depthTest:!1}),d=new st(new Qt,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Mc),p=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):g===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let m=this._cubeSize;$r(r,g*m,y>2?m:0,m,m),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ci||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;$r(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ca)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sc[(r-s-1)%Sc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new st(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,y=isFinite(s)?1+Math.floor(3*f):nr;y>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let g=[],m=0;for(let x=0;x<nr;++x){let C=x/f,T=Math.exp(-C*C/2);g.push(T),x===0?m+=T:x<y&&(m+=2*T)}for(let x=0;x<g.length;x++)g[x]=g[x]/m;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let v=this._sizeLods[r];$r(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Ca)}};function bc(i,e,t){let n=new bn(i,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ec(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nu(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Wa||s===Xa,o=s===Ci||s===Pi;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new As(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new As(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Ou(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ps("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Fu(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let g=0,m=y.length;g<m;g+=3){let _=y[g+0],v=y[g+1],x=y[g+2];c.push(_,v,v,x,x,_)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let g=0,m=y.length/3-1;g<m;g+=3){let _=g+0,v=g+1,x=g+2;c.push(_,v,v,x,x,_)}}}let p=new(uh(c)?Es:bs)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Bu(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,n,h[p])}}}function zu(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function ku(i,e,t){let n=new WeakMap,r=new We;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let N=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var d=N;u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;p===!0&&(v=1),f===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*C*4*h),R=new Ms(T,x,C,h);R.type=Mn,R.needsUpdate=!0;let U=4*v;for(let B=0;B<h;B++){let H=g[B],z=m[B],q=_[B],G=x*C*4*B;for(let Y=0;Y<H.count;Y++){let j=Y*U;p===!0&&(r.fromBufferAttribute(H,Y),T[G+j+0]=r.x,T[G+j+1]=r.y,T[G+j+2]=r.z,T[G+j+3]=0),f===!0&&(r.fromBufferAttribute(z,Y),T[G+j+4]=r.x,T[G+j+5]=r.y,T[G+j+6]=r.z,T[G+j+7]=0),y===!0&&(r.fromBufferAttribute(q,Y),T[G+j+8]=r.x,T[G+j+9]=r.y,T[G+j+10]=r.z,T[G+j+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new te(x,C)},n.set(a,u),a.addEventListener("dispose",N)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let f=a.morphTargetsRelative?1:1-p;o.getUniforms().setValue(i,"morphTargetBaseInfluence",f),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Gu(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Rs=class extends Nt{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==hr&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=si),n===void 0&&h===Ii&&(n=Li),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fh=new Nt,wc=new Rs(1,1),gh=new Ms,vh=new To,_h=new Ts,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function Vi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Ac[r];if(s===void 0&&(s=new Float32Array(r),Ac[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hu(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vu(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Wu(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Xu(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function ju(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),ct(t,n)}}function qu(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),ct(t,n)}}function Yu(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),ct(t,n)}}function Zu(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ju(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Ku(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function $u(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Qu(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ed(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function td(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function nd(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function id(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=hh,s=wc):s=fh,t.setTexture2D(e||s,r)}function rd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vh,r)}function sd(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_h,r)}function ad(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gh,r)}function od(i,e){i.uniform1fv(this.addr,e)}function ld(i,e){let t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function cd(i,e){let t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function hd(i,e){let t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function ud(i,e){let t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dd(i,e){let t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pd(i,e){let t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function md(i,e){i.uniform1iv(this.addr,e)}function fd(i,e){i.uniform2iv(this.addr,e)}function gd(i,e){i.uniform3iv(this.addr,e)}function vd(i,e){i.uniform4iv(this.addr,e)}function _d(i,e){i.uniform1uiv(this.addr,e)}function xd(i,e){i.uniform2uiv(this.addr,e)}function yd(i,e){i.uniform3uiv(this.addr,e)}function Md(i,e){i.uniform4uiv(this.addr,e)}function Sd(i,e,t){let n=this.cache,r=e.length,s=qs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fh,s[a])}function bd(i,e,t){let n=this.cache,r=e.length,s=qs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vh,s[a])}function Ed(i,e,t){let n=this.cache,r=e.length,s=qs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_h,s[a])}function Td(i,e,t){let n=this.cache,r=e.length,s=qs(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gh,s[a])}var Ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Hu;case 35664:return Vu;case 35665:return Wu;case 35666:return Xu;case 35674:return ju;case 35675:return qu;case 35676:return Yu;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return Ku;case 35669:case 35673:return $u;case 5125:return Qu;case 36294:return ed;case 36295:return td;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return ad}})(t.type)}},Co=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return od;case 35664:return ld;case 35665:return cd;case 35666:return hd;case 35674:return ud;case 35675:return dd;case 35676:return pd;case 5124:case 35670:return md;case 35667:case 35671:return fd;case 35668:case 35672:return gd;case 35669:case 35673:return vd;case 5125:return _d;case 36294:return xd;case 36295:return yd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return bd;case 35680:case 36300:case 36308:case 36293:return Ed;case 36289:case 36303:case 36311:case 36292:return Td}})(t.type)}},Po=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Da=/(\w+)(\])?(\[|\.)?/g;function Ic(i,e){i.seq.push(e),i.map[e.id]=e}function wd(i,e,t){let n=i.name,r=n.length;for(Da.lastIndex=0;;){let s=Da.exec(n),a=Da.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Ic(t,c===void 0?new Ro(o,i,e):new Co(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Po(o),Ic(t,h)),t=h}}}var Ri=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);wd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Uc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ad=37297,Rd=0;function Dc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Cd(i,e){let t=(function(n){let r=Ve.getPrimaries(Ve.workingColorSpace),s=Ve.getPrimaries(n),a;switch(r===s?a="":r===vs&&s===gs?a="LinearDisplayP3ToLinearSRGB":r===gs&&s===vs&&(a="LinearSRGBToLinearDisplayP3"),n){case zn:case js:return[a,"LinearTransferOETF"];case nn:case Ml:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}})(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pd(i,e){let t;switch(e){case tu:t="Linear";break;case nu:t="Reinhard";break;case iu:t="Cineon";break;case ru:t="ACESFilmic";break;case au:t="AgX";break;case ou:t="Neutral";break;case su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qr=new E;function Ld(){return Ve.getLuminanceCoefficients(Qr),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Qr.x.toFixed(4)}, ${Qr.y.toFixed(4)}, ${Qr.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ir(i){return i!==""}function Nc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Id=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(Id,Dd)}var Ud=new Map;function Dd(i,e){let t=Ce[e];if(t===void 0){let n=Ud.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Lo(t)}var Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(Nd,Od)}function Od(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fd(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(H){let z="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===$c?z="SHADOWMAP_TYPE_PCF":H.shadowMapType===$h?z="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===xn&&(z="SHADOWMAP_TYPE_VSM"),z})(t),c=(function(H){let z="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case Ci:case Pi:z="ENVMAP_TYPE_CUBE";break;case Xs:z="ENVMAP_TYPE_CUBE_UV"}return z})(t),h=(function(H){let z="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===Pi&&(z="ENVMAP_MODE_REFRACTION"),z})(t),u=(function(H){let z="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case ml:z="ENVMAP_BLENDING_MULTIPLY";break;case Qh:z="ENVMAP_BLENDING_MIX";break;case eu:z="ENVMAP_BLENDING_ADD"}return z})(t),d=(function(H){let z=H.envMapCubeUVHeight;if(z===null)return null;let q=Math.log2(z)-2,G=1/z;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:G,maxMip:q}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)})(t),f=(function(H){let z=[];for(let q in H){let G=H[q];G!==!1&&z.push("#define "+q+" "+G)}return z.join(`
`)})(s),y=r.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ir).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(g=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Un?Pd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),Ld(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Lo(a),a=Nc(a,t),a=Oc(a,t),o=Lo(o),o=Nc(o,t),o=Oc(o,t),a=Fc(a),o=Fc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+a,x=_+m+o,C=Uc(r,r.VERTEX_SHADER,v),T=Uc(r,r.FRAGMENT_SHADER,x);function R(H){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(y).trim(),q=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(T).trim(),Y=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,T);else{let re=Dc(r,C,"vertex"),se=Dc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+z+`
`+re+`
`+se)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):q!==""&&G!==""||(j=!1);j&&(H.diagnostics={runnable:Y,programLog:z,vertexShader:{log:q,prefix:g},fragmentShader:{log:G,prefix:m}})}r.deleteShader(C),r.deleteShader(T),U=new Ri(r,y),N=(function(z,q){let G={},Y=z.getProgramParameter(q,z.ACTIVE_ATTRIBUTES);for(let j=0;j<Y;j++){let re=z.getActiveAttrib(q,j),se=re.name,le=1;re.type===z.FLOAT_MAT2&&(le=2),re.type===z.FLOAT_MAT3&&(le=3),re.type===z.FLOAT_MAT4&&(le=4),G[se]={type:re.type,location:z.getAttribLocation(q,se),locationSize:le}}return G})(r,y)}let U,N;r.attachShader(y,C),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),this.getUniforms=function(){return U===void 0&&R(this),U},this.getAttributes=function(){return N===void 0&&R(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(y,Ad)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rd++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var Bd=0,Io=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uo(e),t.set(e,n)),n}},Uo=class{constructor(e){this.id=Bd++,this.code=e,this.usedTimes=0}};function zd(i,e,t,n,r,s,a){let o=new Ss,l=new Io,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures,f=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,x,C){let T=x.fog,R=C.geometry,U=m.isMeshStandardMaterial?x.environment:null,N=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),B=N&&N.mapping===Xs?N.image.height:null,H=y[m.type];m.precision!==null&&(f=r.getMaxPrecision(m.precision),f!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));let z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,q=z!==void 0?z.length:0,G,Y,j,re,se=0;if(R.morphAttributes.position!==void 0&&(se=1),R.morphAttributes.normal!==void 0&&(se=2),R.morphAttributes.color!==void 0&&(se=3),H){let Yi=rn[H];G=Yi.vertexShader,Y=Yi.fragmentShader}else G=m.vertexShader,Y=m.fragmentShader,l.update(m),j=l.getVertexShaderID(m),re=l.getFragmentShaderID(m);let le=i.getRenderTarget(),_e=C.isInstancedMesh===!0,Q=C.isBatchedMesh===!0,ne=!!m.map,me=!!m.matcap,he=!!N,A=!!m.aoMap,M=!!m.lightMap,O=!!m.bumpMap,V=!!m.normalMap,w=!!m.displacementMap,P=!!m.emissiveMap,S=!!m.metalnessMap,I=!!m.roughnessMap,L=m.anisotropy>0,Z=m.clearcoat>0,F=m.dispersion>0,J=m.iridescence>0,ee=m.sheen>0,K=m.transmission>0,ce=L&&!!m.anisotropyMap,de=Z&&!!m.clearcoatMap,fe=Z&&!!m.clearcoatNormalMap,be=Z&&!!m.clearcoatRoughnessMap,Ne=J&&!!m.iridescenceMap,Ue=J&&!!m.iridescenceThicknessMap,xe=ee&&!!m.sheenColorMap,ze=ee&&!!m.sheenRoughnessMap,je=!!m.specularMap,$e=!!m.specularColorMap,ve=!!m.specularIntensityMap,Oe=K&&!!m.transmissionMap,qe=K&&!!m.thicknessMap,Cr=!!m.gradientMap,hi=!!m.alphaMap,Lt=m.alphaTest>0,pn=!!m.alphaHash,Wn=!!m.extensions,D=Un;m.toneMapped&&(le!==null&&le.isXRRenderTarget!==!0||(D=i.toneMapping));let Xn={shaderID:H,shaderType:m.type,shaderName:m.name,vertexShader:G,fragmentShader:Y,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:Q,batchingColor:Q&&C._colorsTexture!==null,instancing:_e,instancingColor:_e&&C.instanceColor!==null,instancingMorph:_e&&C.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zn,alphaToCoverage:!!m.alphaToCoverage,map:ne,matcap:me,envMap:he,envMapMode:he&&N.mapping,envMapCubeUVHeight:B,aoMap:A,lightMap:M,bumpMap:O,normalMap:V,displacementMap:p&&w,emissiveMap:P,normalMapObjectSpace:V&&m.normalMapType===1,normalMapTangentSpace:V&&m.normalMapType===0,metalnessMap:S,roughnessMap:I,anisotropy:L,anisotropyMap:ce,clearcoat:Z,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:be,dispersion:F,iridescence:J,iridescenceMap:Ne,iridescenceThicknessMap:Ue,sheen:ee,sheenColorMap:xe,sheenRoughnessMap:ze,specularMap:je,specularColorMap:$e,specularIntensityMap:ve,transmission:K,transmissionMap:Oe,thicknessMap:qe,gradientMap:Cr,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:hi,alphaTest:Lt,alphaHash:pn,combine:m.combine,mapUv:ne&&g(m.map.channel),aoMapUv:A&&g(m.aoMap.channel),lightMapUv:M&&g(m.lightMap.channel),bumpMapUv:O&&g(m.bumpMap.channel),normalMapUv:V&&g(m.normalMap.channel),displacementMapUv:w&&g(m.displacementMap.channel),emissiveMapUv:P&&g(m.emissiveMap.channel),metalnessMapUv:S&&g(m.metalnessMap.channel),roughnessMapUv:I&&g(m.roughnessMap.channel),anisotropyMapUv:ce&&g(m.anisotropyMap.channel),clearcoatMapUv:de&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(m.sheenRoughnessMap.channel),specularMapUv:je&&g(m.specularMap.channel),specularColorMapUv:$e&&g(m.specularColorMap.channel),specularIntensityMapUv:ve&&g(m.specularIntensityMap.channel),transmissionMapUv:Oe&&g(m.transmissionMap.channel),thicknessMapUv:qe&&g(m.thicknessMap.channel),alphaMapUv:hi&&g(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(V||L),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(ne||hi),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:D,decodeVideoTexture:ne&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===Ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===pt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Wn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wn&&m.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Xn.vertexUv1s=c.has(1),Xn.vertexUv2s=c.has(2),Xn.vertexUv3s=c.has(3),c.clear(),Xn},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(_,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),v.push(o.mask)})(_,m),_.push(i.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=y[m.type],v;if(_){let x=rn[_];v=Eu.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let x=0,C=h.length;x<C;x++){let T=h[x];if(T.cacheKey===_){v=T,++v.usedTimes;break}}return v===void 0&&(v=new Fd(i,_,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function kd(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kc(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Gd),n.length>1&&n.sort(o||zc),r.length>1&&r.sort(o||zc)}}}function Hd(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new kc,i.set(e,[r])):t>=n.length?(r=new kc,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Vd(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Re};break;case"SpotLight":t={position:new E,direction:new E,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var Wd=0;function Xd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jd(i){let e=new Vd,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,s=new we,a=new we;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let u=0,d=0,p=0,f=0,y=0,g=0,m=0,_=0,v=0,x=0,C=0;o.sort(Xd);for(let R=0,U=o.length;R<U;R++){let N=o[R],B=N.color,H=N.intensity,z=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=B.r*H,c+=B.g*H,h+=B.b*H;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],H);C++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,j=t.get(N);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[u]=j,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=N.shadow.matrix,g++}n.directional[u]=G,u++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(B).multiplyScalar(H),G.distance=z,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[p]=G;let Y=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,Y.updateMatrices(N),N.castShadow&&x++),n.spotLightMatrix[p]=Y.matrix,N.castShadow){let j=t.get(N);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=q,_++}p++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(B).multiplyScalar(H),G.halfWidth.set(.5*N.width,0,0),G.halfHeight.set(0,.5*N.height,0),n.rectArea[f]=G,f++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let Y=N.shadow,j=t.get(N);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=N.shadow.matrix,m++}n.point[d]=G,d++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(H),G.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[y]=G,y++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===y&&T.numDirectionalShadows===g&&T.numPointShadows===m&&T.numSpotShadows===_&&T.numSpotMaps===v&&T.numLightProbes===C||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=y,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=m,n.pointShadowMap.length=m,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=m,n.spotLightMatrix.length=_+v-x,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=C,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=y,T.numDirectionalShadows=g,T.numPointShadows=m,T.numSpotShadows=_,T.numSpotMaps=v,T.numLightProbes=C,n.version=Wd++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let y=0,g=o.length;y<g;y++){let m=o[y];if(m.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),c++}else if(m.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),u++}else if(m.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(m.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*m.width,0,0),_.halfHeight.set(0,.5*m.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(m.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),h++}else if(m.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),p++}}},state:n}}function Gc(i){let e=new jd(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function qd(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Gc(i),e.set(t,[s])):n>=r.length?(s=new Gc(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Do=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yd(i,e,t){let n=new Oi,r=new te,s=new te,a=new We,o=new Do({depthPacking:3201}),l=new No,c={},h=t.maxTextureSize,u={[an]:pt,[pt]:an,2:2},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ot;f.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let m=this.type;function _(T,R){let U=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,U,p,y,null)}function v(T,R,U,N){let B=null,H=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)B=H;else if(B=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let z=B.uuid,q=R.uuid,G=c[z];G===void 0&&(G={},c[z]=G);let Y=G[q];Y===void 0&&(Y=B.clone(),G[q]=Y,R.addEventListener("dispose",C)),B=Y}return B.visible=R.visible,B.wireframe=R.wireframe,B.side=N===xn?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,U.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(i.properties.get(B).light=U),B}function x(T,R,U,N,B){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let z=e.update(T),q=T.material;if(Array.isArray(q)){let G=z.groups;for(let Y=0,j=G.length;Y<j;Y++){let re=G[Y],se=q[re.materialIndex];if(se&&se.visible){let le=v(T,se,N,B);T.onBeforeShadow(i,T,R,U,z,le,re),i.renderBufferDirect(U,null,z,le,T,re),T.onAfterShadow(i,T,R,U,z,le,re)}}}else if(q.visible){let G=v(T,q,N,B);T.onBeforeShadow(i,T,R,U,z,G,null),i.renderBufferDirect(U,null,z,G,T,null),T.onAfterShadow(i,T,R,U,z,G,null)}}let H=T.children;for(let z=0,q=H.length;z<q;z++)x(H[z],R,U,N,B)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let U=c[R],N=T.target.uuid;N in U&&(U[N].dispose(),delete U[N])}}this.render=function(T,R,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let N=i.getRenderTarget(),B=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),z=i.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==xn&&this.type===xn,G=m===xn&&this.type!==xn;for(let Y=0,j=T.length;Y<j;Y++){let re=T[Y],se=re.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);let le=se.getFrameExtents();if(r.multiply(le),s.copy(se.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,se.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,se.mapSize.y=s.y)),se.map===null||q===!0||G===!0){let Q=this.type!==xn?{minFilter:wt,magFilter:wt}:{};se.map!==null&&se.map.dispose(),se.map=new bn(r.x,r.y,Q),se.map.texture.name=re.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let _e=se.getViewportCount();for(let Q=0;Q<_e;Q++){let ne=se.getViewport(Q);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),z.viewport(a),se.updateMatrices(re,Q),n=se.getFrustum(),x(R,U,se.camera,re,this.type)}se.isPointLightShadow!==!0&&this.type===xn&&_(se,U),se.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(N,B,H)}}var Zd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Jd(i){let e=new function(){let S=!1,I=new We,L=null,Z=new We(0,0,0,0);return{setMask:function(F){L===F||S||(i.colorMask(F,F,F,F),L=F)},setLocked:function(F){S=F},setClear:function(F,J,ee,K,ce){ce===!0&&(F*=K,J*=K,ee*=K),I.set(F,J,ee,K),Z.equals(I)===!1&&(i.clearColor(F,J,ee,K),Z.copy(I))},reset:function(){S=!1,L=null,Z.set(-1,0,0,0)}}},t=new function(){let S=!1,I=!1,L=null,Z=null,F=null;return{setReversed:function(J){I=J},setTest:function(J){J?me(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(J){L===J||S||(i.depthMask(J),L=J)},setFunc:function(J){if(I&&(J=Zd[J]),Z!==J){switch(J){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}Z=J}},setLocked:function(J){S=J},setClear:function(J){F!==J&&(i.clearDepth(J),F=J)},reset:function(){S=!1,L=null,Z=null,F=null}}},n=new function(){let S=!1,I=null,L=null,Z=null,F=null,J=null,ee=null,K=null,ce=null;return{setTest:function(de){S||(de?me(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(de){I===de||S||(i.stencilMask(de),I=de)},setFunc:function(de,fe,be){L===de&&Z===fe&&F===be||(i.stencilFunc(de,fe,be),L=de,Z=fe,F=be)},setOp:function(de,fe,be){J===de&&ee===fe&&K===be||(i.stencilOp(de,fe,be),J=de,ee=fe,K=be)},setLocked:function(de){S=de},setClear:function(de){ce!==de&&(i.clearStencil(de),ce=de)},reset:function(){S=!1,I=null,L=null,Z=null,F=null,J=null,ee=null,K=null,ce=null}}},r=new WeakMap,s=new WeakMap,a={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,y=null,g=null,m=null,_=null,v=new Re(0,0,0),x=0,C=!1,T=null,R=null,U=null,N=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=q>=2);let Y=null,j={},re=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),le=new We().fromArray(re),_e=new We().fromArray(se);function Q(S,I,L,Z){let F=new Uint8Array(4),J=i.createTexture();i.bindTexture(S,J),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<L;ee++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(I,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(I+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return J}let ne={};function me(S){a[S]!==!0&&(i.enable(S),a[S]=!0)}function he(S){a[S]!==!1&&(i.disable(S),a[S]=!1)}ne[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),n.setClear(0),me(i.DEPTH_TEST),t.setFunc(3),V(!1),w(1),me(i.CULL_FACE),O(0);let A={[ni]:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};A[103]=i.MIN,A[104]=i.MAX;let M={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function O(S,I,L,Z,F,J,ee,K,ce,de){if(S!==0){if(u===!1&&(me(i.BLEND),u=!0),S===5)F=F||I,J=J||L,ee=ee||Z,I===p&&F===g||(i.blendEquationSeparate(A[I],A[F]),p=I,g=F),L===f&&Z===y&&J===m&&ee===_||(i.blendFuncSeparate(M[L],M[Z],M[J],M[ee]),f=L,y=Z,m=J,_=ee),K.equals(v)!==!1&&ce===x||(i.blendColor(K.r,K.g,K.b,ce),v.copy(K),x=ce),d=S,C=!1;else if(S!==d||de!==C){if(p===ni&&g===ni||(i.blendEquation(i.FUNC_ADD),p=ni,g=ni),de)switch(S){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}f=null,y=null,m=null,_=null,v.set(0,0,0),x=0,d=S,C=de}}else u===!0&&(he(i.BLEND),u=!1)}function V(S){T!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),T=S)}function w(S){S!==0?(me(i.CULL_FACE),S!==R&&(S===1?i.cullFace(i.BACK):S===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),R=S}function P(S,I,L){S?(me(i.POLYGON_OFFSET_FILL),N===I&&B===L||(i.polygonOffset(I,L),N=I,B=L)):he(i.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:n},enable:me,disable:he,bindFramebuffer:function(S,I){return o[S]!==I&&(i.bindFramebuffer(S,I),o[S]=I,S===i.DRAW_FRAMEBUFFER&&(o[i.FRAMEBUFFER]=I),S===i.FRAMEBUFFER&&(o[i.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(S,I){let L=c,Z=!1;if(S){L=l.get(I),L===void 0&&(L=[],l.set(I,L));let F=S.textures;if(L.length!==F.length||L[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ee=F.length;J<ee;J++)L[J]=i.COLOR_ATTACHMENT0+J;L.length=F.length,Z=!0}}else L[0]!==i.BACK&&(L[0]=i.BACK,Z=!0);Z&&i.drawBuffers(L)},useProgram:function(S){return h!==S&&(i.useProgram(S),h=S,!0)},setBlending:O,setMaterial:function(S,I){S.side===2?he(i.CULL_FACE):me(i.CULL_FACE);let L=S.side===pt;I&&(L=!L),V(L),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),t.setFunc(S.depthFunc),t.setTest(S.depthTest),t.setMask(S.depthWrite),e.setMask(S.colorWrite);let Z=S.stencilWrite;n.setTest(Z),Z&&(n.setMask(S.stencilWriteMask),n.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),n.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:w,setLineWidth:function(S){S!==U&&(z&&i.lineWidth(S),U=S)},setPolygonOffset:P,setScissorTest:function(S){S?me(i.SCISSOR_TEST):he(i.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=i.TEXTURE0+H-1),Y!==S&&(i.activeTexture(S),Y=S)},bindTexture:function(S,I,L){L===void 0&&(L=Y===null?i.TEXTURE0+H-1:Y);let Z=j[L];Z===void 0&&(Z={type:void 0,texture:void 0},j[L]=Z),Z.type===S&&Z.texture===I||(Y!==L&&(i.activeTexture(L),Y=L),i.bindTexture(S,I||ne[S]),Z.type=S,Z.texture=I)},unbindTexture:function(){let S=j[Y];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,I){let L=s.get(I);L===void 0&&(L=new WeakMap,s.set(I,L));let Z=L.get(S);Z===void 0&&(Z=i.getUniformBlockIndex(I,S.name),L.set(S,Z))},uniformBlockBinding:function(S,I){let L=s.get(I).get(S);r.get(I)!==L&&(i.uniformBlockBinding(I,L,S.__bindingPointIndex),r.set(I,L))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){le.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),le.copy(S))},viewport:function(S){_e.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),_e.copy(S))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),a={},Y=null,j={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,y=null,g=null,m=null,_=null,v=new Re(0,0,0),x=0,C=!1,T=null,R=null,U=null,N=null,B=null,le.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),e.reset(),t.reset(),n.reset()}}}function Hc(i,e,t,n){let r=(function(s){switch(s){case Sn:case eh:return{byteLength:1,components:1};case cr:case th:case br:return{byteLength:2,components:1};case gl:case vl:return{byteLength:2,components:4};case si:case fl:case Mn:return{byteLength:4,components:1};case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case ih:case sh:return i*e;case ah:return i*e*2;case oh:case _l:return i*e/r.components*r.byteLength;case lh:case xl:return i*e*2/r.components*r.byteLength;case rh:return i*e*3/r.components*r.byteLength;case Dt:case yl:return i*e*4/r.components*r.byteLength;case os:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cs:case hs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:case Ka:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case us:case go:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ch:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kd(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,M){return p?new OffscreenCanvas(A,M):xs("canvas")}function y(A,M,O){let V=1,w=he(A);if((w.width>O||w.height>O)&&(V=O/Math.max(w.width,w.height)),V<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let P=Math.floor(V*w.width),S=Math.floor(V*w.height);u===void 0&&(u=f(P,S));let I=M?f(P,S):u;return I.width=P,I.height=S,I.getContext("2d").drawImage(A,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+P+"x"+S+")."),I}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),A}return A}function g(A){return A.generateMipmaps&&A.minFilter!==wt&&A.minFilter!==sn}function m(A){i.generateMipmap(A)}function _(A,M,O,V,w=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let P=M;if(M===i.RED&&(O===i.FLOAT&&(P=i.R32F),O===i.HALF_FLOAT&&(P=i.R16F),O===i.UNSIGNED_BYTE&&(P=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(P=i.R8UI),O===i.UNSIGNED_SHORT&&(P=i.R16UI),O===i.UNSIGNED_INT&&(P=i.R32UI),O===i.BYTE&&(P=i.R8I),O===i.SHORT&&(P=i.R16I),O===i.INT&&(P=i.R32I)),M===i.RG&&(O===i.FLOAT&&(P=i.RG32F),O===i.HALF_FLOAT&&(P=i.RG16F),O===i.UNSIGNED_BYTE&&(P=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(P=i.RG8UI),O===i.UNSIGNED_SHORT&&(P=i.RG16UI),O===i.UNSIGNED_INT&&(P=i.RG32UI),O===i.BYTE&&(P=i.RG8I),O===i.SHORT&&(P=i.RG16I),O===i.INT&&(P=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(P=i.RGB8UI),O===i.UNSIGNED_SHORT&&(P=i.RGB16UI),O===i.UNSIGNED_INT&&(P=i.RGB32UI),O===i.BYTE&&(P=i.RGB8I),O===i.SHORT&&(P=i.RGB16I),O===i.INT&&(P=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),O===i.UNSIGNED_INT&&(P=i.RGBA32UI),O===i.BYTE&&(P=i.RGBA8I),O===i.SHORT&&(P=i.RGBA16I),O===i.INT&&(P=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),M===i.RGBA){let S=w?fs:Ve.getTransfer(V);O===i.FLOAT&&(P=i.RGBA32F),O===i.HALF_FLOAT&&(P=i.RGBA16F),O===i.UNSIGNED_BYTE&&(P=S===Ze?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return P!==i.R16F&&P!==i.R32F&&P!==i.RG16F&&P!==i.RG32F&&P!==i.RGBA16F&&P!==i.RGBA32F||e.get("EXT_color_buffer_float"),P}function v(A,M){let O;return A?M===null||M===si||M===Li?O=i.DEPTH24_STENCIL8:M===Mn?O=i.DEPTH32F_STENCIL8:M===cr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===si||M===Li?O=i.DEPTH_COMPONENT24:M===Mn?O=i.DEPTH_COMPONENT32F:M===cr&&(O=i.DEPTH_COMPONENT16),O}function x(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==wt&&A.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=A.target;M.removeEventListener("dispose",C),(function(O){let V=n.get(O);if(V.__webglInit===void 0)return;let w=O.source,P=d.get(w);if(P){let S=P[V.__cacheKey];S.usedTimes--,S.usedTimes===0&&R(O),Object.keys(P).length===0&&d.delete(w)}n.remove(O)})(M),M.isVideoTexture&&h.delete(M)}function T(A){let M=A.target;M.removeEventListener("dispose",T),(function(O){let V=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(V.__webglFramebuffer[P]))for(let S=0;S<V.__webglFramebuffer[P].length;S++)i.deleteFramebuffer(V.__webglFramebuffer[P][S]);else i.deleteFramebuffer(V.__webglFramebuffer[P]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[P])}else{if(Array.isArray(V.__webglFramebuffer))for(let P=0;P<V.__webglFramebuffer.length;P++)i.deleteFramebuffer(V.__webglFramebuffer[P]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let P=0;P<V.__webglColorRenderbuffer.length;P++)V.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[P]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let w=O.textures;for(let P=0,S=w.length;P<S;P++){let I=n.get(w[P]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(w[P])}n.remove(O)})(M)}function R(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let O=A.source;delete d.get(O)[M.__cacheKey],a.memory.textures--}let U=0;function N(A,M){let O=n.get(A);if(A.isVideoTexture&&(function(V){let w=a.render.frame;h.get(V)!==w&&(h.set(V,w),V.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(V.complete!==!1)return void Y(O,A,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}let B={[ja]:i.REPEAT,[lr]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},H={[wt]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},z={512:i.NEVER,519:i.ALWAYS,513:i.LESS,[hh]:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function q(A,M){if(M.type!==Mn||e.has("OES_texture_float_linear")!==!1||M.magFilter!==sn&&M.magFilter!==sa&&M.magFilter!==Ur&&M.magFilter!==Ti&&M.minFilter!==sn&&M.minFilter!==sa&&M.minFilter!==Ur&&M.minFilter!==Ti||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,B[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,B[M.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,B[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,H[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wt||M.minFilter!==Ur&&M.minFilter!==Ti||M.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function G(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));let V=M.source,w=d.get(V);w===void 0&&(w={},d.set(V,w));let P=(function(S){let I=[];return I.push(S.wrapS),I.push(S.wrapT),I.push(S.wrapR||0),I.push(S.magFilter),I.push(S.minFilter),I.push(S.anisotropy),I.push(S.internalFormat),I.push(S.format),I.push(S.type),I.push(S.generateMipmaps),I.push(S.premultiplyAlpha),I.push(S.flipY),I.push(S.unpackAlignment),I.push(S.colorSpace),I.join()})(M);if(P!==A.__cacheKey){w[P]===void 0&&(w[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),w[P].usedTimes++;let S=w[A.__cacheKey];S!==void 0&&(w[A.__cacheKey].usedTimes--,S.usedTimes===0&&R(M)),A.__cacheKey=P,A.__webglTexture=w[P].texture}return O}function Y(A,M,O){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let w=G(A,M),P=M.source;t.bindTexture(V,A.__webglTexture,i.TEXTURE0+O);let S=n.get(P);if(P.version!==S.__version||w===!0){t.activeTexture(i.TEXTURE0+O);let I=Ve.getPrimaries(Ve.workingColorSpace),L=M.colorSpace===Ei?null:Ve.getPrimaries(M.colorSpace),Z=M.colorSpace===Ei||I===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let F=y(M.image,!1,r.maxTextureSize);F=me(M,F);let J=s.convert(M.format,M.colorSpace),ee=s.convert(M.type),K,ce=_(M.internalFormat,J,ee,M.colorSpace,M.isVideoTexture);q(V,M);let de=M.mipmaps,fe=M.isVideoTexture!==!0,be=S.__version===void 0||w===!0,Ne=P.dataReady,Ue=x(M,F);if(M.isDepthTexture)ce=v(M.format===Ii,M.type),be&&(fe?t.texStorage2D(i.TEXTURE_2D,1,ce,F.width,F.height):t.texImage2D(i.TEXTURE_2D,0,ce,F.width,F.height,0,J,ee,null));else if(M.isDataTexture)if(de.length>0){fe&&be&&t.texStorage2D(i.TEXTURE_2D,Ue,ce,de[0].width,de[0].height);for(let xe=0,ze=de.length;xe<ze;xe++)K=de[xe],fe?Ne&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,J,ee,K.data):t.texImage2D(i.TEXTURE_2D,xe,ce,K.width,K.height,0,J,ee,K.data);M.generateMipmaps=!1}else fe?(be&&t.texStorage2D(i.TEXTURE_2D,Ue,ce,F.width,F.height),Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,J,ee,F.data)):t.texImage2D(i.TEXTURE_2D,0,ce,F.width,F.height,0,J,ee,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,ce,de[0].width,de[0].height,F.depth);for(let xe=0,ze=de.length;xe<ze;xe++)if(K=de[xe],M.format!==Dt)if(J!==null)if(fe){if(Ne)if(M.layerUpdates.size>0){let je=Hc(K.width,K.height,M.format,M.type);for(let $e of M.layerUpdates){let ve=K.data.subarray($e*je/K.data.BYTES_PER_ELEMENT,($e+1)*je/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,$e,K.width,K.height,1,J,ve,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,K.width,K.height,F.depth,J,K.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,ce,K.width,K.height,F.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,K.width,K.height,F.depth,J,ee,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,ce,K.width,K.height,F.depth,0,J,ee,K.data)}else{fe&&be&&t.texStorage2D(i.TEXTURE_2D,Ue,ce,de[0].width,de[0].height);for(let xe=0,ze=de.length;xe<ze;xe++)K=de[xe],M.format!==Dt?J!==null?fe?Ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,J,K.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,ce,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ne&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,K.width,K.height,J,ee,K.data):t.texImage2D(i.TEXTURE_2D,xe,ce,K.width,K.height,0,J,ee,K.data)}else if(M.isDataArrayTexture)if(fe){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,ce,F.width,F.height,F.depth),Ne)if(M.layerUpdates.size>0){let xe=Hc(F.width,F.height,M.format,M.type);for(let ze of M.layerUpdates){let je=F.data.subarray(ze*xe/F.data.BYTES_PER_ELEMENT,(ze+1)*xe/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,F.width,F.height,1,J,ee,je)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,J,ee,F.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,F.width,F.height,F.depth,0,J,ee,F.data);else if(M.isData3DTexture)fe?(be&&t.texStorage3D(i.TEXTURE_3D,Ue,ce,F.width,F.height,F.depth),Ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,J,ee,F.data)):t.texImage3D(i.TEXTURE_3D,0,ce,F.width,F.height,F.depth,0,J,ee,F.data);else if(M.isFramebufferTexture){if(be)if(fe)t.texStorage2D(i.TEXTURE_2D,Ue,ce,F.width,F.height);else{let xe=F.width,ze=F.height;for(let je=0;je<Ue;je++)t.texImage2D(i.TEXTURE_2D,je,ce,xe,ze,0,J,ee,null),xe>>=1,ze>>=1}}else if(de.length>0){if(fe&&be){let xe=he(de[0]);t.texStorage2D(i.TEXTURE_2D,Ue,ce,xe.width,xe.height)}for(let xe=0,ze=de.length;xe<ze;xe++)K=de[xe],fe?Ne&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,J,ee,K):t.texImage2D(i.TEXTURE_2D,xe,ce,J,ee,K);M.generateMipmaps=!1}else if(fe){if(be){let xe=he(F);t.texStorage2D(i.TEXTURE_2D,Ue,ce,xe.width,xe.height)}Ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,ee,F)}else t.texImage2D(i.TEXTURE_2D,0,ce,J,ee,F);g(M)&&m(V),S.__version=P.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function j(A,M,O,V,w,P){let S=s.convert(O.format,O.colorSpace),I=s.convert(O.type),L=_(O.internalFormat,S,I,O.colorSpace);if(!n.get(M).__hasExternalTextures){let Z=Math.max(1,M.width>>P),F=Math.max(1,M.height>>P);w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?t.texImage3D(w,P,L,Z,F,M.depth,0,S,I,null):t.texImage2D(w,P,L,Z,F,0,S,I,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ne(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,w,n.get(O).__webglTexture,0,Q(M)):(w===i.TEXTURE_2D||w>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,w,n.get(O).__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let V=M.depthTexture,w=V&&V.isDepthTexture?V.type:null,P=v(M.stencilBuffer,w),S=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=Q(M);ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,P,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,P,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,P,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,A)}else{let V=M.textures;for(let w=0;w<V.length;w++){let P=V[w],S=s.convert(P.format,P.colorSpace),I=s.convert(P.type),L=_(P.internalFormat,S,I,P.colorSpace),Z=Q(M);O&&ne(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,L,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,L,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,L,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(A){let M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let w=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",w)};V.addEventListener("dispose",w),M.__depthDisposeCallback=w}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(V,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,V),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(w.depthTexture).__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let P=n.get(w.depthTexture).__webglTexture,S=Q(w);if(w.depthTexture.format===hr)ne(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,P,0);else{if(w.depthTexture.format!==Ii)throw new Error("Unknown depthTexture format");ne(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0,S):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,P,0)}})(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),re(M.__webglDepthbuffer[V],A,!1);else{let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,P)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),re(M.__webglDepthbuffer,A,!1);else{let V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,w)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let le=[],_e=[];function Q(A){return Math.min(r.maxSamples,A.samples)}function ne(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(A,M){let O=A.colorSpace,V=A.format,w=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==zn&&O!==Ei&&(Ve.getTransfer(O)===Ze?V===Dt&&w===Sn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function he(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=U;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),U+=1,A},this.resetTextureUnits=function(){U=0},this.setTexture2D=N,this.setTexture2DArray=function(A,M){let O=n.get(A);A.version>0&&O.__version!==A.version?Y(O,A,M):t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)},this.setTexture3D=function(A,M){let O=n.get(A);A.version>0&&O.__version!==A.version?Y(O,A,M):t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)},this.setTextureCube=function(A,M){let O=n.get(A);A.version>0&&O.__version!==A.version?(function(V,w,P){if(w.image.length!==6)return;let S=G(V,w),I=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+P);let L=n.get(I);if(I.version!==L.__version||S===!0){t.activeTexture(i.TEXTURE0+P);let Z=Ve.getPrimaries(Ve.workingColorSpace),F=w.colorSpace===Ei?null:Ve.getPrimaries(w.colorSpace),J=w.colorSpace===Ei||Z===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ee=w.isCompressedTexture||w.image[0].isCompressedTexture,K=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)ce[ve]=ee||K?K?w.image[ve].image:w.image[ve]:y(w.image[ve],!0,r.maxCubemapSize),ce[ve]=me(w,ce[ve]);let de=ce[0],fe=s.convert(w.format,w.colorSpace),be=s.convert(w.type),Ne=_(w.internalFormat,fe,be,w.colorSpace),Ue=w.isVideoTexture!==!0,xe=L.__version===void 0||S===!0,ze=I.dataReady,je,$e=x(w,de);if(q(i.TEXTURE_CUBE_MAP,w),ee){Ue&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Ne,de.width,de.height);for(let ve=0;ve<6;ve++){je=ce[ve].mipmaps;for(let Oe=0;Oe<je.length;Oe++){let qe=je[Oe];w.format!==Dt?fe!==null?Ue?ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,qe.width,qe.height,fe,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,Ne,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,0,0,qe.width,qe.height,fe,be,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe,Ne,qe.width,qe.height,0,fe,be,qe.data)}}}else{if(je=w.mipmaps,Ue&&xe){je.length>0&&$e++;let ve=he(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,Ne,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(K){Ue?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,fe,be,ce[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ne,ce[ve].width,ce[ve].height,0,fe,be,ce[ve].data);for(let Oe=0;Oe<je.length;Oe++){let qe=je[Oe].image[ve].image;Ue?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,qe.width,qe.height,fe,be,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,Ne,qe.width,qe.height,0,fe,be,qe.data)}}else{Ue?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe,be,ce[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ne,fe,be,ce[ve]);for(let Oe=0;Oe<je.length;Oe++){let qe=je[Oe];Ue?ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,0,0,fe,be,qe.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Oe+1,Ne,fe,be,qe.image[ve])}}}g(w)&&m(i.TEXTURE_CUBE_MAP),L.__version=I.version,w.onUpdate&&w.onUpdate(w)}V.__version=w.version})(O,A,M):t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)},this.rebindTextures=function(A,M,O){let V=n.get(A);M!==void 0&&j(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&se(A)},this.setupRenderTarget=function(A){let M=A.texture,O=n.get(A),V=n.get(M);A.addEventListener("dispose",T);let w=A.textures,P=A.isWebGLCubeRenderTarget===!0,S=w.length>1;if(S||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,a.memory.textures++),P){O.__webglFramebuffer=[];for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[I]=[];for(let L=0;L<M.mipmaps.length;L++)O.__webglFramebuffer[I][L]=i.createFramebuffer()}else O.__webglFramebuffer[I]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let I=0;I<M.mipmaps.length;I++)O.__webglFramebuffer[I]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(S)for(let I=0,L=w.length;I<L;I++){let Z=n.get(w[I]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ne(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let I=0;I<w.length;I++){let L=w[I];O.__webglColorRenderbuffer[I]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[I]);let Z=s.convert(L.format,L.colorSpace),F=s.convert(L.type),J=_(L.internalFormat,Z,F,L.colorSpace,A.isXRRenderTarget===!0),ee=Q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,O.__webglColorRenderbuffer[I])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),re(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),q(i.TEXTURE_CUBE_MAP,M);for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0)for(let L=0;L<M.mipmaps.length;L++)j(O.__webglFramebuffer[I][L],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,L);else j(O.__webglFramebuffer[I],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);g(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let I=0,L=w.length;I<L;I++){let Z=w[I],F=n.get(Z);t.bindTexture(i.TEXTURE_2D,F.__webglTexture),q(i.TEXTURE_2D,Z),j(O.__webglFramebuffer,A,Z,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,0),g(Z)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let I=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(I=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(I,V.__webglTexture),q(I,M),M.mipmaps&&M.mipmaps.length>0)for(let L=0;L<M.mipmaps.length;L++)j(O.__webglFramebuffer[L],A,M,i.COLOR_ATTACHMENT0,I,L);else j(O.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,I,0);g(M)&&m(I),t.unbindTexture()}A.depthBuffer&&se(A)},this.updateRenderTargetMipmap=function(A){let M=A.textures;for(let O=0,V=M.length;O<V;O++){let w=M[O];if(g(w)){let P=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,S=n.get(w).__webglTexture;t.bindTexture(P,S),m(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ne(A)===!1){let M=A.textures,O=A.width,V=A.height,w=i.COLOR_BUFFER_BIT,P=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(A),I=M.length>1;if(I)for(let L=0;L<M.length;L++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let L=0;L<M.length;L++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(w|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(w|=i.STENCIL_BUFFER_BIT)),I){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[L]);let Z=n.get(M[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,w,i.NEAREST),l===!0&&(le.length=0,_e.length=0,le.push(i.COLOR_ATTACHMENT0+L),A.depthBuffer&&A.resolveDepthBuffer===!1&&(le.push(P),_e.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),I)for(let L=0;L<M.length;L++){t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,S.__webglColorRenderbuffer[L]);let Z=n.get(M[L]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ne}function $d(i,e){return{convert:function(t,n=""){let r,s=Ve.getTransfer(n);if(t===Sn)return i.UNSIGNED_BYTE;if(t===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(t===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(t===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===eh)return i.BYTE;if(t===th)return i.SHORT;if(t===cr)return i.UNSIGNED_SHORT;if(t===fl)return i.INT;if(t===si)return i.UNSIGNED_INT;if(t===Mn)return i.FLOAT;if(t===br)return i.HALF_FLOAT;if(t===ih)return i.ALPHA;if(t===rh)return i.RGB;if(t===Dt)return i.RGBA;if(t===sh)return i.LUMINANCE;if(t===ah)return i.LUMINANCE_ALPHA;if(t===hr)return i.DEPTH_COMPONENT;if(t===Ii)return i.DEPTH_STENCIL;if(t===oh)return i.RED;if(t===_l)return i.RED_INTEGER;if(t===lh)return i.RG;if(t===xl)return i.RG_INTEGER;if(t===yl)return i.RGBA_INTEGER;if(t===os||t===ls||t===cs||t===hs)if(s===Ze){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ya||t===Za||t===Ja||t===Ka){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===$a||t===Qa||t===eo){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===$a||t===Qa)return s===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===eo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===to||t===no||t===io||t===ro||t===so||t===ao||t===oo||t===lo||t===co||t===ho||t===uo||t===po||t===mo||t===fo){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===to)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===no)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===io)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ro)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===so)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ao)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===oo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===lo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===co)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ho)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===uo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===po)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===mo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===fo)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===us||t===go||t===vo){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===us)return s===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ch||t===_o||t===xo||t===yo){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===us)return r.COMPRESSED_RED_RGTC1_EXT;if(t===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Li?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Oo=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qd={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Nt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bo=class extends Nn{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,y=new Fo,g=t.getContextAttributes(),m=null,_=null,v=[],x=[],C=new te,T=null,R=new xt;R.layers.enable(1),R.viewport=new We;let U=new xt;U.layers.enable(2),U.viewport=new We;let N=[R,U],B=new Oo;B.layers.enable(1),B.layers.enable(2);let H=null,z=null;function q(Q){let ne=x.indexOf(Q.inputSource);if(ne===-1)return;let me=v[ne];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||a),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<v.length;Q++){let ne=x[Q];ne!==null&&(x[Q]=null,v[Q].disconnect(ne))}H=null,z=null,y.reset(),e.setRenderTarget(m),p=null,d=null,u=null,r=null,_=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}function Y(Q){for(let ne=0;ne<Q.removed.length;ne++){let me=Q.removed[ne],he=x.indexOf(me);he>=0&&(x[he]=null,v[he].disconnect(me))}for(let ne=0;ne<Q.added.length;ne++){let me=Q.added[ne],he=x.indexOf(me);if(he===-1){for(let M=0;M<v.length;M++){if(M>=x.length){x.push(me),he=M;break}if(x[M]===null){x[M]=me,he=M;break}}if(he===-1)break}let A=v[he];A&&A.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=v[Q];return ne===void 0&&(ne=new sr,v[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=v[Q];return ne===void 0&&(ne=new sr,v[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=v[Q];return ne===void 0&&(ne=new sr,v[Q]=ne),ne.getHandSpace()},this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new bn(p.framebufferWidth,p.framebufferHeight,{format:Dt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,me=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?Ii:hr,me=g.stencil?Li:si);let A={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(A),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new bn(d.textureWidth,d.textureHeight,{format:Dt,type:Sn,depthTexture:new Rs(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let j=new E,re=new E;function se(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ne=Q.near,me=Q.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(me=y.depthFar)),B.near=U.near=R.near=ne,B.far=U.far=R.far=me,H===B.near&&z===B.far||(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,z=B.far);let he=Q.parent,A=B.cameras;se(B,he);for(let M=0;M<A.length;M++)se(A[M],he);A.length===2?(function(M,O,V){j.setFromMatrixPosition(O.matrixWorld),re.setFromMatrixPosition(V.matrixWorld);let w=j.distanceTo(re),P=O.projectionMatrix.elements,S=V.projectionMatrix.elements,I=P[14]/(P[10]-1),L=P[14]/(P[10]+1),Z=(P[9]+1)/P[5],F=(P[9]-1)/P[5],J=(P[8]-1)/P[0],ee=(S[8]+1)/S[0],K=I*J,ce=I*ee,de=w/(-J+ee),fe=de*-J;if(O.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(fe),M.translateZ(de),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),P[10]===-1)M.projectionMatrix.copy(O.projectionMatrix),M.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let be=I+de,Ne=L+de,Ue=K-fe,xe=ce+(w-fe),ze=Z*L/Ne*be,je=F*L/Ne*be;M.projectionMatrix.makePerspective(Ue,xe,ze,je,be,Ne),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(B,R,U):B.projectionMatrix.copy(R.projectionMatrix),(function(M,O,V){V===null?M.matrix.copy(O.matrixWorld):(M.matrix.copy(V.matrixWorld),M.matrix.invert(),M.matrix.multiply(O.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(O.projectionMatrix),M.projectionMatrixInverse.copy(O.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*So*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(Q,B,he)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)};let le=null,_e=new mh;_e.setAnimationLoop((function(Q,ne){if(h=ne.getViewerPose(c||a),f=ne,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;me.length!==B.cameras.length&&(B.cameras.length=0,he=!0);for(let M=0;M<me.length;M++){let O=me[M],V=null;if(p!==null)V=p.getViewport(O);else{let P=u.getViewSubImage(d,O);V=P.viewport,M===0&&(e.setRenderTargetTextures(_,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let w=N[M];w===void 0&&(w=new xt,w.layers.enable(M),w.viewport=new We,N[M]=w),w.matrix.fromArray(O.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(O.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(V.x,V.y,V.width,V.height),M===0&&(B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),he===!0&&B.cameras.push(w)}let A=r.enabledFeatures;if(A&&A.includes("depth-sensing")){let M=u.getDepthInformation(me[0]);M&&M.isValid&&M.texture&&y.init(e,M,r.renderState)}}for(let me=0;me<v.length;me++){let he=x[me],A=v[me];he!==null&&A!==void 0&&A.update(he,ne,c||a)}le&&le(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),f=null})),this.setAnimationLoop=function(Q){le=Q},this.dispose=function(){}}},ei=new hn,ep=new we;function tp(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===pt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===pt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ei.copy(l),ei.x*=-1,ei.y*=-1,ei.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),r.envMapRotation.value.setFromMatrix4(ep.makeRotationFromEuler(ei)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ph(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function np(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let y=u.value,g=d+"_"+p;if(f[g]===void 0)return f[g]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let m=f[g];if(typeof y=="number"||typeof y=="boolean"){if(m!==y)return f[g]=y,!0}else if(m.equals(y)===!1)return m.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(g){let m=g.uniforms,_=0,v=16;for(let C=0,T=m.length;C<T;C++){let R=Array.isArray(m[C])?m[C]:[m[C]];for(let U=0,N=R.length;U<N;U++){let B=R[U],H=Array.isArray(B.value)?B.value:[B.value];for(let z=0,q=H.length;z<q;z++){let G=c(H[z]),Y=_%v,j=Y%G.boundary,re=Y+j;_+=j,re!==0&&v-re<G.storage&&(_+=v-re),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=G.storage}}}let x=_%v;x>0&&(_+=v-x),g.__size=_,g.__cache={}})(u),p=(function(g){let m=(function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=m;let _=i.createBuffer(),v=g.__size,x=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,_),_})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let y=e.render.frame;s[u.id]!==y&&((function(g){let m=r[g.id],_=g.uniforms,v=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let x=0,C=_.length;x<C;x++){let T=Array.isArray(_[x])?_[x]:[_[x]];for(let R=0,U=T.length;R<U;R++){let N=T[R];if(l(N,x,R,v)===!0){let B=N.__offset,H=Array.isArray(N.value)?N.value:[N.value],z=0;for(let q=0;q<H.length;q++){let G=H[q],Y=c(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+z,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=y)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var Cs=class{constructor(e={}){let{canvas:t=hu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let p=new Uint32Array(4),f=new Int32Array(4),y=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Un,this.toneMappingExposure=1;let v=this,x=!1,C=0,T=0,R=null,U=-1,N=null,B=new We,H=new We,z=null,q=new Re(0),G=0,Y=t.width,j=t.height,re=1,se=null,le=null,_e=new We(0,0,Y,j),Q=new We(0,0,Y,j),ne=!1,me=new Oi,he=!1,A=!1,M=new we,O=new we,V=new E,w=new We,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function I(){return R===null?re:1}let L,Z,F,J,ee,K,ce,de,fe,be,Ne,Ue,xe,ze,je,$e,ve,Oe,qe,Cr,hi,Lt,pn,Wn,D=n;function Xn(b,k){return t.getContext(b,k)}try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Ol,!1),t.addEventListener("webglcontextrestored",Fl,!1),t.addEventListener("webglcontextcreationerror",Bl,!1),D===null){let k="webgl2";if(D=Xn(k,b),D===null)throw Xn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Yi(){L=new Ou(D),L.init(),Lt=new $d(D,L),Z=new Iu(D,L,e,Lt),F=new Jd(D),Z.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),J=new zu(D),ee=new kd,K=new Kd(D,L,F,ee,Z,Lt,J),ce=new Du(v),de=new Nu(v),fe=new Au(D),pn=new Pu(D,fe),be=new Fu(D,fe,J,pn),Ne=new Gu(D,be,fe,J),qe=new ku(D,Z,K),$e=new Uu(ee),Ue=new zd(v,ce,de,L,Z,pn,$e),xe=new tp(v,ee),ze=new Hd,je=new qd(L),Oe=new Cu(v,ce,de,F,Ne,d,l),ve=new Yd(v,Ne,Z),Wn=new np(D,J,Z,F),Cr=new Lu(D,L,J),hi=new Bu(D,L,J),J.programs=Ue.programs,v.capabilities=Z,v.extensions=L,v.properties=ee,v.renderLists=ze,v.shadowMap=ve,v.state=F,v.info=J}Yi();let ht=new Bo(v,D);function Ol(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Fl(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let b=J.autoReset,k=ve.enabled,X=ve.autoUpdate,$=ve.needsUpdate,W=ve.type;Yi(),J.autoReset=b,ve.enabled=k,ve.autoUpdate=X,ve.needsUpdate=$,ve.type=W}function Bl(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zl(b){let k=b.target;k.removeEventListener("dispose",zl),(function(X){(function($){let W=ee.get($).programs;W!==void 0&&(W.forEach((function(ie){Ue.releaseProgram(ie)})),$.isShaderMaterial&&Ue.releaseShaderCache($))})(X),ee.remove(X)})(k)}function kl(b,k,X){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=pt,b.needsUpdate=!0,Lr(b,k,X),b.side=an,b.needsUpdate=!0,Lr(b,k,X),b.side=2):Lr(b,k,X)}this.xr=ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(Y,j,!1))},this.getSize=function(b){return b.set(Y,j)},this.setSize=function(b,k,X=!0){ht.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Y=b,j=k,t.width=Math.floor(b*re),t.height=Math.floor(k*re),X===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k))},this.getDrawingBufferSize=function(b){return b.set(Y*re,j*re).floor()},this.setDrawingBufferSize=function(b,k,X){Y=b,j=k,re=X,t.width=Math.floor(b*X),t.height=Math.floor(k*X),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,k,X,$){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,k,X,$),F.viewport(B.copy(_e).multiplyScalar(re).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,k,X,$){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,k,X,$),F.scissor(H.copy(Q).multiplyScalar(re).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){F.setScissorTest(ne=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(b=!0,k=!0,X=!0){let $=0;if(b){let W=!1;if(R!==null){let ie=R.texture.format;W=ie===yl||ie===xl||ie===_l}if(W){let ie=R.texture.type,ue=ie===Sn||ie===si||ie===cr||ie===Li||ie===gl||ie===vl,ge=Oe.getClearColor(),ye=Oe.getClearAlpha(),Ee=ge.r,Se=ge.g,Me=ge.b;ue?(p[0]=Ee,p[1]=Se,p[2]=Me,p[3]=ye,D.clearBufferuiv(D.COLOR,0,p)):(f[0]=Ee,f[1]=Se,f[2]=Me,f[3]=ye,D.clearBufferiv(D.COLOR,0,f))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ol,!1),t.removeEventListener("webglcontextrestored",Fl,!1),t.removeEventListener("webglcontextcreationerror",Bl,!1),ze.dispose(),je.dispose(),ee.dispose(),ce.dispose(),de.dispose(),Ne.dispose(),pn.dispose(),Wn.dispose(),Ue.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Gl),ht.removeEventListener("sessionend",Hl),jn.stop()},this.renderBufferDirect=function(b,k,X,$,W,ie){k===null&&(k=P);let ue=W.isMesh&&W.matrixWorld.determinant()<0,ge=(function(Ge,et,mt,Ie,Te){et.isScene!==!0&&(et=P),K.resetTextureUnits();let jt=et.fog,Vh=Ie.isMeshStandardMaterial?et.environment:null,Wh=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zn,Ir=(Ie.isMeshStandardMaterial?de:ce).get(Ie.envMap||Vh),Xh=Ie.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,jh=!!mt.attributes.tangent&&(!!Ie.normalMap||Ie.anisotropy>0),qh=!!mt.morphAttributes.position,Yh=!!mt.morphAttributes.normal,Zh=!!mt.morphAttributes.color,Yl=Un;Ie.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(Yl=v.toneMapping));let Zl=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Jh=Zl!==void 0?Zl.length:0,Fe=ee.get(Ie),Kh=g.state.lights;if(he===!0&&(A===!0||Ge!==N)){let zt=Ge===N&&Ie.id===U;$e.setState(Ie,Ge,zt)}let qt=!1;Ie.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Kh.state.version||Fe.outputColorSpace!==Wh||Te.isBatchedMesh&&Fe.batching===!1?qt=!0:Te.isBatchedMesh||Fe.batching!==!0?Te.isBatchedMesh&&Fe.batchingColor===!0&&Te.colorTexture===null||Te.isBatchedMesh&&Fe.batchingColor===!1&&Te.colorTexture!==null||Te.isInstancedMesh&&Fe.instancing===!1?qt=!0:Te.isInstancedMesh||Fe.instancing!==!0?Te.isSkinnedMesh&&Fe.skinning===!1?qt=!0:Te.isSkinnedMesh||Fe.skinning!==!0?Te.isInstancedMesh&&Fe.instancingColor===!0&&Te.instanceColor===null||Te.isInstancedMesh&&Fe.instancingColor===!1&&Te.instanceColor!==null||Te.isInstancedMesh&&Fe.instancingMorph===!0&&Te.morphTexture===null||Te.isInstancedMesh&&Fe.instancingMorph===!1&&Te.morphTexture!==null||Fe.envMap!==Ir||Ie.fog===!0&&Fe.fog!==jt?qt=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===$e.numPlanes&&Fe.numIntersection===$e.numIntersection?(Fe.vertexAlphas!==Xh||Fe.vertexTangents!==jh||Fe.morphTargets!==qh||Fe.morphNormals!==Yh||Fe.morphColors!==Zh||Fe.toneMapping!==Yl||Fe.morphTargetsCount!==Jh)&&(qt=!0):qt=!0:qt=!0:qt=!0:qt=!0:(qt=!0,Fe.__version=Ie.version);let qn=Fe.currentProgram;qt===!0&&(qn=Lr(Ie,et,Te));let Jl=!1,Zi=!1,ia=!1,rt=qn.getUniforms(),Tn=Fe.uniforms;if(F.useProgram(qn.program)&&(Jl=!0,Zi=!0,ia=!0),Ie.id!==U&&(U=Ie.id,Zi=!0),Jl||N!==Ge){Z.reverseDepthBuffer?(M.copy(Ge.projectionMatrix),(function(Yn){let Je=Yn.elements;Je[2]=.5*Je[2]+.5*Je[3],Je[6]=.5*Je[6]+.5*Je[7],Je[10]=.5*Je[10]+.5*Je[11],Je[14]=.5*Je[14]+.5*Je[15]})(M),(function(Yn){let Je=Yn.elements;Je[11]===-1?(Je[10]=-Je[10]-1,Je[14]=-Je[14]):(Je[10]=-Je[10],Je[14]=1-Je[14])})(M),rt.setValue(D,"projectionMatrix",M)):rt.setValue(D,"projectionMatrix",Ge.projectionMatrix),rt.setValue(D,"viewMatrix",Ge.matrixWorldInverse);let zt=rt.map.cameraPosition;zt!==void 0&&zt.setValue(D,V.setFromMatrixPosition(Ge.matrixWorld)),Z.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Ie.isMeshPhongMaterial||Ie.isMeshToonMaterial||Ie.isMeshLambertMaterial||Ie.isMeshBasicMaterial||Ie.isMeshStandardMaterial||Ie.isShaderMaterial)&&rt.setValue(D,"isOrthographic",Ge.isOrthographicCamera===!0),N!==Ge&&(N=Ge,Zi=!0,ia=!0)}if(Te.isSkinnedMesh){rt.setOptional(D,Te,"bindMatrix"),rt.setOptional(D,Te,"bindMatrixInverse");let zt=Te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),rt.setValue(D,"boneTexture",zt.boneTexture,K))}Te.isBatchedMesh&&(rt.setOptional(D,Te,"batchingTexture"),rt.setValue(D,"batchingTexture",Te._matricesTexture,K),rt.setOptional(D,Te,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",Te._indirectTexture,K),rt.setOptional(D,Te,"batchingColorTexture"),Te._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",Te._colorsTexture,K));let ra=mt.morphAttributes;ra.position===void 0&&ra.normal===void 0&&ra.color===void 0||qe.update(Te,mt,qn),(Zi||Fe.receiveShadow!==Te.receiveShadow)&&(Fe.receiveShadow=Te.receiveShadow,rt.setValue(D,"receiveShadow",Te.receiveShadow)),Ie.isMeshGouraudMaterial&&Ie.envMap!==null&&(Tn.envMap.value=Ir,Tn.flipEnvMap.value=Ir.isCubeTexture&&Ir.isRenderTargetTexture===!1?-1:1),Ie.isMeshStandardMaterial&&Ie.envMap===null&&et.environment!==null&&(Tn.envMapIntensity.value=et.environmentIntensity),Zi&&(rt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&(Yt=ia,(tn=Tn).ambientLightColor.needsUpdate=Yt,tn.lightProbe.needsUpdate=Yt,tn.directionalLights.needsUpdate=Yt,tn.directionalLightShadows.needsUpdate=Yt,tn.pointLights.needsUpdate=Yt,tn.pointLightShadows.needsUpdate=Yt,tn.spotLights.needsUpdate=Yt,tn.spotLightShadows.needsUpdate=Yt,tn.rectAreaLights.needsUpdate=Yt,tn.hemisphereLights.needsUpdate=Yt),jt&&Ie.fog===!0&&xe.refreshFogUniforms(Tn,jt),xe.refreshMaterialUniforms(Tn,Ie,re,j,g.state.transmissionRenderTarget[Ge.id]),Ri.upload(D,jl(Fe),Tn,K));var tn,Yt;if(Ie.isShaderMaterial&&Ie.uniformsNeedUpdate===!0&&(Ri.upload(D,jl(Fe),Tn,K),Ie.uniformsNeedUpdate=!1),Ie.isSpriteMaterial&&rt.setValue(D,"center",Te.center),rt.setValue(D,"modelViewMatrix",Te.modelViewMatrix),rt.setValue(D,"normalMatrix",Te.normalMatrix),rt.setValue(D,"modelMatrix",Te.matrixWorld),Ie.isShaderMaterial||Ie.isRawShaderMaterial){let zt=Ie.uniformsGroups;for(let Yn=0,Je=zt.length;Yn<Je;Yn++){let Kl=zt[Yn];Wn.update(Kl,qn),Wn.bind(Kl,qn)}}return qn})(b,k,X,$,W);F.setMaterial($,ue);let ye=X.index,Ee=1;if($.wireframe===!0){if(ye=be.getWireframeAttribute(X),ye===void 0)return;Ee=2}let Se=X.drawRange,Me=X.attributes.position,ke=Se.start*Ee,it=(Se.start+Se.count)*Ee;ie!==null&&(ke=Math.max(ke,ie.start*Ee),it=Math.min(it,(ie.start+ie.count)*Ee)),ye!==null?(ke=Math.max(ke,0),it=Math.min(it,ye.count)):Me!=null&&(ke=Math.max(ke,0),it=Math.min(it,Me.count));let Qe=it-ke;if(Qe<0||Qe===1/0)return;let ut;pn.setup(W,$,ge,X,ye);let Ye=Cr;if(ye!==null&&(ut=fe.get(ye),Ye=hi,Ye.setIndex(ut)),W.isMesh)$.wireframe===!0?(F.setLineWidth($.wireframeLinewidth*I()),Ye.setMode(D.LINES)):Ye.setMode(D.TRIANGLES);else if(W.isLine){let Ge=$.linewidth;Ge===void 0&&(Ge=1),F.setLineWidth(Ge*I()),W.isLineSegments?Ye.setMode(D.LINES):W.isLineLoop?Ye.setMode(D.LINE_LOOP):Ye.setMode(D.LINE_STRIP)}else W.isPoints?Ye.setMode(D.POINTS):W.isSprite&&Ye.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ye.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(L.get("WEBGL_multi_draw"))Ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,et=W._multiDrawCounts,mt=W._multiDrawCount,Ie=ye?fe.get(ye).bytesPerElement:1,Te=ee.get($).currentProgram.getUniforms();for(let jt=0;jt<mt;jt++)Te.setValue(D,"_gl_DrawID",jt),Ye.render(Ge[jt]/Ie,et[jt])}else if(W.isInstancedMesh)Ye.renderInstances(ke,Qe,W.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,et=Math.min(X.instanceCount,Ge);Ye.renderInstances(ke,Qe,et)}else Ye.render(ke,Qe)},this.compile=function(b,k,X=null){X===null&&(X=b),g=je.get(X),g.init(k),_.push(g),X.traverseVisible((function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),b!==X&&b.traverseVisible((function(W){W.isLight&&W.layers.test(k.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))})),g.setupLights();let $=new Set;return b.traverse((function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ie=W.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let ge=ie[ue];kl(ge,X,W),$.add(ge)}else kl(ie,X,W),$.add(ie)})),_.pop(),g=null,$},this.compileAsync=function(b,k,X=null){let $=this.compile(b,k,X);return new Promise((W=>{function ie(){$.forEach((function(ue){ee.get(ue).currentProgram.isReady()&&$.delete(ue)})),$.size!==0?setTimeout(ie,10):W(b)}L.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)}))};let ta=null;function Gl(){jn.stop()}function Hl(){jn.start()}let jn=new mh;function na(b,k,X,$){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){$&&w.setFromMatrixPosition(b.matrixWorld).applyMatrix4(O);let ie=Ne.update(b),ue=b.material;ue.visible&&y.push(b,ie,ue,X,w.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){let ie=Ne.update(b),ue=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),w.copy(b.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),w.copy(ie.boundingSphere.center)),w.applyMatrix4(b.matrixWorld).applyMatrix4(O)),Array.isArray(ue)){let ge=ie.groups;for(let ye=0,Ee=ge.length;ye<Ee;ye++){let Se=ge[ye],Me=ue[Se.materialIndex];Me&&Me.visible&&y.push(b,ie,Me,X,w.z,Se)}}else ue.visible&&y.push(b,ie,ue,X,w.z,null)}}let W=b.children;for(let ie=0,ue=W.length;ie<ue;ie++)na(W[ie],k,X,$)}function Vl(b,k,X,$){let W=b.opaque,ie=b.transmissive,ue=b.transparent;g.setupLightsView(X),he===!0&&$e.setGlobalState(v.clippingPlanes,X),$&&F.viewport(B.copy($)),W.length>0&&Pr(W,k,X),ie.length>0&&Pr(ie,k,X),ue.length>0&&Pr(ue,k,X),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Wl(b,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new bn(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?br:Sn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));let W=g.state.transmissionRenderTarget[$.id],ie=$.viewport||B;W.setSize(ie.z,ie.w);let ue=v.getRenderTarget();v.setRenderTarget(W),v.getClearColor(q),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),S&&Oe.render(X);let ge=v.toneMapping;v.toneMapping=Un;let ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),he===!0&&$e.setGlobalState(v.clippingPlanes,$),Pr(b,X,$),K.updateMultisampleRenderTarget(W),K.updateRenderTargetMipmap(W),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Se=0,Me=k.length;Se<Me;Se++){let ke=k[Se],it=ke.object,Qe=ke.geometry,ut=ke.material,Ye=ke.group;if(ut.side===2&&it.layers.test($.layers)){let Ge=ut.side;ut.side=pt,ut.needsUpdate=!0,Xl(it,X,$,Qe,ut,Ye),ut.side=Ge,ut.needsUpdate=!0,Ee=!0}}Ee===!0&&(K.updateMultisampleRenderTarget(W),K.updateRenderTargetMipmap(W))}v.setRenderTarget(ue),v.setClearColor(q,G),ye!==void 0&&($.viewport=ye),v.toneMapping=ge}function Pr(b,k,X){let $=k.isScene===!0?k.overrideMaterial:null;for(let W=0,ie=b.length;W<ie;W++){let ue=b[W],ge=ue.object,ye=ue.geometry,Ee=$===null?ue.material:$,Se=ue.group;ge.layers.test(X.layers)&&Xl(ge,k,X,ye,Ee,Se)}}function Xl(b,k,X,$,W,ie){b.onBeforeRender(v,k,X,$,W,ie),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,k,X,$,b,ie),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=pt,W.needsUpdate=!0,v.renderBufferDirect(X,k,$,W,b,ie),W.side=an,W.needsUpdate=!0,v.renderBufferDirect(X,k,$,W,b,ie),W.side=2):v.renderBufferDirect(X,k,$,W,b,ie),b.onAfterRender(v,k,X,$,W,ie)}function Lr(b,k,X){k.isScene!==!0&&(k=P);let $=ee.get(b),W=g.state.lights,ie=g.state.shadowsArray,ue=W.state.version,ge=Ue.getParameters(b,W.state,ie,k,X),ye=Ue.getProgramCacheKey(ge),Ee=$.programs;$.environment=b.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(b.isMeshStandardMaterial?de:ce).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",zl),Ee=new Map,$.programs=Ee);let Se=Ee.get(ye);if(Se!==void 0){if($.currentProgram===Se&&$.lightsStateVersion===ue)return ql(b,ge),Se}else ge.uniforms=Ue.getUniforms(b),b.onBeforeCompile(ge,v),Se=Ue.acquireProgram(ge,ye),Ee.set(ye,Se),$.uniforms=ge.uniforms;let Me=$.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Me.clippingPlanes=$e.uniform),ql(b,ge),$.needsLights=(function(ke){return ke.isMeshLambertMaterial||ke.isMeshToonMaterial||ke.isMeshPhongMaterial||ke.isMeshStandardMaterial||ke.isShadowMaterial||ke.isShaderMaterial&&ke.lights===!0})(b),$.lightsStateVersion=ue,$.needsLights&&(Me.ambientLightColor.value=W.state.ambient,Me.lightProbe.value=W.state.probe,Me.directionalLights.value=W.state.directional,Me.directionalLightShadows.value=W.state.directionalShadow,Me.spotLights.value=W.state.spot,Me.spotLightShadows.value=W.state.spotShadow,Me.rectAreaLights.value=W.state.rectArea,Me.ltc_1.value=W.state.rectAreaLTC1,Me.ltc_2.value=W.state.rectAreaLTC2,Me.pointLights.value=W.state.point,Me.pointLightShadows.value=W.state.pointShadow,Me.hemisphereLights.value=W.state.hemi,Me.directionalShadowMap.value=W.state.directionalShadowMap,Me.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Me.spotShadowMap.value=W.state.spotShadowMap,Me.spotLightMatrix.value=W.state.spotLightMatrix,Me.spotLightMap.value=W.state.spotLightMap,Me.pointShadowMap.value=W.state.pointShadowMap,Me.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Se,$.uniformsList=null,Se}function jl(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=Ri.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ql(b,k){let X=ee.get(b);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}jn.setAnimationLoop((function(b){ta&&ta(b)})),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){ta=b,ht.setAnimationLoop(b),b===null?jn.stop():jn.start()},ht.addEventListener("sessionstart",Gl),ht.addEventListener("sessionend",Hl),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,R),g=je.get(b,_.length),g.init(k),_.push(g),O.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),me.setFromProjectionMatrix(O),A=this.localClippingEnabled,he=$e.init(this.clippingPlanes,A),y=ze.get(b,m.length),y.init(),m.push(y),ht.enabled===!0&&ht.isPresenting===!0){let ie=v.xr.getDepthSensingMesh();ie!==null&&na(ie,k,-1/0,v.sortObjects)}na(b,k,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(se,le),S=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,S&&Oe.addToRenderList(y,b),this.info.render.frame++,he===!0&&$e.beginShadows();let X=g.state.shadowsArray;ve.render(X,b,k),he===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=y.opaque,W=y.transmissive;if(g.setupLights(),k.isArrayCamera){let ie=k.cameras;if(W.length>0)for(let ue=0,ge=ie.length;ue<ge;ue++)Wl($,W,b,ie[ue]);S&&Oe.render(b);for(let ue=0,ge=ie.length;ue<ge;ue++){let ye=ie[ue];Vl(y,b,ye,ye.viewport)}}else W.length>0&&Wl($,W,b,k),S&&Oe.render(b),Vl(y,b,k);R!==null&&(K.updateMultisampleRenderTarget(R),K.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,k),pn.resetDefaultState(),U=-1,N=null,_.pop(),_.length>0?(g=_[_.length-1],he===!0&&$e.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),y=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,k,X){ee.get(b.texture).__webglTexture=k,ee.get(b.depthTexture).__webglTexture=X;let $=ee.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){let X=ee.get(b);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,X=0){R=b,C=k,T=X;let $=!0,W=null,ie=!1,ue=!1;if(b){let ge=ee.get(b);if(ge.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(ge.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(ge.__hasExternalTextures)K.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Se=b.depthTexture;if(ge.__boundDepthTexture!==Se){if(Se!==null&&ee.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let ye=b.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ue=!0);let Ee=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Array.isArray(Ee[k])?Ee[k][X]:Ee[k],ie=!0):W=b.samples>0&&K.useMultisampledRTT(b)===!1?ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[X]:Ee,B.copy(b.viewport),H.copy(b.scissor),z=b.scissorTest}else B.copy(_e).multiplyScalar(re).floor(),H.copy(Q).multiplyScalar(re).floor(),z=ne;if(F.bindFramebuffer(D.FRAMEBUFFER,W)&&$&&F.drawBuffers(b,W),F.viewport(B),F.scissor(H),F.setScissorTest(z),ie){let ge=ee.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge.__webglTexture,X)}else if(ue){let ge=ee.get(b.texture),ye=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,X||0,ye)}U=-1},this.readRenderTargetPixels=function(b,k,X,$,W,ie,ue){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){F.bindFramebuffer(D.FRAMEBUFFER,ge);try{let ye=b.texture,Ee=ye.format,Se=ye.type;if(!Z.textureFormatReadable(Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Se))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=b.width-$&&X>=0&&X<=b.height-W&&D.readPixels(k,X,$,W,Lt.convert(Ee),Lt.convert(Se),ie)}finally{let ye=R!==null?ee.get(R).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,k,X,$,W,ie,ue){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){let ye=b.texture,Ee=ye.format,Se=ye.type;if(!Z.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-$&&X>=0&&X<=b.height-W){F.bindFramebuffer(D.FRAMEBUFFER,ge);let Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(k,X,$,W,Lt.convert(Ee),Lt.convert(Se),0);let ke=R!==null?ee.get(R).__webglFramebuffer:null;F.bindFramebuffer(D.FRAMEBUFFER,ke);let it=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await(function(Qe,ut,Ye){return new Promise((function(Ge,et){setTimeout((function mt(){switch(Qe.clientWaitSync(ut,Qe.SYNC_FLUSH_COMMANDS_BIT,0)){case Qe.WAIT_FAILED:et();break;case Qe.TIMEOUT_EXPIRED:setTimeout(mt,Ye);break;default:Ge()}}),Ye)}))})(D,it,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Me),D.deleteSync(it),ie}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,X=0){b.isTexture!==!0&&(ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);let $=Math.pow(2,-X),W=Math.floor(b.image.width*$),ie=Math.floor(b.image.height*$),ue=k!==null?k.x:0,ge=k!==null?k.y:0;K.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,ue,ge,W,ie),F.unbindTexture()},this.copyTextureToTexture=function(b,k,X=null,$=null,W=0){let ie,ue,ge,ye,Ee,Se;b.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],k=arguments[2],W=arguments[3]||0,X=null),X!==null?(ie=X.max.x-X.min.x,ue=X.max.y-X.min.y,ge=X.min.x,ye=X.min.y):(ie=b.image.width,ue=b.image.height,ge=0,ye=0),$!==null?(Ee=$.x,Se=$.y):(Ee=0,Se=0);let Me=Lt.convert(k.format),ke=Lt.convert(k.type);K.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let it=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ut=D.getParameter(D.UNPACK_SKIP_PIXELS),Ye=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES),et=b.isCompressedTexture?b.mipmaps[W]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,ye),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Ee,Se,ie,ue,Me,ke,et.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Ee,Se,et.width,et.height,Me,et.data):D.texSubImage2D(D.TEXTURE_2D,W,Ee,Se,ie,ue,Me,ke,et),D.pixelStorei(D.UNPACK_ROW_LENGTH,it),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),W===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,k,X=null,$=null,W=0){let ie,ue,ge,ye,Ee,Se,Me,ke,it;b.isTexture!==!0&&(ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,b=arguments[2],k=arguments[3],W=arguments[4]||0);let Qe=b.isCompressedTexture?b.mipmaps[W]:b.image;X!==null?(ie=X.max.x-X.min.x,ue=X.max.y-X.min.y,ge=X.max.z-X.min.z,ye=X.min.x,Ee=X.min.y,Se=X.min.z):(ie=Qe.width,ue=Qe.height,ge=Qe.depth,ye=0,Ee=0,Se=0),$!==null?(Me=$.x,ke=$.y,it=$.z):(Me=0,ke=0,it=0);let ut=Lt.convert(k.format),Ye=Lt.convert(k.type),Ge;if(k.isData3DTexture)K.setTexture3D(k,0),Ge=D.TEXTURE_3D;else{if(!k.isDataArrayTexture&&!k.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");K.setTexture2DArray(k,0),Ge=D.TEXTURE_2D_ARRAY}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let et=D.getParameter(D.UNPACK_ROW_LENGTH),mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ie=D.getParameter(D.UNPACK_SKIP_PIXELS),Te=D.getParameter(D.UNPACK_SKIP_ROWS),jt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Se),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ge,W,Me,ke,it,ie,ue,ge,ut,Ye,Qe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,W,Me,ke,it,ie,ue,ge,ut,Qe.data):D.texSubImage3D(Ge,W,Me,ke,it,ie,ue,ge,ut,Ye,Qe),D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),W===0&&k.generateMipmaps&&D.generateMipmap(Ge),F.unbindTexture()},this.initRenderTarget=function(b){ee.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,F.reset(),pn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ml?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===js?"display-p3":"srgb"}};var Ps=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var zp=new E;var kp=new E,Gp=new E,Hp=new E,Vp=new te,Wp=new te,Xp=new we,jp=new E,qp=new E,Yp=new E,Zp=new te,Jp=new te,Kp=new te;var $p=new E,Qp=new E;var em=new E,tm=new We,nm=new We,im=new E,rm=new we,sm=new E,am=new cn,om=new we,lm=new Di;var Is=class extends Nt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cm=new we,hm=new we;var um=new we,dm=new we;var pm=new ln,mm=new we,fm=new st,gm=new cn;var zo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}},vm=new we,_m=new we,xm=new we,ym=new Re(1,1,1),Mm=new we,Sm=new Oi,bm=new ln,Em=new cn,Tm=new E,wm=new E,Am=new E,Rm=new zo,Cm=new st;var Pm=new E,Lm=new E,Im=new we,Um=new Di,Dm=new cn,Nm=new E,Om=new E;var Fm=new E,Bm=new E;var zm=new we,km=new Di,Gm=new cn,Hm=new E;var Ht=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new te:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,r=[],s=[],a=[],o=new E,l=new we;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pr=class extends Ht{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends pr{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bl(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var es=new E,Na=new bl,Oa=new bl,Fa=new bl,mr=class extends Ht{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),o=es);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=es),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),g<1e-4&&(g=y),Na.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,y,g),Oa.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,y,g),Fa.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,y,g)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Oa.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Fa.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Na.calc(h),Oa.calc(h),Fa.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vc(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function ar(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function or(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Us=class extends Ht{constructor(e=new te,t=new te,n=new te,r=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new te){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(or(e,r.x,s.x,a.x,o.x),or(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends Ht{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(or(e,r.x,s.x,a.x,o.x),or(e,r.y,s.y,a.y,o.y),or(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ds=class extends Ht{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Ht{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends Ht{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ar(e,r.x,s.x,a.x),ar(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fi=class extends Ht{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ar(e,r.x,s.x,a.x),ar(e,r.y,s.y,a.y),ar(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Ht{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Vc(o,l.x,c.x,h.x,u.x),Vc(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new te().fromArray(r))}return this}},Fs=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:mr,CubicBezierCurve:Us,CubicBezierCurve3:Go,EllipseCurve:pr,LineCurve:Ds,LineCurve3:Ho,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Fi,SplineCurve:Os}),Vo=class extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Fs[r.type]().fromJSON(r))}return this}},fr=class extends Vo{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ds(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ns(this.currentPoint.clone(),new te(e,t),new te(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Us(this.currentPoint.clone(),new te(e,t),new te(n,r),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new pr(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bi=class i extends ot{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ft(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new te,p=new E,f=new E,y=new E,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let _=0;_<=t;_++){let v=n+_*h*r,x=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*C,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*x,U=l[3*T+1],N=l[3*T+0]*C;c.push(R,U,N)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,C=x,T=x+e.length,R=x+e.length+1,U=x+1;s.push(C,T,U),s.push(R,U,T)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},gr=class i extends Bi{constructor(e=1,t=1,n=4,r=8){let s=new fr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Bs=class i extends ot{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bn=class i extends ot{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,y=[],g=n/2,m=0;function _(v){let x=f,C=new te,T=new E,R=0,U=v===!0?e:t,N=v===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,g*N,0),d.push(0,N,0),p.push(.5,.5),f++;let B=f;for(let H=0;H<=r;H++){let z=H/r*l+o,q=Math.cos(z),G=Math.sin(z);T.x=U*G,T.y=g*N,T.z=U*q,u.push(T.x,T.y,T.z),d.push(0,N,0),C.x=.5*q+.5,C.y=.5*G*N+.5,p.push(C.x,C.y),f++}for(let H=0;H<r;H++){let z=x+H,q=B+H;v===!0?h.push(q,q+1,z):h.push(q+1,q,z),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}(function(){let v=new E,x=new E,C=0,T=(t-e)/n;for(let R=0;R<=s;R++){let U=[],N=R/s,B=N*(t-e)+e;for(let H=0;H<=r;H++){let z=H/r,q=z*l+o,G=Math.sin(q),Y=Math.cos(q);x.x=B*G,x.y=-N*n+g,x.z=B*Y,u.push(x.x,x.y,x.z),v.set(G,T,Y).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-N),U.push(f++)}y.push(U)}for(let R=0;R<r;R++)for(let U=0;U<s;U++){let N=y[U][R],B=y[U+1][R],H=y[U+1][R+1],z=y[U][R+1];e>0&&(h.push(N,B,z),C+=3),t>0&&(h.push(B,H,z),C+=3)}c.addGroup(m,C,0),m+=C})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vr=class i extends Bn{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ai=class i extends ot{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,f,y){let g=y+1,m=[];for(let _=0;_<=g;_++){m[_]=[];let v=d.clone().lerp(f,_/g),x=p.clone().lerp(f,_/g),C=g-_;for(let T=0;T<=C;T++)m[_][T]=T===0&&_===g?v:v.clone().lerp(x,T/C)}for(let _=0;_<g;_++)for(let v=0;v<2*(g-_)-1;v++){let x=Math.floor(v/2);v%2==0?(l(m[_][x+1]),l(m[_+1][x]),l(m[_][x])):(l(m[_][x+1]),l(m[_+1][x+1]),l(m[_+1][x]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,y){y<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,y=new E;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],f),c(t[g+2],y),o(p,f,y,d)})(r),(function(d){let p=new E;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new E;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let y=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-g)}var p;(function(){let f=new E,y=new E,g=new E,m=new E,_=new te,v=new te,x=new te;for(let C=0,T=0;C<s.length;C+=9,T+=6){f.set(s[C+0],s[C+1],s[C+2]),y.set(s[C+3],s[C+4],s[C+5]),g.set(s[C+6],s[C+7],s[C+8]),_.set(a[T+0],a[T+1]),v.set(a[T+2],a[T+3]),x.set(a[T+4],a[T+5]),m.copy(f).add(y).add(g).divideScalar(3);let R=u(m);h(_,T+0,f,R),h(v,T+2,y,R),h(x,T+4,g,R)}})(),(function(){for(let f=0;f<a.length;f+=6){let y=a[f+0],g=a[f+2],m=a[f+4],_=Math.max(y,g,m),v=Math.min(y,g,m);_>.9&&v<.1&&(y<.2&&(a[f+0]+=1),g<.2&&(a[f+2]+=1),m<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Wo=class i extends ai{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ts=new E,ns=new E,Ba=new E,is=new In,Xo=class extends ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ds*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:g,c:m}=is;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),is.getNormal(Ba),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,x=u[_],C=u[v],T=is[h[_]],R=is[h[v]],U=`${x}_${C}`,N=`${C}_${x}`;N in d&&d[N]?(Ba.dot(d[N].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),d[N]=null):U in d||(d[U]={index0:c[_],index1:c[v],normal:Ba.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:g}=d[f];ts.fromBufferAttribute(o,y),ns.fromBufferAttribute(o,g),p.push(ts.x,ts.y,ts.z),p.push(ns.x,ns.y,ns.z)}this.setAttribute("position",new Ae(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},zs=class extends fr{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new fr().fromJSON(r))}return this}},ip=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Wc(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,y,g,m){let _=[],v,x,C,T,R;for(v=0,x=y.length;v<x;v++)C=y[v]*m,T=v<x-1?y[v+1]*m:f.length,R=Wc(f,C,T,m,!1),R===R.next&&(R.steiner=!0),_.push(up(R));for(_.sort(lp),v=0;v<_.length;v++)g=cp(_[v],g);return g})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let f=t;f<r;f+=t)u=i[f],d=i[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return _r(s,a,t,o,l,p,0),a};function Wc(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Xc(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Xc(s,i[s],i[s+1],a);return a&&Ys(a,a.next)&&(yr(a),a=a.next),a}function oi(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Ys(n,n.next)&&tt(n.prev,n,n.next)!==0)n=n.next;else{if(yr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function _r(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=jo(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(y){let g,m,_,v,x,C,T,R,U=1;do{for(m=y,y=null,x=null,C=0;m;){for(C++,_=m,T=0,g=0;g<U&&(T++,_=_.nextZ,_);g++);for(R=U;T>0||R>0&&_;)T!==0&&(R===0||!_||m.z<=_.z)?(v=m,m=m.nextZ,T--):(v=_,_=_.nextZ,R--),x?x.nextZ=v:y=v,v.prevZ=x,x=v;m=_}x.nextZ=null,U*=2}while(C>1)})(f)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?sp(i,n,r,s):rp(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),yr(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?_r(i=ap(oi(i),e,t),e,t,n,r,s,2):a===2&&op(i,e,t,n,r,s):_r(oi(i),e,t,n,r,s,1);break}}function rp(i){let e=i.prev,t=i,n=i.next;if(tt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&wi(r,o,s,l,a,c,f.x,f.y)&&tt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function sp(i,e,t,n){let r=i.prev,s=i,a=i.next;if(tt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=jo(p,f,e,t,n),_=jo(y,g,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=m&&x&&x.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=g&&v!==r&&v!==a&&wi(o,h,l,u,c,d,v.x,v.y)&&tt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=f&&x.y<=g&&x!==r&&x!==a&&wi(o,h,l,u,c,d,x.x,x.y)&&tt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=g&&v!==r&&v!==a&&wi(o,h,l,u,c,d,v.x,v.y)&&tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=g&&x!==r&&x!==a&&wi(o,h,l,u,c,d,x.x,x.y)&&tt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ap(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Ys(r,s)&&xh(r,n,n.next,s)&&xr(r,s)&&xr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),yr(n),yr(n.next),n=i=s),n=n.next}while(n!==i);return oi(n)}function op(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dp(a,o)){let l=yh(a,o);return a=oi(a,a.next),l=oi(l,l.next),_r(a,e,t,n,r,s,0),void _r(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function lp(i,e){return i.x-e.x}function cp(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&wi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),xr(o,r)&&(f<y||f===y&&(o.x>a.x||o.x===a.x&&hp(a,o)))&&(a=o,y=f)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=yh(t,i);return oi(n,n.next),oi(t,t.next)}function hp(i,e){return tt(i.prev,i,e.prev)<0&&tt(e.next,i,i.next)<0}function jo(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function up(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function dp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&xh(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(xr(i,e)&&xr(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(tt(i.prev,i,e.prev)||tt(i,e.prev,e))||Ys(i,e)&&tt(i.prev,i,i.next)>0&&tt(e.prev,e,e.next)>0)}function tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ys(i,e){return i.x===e.x&&i.y===e.y}function xh(i,e,t,n){let r=ss(tt(i,e,t)),s=ss(tt(i,e,n)),a=ss(tt(t,n,i)),o=ss(tt(t,n,e));return r!==s&&a!==o||!(r!==0||!rs(i,t,e))||!(s!==0||!rs(i,n,e))||!(a!==0||!rs(t,i,n))||!(o!==0||!rs(t,e,n))}function rs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ss(i){return i>0?1:i<0?-1:0}function xr(i,e){return tt(i.prev,i,i.next)<0?tt(i,e,i.next)>=0&&tt(i,i.prev,e)>=0:tt(i,e,i.prev)<0||tt(i,i.next,e)<0}function yh(i,e){let t=new qo(i.i,i.x,i.y),n=new qo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Xc(i,e,t,n){let r=new qo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Dn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];jc(e),qc(n,e);let a=e.length;t.forEach(jc);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,qc(n,t[l]);let o=ip(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function jc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yo=class i extends ot{constructor(e=new zs([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:pp,v,x,C,T,R,U=!1;m&&(v=m.getSpacedPoints(h),U=!0,d=!1,x=m.computeFrenetFrames(h,!1),C=new E,T=new E,R=new E),d||(g=0,p=0,f=0,y=0);let N=o.extractPoints(c),B=N.shape,H=N.holes;if(!Dn.isClockWise(B)){B=B.reverse();for(let w=0,P=H.length;w<P;w++){let S=H[w];Dn.isClockWise(S)&&(H[w]=S.reverse())}}let z=Dn.triangulateShape(B,H),q=B;for(let w=0,P=H.length;w<P;w++){let S=H[w];B=B.concat(S)}function G(w,P,S){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(P,S)}let Y=B.length,j=z.length;function re(w,P,S){let I,L,Z,F=w.x-P.x,J=w.y-P.y,ee=S.x-w.x,K=S.y-w.y,ce=F*F+J*J,de=F*K-J*ee;if(Math.abs(de)>Number.EPSILON){let fe=Math.sqrt(ce),be=Math.sqrt(ee*ee+K*K),Ne=P.x-J/fe,Ue=P.y+F/fe,xe=((S.x-K/be-Ne)*K-(S.y+ee/be-Ue)*ee)/(F*K-J*ee);I=Ne+F*xe-w.x,L=Ue+J*xe-w.y;let ze=I*I+L*L;if(ze<=2)return new te(I,L);Z=Math.sqrt(ze/2)}else{let fe=!1;F>Number.EPSILON?ee>Number.EPSILON&&(fe=!0):F<-Number.EPSILON?ee<-Number.EPSILON&&(fe=!0):Math.sign(J)===Math.sign(K)&&(fe=!0),fe?(I=-J,L=F,Z=Math.sqrt(ce)):(I=F,L=J,Z=Math.sqrt(ce/2))}return new te(I/Z,L/Z)}let se=[];for(let w=0,P=q.length,S=P-1,I=w+1;w<P;w++,S++,I++)S===P&&(S=0),I===P&&(I=0),se[w]=re(q[w],q[S],q[I]);let le=[],_e,Q=se.concat();for(let w=0,P=H.length;w<P;w++){let S=H[w];_e=[];for(let I=0,L=S.length,Z=L-1,F=I+1;I<L;I++,Z++,F++)Z===L&&(Z=0),F===L&&(F=0),_e[I]=re(S[I],S[Z],S[F]);le.push(_e),Q=Q.concat(_e)}for(let w=0;w<g;w++){let P=w/g,S=p*Math.cos(P*Math.PI/2),I=f*Math.sin(P*Math.PI/2)+y;for(let L=0,Z=q.length;L<Z;L++){let F=G(q[L],se[L],I);he(F.x,F.y,-S)}for(let L=0,Z=H.length;L<Z;L++){let F=H[L];_e=le[L];for(let J=0,ee=F.length;J<ee;J++){let K=G(F[J],_e[J],I);he(K.x,K.y,-S)}}}let ne=f+y;for(let w=0;w<Y;w++){let P=d?G(B[w],Q[w],ne):B[w];U?(T.copy(x.normals[0]).multiplyScalar(P.x),C.copy(x.binormals[0]).multiplyScalar(P.y),R.copy(v[0]).add(T).add(C),he(R.x,R.y,R.z)):he(P.x,P.y,0)}for(let w=1;w<=h;w++)for(let P=0;P<Y;P++){let S=d?G(B[P],Q[P],ne):B[P];U?(T.copy(x.normals[w]).multiplyScalar(S.x),C.copy(x.binormals[w]).multiplyScalar(S.y),R.copy(v[w]).add(T).add(C),he(R.x,R.y,R.z)):he(S.x,S.y,u/h*w)}for(let w=g-1;w>=0;w--){let P=w/g,S=p*Math.cos(P*Math.PI/2),I=f*Math.sin(P*Math.PI/2)+y;for(let L=0,Z=q.length;L<Z;L++){let F=G(q[L],se[L],I);he(F.x,F.y,u+S)}for(let L=0,Z=H.length;L<Z;L++){let F=H[L];_e=le[L];for(let J=0,ee=F.length;J<ee;J++){let K=G(F[J],_e[J],I);U?he(K.x,K.y+v[h-1].y,v[h-1].x+S):he(K.x,K.y,u+S)}}}function me(w,P){let S=w.length;for(;--S>=0;){let I=S,L=S-1;L<0&&(L=w.length-1);for(let Z=0,F=h+2*g;Z<F;Z++){let J=Y*Z,ee=Y*(Z+1);M(P+I+J,P+L+J,P+L+ee,P+I+ee)}}}function he(w,P,S){l.push(w),l.push(P),l.push(S)}function A(w,P,S){O(w),O(P),O(S);let I=r.length/3,L=_.generateTopUV(n,r,I-3,I-2,I-1);V(L[0]),V(L[1]),V(L[2])}function M(w,P,S,I){O(w),O(P),O(I),O(P),O(S),O(I);let L=r.length/3,Z=_.generateSideWallUV(n,r,L-6,L-3,L-2,L-1);V(Z[0]),V(Z[1]),V(Z[3]),V(Z[1]),V(Z[2]),V(Z[3])}function O(w){r.push(l[3*w+0]),r.push(l[3*w+1]),r.push(l[3*w+2])}function V(w){s.push(w.x),s.push(w.y)}(function(){let w=r.length/3;if(d){let P=0,S=Y*P;for(let I=0;I<j;I++){let L=z[I];A(L[2]+S,L[1]+S,L[0]+S)}P=h+2*g,S=Y*P;for(let I=0;I<j;I++){let L=z[I];A(L[0]+S,L[1]+S,L[2]+S)}}else{for(let P=0;P<j;P++){let S=z[P];A(S[2],S[1],S[0])}for(let P=0;P<j;P++){let S=z[P];A(S[0]+Y*h,S[1]+Y*h,S[2]+Y*h)}}n.addGroup(w,r.length/3-w,0)})(),(function(){let w=r.length/3,P=0;me(q,P),P+=q.length;for(let S=0,I=H.length;S<I;S++){let L=H[S];me(L,P),P+=L.length}n.addGroup(w,r.length/3-w,1)})()}this.setAttribute("position",new Ae(r,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fs[r.type]().fromJSON(r)),new i(n,e.options)}},pp={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new te(s,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],y=e[3*s],g=e[3*s+1],m=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-u),new te(d,1-f),new te(y,1-m)]:[new te(o,1-l),new te(h,1-u),new te(p,1-f),new te(g,1-m)]}},Zo=class i extends ai{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Jo=class i extends ai{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ko=class i extends ot{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,f=new te;for(let y=0;y<=r;y++){for(let g=0;g<=n;g++){let m=s+g/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let y=0;y<r;y++){let g=y*(n+1);for(let m=0;m<n;m++){let _=m+g,v=_,x=_+n+1,C=_+n+2,T=_+1;o.push(v,x,T),o.push(x,C,T)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$o=class i extends ot{constructor(e=new zs([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Dn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){let _=f[g];Dn.isClockWise(_)===!0&&(f[g]=_.reverse())}let y=Dn.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){let _=f[g];p=p.concat(_)}for(let g=0,m=p.length;g<m;g++){let _=p[g];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=y.length;g<m;g++){let _=y[g],v=_[0]+u,x=_[1]+u,C=_[2]+u;n.push(v,x,C),l+=3}}this.setIndex(n),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Vt=class i extends ot{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],f=[],y=[],g=[];for(let m=0;m<=n;m++){let _=[],v=m/n,x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(r+T*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(T+x,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let v=h[m][_+1],x=h[m][_],C=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&p.push(v,x,T),(m!==n-1||l<Math.PI)&&p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(y,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qo=class i extends ai{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zi=class i extends ot{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let y=f/r*s,g=p/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(y),u.y=(e+t*Math.cos(g))*Math.sin(y),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let y=(r+1)*p+f-1,g=(r+1)*(p-1)+f-1,m=(r+1)*(p-1)+f,_=(r+1)*p+f;a.push(y,g,_),a.push(g,m,_)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},el=class i extends ot{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,f=new E,y=new E,g=new E,m=new E;for(let v=0;v<=n;++v){let x=v/n*s*Math.PI*2;_(x,s,a,e,p),_(x+.01,s,a,e,f),g.subVectors(f,p),m.addVectors(f,p),y.crossVectors(g,m),m.crossVectors(y,g),y.normalize(),m.normalize();for(let C=0;C<=r;++C){let T=C/r*Math.PI*2,R=-t*Math.cos(T),U=t*Math.sin(T);u.x=p.x+(R*m.x+U*y.x),u.y=p.y+(R*m.y+U*y.y),u.z=p.z+(R*m.z+U*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(C/r)}}for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){let C=(r+1)*(v-1)+(x-1),T=(r+1)*v+(x-1),R=(r+1)*v+x,U=(r+1)*(v-1)+x;o.push(C,T,U),o.push(T,R,U)}function _(v,x,C,T,R){let U=Math.cos(v),N=Math.sin(v),B=C/x*v,H=Math.cos(B);R.x=T*(2+H)*.5*U,R.y=T*(2+H)*N*.5,R.z=T*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ki=class i extends ot{constructor(e=new Fi(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new te,h=new E,u=[],d=[],p=[],f=[];function y(g){h=e.getPointAt(g/t,h);let m=a.normals[g],_=a.binormals[g];for(let v=0;v<=r;v++){let x=v/r*Math.PI*2,C=Math.sin(x),T=-Math.cos(x);l.x=T*m.x+C*_.x,l.y=T*m.y+C*_.y,l.z=T*m.z+C*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)y(g);y(s===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let m=0;m<=r;m++)c.x=g/t,c.y=m/r,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let m=1;m<=r;m++){let _=(r+1)*(g-1)+(m-1),v=(r+1)*g+(m-1),x=(r+1)*g+m,C=(r+1)*(g-1)+m;f.push(_,v,C),f.push(v,x,C)}})()})(),this.setIndex(f),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Fs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},tl=class extends ot{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let y=0;y<3;y++){let g=o.getX(p+y),m=o.getX(p+(y+1)%3);r.fromBufferAttribute(a,g),s.fromBufferAttribute(a,m),Yc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Yc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Yc(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Vm=Object.freeze({__proto__:null,BoxGeometry:Qt,CapsuleGeometry:gr,CircleGeometry:Bs,ConeGeometry:vr,CylinderGeometry:Bn,DodecahedronGeometry:Wo,EdgesGeometry:Xo,ExtrudeGeometry:Yo,IcosahedronGeometry:Zo,LatheGeometry:Bi,OctahedronGeometry:Jo,PlaneGeometry:dr,PolyhedronGeometry:ai,RingGeometry:Ko,ShapeGeometry:$o,SphereGeometry:Vt,TetrahedronGeometry:Qo,TorusGeometry:zi,TorusKnotGeometry:el,TubeGeometry:ki,WireframeGeometry:tl});var ks=class extends On{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mr=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function as(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nl=class extends Gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ql:s=e,o=2*t-n;break;case ec:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:a=e,l=2*n-t;break;case ec:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),y=f*f,g=y*f,m=-d*g+2*d*y-d*f,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*f+1,v=(-1-p)*g+(1.5+p)*y+.5*f,x=p*g-p*y;for(let C=0;C!==o;++C)s[C]=m*a[h+C]+_*a[c+C]+v*a[l+C]+x*a[u+C];return s}},il=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},rl=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$t=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&mp(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===aa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};$t.prototype.TimeBufferType=Float32Array,$t.prototype.ValueBufferType=Float32Array,$t.prototype.DefaultInterpolation=Mo;var ii=class extends $t{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="bool",ii.prototype.ValueBufferType=Array,ii.prototype.DefaultInterpolation=ms,ii.prototype.InterpolantFactoryMethodLinear=void 0,ii.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends $t{};sl.prototype.ValueTypeName="color";var al=class extends $t{};al.prototype.ValueTypeName="number";var ol=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)on.slerpFlat(s,0,a,c-o,a,c,l);return s}},Gs=class extends $t{InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion",Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends $t{constructor(e,t,n){super(e,t,n)}};ri.prototype.ValueTypeName="string",ri.prototype.ValueBufferType=Array,ri.prototype.DefaultInterpolation=ms,ri.prototype.InterpolantFactoryMethodLinear=void 0,ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends $t{};ll.prototype.ValueTypeName="vector";var cl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},fp=new cl,hl=class{constructor(e){this.manager=e!==void 0?e:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var za=new we,Zc=new E,Jc=new E,Hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Kc=new we,rr=new E,ka=new E,ul=class extends Hs{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),r.makeTranslation(-rr.x,-rr.y,-rr.z),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc)}},li=class extends Sr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ul}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dl=class extends Hs{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new dl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ws=class extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wm=new we,Xm=new we,jm=new we;var qm=new E,Ym=new on,Zm=new E,Jm=new E;var Km=new E,$m=new on,Qm=new E,ef=new E;var El="\\[\\]\\.:\\/",gp=new RegExp("["+El+"]","g"),Ga="[^"+El+"]",vp="[^"+El.replace("\\.","")+"]",_p=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ga)+/(WCOD+)?/.source.replace("WCOD",vp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga)+"$"),xp=["material","materials","bones","map"],Ke=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(e){let t=_p.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);xp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=class{constructor(i,e,t){let n=t||Ke.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray],Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tf=new Float32Array(1);var nf=new we;var rf=new te;var sf=new E,af=new E;var of=new E;var lf=new E,cf=new we,hf=new we;var uf=new E,df=new Re,pf=new Re;var mf=new E,ff=new E,gf=new E;var vf=new E,_f=new ur;var xf=new ln;var yf=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var yp=(()=>{let i=new Uint8Array([60,60,60,255,140,140,140,255,215,215,215,255,255,255,255,255]),e=new Is(i,4,1,Dt);return e.minFilter=e.magFilter=wt,e.needsUpdate=!0,e})(),De=Math.PI;function dn(){let i=[],e={},t=new Fn({color:459531,side:pt,transparent:!0});i.push(t),t.userData.outline=1;let n=(a,o={})=>{let l=[a,o.e||0,o.side||0,o.flat?1:0].join("_");if(e[l])return e[l];let c=new ks({color:a,gradientMap:yp,emissive:o.e||0,transparent:!0,side:o.side||an});return c.userData.e0=new Re(o.e||0),i.push(c),e[l]=c};return{mats:i,M:n,P:(a,o,l,c=[0,0,0],h={})=>{let u=new st(o,l.isMaterial?l:n(l,h));if(u.position.set(...c),h.rot&&u.rotation.set(...h.rot),h.sc&&u.scale.set(...h.sc),a.add(u),h.line!==!1){let d=new st(o,t);d.scale.setScalar(h.line||1.08),u.add(d)}return u},G:(a,o=[0,0,0])=>{let l=new nt;return l.position.set(...o),a.add(l),l},OUT:t}}var yt=(i,e=14,t=10)=>new Vt(i,e,t),Sh=(i,e,t=8)=>new gr(i,Math.max(.001,e),3,t),Be=(i,e,t)=>new Qt(i,e,t),Mt=(i,e,t,n=10)=>new Bn(i,e,t,n),Wt=(i,e,t=6)=>new vr(i,e,t),At=(i,e=14,t=0,n=De*2)=>new Bi(i.map(([r,s])=>new te(r,s)),e,t,n);function Le(i,e,t,n,r,s,a={}){let o=i.G(e,t);i.P(o,Sh(r,n*.5-r),s,[0,-n*.25,0],{line:1.12});let l=i.G(o,[0,-n*.5,0]);i.P(l,Sh(r*.9,n*.5-r),a.lowCol??s,[0,-n*.25,0],{line:1.12}),a.rings&&a.rings.forEach(h=>i.P(l,Mt(r*.98,r*.98,.014,10),16752704,[0,-n*h,0],{e:16747040,line:!1}));let c=i.G(l,[0,-n*.5,0]);return a.foot&&i.P(c,Be(r*2.1,.055,r*3.4),a.footCol??854800,[0,-.005,r*.7],{line:1.1}),a.hand&&i.P(c,yt(r*1.05,8,6),a.handCol??14723464,[0,-r*.2,0],{line:1.12}),{g:o,lo:l,end:c}}function kn(i,e,{r:t=.075,skin:n=15117964,iris:r=3807248,brow:s=1445914,stern:a=.25,eyeGlow:o=null,mouth:l=9060408}={}){i.P(e,yt(t,16,12),n,[0,0,0],{sc:[.94,1.08,1],line:1.05});let c=[];return[-1,1].forEach(h=>{let u=i.G(e,[h*t*.38,t*.04,t*.86]);i.P(u,yt(t*.2,10,8),16777215,[0,0,0],{sc:[1,.78,.4],line:!1});let d=o&&h==1;i.P(u,yt(t*.12,8,6),d?o:r,[0,-t*.01,t*.06],{sc:[1,1,.5],line:!1,e:d?o:0}),i.P(u,yt(t*.04,6,4),16777215,[t*.04,t*.04,t*.11],{line:!1,e:10066329}),c.push(u),i.P(e,Be(t*.42,t*.075,t*.08),s,[h*t*.4,t*.3,t*.88],{rot:[0,0,-h*a],line:!1}),i.P(e,yt(t*.2,8,6),n,[h*t*.93,0,0],{sc:[.5,1,.8],line:1.1})}),i.P(e,Wt(t*.1,t*.25,5),n,[0,-t*.18,t*1],{rot:[De/2+.3,0,0],line:!1}),i.P(e,Be(t*.38,t*.045,t*.05),l,[0,-t*.48,t*.88],{line:!1}),c}function Er({sword:i="back",alba:e=!0}={}){let t=dn(),n=new nt,r=t.G(n),s=2366761,a=8000548,o=1841442,l=Le(t,r,[-.055,.5,0],.48,.036,o,{foot:1}),c=Le(t,r,[.055,.5,0],.48,.036,o,{foot:1});t.P(r,Mt(.1,.095,.07,12),o,[0,.5,0],{sc:[1,1,.68]});let h=t.G(r,[0,.52,0]);t.P(h,At([[.001,-.02],[.085,-.02],[.098,.08],[.115,.2],[.118,.25],[.07,.31],[.001,.32]],12),8001576,[0,0,0],{sc:[1,1,.66],line:1.04}),t.P(h,Mt(.1,.1,.03,12),854800,[0,.005,0],{sc:[1,1,.68],line:!1}),t.P(h,Be(.04,.028,.01),14725192,[0,.005,.07],{e:3810816,line:!1});let u=new st(new zi(.04,.003,4,10,De),t.M(14725192,{e:3153920}));u.position.set(.03,.12,.073),u.rotation.set(0,0,De+.3),h.add(u);let d=t.G(h,[0,0,0]),p=[[.125,.28],[.122,.2],[.108,.06],[.122,-.08],[.155,-.22],[.19,-.34]];t.P(d,At(p,16,.55,De*2-1.1),s,[0,0,0],{sc:[1,1,.78],line:1.03}),t.P(d,At(p,16,.55,De*2-1.1),t.M(a,{side:pt}),[0,0,0],{sc:[.985,1,.765],line:!1}),[-1,1].forEach(U=>{t.P(h,Be(.045,.26,.012),3221050,[U*.07,.15,.075],{rot:[-.12,0,U*.14],line:1.1}),t.P(h,yt(.062,10,8),s,[U*.13,.265,0],{sc:[1.1,.8,1],line:1.06})}),t.P(h,At([[.075,.28],[.088,.36],[.095,.4]],14,.9,De*2-1.8),s,[0,0,-.005],{sc:[1,1,.85],line:1.04}),t.P(h,Mt(.032,.034,.06,10),14723464,[0,.33,0],{line:!1});function f(U,N){let B=U.G(N,[.16,.27,0]);U.P(B,yt(.055,12,8),3813928,[0,.02,0],{e:4861968,line:1.04}),U.P(B,Mt(.028,.034,.05,8),1709068,[0,-.02,0],{line:!1}),U.P(B,Be(.07,.05,.05),14140578,[0,-.07,0],{e:9072704,line:1.03});let H=U.G(B,[0,-.12,0]);U.P(H,Be(.062,.15,.046),15982772,[0,-.08,0],{e:16773316,line:1.02}),U.P(H,Be(.07,.018,.052),16775396,[0,-.02,.002],{e:16777215,line:!1}),U.P(H,Be(.07,.018,.052),16775396,[0,-.09,.002],{e:16777215,line:!1}),U.P(H,Mt(.01,.01,.16,6),16757850,[.038,-.08,0],{e:16751152,line:!1});let z=U.G(H,[0,-.17,0]);U.P(z,Be(.078,.04,.034),16774879,[0,-.015,.012],{e:16774092,line:!1}),[-.024,0,.024].forEach(Y=>U.P(z,Be(.014,.05,.014),16177060,[Y,-.05,.02],{e:16769192,line:!1}));let q=U.P(z,Be(.05,.012,.028),16776424,[0,-.03,.03],{e:16777215,line:!1}),G=new li(16769186,1.15,2.4,2);return G.position.set(0,-.03,.05),z.add(G),{g:B,lo:H,end:z,light:G,palmo:q}}let y=e?f(t,h):Le(t,h,[.16,.27,0],.38,.034,s,{hand:1}),g=Le(t,h,[-.15,.27,0],.38,.034,s,{hand:1}),m=t.G(h,[0,.44,0]);m.scale.setScalar(1.12);let _=kn(t,m,{iris:5904916,stern:.32}),v=1512220;t.P(m,new Vt(.084,14,10,0,De*2,0,De*.5),v,[0,.022,-.012],{rot:[-.45,0,0],sc:[1,1,1.04],line:1.05}),[[-.06,.06,-.02,.7,0],[-.025,.085,0,.25,0],[.02,.088,0,-.2,0],[.06,.06,-.01,-.7,0],[0,.06,-.07,0,-.6],[-.045,.03,-.07,.4,-.8],[.045,.03,-.07,-.4,-.8]].forEach(([U,N,B,H,z])=>t.P(m,Wt(.03,.09,5),v,[U,N,B],{rot:[z-.25,0,H],line:1.08})),[[-.045,.07,.055,.6],[-.012,.078,.064,.2],[.025,.076,.06,-.3]].forEach(([U,N,B,H])=>t.P(m,Wt(.02,.06,4),v,[U,N,B],{rot:[De-.9,0,H],line:1.1})),t.P(m,Wt(.022,.085,4),14686770,[.05,.065,.045],{rot:[-.5,0,-.6],e:6291472,line:1.1});let x=new nt,C=new gt,T=new gt;t.P(x,Be(.022,.6,.007),3149850,[0,.38,0],{e:5899796,line:1.05}),t.P(x,Be(.005,.6,.009),16728160,[.011,.38,0],{e:16717880,line:!1}),t.P(x,Mt(.03,.03,.012,10),10491944,[0,.075,0],{rot:[0,0,0],line:!1}),t.P(x,Mt(.012,.012,.14,6),722956,[0,0,0]),C.position.y=.68,T.position.y=.1,x.add(C,T);let R=U=>{U=="hand"?(x.scale.setScalar(1),g.end.add(x),x.position.set(0,-.02,.01),x.rotation.set(De/2,0,0)):(h.add(x),x.position.set(.1,.33,-.1),x.rotation.set(0,0,2.5),x.scale.setScalar(.85))};return R(i),n.userData={K:t,body:r,torso:h,head:m,L:l,R:c,armL:y,armR:g,coat:d,sword:x,tip:C,swBase:T,eyes:_,putSword:R,h:1,alba:e?y.light:null},n}function bh(){let i=dn(),e=new nt,t=i.G(e),n=1844530,r=2901080,s=2783882,a=Le(i,t,[-.045,.47,0],.45,.03,n,{foot:1,footCol:1053722}),o=Le(i,t,[.045,.47,0],.45,.03,n,{foot:1,footCol:1053722});i.P(t,Mt(.085,.08,.07,12),n,[0,.47,0],{sc:[1,1,.7]}),i.P(t,Be(.035,.05,.03),3811872,[.085,.44,.02],{line:1.1});let l=i.G(t,[0,.49,0]);i.P(l,At([[.001,-.02],[.075,-.02],[.08,.08],[.098,.19],[.1,.24],[.06,.3],[.001,.3]],12),n,[0,0,0],{sc:[1,1,.68],line:1.04}),i.P(l,Be(.012,.2,.004),4251903,[.035,.14,.07],{e:41152,line:!1,rot:[0,0,.2]});let c=i.G(l,[0,0,0]),h=[[.11,.27],[.105,.15],[.1,.04],[.12,-.06],[.14,-.14]];i.P(c,At(h,14,.9,De*2-1.8),r,[0,0,-.005],{sc:[1,1,.8],line:1.03}),i.P(c,At(h,14,.9,De*2-1.8),i.M(1454138,{side:pt}),[0,0,-.005],{sc:[.98,1,.78],line:!1}),i.P(l,new zi(.06,.028,6,12),s,[0,.3,0],{rot:[De/2,0,0],sc:[1,.85,1],line:1.06}),i.P(l,Be(.05,.16,.02),s,[-.04,.2,-.07],{rot:[.3,0,.2],line:1.08});let u=Le(i,l,[.125,.25,0],.34,.028,r,{hand:1,lowCol:n}),d=Le(i,l,[-.125,.25,0],.34,.028,r,{hand:1,lowCol:n}),p=new nt;i.P(p,Wt(.012,.09,4),11589864,[0,.06,0],{e:2121840,line:!1}),i.P(p,Mt(.007,.007,.05,5),1118481,[0,0,0],{line:!1}),d.end.add(p),p.rotation.x=De/2,p.position.z=.01;let f=i.G(l,[0,.41,0]);f.scale.setScalar(1.1);let y=kn(i,f,{r:.07,skin:14198412,iris:1714736,stern:.12,eyeGlow:3207423,mouth:9062984});return i.P(f,new Vt(.076,14,10,0,De*2,0,De*.5),1320494,[0,.012,-.006],{rot:[-.5,0,0],line:1.05}),[[-.04,.045,.062,.4],[0,.05,.07,.05],[.035,.045,.064,-.35]].forEach(([g,m,_,v])=>i.P(f,Wt(.02,.06,4),1320494,[g,m,_],{rot:[De-.6,0,v],line:1.1})),i.P(f,new Vt(.098,14,10,De/2+De*.3,De*2-De*.6,0,De*.8),r,[0,0,-.005],{line:1.04,side:pl}),i.P(f,Wt(.05,.1,8),r,[0,.09,-.04],{rot:[-.6,0,0],line:1.06}),e.userData={K:i,body:t,torso:l,head:f,L:a,R:o,armL:u,armR:d,coat:c,kunai:p,eyes:y,h:.93},e}function Tl(){let i=dn(),e=new nt,t=i.G(e),n=7236214,r=4401242,s=2301994,a=5591644,o=Le(i,t,[-.07,.44,0],.42,.04,s,{foot:1,footCol:1315350}),l=Le(i,t,[.07,.44,0],.42,.04,s,{foot:1,footCol:1315350});o.g.rotation.x=-.25,o.lo.rotation.x=.45,l.g.rotation.x=.1,l.lo.rotation.x=.3;let c=i.G(t,[0,.45,0]);c.rotation.x=.38,i.P(c,At([[.001,-.03],[.105,-.03],[.12,.08],[.14,.2],[.13,.27],[.07,.32],[.001,.33]],12),r,[0,0,0],{sc:[1,1,.8],line:1.04}),[[.05,.1,.1],[-.06,.18,.1],[0,.05,-.11]].forEach(([m,_,v])=>i.P(c,Be(.04,.04,.01),6987840,[m,_,v],{rot:[0,0,.4],e:2109456,line:!1})),i.P(c,yt(.07,10,8),a,[-.13,.27,0],{sc:[1.2,.8,1.1],line:1.06,flat:!0}),[0,1,2].forEach(m=>i.P(c,Wt(.016,.06,5),10526890,[-.15+m*.02,.32,-.02+m*.02],{rot:[0,0,.5-m*.3],line:!1})),i.P(c,new Vt(.1,12,8,0,De*2,0,De*.5),r,[0,.29,-.05],{rot:[-.9,0,0],line:1.04,side:pl});let h=Le(i,c,[.15,.25,0],.38,.038,r,{hand:1,handCol:2762800,lowCol:2762800}),u=Le(i,c,[-.15,.25,0],.38,.038,r,{hand:1,handCol:2762800});h.g.rotation.set(-.5,0,.25),h.lo.rotation.x=-.9,u.g.rotation.set(-.3,0,-.2),u.lo.rotation.x=-.8;let d=new nt;i.P(d,Mt(.022,.028,.5,8),8011298,[0,.2,0],{line:1.08}),[.1,.25,.38].forEach(m=>i.P(d,Mt(.03,.03,.02,8),4208174,[0,m,0],{line:!1})),h.end.add(d),d.rotation.x=De/2+.3;let p=i.G(c,[0,.36,.05]);p.rotation.x=-.3,i.P(p,yt(.085,14,10),n,[0,0,0],{sc:[.95,.9,1.05],line:1.05}),i.P(p,Wt(.06,.15,10),n,[0,-.02,.1],{rot:[De/2,0,0],line:1.06}),i.P(p,yt(.018,8,6),13660288,[0,-.02,.18],{line:!1});let f=[];[-1,1].forEach(m=>{let _=i.G(p,[m*.04,.025,.065]);i.P(_,yt(.016,8,6),16769088,[0,0,0],{e:11571200,sc:[1,.7,.6],line:!1}),i.P(_,yt(.007,6,4),0,[0,0,.009],{line:!1}),f.push(_),i.P(p,Be(.04,.008,.01),1118481,[m*.04,.05,.07],{rot:[0,0,m*.45],line:!1});let v=i.G(p,[m*.065,.07,-.01]);i.P(v,yt(.045,10,8),n,[0,.02,0],{sc:[1,1,.3],line:1.08}),i.P(v,yt(.03,8,6),12614280,[0,.02,.012],{sc:[1,1,.2],line:!1}),v.rotation.z=-m*.4,i.P(p,Wt(.007,.025,4),15790304,[m*.015,-.06,.15],{rot:[De,0,0],line:!1})}),i.P(p,Mt(.012,.012,.02,6),11579576,[.07,0,.02],{rot:[0,0,De/2],line:!1});let y=[[0,.42,-.08],[0,.3,-.25],[.05,.12,-.38],[.15,.05,-.5],[.25,.12,-.58]].map(m=>new E(...m)),g=i.P(t,new ki(new mr(y),16,.014,5),9076880,[0,0,0],{line:1.15});return e.userData={K:i,body:t,torso:c,head:p,L:o,R:l,armL:h,armR:u,club:d,tail:g,eyes:f,h:1},e}function Eh(){let i=dn(),e=new nt,t=i.G(e),n=3805744,r=16732058,s=1708064,a=Le(i,t,[-.048,.48,0],.46,.03,s,{foot:1,footCol:1181712}),o=Le(i,t,[.048,.48,0],.46,.03,s,{foot:1,footCol:1181712});i.P(t,Mt(.082,.078,.06,12),s,[0,.48,0],{sc:[1,1,.7]});let l=i.G(t,[0,.5,0]);i.P(l,At([[.001,-.02],[.07,-.02],[.078,.1],[.09,.2],[.055,.28],[.001,.29]],12),2755618,[0,0,0],{sc:[1,1,.66],line:1.04}),i.P(l,Be(.16,.22,.04),n,[0,.12,-.02],{line:1.04}),i.P(l,Be(.02,.18,.012),r,[.055,.12,.03],{e:1672e4,line:!1});let c=Le(i,l,[.13,.24,0],.34,.026,n,{hand:1}),h=Le(i,l,[-.13,.24,0],.34,.026,n,{hand:1}),u=i.G(h.end,[0,-.02,.02]),d=new Fi(new E(0,0,0),new E(.15,.05,.2),new E(.28,-.15,.05));i.P(u,new ki(d,12,.012,6),r,[0,0,0],{e:16724104,line:!1});let p=i.G(l,[0,.38,0]);p.scale.setScalar(1.08);let f=kn(i,p,{r:.07,skin:15775898,iris:16732064,stern:.05,eyeGlow:16732064,mouth:11028584}),y=1312784;return i.P(p,new Vt(.08,14,10,0,De*2,0,De*.55),y,[0,.02,-.01],{rot:[-.35,0,0],line:1.05}),[[-.05,.02,-.04],[.05,.02,-.04]].forEach(([g,m,_],v)=>i.P(p,Be(.03,.16,.03),y,[g,m,_],{rot:[.2,0,v?-.3:.3],line:1.06})),i.P(p,Wt(.018,.1,4),r,[.04,.07,.04],{rot:[-.4,0,-.5],e:8396880,line:!1}),e.userData={K:i,body:t,torso:l,head:p,L:a,R:o,armL:c,armR:h,eyes:f,whip:u,h:.95},e}function Th(){let i=dn(),e=new nt,t=i.G(e),n=1056808,r=4055295,s=Le(i,t,[-.05,.5,0],.5,.032,791576,{foot:1,footCol:527376}),a=Le(i,t,[.05,.5,0],.5,.032,791576,{foot:1,footCol:527376});i.P(t,Mt(.09,.085,.06,12),791576,[0,.5,0],{sc:[1,1,.68]});let o=i.G(t,[0,.52,0]);i.P(o,At([[.001,-.02],[.08,-.02],[.09,.12],[.1,.24],[.06,.32],[.001,.33]],12),n,[0,0,0],{sc:[1,1,.64],line:1.04}),i.P(o,Be(.2,.42,.05),n,[0,.08,-.03],{line:1.03}),i.P(o,Be(.012,.28,.012),r,[0,.1,.02],{e:49376,line:!1});let l=Le(i,o,[.14,.26,0],.36,.028,n,{hand:1,handCol:13146240}),c=Le(i,o,[-.14,.26,0],.36,.028,n,{hand:1,handCol:13146240}),h=i.G(o,[.08,.2,-.08]);i.P(h,Be(.03,.62,.03),1709080,[0,.1,0],{line:1.04}),i.P(h,Be(.012,.5,.012),16719936,[.02,.15,0],{e:16715816,line:!1}),i.P(h,Wt(.02,.12,5),13688296,[0,.48,0],{e:4218992,line:!1});let u=i.G(o,[0,.42,0]);u.scale.setScalar(1.05);let d=kn(i,u,{r:.068,skin:14203044,iris:1323072,stern:.4,eyeGlow:4255999,mouth:7356488});return i.P(u,new Vt(.072,12,8,0,De*2,0,De*.48),790548,[0,.03,0],{line:1.05}),i.P(u,Be(.09,.02,.04),790548,[0,.055,.04],{line:!1}),e.userData={K:i,body:t,torso:o,head:u,L:s,R:a,armL:l,armR:c,eyes:d,rifle:h,h:1.02},e}function wh(){let i=dn(),e=new nt,t=i.G(e),n=Le(i,t,[-.05,.48,0],.46,.032,1711138,{foot:1}),r=Le(i,t,[.05,.48,0],.46,.032,1711138,{foot:1}),s=i.G(t,[0,.5,0]);i.P(s,At([[.001,-.02],[.1,-.02],[.11,.16],[.1,.28],[.05,.34],[.001,.35]],12),15922422,[0,0,0],{sc:[1,1,.7],line:1.04}),i.P(s,Be(.16,.08,.02),12728906,[0,.12,.07],{line:!1});let a=Le(i,s,[.14,.26,0],.34,.03,15922422,{hand:1}),o=Le(i,s,[-.14,.26,0],.34,.03,15922422,{hand:1}),l=i.G(s,[0,.4,0]),c=kn(i,l,{r:.072,skin:13148296,iris:2109504,stern:.1,mouth:6307904});return i.P(l,Be(.09,.035,.02),14212838,[0,.04,.07],{line:!1}),i.P(l,yt(.02,8,6),4251776,[.05,.02,.08],{e:2146400,line:!1}),e.userData={K:i,body:t,torso:s,head:l,L:n,R:r,armL:a,armR:o,eyes:c,h:.96},e}function Ah(){let i=dn(),e=new nt,t=i.G(e),n=Le(i,t,[-.07,.55,0],.55,.04,1050636,{foot:1,footCol:525318}),r=Le(i,t,[.07,.55,0],.55,.04,1050636,{foot:1,footCol:525318}),s=i.G(t,[0,.58,0]);i.P(s,At([[.001,-.02],[.12,-.02],[.13,.18],[.14,.32],[.08,.42],[.001,.43]],10),1312780,[0,0,0],{sc:[1,1,.7],line:1.03}),i.P(s,Be(.02,.36,.012),16719920,[0,.16,.08],{e:16715808,line:!1});let a=Le(i,s,[.16,.3,0],.42,.036,1050636,{hand:1,handCol:2101268}),o=Le(i,s,[-.16,.3,0],.42,.036,1050636,{hand:1,handCol:2101268}),l=i.G(o.end);i.P(l,Be(.012,.42,.04),12634320,[0,.16,0],{e:8425632,line:!1});let c=i.G(s,[0,.48,0]);i.P(c,Be(.12,.14,.1),656904,[0,0,0],{line:1.04});let h=[];return[-1,1].forEach(u=>{let d=i.P(c,Be(.035,.012,.01),16719920,[u*.03,.02,.055],{e:16715808,line:!1});h.push(d)}),e.userData={K:i,body:t,torso:s,head:c,L:n,R:r,armL:a,armR:o,eyes:h,lama:l,h:1.2},e}function wl(){let i=dn(),e=new nt,t=i.G(e),n=Le(i,t,[-.09,.5,0],.48,.05,2757644,{foot:1,footCol:1050628}),r=Le(i,t,[.09,.5,0],.48,.05,2757644,{foot:1,footCol:1050628}),s=i.G(t,[0,.52,0]);i.P(s,At([[.001,-.04],[.16,-.04],[.18,.12],[.17,.28],[.1,.36],[.001,.37]],12),6953008,[0,0,0],{sc:[1.15,1,.8],line:1.03}),i.P(s,Be(.22,.1,.04),14725192,[0,.2,.1],{e:8413216,line:!1});let a=Le(i,s,[.2,.26,0],.36,.045,4853792,{hand:1,handCol:12619888}),o=Le(i,s,[-.2,.26,0],.36,.045,4853792,{hand:1,handCol:12619888}),l=i.G(s,[0,.42,0]);l.scale.setScalar(1.15);let c=kn(i,l,{r:.08,skin:13146232,iris:4200464,stern:.55,mouth:6299680});for(let h=0;h<5;h++)i.P(l,Mt(.012,.02,.16,5),11569728,[Math.cos(h/5*De*2)*.09,.1,Math.sin(h/5*De*2)*.09],{e:8413232,line:!1});return e.userData={K:i,body:t,torso:s,head:l,L:n,R:r,armL:a,armR:o,eyes:c,h:1.15},e}function Rh(){let i=dn(),e=new nt,t=i.G(e),n=Le(i,t,[-.1,.52,0],.5,.055,3811876,{foot:1}),r=Le(i,t,[.1,.52,0],.5,.055,3811876,{foot:1}),s=i.G(t,[0,.54,0]);i.P(s,Be(.34,.4,.2),9060400,[0,.12,0],{line:1.03});let a=Le(i,s,[.22,.28,0],.38,.05,6960168,{hand:1}),o=Le(i,s,[-.22,.28,0],.38,.05,6960168,{hand:1}),l=i.G(s,[0,.42,0]),c=kn(i,l,{r:.09,skin:13674632,iris:3153936,stern:.2,mouth:7356480});return i.P(l,Be(.16,.04,.08),3810332,[0,.08,0],{line:1.05}),e.userData={K:i,body:t,torso:s,head:l,L:n,R:r,armL:a,armR:o,eyes:c,h:1.2},e}function Wi(i=2371652,e=14725264){let t=dn(),n=new nt,r=t.G(n),s=Le(t,r,[-.05,.48,0],.46,.03,i,{foot:1}),a=Le(t,r,[.05,.48,0],.46,.03,i,{foot:1}),o=t.G(r,[0,.5,0]);t.P(o,At([[.001,-.02],[.09,-.02],[.1,.14],[.08,.26],[.04,.32],[.001,.33]],10),i,[0,0,0],{sc:[1,1,.7],line:1.04});let l=Le(t,o,[.13,.24,0],.32,.028,i,{hand:1}),c=Le(t,o,[-.13,.24,0],.32,.028,i,{hand:1}),h=t.G(o,[0,.38,0]),u=kn(t,h,{r:.07,skin:e,iris:3154968,stern:.15});return t.P(h,new Vt(.075,12,8,0,De*2,0,De*.5),1708556,[0,.02,0],{line:1.05}),n.userData={K:t,body:r,torso:o,head:h,L:s,R:a,armL:l,armR:c,eyes:u,h:.94},n}function Al(i,e,t="idle"){let n=i.userData;if(!n||!n.L||n.freeze)return;let r=t==="walk",s=t==="talk",a=t==="fight",o=r?7.2:a?8.5:1.6,l=Math.sin(e*o),c=Math.cos(e*o);n.body.position.y=r?Math.abs(l)*.04:Math.sin(e*1.5)*.012,n.torso.rotation.x=(r?.08:0)+(s?Math.sin(e*6)*.04:0),n.torso.rotation.y=s?Math.sin(e*2.1)*.14:Math.sin(e*.7)*.04,n.head&&(n.head.rotation.x=s?Math.sin(e*7)*.09:Math.sin(e*1.2)*.025,n.head.rotation.y=s?Math.sin(e*1.6)*.16:0);let h=r?l*.72:a?l*.12:Math.sin(e*1.1)*.035;n.L.g.rotation.x=h,n.R.g.rotation.x=-h,n.L.lo.rotation.x=r?Math.max(0,-c)*.85:.12,n.R.lo.rotation.x=r?Math.max(0,c)*.85:.12,n.armL&&n.armR&&(a?(n.armR.g.rotation.x=-.35+l*1.15,n.armR.lo.rotation.x=-.45,n.armL.g.rotation.x=-.25-l*.45,n.armL.lo.rotation.x=-.3):(n.armL.g.rotation.x=r?-l*.55:-.1+Math.sin(e*1.3)*.05,n.armR.g.rotation.x=r?l*.55:-.1+Math.sin(e*1.3+1)*.05,n.armL.lo.rotation.x=n.armR.lo.rotation.x=r?-.28:-.18)),n.alba&&(n.alba.intensity=1.05+Math.sin(e*3)*.3),n.whip&&(n.whip.rotation.z=Math.sin(e*(a?12:2))*(a?.7:.06)),n.rotors&&n.rotors.forEach((u,d)=>u.rotation.y+=.4*(d%2?1:-1))}var Pl="punkcity-cap1-v1",pe=i=>document.getElementById(i),Qs={ras:i=>Er(i||{sword:"back"}),rasIntero:()=>Er({sword:"hand",alba:!1}),rasFerito:()=>{let i=Er({sword:"back",alba:!1});return i.userData.armL.g.visible=!1,i},kiri:()=>bh(),lyra:()=>Eh(),sable:()=>Th(),medico:()=>wh(),zero:()=>Ah(),gorm:()=>wl(),brick:()=>Rh(),ratto:()=>Tl(),aram:()=>Wi(1713988,13148288),nadia:()=>Wi(4857920,15777960),guardia:()=>Wi(5904424,13146232),nila:()=>Wi(2113592,14725264),spina:()=>Wi(3154968,13674632)},qi={infermeria:{nome:"Infermeria clandestina",w:7,d:6,pav:3811892,neon:6222032,spawn:[0,1.6],gente:[["kiri",-1.3,-1.1,.5],["medico",1.4,-1.3,-.4]],porte:[[3.1,0,"mercato","Mercato"]]},mercato:{nome:"Mercato delle Fogne",w:10,d:8,pav:4862008,neon:16732058,spawn:[-3,1.5],gente:[["nila",-1.5,-2.2,.6],["spina",1.2,-1.4,-.8],["lyra",2.4,.4,2.4]],porte:[[-4.4,0,"infermeria","Infermeria"],[0,-3.4,"passerella","Passerella"]]},passerella:{nome:"Passerella",w:6,d:12,pav:2765120,neon:8319231,spawn:[0,4.2],gente:[["sable",1.6,-2.2,-1.2]],porte:[[0,5.2,"mercato","Mercato"],[0,-5.2,"deposito","Deposito"]],trappola:{z:0,id:"ratti"}},deposito:{nome:"Deposito di Re Gorm",w:8,d:8,pav:1840144,neon:16765562,spawn:[0,2.6],gente:[],casse:[0,-1.2],porte:[[0,3.4,"passerella","Passerella"],[3.4,0,"sala","Sala del re","casse"]]},sala:{nome:"Sala di Re Gorm",w:8,d:8,pav:2756632,neon:16719936,spawn:[0,2.4],gente:[],boss:!0,porte:[[0,3.4,"deposito","Deposito"],[0,-3.2,"rust","Rust Alley","fine"]]},rust:{nome:"Soglia di Rust Alley",w:7,d:7,pav:2759698,neon:16746564,spawn:[0,2],gente:[["brick",0,-1.4,.2]],porte:[[0,3,"sala","Indietro"]]}},ae=null,St="titolo",Zs=0,Pt,Xe,En,Vn,Hn,wr,Ft=[],Ll=[],Ar=null,ji={on:!1,x:0,y:0},Ot=null,Et=null,He=null,Ct=null,Xi=!1;function Mp(){return{v:1,prologo:!1,stanza:"infermeria",x:0,z:1.6,soldi:15,oggetti:{medikit:1,stim:0},party:[{id:"ras",xp:0,hp:96,mp:22},{id:"kiri",xp:0,hp:84,mp:28}],flag:{},sceltaGorm:null}}function Bt(){ae&&(Xe&&St==="gioco"&&(ae.x=Xe.position.x,ae.z=Xe.position.z),localStorage.setItem(Pl,JSON.stringify(ae)))}function Il(){try{return JSON.parse(localStorage.getItem(Pl)||"null")}catch{return null}}function Rl(i){return 1+Math.floor(i/50)}function en(i){let e=Rl(i.xp),t=i.id==="ras"?{hp:96,atk:14,mp:22,spd:11,nome:"Ras"}:{hp:84,atk:11,mp:28,spd:13,nome:"Kiri"};return{...i,...t,lv:e,hpMax:t.hp+(e-1)*16,atk:t.atk+(e-1)*2,mpMax:t.mp+(e-1)*3}}function Sp(){return en(ae.party[0])}function Ul(){if(Xi||Ct)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Ct=new i;let e=Ct.createGain();e.gain.value=.045,e.connect(Ct.destination);let t=Ct.createOscillator();t.type="sawtooth",t.frequency.value=55;let n=Ct.createBiquadFilter();n.type="lowpass",n.frequency.value=220,t.connect(n),n.connect(e),t.start();let r=Ct.createOscillator();r.type="triangle",r.frequency.value=220;let s=Ct.createGain();s.gain.value=.02,r.connect(s),s.connect(e),r.start(),setInterval(()=>{!Ct||Xi||r.frequency.setValueAtTime([196,220,247,175][Math.floor(Zs)%4],Ct.currentTime)},1400)}function bp(){let i=pe("c");Vn=new Cs({canvas:i,antialias:!0,powerPreference:"high-performance"}),Vn.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),Vn.setSize(innerWidth,innerHeight),Vn.setClearColor(459528),Hn=new Ls,Hn.fog=new Ps(1312784,8,22),En=new xt(48,innerWidth/innerHeight,.1,40),Hn.add(new Ws(12036292,1.15));let e=new Vs(16773364,1.25);e.position.set(2,6,3),Hn.add(e),wr=new li(16769186,0,4),Hn.add(wr),Pt=new nt,Hn.add(Pt),addEventListener("resize",()=>{En.aspect=innerWidth/innerHeight,En.updateProjectionMatrix(),Vn.setSize(innerWidth,innerHeight)})}function Gn(i,e,t,n,r,s,a){let o=new st(new Qt(i,e,t),new Mr({color:n}));return o.position.set(r,s,a),Pt.add(o),o}function Oh(){for(;Pt.children.length;)Pt.remove(Pt.children[0]);Ft.length=0,Ll.length=0,Ar=null,Xe=null}function Tr(i,e,t,n,r){let s=(r||Qs[i])();s.position.set(e,0,t),s.rotation.y=n||0,s.scale.setScalar(i==="gorm"||i==="zero"||i==="brick"?1.45:1.35),Pt.add(s);let a={id:i,m:s,x:e,z:t,mode:"idle"};return Ft.push(a),a}function Ep(i,e){let t=new st(new Bn(.12,.12,2.2,8),new Mr({color:3752522}));t.position.set(i,1.1,e),Pt.add(t)}function Rr(i){let e=qi[i];Oh(),Hn.fog.color.setHex(e.pav),Vn.setClearColor(e.pav),Gn(e.w,.2,e.d,e.pav,0,-.1,0),Gn(e.w,1.6,.2,2892336,0,.8,-e.d/2),Gn(e.w,1.6,.2,2892336,0,.8,e.d/2),Gn(.2,1.6,e.d,2892336,-e.w/2,.8,0),Gn(.2,1.6,e.d,2892336,e.w/2,.8,0);let t=new st(new Qt(e.w*.7,.06,.06),new Fn({color:e.neon}));t.position.set(0,1.7,-e.d/2+.16),Pt.add(t);let n=new li(e.neon,2.4,14);n.position.set(0,1.6,0),Pt.add(n),Ep(e.w/2-.4,-1);let r=ae.flag.braccio?()=>Er({sword:"back"}):Qs.rasFerito;St!=="prologo"&&(Xe=Tr("ras",ae.x,ae.z,Math.PI,r).m),(e.gente||[]).forEach(([s,a,o,l])=>Tr(s,a,o,l)),e.casse&&!ae.flag.casse&&(Ar=Gn(.9,.55,.6,13148746,e.casse[0],.28,e.casse[1])),(e.porte||[]).forEach(([s,a,o,l,c])=>{if(c&&!ae.flag[c])return;let h=Gn(.7,1.2,.15,3809328,s,.6,a);Ll.push({x:s,z:a,verso:o,nome:l,mesh:h})}),(i==="sala"&&!ae.flag.gormFatto||i==="sala"&&ae.sceltaGorm==="risparmia")&&Tr("gorm",0,-1.6,.4),pe("luogo").textContent=e.nome,ea()}function ea(){if(!ae)return;let i=Sp();pe("risorse").textContent=`Lv ${i.lv}  \xB7  ${i.hp}/${i.hpMax} PV  \xB7  ${ae.soldi} soldi`}function Tp(i){if(!Xe||St!=="gioco"||Et||He)return;let e=0,t=0;ji.on&&(e=ji.x,t=ji.y),(Rt.ArrowUp||Rt.w||Rt.W)&&(t-=1),(Rt.ArrowDown||Rt.s||Rt.S)&&(t+=1),(Rt.ArrowLeft||Rt.a||Rt.A)&&(e-=1),(Rt.ArrowRight||Rt.d||Rt.D)&&(e+=1);let n=qi[ae.stanza],r=Ft.find(o=>o.id==="ras");if(e||t){let o=Math.hypot(e,t)||1;Xe.position.x=Math.max(-n.w/2+.5,Math.min(n.w/2-.5,Xe.position.x+e/o*i*2.3)),Xe.position.z=Math.max(-n.d/2+.5,Math.min(n.d/2-.5,Xe.position.z+t/o*i*2.3)),Xe.rotation.y=Math.atan2(e,t),r.mode="walk"}else r.mode="idle";let s=Ll.find(o=>Math.hypot(o.x-Xe.position.x,o.z-Xe.position.z)<.7);s&&wp(s.verso),n.trappola&&!ae.flag[n.trappola.id]&&Math.abs(Xe.position.z-n.trappola.z)<.7&&(ae.flag[n.trappola.id]=!0,Bt(),Cl([{id:"ratto",nome:"Ratto di Ferro",hp:36,atk:8,def:2,spd:8,soldi:14,xp:20},{id:"ratto",nome:"Ratto di Ferro",hp:36,atk:8,def:2,spd:7,soldi:14,xp:20}])),ae.stanza==="sala"&&!ae.flag.gormFatto&&Math.abs(Xe.position.z)<.8&&(Xe.position.z=1.6,Xt([["RE GORM","Re Gorm, delle Fogne. Tu sei il ragazzo senza braccio che cammina ancora. Male."],["RAS","Il braccio c\u2019\xE8. Non \xE8 il mio. Il resto s\xEC."]],()=>Cl([{id:"gorm",nome:"Re Gorm",hp:110,atk:13,def:4,spd:7,soldi:40,xp:60,boss:1},{id:"guardia",nome:"Guardia di Gorm",hp:48,atk:10,def:3,spd:6,soldi:16,xp:22}]))),Ot=null;let a=1.6;Ft.forEach(o=>{if(o.id==="ras")return;let l=Math.hypot(o.m.position.x-Xe.position.x,o.m.position.z-Xe.position.z);l<a&&(a=l,Ot=o)}),Ar&&Math.hypot(Ar.position.x-Xe.position.x,Ar.position.z-Xe.position.z)<a&&(Ot={id:"casse"}),pe("azione").classList.toggle("nascosto",!Ot),pe("azione").textContent=Ot&&Ot.id==="casse"?"Apri":"Parla"}function wp(i){if(!qi[i]||i==="sala"&&!ae.flag.casse||i==="rust"&&!ae.flag.fine)return;ae.stanza=i;let e=qi[i];ae.x=e.spawn[0],ae.z=e.spawn[1],Bt(),Rr(i)}var Fh={kiri(){return ae.flag.kiriBrief?[["KIRI","Io resto un passo dietro di te. Se cadi, ti tiro su. Non fare l\u2019eroe da solo: l\u2019ha gi\xE0 fatto Aram."]]:(ae.flag.kiriBrief=!0,[["KIRI","Sei sveglio. Il Braccio Alba tiene. Non chiedere di chi era prima: ora ascolta te."],["RAS","Aram e Nadia non si alzano. Zero Hollow li ha lasciati l\xEC, e me qui."],["KIRI","Le Fogne sono il mercato che Re Gorm non dichiara. I suoi soldi passano sotto la citt\xE0. Se gliene togli, esce dal buco."],["RAS","Allora si parte dal mercato."]])},medico(){return[["DOTTOR SEME","Il taglio \xE8 chiuso. Il Braccio Alba non \xE8 una protesi da vetrina: \xE8 un debito che si muove. Se brucia, non \xE8 un guasto. Sei tu."]]},nila(){let i=!ae.flag.nila;return ae.flag.nila=!0,i?[["NILA","Nila. Vendo quello che i medici veri non tengono in vista. Le casse di Gorm sono nel deposito, dopo la passerella. Se le apri, i Ratti arrivano di corsa."]]:[["NILA","Di nuovo. Medikit a 20, stim a 15."]]},spina(){return[["SPINA","Gorm conta le monete due volte. Se gliene manca una, manda i Ratti. Se gliene mancano tutte, scende lui. Porta una corona di tubi. Ridicola, finch\xE9 non ti colpisce."]]},lyra(){return ae.flag.lyra=!0,[["LYRA","Lyra. La frusta \xE8 mia, il neon anche. Se Gorm cade, il vicolo sopra respira."],["RAS","Vieni con noi."],["LYRA","Non ancora. Ho un conto aperto pi\xF9 su, e non lo chiudo in una fogna. Quando servi una frusta, la senti."]]},sable(){return ae.flag.sable=!0,[["SABLE","Sable. Requiem \xE8 carico. Non spreco un colpo per una rissa da fogna."],["RAS","E se il re resta in piedi?"],["SABLE","Allora il secondo colpo \xE8 gratis. Vai. Io vedo la passerella da qui."]]},brick(){return[["BRICK","Brick. Questo \xE8 il muro di Rust Alley. Di l\xE0 non si passa ancora: Madre Ruggine non apre a chi ha le scarpe bagnate di fogna."],["RAS","Gorm \xE8 sistemato. A modo mio."],["BRICK","Il modo conta. Madre Ruggine lo sapr\xE0. Torna quando la ruggine chiama, non prima."]]},gorm(){return ae.sceltaGorm==="risparmia"?[["RE GORM","Mi hai lasciato la corona e tolto il deposito. \xC8 peggio di una lama. Me lo segno, Ras."]]:[["RE GORM","Avvicinati, se vuoi finire quello che hai iniziato."]]}};function Ch(){if(!Ot||St!=="gioco"||Et)return;if(Ot.id==="casse"){ae.flag.casse=!0,ae.soldi+=80,Bt(),Xt([["RAS","Casse di Gorm. Le apro."],["","Ottanta soldi del re passano nelle tue tasche. Nel deposito suona un allarme basso."]],()=>{Rr("deposito"),Cl([{id:"guardia",nome:"Guardia di Gorm",hp:58,atk:11,def:3,spd:7,soldi:22,xp:28},{id:"ratto",nome:"Ratto di Ferro",hp:34,atk:8,def:2,spd:8,soldi:12,xp:16}])});return}let i=Fh[Ot.id];if(i){if(Ot.id==="nila"){Xt(i(),()=>Ap());return}Xt(i(),()=>{Ot.mode="idle",Bt()}),Ot.mode="talk"}}function Xt(i,e){Et={linee:i,i:0,fine:e},Dl()}function Dl(){let i=Et.linee[Et.i];pe("dialogo").classList.remove("nascosto"),pe("chi").textContent=i[0]||"",pe("testo").textContent=i[1],pe("scelte").innerHTML="";let e=Ft.find(t=>t.id===(i[0]||"").toLowerCase().split(" ")[0]);e&&(e.mode="talk")}function Ph(){if(!(!Et||pe("scelte").childElementCount)){if(Et.i+=1,Et.i>=Et.linee.length){let i=Et.fine;Et=null,pe("dialogo").classList.add("nascosto"),Ft.forEach(e=>{e.mode==="talk"&&(e.mode="idle")}),i&&i();return}Dl()}}function Bh(i,e){Et={linee:[["",i.testo||""]],i:0,fine:null},Dl(),pe("scelte").innerHTML="",i.voci.forEach(t=>{let n=document.createElement("button");n.type="button",n.textContent=t[0],n.onclick=()=>{Et=null,pe("dialogo").classList.add("nascosto"),t[1](),e&&e()},pe("scelte").appendChild(n)})}function Ap(){Bh({testo:"Nila aspetta. I medikit costano 20, gli stim 15.",voci:[["Medikit \xB7 20",()=>Lh("medikit",20)],["Stim \xB7 15",()=>Lh("stim",15)],["Basta cos\xEC",()=>Bt()]]})}function Lh(i,e){if(ae.soldi<e){Xt([["NILA","Ti mancano i soldi. Torna quando il re \xE8 pi\xF9 povero."]],()=>Bt());return}ae.soldi-=e,ae.oggetti[i]=(ae.oggetti[i]||0)+1,Bt(),ea(),Xt([["NILA","Preso. Non sprecarlo sulla prima sbucciatura."]],()=>{})}var Rp={ratto:()=>Tl(),gorm:()=>wl(),guardia:()=>Qs.guardia()};function Cl(i){St="battaglia",pe("azione").classList.add("nascosto"),pe("joy").classList.add("nascosto"),He={nemici:i.map((e,t)=>({...e,hpMax:e.hp,i:t})),i:0,coda:[]},pe("battaglia").classList.remove("nascosto"),Ft.forEach(e=>{e.id==="gorm"&&(e.m.visible=!1)}),i.forEach((e,t)=>{let n=Rp[e.id]();n.position.set(-1.2+t*1.2,0,-2.2),n.scale.setScalar(e.boss?1.15:1),Pt.add(n),He.nemici[t].mesh=n}),zh()}function zh(){let i=He.nemici.filter(t=>t.hp>0),e=ae.party.filter(t=>t.hp>0);if(!i.length)return Nl();if(!e.length)return kh();He.coda=e.map(t=>({side:"p",ref:t,spd:en(t).spd})).concat(i.map(t=>({side:"e",ref:t,spd:t.spd||8}))),He.coda.sort((t,n)=>n.spd-t.spd),He.i=0,ci()}function ci(){if(!He)return;let i=He.nemici.filter(n=>n.hp>0),e=ae.party.filter(n=>n.hp>0);if(!i.length)return Nl();if(!e.length)return kh();if(He.i>=He.coda.length)return zh();let t=He.coda[He.i];if(t.ref.hp<=0)return He.i+=1,ci();Cp(),t.side==="e"?(pe("batComandi").innerHTML="",setTimeout(()=>Ip(t.ref),550)):Pp(t.ref)}function Cp(){let i=(e,t,n,r)=>`<div class="chi"><b>${e}</b> ${r||""}<div class="barra"><span style="width:${Math.max(0,t/n*100)}%"></span></div></div>`;pe("batEroi").innerHTML=ae.party.map(e=>{let t=en(e);return i(t.nome,e.hp,t.hpMax,`Lv ${t.lv} \xB7 PM ${e.mp}`)}).join(""),pe("batNemici").innerHTML=He.nemici.map(e=>i(e.nome,e.hp,e.hpMax)).join("")}function Pp(i){let e=en(i),t=[["Attacca",()=>Ih(i,e.atk,`${e.nome} colpisce.`)],["Difendi",()=>{i.difesa=!0,pe("log").textContent=`${e.nome} si copre.`,He.i+=1,ci()}]];i.id==="ras"&&t.push(["Taglio Alba",()=>{i.mp<6||(i.mp-=6,Ih(i,e.atk+8,"Il Braccio Alba taglia."))}]),i.id==="kiri"&&t.push(["Rattoppo",()=>{if(i.mp<5)return;i.mp-=5;let n=ae.party.slice().sort((s,a)=>s.hp-a.hp)[0],r=en(n);n.hp=Math.min(r.hpMax,n.hp+34),pe("log").textContent="Kiri chiude il taglio.",He.i+=1,ci()}]),ae.oggetti.medikit&&t.push(["Medikit",()=>{ae.oggetti.medikit-=1,i.hp=Math.min(e.hpMax,i.hp+40),pe("log").textContent="Medikit.",He.i+=1,ci()}]),pe("batComandi").innerHTML="",t.forEach(([n,r])=>{let s=document.createElement("button");s.className="grosso",s.textContent=n,s.onclick=()=>r(),pe("batComandi").appendChild(s)}),pe("log").textContent=`${e.nome}, tocca a te.`}function Lp(){return He.nemici.find(i=>i.hp>0)}function Ih(i,e,t){let n=Lp();if(!n)return Nl();let r=Math.max(1,e+Math.floor(Math.random()*4)-n.def);n.hp-=r,n.mesh&&(n.mesh.userData.mode="fight",setTimeout(()=>{n.mesh&&(n.mesh.userData.freeze=!1)},400));let s=Ft.find(a=>a.id==="ras");s&&(s.mode="fight"),pe("log").textContent=`${t} ${r} danni.`,pe("batComandi").innerHTML="",setTimeout(()=>{s&&(s.mode="idle"),He.i+=1,ci()},480)}function Ip(i){let e=ae.party.filter(s=>s.hp>0),t=e[Math.floor(Math.random()*e.length)],n=en(t),r=Math.max(1,i.atk+Math.floor(Math.random()*3)-Math.floor(n.atk/6));t.difesa&&(r=Math.max(1,Math.floor(r/2)),t.difesa=!1),t.hp=Math.max(0,t.hp-r),i.mesh&&(i.mesh.userData.mode="fight"),pe("log").textContent=`${i.nome} colpisce ${n.nome}: ${r}.`,setTimeout(()=>{He.i+=1,ci()},500)}function Nl(){let i=He.nemici.reduce((a,o)=>a+(o.xp||0),0),e=He.nemici.reduce((a,o)=>a+(o.soldi||0),0),t=ae.party.map(a=>Rl(a.xp));ae.party.forEach(a=>{let o=en(a).hpMax;a.xp+=i;let l=en(a);a.hp>0&&(a.hp=Math.min(l.hpMax,a.hp+(l.hpMax-o)))}),ae.soldi+=e;let n=ae.party.some((a,o)=>Rl(a.xp)>t[o]),r=He.nemici.some(a=>a.boss);He.nemici.forEach(a=>a.mesh&&Pt.remove(a.mesh)),He=null,pe("battaglia").classList.add("nascosto"),St="gioco",pe("joy").classList.remove("nascosto"),ea(),Bt();let s=n?" La squadra sale di livello.":"";if(r){ae.flag.gormFatto=!0;let a=Ft.find(o=>o.id==="gorm");a&&(a.m.visible=!0),Xt([["",`Gorm cede. +${e} soldi, +${i} esperienza.${s}`]],()=>Up());return}Xt([["",`Fine scontro. +${e} soldi, +${i} esperienza.${s}`]],()=>{})}function kh(){He.nemici.forEach(i=>i.mesh&&Pt.remove(i.mesh)),He=null,pe("battaglia").classList.add("nascosto"),ae.party.forEach(i=>{let e=en(i);i.hp=Math.max(1,Math.floor(e.hpMax/2))}),Xe&&(Xe.position.z=Math.min(2.4,qi[ae.stanza].d/2-.8),ae.z=Xe.position.z),St="gioco",pe("joy").classList.remove("nascosto"),Bt(),Xt([["KIRI","Non qui. Ti tiro su. La prossima volta si para, non si fa i belli."]],()=>{})}function Up(){Bh({testo:"Gorm \xE8 a terra, vivo. Ras deve scegliere. La scelta resta salvata.",voci:[["Lo risparmio",()=>{ae.sceltaGorm="risparmia",Uh([["RAS","Vivi. E di\u2019 a chi comanda che Ras ha scelto di non essere Zero."],["RE GORM","Peggio di una lama. Me lo segno."],["KIRI","Allora non siamo lui. Rust Alley \xE8 oltre quella porta, ma Brick non fa passare ancora."]])}],["Lo elimino",()=>{ae.sceltaGorm="elimina";let i=Ft.find(e=>e.id==="gorm");i&&(Pt.remove(i.m),Ft.splice(Ft.indexOf(i),1)),Uh([["RAS","Per Aram. Per Nadia. E perch\xE9 tu non scelga al posto di un altro."],["","Gorm non si rialza. La scelta resta scritta."],["KIRI","Lo hai fatto tu, non Zero. Ricordatelo quando Rust Alley chiede il conto."]])}]]})}function Uh(i){ae.flag.fine=!0,Bt(),Xt(i,()=>{Rr("sala"),pe("fineTesto").textContent=ae.sceltaGorm==="risparmia"?"Hai risparmiato Re Gorm. Le Fogne restano sue di nome, non di tasca. La scelta \xE8 nel salvataggio.":"Hai eliminato Re Gorm. Le Fogne non hanno pi\xF9 un re. La scelta \xE8 nel salvataggio.",pe("fine").classList.remove("nascosto"),pe("joy").classList.add("nascosto"),pe("azione").classList.add("nascosto"),St="fine"})}var Dh=[{luce:4853792,gente:[["aram",-.7,.15,.15],["nadia",.15,.05,-.1],["rasIntero",.85,.2,-.35]],linee:[["ARAM","Stanotte il vicolo \xE8 troppo quieto, Ras. I Varga non pagano il silenzio."],["NADIA","Tuo padre diceva: se il neon trema, qualcuno ha gi\xE0 deciso."],["RAS","Aram, porta Nadia verso il covo. Io chiudo la strada."]]},{luce:6950944,gente:[["aram",-.85,.1,.2],["nadia",.15,-.05,0],["rasIntero",.9,.15,-.4],["zero",.05,1.15,3.05]],linee:[["ZERO HOLLOW","Zero Hollow. Non \xE8 un nome. \xC8 quello che resta quando una famiglia finisce."],["ARAM","Ras, indietro\u2014"],["","Due lampi. Aram e Nadia cadono. Zero non li guarda pi\xF9."]]},{luce:6948884,gente:[["rasFerito",.2,.2,0],["zero",-.6,1.1,2.8]],linee:[["ZERO HOLLOW","Tu no. Tu devi ricordare chi ha spento i tuoi."],["","La lama gli prende il braccio sinistro. Lo lascia vivo, nella notte rossa."]]},{luce:1056808,gente:[["rasFerito",.4,.2,.2],["kiri",-.8,.6,.8]],linee:[["KIRI","Ras. Resta qui. Non chiudere gli occhi. Ti porto da chi non fa domande."],["RAS","Aram\u2026 Nadia\u2026"]]},{luce:1060920,gente:[["ras",.35,.15,-.2],["medico",-.55,.05,.45],["kiri",-1.05,.35,.15]],linee:[["DOTTOR SEME","Il braccio vecchio \xE8 andato. Questo \xE8 il Braccio Alba. Obbedisce a te, non a lui."],["RAS","Pesa come un debito. Va bene. I debiti li riscuoto."],["KIRI","Allora si scende. Le Fogne tengono i soldi di Re Gorm."]]}],Js=0;function Gh(){St="prologo",pe("titolo").classList.add("nascosto"),pe("hud").classList.remove("nascosto"),pe("joy").classList.add("nascosto"),Js=0,Hh()}function Hh(){let i=Dh[Js];Oh(),Vn.setClearColor(i.luce),Gn(8,.2,6,i.luce,0,-.1,0),i.gente.forEach(([e,t,n,r])=>Tr(e,t,n,r,Qs[e])),pe("luogo").textContent="Prologo \xB7 La notte rossa",Xt(i.linee,()=>{Js+=1,Js<Dh.length?Hh():(ae.prologo=!0,ae.flag.braccio=!0,ae.stanza="infermeria",ae.x=0,ae.z=1.6,St="gioco",pe("joy").classList.remove("nascosto"),Bt(),Rr("infermeria"),Xt(Fh.kiri(),()=>{}))})}function Nh(){St!=="gioco"||Et||He||(St="pausa",pe("pausa").classList.remove("nascosto"),Ks("squadra"))}function Ks(i){let e=[["squadra","Squadra"],["oggetti","Oggetti"],["salva","Salva"],["opzioni","Opzioni"]];pe("schedePausa").innerHTML="",e.forEach(([n,r])=>{let s=document.createElement("button");s.textContent=r,s.className=n===i?"on":"",s.onclick=()=>Ks(n),pe("schedePausa").appendChild(s)});let t=pe("corpoPausa");if(i==="squadra")t.innerHTML=ae.party.map(n=>{let r=en(n);return`<p><b>${r.nome}</b> \xB7 livello ${r.lv}<br>${n.hp}/${r.hpMax} PV \xB7 ${n.mp}/${r.mpMax} PM \xB7 attacco ${r.atk}</p>`}).join("")+`<p>${ae.flag.lyra?"Lyra l\u2019hai incontrata al mercato. Non \xE8 ancora in squadra.":"Lyra non l\u2019hai ancora incontrata."}<br>${ae.flag.sable?"Sable tiene la passerella. Requiem resta suo.":"Sable non l\u2019hai ancora vista."}</p><p>Scelta su Gorm: ${ae.sceltaGorm==="risparmia"?"risparmiato":ae.sceltaGorm==="elimina"?"eliminato":"ancora da fare"}.</p>`;else if(i==="oggetti"){t.innerHTML="";let n=(r,s)=>{let a=document.createElement("button");a.textContent=`${s} \xD7${ae.oggetti[r]||0}`,a.disabled=!(ae.oggetti[r]>0),a.onclick=()=>{let o=ae.party[0],l=en(o);r==="medikit"?o.hp=Math.min(l.hpMax,o.hp+40):o.mp=Math.min(l.mpMax,o.mp+12),ae.oggetti[r]-=1,Bt(),ea(),Ks("oggetti")},t.appendChild(a)};n("medikit","Medikit"),n("stim","Stim"),t.insertAdjacentHTML("beforeend","<p>Il medikit cura Ras. Lo stim gli rende i PM.</p>")}else if(i==="salva")Bt(),t.innerHTML="<p>Partita salvata su questo telefono. Il gioco salva da solo a ogni stanza, dopo uno scontro e quando scegli su Gorm.</p>";else{t.innerHTML="";let n=document.createElement("button");n.textContent=Xi?"Musica: spenta":"Musica: accesa",n.onclick=()=>{Xi=!Xi,Ct&&Ct.suspend&&(Xi?Ct.suspend():Ct.resume()),Ks("opzioni")},t.appendChild(n)}}var Rt={};function $s(i){try{Dp(i)}catch(e){window.__punk={errore:String(e&&e.stack||e)}}requestAnimationFrame($s)}function Dp(i){let e=Math.min(.05,(i-($s.t||i))/1e3);if($s.t=i,Zs+=e,St==="gioco"&&Tp(e),Ft.forEach(t=>Al(t.m,Zs+(t.x||0),t.mode||"idle")),He&&He.nemici.forEach(t=>t.mesh&&Al(t.mesh,Zs,"idle")),Xe){let t=new E(Xe.position.x,1.45,Xe.position.z+2.05);En.position.lerp(t,.12),En.lookAt(Xe.position.x,1,Xe.position.z-.2),ae&&ae.flag.braccio?(wr.intensity=1.2,Xe.userData.armL.end.getWorldPosition(wr.position)):wr.intensity=0}else En.position.set(.15,1.25,2.15),En.lookAt(0,1,.2);Vn.render(Hn,En)}function Np(){Il()&&!confirm("C\u2019\xE8 gi\xE0 una partita su questo telefono. La nuova la sostituisce.")||(ae=Mp(),localStorage.removeItem(Pl),Ul(),Gh())}function Op(){ae=Il(),ae&&(Ul(),pe("titolo").classList.add("nascosto"),pe("hud").classList.remove("nascosto"),ae.prologo?(St="gioco",pe("joy").classList.remove("nascosto"),Rr(ae.stanza)):Gh())}function Fp(){let i=Il();pe("continua").disabled=!i,pe("notaSalva").textContent=i?`Salvataggio: ${qi[i.stanza]?.nome||"in corso"}${i.sceltaGorm?" \xB7 scelta su Gorm fatta":""}`:"Nessuna partita salvata.",pe("nuova").onclick=Np,pe("continua").onclick=Op,pe("dialogo").onclick=Ph,pe("azione").onclick=r=>{r.stopPropagation(),Ch()},pe("pausaBtn").onclick=Nh,pe("chiudiPausa").onclick=()=>{St="gioco",pe("pausa").classList.add("nascosto")},pe("tornaTitolo").onclick=()=>location.reload(),addEventListener("keydown",r=>{Rt[r.key]=!0,(r.key==="Enter"||r.key===" ")&&(Et?Ph():Ot&&Ch()),r.key==="Escape"&&(St==="pausa"?pe("chiudiPausa").click():Nh())}),addEventListener("keyup",r=>{Rt[r.key]=!1});let e=pe("joy"),t=pe("pomello");function n(r,s,a){let o=e.getBoundingClientRect(),l=Math.max(-1,Math.min(1,(r-(o.left+o.width/2))/(o.width/2))),c=Math.max(-1,Math.min(1,(s-(o.top+o.height/2))/(o.height/2)));ji={on:a,x:l,y:c},t.style.left=39+l*30+"px",t.style.top=39+c*30+"px"}e.addEventListener("pointerdown",r=>{e.setPointerCapture(r.pointerId),n(r.clientX,r.clientY,!0)}),e.addEventListener("pointermove",r=>{ji.on&&n(r.clientX,r.clientY,!0)}),e.addEventListener("pointerup",()=>{ji={on:!1,x:0,y:0},t.style.left="39px",t.style.top="39px"}),addEventListener("pointerdown",()=>Ul(),{once:!0})}bp();Fp();En.position.set(.2,1.35,2.55);requestAnimationFrame($s);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
