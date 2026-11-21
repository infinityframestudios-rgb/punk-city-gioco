var rh=1,iu=2,yi=3,si=0,ft=1,vl=2;var an=100;var js=204,qs=205;var _l=0,nu=1,ru=2,Ni=0,au=1,su=2,ou=3,lu=4,cu=5,hu=6,uu=7;var ah=300,Dn=301,Un=302,Ys=303,Zs=304,Za=306,Js=1e3,pr=1001,Ks=1002,It=1003,du=1004;var Fr=1005;var ai=1006,cs=1007;var Cn=1008;var bi=1009,sh=1010,oh=1011,mr=1012,xl=1013,ln=1014,Si=1015,Rr=1016,yl=1017,Ml=1018,Nn=1020,lh=35902,ch=1021,hh=1022,zt=1023,uh=1024,dh=1025,fr=1026,On=1027,ph=1028,Sl=1029,mh=1030,bl=1031;var El=1033,ua=33776,da=33777,pa=33778,ma=33779,$s=35840,Qs=35841,eo=35842,to=35843,io=36196,no=37492,ro=37496,ao=37808,so=37809,oo=37810,lo=37811,co=37812,ho=37813,uo=37814,po=37815,mo=37816,fo=37817,go=37818,vo=37819,_o=37820,xo=37821,fa=36492,yo=36494,Mo=36495,fh=36283,So=36284,bo=36285,Eo=36286;var _a=2300,To=2301,hs=2302,rc=2400,ac=2401,sc=2402;var Rn="",ni="srgb",Gi="srgb-linear",Tl="display-p3",Ja="display-p3-linear",xa="linear",Ke="srgb",ya="rec709",Ma="p3";var fn=7680;var gh=515;var oc=35044;var lc="300 es",Fn=2e3,Sa=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ga=Math.PI/180,wo=180/Math.PI;function jn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(yt[255&n]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[255&e]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[63&t|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[255&i]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function pu(n,e){return(n%e+e)%e}function us(n,e,t){return(1-t)*n+t*e}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ie=class n{constructor(e,t,i,r,a,s,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],y=r[0],g=r[3],m=r[6],_=r[1],v=r[4],x=r[7],C=r[2],T=r[5],R=r[8];return a[0]=s*y+o*_+l*C,a[3]=s*g+o*v+l*T,a[6]=s*m+o*x+l*R,a[1]=c*y+h*_+u*C,a[4]=c*g+h*v+u*T,a[7]=c*m+h*x+u*R,a[2]=d*y+p*_+f*C,a[5]=d*g+p*v+f*T,a[8]=d*m+p*x+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,p=c*a-s*l,f=t*u+i*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*s)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(s*t-i*a)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ds=new Ie;function vh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mu(){let n=ba("canvas");return n.style.display="block",n}var cc={};function va(n){n in cc||(cc[n]=!0,console.warn(n))}var hc=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uc=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[Gi]:{transfer:xa,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ni]:{transfer:Ke,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ja]:{transfer:xa,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc)},[Tl]:{transfer:Ke,primaries:Ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(uc),fromReference:n=>n.applyMatrix3(hc).convertLinearToSRGB()}},fu=new Set([Gi,Ja]),Xe={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ir[e].toReference;return(0,ir[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ir[n].primaries},getTransfer:function(n){return n===Rn?xa:ir[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ir[e].luminanceCoefficients)}};function In(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function ps(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var gn,Ao=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gn===void 0&&(gn=ba("canvas")),gn.width=e.width,gn.height=e.height;let i=gn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=255*In(a[s]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*In(t[i]/255)):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gu=0,Ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ms(r[s].image)):a.push(ms(r[s]))}else a=ms(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vu=0,kt=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,a=1006,s=1008,o=zt,l=bi,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=jn(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=ah,kt.DEFAULT_ANISOTROPY=1;var je=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(p+1)/2,C=(m+1)/2,T=(h+d)/4,R=(u+y)/4,D=(f+g)/4;return v>x&&v>C?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=T/i,a=R/i):x>C?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=T/r,a=D/r):C<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(C),i=R/a,r=D/a),this.set(i,r,a,t),this}let _=Math.sqrt((g-f)*(g-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-f)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends Fi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let a=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];let s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ta=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=a[s+0],p=a[s+1],f=a[s+2],y=a[s+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=y);if(u!==y||l!==d||c!==p||h!==f){let g=1-o,m=l*d+c*p+h*f+u*y,_=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,m*_);g=Math.sin(g*T)/C,o=Math.sin(o*T)/C}let x=o*_;if(l=l*g+d*x,c=c*g+p*x,h=h*g+f*x,u=u*g+y*x,g===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,a,s){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=a[s],d=a[s+1],p=a[s+2],f=a[s+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(a/2),d=l(i/2),p=l(r/2),f=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*t-a*r),u=2*(a*i-s*t);return this.x=t+l*c+s*u-o*h,this.y=i+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fs=new E,dc=new oi,li=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Kt):Kt.fromBufferAttribute(a,s),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}let r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),zr.subVectors(this.max,nr),vn.subVectors(e.a,nr),_n.subVectors(e.b,nr),xn.subVectors(e.c,nr),Ri.subVectors(_n,vn),Ci.subVectors(xn,_n),Ki.subVectors(vn,xn);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!!gs(t,vn,_n,xn,zr)&&(t=[1,0,0,0,1,0,0,0,1],!!gs(t,vn,_n,xn,zr)&&(kr.crossVectors(Ri,Ci),t=[kr.x,kr.y,kr.z],gs(t,vn,_n,xn,zr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Kt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new E,new E,new E,new E,new E,new E,new E,new E],Kt=new E,Br=new li,vn=new E,_n=new E,xn=new E,Ri=new E,Ci=new E,Ki=new E,nr=new E,zr=new E,kr=new E,$i=new E;function gs(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){$i.fromArray(n,a);let o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _u=new li,rr=new E,vs=new E,ci=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_u.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(vs)),this.expandByPoint(rr.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new E,_s=new E,Gr=new E,Pi=new E,xs=new E,Hr=new E,ys=new E,Bn=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_s.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(_s);let a=.5*e.distanceTo(t),s=-this.direction.dot(Gr),o=Pi.dot(this.direction),l=-Pi.dot(Gr),c=Pi.lengthSq(),h=Math.abs(1-s*s),u,d,p,f;if(h>0)if(u=s*l-o,d=s*o-l,f=a*h,u>=0)if(d>=-f)if(d<=f){let y=1/h;u*=y,d*=y,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_s).addScaledVector(Gr,d),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),r=gi.dot(gi)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>r?null:((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,a){xs.subVectors(t,e),Hr.subVectors(i,e),ys.crossVectors(xs,Hr);let s,o=this.direction.dot(ys);if(o>0){if(r)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}Pi.subVectors(this.origin,e);let l=s*this.direction.dot(Hr.crossVectors(Pi,Hr));if(l<0)return null;let c=s*this.direction.dot(xs.cross(Pi));if(c<0||l+c>o)return null;let h=-s*Pi.dot(ys);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class n{constructor(e,t,i,r,a,s,o,l,c,h,u,d,p,f,y,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,h,u,d,p,f,y,g)}set(e,t,i,r,a,s,o,l,c,h,u,d,p,f,y,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/yn.setFromMatrixColumn(e,0).length(),a=1/yn.setFromMatrixColumn(e,1).length(),s=1/yn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=s*h,p=s*u,f=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=f+p*c,t[10]=s*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d+y*o,t[4]=f*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-f,t[6]=y+d*o,t[10]=s*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,y=c*u;t[0]=d-y*o,t[4]=-s*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=s*h,t[9]=y-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){let d=s*h,p=s*u,f=o*h,y=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){let d=s*l,p=s*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=f*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-y*u}else if(e.order==="XZY"){let d=s*l,p=s*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=s*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,i){let r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ii.crossVectors(i,Ft),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ii.crossVectors(i,Ft)),Ii.normalize(),Vr.crossVectors(Ft,Ii),r[0]=Ii.x,r[4]=Vr.x,r[8]=Ft.x,r[1]=Ii.y,r[5]=Vr.y,r[9]=Ft.y,r[2]=Ii.z,r[6]=Vr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],y=i[6],g=i[10],m=i[14],_=i[3],v=i[7],x=i[11],C=i[15],T=r[0],R=r[4],D=r[8],N=r[12],B=r[1],V=r[5],k=r[9],Y=r[13],H=r[2],Z=r[6],q=r[10],ae=r[14],se=r[3],ce=r[7],_e=r[11],ee=r[15];return a[0]=s*T+o*B+l*H+c*se,a[4]=s*R+o*V+l*Z+c*ce,a[8]=s*D+o*k+l*q+c*_e,a[12]=s*N+o*Y+l*ae+c*ee,a[1]=h*T+u*B+d*H+p*se,a[5]=h*R+u*V+d*Z+p*ce,a[9]=h*D+u*k+d*q+p*_e,a[13]=h*N+u*Y+d*ae+p*ee,a[2]=f*T+y*B+g*H+m*se,a[6]=f*R+y*V+g*Z+m*ce,a[10]=f*D+y*k+g*q+m*_e,a[14]=f*N+y*Y+g*ae+m*ee,a[3]=_*T+v*B+x*H+C*se,a[7]=_*R+v*V+x*Z+C*ce,a[11]=_*D+v*k+x*q+C*_e,a[15]=_*N+v*Y+x*ae+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*l*u-r*c*u-a*o*d+i*c*d+r*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+a*s*d-r*s*p+r*c*h-a*l*h)+e[11]*(+t*c*u-t*o*p-a*s*u+i*s*p+a*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*s*u-i*s*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],y=e[13],g=e[14],m=e[15],_=u*g*c-y*d*c+y*l*p-o*g*p-u*l*m+o*d*m,v=f*d*c-h*g*c-f*l*p+s*g*p+h*l*m-s*d*m,x=h*y*c-f*u*c+f*o*p-s*y*p-h*o*m+s*u*m,C=f*u*l-h*y*l-f*o*d+s*y*d+h*o*g-s*u*g,T=t*_+i*v+r*x+a*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=_*R,e[1]=(y*d*a-u*g*a-y*r*p+i*g*p+u*r*m-i*d*m)*R,e[2]=(o*g*a-y*l*a+y*r*c-i*g*c-o*r*m+i*l*m)*R,e[3]=(u*l*a-o*d*a-u*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=v*R,e[5]=(h*g*a-f*d*a+f*r*p-t*g*p-h*r*m+t*d*m)*R,e[6]=(f*l*a-s*g*a-f*r*c+t*g*c+s*r*m-t*l*m)*R,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*p+t*l*p)*R,e[8]=x*R,e[9]=(f*u*a-h*y*a-f*i*p+t*y*p+h*i*m-t*u*m)*R,e[10]=(s*y*a-f*o*a+f*i*c-t*y*c-s*i*m+t*o*m)*R,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*p-t*o*p)*R,e[12]=C*R,e[13]=(h*y*r-f*u*r+f*i*d-t*y*d-h*i*g+t*u*g)*R,e[14]=(f*o*r-s*y*r-f*i*l+t*y*l+s*i*g-t*o*g)*R,e[15]=(s*u*r-h*o*r+h*i*l-t*u*l-s*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,p=a*h,f=a*u,y=s*h,g=s*u,m=o*u,_=l*c,v=l*h,x=l*u,C=i.x,T=i.y,R=i.z;return r[0]=(1-(y+m))*C,r[1]=(p+x)*C,r[2]=(f-v)*C,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(d+m))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(f+v)*R,r[9]=(g-_)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,a=yn.set(r[0],r[1],r[2]).length(),s=yn.set(r[4],r[5],r[6]).length(),o=yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);let l=1/a,c=1/s,h=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=c,$t.elements[5]*=c,$t.elements[6]*=c,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=2e3){let l=this.elements,c=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),p,f;if(o===Fn)p=-(s+a)/(s-a),f=-2*s*a/(s-a);else{if(o!==Sa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),f=-s*a/(s-a)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(s-a),d=(t+e)*c,p=(i+r)*h,f,y;if(o===Fn)f=(s+a)*u,y=-2*u;else{if(o!==Sa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=a*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},yn=new E,$t=new Ae,xu=new E(0,0,0),yu=new E(1,1,1),Ii=new E,Vr=new E,Ft=new E,pc=new Ae,mc=new oi,hi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Mu=0,fc=new E,Mn=new oi,vi=new Ae,Wr=new E,ar=new E,Su=new E,bu=new oi,gc=new E(1,0,0),vc=new E(0,1,0),_c=new E(0,0,1),xc={type:"added"},Eu={type:"removed"},Sn={type:"childadded",child:null},Ms={type:"childremoved",child:null},xt=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new E,t=new hi,i=new oi,r=new E(1,1,1);t._onChange((function(){i.setFromEuler(t,!1)})),i._onChange((function(){t.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Ie}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mn.setFromAxisAngle(e,t),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(e,t){return Mn.setFromAxisAngle(e,t),this.quaternion.premultiply(Mn),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return fc.copy(e).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ar,Wr,this.up):vi.lookAt(Wr,ar,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Mn.setFromRotationMatrix(vi),this.quaternion.premultiply(Mn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xc),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xc),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Su),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){let o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),f=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=r,i;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};xt.DEFAULT_UP=new E(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=new E,_i=new E,Ss=new E,xi=new E,bn=new E,En=new E,yc=new E,bs=new E,Es=new E,Ts=new E,ws=new je,As=new je,Rs=new je,Ui=class n{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qt.subVectors(r,t),_i.subVectors(i,t),Ss.subVectors(e,t);let s=Qt.dot(Qt),o=Qt.dot(_i),l=Qt.dot(Ss),c=_i.dot(_i),h=_i.dot(Ss),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(s*h-o*l)*d;return a.set(1-p-f,f,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)!==null&&xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,xi.x),l.addScaledVector(s,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return ws.setScalar(0),As.setScalar(0),Rs.setScalar(0),ws.fromBufferAttribute(e,t),As.fromBufferAttribute(e,i),Rs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ws,a.x),s.addScaledVector(As,a.y),s.addScaledVector(Rs,a.z),s}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),_i.subVectors(e,t),Qt.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),.5*Qt.cross(_i).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,a=this.c,s,o;bn.subVectors(r,i),En.subVectors(a,i),bs.subVectors(e,i);let l=bn.dot(bs),c=En.dot(bs);if(l<=0&&c<=0)return t.copy(i);Es.subVectors(e,r);let h=bn.dot(Es),u=En.dot(Es);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(bn,s);Ts.subVectors(e,a);let p=bn.dot(Ts),f=En.dot(Ts);if(f>=0&&p<=f)return t.copy(a);let y=p*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(En,o);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return yc.subVectors(a,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(yc,o);let m=1/(g+y+d);return s=y*m,o=d*m,t.copy(i).addScaledVector(bn,s).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=pu(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Cs(s,a,e+1/3),this.g=Cs(s,a,e),this.b=Cs(s,a,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=ni){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){let i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Xe.fromWorkingColorSpace(Mt.copy(this),e),65536*Math.round(_t(255*Mt.r,0,255))+256*Math.round(_t(255*Mt.g,0,255))+Math.round(_t(255*Mt.b,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Mt.copy(this),t);let i=Mt.r,r=Mt.g,a=Mt.b,s=Math.max(i,r,a),o=Math.min(i,r,a),l,c,h=(o+s)/2;if(o===s)l=0,c=0;else{let u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-i)/u+2;break;case a:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=ni){Xe.fromWorkingColorSpace(Mt.copy(this),e);let t=Mt.r,i=Mt.g,r=Mt.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Xr);let i=us(Li.h,Xr.h,t),r=us(Li.s,Xr.s,t),a=us(Li.l,Xr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mt=new Ce;Ce.NAMES=_h;var Tu=0,Bi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=1,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=qs,this.blendEquation=an,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(a){let s=[];for(let o in a){let l=a[o];delete l.metadata,s.push(l)}return s}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==qs&&(i.blendDst=this.blendDst),this.blendEquation!==an&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zi=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$p=wu();function wu(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,a[l]=c|h}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:a,exponentTable:s,offsetTable:o}}var lt=new E,jr=new ie,Vt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oc,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),a=Pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}};var Aa=class extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ra=class extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Re=class extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Au=0,Ht=new Ae,Ps=new xt,Tn=new E,Bt=new li,sr=new li,mt=new E,ct=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Ra:Aa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ie().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let a=t[i];Bt.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){let o=t[a];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Bt.min,sr.min),Bt.expandByPoint(mt),mt.addVectors(Bt.max,sr.max),Bt.expandByPoint(mt)):(Bt.expandByPoint(sr.min),Bt.expandByPoint(sr.max))}Bt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)mt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let a=0,s=t.length;a<s;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)mt.fromBufferAttribute(o,c),l&&(Tn.fromBufferAttribute(e,c),mt.add(Tn)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new E,l[D]=new E;let c=new E,h=new E,u=new E,d=new ie,p=new ie,f=new ie,y=new E,g=new E;function m(D,N,B){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,B),d.fromBufferAttribute(a,D),p.fromBufferAttribute(a,N),f.fromBufferAttribute(a,B),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(y.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[D].add(y),o[N].add(y),o[B].add(y),l[D].add(g),l[N].add(g),l[B].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,N=_.length;D<N;++D){let B=_[D],V=B.start;for(let k=V,Y=V+B.count;k<Y;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new E,x=new E,C=new E,T=new E;function R(D){C.fromBufferAttribute(r,D),T.copy(C);let N=o[D];v.copy(N),v.sub(C.multiplyScalar(C.dot(N))).normalize(),x.crossVectors(T,N);let B=x.dot(l[D])<0?-1:1;s.setXYZW(D,v.x,v.y,v.z,B)}for(let D=0,N=_.length;D<N;++D){let B=_[D],V=B.start;for(let k=V,Y=V+B.count;k<Y;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new E,a=new E,s=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let y=0,g=l.length;y<g;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new Vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let a=e.morphAttributes;for(let c in a){let h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let c=0,h=s.length;c<h;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mc=new Ae,Qi=new Bn,qr=new ci,Sc=new E,Yr=new E,Zr=new E,Jr=new E,Is=new E,Kr=new E,bc=new E,$r=new E,ot=class extends xt{constructor(e=new ct,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(a&&o){Kr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],u=a[l];h!==0&&(Is.fromBufferAttribute(u,e),s?Kr.addScaledVector(Is,h):Kr.addScaledVector(Is.sub(t),h))}t.add(Kr)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(a),Qi.copy(e.ray).recast(e.near),qr.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(qr,Sc)===null||Qi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))return;Mc.copy(a).invert(),Qi.copy(e.ray).applyMatrix4(Mc),i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Qi)}}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=s[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=Qr(this,m,e,i,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);f<y;f+=3)r=Qr(this,s,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(s))for(let f=0,y=d.length;f<y;f++){let g=d[f],m=s[g.materialIndex];for(let _=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));_<v;_+=3)r=Qr(this,m,e,i,c,h,u,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);f<y;f+=3)r=Qr(this,s,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Qr(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Yr),n.getVertexPosition(l,Zr),n.getVertexPosition(c,Jr);let h=(function(u,d,p,f,y,g,m,_){let v;if(v=d.side===ft?f.intersectTriangle(m,g,y,!0,_):f.intersectTriangle(y,g,m,d.side===si,_),v===null)return null;$r.copy(_),$r.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo($r);return x<p.near||x>p.far?null:{distance:x,point:$r.clone(),object:u}})(n,e,t,i,Yr,Zr,Jr,bc);if(h){let u=new E;Ui.getBarycoord(bc,Yr,Zr,Jr,u),r&&(h.uv=Ui.getInterpolatedAttribute(r,o,l,c,u,new ie)),a&&(h.uv1=Ui.getInterpolatedAttribute(a,o,l,c,u,new ie)),s&&(h.normal=Ui.getInterpolatedAttribute(s,o,l,c,u,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};Ui.getNormal(Yr,Zr,Jr,d.normal),h.face=d,h.barycoord=u}return h}var ti=class n extends ct{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};let o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=0,p=0;function f(y,g,m,_,v,x,C,T,R,D,N){let B=x/R,V=C/D,k=x/2,Y=C/2,H=T/2,Z=R+1,q=D+1,ae=0,se=0,ce=new E;for(let _e=0;_e<q;_e++){let ee=_e*V-Y;for(let ne=0;ne<Z;ne++){let me=ne*B-k;ce[y]=me*_,ce[g]=ee*v,ce[m]=H,c.push(ce.x,ce.y,ce.z),ce[y]=0,ce[g]=0,ce[m]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ne/R),u.push(1-_e/D),ae+=1}}for(let _e=0;_e<D;_e++)for(let ee=0;ee<R;ee++){let ne=d+ee+Z*_e,me=d+ee+Z*(_e+1),ue=d+(ee+1)+Z*(_e+1),A=d+(ee+1)+Z*_e;l.push(ne,me,A),l.push(me,ue,A),se+=6}o.addGroup(p,se,N),p+=se,d+=ae}f("z","y","x",-1,-1,i,t,e,s,a,0),f("z","y","x",1,-1,i,t,-e,s,a,1),f("x","z","y",1,1,e,i,t,r,s,2),f("x","z","y",1,-1,e,i,-t,r,s,3),f("x","y","z",1,-1,e,t,i,r,a,4),f("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){let e={};for(let t=0;t<n.length;t++){let i=zn(n[t]);for(let r in i)e[r]=i[r]}return e}function xh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Ru={clone:zn,merge:wt},ui=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zn(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},gr=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new E,Ec=new ie,Tc=new ie,St=class extends gr{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*wo*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ga*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*wo*Math.atan(Math.tan(.5*ga*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Tc),t.subVectors(Tc,Ec)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ga*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wn=-90,Po=class extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new St(wn,1,e,t);r.layers=this.layers,this.add(r);let a=new St(wn,1,e,t);a.layers=this.layers,this.add(a);let s=new St(wn,1,e,t);s.layers=this.layers,this.add(s);let o=new St(wn,1,e,t);o.layers=this.layers,this.add(o);let l=new St(wn,1,e,t);l.layers=this.layers,this.add(l);let c=new St(wn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Sa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Ca=class extends kt{constructor(e,t,i,r,a,s,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Dn,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Io=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ca(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ti(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ft,blending:0});a.uniforms.tEquirect.value=t;let s=new ot(r,a),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=ai),new Po(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}},Ls=new E,Cu=new E,Pu=new Ie,Mi=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ls.subVectors(i,t).cross(Cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ls),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Pu.getNormalMatrix(e),r=this.coplanarPoint(Ls).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},en=new ci,ea=new E,kn=class{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,a=new Mi,s=new Mi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],f=r[9],y=r[10],g=r[11],m=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-a,d-c,g-p,x-m).normalize(),i[1].setComponents(l+a,d+c,g+p,x+m).normalize(),i[2].setComponents(l+s,d+h,g+f,x+_).normalize(),i[3].setComponents(l-s,d-h,g-f,x-_).normalize(),i[4].setComponents(l-o,d-u,g-y,x-v).normalize(),t===Fn)i[5].setComponents(l+o,d+u,g+y,x+v).normalize();else{if(t!==Sa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(e){return en.center.set(0,0,0),en.radius=.7071067811865476,en.applyMatrix4(e.matrixWorld),this.intersectsSphere(en)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yh(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Iu(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let a=e.get(t);return void((!a||a.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(a,s){let o=a.array,l=a.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(s,h),n.bufferData(s,o,l),a.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(o instanceof Uint16Array)u=a.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:c}})(t,i));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(a,s,o){let l=s.array,c=s.updateRanges;if(n.bindBuffer(o,a),c.length===0)n.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}s.clearUpdateRanges()}s.onUploadCallback()})(r.buffer,t,i),r.version=t.version}}}}var vr=class n extends ct{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],y=[],g=[];for(let m=0;m<h;m++){let _=m*d-s;for(let v=0;v<c;v++){let x=v*u-a;f.push(x,-_,0),y.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){let v=_+c*m,x=_+c*(m+1),C=_+1+c*(m+1),T=_+1+c*m;p.push(v,x,T),p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Pe={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},oe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ri={basic:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:wt([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:wt([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:wt([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:wt([oe.common,oe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:wt([oe.lights,oe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ri.physical={uniforms:wt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var ta={r:0,b:0,g:0},tn=new hi,Lu=new Ae;function Du(n,e,t,i,r,a,s){let o=new Ce(0),l,c,h=a===!0?0:1,u=null,d=0,p=null;function f(g){let m=g.isScene===!0?g.background:null;return m&&m.isTexture&&(m=(g.backgroundBlurriness>0?t:e).get(m)),m}function y(g,m){g.getRGB(ta,xh(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,y(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,y(o,h)},render:function(g){let m=!1,_=f(g);_===null?y(o,h):_&&_.isColor&&(y(_,1),m=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(g,m){let _=f(m);_&&(_.isCubeTexture||_.mapping===Za)?(c===void 0&&(c=new ot(new ti(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:zn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:ft,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,x,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),tn.copy(m.backgroundRotation),tn.x*=-1,tn.y*=-1,tn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lu.makeRotationFromEuler(tn)),c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Ke,u===_&&d===_.version&&p===n.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ot(new vr(2,2),new ui({name:"BackgroundMaterial",uniforms:zn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===n.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Uu(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=c(null),a=r,s=!1;function o(m){return n.bindVertexArray(m)}function l(m){return n.deleteVertexArray(m)}function c(m){let _=[],v=[],x=[];for(let C=0;C<t;C++)_[C]=0,v[C]=0,x[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:v,attributeDivisors:x,object:m,attributes:{},index:null}}function h(){let m=a.newAttributes;for(let _=0,v=m.length;_<v;_++)m[_]=0}function u(m){d(m,0)}function d(m,_){let v=a.newAttributes,x=a.enabledAttributes,C=a.attributeDivisors;v[m]=1,x[m]===0&&(n.enableVertexAttribArray(m),x[m]=1),C[m]!==_&&(n.vertexAttribDivisor(m,_),C[m]=_)}function p(){let m=a.newAttributes,_=a.enabledAttributes;for(let v=0,x=_.length;v<x;v++)_[v]!==m[v]&&(n.disableVertexAttribArray(v),_[v]=0)}function f(m,_,v,x,C,T,R){R===!0?n.vertexAttribIPointer(m,_,v,C,T):n.vertexAttribPointer(m,_,v,x,C,T)}function y(){g(),s=!0,a!==r&&(a=r,o(a.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(m,_,v,x,C){let T=!1,R=(function(D,N,B){let V=B.wireframe===!0,k=i[D.id];k===void 0&&(k={},i[D.id]=k);let Y=k[N.id];Y===void 0&&(Y={},k[N.id]=Y);let H=Y[V];return H===void 0&&(H=c(n.createVertexArray()),Y[V]=H),H})(x,v,_);a!==R&&(a=R,o(a.object)),T=(function(D,N,B,V){let k=a.attributes,Y=N.attributes,H=0,Z=B.getAttributes();for(let q in Z)if(Z[q].location>=0){let ae=k[q],se=Y[q];if(se===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ae===void 0||ae.attribute!==se||se&&ae.data!==se.data)return!0;H++}return a.attributesNum!==H||a.index!==V})(m,x,v,C),T&&(function(D,N,B,V){let k={},Y=N.attributes,H=0,Z=B.getAttributes();for(let q in Z)if(Z[q].location>=0){let ae=Y[q];ae===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));let se={};se.attribute=ae,ae&&ae.data&&(se.data=ae.data),k[q]=se,H++}a.attributes=k,a.attributesNum=H,a.index=V})(m,x,v,C),C!==null&&e.update(C,n.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,(function(D,N,B,V){h();let k=V.attributes,Y=B.getAttributes(),H=N.defaultAttributeValues;for(let Z in Y){let q=Y[Z];if(q.location>=0){let ae=k[Z];if(ae===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){let se=ae.normalized,ce=ae.itemSize,_e=e.get(ae);if(_e===void 0)continue;let ee=_e.buffer,ne=_e.type,me=_e.bytesPerElement,ue=ne===n.INT||ne===n.UNSIGNED_INT||ae.gpuType===xl;if(ae.isInterleavedBufferAttribute){let A=ae.data,M=A.stride,O=ae.offset;if(A.isInstancedInterleavedBuffer){for(let W=0;W<q.locationSize;W++)d(q.location+W,A.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let W=0;W<q.locationSize;W++)u(q.location+W);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let W=0;W<q.locationSize;W++)f(q.location+W,ce/q.locationSize,ne,se,M*me,(O+ce/q.locationSize*W)*me,ue)}else{if(ae.isInstancedBufferAttribute){for(let A=0;A<q.locationSize;A++)d(q.location+A,ae.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let A=0;A<q.locationSize;A++)u(q.location+A);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let A=0;A<q.locationSize;A++)f(q.location+A,ce/q.locationSize,ne,se,ce*me,ce/q.locationSize*A*me,ue)}}else if(H!==void 0){let se=H[Z];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(q.location,se);break;case 3:n.vertexAttrib3fv(q.location,se);break;case 4:n.vertexAttrib4fv(q.location,se);break;default:n.vertexAttrib1fv(q.location,se)}}}}p()})(m,_,v,x),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))},reset:y,resetDefaultState:g,dispose:function(){y();for(let m in i){let _=i[m];for(let v in _){let x=_[v];for(let C in x)l(x[C].object),delete x[C];delete _[v]}delete i[m]}},releaseStatesOfGeometry:function(m){if(i[m.id]===void 0)return;let _=i[m.id];for(let v in _){let x=_[v];for(let C in x)l(x[C].object),delete x[C];delete _[v]}delete i[m.id]},releaseStatesOfProgram:function(m){for(let _ in i){let v=i[_];if(v[m.id]===void 0)continue;let x=v[m.id];for(let C in x)l(x[C].object),delete x[C];delete v[m.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Nu(n,e,t){let i;function r(a,s,o){o!==0&&(n.drawArraysInstanced(i,a,s,o),t.update(s,i,o))}this.setMode=function(a){i=a},this.render=function(a,s){n.drawArrays(i,a,s),t.update(s,i,1)},this.renderInstances=r,this.renderMultiDraw=function(a,s,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,s,0,o);let l=0;for(let c=0;c<o;c++)l+=s[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(a,s,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<a.length;h++)r(a[h],s[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,a,0,s,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=s[u];for(let u=0;u<l.length;u++)t.update(h,i,l[u])}}}function Ou(n,e,t,i){let r;function a(d){if(d==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp",o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(c===!0){let d=e.get("EXT_clip_control");d.clipControlEXT(d.LOWER_LEFT_EXT,d.ZERO_TO_ONE_EXT)}let h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,textureFormatReadable:function(d){return d===zt||i.convert(d)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==bi&&i.convert(d)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Si&&!p)},precision:s,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:n.getParameter(n.MAX_SAMPLES)}}function Fu(n){let e=this,t=null,i=0,r=!1,a=!1,s=new Mi,o=new Ie,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,p!==!0||y===null){let g=d+4*f,m=u.matrixWorldInverse;o.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let _=0,v=d;_!==f;++_,v+=4)s.copy(h[_]).applyMatrix4(m,o),s.normal.toArray(y,v),y[v+3]=s.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,g=n.get(h);if(!r||p===null||p.length===0||a&&!y)a?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let m=a?0:i,_=4*m,v=g.clippingState||null;l.value=v,v=c(p,u,_,d);for(let x=0;x!==_;++x)v[x]=t[x];g.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=m}}}function Bu(n){let e=new WeakMap;function t(r,a){return a===Ys?r.mapping=Dn:a===Zs&&(r.mapping=Un),r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping;if(a===Ys||a===Zs){if(e.has(r))return t(e.get(r).texture,r.mapping);{let s=r.image;if(s&&s.height>0){let o=new Io(s.height);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Pa=class extends gr{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wc=[.125,.215,.35,.446,.526,.582],or=20,Ds=new Pa,Ac=new Ce,Us=null,Ns=0,Os=0,Fs=!1,rn=(1+Math.sqrt(5))/2,An=1/rn,Rc=[new E(-rn,An,0),new E(rn,An,0),new E(-An,0,rn),new E(An,0,rn),new E(0,rn,-An),new E(0,rn,An),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Ia=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Ns,Os),this._renderer.xr.enabled=Fs,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dn||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Rr,format:zt,colorSpace:Gi,depthBuffer:!1},r=Cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(s){let o=[],l=[],c=[],h=s,u=s-4+1+wc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>s-4?f=wc[d-s+4-1]:d===0&&(f=0),c.push(f);let y=1/(p-2),g=-y,m=1+y,_=[g,g,m,g,m,m,g,g,m,m,g,m],v=6,x=6,C=3,T=2,R=1,D=new Float32Array(C*x*v),N=new Float32Array(T*x*v),B=new Float32Array(R*x*v);for(let k=0;k<v;k++){let Y=k%3*2/3-1,H=k>2?0:-1,Z=[Y,H,0,Y+2/3,H,0,Y+2/3,H+1,0,Y,H,0,Y+2/3,H+1,0,Y,H+1,0];D.set(Z,C*x*k),N.set(_,T*x*k);let q=[k,k,k,k,k,k];B.set(q,R*x*k)}let V=new ct;V.setAttribute("position",new Vt(D,C)),V.setAttribute("uv",new Vt(N,T)),V.setAttribute("faceIndex",new Vt(B,R)),o.push(V),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(a)),this._blurMaterial=(function(s,o,l){let c=new Float32Array(or),h=new E(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:wl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(a,e,t)}return r}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,i,r){let a=new St(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ac),l.toneMapping=Ni,l.autoClear=!1;let u=new zi({name:"PMREM.Background",side:ft,depthWrite:!1,depthTest:!1}),d=new ot(new ti,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Ac),p=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(a.up.set(0,s[y],0),a.lookAt(o[y],0,0)):g===1?(a.up.set(0,0,s[y]),a.lookAt(0,o[y],0)):(a.up.set(0,s[y],0),a.lookAt(0,0,o[y]));let m=this._cubeSize;ia(r,g*m,y>2?m:0,m,m),l.setRenderTarget(r),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Dn||e.mapping===Un;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new ot(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let o=this._cubeSize;ia(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Ds)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let a=1;a<r;a++){let s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Rc[(r-a-1)%Rc.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){let l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ot(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,f=a/p,y=isFinite(a)?1+Math.floor(3*f):or;y>or&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let g=[],m=0;for(let x=0;x<or;++x){let C=x/f,T=Math.exp(-C*C/2);g.push(T),x===0?m+=T:x<y&&(m+=2*T)}for(let x=0;x<g.length;x++)g[x]=g[x]/m;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=g,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-i;let v=this._sizeLods[r];ia(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Ds)}};function Cc(n,e,t){let i=new Ei(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ic(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function zu(n){let e=new WeakMap,t=null;function i(r){let a=r.target;a.removeEventListener("dispose",i);let s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(r){if(r&&r.isTexture){let a=r.mapping,s=a===Ys||a===Zs,o=a===Dn||a===Un;if(s||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Ia(n)),l=s?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return s&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Ia(n)),l=s?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ku(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&va("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gu(n,e,t,i){let r={},a=new WeakMap;function s(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",s),delete r[c.id];let h=a.get(c);h&&(e.remove(h),a.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let g=0,m=y.length;g<m;g+=3){let _=y[g+0],v=y[g+1],x=y[g+2];c.push(_,v,v,x,x,_)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let g=0,m=y.length/3-1;g<m;g+=3){let _=g+0,v=g+1,x=g+2;c.push(_,v,v,x,x,_)}}}let p=new(vh(c)?Ra:Aa)(c,1);p.version=d;let f=a.get(l);f&&e.remove(f),a.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",s),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=a.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return a.get(l)}}}function Hu(n,e,t){let i,r,a;function s(o,l,c){c!==0&&(n.drawElementsInstanced(i,l,r,o*a,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,a=o.bytesPerElement},this.render=function(o,l){n.drawElements(i,l,r,o*a),t.update(l,i,1)},this.renderInstances=s,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)s(o[d]/a,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p];for(let p=0;p<h.length;p++)t.update(d,i,h[p])}}}function Vu(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Wu(n,e,t){let i=new WeakMap,r=new je;return{update:function(a,s,o){let l=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(s);if(u===void 0||u.count!==h){let N=function(){R.dispose(),i.delete(s),s.removeEventListener("dispose",N)};var d=N;u!==void 0&&u.texture.dispose();let p=s.morphAttributes.position!==void 0,f=s.morphAttributes.normal!==void 0,y=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],_=s.morphAttributes.color||[],v=0;p===!0&&(v=1),f===!0&&(v=2),y===!0&&(v=3);let x=s.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*C*4*h),R=new Ta(T,x,C,h);R.type=Si,R.needsUpdate=!0;let D=4*v;for(let B=0;B<h;B++){let V=g[B],k=m[B],Y=_[B],H=x*C*4*B;for(let Z=0;Z<V.count;Z++){let q=Z*D;p===!0&&(r.fromBufferAttribute(V,Z),T[H+q+0]=r.x,T[H+q+1]=r.y,T[H+q+2]=r.z,T[H+q+3]=0),f===!0&&(r.fromBufferAttribute(k,Z),T[H+q+4]=r.x,T[H+q+5]=r.y,T[H+q+6]=r.z,T[H+q+7]=0),y===!0&&(r.fromBufferAttribute(Y,Z),T[H+q+8]=r.x,T[H+q+9]=r.y,T[H+q+10]=r.z,T[H+q+11]=Y.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new ie(x,C)},i.set(s,u),s.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let f=s.morphTargetsRelative?1:1-p;o.getUniforms().setValue(n,"morphTargetBaseInfluence",f),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function Xu(n,e,t,i){let r=new WeakMap;function a(s){let o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){let o=i.render.frame,l=s.geometry,c=e.get(s,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),r.get(s)!==o&&(t.update(s.instanceMatrix,n.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,n.ARRAY_BUFFER),r.set(s,o))),s.isSkinnedMesh){let h=s.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var La=class extends kt{constructor(e,t,i,r,a,s,o,l,c,h=1026){if(h!==fr&&h!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fr&&(i=ln),i===void 0&&h===On&&(i=Nn),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mh=new kt,Lc=new La(1,1),Sh=new Ta,bh=new Co,Eh=new Ca,Dc=[],Uc=[],Nc=new Float32Array(16),Oc=new Float32Array(9),Fc=new Float32Array(4);function qn(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,a=Dc[r];if(a===void 0&&(a=new Float32Array(r),Dc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ju(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qu(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function Yu(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function Zu(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function Ju(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),ut(t,i)}}function Ku(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Oc.set(i),n.uniformMatrix3fv(this.addr,!1,Oc),ut(t,i)}}function $u(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),ut(t,i)}}function Qu(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ed(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function td(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function id(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function nd(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rd(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function ad(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function sd(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function od(n,e,t){let i=this.cache,r=t.allocateTextureUnit(),a;i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),this.type===n.SAMPLER_2D_SHADOW?(Lc.compareFunction=gh,a=Lc):a=Mh,t.setTexture2D(e||a,r)}function ld(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bh,r)}function cd(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Eh,r)}function hd(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sh,r)}function ud(n,e){n.uniform1fv(this.addr,e)}function dd(n,e){let t=qn(e,this.size,2);n.uniform2fv(this.addr,t)}function pd(n,e){let t=qn(e,this.size,3);n.uniform3fv(this.addr,t)}function md(n,e){let t=qn(e,this.size,4);n.uniform4fv(this.addr,t)}function fd(n,e){let t=qn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gd(n,e){let t=qn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vd(n,e){let t=qn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _d(n,e){n.uniform1iv(this.addr,e)}function xd(n,e){n.uniform2iv(this.addr,e)}function yd(n,e){n.uniform3iv(this.addr,e)}function Md(n,e){n.uniform4iv(this.addr,e)}function Sd(n,e){n.uniform1uiv(this.addr,e)}function bd(n,e){n.uniform2uiv(this.addr,e)}function Ed(n,e){n.uniform3uiv(this.addr,e)}function Td(n,e){n.uniform4uiv(this.addr,e)}function wd(n,e,t){let i=this.cache,r=e.length,a=Ka(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ut(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Mh,a[s])}function Ad(n,e,t){let i=this.cache,r=e.length,a=Ka(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ut(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||bh,a[s])}function Rd(n,e,t){let i=this.cache,r=e.length,a=Ka(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ut(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Eh,a[s])}function Cd(n,e,t){let i=this.cache,r=e.length,a=Ka(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ut(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Sh,a[s])}var Lo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return ju;case 35664:return qu;case 35665:return Yu;case 35666:return Zu;case 35674:return Ju;case 35675:return Ku;case 35676:return $u;case 5124:case 35670:return Qu;case 35667:case 35671:return ed;case 35668:case 35672:return td;case 35669:case 35673:return id;case 5125:return nd;case 36294:return rd;case 36295:return ad;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return od;case 35679:case 36299:case 36307:return ld;case 35680:case 36300:case 36308:case 36293:return cd;case 36289:case 36303:case 36311:case 36292:return hd}})(t.type)}},Do=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return ud;case 35664:return dd;case 35665:return pd;case 35666:return md;case 35674:return fd;case 35675:return gd;case 35676:return vd;case 5124:case 35670:return _d;case 35667:case 35671:return xd;case 35668:case 35672:return yd;case 35669:case 35673:return Md;case 5125:return Sd;case 36294:return bd;case 36295:return Ed;case 36296:return Td;case 35678:case 36198:case 36298:case 36306:case 35682:return wd;case 35679:case 36299:case 36307:return Ad;case 35680:case 36300:case 36308:case 36293:return Rd;case 36289:case 36303:case 36311:case 36292:return Cd}})(t.type)}},Uo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let o=r[a];o.setValue(e,t[o.id],i)}}},Bs=/(\w+)(\])?(\[|\.)?/g;function Bc(n,e){n.seq.push(e),n.map[e.id]=e}function Pd(n,e,t){let i=n.name,r=i.length;for(Bs.lastIndex=0;;){let a=Bs.exec(i),s=Bs.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o|=0),c===void 0||c==="["&&s+2===r){Bc(t,c===void 0?new Lo(o,n,e):new Do(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Uo(o),Bc(t,h)),t=h}}}var Ln=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let a=e.getActiveUniform(t,r);Pd(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function zc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Id=37297,Ld=0;function kc(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),s)}return r}function Dd(n,e){let t=(function(i){let r=Xe.getPrimaries(Xe.workingColorSpace),a=Xe.getPrimaries(i),s;switch(r===a?s="":r===Ma&&a===ya?s="LinearDisplayP3ToLinearSRGB":r===ya&&a===Ma&&(s="LinearSRGBToLinearDisplayP3"),i){case Gi:case Ja:return[s,"LinearTransferOETF"];case ni:case Tl:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}})(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ud(n,e){let t;switch(e){case au:t="Linear";break;case su:t="Reinhard";break;case ou:t="Cineon";break;case lu:t="ACESFilmic";break;case hu:t="AgX";break;case uu:t="Neutral";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var na=new E;function Nd(){return Xe.getLuminanceCoefficients(na),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${na.x.toFixed(4)}, ${na.y.toFixed(4)}, ${na.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lr(n){return n!==""}function Gc(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Od=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(Od,Bd)}var Fd=new Map;function Bd(n,e){let t=Pe[e];if(t===void 0){let i=Fd.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return No(t)}var zd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(zd,kd)}function kd(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gd(n,e,t,i){let r=n.getContext(),a=t.defines,s=t.vertexShader,o=t.fragmentShader,l=(function(V){let k="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===rh?k="SHADOWMAP_TYPE_PCF":V.shadowMapType===iu?k="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===yi&&(k="SHADOWMAP_TYPE_VSM"),k})(t),c=(function(V){let k="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case Dn:case Un:k="ENVMAP_TYPE_CUBE";break;case Za:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(V){let k="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===Un&&(k="ENVMAP_MODE_REFRACTION"),k})(t),u=(function(V){let k="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case _l:k="ENVMAP_BLENDING_MULTIPLY";break;case nu:k="ENVMAP_BLENDING_MIX";break;case ru:k="ENVMAP_BLENDING_ADD"}return k})(t),d=(function(V){let k=V.envMapCubeUVHeight;if(k===null)return null;let Y=Math.log2(k)-2,H=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:H,maxMip:Y}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)})(t),f=(function(V){let k=[];for(let Y in V){let H=V[Y];H!==!1&&k.push("#define "+Y+" "+H)}return k.join(`
`)})(a),y=r.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(g=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Ud("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Dd("linearToOutputTexel",t.outputColorSpace),Nd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),s=No(s),s=Gc(s,t),s=Hc(s,t),o=No(o),o=Gc(o,t),o=Hc(o,t),s=Vc(s),o=Vc(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+s,x=_+m+o,C=zc(r,r.VERTEX_SHADER,v),T=zc(r,r.FRAGMENT_SHADER,x);function R(V){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(y).trim(),Y=r.getShaderInfoLog(C).trim(),H=r.getShaderInfoLog(T).trim(),Z=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,T);else{let ae=kc(r,C,"vertex"),se=kc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+k+`
`+ae+`
`+se)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):Y!==""&&H!==""||(q=!1);q&&(V.diagnostics={runnable:Z,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:H,prefix:m}})}r.deleteShader(C),r.deleteShader(T),D=new Ln(r,y),N=(function(k,Y){let H={},Z=k.getProgramParameter(Y,k.ACTIVE_ATTRIBUTES);for(let q=0;q<Z;q++){let ae=k.getActiveAttrib(Y,q),se=ae.name,ce=1;ae.type===k.FLOAT_MAT2&&(ce=2),ae.type===k.FLOAT_MAT3&&(ce=3),ae.type===k.FLOAT_MAT4&&(ce=4),H[se]={type:ae.type,location:k.getAttribLocation(Y,se),locationSize:ce}}return H})(r,y)}let D,N;r.attachShader(y,C),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),this.getUniforms=function(){return D===void 0&&R(this),D},this.getAttributes=function(){return N===void 0&&R(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(y,Id)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ld++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var Hd=0,Oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fo(e),t.set(e,i)),i}},Fo=class{constructor(e){this.id=Hd++,this.code=e,this.usedTimes=0}};function Vd(n,e,t,i,r,a,s){let o=new wa,l=new Oo,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures,f=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,x,C){let T=x.fog,R=C.geometry,D=m.isMeshStandardMaterial?x.environment:null,N=(m.isMeshStandardMaterial?t:e).get(m.envMap||D),B=N&&N.mapping===Za?N.image.height:null,V=y[m.type];m.precision!==null&&(f=r.getMaxPrecision(m.precision),f!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",f,"instead."));let k=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Y=k!==void 0?k.length:0,H,Z,q,ae,se=0;if(R.morphAttributes.position!==void 0&&(se=1),R.morphAttributes.normal!==void 0&&(se=2),R.morphAttributes.color!==void 0&&(se=3),V){let Qn=ri[V];H=Qn.vertexShader,Z=Qn.fragmentShader}else H=m.vertexShader,Z=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),ae=l.getFragmentShaderID(m);let ce=n.getRenderTarget(),_e=C.isInstancedMesh===!0,ee=C.isBatchedMesh===!0,ne=!!m.map,me=!!m.matcap,ue=!!N,A=!!m.aoMap,M=!!m.lightMap,O=!!m.bumpMap,W=!!m.normalMap,w=!!m.displacementMap,P=!!m.emissiveMap,S=!!m.metalnessMap,L=!!m.roughnessMap,I=m.anisotropy>0,J=m.clearcoat>0,F=m.dispersion>0,K=m.iridescence>0,te=m.sheen>0,$=m.transmission>0,he=I&&!!m.anisotropyMap,pe=J&&!!m.clearcoatMap,fe=J&&!!m.clearcoatNormalMap,Ee=J&&!!m.clearcoatRoughnessMap,Oe=K&&!!m.iridescenceMap,Ue=K&&!!m.iridescenceThicknessMap,xe=te&&!!m.sheenColorMap,Ge=te&&!!m.sheenRoughnessMap,Ye=!!m.specularMap,et=!!m.specularColorMap,ve=!!m.specularIntensityMap,Fe=$&&!!m.transmissionMap,Ze=$&&!!m.thicknessMap,Dr=!!m.gradientMap,mn=!!m.alphaMap,Ot=m.alphaTest>0,mi=!!m.alphaHash,ji=!!m.extensions,U=Ni;m.toneMapped&&(ce!==null&&ce.isXRRenderTarget!==!0||(U=n.toneMapping));let qi={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:Z,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:ae,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:f,batching:ee,batchingColor:ee&&C._colorsTexture!==null,instancing:_e,instancingColor:_e&&C.instanceColor!==null,instancingMorph:_e&&C.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Gi,alphaToCoverage:!!m.alphaToCoverage,map:ne,matcap:me,envMap:ue,envMapMode:ue&&N.mapping,envMapCubeUVHeight:B,aoMap:A,lightMap:M,bumpMap:O,normalMap:W,displacementMap:p&&w,emissiveMap:P,normalMapObjectSpace:W&&m.normalMapType===1,normalMapTangentSpace:W&&m.normalMapType===0,metalnessMap:S,roughnessMap:L,anisotropy:I,anisotropyMap:he,clearcoat:J,clearcoatMap:pe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:F,iridescence:K,iridescenceMap:Oe,iridescenceThicknessMap:Ue,sheen:te,sheenColorMap:xe,sheenRoughnessMap:Ge,specularMap:Ye,specularColorMap:et,specularIntensityMap:ve,transmission:$,transmissionMap:Fe,thicknessMap:Ze,gradientMap:Dr,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:mn,alphaTest:Ot,alphaHash:mi,combine:m.combine,mapUv:ne&&g(m.map.channel),aoMapUv:A&&g(m.aoMap.channel),lightMapUv:M&&g(m.lightMap.channel),bumpMapUv:O&&g(m.bumpMap.channel),normalMapUv:W&&g(m.normalMap.channel),displacementMapUv:w&&g(m.displacementMap.channel),emissiveMapUv:P&&g(m.emissiveMap.channel),metalnessMapUv:S&&g(m.metalnessMap.channel),roughnessMapUv:L&&g(m.roughnessMap.channel),anisotropyMapUv:he&&g(m.anisotropyMap.channel),clearcoatMapUv:pe&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&g(m.sheenRoughnessMap.channel),specularMapUv:Ye&&g(m.specularMap.channel),specularColorMapUv:et&&g(m.specularColorMap.channel),specularIntensityMapUv:ve&&g(m.specularIntensityMap.channel),transmissionMapUv:Fe&&g(m.transmissionMap.channel),thicknessMapUv:Ze&&g(m.thicknessMap.channel),alphaMapUv:mn&&g(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(W||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(ne||mn),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:n.shadowMap.enabled&&v.length>0,shadowMapType:n.shadowMap.type,toneMapping:U,decodeVideoTexture:ne&&m.map.isVideoTexture===!0&&Xe.getTransfer(m.map.colorSpace)===Ke,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===ft,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ji&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ji&&m.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return qi.vertexUv1s=c.has(1),qi.vertexUv2s=c.has(2),qi.vertexUv3s=c.has(3),c.clear(),qi},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(_,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),v.push(o.mask)})(_,m),_.push(n.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=y[m.type],v;if(_){let x=ri[_];v=Ru.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let x=0,C=h.length;x<C;x++){let T=h[x];if(T.cacheKey===_){v=T,++v.usedTimes;break}}return v===void 0&&(v=new Gd(n,_,m,a),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Wd(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jc(){let n=[],e=0,t=[],i=[],r=[];function a(s,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:l,groupOrder:c,renderOrder:s.renderOrder,z:h,group:u},n[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(s,o,l,c,h,u){let d=a(s,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=n.length;s<o;s++){let l=n[s];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(s,o){t.length>1&&t.sort(s||Xd),i.length>1&&i.sort(o||Xc),r.length>1&&r.sort(o||Xc)}}}function jd(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new jc,n.set(e,[r])):t>=i.length?(r=new jc,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function qd(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ce};break;case"SpotLight":t={position:new E,direction:new E,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new E,halfWidth:new E,halfHeight:new E}}return n[e.id]=t,t}}}var Yd=0;function Zd(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jd(n){let e=new qd,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new E);let r=new E,a=new Ae,s=new Ae;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let u=0,d=0,p=0,f=0,y=0,g=0,m=0,_=0,v=0,x=0,C=0;o.sort(Zd);for(let R=0,D=o.length;R<D;R++){let N=o[R],B=N.color,V=N.intensity,k=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=B.r*V,c+=B.g*V,h+=B.b*V;else if(N.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],V);C++}else if(N.isDirectionalLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,q=t.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.directionalShadow[u]=q,i.directionalShadowMap[u]=Y,i.directionalShadowMatrix[u]=N.shadow.matrix,g++}i.directional[u]=H,u++}else if(N.isSpotLight){let H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(B).multiplyScalar(V),H.distance=k,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,i.spot[p]=H;let Z=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,Z.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[p]=Z.matrix,N.castShadow){let q=t.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=Y,_++}p++}else if(N.isRectAreaLight){let H=e.get(N);H.color.copy(B).multiplyScalar(V),H.halfWidth.set(.5*N.width,0,0),H.halfHeight.set(0,.5*N.height,0),i.rectArea[f]=H,f++}else if(N.isPointLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){let Z=N.shadow,q=t.get(N);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=N.shadow.matrix,m++}i.point[d]=H,d++}else if(N.isHemisphereLight){let H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(V),H.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[y]=H,y++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let T=i.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===y&&T.numDirectionalShadows===g&&T.numPointShadows===m&&T.numSpotShadows===_&&T.numSpotMaps===v&&T.numLightProbes===C||(i.directional.length=u,i.spot.length=p,i.rectArea.length=f,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=_+v-x,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=C,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=y,T.numDirectionalShadows=g,T.numPointShadows=m,T.numSpotShadows=_,T.numSpotMaps=v,T.numLightProbes=C,i.version=Yd++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let y=0,g=o.length;y<g;y++){let m=o[y];if(m.isDirectionalLight){let _=i.directional[c];_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),c++}else if(m.isSpotLight){let _=i.spot[u];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),u++}else if(m.isRectAreaLight){let _=i.rectArea[d];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),s.identity(),a.copy(m.matrixWorld),a.premultiply(f),s.extractRotation(a),_.halfWidth.set(.5*m.width,0,0),_.halfHeight.set(0,.5*m.height,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),d++}else if(m.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(m.matrixWorld),_.position.applyMatrix4(f),h++}else if(m.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(m.matrixWorld),_.direction.transformDirection(f),p++}}},state:i}}function qc(n){let e=new Jd(n),t=[],i=[],r={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(a){r.camera=a,t.length=0,i.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)}}}function Kd(n){let e=new WeakMap;return{get:function(t,i=0){let r=e.get(t),a;return r===void 0?(a=new qc(n),e.set(t,[a])):i>=r.length?(a=new qc(n),r.push(a)):a=r[i],a},dispose:function(){e=new WeakMap}}}var Bo=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $d(n,e,t){let i=new kn,r=new ie,a=new ie,s=new je,o=new Bo({depthPacking:3201}),l=new zo,c={},h=t.maxTextureSize,u={[si]:ft,[ft]:si,2:2},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new ct;f.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ot(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let m=this.type;function _(T,R){let D=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,D,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,D,p,y,null)}function v(T,R,D,N){let B=null,V=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)B=V;else if(B=D.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let k=B.uuid,Y=R.uuid,H=c[k];H===void 0&&(H={},c[k]=H);let Z=H[Y];Z===void 0&&(Z=B.clone(),H[Y]=Z,R.addEventListener("dispose",C)),B=Z}return B.visible=R.visible,B.wireframe=R.wireframe,B.side=N===yi?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,D.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(n.properties.get(B).light=D),B}function x(T,R,D,N,B){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let k=e.update(T),Y=T.material;if(Array.isArray(Y)){let H=k.groups;for(let Z=0,q=H.length;Z<q;Z++){let ae=H[Z],se=Y[ae.materialIndex];if(se&&se.visible){let ce=v(T,se,N,B);T.onBeforeShadow(n,T,R,D,k,ce,ae),n.renderBufferDirect(D,null,k,ce,T,ae),T.onAfterShadow(n,T,R,D,k,ce,ae)}}}else if(Y.visible){let H=v(T,Y,N,B);T.onBeforeShadow(n,T,R,D,k,H,null),n.renderBufferDirect(D,null,k,H,T,null),T.onAfterShadow(n,T,R,D,k,H,null)}}let V=T.children;for(let k=0,Y=V.length;k<Y;k++)x(V[k],R,D,N,B)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let D=c[R],N=T.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}this.render=function(T,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let N=n.getRenderTarget(),B=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),k=n.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Y=m!==yi&&this.type===yi,H=m===yi&&this.type!==yi;for(let Z=0,q=T.length;Z<q;Z++){let ae=T[Z],se=ae.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);let ce=se.getFrameExtents();if(r.multiply(ce),a.copy(se.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/ce.x),r.x=a.x*ce.x,se.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/ce.y),r.y=a.y*ce.y,se.mapSize.y=a.y)),se.map===null||Y===!0||H===!0){let ee=this.type!==yi?{minFilter:It,magFilter:It}:{};se.map!==null&&se.map.dispose(),se.map=new Ei(r.x,r.y,ee),se.map.texture.name=ae.name+".shadowMap",se.camera.updateProjectionMatrix()}n.setRenderTarget(se.map),n.clear();let _e=se.getViewportCount();for(let ee=0;ee<_e;ee++){let ne=se.getViewport(ee);s.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),k.viewport(s),se.updateMatrices(ae,ee),i=se.getFrustum(),x(R,D,se.camera,ae,this.type)}se.isPointLightShadow!==!0&&this.type===yi&&_(se,D),se.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(N,B,V)}}var Qd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ep(n){let e=new function(){let S=!1,L=new je,I=null,J=new je(0,0,0,0);return{setMask:function(F){I===F||S||(n.colorMask(F,F,F,F),I=F)},setLocked:function(F){S=F},setClear:function(F,K,te,$,he){he===!0&&(F*=$,K*=$,te*=$),L.set(F,K,te,$),J.equals(L)===!1&&(n.clearColor(F,K,te,$),J.copy(L))},reset:function(){S=!1,I=null,J.set(-1,0,0,0)}}},t=new function(){let S=!1,L=!1,I=null,J=null,F=null;return{setReversed:function(K){L=K},setTest:function(K){K?me(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(K){I===K||S||(n.depthMask(K),I=K)},setFunc:function(K){if(L&&(K=Qd[K]),J!==K){switch(K){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}J=K}},setLocked:function(K){S=K},setClear:function(K){F!==K&&(n.clearDepth(K),F=K)},reset:function(){S=!1,I=null,J=null,F=null}}},i=new function(){let S=!1,L=null,I=null,J=null,F=null,K=null,te=null,$=null,he=null;return{setTest:function(pe){S||(pe?me(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(pe){L===pe||S||(n.stencilMask(pe),L=pe)},setFunc:function(pe,fe,Ee){I===pe&&J===fe&&F===Ee||(n.stencilFunc(pe,fe,Ee),I=pe,J=fe,F=Ee)},setOp:function(pe,fe,Ee){K===pe&&te===fe&&$===Ee||(n.stencilOp(pe,fe,Ee),K=pe,te=fe,$=Ee)},setLocked:function(pe){S=pe},setClear:function(pe){he!==pe&&(n.clearStencil(pe),he=pe)},reset:function(){S=!1,L=null,I=null,J=null,F=null,K=null,te=null,$=null,he=null}}},r=new WeakMap,a=new WeakMap,s={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,y=null,g=null,m=null,_=null,v=new Ce(0,0,0),x=0,C=!1,T=null,R=null,D=null,N=null,B=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Y>=2);let Z=null,q={},ae=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ce=new je().fromArray(ae),_e=new je().fromArray(se);function ee(S,L,I,J){let F=new Uint8Array(4),K=n.createTexture();n.bindTexture(S,K),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<I;te++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(L,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,F):n.texImage2D(L+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,F);return K}let ne={};function me(S){s[S]!==!0&&(n.enable(S),s[S]=!0)}function ue(S){s[S]!==!1&&(n.disable(S),s[S]=!1)}ne[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),e.setClear(0,0,0,1),t.setClear(1),i.setClear(0),me(n.DEPTH_TEST),t.setFunc(3),W(!1),w(1),me(n.CULL_FACE),O(0);let A={[an]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};A[103]=n.MIN,A[104]=n.MAX;let M={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[js]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[qs]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function O(S,L,I,J,F,K,te,$,he,pe){if(S!==0){if(u===!1&&(me(n.BLEND),u=!0),S===5)F=F||L,K=K||I,te=te||J,L===p&&F===g||(n.blendEquationSeparate(A[L],A[F]),p=L,g=F),I===f&&J===y&&K===m&&te===_||(n.blendFuncSeparate(M[I],M[J],M[K],M[te]),f=I,y=J,m=K,_=te),$.equals(v)!==!1&&he===x||(n.blendColor($.r,$.g,$.b,he),v.copy($),x=he),d=S,C=!1;else if(S!==d||pe!==C){if(p===an&&g===an||(n.blendEquation(n.FUNC_ADD),p=an,g=an),pe)switch(S){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}f=null,y=null,m=null,_=null,v.set(0,0,0),x=0,d=S,C=pe}}else u===!0&&(ue(n.BLEND),u=!1)}function W(S){T!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),T=S)}function w(S){S!==0?(me(n.CULL_FACE),S!==R&&(S===1?n.cullFace(n.BACK):S===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),R=S}function P(S,L,I){S?(me(n.POLYGON_OFFSET_FILL),N===L&&B===I||(n.polygonOffset(L,I),N=L,B=I)):ue(n.POLYGON_OFFSET_FILL)}return{buffers:{color:e,depth:t,stencil:i},enable:me,disable:ue,bindFramebuffer:function(S,L){return o[S]!==L&&(n.bindFramebuffer(S,L),o[S]=L,S===n.DRAW_FRAMEBUFFER&&(o[n.FRAMEBUFFER]=L),S===n.FRAMEBUFFER&&(o[n.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(S,L){let I=c,J=!1;if(S){I=l.get(L),I===void 0&&(I=[],l.set(L,I));let F=S.textures;if(I.length!==F.length||I[0]!==n.COLOR_ATTACHMENT0){for(let K=0,te=F.length;K<te;K++)I[K]=n.COLOR_ATTACHMENT0+K;I.length=F.length,J=!0}}else I[0]!==n.BACK&&(I[0]=n.BACK,J=!0);J&&n.drawBuffers(I)},useProgram:function(S){return h!==S&&(n.useProgram(S),h=S,!0)},setBlending:O,setMaterial:function(S,L){S.side===2?ue(n.CULL_FACE):me(n.CULL_FACE);let I=S.side===ft;L&&(I=!I),W(I),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),t.setFunc(S.depthFunc),t.setTest(S.depthTest),t.setMask(S.depthWrite),e.setMask(S.colorWrite);let J=S.stencilWrite;i.setTest(J),J&&(i.setMask(S.stencilWriteMask),i.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),i.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:W,setCullFace:w,setLineWidth:function(S){S!==D&&(k&&n.lineWidth(S),D=S)},setPolygonOffset:P,setScissorTest:function(S){S?me(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=n.TEXTURE0+V-1),Z!==S&&(n.activeTexture(S),Z=S)},bindTexture:function(S,L,I){I===void 0&&(I=Z===null?n.TEXTURE0+V-1:Z);let J=q[I];J===void 0&&(J={type:void 0,texture:void 0},q[I]=J),J.type===S&&J.texture===L||(Z!==I&&(n.activeTexture(I),Z=I),n.bindTexture(S,L||ne[S]),J.type=S,J.texture=L)},unbindTexture:function(){let S=q[Z];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,L){let I=a.get(L);I===void 0&&(I=new WeakMap,a.set(L,I));let J=I.get(S);J===void 0&&(J=n.getUniformBlockIndex(L,S.name),I.set(S,J))},uniformBlockBinding:function(S,L){let I=a.get(L).get(S);r.get(L)!==I&&(n.uniformBlockBinding(L,I,S.__bindingPointIndex),r.set(L,I))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ce.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),ce.copy(S))},viewport:function(S){_e.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),_e.copy(S))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),s={},Z=null,q={},o={},l=new WeakMap,c=[],h=null,u=!1,d=null,p=null,f=null,y=null,g=null,m=null,_=null,v=new Ce(0,0,0),x=0,C=!1,T=null,R=null,D=null,N=null,B=null,ce.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),e.reset(),t.reset(),i.reset()}}}function Yc(n,e,t,i){let r=(function(a){switch(a){case bi:case sh:return{byteLength:1,components:1};case mr:case oh:case Rr:return{byteLength:2,components:1};case yl:case Ml:return{byteLength:2,components:4};case ln:case xl:case Si:return{byteLength:4,components:1};case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)})(i);switch(t){case ch:case uh:return n*e;case dh:return n*e*2;case ph:case Sl:return n*e/r.components*r.byteLength;case mh:case bl:return n*e*2/r.components*r.byteLength;case hh:return n*e*3/r.components*r.byteLength;case zt:case El:return n*e*4/r.components*r.byteLength;case ua:case da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qs:case to:return Math.max(n,16)*Math.max(e,8)/4;case $s:case eo:return Math.max(n,8)*Math.max(e,8)/2;case io:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fa:case yo:case Mo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fh:case So:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bo:case Eo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tp(n,e,t,i,r,a,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,M){return p?new OffscreenCanvas(A,M):ba("canvas")}function y(A,M,O){let W=1,w=ue(A);if((w.width>O||w.height>O)&&(W=O/Math.max(w.width,w.height)),W<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let P=Math.floor(W*w.width),S=Math.floor(W*w.height);u===void 0&&(u=f(P,S));let L=M?f(P,S):u;return L.width=P,L.height=S,L.getContext("2d").drawImage(A,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+P+"x"+S+")."),L}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),A}return A}function g(A){return A.generateMipmaps&&A.minFilter!==It&&A.minFilter!==ai}function m(A){n.generateMipmap(A)}function _(A,M,O,W,w=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let P=M;if(M===n.RED&&(O===n.FLOAT&&(P=n.R32F),O===n.HALF_FLOAT&&(P=n.R16F),O===n.UNSIGNED_BYTE&&(P=n.R8)),M===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(P=n.R8UI),O===n.UNSIGNED_SHORT&&(P=n.R16UI),O===n.UNSIGNED_INT&&(P=n.R32UI),O===n.BYTE&&(P=n.R8I),O===n.SHORT&&(P=n.R16I),O===n.INT&&(P=n.R32I)),M===n.RG&&(O===n.FLOAT&&(P=n.RG32F),O===n.HALF_FLOAT&&(P=n.RG16F),O===n.UNSIGNED_BYTE&&(P=n.RG8)),M===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(P=n.RG8UI),O===n.UNSIGNED_SHORT&&(P=n.RG16UI),O===n.UNSIGNED_INT&&(P=n.RG32UI),O===n.BYTE&&(P=n.RG8I),O===n.SHORT&&(P=n.RG16I),O===n.INT&&(P=n.RG32I)),M===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(P=n.RGB8UI),O===n.UNSIGNED_SHORT&&(P=n.RGB16UI),O===n.UNSIGNED_INT&&(P=n.RGB32UI),O===n.BYTE&&(P=n.RGB8I),O===n.SHORT&&(P=n.RGB16I),O===n.INT&&(P=n.RGB32I)),M===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(P=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(P=n.RGBA16UI),O===n.UNSIGNED_INT&&(P=n.RGBA32UI),O===n.BYTE&&(P=n.RGBA8I),O===n.SHORT&&(P=n.RGBA16I),O===n.INT&&(P=n.RGBA32I)),M===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(P=n.RGB9_E5),M===n.RGBA){let S=w?xa:Xe.getTransfer(W);O===n.FLOAT&&(P=n.RGBA32F),O===n.HALF_FLOAT&&(P=n.RGBA16F),O===n.UNSIGNED_BYTE&&(P=S===Ke?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)}return P!==n.R16F&&P!==n.R32F&&P!==n.RG16F&&P!==n.RG32F&&P!==n.RGBA16F&&P!==n.RGBA32F||e.get("EXT_color_buffer_float"),P}function v(A,M){let O;return A?M===null||M===ln||M===Nn?O=n.DEPTH24_STENCIL8:M===Si?O=n.DEPTH32F_STENCIL8:M===mr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ln||M===Nn?O=n.DEPTH_COMPONENT24:M===Si?O=n.DEPTH_COMPONENT32F:M===mr&&(O=n.DEPTH_COMPONENT16),O}function x(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=A.target;M.removeEventListener("dispose",C),(function(O){let W=i.get(O);if(W.__webglInit===void 0)return;let w=O.source,P=d.get(w);if(P){let S=P[W.__cacheKey];S.usedTimes--,S.usedTimes===0&&R(O),Object.keys(P).length===0&&d.delete(w)}i.remove(O)})(M),M.isVideoTexture&&h.delete(M)}function T(A){let M=A.target;M.removeEventListener("dispose",T),(function(O){let W=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(W.__webglFramebuffer[P]))for(let S=0;S<W.__webglFramebuffer[P].length;S++)n.deleteFramebuffer(W.__webglFramebuffer[P][S]);else n.deleteFramebuffer(W.__webglFramebuffer[P]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[P])}else{if(Array.isArray(W.__webglFramebuffer))for(let P=0;P<W.__webglFramebuffer.length;P++)n.deleteFramebuffer(W.__webglFramebuffer[P]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let P=0;P<W.__webglColorRenderbuffer.length;P++)W.__webglColorRenderbuffer[P]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[P]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}let w=O.textures;for(let P=0,S=w.length;P<S;P++){let L=i.get(w[P]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),s.memory.textures--),i.remove(w[P])}i.remove(O)})(M)}function R(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let O=A.source;delete d.get(O)[M.__cacheKey],s.memory.textures--}let D=0;function N(A,M){let O=i.get(A);if(A.isVideoTexture&&(function(W){let w=s.render.frame;h.get(W)!==w&&(h.set(W,w),W.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(W.complete!==!1)return void Z(O,A,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+M)}let B={[Js]:n.REPEAT,[pr]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},V={[It]:n.NEAREST,[du]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[cs]:n.LINEAR_MIPMAP_NEAREST,[Cn]:n.LINEAR_MIPMAP_LINEAR},k={512:n.NEVER,519:n.ALWAYS,513:n.LESS,[gh]:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Y(A,M){if(M.type!==Si||e.has("OES_texture_float_linear")!==!1||M.magFilter!==ai&&M.magFilter!==cs&&M.magFilter!==Fr&&M.magFilter!==Cn&&M.minFilter!==ai&&M.minFilter!==cs&&M.minFilter!==Fr&&M.minFilter!==Cn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,B[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,B[M.wrapT]),A!==n.TEXTURE_3D&&A!==n.TEXTURE_2D_ARRAY||n.texParameteri(A,n.TEXTURE_WRAP_R,B[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,V[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,V[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,k[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===It||M.minFilter!==Fr&&M.minFilter!==Cn||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function H(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));let W=M.source,w=d.get(W);w===void 0&&(w={},d.set(W,w));let P=(function(S){let L=[];return L.push(S.wrapS),L.push(S.wrapT),L.push(S.wrapR||0),L.push(S.magFilter),L.push(S.minFilter),L.push(S.anisotropy),L.push(S.internalFormat),L.push(S.format),L.push(S.type),L.push(S.generateMipmaps),L.push(S.premultiplyAlpha),L.push(S.flipY),L.push(S.unpackAlignment),L.push(S.colorSpace),L.join()})(M);if(P!==A.__cacheKey){w[P]===void 0&&(w[P]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),w[P].usedTimes++;let S=w[A.__cacheKey];S!==void 0&&(w[A.__cacheKey].usedTimes--,S.usedTimes===0&&R(M)),A.__cacheKey=P,A.__webglTexture=w[P].texture}return O}function Z(A,M,O){let W=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=n.TEXTURE_3D);let w=H(A,M),P=M.source;t.bindTexture(W,A.__webglTexture,n.TEXTURE0+O);let S=i.get(P);if(P.version!==S.__version||w===!0){t.activeTexture(n.TEXTURE0+O);let L=Xe.getPrimaries(Xe.workingColorSpace),I=M.colorSpace===Rn?null:Xe.getPrimaries(M.colorSpace),J=M.colorSpace===Rn||L===I?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let F=y(M.image,!1,r.maxTextureSize);F=me(M,F);let K=a.convert(M.format,M.colorSpace),te=a.convert(M.type),$,he=_(M.internalFormat,K,te,M.colorSpace,M.isVideoTexture);Y(W,M);let pe=M.mipmaps,fe=M.isVideoTexture!==!0,Ee=S.__version===void 0||w===!0,Oe=P.dataReady,Ue=x(M,F);if(M.isDepthTexture)he=v(M.format===On,M.type),Ee&&(fe?t.texStorage2D(n.TEXTURE_2D,1,he,F.width,F.height):t.texImage2D(n.TEXTURE_2D,0,he,F.width,F.height,0,K,te,null));else if(M.isDataTexture)if(pe.length>0){fe&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,he,pe[0].width,pe[0].height);for(let xe=0,Ge=pe.length;xe<Ge;xe++)$=pe[xe],fe?Oe&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,$.width,$.height,K,te,$.data):t.texImage2D(n.TEXTURE_2D,xe,he,$.width,$.height,0,K,te,$.data);M.generateMipmaps=!1}else fe?(Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,he,F.width,F.height),Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,F.width,F.height,K,te,F.data)):t.texImage2D(n.TEXTURE_2D,0,he,F.width,F.height,0,K,te,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,he,pe[0].width,pe[0].height,F.depth);for(let xe=0,Ge=pe.length;xe<Ge;xe++)if($=pe[xe],M.format!==zt)if(K!==null)if(fe){if(Oe)if(M.layerUpdates.size>0){let Ye=Yc($.width,$.height,M.format,M.type);for(let et of M.layerUpdates){let ve=$.data.subarray(et*Ye/$.data.BYTES_PER_ELEMENT,(et+1)*Ye/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,et,$.width,$.height,1,K,ve,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,$.width,$.height,F.depth,K,$.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,he,$.width,$.height,F.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,$.width,$.height,F.depth,K,te,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,he,$.width,$.height,F.depth,0,K,te,$.data)}else{fe&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ue,he,pe[0].width,pe[0].height);for(let xe=0,Ge=pe.length;xe<Ge;xe++)$=pe[xe],M.format!==zt?K!==null?fe?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,$.width,$.height,K,$.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,he,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Oe&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,$.width,$.height,K,te,$.data):t.texImage2D(n.TEXTURE_2D,xe,he,$.width,$.height,0,K,te,$.data)}else if(M.isDataArrayTexture)if(fe){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,he,F.width,F.height,F.depth),Oe)if(M.layerUpdates.size>0){let xe=Yc(F.width,F.height,M.format,M.type);for(let Ge of M.layerUpdates){let Ye=F.data.subarray(Ge*xe/F.data.BYTES_PER_ELEMENT,(Ge+1)*xe/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ge,F.width,F.height,1,K,te,Ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,K,te,F.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,F.width,F.height,F.depth,0,K,te,F.data);else if(M.isData3DTexture)fe?(Ee&&t.texStorage3D(n.TEXTURE_3D,Ue,he,F.width,F.height,F.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,K,te,F.data)):t.texImage3D(n.TEXTURE_3D,0,he,F.width,F.height,F.depth,0,K,te,F.data);else if(M.isFramebufferTexture){if(Ee)if(fe)t.texStorage2D(n.TEXTURE_2D,Ue,he,F.width,F.height);else{let xe=F.width,Ge=F.height;for(let Ye=0;Ye<Ue;Ye++)t.texImage2D(n.TEXTURE_2D,Ye,he,xe,Ge,0,K,te,null),xe>>=1,Ge>>=1}}else if(pe.length>0){if(fe&&Ee){let xe=ue(pe[0]);t.texStorage2D(n.TEXTURE_2D,Ue,he,xe.width,xe.height)}for(let xe=0,Ge=pe.length;xe<Ge;xe++)$=pe[xe],fe?Oe&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,K,te,$):t.texImage2D(n.TEXTURE_2D,xe,he,K,te,$);M.generateMipmaps=!1}else if(fe){if(Ee){let xe=ue(F);t.texStorage2D(n.TEXTURE_2D,Ue,he,xe.width,xe.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K,te,F)}else t.texImage2D(n.TEXTURE_2D,0,he,K,te,F);g(M)&&m(W),S.__version=P.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function q(A,M,O,W,w,P){let S=a.convert(O.format,O.colorSpace),L=a.convert(O.type),I=_(O.internalFormat,S,L,O.colorSpace);if(!i.get(M).__hasExternalTextures){let J=Math.max(1,M.width>>P),F=Math.max(1,M.height>>P);w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?t.texImage3D(w,P,I,J,F,M.depth,0,S,L,null):t.texImage2D(w,P,I,J,F,0,S,L,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ne(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,w,i.get(O).__webglTexture,0,ee(M)):(w===n.TEXTURE_2D||w>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,w,i.get(O).__webglTexture,P),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,M,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let W=M.depthTexture,w=W&&W.isDepthTexture?W.type:null,P=v(M.stencilBuffer,w),S=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=ee(M);ne(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,P,M.width,M.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,P,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,P,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,S,n.RENDERBUFFER,A)}else{let W=M.textures;for(let w=0;w<W.length;w++){let P=W[w],S=a.convert(P.format,P.colorSpace),L=a.convert(P.type),I=_(P.internalFormat,S,L,P.colorSpace),J=ee(M);O&&ne(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,I,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,I,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,I,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(A){let M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){let w=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",w)};W.addEventListener("dispose",w),M.__depthDisposeCallback=w}M.__boundDepthTexture=W}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(W,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,W),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(w.depthTexture).__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let P=i.get(w.depthTexture).__webglTexture,S=ee(w);if(w.depthTexture.format===fr)ne(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,P,0,S):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,P,0);else{if(w.depthTexture.format!==On)throw new Error("Unknown depthTexture format");ne(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,P,0,S):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,P,0)}})(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=n.createRenderbuffer(),ae(M.__webglDepthbuffer[W],A,!1);else{let w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=M.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,P),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,P)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ae(M.__webglDepthbuffer,A,!1);else{let W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,w),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,w)}t.bindFramebuffer(n.FRAMEBUFFER,null)}let ce=[],_e=[];function ee(A){return Math.min(r.maxSamples,A.samples)}function ne(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(A,M){let O=A.colorSpace,W=A.format,w=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Gi&&O!==Rn&&(Xe.getTransfer(O)===Ke?W===zt&&w===bi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=D;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A},this.resetTextureUnits=function(){D=0},this.setTexture2D=N,this.setTexture2DArray=function(A,M){let O=i.get(A);A.version>0&&O.__version!==A.version?Z(O,A,M):t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+M)},this.setTexture3D=function(A,M){let O=i.get(A);A.version>0&&O.__version!==A.version?Z(O,A,M):t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(A,M){let O=i.get(A);A.version>0&&O.__version!==A.version?(function(W,w,P){if(w.image.length!==6)return;let S=H(W,w),L=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+P);let I=i.get(L);if(L.version!==I.__version||S===!0){t.activeTexture(n.TEXTURE0+P);let J=Xe.getPrimaries(Xe.workingColorSpace),F=w.colorSpace===Rn?null:Xe.getPrimaries(w.colorSpace),K=w.colorSpace===Rn||J===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let te=w.isCompressedTexture||w.image[0].isCompressedTexture,$=w.image[0]&&w.image[0].isDataTexture,he=[];for(let ve=0;ve<6;ve++)he[ve]=te||$?$?w.image[ve].image:w.image[ve]:y(w.image[ve],!0,r.maxCubemapSize),he[ve]=me(w,he[ve]);let pe=he[0],fe=a.convert(w.format,w.colorSpace),Ee=a.convert(w.type),Oe=_(w.internalFormat,fe,Ee,w.colorSpace),Ue=w.isVideoTexture!==!0,xe=I.__version===void 0||S===!0,Ge=L.dataReady,Ye,et=x(w,pe);if(Y(n.TEXTURE_CUBE_MAP,w),te){Ue&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,et,Oe,pe.width,pe.height);for(let ve=0;ve<6;ve++){Ye=he[ve].mipmaps;for(let Fe=0;Fe<Ye.length;Fe++){let Ze=Ye[Fe];w.format!==zt?fe!==null?Ue?Ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ze.width,Ze.height,fe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,Oe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,0,0,Ze.width,Ze.height,fe,Ee,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe,Oe,Ze.width,Ze.height,0,fe,Ee,Ze.data)}}}else{if(Ye=w.mipmaps,Ue&&xe){Ye.length>0&&et++;let ve=ue(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,et,Oe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if($){Ue?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,he[ve].width,he[ve].height,fe,Ee,he[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Oe,he[ve].width,he[ve].height,0,fe,Ee,he[ve].data);for(let Fe=0;Fe<Ye.length;Fe++){let Ze=Ye[Fe].image[ve].image;Ue?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,Ze.width,Ze.height,fe,Ee,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,Oe,Ze.width,Ze.height,0,fe,Ee,Ze.data)}}else{Ue?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe,Ee,he[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Oe,fe,Ee,he[ve]);for(let Fe=0;Fe<Ye.length;Fe++){let Ze=Ye[Fe];Ue?Ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,0,0,fe,Ee,Ze.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Fe+1,Oe,fe,Ee,Ze.image[ve])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),I.__version=L.version,w.onUpdate&&w.onUpdate(w)}W.__version=w.version})(O,A,M):t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(A,M,O){let W=i.get(A);M!==void 0&&q(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&se(A)},this.setupRenderTarget=function(A){let M=A.texture,O=i.get(A),W=i.get(M);A.addEventListener("dispose",T);let w=A.textures,P=A.isWebGLCubeRenderTarget===!0,S=w.length>1;if(S||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=M.version,s.memory.textures++),P){O.__webglFramebuffer=[];for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[L]=[];for(let I=0;I<M.mipmaps.length;I++)O.__webglFramebuffer[L][I]=n.createFramebuffer()}else O.__webglFramebuffer[L]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let L=0;L<M.mipmaps.length;L++)O.__webglFramebuffer[L]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(S)for(let L=0,I=w.length;L<I;L++){let J=i.get(w[L]);J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture(),s.memory.textures++)}if(A.samples>0&&ne(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let L=0;L<w.length;L++){let I=w[L];O.__webglColorRenderbuffer[L]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[L]);let J=a.convert(I.format,I.colorSpace),F=a.convert(I.type),K=_(I.internalFormat,J,F,I.colorSpace,A.isXRRenderTarget===!0),te=ee(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,te,K,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,O.__webglColorRenderbuffer[L])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(P){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Y(n.TEXTURE_CUBE_MAP,M);for(let L=0;L<6;L++)if(M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)q(O.__webglFramebuffer[L][I],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,I);else q(O.__webglFramebuffer[L],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let L=0,I=w.length;L<I;L++){let J=w[L],F=i.get(J);t.bindTexture(n.TEXTURE_2D,F.__webglTexture),Y(n.TEXTURE_2D,J),q(O.__webglFramebuffer,A,J,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,0),g(J)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let L=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(L=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(L,W.__webglTexture),Y(L,M),M.mipmaps&&M.mipmaps.length>0)for(let I=0;I<M.mipmaps.length;I++)q(O.__webglFramebuffer[I],A,M,n.COLOR_ATTACHMENT0,L,I);else q(O.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,L,0);g(M)&&m(L),t.unbindTexture()}A.depthBuffer&&se(A)},this.updateRenderTargetMipmap=function(A){let M=A.textures;for(let O=0,W=M.length;O<W;O++){let w=M[O];if(g(w)){let P=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,S=i.get(w).__webglTexture;t.bindTexture(P,S),m(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ne(A)===!1){let M=A.textures,O=A.width,W=A.height,w=n.COLOR_BUFFER_BIT,P=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,S=i.get(A),L=M.length>1;if(L)for(let I=0;I<M.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let I=0;I<M.length;I++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(w|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(w|=n.STENCIL_BUFFER_BIT)),L){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,S.__webglColorRenderbuffer[I]);let J=i.get(M[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,w,n.NEAREST),l===!0&&(ce.length=0,_e.length=0,ce.push(n.COLOR_ATTACHMENT0+I),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ce.push(P),_e.push(P),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),L)for(let I=0;I<M.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,S.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,S.__webglColorRenderbuffer[I]);let J=i.get(M[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}},this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ne}function ip(n,e){return{convert:function(t,i=""){let r,a=Xe.getTransfer(i);if(t===bi)return n.UNSIGNED_BYTE;if(t===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(t===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===sh)return n.BYTE;if(t===oh)return n.SHORT;if(t===mr)return n.UNSIGNED_SHORT;if(t===xl)return n.INT;if(t===ln)return n.UNSIGNED_INT;if(t===Si)return n.FLOAT;if(t===Rr)return n.HALF_FLOAT;if(t===ch)return n.ALPHA;if(t===hh)return n.RGB;if(t===zt)return n.RGBA;if(t===uh)return n.LUMINANCE;if(t===dh)return n.LUMINANCE_ALPHA;if(t===fr)return n.DEPTH_COMPONENT;if(t===On)return n.DEPTH_STENCIL;if(t===ph)return n.RED;if(t===Sl)return n.RED_INTEGER;if(t===mh)return n.RG;if(t===bl)return n.RG_INTEGER;if(t===El)return n.RGBA_INTEGER;if(t===ua||t===da||t===pa||t===ma)if(a===Ke){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===$s||t===Qs||t===eo||t===to){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===$s)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Qs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===io||t===no||t===ro){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===io||t===no)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===ro)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===ao||t===so||t===oo||t===lo||t===co||t===ho||t===uo||t===po||t===mo||t===fo||t===go||t===vo||t===_o||t===xo){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===ao)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===so)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===oo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===lo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===co)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===ho)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===uo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===po)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===mo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===go)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_o)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===fa||t===yo||t===Mo){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===fa)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===fh||t===So||t===bo||t===Eo){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(t===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Nn?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var ko=class extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},np={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(np)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new kt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ui({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ho=class extends Fi{constructor(e,t){super();let i=this,r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,y=new Go,g=t.getContextAttributes(),m=null,_=null,v=[],x=[],C=new ie,T=null,R=new St;R.layers.enable(1),R.viewport=new je;let D=new St;D.layers.enable(2),D.viewport=new je;let N=[R,D],B=new ko;B.layers.enable(1),B.layers.enable(2);let V=null,k=null;function Y(ee){let ne=x.indexOf(ee.inputSource);if(ne===-1)return;let me=v[ne];me!==void 0&&(me.update(ee.inputSource,ee.frame,c||s),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function H(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<v.length;ee++){let ne=x[ee];ne!==null&&(x[ee]=null,v[ee].disconnect(ne))}V=null,k=null,y.reset(),e.setRenderTarget(m),p=null,d=null,u=null,r=null,_=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}function Z(ee){for(let ne=0;ne<ee.removed.length;ne++){let me=ee.removed[ne],ue=x.indexOf(me);ue>=0&&(x[ue]=null,v[ue].disconnect(me))}for(let ne=0;ne<ee.added.length;ne++){let me=ee.added[ne],ue=x.indexOf(me);if(ue===-1){for(let M=0;M<v.length;M++){if(M>=x.length){x.push(me),ue=M;break}if(x[M]===null){x[M]=me,ue=M;break}}if(ue===-1)break}let A=v[ue];A&&A.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=v[ee];return ne===void 0&&(ne=new hr,v[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=v[ee];return ne===void 0&&(ne=new hr,v[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=v[ee];return ne===void 0&&(ne=new hr,v[ee]=ne),ne.getHandSpace()},this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ei(p.framebufferWidth,p.framebufferHeight,{format:zt,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,me=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?On:fr,me=g.stencil?Nn:ln);let A={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(A),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Ei(d.textureWidth,d.textureHeight,{format:zt,type:bi,depthTexture:new La(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};let q=new E,ae=new E;function se(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ne=ee.near,me=ee.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(me=y.depthFar)),B.near=D.near=R.near=ne,B.far=D.far=R.far=me,V===B.near&&k===B.far||(r.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,k=B.far);let ue=ee.parent,A=B.cameras;se(B,ue);for(let M=0;M<A.length;M++)se(A[M],ue);A.length===2?(function(M,O,W){q.setFromMatrixPosition(O.matrixWorld),ae.setFromMatrixPosition(W.matrixWorld);let w=q.distanceTo(ae),P=O.projectionMatrix.elements,S=W.projectionMatrix.elements,L=P[14]/(P[10]-1),I=P[14]/(P[10]+1),J=(P[9]+1)/P[5],F=(P[9]-1)/P[5],K=(P[8]-1)/P[0],te=(S[8]+1)/S[0],$=L*K,he=L*te,pe=w/(-K+te),fe=pe*-K;if(O.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(fe),M.translateZ(pe),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),P[10]===-1)M.projectionMatrix.copy(O.projectionMatrix),M.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let Ee=L+pe,Oe=I+pe,Ue=$-fe,xe=he+(w-fe),Ge=J*I/Oe*Ee,Ye=F*I/Oe*Ee;M.projectionMatrix.makePerspective(Ue,xe,Ge,Ye,Ee,Oe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(B,R,D):B.projectionMatrix.copy(R.projectionMatrix),(function(M,O,W){W===null?M.matrix.copy(O.matrixWorld):(M.matrix.copy(W.matrixWorld),M.matrix.invert(),M.matrix.multiply(O.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(O.projectionMatrix),M.projectionMatrixInverse.copy(O.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*wo*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(ee,B,ue)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)};let ce=null,_e=new yh;_e.setAnimationLoop((function(ee,ne){if(h=ne.getViewerPose(c||s),f=ne,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;me.length!==B.cameras.length&&(B.cameras.length=0,ue=!0);for(let M=0;M<me.length;M++){let O=me[M],W=null;if(p!==null)W=p.getViewport(O);else{let P=u.getViewSubImage(d,O);W=P.viewport,M===0&&(e.setRenderTargetTextures(_,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let w=N[M];w===void 0&&(w=new St,w.layers.enable(M),w.viewport=new je,N[M]=w),w.matrix.fromArray(O.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(O.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(W.x,W.y,W.width,W.height),M===0&&(B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ue===!0&&B.cameras.push(w)}let A=r.enabledFeatures;if(A&&A.includes("depth-sensing")){let M=u.getDepthInformation(me[0]);M&&M.isValid&&M.texture&&y.init(e,M,r.renderState)}}for(let me=0;me<v.length;me++){let ue=x[me],A=v[me];ue!==null&&A!==void 0&&A.update(ue,ne,c||s)}ce&&ce(ee,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),f=null})),this.setAnimationLoop=function(ee){ce=ee},this.dispose=function(){}}},nn=new hi,rp=new Ae;function ap(n,e){function t(r,a){r.matrixAutoUpdate===!0&&r.updateMatrix(),a.value.copy(r.matrix)}function i(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,t(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,t(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,t(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,a.side===ft&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,t(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),a.side===ft&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,t(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,t(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=e.get(a),o=s.envMap,l=s.envMapRotation;o&&(r.envMap.value=o,nn.copy(l),nn.x*=-1,nn.y*=-1,nn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),r.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(nn)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap&&(r.lightMap.value=a.lightMap,r.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,r.lightMapTransform)),a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,a){a.color.getRGB(r.fogColor.value,xh(n)),a.isFog?(r.fogNear.value=a.near,r.fogFar.value=a.far):a.isFogExp2&&(r.fogDensity.value=a.density)},refreshMaterialUniforms:function(r,a,s,o,l){a.isMeshBasicMaterial||a.isMeshLambertMaterial?i(r,a):a.isMeshToonMaterial?(i(r,a),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,a)):a.isMeshPhongMaterial?(i(r,a),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,a)):a.isMeshStandardMaterial?(i(r,a),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,a),a.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ft&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,a,l)):a.isMeshMatcapMaterial?(i(r,a),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,a)):a.isMeshDepthMaterial?i(r,a):a.isMeshDistanceMaterial?(i(r,a),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,a)):a.isMeshNormalMaterial?i(r,a):a.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,a),a.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,a)):a.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a,s,o):a.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,a):a.isShadowMaterial?(r.color.value.copy(a.color),r.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function sp(n,e,t,i){let r={},a={},s=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let y=u.value,g=d+"_"+p;if(f[g]===void 0)return f[g]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let m=f[g];if(typeof y=="number"||typeof y=="boolean"){if(m!==y)return f[g]=y,!0}else if(m.equals(y)===!1)return m.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete a[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(g){let m=g.uniforms,_=0,v=16;for(let C=0,T=m.length;C<T;C++){let R=Array.isArray(m[C])?m[C]:[m[C]];for(let D=0,N=R.length;D<N;D++){let B=R[D],V=Array.isArray(B.value)?B.value:[B.value];for(let k=0,Y=V.length;k<Y;k++){let H=c(V[k]),Z=_%v,q=Z%H.boundary,ae=Z+q;_+=q,ae!==0&&v-ae<H.storage&&(_+=v-ae),B.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=H.storage}}}let x=_%v;x>0&&(_+=v-x),g.__size=_,g.__cache={}})(u),p=(function(g){let m=(function(){for(let C=0;C<o;C++)if(s.indexOf(C)===-1)return s.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();g.__bindingPointIndex=m;let _=n.createBuffer(),v=g.__size,x=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,v,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,_),_})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let y=e.render.frame;a[u.id]!==y&&((function(g){let m=r[g.id],_=g.uniforms,v=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let x=0,C=_.length;x<C;x++){let T=Array.isArray(_[x])?_[x]:[_[x]];for(let R=0,D=T.length;R<D;R++){let N=T[R];if(l(N,x,R,v)===!0){let B=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],k=0;for(let Y=0;Y<V.length;Y++){let H=V[Y],Z=c(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+k,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)})(u),a[u.id]=y)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);s=[],r={},a={}}}}var Da=class{constructor(e={}){let{canvas:t=mu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;let p=new Uint32Array(4),f=new Int32Array(4),y=null,g=null,m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Ni,this.toneMappingExposure=1;let v=this,x=!1,C=0,T=0,R=null,D=-1,N=null,B=new je,V=new je,k=null,Y=new Ce(0),H=0,Z=t.width,q=t.height,ae=1,se=null,ce=null,_e=new je(0,0,Z,q),ee=new je(0,0,Z,q),ne=!1,me=new kn,ue=!1,A=!1,M=new Ae,O=new Ae,W=new E,w=new je,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function L(){return R===null?ae:1}let I,J,F,K,te,$,he,pe,fe,Ee,Oe,Ue,xe,Ge,Ye,et,ve,Fe,Ze,Dr,mn,Ot,mi,ji,U=i;function qi(b,G){return t.getContext(b,G)}try{let b={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Hl,!1),t.addEventListener("webglcontextrestored",Vl,!1),t.addEventListener("webglcontextcreationerror",Wl,!1),U===null){let G="webgl2";if(U=qi(G,b),U===null)throw qi(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Qn(){I=new ku(U),I.init(),Ot=new ip(U,I),J=new Ou(U,I,e,Ot),F=new ep(U),J.reverseDepthBuffer&&F.buffers.depth.setReversed(!0),K=new Vu(U),te=new Wd,$=new tp(U,I,F,te,J,Ot,K),he=new Bu(v),pe=new zu(v),fe=new Iu(U),mi=new Uu(U,fe),Ee=new Gu(U,fe,K,mi),Oe=new Xu(U,Ee,fe,K),Ze=new Wu(U,J,$),et=new Fu(te),Ue=new Vd(v,he,pe,I,J,mi,et),xe=new ap(v,te),Ge=new jd,Ye=new Kd(I),Fe=new Du(v,he,pe,F,Oe,d,l),ve=new $d(v,Oe,J),ji=new sp(U,K,J,F),Dr=new Nu(U,I,K),mn=new Hu(U,I,K),K.programs=Ue.programs,v.capabilities=J,v.extensions=I,v.properties=te,v.renderLists=Ge,v.shadowMap=ve,v.state=F,v.info=K}Qn();let dt=new Ho(v,U);function Hl(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Vl(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let b=K.autoReset,G=ve.enabled,j=ve.autoUpdate,Q=ve.needsUpdate,X=ve.type;Qn(),K.autoReset=b,ve.enabled=G,ve.autoUpdate=j,ve.needsUpdate=Q,ve.type=X}function Wl(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xl(b){let G=b.target;G.removeEventListener("dispose",Xl),(function(j){(function(Q){let X=te.get(Q).programs;X!==void 0&&(X.forEach((function(re){Ue.releaseProgram(re)})),Q.isShaderMaterial&&Ue.releaseShaderCache(Q))})(j),te.remove(j)})(G)}function jl(b,G,j){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=ft,b.needsUpdate=!0,Nr(b,G,j),b.side=si,b.needsUpdate=!0,Nr(b,G,j),b.side=2):Nr(b,G,j)}this.xr=dt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=I.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=I.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(Z,q,!1))},this.getSize=function(b){return b.set(Z,q)},this.setSize=function(b,G,j=!0){dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=b,q=G,t.width=Math.floor(b*ae),t.height=Math.floor(G*ae),j===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G))},this.getDrawingBufferSize=function(b){return b.set(Z*ae,q*ae).floor()},this.setDrawingBufferSize=function(b,G,j){Z=b,q=G,ae=j,t.width=Math.floor(b*j),t.height=Math.floor(G*j),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,G,j,Q){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,G,j,Q),F.viewport(B.copy(_e).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,G,j,Q){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,G,j,Q),F.scissor(V.copy(ee).multiplyScalar(ae).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){F.setScissorTest(ne=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(b=!0,G=!0,j=!0){let Q=0;if(b){let X=!1;if(R!==null){let re=R.texture.format;X=re===El||re===bl||re===Sl}if(X){let re=R.texture.type,de=re===bi||re===ln||re===mr||re===Nn||re===yl||re===Ml,ge=Fe.getClearColor(),Me=Fe.getClearAlpha(),Te=ge.r,be=ge.g,Se=ge.b;de?(p[0]=Te,p[1]=be,p[2]=Se,p[3]=Me,U.clearBufferuiv(U.COLOR,0,p)):(f[0]=Te,f[1]=be,f[2]=Se,f[3]=Me,U.clearBufferiv(U.COLOR,0,f))}else Q|=U.COLOR_BUFFER_BIT}G&&(Q|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Hl,!1),t.removeEventListener("webglcontextrestored",Vl,!1),t.removeEventListener("webglcontextcreationerror",Wl,!1),Ge.dispose(),Ye.dispose(),te.dispose(),he.dispose(),pe.dispose(),Oe.dispose(),mi.dispose(),ji.dispose(),Ue.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ql),dt.removeEventListener("sessionend",Yl),Yi.stop()},this.renderBufferDirect=function(b,G,j,Q,X,re){G===null&&(G=P);let de=X.isMesh&&X.matrixWorld.determinant()<0,ge=(function(Ve,it,vt,De,we){it.isScene!==!0&&(it=P),$.resetTextureUnits();let Yt=it.fog,qh=De.isMeshStandardMaterial?it.environment:null,Yh=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gi,Or=(De.isMeshStandardMaterial?pe:he).get(De.envMap||qh),Zh=De.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,Jh=!!vt.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),Kh=!!vt.morphAttributes.position,$h=!!vt.morphAttributes.normal,Qh=!!vt.morphAttributes.color,ec=Ni;De.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(ec=v.toneMapping));let tc=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,eu=tc!==void 0?tc.length:0,Be=te.get(De),tu=g.state.lights;if(ue===!0&&(A===!0||Ve!==N)){let Gt=Ve===N&&De.id===D;et.setState(De,Ve,Gt)}let Zt=!1;De.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==tu.state.version||Be.outputColorSpace!==Yh||we.isBatchedMesh&&Be.batching===!1?Zt=!0:we.isBatchedMesh||Be.batching!==!0?we.isBatchedMesh&&Be.batchingColor===!0&&we.colorTexture===null||we.isBatchedMesh&&Be.batchingColor===!1&&we.colorTexture!==null||we.isInstancedMesh&&Be.instancing===!1?Zt=!0:we.isInstancedMesh||Be.instancing!==!0?we.isSkinnedMesh&&Be.skinning===!1?Zt=!0:we.isSkinnedMesh||Be.skinning!==!0?we.isInstancedMesh&&Be.instancingColor===!0&&we.instanceColor===null||we.isInstancedMesh&&Be.instancingColor===!1&&we.instanceColor!==null||we.isInstancedMesh&&Be.instancingMorph===!0&&we.morphTexture===null||we.isInstancedMesh&&Be.instancingMorph===!1&&we.morphTexture!==null||Be.envMap!==Or||De.fog===!0&&Be.fog!==Yt?Zt=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===et.numPlanes&&Be.numIntersection===et.numIntersection?(Be.vertexAlphas!==Zh||Be.vertexTangents!==Jh||Be.morphTargets!==Kh||Be.morphNormals!==$h||Be.morphColors!==Qh||Be.toneMapping!==ec||Be.morphTargetsCount!==eu)&&(Zt=!0):Zt=!0:Zt=!0:Zt=!0:Zt=!0:(Zt=!0,Be.__version=De.version);let Zi=Be.currentProgram;Zt===!0&&(Zi=Nr(De,it,we));let ic=!1,er=!1,os=!1,st=Zi.getUniforms(),Ai=Be.uniforms;if(F.useProgram(Zi.program)&&(ic=!0,er=!0,os=!0),De.id!==D&&(D=De.id,er=!0),ic||N!==Ve){J.reverseDepthBuffer?(M.copy(Ve.projectionMatrix),(function(Ji){let $e=Ji.elements;$e[2]=.5*$e[2]+.5*$e[3],$e[6]=.5*$e[6]+.5*$e[7],$e[10]=.5*$e[10]+.5*$e[11],$e[14]=.5*$e[14]+.5*$e[15]})(M),(function(Ji){let $e=Ji.elements;$e[11]===-1?($e[10]=-$e[10]-1,$e[14]=-$e[14]):($e[10]=-$e[10],$e[14]=1-$e[14])})(M),st.setValue(U,"projectionMatrix",M)):st.setValue(U,"projectionMatrix",Ve.projectionMatrix),st.setValue(U,"viewMatrix",Ve.matrixWorldInverse);let Gt=st.map.cameraPosition;Gt!==void 0&&Gt.setValue(U,W.setFromMatrixPosition(Ve.matrixWorld)),J.logarithmicDepthBuffer&&st.setValue(U,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&st.setValue(U,"isOrthographic",Ve.isOrthographicCamera===!0),N!==Ve&&(N=Ve,er=!0,os=!0)}if(we.isSkinnedMesh){st.setOptional(U,we,"bindMatrix"),st.setOptional(U,we,"bindMatrixInverse");let Gt=we.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),st.setValue(U,"boneTexture",Gt.boneTexture,$))}we.isBatchedMesh&&(st.setOptional(U,we,"batchingTexture"),st.setValue(U,"batchingTexture",we._matricesTexture,$),st.setOptional(U,we,"batchingIdTexture"),st.setValue(U,"batchingIdTexture",we._indirectTexture,$),st.setOptional(U,we,"batchingColorTexture"),we._colorsTexture!==null&&st.setValue(U,"batchingColorTexture",we._colorsTexture,$));let ls=vt.morphAttributes;ls.position===void 0&&ls.normal===void 0&&ls.color===void 0||Ze.update(we,vt,Zi),(er||Be.receiveShadow!==we.receiveShadow)&&(Be.receiveShadow=we.receiveShadow,st.setValue(U,"receiveShadow",we.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Ai.envMap.value=Or,Ai.flipEnvMap.value=Or.isCubeTexture&&Or.isRenderTargetTexture===!1?-1:1),De.isMeshStandardMaterial&&De.envMap===null&&it.environment!==null&&(Ai.envMapIntensity.value=it.environmentIntensity),er&&(st.setValue(U,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&(Jt=os,(ii=Ai).ambientLightColor.needsUpdate=Jt,ii.lightProbe.needsUpdate=Jt,ii.directionalLights.needsUpdate=Jt,ii.directionalLightShadows.needsUpdate=Jt,ii.pointLights.needsUpdate=Jt,ii.pointLightShadows.needsUpdate=Jt,ii.spotLights.needsUpdate=Jt,ii.spotLightShadows.needsUpdate=Jt,ii.rectAreaLights.needsUpdate=Jt,ii.hemisphereLights.needsUpdate=Jt),Yt&&De.fog===!0&&xe.refreshFogUniforms(Ai,Yt),xe.refreshMaterialUniforms(Ai,De,ae,q,g.state.transmissionRenderTarget[Ve.id]),Ln.upload(U,$l(Be),Ai,$));var ii,Jt;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(Ln.upload(U,$l(Be),Ai,$),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&st.setValue(U,"center",we.center),st.setValue(U,"modelViewMatrix",we.modelViewMatrix),st.setValue(U,"normalMatrix",we.normalMatrix),st.setValue(U,"modelMatrix",we.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){let Gt=De.uniformsGroups;for(let Ji=0,$e=Gt.length;Ji<$e;Ji++){let nc=Gt[Ji];ji.update(nc,Zi),ji.bind(nc,Zi)}}return Zi})(b,G,j,Q,X);F.setMaterial(Q,de);let Me=j.index,Te=1;if(Q.wireframe===!0){if(Me=Ee.getWireframeAttribute(j),Me===void 0)return;Te=2}let be=j.drawRange,Se=j.attributes.position,He=be.start*Te,at=(be.start+be.count)*Te;re!==null&&(He=Math.max(He,re.start*Te),at=Math.min(at,(re.start+re.count)*Te)),Me!==null?(He=Math.max(He,0),at=Math.min(at,Me.count)):Se!=null&&(He=Math.max(He,0),at=Math.min(at,Se.count));let tt=at-He;if(tt<0||tt===1/0)return;let pt;mi.setup(X,Q,ge,j,Me);let Je=Dr;if(Me!==null&&(pt=fe.get(Me),Je=mn,Je.setIndex(pt)),X.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*L()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(X.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),F.setLineWidth(Ve*L()),X.isLineSegments?Je.setMode(U.LINES):X.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else X.isPoints?Je.setMode(U.POINTS):X.isSprite&&Je.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Je.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))Je.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ve=X._multiDrawStarts,it=X._multiDrawCounts,vt=X._multiDrawCount,De=Me?fe.get(Me).bytesPerElement:1,we=te.get(Q).currentProgram.getUniforms();for(let Yt=0;Yt<vt;Yt++)we.setValue(U,"_gl_DrawID",Yt),Je.render(Ve[Yt]/De,it[Yt])}else if(X.isInstancedMesh)Je.renderInstances(He,tt,X.count);else if(j.isInstancedBufferGeometry){let Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,it=Math.min(j.instanceCount,Ve);Je.renderInstances(He,tt,it)}else Je.render(He,tt)},this.compile=function(b,G,j=null){j===null&&(j=b),g=Ye.get(j),g.init(G),_.push(g),j.traverseVisible((function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),b!==j&&b.traverseVisible((function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))})),g.setupLights();let Q=new Set;return b.traverse((function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let re=X.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let ge=re[de];jl(ge,j,X),Q.add(ge)}else jl(re,j,X),Q.add(re)})),_.pop(),g=null,Q},this.compileAsync=function(b,G,j=null){let Q=this.compile(b,G,j);return new Promise((X=>{function re(){Q.forEach((function(de){te.get(de).currentProgram.isReady()&&Q.delete(de)})),Q.size!==0?setTimeout(re,10):X(b)}I.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)}))};let as=null;function ql(){Yi.stop()}function Yl(){Yi.start()}let Yi=new yh;function ss(b,G,j,Q){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){Q&&w.setFromMatrixPosition(b.matrixWorld).applyMatrix4(O);let re=Oe.update(b),de=b.material;de.visible&&y.push(b,re,de,j,w.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){let re=Oe.update(b),de=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),w.copy(b.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),w.copy(re.boundingSphere.center)),w.applyMatrix4(b.matrixWorld).applyMatrix4(O)),Array.isArray(de)){let ge=re.groups;for(let Me=0,Te=ge.length;Me<Te;Me++){let be=ge[Me],Se=de[be.materialIndex];Se&&Se.visible&&y.push(b,re,Se,j,w.z,be)}}else de.visible&&y.push(b,re,de,j,w.z,null)}}let X=b.children;for(let re=0,de=X.length;re<de;re++)ss(X[re],G,j,Q)}function Zl(b,G,j,Q){let X=b.opaque,re=b.transmissive,de=b.transparent;g.setupLightsView(j),ue===!0&&et.setGlobalState(v.clippingPlanes,j),Q&&F.viewport(B.copy(Q)),X.length>0&&Ur(X,G,j),re.length>0&&Ur(re,G,j),de.length>0&&Ur(de,G,j),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Jl(b,G,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Ei(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Rr:bi,minFilter:Cn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let X=g.state.transmissionRenderTarget[Q.id],re=Q.viewport||B;X.setSize(re.z,re.w);let de=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(Y),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),S&&Fe.render(j);let ge=v.toneMapping;v.toneMapping=Ni;let Me=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ue===!0&&et.setGlobalState(v.clippingPlanes,Q),Ur(b,j,Q),$.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X),I.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let be=0,Se=G.length;be<Se;be++){let He=G[be],at=He.object,tt=He.geometry,pt=He.material,Je=He.group;if(pt.side===2&&at.layers.test(Q.layers)){let Ve=pt.side;pt.side=ft,pt.needsUpdate=!0,Kl(at,j,Q,tt,pt,Je),pt.side=Ve,pt.needsUpdate=!0,Te=!0}}Te===!0&&($.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X))}v.setRenderTarget(de),v.setClearColor(Y,H),Me!==void 0&&(Q.viewport=Me),v.toneMapping=ge}function Ur(b,G,j){let Q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,re=b.length;X<re;X++){let de=b[X],ge=de.object,Me=de.geometry,Te=Q===null?de.material:Q,be=de.group;ge.layers.test(j.layers)&&Kl(ge,G,j,Me,Te,be)}}function Kl(b,G,j,Q,X,re){b.onBeforeRender(v,G,j,Q,X,re),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(v,G,j,Q,b,re),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=ft,X.needsUpdate=!0,v.renderBufferDirect(j,G,Q,X,b,re),X.side=si,X.needsUpdate=!0,v.renderBufferDirect(j,G,Q,X,b,re),X.side=2):v.renderBufferDirect(j,G,Q,X,b,re),b.onAfterRender(v,G,j,Q,X,re)}function Nr(b,G,j){G.isScene!==!0&&(G=P);let Q=te.get(b),X=g.state.lights,re=g.state.shadowsArray,de=X.state.version,ge=Ue.getParameters(b,X.state,re,G,j),Me=Ue.getProgramCacheKey(ge),Te=Q.programs;Q.environment=b.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(b.isMeshStandardMaterial?pe:he).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",Xl),Te=new Map,Q.programs=Te);let be=Te.get(Me);if(be!==void 0){if(Q.currentProgram===be&&Q.lightsStateVersion===de)return Ql(b,ge),be}else ge.uniforms=Ue.getUniforms(b),b.onBeforeCompile(ge,v),be=Ue.acquireProgram(ge,Me),Te.set(Me,be),Q.uniforms=ge.uniforms;let Se=Q.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Se.clippingPlanes=et.uniform),Ql(b,ge),Q.needsLights=(function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0})(b),Q.lightsStateVersion=de,Q.needsLights&&(Se.ambientLightColor.value=X.state.ambient,Se.lightProbe.value=X.state.probe,Se.directionalLights.value=X.state.directional,Se.directionalLightShadows.value=X.state.directionalShadow,Se.spotLights.value=X.state.spot,Se.spotLightShadows.value=X.state.spotShadow,Se.rectAreaLights.value=X.state.rectArea,Se.ltc_1.value=X.state.rectAreaLTC1,Se.ltc_2.value=X.state.rectAreaLTC2,Se.pointLights.value=X.state.point,Se.pointLightShadows.value=X.state.pointShadow,Se.hemisphereLights.value=X.state.hemi,Se.directionalShadowMap.value=X.state.directionalShadowMap,Se.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Se.spotShadowMap.value=X.state.spotShadowMap,Se.spotLightMatrix.value=X.state.spotLightMatrix,Se.spotLightMap.value=X.state.spotLightMap,Se.pointShadowMap.value=X.state.pointShadowMap,Se.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=be,Q.uniformsList=null,be}function $l(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=Ln.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Ql(b,G){let j=te.get(b);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}Yi.setAnimationLoop((function(b){as&&as(b)})),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(b){as=b,dt.setAnimationLoop(b),b===null?Yi.stop():Yi.start()},dt.addEventListener("sessionstart",ql),dt.addEventListener("sessionend",Yl),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,G,R),g=Ye.get(b,_.length),g.init(G),_.push(g),O.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),me.setFromProjectionMatrix(O),A=this.localClippingEnabled,ue=et.init(this.clippingPlanes,A),y=Ge.get(b,m.length),y.init(),m.push(y),dt.enabled===!0&&dt.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&ss(re,G,-1/0,v.sortObjects)}ss(b,G,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(se,ce),S=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,S&&Fe.addToRenderList(y,b),this.info.render.frame++,ue===!0&&et.beginShadows();let j=g.state.shadowsArray;ve.render(j,b,G),ue===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=y.opaque,X=y.transmissive;if(g.setupLights(),G.isArrayCamera){let re=G.cameras;if(X.length>0)for(let de=0,ge=re.length;de<ge;de++)Jl(Q,X,b,re[de]);S&&Fe.render(b);for(let de=0,ge=re.length;de<ge;de++){let Me=re[de];Zl(y,b,Me,Me.viewport)}}else X.length>0&&Jl(Q,X,b,G),S&&Fe.render(b),Zl(y,b,G);R!==null&&($.updateMultisampleRenderTarget(R),$.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,G),mi.resetDefaultState(),D=-1,N=null,_.pop(),_.length>0?(g=_[_.length-1],ue===!0&&et.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),y=m.length>0?m[m.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,G,j){te.get(b.texture).__webglTexture=G,te.get(b.depthTexture).__webglTexture=j;let Q=te.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){let j=te.get(b);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,j=0){R=b,C=G,T=j;let Q=!0,X=null,re=!1,de=!1;if(b){let ge=te.get(b);if(ge.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(U.FRAMEBUFFER,null),Q=!1;else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(ge.__hasExternalTextures)$.rebindTextures(b,te.get(b.texture).__webglTexture,te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let be=b.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&te.has(be)&&(b.width!==be.image.width||b.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);let Te=te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(X=Array.isArray(Te[G])?Te[G][j]:Te[G],re=!0):X=b.samples>0&&$.useMultisampledRTT(b)===!1?te.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?Te[j]:Te,B.copy(b.viewport),V.copy(b.scissor),k=b.scissorTest}else B.copy(_e).multiplyScalar(ae).floor(),V.copy(ee).multiplyScalar(ae).floor(),k=ne;if(F.bindFramebuffer(U.FRAMEBUFFER,X)&&Q&&F.drawBuffers(b,X),F.viewport(B),F.scissor(V),F.setScissorTest(k),re){let ge=te.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,ge.__webglTexture,j)}else if(de){let ge=te.get(b.texture),Me=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ge.__webglTexture,j||0,Me)}D=-1},this.readRenderTargetPixels=function(b,G,j,Q,X,re,de){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){F.bindFramebuffer(U.FRAMEBUFFER,ge);try{let Me=b.texture,Te=Me.format,be=Me.type;if(!J.textureFormatReadable(Te))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(be))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=b.width-Q&&j>=0&&j<=b.height-X&&U.readPixels(G,j,Q,X,Ot.convert(Te),Ot.convert(be),re)}finally{let Me=R!==null?te.get(R).__webglFramebuffer:null;F.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,G,j,Q,X,re,de){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){let Me=b.texture,Te=Me.format,be=Me.type;if(!J.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-Q&&j>=0&&j<=b.height-X){F.bindFramebuffer(U.FRAMEBUFFER,ge);let Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(G,j,Q,X,Ot.convert(Te),Ot.convert(be),0);let He=R!==null?te.get(R).__webglFramebuffer:null;F.bindFramebuffer(U.FRAMEBUFFER,He);let at=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await(function(tt,pt,Je){return new Promise((function(Ve,it){setTimeout((function vt(){switch(tt.clientWaitSync(pt,tt.SYNC_FLUSH_COMMANDS_BIT,0)){case tt.WAIT_FAILED:it();break;case tt.TIMEOUT_EXPIRED:setTimeout(vt,Je);break;default:Ve()}}),Je)}))})(U,at,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Se),U.deleteSync(at),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,j=0){b.isTexture!==!0&&(va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);let Q=Math.pow(2,-j),X=Math.floor(b.image.width*Q),re=Math.floor(b.image.height*Q),de=G!==null?G.x:0,ge=G!==null?G.y:0;$.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,de,ge,X,re),F.unbindTexture()},this.copyTextureToTexture=function(b,G,j=null,Q=null,X=0){let re,de,ge,Me,Te,be;b.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],G=arguments[2],X=arguments[3]||0,j=null),j!==null?(re=j.max.x-j.min.x,de=j.max.y-j.min.y,ge=j.min.x,Me=j.min.y):(re=b.image.width,de=b.image.height,ge=0,Me=0),Q!==null?(Te=Q.x,be=Q.y):(Te=0,be=0);let Se=Ot.convert(G.format),He=Ot.convert(G.type);$.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);let at=U.getParameter(U.UNPACK_ROW_LENGTH),tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pt=U.getParameter(U.UNPACK_SKIP_PIXELS),Je=U.getParameter(U.UNPACK_SKIP_ROWS),Ve=U.getParameter(U.UNPACK_SKIP_IMAGES),it=b.isCompressedTexture?b.mipmaps[X]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ge),U.pixelStorei(U.UNPACK_SKIP_ROWS,Me),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,Te,be,re,de,Se,He,it.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,Te,be,it.width,it.height,Se,it.data):U.texSubImage2D(U.TEXTURE_2D,X,Te,be,re,de,Se,He,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,at),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve),X===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,G,j=null,Q=null,X=0){let re,de,ge,Me,Te,be,Se,He,at;b.isTexture!==!0&&(va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],G=arguments[3],X=arguments[4]||0);let tt=b.isCompressedTexture?b.mipmaps[X]:b.image;j!==null?(re=j.max.x-j.min.x,de=j.max.y-j.min.y,ge=j.max.z-j.min.z,Me=j.min.x,Te=j.min.y,be=j.min.z):(re=tt.width,de=tt.height,ge=tt.depth,Me=0,Te=0,be=0),Q!==null?(Se=Q.x,He=Q.y,at=Q.z):(Se=0,He=0,at=0);let pt=Ot.convert(G.format),Je=Ot.convert(G.type),Ve;if(G.isData3DTexture)$.setTexture3D(G,0),Ve=U.TEXTURE_3D;else{if(!G.isDataArrayTexture&&!G.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");$.setTexture2DArray(G,0),Ve=U.TEXTURE_2D_ARRAY}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);let it=U.getParameter(U.UNPACK_ROW_LENGTH),vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),De=U.getParameter(U.UNPACK_SKIP_PIXELS),we=U.getParameter(U.UNPACK_SKIP_ROWS),Yt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,tt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,be),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ve,X,Se,He,at,re,de,ge,pt,Je,tt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(Ve,X,Se,He,at,re,de,ge,pt,tt.data):U.texSubImage3D(Ve,X,Se,He,at,re,de,ge,pt,Je,tt),U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt),X===0&&G.generateMipmaps&&U.generateMipmap(Ve),F.unbindTexture()},this.initRenderTarget=function(b){te.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,F.reset(),mi.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tl?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Ja?"display-p3":"srgb"}};var Ua=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Na=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qp=new E;var em=new E,tm=new E,im=new E,nm=new ie,rm=new ie,am=new Ae,sm=new E,om=new E,lm=new E,cm=new ie,hm=new ie,um=new ie;var dm=new E,pm=new E;var mm=new E,fm=new je,gm=new je,vm=new E,_m=new Ae,xm=new E,ym=new ci,Mm=new Ae,Sm=new Bn;var Oa=class extends kt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=1003,h=1003,u,d){super(null,s,o,l,c,h,r,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bm=new Ae,Em=new Ae;var Tm=new Ae,wm=new Ae;var Am=new li,Rm=new Ae,Cm=new ot,Pm=new ci;var Vo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let s=r[this.index];a.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t,s.index=i}reset(){this.list.length=0,this.index=0}},Im=new Ae,Lm=new Ae,Dm=new Ae,Um=new Ce(1,1,1),Nm=new Ae,Om=new kn,Fm=new li,Bm=new ci,zm=new E,km=new E,Gm=new E,Hm=new Vo,Vm=new ot;var Wm=new E,Xm=new E,jm=new Ae,qm=new Bn,Ym=new ci,Zm=new E,Jm=new E;var Km=new E,$m=new E;var Qm=new Ae,ef=new Bn,tf=new ci,nf=new E;var Wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,a=i.length,s;s=t||e*i[a-1];let o,l=0,c=a-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-s,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===s)return r/(a-1);let h=i[r];return(r+(s-h)/(i[r+1]-h))/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);let s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new ie:new E);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,r=[],a=[],s=[],o=new E,l=new Ae;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new E)}a[0]=new E,s[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(_t(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,f))}s[p].crossVectors(r[p],a[p])}if(t===!0){let p=Math.acos(_t(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let f=1;f<=e;f++)a[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),s[f].crossVectors(r[f],a[f])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Wt{constructor(e=0,t=0,i=1,r=1,a=0,s=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let i=t,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),this.aClockwise!==!0||s||(a===r?a=-r:a-=r);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wo=class extends _r{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Al(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,u){let d=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(a){let s=a*a;return n+e*a+t*s+i*(s*a)}}}var ra=new E,zs=new Al,ks=new Al,Gs=new Al,xr=class extends Wt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new E){let i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e,o,l,c=Math.floor(s),h=s-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:h===0&&c===a-1&&(c=a-2,h=1),this.closed||c>0?o=r[(c-1)%a]:(ra.subVectors(r[0],r[1]).add(r[0]),o=ra);let u=r[c%a],d=r[(c+1)%a];if(this.closed||c+2<a?l=r[(c+2)%a]:(ra.subVectors(r[a-1],r[a-2]).add(r[a-1]),l=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),f<1e-4&&(f=y),g<1e-4&&(g=y),zs.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,y,g),ks.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,y,g),Gs.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,y,g)}else this.curveType==="catmullrom"&&(zs.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ks.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Gs.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(zs.calc(h),ks.calc(h),Gs.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zc(n,e,t,i,r){let a=.5*(i-e),s=.5*(r-t),o=n*n;return(2*t-2*i+a+s)*(n*o)+(-3*t+3*i-2*a-s)*o+a*n+t}function ur(n,e,t,i){return(function(r,a){let s=1-r;return s*s*a})(n,e)+(function(r,a){return 2*(1-r)*r*a})(n,t)+(function(r,a){return r*r*a})(n,i)}function dr(n,e,t,i,r){return(function(a,s){let o=1-a;return o*o*o*s})(n,e)+(function(a,s){let o=1-a;return 3*o*o*a*s})(n,t)+(function(a,s){return 3*(1-a)*a*a*s})(n,i)+(function(a,s){return a*a*a*s})(n,r)}var Fa=class extends Wt{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(dr(e,r.x,a.x,s.x,o.x),dr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xo=class extends Wt{constructor(e=new E,t=new E,i=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new E){let i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(dr(e,r.x,a.x,s.x,o.x),dr(e,r.y,a.y,s.y,o.y),dr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends Wt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Wt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Wt{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ur(e,r.x,a.x,s.x),ur(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gn=class extends Wt{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(ur(e,r.x,a.x,s.x),ur(e,r.y,a.y,s.y),ur(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Wt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(Zc(o,l.x,c.x,h.x,u.x),Zc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ie().fromArray(r))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:Wo,CatmullRomCurve3:xr,CubicBezierCurve:Fa,CubicBezierCurve3:Xo,EllipseCurve:_r,LineCurve:Ba,LineCurve3:jo,QuadraticBezierCurve:za,QuadraticBezierCurve3:Gn,SplineCurve:ka}),qo=class extends Wt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],o=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Ga[r.type]().fromJSON(r))}return this}},yr=class extends qo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ba(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new za(this.currentPoint.clone(),new ie(e,t),new ie(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let o=new Fa(this.currentPoint.clone(),new ie(e,t),new ie(i,r),new ie(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ka(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){let c=new _r(e,t,i,r,a,s,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hn=class n extends ct{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=_t(r,0,2*Math.PI);let a=[],s=[],o=[],l=[],c=[],h=1/t,u=new E,d=new ie,p=new E,f=new E,y=new E,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,p.x=1*m,p.y=-g,p.z=0*m,f.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(f)}for(let _=0;_<=t;_++){let v=i+_*h*r,x=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*C,s.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*x,D=l[3*T+1],N=l[3*T+0]*C;c.push(R,D,N)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,C=x,T=x+e.length,R=x+e.length+1,D=x+1;a.push(C,T,D),a.push(R,D,T)}this.setIndex(a),this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Mr=class n extends Hn{constructor(e=1,t=1,i=4,r=8){let a=new yr;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Ha=class n extends ct{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let a=[],s=[],o=[],l=[],c=new E,h=new ie;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ki=class n extends ct{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],p=[],f=0,y=[],g=i/2,m=0;function _(v){let x=f,C=new ie,T=new E,R=0,D=v===!0?e:t,N=v===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,g*N,0),d.push(0,N,0),p.push(.5,.5),f++;let B=f;for(let V=0;V<=r;V++){let k=V/r*l+o,Y=Math.cos(k),H=Math.sin(k);T.x=D*H,T.y=g*N,T.z=D*Y,u.push(T.x,T.y,T.z),d.push(0,N,0),C.x=.5*Y+.5,C.y=.5*H*N+.5,p.push(C.x,C.y),f++}for(let V=0;V<r;V++){let k=x+V,Y=B+V;v===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}(function(){let v=new E,x=new E,C=0,T=(t-e)/i;for(let R=0;R<=a;R++){let D=[],N=R/a,B=N*(t-e)+e;for(let V=0;V<=r;V++){let k=V/r,Y=k*l+o,H=Math.sin(Y),Z=Math.cos(Y);x.x=B*H,x.y=-N*i+g,x.z=B*Z,u.push(x.x,x.y,x.z),v.set(H,T,Z).normalize(),d.push(v.x,v.y,v.z),p.push(k,1-N),D.push(f++)}y.push(D)}for(let R=0;R<r;R++)for(let D=0;D<a;D++){let N=y[D][R],B=y[D+1][R],V=y[D+1][R+1],k=y[D][R+1];e>0&&(h.push(N,B,k),C+=3),t>0&&(h.push(B,V,k),C+=3)}c.addGroup(m,C,0),m+=C})(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class n extends ki{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=2*Math.PI){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cn=class n extends ct{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let a=[],s=[];function o(d,p,f,y){let g=y+1,m=[];for(let _=0;_<=g;_++){m[_]=[];let v=d.clone().lerp(f,_/g),x=p.clone().lerp(f,_/g),C=g-_;for(let T=0;T<=C;T++)m[_][T]=T===0&&_===g?v:v.clone().lerp(x,T/C)}for(let _=0;_<g;_++)for(let v=0;v<2*(g-_)-1;v++){let x=Math.floor(v/2);v%2==0?(l(m[_][x+1]),l(m[_+1][x]),l(m[_][x])):(l(m[_][x+1]),l(m[_+1][x+1]),l(m[_+1][x]))}}function l(d){a.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,y){y<0&&d.x===1&&(s[p]=d.x-1),f.x===0&&f.z===0&&(s[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,y=new E;for(let g=0;g<t.length;g+=3)c(t[g+0],p),c(t[g+1],f),c(t[g+2],y),o(p,f,y,d)})(r),(function(d){let p=new E;for(let f=0;f<a.length;f+=3)p.x=a[f+0],p.y=a[f+1],p.z=a[f+2],p.normalize().multiplyScalar(d),a[f+0]=p.x,a[f+1]=p.y,a[f+2]=p.z})(i),(function(){let d=new E;for(let f=0;f<a.length;f+=3){d.x=a[f+0],d.y=a[f+1],d.z=a[f+2];let y=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);s.push(y,1-g)}var p;(function(){let f=new E,y=new E,g=new E,m=new E,_=new ie,v=new ie,x=new ie;for(let C=0,T=0;C<a.length;C+=9,T+=6){f.set(a[C+0],a[C+1],a[C+2]),y.set(a[C+3],a[C+4],a[C+5]),g.set(a[C+6],a[C+7],a[C+8]),_.set(s[T+0],s[T+1]),v.set(s[T+2],s[T+3]),x.set(s[T+4],s[T+5]),m.copy(f).add(y).add(g).divideScalar(3);let R=u(m);h(_,T+0,f,R),h(v,T+2,y,R),h(x,T+4,g,R)}})(),(function(){for(let f=0;f<s.length;f+=6){let y=s[f+0],g=s[f+2],m=s[f+4],_=Math.max(y,g,m),v=Math.min(y,g,m);_>.9&&v<.1&&(y<.2&&(s[f+0]+=1),g<.2&&(s[f+2]+=1),m<.2&&(s[f+4]+=1))}})()})(),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(a.slice(),3)),this.setAttribute("uv",new Re(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Yo=class n extends cn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},aa=new E,sa=new E,Hs=new E,oa=new Ui,Zo=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),a=Math.cos(ga*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){s?(c[0]=s.getX(f),c[1]=s.getX(f+1),c[2]=s.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:g,c:m}=oa;if(y.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),oa.getNormal(Hs),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let v=(_+1)%3,x=u[_],C=u[v],T=oa[h[_]],R=oa[h[v]],D=`${x}_${C}`,N=`${C}_${x}`;N in d&&d[N]?(Hs.dot(d[N].normal)<=a&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),d[N]=null):D in d||(d[D]={index0:c[_],index1:c[v],normal:Hs.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:g}=d[f];aa.fromBufferAttribute(o,y),sa.fromBufferAttribute(o,g),p.push(aa.x,aa.y,aa.z),p.push(sa.x,sa.y,sa.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Va=class extends yr{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new yr().fromJSON(r))}return this}},op=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,a=Jc(n,0,r,t,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,u,d,p;if(i&&(a=(function(f,y,g,m){let _=[],v,x,C,T,R;for(v=0,x=y.length;v<x;v++)C=y[v]*m,T=v<x-1?y[v+1]*m:f.length,R=Jc(f,C,T,m,!1),R===R.next&&(R.steiner=!0),_.push(fp(R));for(_.sort(dp),v=0;v<_.length;v++)g=pp(_[v],g);return g})(n,e,a,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let f=t;f<r;f+=t)u=n[f],d=n[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return br(a,s,t,o,l,p,0),s};function Jc(n,e,t,i,r){let a,s;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(n,e,t,i)>0)for(a=e;a<t;a+=i)s=Kc(a,n[a],n[a+1],s);else for(a=t-i;a>=e;a-=i)s=Kc(a,n[a],n[a+1],s);return s&&$a(s,s.next)&&(Tr(s),s=s.next),s}function hn(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!$a(i,i.next)&&nt(i.prev,i,i.next)!==0)i=i.next;else{if(Tr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function br(n,e,t,i,r,a,s){if(!n)return;!s&&a&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=Jo(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(y){let g,m,_,v,x,C,T,R,D=1;do{for(m=y,y=null,x=null,C=0;m;){for(C++,_=m,T=0,g=0;g<D&&(T++,_=_.nextZ,_);g++);for(R=D;T>0||R>0&&_;)T!==0&&(R===0||!_||m.z<=_.z)?(v=m,m=m.nextZ,T--):(v=_,_=_.nextZ,R--),x?x.nextZ=v:y=v,v.prevZ=x,x=v;m=_}x.nextZ=null,D*=2}while(C>1)})(f)})(n,i,r,a);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,a?cp(n,i,r,a):lp(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Tr(n),n=l.next,c=l.next;else if((n=l)===c){s?s===1?br(n=hp(hn(n),e,t),e,t,i,r,a,2):s===2&&up(n,e,t,i,r,a):br(hn(n),e,t,i,r,a,1);break}}function lp(n){let e=n.prev,t=n,i=n.next;if(nt(e,t,i)>=0)return!1;let r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=r<a?r<s?r:s:a<s?a:s,u=o<l?o<c?o:c:l<c?l:c,d=r>a?r>s?r:s:a>s?a:s,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Pn(r,o,a,l,s,c,f.x,f.y)&&nt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function cp(n,e,t,i){let r=n.prev,a=n,s=n.next;if(nt(r,a,s)>=0)return!1;let o=r.x,l=a.x,c=s.x,h=r.y,u=a.y,d=s.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=Jo(p,f,e,t,i),_=Jo(y,g,e,t,i),v=n.prevZ,x=n.nextZ;for(;v&&v.z>=m&&x&&x.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=g&&v!==r&&v!==s&&Pn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=y&&x.y>=f&&x.y<=g&&x!==r&&x!==s&&Pn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=y&&v.y>=f&&v.y<=g&&v!==r&&v!==s&&Pn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=f&&x.y<=g&&x!==r&&x!==s&&Pn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function hp(n,e,t){let i=n;do{let r=i.prev,a=i.next.next;!$a(r,a)&&Th(r,i,i.next,a)&&Er(r,a)&&Er(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Tr(i),Tr(i.next),i=n=a),i=i.next}while(i!==n);return hn(i)}function up(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&gp(s,o)){let l=wh(s,o);return s=hn(s,s.next),l=hn(l,l.next),br(s,e,t,i,r,a,0),void br(l,e,t,i,r,a,0)}o=o.next}s=s.next}while(s!==n)}function dp(n,e){return n.x-e.x}function pp(n,e){let t=(function(r,a){let s,o=a,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let g=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=c&&g>l&&(l=g,s=o.x<o.next.x?o:o.next,g===c))return s}o=o.next}while(o!==a);if(!s)return null;let u=s,d=s.x,p=s.y,f,y=1/0;o=s;do c>=o.x&&o.x>=d&&c!==o.x&&Pn(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Er(o,r)&&(f<y||f===y&&(o.x>s.x||o.x===s.x&&mp(s,o)))&&(s=o,y=f)),o=o.next;while(o!==u);return s})(n,e);if(!t)return e;let i=wh(t,n);return hn(i,i.next),hn(t,t.next)}function mp(n,e){return nt(n.prev,n,e.prev)<0&&nt(e.next,n,n.next)<0}function Jo(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function fp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pn(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function gp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Th(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1})(n,e)&&(Er(n,e)&&Er(e,n)&&(function(t,i){let r=t,a=!1,s=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&s<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(a=!a),r=r.next;while(r!==t);return a})(n,e)&&(nt(n.prev,n,e.prev)||nt(n,e.prev,e))||$a(n,e)&&nt(n.prev,n,n.next)>0&&nt(e.prev,e,e.next)>0)}function nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $a(n,e){return n.x===e.x&&n.y===e.y}function Th(n,e,t,i){let r=ca(nt(n,e,t)),a=ca(nt(n,e,i)),s=ca(nt(t,i,n)),o=ca(nt(t,i,e));return r!==a&&s!==o||!(r!==0||!la(n,t,e))||!(a!==0||!la(n,i,e))||!(s!==0||!la(t,n,i))||!(o!==0||!la(t,e,i))}function la(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ca(n){return n>0?1:n<0?-1:0}function Er(n,e){return nt(n.prev,n,n.next)<0?nt(n,e,n.next)>=0&&nt(n,n.prev,e)>=0:nt(n,e,n.prev)<0||nt(n,n.next,e)<0}function wh(n,e){let t=new Ko(n.i,n.x,n.y),i=new Ko(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Kc(n,e,t,i){let r=new Ko(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Tr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ko(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Oi=class n{static area(e){let t=e.length,i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],a=[];$c(e),Qc(i,e);let s=e.length;t.forEach($c);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Qc(i,t[l]);let o=op(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function $c(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Qc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var $o=class n extends ct{constructor(e=new Va([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],a=[];for(let o=0,l=e.length;o<l;o++)s(e[o]);function s(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:vp,v,x,C,T,R,D=!1;m&&(v=m.getSpacedPoints(h),D=!0,d=!1,x=m.computeFrenetFrames(h,!1),C=new E,T=new E,R=new E),d||(g=0,p=0,f=0,y=0);let N=o.extractPoints(c),B=N.shape,V=N.holes;if(!Oi.isClockWise(B)){B=B.reverse();for(let w=0,P=V.length;w<P;w++){let S=V[w];Oi.isClockWise(S)&&(V[w]=S.reverse())}}let k=Oi.triangulateShape(B,V),Y=B;for(let w=0,P=V.length;w<P;w++){let S=V[w];B=B.concat(S)}function H(w,P,S){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(P,S)}let Z=B.length,q=k.length;function ae(w,P,S){let L,I,J,F=w.x-P.x,K=w.y-P.y,te=S.x-w.x,$=S.y-w.y,he=F*F+K*K,pe=F*$-K*te;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(he),Ee=Math.sqrt(te*te+$*$),Oe=P.x-K/fe,Ue=P.y+F/fe,xe=((S.x-$/Ee-Oe)*$-(S.y+te/Ee-Ue)*te)/(F*$-K*te);L=Oe+F*xe-w.x,I=Ue+K*xe-w.y;let Ge=L*L+I*I;if(Ge<=2)return new ie(L,I);J=Math.sqrt(Ge/2)}else{let fe=!1;F>Number.EPSILON?te>Number.EPSILON&&(fe=!0):F<-Number.EPSILON?te<-Number.EPSILON&&(fe=!0):Math.sign(K)===Math.sign($)&&(fe=!0),fe?(L=-K,I=F,J=Math.sqrt(he)):(L=F,I=K,J=Math.sqrt(he/2))}return new ie(L/J,I/J)}let se=[];for(let w=0,P=Y.length,S=P-1,L=w+1;w<P;w++,S++,L++)S===P&&(S=0),L===P&&(L=0),se[w]=ae(Y[w],Y[S],Y[L]);let ce=[],_e,ee=se.concat();for(let w=0,P=V.length;w<P;w++){let S=V[w];_e=[];for(let L=0,I=S.length,J=I-1,F=L+1;L<I;L++,J++,F++)J===I&&(J=0),F===I&&(F=0),_e[L]=ae(S[L],S[J],S[F]);ce.push(_e),ee=ee.concat(_e)}for(let w=0;w<g;w++){let P=w/g,S=p*Math.cos(P*Math.PI/2),L=f*Math.sin(P*Math.PI/2)+y;for(let I=0,J=Y.length;I<J;I++){let F=H(Y[I],se[I],L);ue(F.x,F.y,-S)}for(let I=0,J=V.length;I<J;I++){let F=V[I];_e=ce[I];for(let K=0,te=F.length;K<te;K++){let $=H(F[K],_e[K],L);ue($.x,$.y,-S)}}}let ne=f+y;for(let w=0;w<Z;w++){let P=d?H(B[w],ee[w],ne):B[w];D?(T.copy(x.normals[0]).multiplyScalar(P.x),C.copy(x.binormals[0]).multiplyScalar(P.y),R.copy(v[0]).add(T).add(C),ue(R.x,R.y,R.z)):ue(P.x,P.y,0)}for(let w=1;w<=h;w++)for(let P=0;P<Z;P++){let S=d?H(B[P],ee[P],ne):B[P];D?(T.copy(x.normals[w]).multiplyScalar(S.x),C.copy(x.binormals[w]).multiplyScalar(S.y),R.copy(v[w]).add(T).add(C),ue(R.x,R.y,R.z)):ue(S.x,S.y,u/h*w)}for(let w=g-1;w>=0;w--){let P=w/g,S=p*Math.cos(P*Math.PI/2),L=f*Math.sin(P*Math.PI/2)+y;for(let I=0,J=Y.length;I<J;I++){let F=H(Y[I],se[I],L);ue(F.x,F.y,u+S)}for(let I=0,J=V.length;I<J;I++){let F=V[I];_e=ce[I];for(let K=0,te=F.length;K<te;K++){let $=H(F[K],_e[K],L);D?ue($.x,$.y+v[h-1].y,v[h-1].x+S):ue($.x,$.y,u+S)}}}function me(w,P){let S=w.length;for(;--S>=0;){let L=S,I=S-1;I<0&&(I=w.length-1);for(let J=0,F=h+2*g;J<F;J++){let K=Z*J,te=Z*(J+1);M(P+L+K,P+I+K,P+I+te,P+L+te)}}}function ue(w,P,S){l.push(w),l.push(P),l.push(S)}function A(w,P,S){O(w),O(P),O(S);let L=r.length/3,I=_.generateTopUV(i,r,L-3,L-2,L-1);W(I[0]),W(I[1]),W(I[2])}function M(w,P,S,L){O(w),O(P),O(L),O(P),O(S),O(L);let I=r.length/3,J=_.generateSideWallUV(i,r,I-6,I-3,I-2,I-1);W(J[0]),W(J[1]),W(J[3]),W(J[1]),W(J[2]),W(J[3])}function O(w){r.push(l[3*w+0]),r.push(l[3*w+1]),r.push(l[3*w+2])}function W(w){a.push(w.x),a.push(w.y)}(function(){let w=r.length/3;if(d){let P=0,S=Z*P;for(let L=0;L<q;L++){let I=k[L];A(I[2]+S,I[1]+S,I[0]+S)}P=h+2*g,S=Z*P;for(let L=0;L<q;L++){let I=k[L];A(I[0]+S,I[1]+S,I[2]+S)}}else{for(let P=0;P<q;P++){let S=k[P];A(S[2],S[1],S[0])}for(let P=0;P<q;P++){let S=k[P];A(S[0]+Z*h,S[1]+Z*h,S[2]+Z*h)}}i.addGroup(w,r.length/3-w,0)})(),(function(){let w=r.length/3,P=0;me(Y,P),P+=Y.length;for(let S=0,L=V.length;S<L;S++){let I=V[S];me(I,P),P+=I.length}i.addGroup(w,r.length/3-w,1)})()}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let a=0,s=t.length;a<s;a++){let o=t[a];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let a=0,s=e.shapes.length;a<s;a++){let o=t[e.shapes[a]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ga[r.type]().fromJSON(r)),new n(i,e.options)}},vp={generateTopUV:function(n,e,t,i,r){let a=e[3*t],s=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ie(a,s),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(n,e,t,i,r,a){let s=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],y=e[3*a],g=e[3*a+1],m=e[3*a+2];return Math.abs(o-h)<Math.abs(s-c)?[new ie(s,1-l),new ie(c,1-u),new ie(d,1-f),new ie(y,1-m)]:[new ie(o,1-l),new ie(h,1-u),new ie(p,1-f),new ie(g,1-m)]}},Qo=class n extends cn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},el=class n extends cn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},tl=class n extends ct{constructor(e=.5,t=1,i=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,f=new ie;for(let y=0;y<=r;y++){for(let g=0;g<=i;g++){let m=a+g/i*s;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let y=0;y<r;y++){let g=y*(i+1);for(let m=0;m<i;m++){let _=m+g,v=_,x=_+i+1,C=_+i+2,T=_+1;o.push(v,x,T),o.push(x,C,T)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},il=class n extends ct{constructor(e=new Va([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],a=[],s=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Oi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){let _=f[g];Oi.isClockWise(_)===!0&&(f[g]=_.reverse())}let y=Oi.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){let _=f[g];p=p.concat(_)}for(let g=0,m=p.length;g<m;g++){let _=p[g];r.push(_.x,_.y,0),a.push(0,0,1),s.push(_.x,_.y)}for(let g=0,m=y.length;g<m;g++){let _=y[g],v=_[0]+u,x=_[1]+u,C=_[2]+u;i.push(v,x,C),l+=3}}this.setIndex(i),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let s=t[r];i.shapes.push(s.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let s=t[e.shapes[r]];i.push(s)}return new n(i,e.curveSegments)}},Xt=class n extends ct{constructor(e=1,t=32,i=16,r=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(s+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],f=[],y=[],g=[];for(let m=0;m<=i;m++){let _=[],v=m/i,x=0;m===0&&s===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(r+T*a)*Math.sin(s+v*o),u.y=e*Math.cos(s+v*o),u.z=e*Math.sin(r+T*a)*Math.sin(s+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(T+x,1-v),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<t;_++){let v=h[m][_+1],x=h[m][_],C=h[m+1][_],T=h[m+1][_+1];(m!==0||s>0)&&p.push(v,x,T),(m!==i-1||l<Math.PI)&&p.push(x,C,T)}this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},nl=class n extends cn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vn=class n extends ct{constructor(e=1,t=.4,i=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);let s=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=i;p++)for(let f=0;f<=r;f++){let y=f/r*a,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(y),u.y=(e+t*Math.cos(g))*Math.sin(y),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=r;f++){let y=(r+1)*p+f-1,g=(r+1)*(p-1)+f-1,m=(r+1)*(p-1)+f,_=(r+1)*p+f;s.push(y,g,_),s.push(g,m,_)}this.setIndex(s),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},rl=class n extends ct{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,f=new E,y=new E,g=new E,m=new E;for(let v=0;v<=i;++v){let x=v/i*a*Math.PI*2;_(x,a,s,e,p),_(x+.01,a,s,e,f),g.subVectors(f,p),m.addVectors(f,p),y.crossVectors(g,m),m.crossVectors(y,g),y.normalize(),m.normalize();for(let C=0;C<=r;++C){let T=C/r*Math.PI*2,R=-t*Math.cos(T),D=t*Math.sin(T);u.x=p.x+(R*m.x+D*y.x),u.y=p.y+(R*m.y+D*y.y),u.z=p.z+(R*m.z+D*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(C/r)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){let C=(r+1)*(v-1)+(x-1),T=(r+1)*v+(x-1),R=(r+1)*v+x,D=(r+1)*(v-1)+x;o.push(C,T,D),o.push(T,R,D)}function _(v,x,C,T,R){let D=Math.cos(v),N=Math.sin(v),B=C/x*v,V=Math.cos(B);R.x=T*(2+V)*.5*D,R.y=T*(2+V)*N*.5,R.z=T*Math.sin(B)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Wn=class n extends ct{constructor(e=new Gn(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new E,l=new E,c=new ie,h=new E,u=[],d=[],p=[],f=[];function y(g){h=e.getPointAt(g/t,h);let m=s.normals[g],_=s.binormals[g];for(let v=0;v<=r;v++){let x=v/r*Math.PI*2,C=Math.sin(x),T=-Math.cos(x);l.x=T*m.x+C*_.x,l.y=T*m.y+C*_.y,l.z=T*m.z+C*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)y(g);y(a===!1?t:0),(function(){for(let g=0;g<=t;g++)for(let m=0;m<=r;m++)c.x=g/t,c.y=m/r,p.push(c.x,c.y)})(),(function(){for(let g=1;g<=t;g++)for(let m=1;m<=r;m++){let _=(r+1)*(g-1)+(m-1),v=(r+1)*g+(m-1),x=(r+1)*g+m,C=(r+1)*(g-1)+m;f.push(_,v,C),f.push(v,x,C)}})()})(),this.setIndex(f),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ga[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},al=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new E,a=new E;if(e.index!==null){let s=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let y=0;y<3;y++){let g=o.getX(p+y),m=o.getX(p+(y+1)%3);r.fromBufferAttribute(s,g),a.fromBufferAttribute(s,m),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(s,h),a.fromBufferAttribute(s,u),eh(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function eh(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var rf=Object.freeze({__proto__:null,BoxGeometry:ti,CapsuleGeometry:Mr,CircleGeometry:Ha,ConeGeometry:Sr,CylinderGeometry:ki,DodecahedronGeometry:Yo,EdgesGeometry:Zo,ExtrudeGeometry:$o,IcosahedronGeometry:Qo,LatheGeometry:Hn,OctahedronGeometry:el,PlaneGeometry:vr,PolyhedronGeometry:cn,RingGeometry:tl,ShapeGeometry:il,SphereGeometry:Xt,TetrahedronGeometry:nl,TorusGeometry:Vn,TorusKnotGeometry:rl,TubeGeometry:Wn,WireframeGeometry:al});var Wa=class extends Bi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wr=class extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ha(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _p(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Xn=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];t:{e:{let s;i:{n:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<a)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=r,r=t[++i],e<r)break e}s=t.length;break i}if(e>=a)break t;{let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=a,a=t[--i-1],e>=a)break e}s=i,i=0}}for(;i<s;){let o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let s=0;s!==r;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends Xn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,o=r[a],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case ac:a=e,o=2*t-i;break;case sc:a=r.length-2,o=t+r[a]-r[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ac:s=e,l=2*i-t;break;case sc:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(r-t),y=f*f,g=y*f,m=-d*g+2*d*y-d*f,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*f+1,v=(-1-p)*g+(1.5+p)*y+.5*f,x=p*g-p*y;for(let C=0;C!==o;++C)a[C]=m*s[h+C]+_*s[c+C]+v*s[l+C]+x*s[u+C];return a}},ol=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}},ll=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case hs:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return hs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==r){a>=s&&(s=Math.max(s,1),a=s-1);let o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&_p(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===hs,a=e.length-1,s=1;for(let o=1;o<a;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];let h=o*i,u=s*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};ei.prototype.TimeBufferType=Float32Array,ei.prototype.ValueBufferType=Float32Array,ei.prototype.DefaultInterpolation=To;var sn=class extends ei{constructor(e,t,i){super(e,t,i)}};sn.prototype.ValueTypeName="bool",sn.prototype.ValueBufferType=Array,sn.prototype.DefaultInterpolation=_a,sn.prototype.InterpolantFactoryMethodLinear=void 0,sn.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends ei{};cl.prototype.ValueTypeName="color";var hl=class extends ei{};hl.prototype.ValueTypeName="number";var ul=class extends Xn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)oi.slerpFlat(a,0,s,c-o,s,c,l);return a}},Xa=class extends ei{InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName="quaternion",Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var on=class extends ei{constructor(e,t,i){super(e,t,i)}};on.prototype.ValueTypeName="string",on.prototype.ValueBufferType=Array,on.prototype.DefaultInterpolation=_a,on.prototype.InterpolantFactoryMethodLinear=void 0,on.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends ei{};dl.prototype.ValueTypeName="vector";var pl=class{constructor(e,t,i){let r=this,a,s=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},xp=new pl,ml=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise((function(r,a){i.load(e,r,t,a)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Vs=new Ae,th=new E,ih=new E,ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),Vs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nh=new Ae,cr=new E,Ws=new E,fl=class extends ja{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),Ws.copy(i.position),Ws.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ws),i.updateMatrixWorld(),r.makeTranslation(-cr.x,-cr.y,-cr.z),nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}},un=class extends Ar{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gl=class extends ja{constructor(){super(new Pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qa=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ya=class extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var af=new Ae,sf=new Ae,of=new Ae;var lf=new E,cf=new oi,hf=new E,uf=new E;var df=new E,pf=new oi,mf=new E,ff=new E;var Rl="\\[\\]\\.:\\/",yp=new RegExp("["+Rl+"]","g"),Xs="[^"+Rl+"]",Mp="[^"+Rl.replace("\\.","")+"]",Sp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Xs)+/(WCOD+)?/.source.replace("WCOD",Mp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xs)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xs)+"$"),bp=["material","materials","bones","map"],Qe=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(e){let t=Sp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);bp.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let s=e[r];if(s===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=class{constructor(n,e,t){let i=t||Qe.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray],Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gf=new Float32Array(1);var vf=new Ae;var _f=new ie;var xf=new E,yf=new E;var Mf=new E;var Sf=new E,bf=new Ae,Ef=new Ae;var Tf=new E,wf=new Ce,Af=new Ce;var Rf=new E,Cf=new E,Pf=new E;var If=new E,Lf=new gr;var Df=new li;var Uf=new E;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ep=(()=>{let n=new Uint8Array([60,60,60,255,140,140,140,255,215,215,215,255,255,255,255,255]),e=new Oa(n,4,1,zt);return e.minFilter=e.magFilter=It,e.needsUpdate=!0,e})(),Ne=Math.PI;function di(){let n=[],e={},t=new zi({color:459531,side:ft,transparent:!0});n.push(t),t.userData.outline=1;let i=(s,o={})=>{let l=[s,o.e||0,o.side||0,o.flat?1:0].join("_");if(e[l])return e[l];let c=new Wa({color:s,gradientMap:Ep,emissive:o.e||0,transparent:!0,side:o.side||si});return c.userData.e0=new Ce(o.e||0),n.push(c),e[l]=c};return{mats:n,M:i,P:(s,o,l,c=[0,0,0],h={})=>{let u=new ot(o,l.isMaterial?l:i(l,h));if(u.position.set(...c),h.rot&&u.rotation.set(...h.rot),h.sc&&u.scale.set(...h.sc),s.add(u),h.line!==!1){let d=new ot(o,t);d.scale.setScalar(h.line||1.08),u.add(d)}return u},G:(s,o=[0,0,0])=>{let l=new rt;return l.position.set(...o),s.add(l),l},OUT:t}}var bt=(n,e=14,t=10)=>new Xt(n,e,t),Rh=(n,e,t=8)=>new Mr(n,Math.max(.001,e),3,t),ze=(n,e,t)=>new ti(n,e,t),Et=(n,e,t,i=10)=>new ki(n,e,t,i),jt=(n,e,t=6)=>new Sr(n,e,t),Lt=(n,e=14,t=0,i=Ne*2)=>new Hn(n.map(([r,a])=>new ie(r,a)),e,t,i);function Le(n,e,t,i,r,a,s={}){let o=n.G(e,t);n.P(o,Rh(r,i*.5-r),a,[0,-i*.25,0],{line:1.12});let l=n.G(o,[0,-i*.5,0]);n.P(l,Rh(r*.9,i*.5-r),s.lowCol??a,[0,-i*.25,0],{line:1.12}),s.rings&&s.rings.forEach(h=>n.P(l,Et(r*.98,r*.98,.014,10),16752704,[0,-i*h,0],{e:16747040,line:!1}));let c=n.G(l,[0,-i*.5,0]);return s.foot&&n.P(c,ze(r*2.1,.055,r*3.4),s.footCol??854800,[0,-.005,r*.7],{line:1.1}),s.hand&&n.P(c,bt(r*1.05,8,6),s.handCol??14723464,[0,-r*.2,0],{line:1.12}),{g:o,lo:l,end:c}}function Hi(n,e,{r:t=.075,skin:i=15117964,iris:r=3807248,brow:a=1445914,stern:s=.25,eyeGlow:o=null,mouth:l=9060408}={}){n.P(e,bt(t,16,12),i,[0,0,0],{sc:[.94,1.08,1],line:1.05});let c=[];return[-1,1].forEach(h=>{let u=n.G(e,[h*t*.38,t*.04,t*.86]);n.P(u,bt(t*.2,10,8),16777215,[0,0,0],{sc:[1,.78,.4],line:!1});let d=o&&h==1;n.P(u,bt(t*.12,8,6),d?o:r,[0,-t*.01,t*.06],{sc:[1,1,.5],line:!1,e:d?o:0}),n.P(u,bt(t*.04,6,4),16777215,[t*.04,t*.04,t*.11],{line:!1,e:10066329}),c.push(u),n.P(e,ze(t*.42,t*.075,t*.08),a,[h*t*.4,t*.3,t*.88],{rot:[0,0,-h*s],line:!1}),n.P(e,bt(t*.2,8,6),i,[h*t*.93,0,0],{sc:[.5,1,.8],line:1.1})}),n.P(e,jt(t*.1,t*.25,5),i,[0,-t*.18,t*1],{rot:[Ne/2+.3,0,0],line:!1}),n.P(e,ze(t*.38,t*.045,t*.05),l,[0,-t*.48,t*.88],{line:!1}),c}function Cr({sword:n="back",alba:e=!0}={}){let t=di(),i=new rt,r=t.G(i),a=2366761,s=8000548,o=1841442,l=Le(t,r,[-.055,.5,0],.48,.036,o,{foot:1}),c=Le(t,r,[.055,.5,0],.48,.036,o,{foot:1});t.P(r,Et(.1,.095,.07,12),o,[0,.5,0],{sc:[1,1,.68]});let h=t.G(r,[0,.52,0]);t.P(h,Lt([[.001,-.02],[.085,-.02],[.098,.08],[.115,.2],[.118,.25],[.07,.31],[.001,.32]],12),8001576,[0,0,0],{sc:[1,1,.66],line:1.04}),t.P(h,Et(.1,.1,.03,12),854800,[0,.005,0],{sc:[1,1,.68],line:!1}),t.P(h,ze(.04,.028,.01),14725192,[0,.005,.07],{e:3810816,line:!1});let u=new ot(new Vn(.04,.003,4,10,Ne),t.M(14725192,{e:3153920}));u.position.set(.03,.12,.073),u.rotation.set(0,0,Ne+.3),h.add(u);let d=t.G(h,[0,0,0]),p=[[.125,.28],[.122,.2],[.108,.06],[.122,-.08],[.155,-.22],[.19,-.34]];t.P(d,Lt(p,16,.55,Ne*2-1.1),a,[0,0,0],{sc:[1,1,.78],line:1.03}),t.P(d,Lt(p,16,.55,Ne*2-1.1),t.M(s,{side:ft}),[0,0,0],{sc:[.985,1,.765],line:!1}),[-1,1].forEach(D=>{t.P(h,ze(.045,.26,.012),3221050,[D*.07,.15,.075],{rot:[-.12,0,D*.14],line:1.1}),t.P(h,bt(.062,10,8),a,[D*.13,.265,0],{sc:[1.1,.8,1],line:1.06})}),t.P(h,Lt([[.075,.28],[.088,.36],[.095,.4]],14,.9,Ne*2-1.8),a,[0,0,-.005],{sc:[1,1,.85],line:1.04}),t.P(h,Et(.032,.034,.06,10),14723464,[0,.33,0],{line:!1});function f(D,N){let B=D.G(N,[-.16,.27,0]);D.P(B,bt(.055,12,8),3813928,[0,.02,0],{e:4861968,line:1.04}),D.P(B,Et(.028,.034,.05,8),1709068,[0,-.02,0],{line:!1}),D.P(B,ze(.07,.05,.05),14140578,[0,-.07,0],{e:9072704,line:1.03});let V=D.G(B,[0,-.12,0]);D.P(V,ze(.062,.15,.046),15982772,[0,-.08,0],{e:16773316,line:1.02}),D.P(V,ze(.07,.018,.052),16775396,[0,-.02,.002],{e:16777215,line:!1}),D.P(V,ze(.07,.018,.052),16775396,[0,-.09,.002],{e:16777215,line:!1}),D.P(V,Et(.01,.01,.16,6),16757850,[.038,-.08,0],{e:16751152,line:!1});let k=D.G(V,[0,-.17,0]);D.P(k,ze(.078,.04,.034),16774879,[0,-.015,.012],{e:16774092,line:!1}),[-.024,0,.024].forEach(Z=>D.P(k,ze(.014,.05,.014),16177060,[Z,-.05,.02],{e:16769192,line:!1}));let Y=D.P(k,ze(.05,.012,.028),16776424,[0,-.03,.03],{e:16777215,line:!1}),H=new un(16769186,1.15,2.4,2);return H.position.set(0,-.03,.05),k.add(H),{g:B,lo:V,end:k,light:H,palmo:Y}}let y=Le(t,h,[.16,.27,0],.38,.034,a,{hand:1}),g=e?f(t,h):Le(t,h,[-.15,.27,0],.38,.034,a,{hand:1}),m=t.G(h,[0,.44,0]);m.scale.setScalar(1.12);let _=Hi(t,m,{iris:5904916,stern:.32}),v=1512220;t.P(m,new Xt(.084,14,10,0,Ne*2,0,Ne*.5),v,[0,.022,-.012],{rot:[-.45,0,0],sc:[1,1,1.04],line:1.05}),[[-.06,.06,-.02,.7,0],[-.025,.085,0,.25,0],[.02,.088,0,-.2,0],[.06,.06,-.01,-.7,0],[0,.06,-.07,0,-.6],[-.045,.03,-.07,.4,-.8],[.045,.03,-.07,-.4,-.8]].forEach(([D,N,B,V,k])=>t.P(m,jt(.03,.09,5),v,[D,N,B],{rot:[k-.25,0,V],line:1.08})),[[-.045,.07,.055,.6],[-.012,.078,.064,.2],[.025,.076,.06,-.3]].forEach(([D,N,B,V])=>t.P(m,jt(.02,.06,4),v,[D,N,B],{rot:[Ne-.9,0,V],line:1.1})),t.P(m,jt(.022,.085,4),14686770,[.05,.065,.045],{rot:[-.5,0,-.6],e:6291472,line:1.1});let x=new rt,C=new xt,T=new xt;t.P(x,ze(.022,.6,.007),3149850,[0,.38,0],{e:5899796,line:1.05}),t.P(x,ze(.005,.6,.009),16728160,[.011,.38,0],{e:16717880,line:!1}),t.P(x,Et(.03,.03,.012,10),10491944,[0,.075,0],{rot:[0,0,0],line:!1}),t.P(x,Et(.012,.012,.14,6),722956,[0,0,0]),C.position.y=.68,T.position.y=.1,x.add(C,T);let R=D=>{D=="hand"?(x.scale.setScalar(1),g.end.add(x),x.position.set(0,-.02,.01),x.rotation.set(Ne/2,0,0)):(h.add(x),x.position.set(.1,.33,-.1),x.rotation.set(0,0,2.5),x.scale.setScalar(.85))};return R(n),i.userData={K:t,body:r,torso:h,head:m,L:l,R:c,armL:y,armR:g,coat:d,sword:x,tip:C,swBase:T,eyes:_,putSword:R,h:1,alba:e?g.light:null,albaArm:e?g:null},i}function Ch(){let n=di(),e=new rt,t=n.G(e),i=1844530,r=2901080,a=2783882,s=Le(n,t,[-.045,.47,0],.45,.03,i,{foot:1,footCol:1053722}),o=Le(n,t,[.045,.47,0],.45,.03,i,{foot:1,footCol:1053722});n.P(t,Et(.085,.08,.07,12),i,[0,.47,0],{sc:[1,1,.7]}),n.P(t,ze(.035,.05,.03),3811872,[.085,.44,.02],{line:1.1});let l=n.G(t,[0,.49,0]);n.P(l,Lt([[.001,-.02],[.075,-.02],[.08,.08],[.098,.19],[.1,.24],[.06,.3],[.001,.3]],12),i,[0,0,0],{sc:[1,1,.68],line:1.04}),n.P(l,ze(.012,.2,.004),4251903,[.035,.14,.07],{e:41152,line:!1,rot:[0,0,.2]});let c=n.G(l,[0,0,0]),h=[[.11,.27],[.105,.15],[.1,.04],[.12,-.06],[.14,-.14]];n.P(c,Lt(h,14,.9,Ne*2-1.8),r,[0,0,-.005],{sc:[1,1,.8],line:1.03}),n.P(c,Lt(h,14,.9,Ne*2-1.8),n.M(1454138,{side:ft}),[0,0,-.005],{sc:[.98,1,.78],line:!1}),n.P(l,new Vn(.06,.028,6,12),a,[0,.3,0],{rot:[Ne/2,0,0],sc:[1,.85,1],line:1.06}),n.P(l,ze(.05,.16,.02),a,[-.04,.2,-.07],{rot:[.3,0,.2],line:1.08});let u=Le(n,l,[.125,.25,0],.34,.028,r,{hand:1,lowCol:i}),d=Le(n,l,[-.125,.25,0],.34,.028,r,{hand:1,lowCol:i}),p=new rt;n.P(p,jt(.012,.09,4),11589864,[0,.06,0],{e:2121840,line:!1}),n.P(p,Et(.007,.007,.05,5),1118481,[0,0,0],{line:!1}),d.end.add(p),p.rotation.x=Ne/2,p.position.z=.01;let f=n.G(l,[0,.41,0]);f.scale.setScalar(1.1);let y=Hi(n,f,{r:.07,skin:14198412,iris:1714736,stern:.12,eyeGlow:3207423,mouth:9062984});return n.P(f,new Xt(.076,14,10,0,Ne*2,0,Ne*.5),1320494,[0,.012,-.006],{rot:[-.5,0,0],line:1.05}),[[-.04,.045,.062,.4],[0,.05,.07,.05],[.035,.045,.064,-.35]].forEach(([g,m,_,v])=>n.P(f,jt(.02,.06,4),1320494,[g,m,_],{rot:[Ne-.6,0,v],line:1.1})),n.P(f,new Xt(.098,14,10,Ne/2+Ne*.3,Ne*2-Ne*.6,0,Ne*.8),r,[0,0,-.005],{line:1.04,side:vl}),n.P(f,jt(.05,.1,8),r,[0,.09,-.04],{rot:[-.6,0,0],line:1.06}),e.userData={K:n,body:t,torso:l,head:f,L:s,R:o,armL:u,armR:d,coat:c,kunai:p,eyes:y,h:.93},e}function Cl(){let n=di(),e=new rt,t=n.G(e),i=7236214,r=4401242,a=2301994,s=5591644,o=Le(n,t,[-.07,.44,0],.42,.04,a,{foot:1,footCol:1315350}),l=Le(n,t,[.07,.44,0],.42,.04,a,{foot:1,footCol:1315350});o.g.rotation.x=-.25,o.lo.rotation.x=.45,l.g.rotation.x=.1,l.lo.rotation.x=.3;let c=n.G(t,[0,.45,0]);c.rotation.x=.38,n.P(c,Lt([[.001,-.03],[.105,-.03],[.12,.08],[.14,.2],[.13,.27],[.07,.32],[.001,.33]],12),r,[0,0,0],{sc:[1,1,.8],line:1.04}),[[.05,.1,.1],[-.06,.18,.1],[0,.05,-.11]].forEach(([m,_,v])=>n.P(c,ze(.04,.04,.01),6987840,[m,_,v],{rot:[0,0,.4],e:2109456,line:!1})),n.P(c,bt(.07,10,8),s,[-.13,.27,0],{sc:[1.2,.8,1.1],line:1.06,flat:!0}),[0,1,2].forEach(m=>n.P(c,jt(.016,.06,5),10526890,[-.15+m*.02,.32,-.02+m*.02],{rot:[0,0,.5-m*.3],line:!1})),n.P(c,new Xt(.1,12,8,0,Ne*2,0,Ne*.5),r,[0,.29,-.05],{rot:[-.9,0,0],line:1.04,side:vl});let h=Le(n,c,[.15,.25,0],.38,.038,r,{hand:1,handCol:2762800,lowCol:2762800}),u=Le(n,c,[-.15,.25,0],.38,.038,r,{hand:1,handCol:2762800});h.g.rotation.set(-.5,0,.25),h.lo.rotation.x=-.9,u.g.rotation.set(-.3,0,-.2),u.lo.rotation.x=-.8;let d=new rt;n.P(d,Et(.022,.028,.5,8),8011298,[0,.2,0],{line:1.08}),[.1,.25,.38].forEach(m=>n.P(d,Et(.03,.03,.02,8),4208174,[0,m,0],{line:!1})),h.end.add(d),d.rotation.x=Ne/2+.3;let p=n.G(c,[0,.36,.05]);p.rotation.x=-.3,n.P(p,bt(.085,14,10),i,[0,0,0],{sc:[.95,.9,1.05],line:1.05}),n.P(p,jt(.06,.15,10),i,[0,-.02,.1],{rot:[Ne/2,0,0],line:1.06}),n.P(p,bt(.018,8,6),13660288,[0,-.02,.18],{line:!1});let f=[];[-1,1].forEach(m=>{let _=n.G(p,[m*.04,.025,.065]);n.P(_,bt(.016,8,6),16769088,[0,0,0],{e:11571200,sc:[1,.7,.6],line:!1}),n.P(_,bt(.007,6,4),0,[0,0,.009],{line:!1}),f.push(_),n.P(p,ze(.04,.008,.01),1118481,[m*.04,.05,.07],{rot:[0,0,m*.45],line:!1});let v=n.G(p,[m*.065,.07,-.01]);n.P(v,bt(.045,10,8),i,[0,.02,0],{sc:[1,1,.3],line:1.08}),n.P(v,bt(.03,8,6),12614280,[0,.02,.012],{sc:[1,1,.2],line:!1}),v.rotation.z=-m*.4,n.P(p,jt(.007,.025,4),15790304,[m*.015,-.06,.15],{rot:[Ne,0,0],line:!1})}),n.P(p,Et(.012,.012,.02,6),11579576,[.07,0,.02],{rot:[0,0,Ne/2],line:!1});let y=[[0,.42,-.08],[0,.3,-.25],[.05,.12,-.38],[.15,.05,-.5],[.25,.12,-.58]].map(m=>new E(...m)),g=n.P(t,new Wn(new xr(y),16,.014,5),9076880,[0,0,0],{line:1.15});return e.userData={K:n,body:t,torso:c,head:p,L:o,R:l,armL:h,armR:u,club:d,tail:g,eyes:f,h:1},e}function Ph(){let n=di(),e=new rt,t=n.G(e),i=3805744,r=16732058,a=1708064,s=Le(n,t,[-.048,.48,0],.46,.03,a,{foot:1,footCol:1181712}),o=Le(n,t,[.048,.48,0],.46,.03,a,{foot:1,footCol:1181712});n.P(t,Et(.082,.078,.06,12),a,[0,.48,0],{sc:[1,1,.7]});let l=n.G(t,[0,.5,0]);n.P(l,Lt([[.001,-.02],[.07,-.02],[.078,.1],[.09,.2],[.055,.28],[.001,.29]],12),2755618,[0,0,0],{sc:[1,1,.66],line:1.04}),n.P(l,ze(.16,.22,.04),i,[0,.12,-.02],{line:1.04}),n.P(l,ze(.02,.18,.012),r,[.055,.12,.03],{e:1672e4,line:!1});let c=Le(n,l,[.13,.24,0],.34,.026,i,{hand:1}),h=Le(n,l,[-.13,.24,0],.34,.026,i,{hand:1}),u=n.G(h.end,[0,-.02,.02]),d=new Gn(new E(0,0,0),new E(.15,.05,.2),new E(.28,-.15,.05));n.P(u,new Wn(d,12,.012,6),r,[0,0,0],{e:16724104,line:!1});let p=n.G(l,[0,.38,0]);p.scale.setScalar(1.08);let f=Hi(n,p,{r:.07,skin:15775898,iris:16732064,stern:.05,eyeGlow:16732064,mouth:11028584}),y=1312784;return n.P(p,new Xt(.08,14,10,0,Ne*2,0,Ne*.55),y,[0,.02,-.01],{rot:[-.35,0,0],line:1.05}),[[-.05,.02,-.04],[.05,.02,-.04]].forEach(([g,m,_],v)=>n.P(p,ze(.03,.16,.03),y,[g,m,_],{rot:[.2,0,v?-.3:.3],line:1.06})),n.P(p,jt(.018,.1,4),r,[.04,.07,.04],{rot:[-.4,0,-.5],e:8396880,line:!1}),e.userData={K:n,body:t,torso:l,head:p,L:s,R:o,armL:c,armR:h,eyes:f,whip:u,h:.95},e}function Ih(){let n=di(),e=new rt,t=n.G(e),i=1056808,r=4055295,a=Le(n,t,[-.05,.5,0],.5,.032,791576,{foot:1,footCol:527376}),s=Le(n,t,[.05,.5,0],.5,.032,791576,{foot:1,footCol:527376});n.P(t,Et(.09,.085,.06,12),791576,[0,.5,0],{sc:[1,1,.68]});let o=n.G(t,[0,.52,0]);n.P(o,Lt([[.001,-.02],[.08,-.02],[.09,.12],[.1,.24],[.06,.32],[.001,.33]],12),i,[0,0,0],{sc:[1,1,.64],line:1.04}),n.P(o,ze(.2,.42,.05),i,[0,.08,-.03],{line:1.03}),n.P(o,ze(.012,.28,.012),r,[0,.1,.02],{e:49376,line:!1});let l=Le(n,o,[.14,.26,0],.36,.028,i,{hand:1,handCol:13146240}),c=Le(n,o,[-.14,.26,0],.36,.028,i,{hand:1,handCol:13146240}),h=n.G(o,[.08,.2,-.08]);n.P(h,ze(.03,.62,.03),1709080,[0,.1,0],{line:1.04}),n.P(h,ze(.012,.5,.012),16719936,[.02,.15,0],{e:16715816,line:!1}),n.P(h,jt(.02,.12,5),13688296,[0,.48,0],{e:4218992,line:!1});let u=n.G(o,[0,.42,0]);u.scale.setScalar(1.05);let d=Hi(n,u,{r:.068,skin:14203044,iris:1323072,stern:.4,eyeGlow:4255999,mouth:7356488});return n.P(u,new Xt(.072,12,8,0,Ne*2,0,Ne*.48),790548,[0,.03,0],{line:1.05}),n.P(u,ze(.09,.02,.04),790548,[0,.055,.04],{line:!1}),e.userData={K:n,body:t,torso:o,head:u,L:a,R:s,armL:l,armR:c,eyes:d,rifle:h,h:1.02},e}function Lh(){let n=di(),e=new rt,t=n.G(e),i=Le(n,t,[-.05,.48,0],.46,.032,1711138,{foot:1}),r=Le(n,t,[.05,.48,0],.46,.032,1711138,{foot:1}),a=n.G(t,[0,.5,0]);n.P(a,Lt([[.001,-.02],[.1,-.02],[.11,.16],[.1,.28],[.05,.34],[.001,.35]],12),15922422,[0,0,0],{sc:[1,1,.7],line:1.04}),n.P(a,ze(.16,.08,.02),12728906,[0,.12,.07],{line:!1});let s=Le(n,a,[.14,.26,0],.34,.03,15922422,{hand:1}),o=Le(n,a,[-.14,.26,0],.34,.03,15922422,{hand:1}),l=n.G(a,[0,.4,0]),c=Hi(n,l,{r:.072,skin:13148296,iris:2109504,stern:.1,mouth:6307904});return n.P(l,ze(.09,.035,.02),14212838,[0,.04,.07],{line:!1}),n.P(l,bt(.02,8,6),4251776,[.05,.02,.08],{e:2146400,line:!1}),e.userData={K:n,body:t,torso:a,head:l,L:i,R:r,armL:s,armR:o,eyes:c,h:.96},e}function Pl(){let n=di(),e=new rt,t=n.G(e),i=Le(n,t,[-.07,.55,0],.55,.04,1050636,{foot:1,footCol:525318}),r=Le(n,t,[.07,.55,0],.55,.04,1050636,{foot:1,footCol:525318}),a=n.G(t,[0,.58,0]);n.P(a,Lt([[.001,-.02],[.12,-.02],[.13,.18],[.14,.32],[.08,.42],[.001,.43]],10),1312780,[0,0,0],{sc:[1,1,.7],line:1.03}),n.P(a,ze(.02,.36,.012),16719920,[0,.16,.08],{e:16715808,line:!1});let s=Le(n,a,[.16,.3,0],.42,.036,1050636,{hand:1,handCol:2101268}),o=Le(n,a,[-.16,.3,0],.42,.036,1050636,{hand:1,handCol:2101268}),l=n.G(o.end);n.P(l,ze(.012,.42,.04),12634320,[0,.16,0],{e:8425632,line:!1});let c=n.G(a,[0,.48,0]);n.P(c,ze(.12,.14,.1),656904,[0,0,0],{line:1.04});let h=[];return[-1,1].forEach(u=>{let d=n.P(c,ze(.035,.012,.01),16719920,[u*.03,.02,.055],{e:16715808,line:!1});h.push(d)}),e.userData={K:n,body:t,torso:a,head:c,L:i,R:r,armL:s,armR:o,eyes:h,lama:l,h:1.2},e}function Il(){let n=di(),e=new rt,t=n.G(e),i=Le(n,t,[-.09,.5,0],.48,.05,2757644,{foot:1,footCol:1050628}),r=Le(n,t,[.09,.5,0],.48,.05,2757644,{foot:1,footCol:1050628}),a=n.G(t,[0,.52,0]);n.P(a,Lt([[.001,-.04],[.16,-.04],[.18,.12],[.17,.28],[.1,.36],[.001,.37]],12),6953008,[0,0,0],{sc:[1.15,1,.8],line:1.03}),n.P(a,ze(.22,.1,.04),14725192,[0,.2,.1],{e:8413216,line:!1});let s=Le(n,a,[.2,.26,0],.36,.045,4853792,{hand:1,handCol:12619888}),o=Le(n,a,[-.2,.26,0],.36,.045,4853792,{hand:1,handCol:12619888}),l=n.G(a,[0,.42,0]);l.scale.setScalar(1.15);let c=Hi(n,l,{r:.08,skin:13146232,iris:4200464,stern:.55,mouth:6299680});for(let h=0;h<5;h++)n.P(l,Et(.012,.02,.16,5),11569728,[Math.cos(h/5*Ne*2)*.09,.1,Math.sin(h/5*Ne*2)*.09],{e:8413232,line:!1});return e.userData={K:n,body:t,torso:a,head:l,L:i,R:r,armL:s,armR:o,eyes:c,h:1.15},e}function Dh(){let n=di(),e=new rt,t=n.G(e),i=Le(n,t,[-.1,.52,0],.5,.055,3811876,{foot:1}),r=Le(n,t,[.1,.52,0],.5,.055,3811876,{foot:1}),a=n.G(t,[0,.54,0]);n.P(a,ze(.34,.4,.2),9060400,[0,.12,0],{line:1.03});let s=Le(n,a,[.22,.28,0],.38,.05,6960168,{hand:1}),o=Le(n,a,[-.22,.28,0],.38,.05,6960168,{hand:1}),l=n.G(a,[0,.42,0]),c=Hi(n,l,{r:.09,skin:13674632,iris:3153936,stern:.2,mouth:7356480});return n.P(l,ze(.16,.04,.08),3810332,[0,.08,0],{line:1.05}),e.userData={K:n,body:t,torso:a,head:l,L:i,R:r,armL:s,armR:o,eyes:c,h:1.2},e}function Tt(n=2371652,e=14725264){let t=di(),i=new rt,r=t.G(i),a=Le(t,r,[-.05,.48,0],.46,.03,n,{foot:1}),s=Le(t,r,[.05,.48,0],.46,.03,n,{foot:1}),o=t.G(r,[0,.5,0]);t.P(o,Lt([[.001,-.02],[.09,-.02],[.1,.14],[.08,.26],[.04,.32],[.001,.33]],10),n,[0,0,0],{sc:[1,1,.7],line:1.04});let l=Le(t,o,[.13,.24,0],.32,.028,n,{hand:1}),c=Le(t,o,[-.13,.24,0],.32,.028,n,{hand:1}),h=t.G(o,[0,.38,0]),u=Hi(t,h,{r:.07,skin:e,iris:3154968,stern:.15});return t.P(h,new Xt(.075,12,8,0,Ne*2,0,Ne*.5),1708556,[0,.02,0],{line:1.05}),i.userData={K:t,body:r,torso:o,head:h,L:a,R:s,armL:l,armR:c,eyes:u,h:.94},i}function Ll(n,e,t="idle"){let i=n.userData;if(!i||!i.L||i.freeze)return;let r=t==="walk",a=t==="talk",s=t==="fight",o=r?7.2:s?8.5:1.6,l=Math.sin(e*o),c=Math.cos(e*o);i.body.position.y=r?Math.abs(l)*.04:Math.sin(e*1.5)*.012,i.torso.rotation.x=(r?.08:0)+(a?Math.sin(e*6)*.04:0),i.torso.rotation.y=a?Math.sin(e*2.1)*.14:Math.sin(e*.7)*.04,i.head&&(i.head.rotation.x=a?Math.sin(e*7)*.09:Math.sin(e*1.2)*.025,i.head.rotation.y=a?Math.sin(e*1.6)*.16:0);let h=r?l*.72:s?l*.12:Math.sin(e*1.1)*.035;i.L.g.rotation.x=h,i.R.g.rotation.x=-h,i.L.lo.rotation.x=r?Math.max(0,-c)*.85:.12,i.R.lo.rotation.x=r?Math.max(0,c)*.85:.12,i.armL&&i.armR&&(s?(i.armR.g.rotation.x=-.35+l*1.15,i.armR.lo.rotation.x=-.45,i.armL.g.rotation.x=-.25-l*.45,i.armL.lo.rotation.x=-.3):(i.armL.g.rotation.x=r?-l*.55:-.1+Math.sin(e*1.3)*.05,i.armR.g.rotation.x=r?l*.55:-.1+Math.sin(e*1.3+1)*.05,i.armL.lo.rotation.x=i.armR.lo.rotation.x=r?-.28:-.18)),i.alba&&(i.alba.intensity=1.05+Math.sin(e*3)*.3),i.whip&&(i.whip.rotation.z=Math.sin(e*(s?12:2))*(s?.7:.06)),i.rotors&&i.rotors.forEach((u,d)=>u.rotation.y+=.4*(d%2?1:-1))}var Ol="punkcity-cap2-v1",le=n=>document.getElementById(n),Kn={ras:n=>Cr(n||{sword:"back"}),rasIntero:()=>Cr({sword:"hand",alba:!1}),rasFerito:()=>{let n=Cr({sword:"back",alba:!1});return n.userData.armR.g.visible=!1,n},kiri:()=>Ch(),lyra:()=>Ph(),sable:()=>Ih(),medico:()=>Lh(),zero:()=>Pl(),gorm:()=>Il(),brick:()=>Dh(),ratto:()=>Cl(),aram:()=>Tt(1713988,13148288),nadia:()=>Tt(4857920,15777960),guardia:()=>Tt(5904424,13146232),varga:()=>Tt(1710626,11571320),teo:()=>Tt(3811376,14203040),esattore:()=>Tt(5904424,13146232),fabbro:()=>Tt(2761760,12886152),lavandaia:()=>Tt(2113592,14725264),ragazzo:()=>Tt(2371652,15253664),vecchio:()=>Tt(3154968,13674632),sordo:()=>Tt(1844272,13152408),debitore:()=>Tt(3813432,13676704),debitoreb:()=>Tt(2762800,13150352),edda:()=>Tt(3813440,14993592),ruggine:()=>Tt(4861984,13148288)},$n={infermeria:{nome:"Clinica clandestina",w:7,d:6,pav:3811892,neon:6222032,spawn:[0,1.6],gente:[["medico",1.2,-1.2,-.4]],porte:[[3.1,0,"mercato","Mercato"]]},mercato:{nome:"Mercato sotto il ponte",w:11,d:8,pav:4862008,neon:16732058,spawn:[-3.2,1.6],gente:[["teo",-1.6,-2.2,.5],["fabbro",.2,-2.3,.4],["lavandaia",2.2,-1.8,-.6],["ragazzo",3.2,.2,2.2],["vecchio",-3.2,-.4,1.2],["esattore",1.2,1.4,3]],porte:[[-4.8,0,"infermeria","Clinica"],[4.6,0,"rifugio","Cisterna","dettoVoci"],[0,-3.4,"sala","Chiatta","mattina"]]},rifugio:{nome:"Cisterna vuota",w:6,d:6,pav:2365472,neon:8319231,spawn:[0,1.6],gente:[["kiri",0,-1.2,.4]],porte:[[0,2.5,"mercato","Mercato"],[2.5,0,"pozzo","Il Pozzo","kiriCisterna"]]},pozzo:{nome:"Il Pozzo",w:8,d:8,pav:1840144,neon:16765562,spawn:[0,2.4],gente:[["sordo",0,-1.3,.2]],porte:[[0,3.4,"rifugio","Cisterna"],[3.4,0,"sala","Chiatta di Gorm","registro"]]},sala:{nome:"Chiatta di Re Gorm",w:8,d:8,pav:2756632,neon:16719936,spawn:[0,2.4],gente:[],boss:!0,porte:[[-3.4,0,"pozzo","Pozzo"],[0,3.4,"mercato","Mercato","mattina"],[0,-3.2,"cortile","Rust Alley","uomini"]]},cortile:{nome:"Rust Alley, cortile",w:8,d:8,pav:3810328,neon:16746564,spawn:[0,2.4],gente:[["brick",.2,-1.2,.3],["debitore",-1.3,-1.5,.2],["debitoreb",1.4,-.8,-.4]],porte:[[0,3.4,"sala","Chiatta"],[3.3,0,"casa","Casa di Edda","brickVisto"],[-3.3,0,"scale","Scale","edda"]]},casa:{nome:"Casa della signora Edda",w:6,d:6,pav:2761776,neon:13148415,spawn:[0,1.6],gente:[["edda",0,-1.1,.2]],porte:[[0,2.5,"cortile","Cortile"]]},scale:{nome:"Scale della palazzina",w:5,d:7,pav:2365456,neon:16755302,spawn:[0,2],gente:[["brick",0,-1.2,.2]],porte:[[0,2.8,"cortile","Cortile"],[0,-2.8,"magazzino","Magazzino","brickUnito"]]},magazzino:{nome:"Magazzino di Madre Ruggine",w:9,d:8,pav:2759700,neon:16737843,spawn:[0,2.4],gente:[["ruggine",0,-1.6,.2],["guardia",-1.6,-.8,.8],["guardia",1.5,-.7,-.6],["kiri",1.2,1.2,2.6]],porte:[[0,3.4,"scale","Scale"],[0,-3.3,"tetti","Tetti","ruggine"]]},tetti:{nome:"Tetti di Rust Alley",w:8,d:10,pav:1712176,neon:6737151,spawn:[0,3.2],gente:[["zero",0,-2.4,.2],["kiri",-2.2,1.4,1]],porte:[[0,4.2,"magazzino","Magazzino"],[0,-4.2,"sala","Chiatta","zeroFatto"]]}},z=null,gt="titolo",es=0,Rt,We,wi,Xi,Wi,Pr,Ct=[],Fl=[],Ir=null,Zn={on:!1,x:0,y:0},Nt=null,At=null,ye=null,Ut=null,Yn=!1;function Tp(){return{v:2,prologo:!1,stanza:"infermeria",x:0,z:1.6,soldi:15,rispetto:0,oggetti:{medikit:1,stim:0,registro:0,chiave:0},party:[{id:"ras",xp:0,hp:96,mp:22},{id:"kiri",xp:0,hp:84,mp:28}],flag:{},sceltaGorm:null,sceltaRuggine:null,covo:null}}function ke(){z&&(We&&gt==="gioco"&&(z.x=We.position.x,z.z=We.position.z),localStorage.setItem(Ol,JSON.stringify(z)))}function Bl(){try{return JSON.parse(localStorage.getItem(Ol)||"null")}catch{return null}}function Ul(n){return 1+Math.floor(n/50)}function qt(n){let e=Ul(n.xp),t={ras:{hp:96,atk:14,mp:22,spd:11,nome:"Ras"},kiri:{hp:84,atk:11,mp:28,spd:13,nome:"Kiri"},brick:{hp:120,atk:16,mp:8,spd:8,nome:"Brick"}},i=t[n.id]||t.ras;return{...n,...i,lv:e,hpMax:i.hp+(e-1)*16,atk:i.atk+(e-1)*2,mpMax:i.mp+(e-1)*3}}function wp(){return qt(z.party[0])}function zl(){if(Yn||Ut)return;let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ut=new n;let e=Ut.createGain();e.gain.value=.045,e.connect(Ut.destination);let t=Ut.createOscillator();t.type="sawtooth",t.frequency.value=55;let i=Ut.createBiquadFilter();i.type="lowpass",i.frequency.value=220,t.connect(i),i.connect(e),t.start();let r=Ut.createOscillator();r.type="triangle",r.frequency.value=220;let a=Ut.createGain();a.gain.value=.02,r.connect(a),a.connect(e),r.start(),setInterval(()=>{!Ut||Yn||r.frequency.setValueAtTime([196,220,247,175][Math.floor(es)%4],Ut.currentTime)},1400)}function Ap(){let n=le("c");Xi=new Da({canvas:n,antialias:!0,powerPreference:"high-performance"}),Xi.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),Xi.setSize(innerWidth,innerHeight),Xi.setClearColor(459528),Wi=new Na,Wi.fog=new Ua(1312784,8,22),wi=new St(48,innerWidth/innerHeight,.1,40),Wi.add(new Ya(12036292,1.15));let e=new qa(16773364,1.25);e.position.set(2,6,3),Wi.add(e),Pr=new un(16769186,0,4),Wi.add(Pr),Rt=new rt,Wi.add(Rt),addEventListener("resize",()=>{wi.aspect=innerWidth/innerHeight,wi.updateProjectionMatrix(),Xi.setSize(innerWidth,innerHeight)})}function Vi(n,e,t,i,r,a,s){let o=new ot(new ti(n,e,t),new wr({color:i}));return o.position.set(r,a,s),Rt.add(o),o}function Gh(){for(;Rt.children.length;)Rt.remove(Rt.children[0]);Ct.length=0,Fl.length=0,Ir=null,We=null}function Ti(n,e,t,i,r){let a=(r||Kn[n])();a.position.set(e,0,t),a.rotation.y=i||0,a.scale.setScalar(n==="gorm"||n==="zero"||n==="brick"?1.45:1.35),Rt.add(a);let s={id:n,m:a,x:e,z:t,mode:"idle"};return Ct.push(s),s}function Rp(n,e){let t=new ot(new ki(.12,.12,2.2,8),new wr({color:3752522}));t.position.set(n,1.1,e),Rt.add(t)}function pn(n){let e=$n[n];Gh(),Wi.fog.color.setHex(e.pav),Xi.setClearColor(e.pav),Vi(e.w,.2,e.d,e.pav,0,-.1,0),Vi(e.w,1.6,.2,2892336,0,.8,-e.d/2),Vi(e.w,1.6,.2,2892336,0,.8,e.d/2),Vi(.2,1.6,e.d,2892336,-e.w/2,.8,0),Vi(.2,1.6,e.d,2892336,e.w/2,.8,0);let t=new ot(new ti(e.w*.7,.06,.06),new zi({color:e.neon}));t.position.set(0,1.7,-e.d/2+.16),Rt.add(t);let i=new un(e.neon,2.4,14);i.position.set(0,1.6,0),Rt.add(i),Rp(e.w/2-.4,-1);let r=z.flag.braccio?()=>Cr({sword:"back"}):Kn.rasFerito;gt!=="prologo"&&(We=Ti("ras",z.x,z.z,Math.PI,r).m),(e.gente||[]).forEach(([a,s,o,l])=>{n==="mercato"&&a==="esattore"&&z.flag.mercatoIntro||(n==="cortile"||n==="scale")&&a==="brick"&&z.flag.brickUnito||n==="scale"&&a==="brick"&&!z.flag.edda||(n==="magazzino"&&z.flag.brickUnito&&a==="kiri"&&Ti("brick",-1.3,1.1,.4),Ti(a,s,o,l))}),e.casse&&!z.flag.casse&&(Ir=Vi(.9,.55,.6,13148746,e.casse[0],.28,e.casse[1])),(e.porte||[]).forEach(([a,s,o,l,c])=>{if(c&&!z.flag[c])return;let h=Vi(.7,1.2,.15,3809328,a,.6,s);Fl.push({x:a,z:s,verso:o,nome:l,mesh:h})}),(n==="sala"&&!z.flag.gormFatto||n==="sala"&&z.sceltaGorm==="risparmia")&&Ti("gorm",0,-1.6,.4),n==="sala"&&z.flag.mattina&&z.sceltaGorm!=="risparmia"&&Ti("sordo",1.15,-1.1,-.2),n==="sala"&&z.flag.zeroFatto&&(Ct.some(a=>a.id==="kiri")||Ti("kiri",-1.2,.5,.6),Ct.some(a=>a.id==="brick")||Ti("brick",1.15,.4,-.5)),le("luogo").textContent=e.nome,pi()}function pi(){if(!z)return;let n=wp();le("risorse").textContent=`Lv ${n.lv}  \xB7  ${n.hp}/${n.hpMax} PV  \xB7  ${z.soldi} soldi`}function Cp(n){if(!We||gt!=="gioco"||At||ye)return;let e=0,t=0;Zn.on&&(e=Zn.x,t=Zn.y),(Dt.ArrowUp||Dt.w||Dt.W)&&(t-=1),(Dt.ArrowDown||Dt.s||Dt.S)&&(t+=1),(Dt.ArrowLeft||Dt.a||Dt.A)&&(e-=1),(Dt.ArrowRight||Dt.d||Dt.D)&&(e+=1);let i=$n[z.stanza],r=Ct.find(o=>o.id==="ras");if(e||t){let o=Math.hypot(e,t)||1;We.position.x=Math.max(-i.w/2+.5,Math.min(i.w/2-.5,We.position.x+e/o*n*2.3)),We.position.z=Math.max(-i.d/2+.5,Math.min(i.d/2-.5,We.position.z+t/o*n*2.3)),We.rotation.y=Math.atan2(e,t),r.mode="walk"}else r.mode="idle";let a=Fl.find(o=>Math.hypot(o.x-We.position.x,o.z-We.position.z)<.7);a&&Nl(a.verso),i.trappola&&!z.flag[i.trappola.id]&&Math.abs(We.position.z-i.trappola.z)<.7&&(z.flag[i.trappola.id]=!0,ke(),Lr([{id:"ratto",nome:"Ratto di Ferro",hp:36,atk:8,def:2,spd:8,soldi:14,xp:20},{id:"ratto",nome:"Ratto di Ferro",hp:36,atk:8,def:2,spd:7,soldi:14,xp:20}])),z.stanza==="sala"&&z.flag.registro&&!z.flag.gormFatto&&!z.flag.mattina&&Math.abs(We.position.z)<.6&&(We.position.z=1.6,qe([["GORM","Il figlio dell'ingegnere. Con il braccio che vale un quartiere."],["RAS","Vale di pi\xF9."],["GORM","Tutto vale quanto qualcuno paga. \xC8 l'unica legge che conosco."],["RAS","Allora te ne insegno un'altra."],["GORM","Sentiamo."],["RAS","Stanotte il mercato non ti paga. Domani nemmeno. Il terzo esattore ti ruba da due anni e i Varga sanno quanto prendi meglio di te."],["","\u2026"],["GORM","Tu hai preso il mio registro."],["RAS","L'ho letto. Ci sono i nomi di chi ha portato via i miei."],["GORM","Era lavoro."],["RAS","Anche questo."]],()=>Lr([{id:"gorm",nome:"Re Gorm",hp:120,atk:13,def:4,spd:7,soldi:80,xp:70,boss:1},{id:"guardia",nome:"Guardia di Gorm",hp:48,atk:10,def:3,spd:6,soldi:16,xp:22}],"gorm"))),Nt=null;let s=1.6;Ct.forEach(o=>{if(o.id==="ras")return;let l=Math.hypot(o.m.position.x-We.position.x,o.m.position.z-We.position.z);l<s&&(s=l,Nt=o)}),Ir&&Math.hypot(Ir.position.x-We.position.x,Ir.position.z-We.position.z)<s&&(Nt={id:"casse"}),le("azione").classList.toggle("nascosto",!Nt),le("azione").textContent=Nt&&Nt.id==="casse"?"Apri":"Parla"}function Nl(n){if(!$n[n]||n==="sala"&&!z.flag.registro&&!z.flag.mattina)return;z.stanza=n;let e=$n[n];z.x=e.spawn[0],z.z=e.spawn[1],ke(),pn(n),Hh(n)}function Hh(n){if(gt==="gioco"){if(n==="mercato"&&!z.flag.mercatoIntro)return Pp();if(n==="mercato"&&z.sceltaGorm&&!z.flag.mattina)return Dp();if(n==="rifugio"&&z.flag.dettoVoci&&!z.flag.kiriCisterna)return Ip();if(n==="pozzo"&&z.flag.kiriCisterna&&!z.flag.registro)return Lp();if(n==="sala"&&z.flag.mattina&&!z.flag.uomini)return Up();if(n==="cortile"&&z.flag.uomini&&!z.flag.brickVisto)return Np();if(n==="casa"&&z.flag.brickVisto&&!z.flag.edda)return Op();if(n==="scale"&&z.flag.edda&&!z.flag.brickUnito)return Fp();if(n==="magazzino"&&z.flag.brickUnito&&!z.flag.ruggineVista)return Bp();if(n==="tetti"&&z.flag.ruggine&&!z.flag.zeroFatto)return zp();if(n==="sala"&&z.flag.zeroFatto&&!z.flag.cap2)return kp()}}var Uh={fabbro:[["IL FABBRO","Paghiamo il venerd\xEC. Gli esattori sono tre. Il terzo ruba anche a Gorm, e Gorm non lo sa."],["RAS","Come lo sai tu?"],["IL FABBRO","Perch\xE9 da me prende due volte."]],lavandaia:[["LA LAVANDAIA","Mio figlio lavora al Pozzo. Conta le monete. Se lo nomini, ti ammazzo io prima di Gorm."],["RAS","Non lo nomino."],["LA LAVANDAIA","Lo dicono tutti."],["RAS","Io no."]],ragazzo:[["IL RAGAZZO DEI TUBI","Gorm vuole il tuo braccio. Ha detto che con quei soldi compra tutto il quartiere est."],["RAS","Chi gliel'ha detto, del braccio?"],["IL RAGAZZO DEI TUBI","Il medico ha la porta sottile. E la gente ha fame."]],vecchio:[["IL VECCHIO DEL PONTE","Tuo padre una volta mi ha detto che le citt\xE0 non le comanda chi ha le armi. Le comanda chi ha i registri."],["RAS","E Gorm ce li ha?"],["IL VECCHIO DEL PONTE","Gorm ha un solo registro. E un solo uomo che lo tiene."]]};function Pp(){z.flag.mercatoIntro=!0,ke(),qe([["ESATTORE","Teo. Settimana."],["TEO","Ho pagato marted\xEC."],["ESATTORE","Marted\xEC era marted\xEC. Oggi Gorm ha alzato."],["","Teo apre una scatola di latta. Dentro poche monete. L'esattore le prende tutte."],["ESATTORE","Manca la met\xE0. Gioved\xEC la met\xE0 pi\xF9 la met\xE0."],["","Se ne va."],["RAS","Quanto alza?"],["TEO","Quanto vuole. Tu sei il figlio dell'ingegnere."],["RAS","Lo ero."],["TEO","Tua madre mi aggiustava la pompa gratis. Non diceva mai niente. Lasciava l'attrezzo sul banco e se ne andava."],["RAS","Chi ha portato via i corpi?"],["","\u2026"],["TEO","Non qui."],["RAS","Allora dimmi dove."],["TEO","Al Pozzo. Dove Gorm conta i soldi. Ma ragazzo\u2026 tu da solo sei un'altra cosa che Gorm vende."],["RAS","Lo so. Per questo prima ascolto."],["","Missione: Chi paga, chi ha paura. Parla con i venditori del mercato. Ognuno ti d\xE0 un pezzo del giro di Gorm."]],()=>{pn("mercato")})}function Ip(){z.flag.kiriCisterna=!0,ke(),qe([["RAS","Sei tu."],["KIRI","Sei vivo. Non era scontato."],["RAS","Perch\xE9 mi hai salvato?"],["KIRI","Perch\xE9 eri per terra."],["RAS","Ce n'\xE8 tanta, di gente per terra, nelle Fogne."],["","\u2026"],["KIRI","Gorm sa dove dormi. Domani manda qualcuno."],["RAS","Lo so."],["KIRI","E allora?"],["RAS","Allora domani non dormo qui. Dormo dove tiene il registro."],["KIRI","Non vuoi ammazzarlo?"],["RAS","Voglio che smetta di contare. Il resto viene dopo."],["KIRI","Ti serve qualcuno che apra le porte."],["RAS","Me lo stai offrendo?"],["KIRI","Te lo sto dicendo. Decidi tu cosa farci."]],()=>ke())}function Lp(){z.flag.registro=!0,z.oggetti.registro=1,ke(),qe([["SORDO","Non ho sentito entrare nessuno."],["RAS","Non dovevi."],["SORDO","Se mi uccidi, Gorm ne mette un altro domani."],["RAS","Non ti uccido. Ti chiedo quanto prende Gorm dal mercato."],["SORDO","Il doppio di quanto dice."],["RAS","E quanto passa ai Varga?"],["SORDO","Come sai dei Varga?"],["RAS","Tu sai contare. Io so ascoltare."],["","\u2026"],["RAS","Il registro."],["SORDO","Se te lo do, sono morto."],["RAS","Se non me lo dai, domani Gorm sapr\xE0 che il terzo esattore ruba, e che tu lo sapevi. Cos\xEC sei morto lo stesso, ma per una cosa che non hai fatto."],["","Sordo guarda Kiri. Kiri non si muove."],["SORDO","Cosa mi dai?"],["RAS","Un motivo per restare vivo. \xC8 pi\xF9 di quello che ti d\xE0 lui."],["","Sordo spinge il registro sul tavolo. Bottino: Registro di Gorm."]],()=>{pi(),ke()})}function Dp(){z.flag.mattina=!0,ke(),qe([["TEO","Gioved\xEC cosa paghiamo?"],["RAS","Quello che potete. A me."],["TEO","E cosa cambia?"],["RAS","Che se uno vi tocca, lo sa a chi deve rispondere."],["TEO","Gorm diceva la stessa cosa."],["RAS","Gorm non mantiene."],["","\u2026"],["TEO","La prima \xE8 per tua madre."],["","Ras prende la moneta. Kiri lo guarda dal ponte."],["KIRI","Adesso ti conoscono."],["RAS","E adesso cosa succede?"],["KIRI","Adesso ti cercano."]],()=>rs({testo:"Covo: la chiatta di Gorm. Bottino: Corona di Bulloni.",voci:[["Base al mercato",()=>{z.covo="base",z.soldi+=40,z.oggetti.corona=1,ke()}],["Traghetto",()=>{z.covo="traghetto",z.soldi+=40,z.oggetti.corona=1,ke()}],["Smantella",()=>{z.covo="smantella",z.soldi+=90,z.oggetti.corona=1,ke()}]]}))}function Up(){z.flag.uomini=!0,ke();let n=z.sceltaGorm==="risparmia"?["GORM","Ti servono soldi, prima."]:["SORDO","Ti servono soldi, prima."];qe([["RAS","Mi servono uomini."],n,["RAS","I soldi si trovano. Gli uomini che restano no."],["KIRI","A Rust Alley c'\xE8 uno grosso. Picchia per chi paga."],["RAS","Chi paga?"],["KIRI","Gente che lui disprezza. Lo si vede da come chiude la porta quando esce."],["RAS","Perch\xE9 lo fa, allora?"],["KIRI","Vai a vedere."]],()=>pn("sala"))}function Np(){z.flag.brickVisto=!0,ke(),qe([["BRICK","Mi hanno detto di farti male. Dammi un motivo per non farlo."],["DEBITORE","Domani. Giuro."],["BRICK","Domani torno. Non giurare. Non serve a niente."],["","Lo lascia. Si gira. Vede Ras."],["BRICK","Tu non sei di qui."],["RAS","No."],["BRICK","Allora vattene prima che qualcuno mi paghi per te."],["RAS","Chi ti paga oggi?"],["BRICK","Uno che non conosci."],["RAS","E ti piace?"],["","\u2026"],["BRICK","Non mi pagano per farmelo piacere."]],()=>ke())}function Op(){z.flag.edda=!0,z.soldi=Math.max(0,z.soldi-30),ke(),qe([["EDDA","Tu chi sei?"],["RAS","Un amico di suo figlio."],["EDDA","Mio figlio non ha amici. Ha gente che gli deve dei soldi e gente a cui li deve."],["RAS","Allora sono la seconda cosa, ma al contrario."],["","Lei lo guarda a lungo."],["EDDA","Lui lo sa che sei qui?"],["RAS","No."],["EDDA","Si arrabbier\xE0."],["RAS","Lo so."],["EDDA","E perch\xE9 lo fai?"],["RAS","Perch\xE9 nessuno l'ha fatto per mia madre."],["","Ras lascia la busta e la ricevuta della clinica: sei mesi di cure pagati. Se ne va prima che lei possa rispondere."]],()=>{pi(),ke()})}function Fp(){z.flag.brickUnito=!0,z.party.some(n=>n.id==="brick")||z.party.push({id:"brick",xp:0,hp:120,mp:8}),ke(),qe([["BRICK","Sei mesi."],["RAS","S\xEC."],["BRICK","Cosa vuoi?"],["RAS","Niente."],["BRICK","Nessuno vuole niente."],["RAS","Io oggi no."],["BRICK","E domani?"],["RAS","Domani te lo chiedo in faccia. E tu puoi dire di no."],["","\u2026"],["BRICK","Mio padre diceva che un uomo che ti fa un regalo ti ha gi\xE0 comprato."],["RAS","Allora tuo padre non ha mai ricevuto un regalo."],["","\u2026"],["BRICK","Domani alle sei. Dove?"],["RAS","Alla chiatta."],["BRICK","Non per te. Per lei."],["RAS","Mi va bene."],["","Brick si unisce alla famiglia."]],()=>{pi(),pn("scale")})}function Bp(){z.flag.ruggineVista=!0,ke();let n=(z.rispetto||0)>=0;qe([["RUGGINE","Il ragazzo del braccio. Hai fatto inginocchiare Gorm."],["RAS","Ho fatto smettere Gorm."],["RUGGINE","Ognuno racconta le cose come gli conviene."],["RAS","Mi serve passare per Rust Alley. Per arrivare al Mercato."],["RUGGINE","Ci passano in tanti. Poi tornano con gli amici e si fermano."],["RAS","Io non mi fermo."],["RUGGINE","Lo dicevano anche quelli."],["RAS","Loro non ti hanno offerto niente. Io ti offro questo: il quartiere resta tuo. Le regole restano tue. Io ho il passaggio, e se qualcuno ti attacca, rispondo io."],["RUGGINE","E se io dico di no?"],["RAS","Allora passo lo stesso. Ma non sar\xF2 pi\xF9 un amico che passa."],["","\u2026"],["RUGGINE","Mi stai minacciando a casa mia."],["RAS","Ti sto dicendo il prezzo. Le minacce non le faccio. Non servono due volte."]],()=>{n?(z.sceltaRuggine="accordo",z.flag.ruggine=!0,z.oggetti.chiave=1,z.covo=z.covo||"officina",ke(),qe([["RUGGINE","Il passaggio, non il quartiere."],["RAS","Il passaggio."],["RUGGINE","Il giorno che rompi il patto, ti vengo a cercare io. Di persona."],["RAS","Allora non ci vedremo mai pi\xF9."],["","Madre Ruggine ti lascia la Chiave Inglese Madre. Officina condivisa: le riparazioni costano meno."]],()=>pi())):qe([["RUGGINE","Prenditelo, allora."],["RAS","Peccato. Mi stavi simpatica."]],()=>Lr([{id:"ruggine",nome:"Madre Ruggine",hp:130,atk:14,def:4,spd:9,soldi:70,xp:80,boss:1},{id:"guardia",nome:"Gente di Ruggine",hp:40,atk:9,def:2,spd:8,soldi:12,xp:16}],"ruggine"))})}function zp(){qe([["ZERO","Ti hanno rimesso il braccio."],["RAS","Sei tu."],["ZERO","Sono io."]],()=>Lr([{id:"zero",nome:"Zero Hollow",hp:999,atk:18,def:8,spd:14,soldi:0,xp:0}],"zero"))}function kp(){z.flag.cap2=!0,ke(),qe([["BRICK","Chi era?"],["RAS","Quello che ha ucciso i miei."],["BRICK","E ti ha lasciato vivo. Due volte."],["RAS","S\xEC."],["BRICK","Non mi piace un uomo che non finisce il lavoro. Vuol dire che lavora per qualcun altro."],["KIRI","Lavora per i Varga."],["BRICK","E tu come lo sai?"],["","\u2026"],["KIRI","Lo sanno tutti."],["RAS","Brick."],["BRICK","Dimmi."],["RAS","Qui dentro non si mente. Fuori fate quello che serve."],["BRICK","Va bene. Hai sentito?"],["KIRI","Ho sentito."]],()=>{let n=z.sceltaRuggine==="guerra";rs({testo:n?"Covo: Magazzino di Rust Alley. In mano hai la Chiave Inglese Madre.":"Officina condivisa. Madre Ruggine ti ha lasciato la Chiave Inglese Madre. Riparazioni \u221220%.",voci:n?[["Base secondaria",()=>Qa("base")],["Attivit\xE0",()=>Qa("attivita")],["Smantella",()=>Qa("smantella")]]:[["Tienila cos\xEC",()=>Qa("officina")]]})})}function Qa(n){z.covo=n,z.soldi+=50,ke(),le("fine").querySelector("h1").textContent="Rust Alley",le("fineTesto").textContent=z.sceltaRuggine==="guerra"?"Hai preso Rust Alley con la forza. Zero ti ha lasciato vivo un'altra volta: non sei ancora un problema. La scelta \xE8 nel salvataggio.":"Madre Ruggine tiene il quartiere. Tu hai il passaggio. Zero ti ha lasciato vivo: non sei ancora un problema. La scelta \xE8 nel salvataggio.",le("fine").classList.remove("nascosto"),le("joy").classList.add("nascosto"),le("azione").classList.add("nascosto"),gt="fine"}var Nh={medico(){return[["DOC","Piano. Quel braccio non sa ancora quanto sei arrabbiato. Imparer\xE0."]]},kiri(){return[["KIRI","Te lo sto dicendo. Decidi tu cosa farci."]]},teo(){return z.sceltaGorm==="elimina"&&z.flag.mattina?[["","Teo non ti saluta."]]:null},brick(){return[["BRICK","Non mi pagano per farmelo piacere."]]},sordo(){return z.flag.registro?[["SORDO","Il registro \xE8 tuo. Non farmene pentire."]]:[["SORDO","Non ho sentito entrare nessuno."]]},gorm(){return z.sceltaGorm==="risparmia"?[["GORM","Te ne pentirai."],["RAS","Forse. Ma lo decider\xF2 io quando."]]:[["GORM","Avvicinati."]]},edda(){return[["EDDA","Mio figlio non ha amici. Ha gente che gli deve dei soldi e gente a cui li deve."]]},ruggine(){return z.sceltaRuggine==="accordo"?[["RUGGINE","Il passaggio, non il quartiere."]]:[["RUGGINE","Ognuno racconta le cose come gli conviene."]]}};function Oh(){if(!Nt||gt!=="gioco"||At)return;if(Uh[Nt.id]){let t=Nt.id,i=!z.flag["v_"+t];z.flag["v_"+t]=!0,i&&(z.flag.voci=(z.flag.voci||0)+1),qe(Uh[t],()=>{if((z.flag.voci||0)>=4&&!z.flag.dettoVoci){z.flag.dettoVoci=!0,ke(),qe([["","Hai sentito il giro di Gorm. Kiri ti aspetta alla cisterna."]],()=>pn("mercato"));return}ke()}),Nt.mode="talk";return}if(Nt.id==="teo"){let t=Nh.teo();if(t){qe(t,()=>{});return}Gp();return}let n=Nh[Nt.id];if(!n)return;let e=n();e&&(qe(e,()=>ke()),Nt.mode="talk")}function qe(n,e){At={linee:n,i:0,fine:e},kl()}function kl(){let n=At.linee[At.i];le("dialogo").classList.remove("nascosto"),le("chi").textContent=n[0]||"",le("testo").textContent=n[1],le("scelte").innerHTML="";let e=Ct.find(t=>t.id===(n[0]||"").toLowerCase().split(" ")[0]);e&&(e.mode="talk")}function Fh(){if(!(!At||le("scelte").childElementCount)){if(At.i+=1,At.i>=At.linee.length){let n=At.fine;At=null,le("dialogo").classList.add("nascosto"),Ct.forEach(e=>{e.mode==="talk"&&(e.mode="idle")}),n&&n();return}kl()}}function rs(n,e){At={linee:[["",n.testo||""]],i:0,fine:null},kl(),le("scelte").innerHTML="",n.voci.forEach(t=>{let i=document.createElement("button");i.type="button",i.textContent=t[0],i.onclick=()=>{At=null,le("dialogo").classList.add("nascosto"),t[1](),e&&e()},le("scelte").appendChild(i)})}function Gp(){let n=z.covo==="base"||z.covo==="officina",e=n?18:20,t=n?12:15;rs({testo:n?"Teo. Con il covo, filtri e bende costano meno.":"Teo. Filtri e bende.",voci:[[`Medikit \xB7 ${e}`,()=>Bh("medikit",e)],[`Stim \xB7 ${t}`,()=>Bh("stim",t)],["Basta cos\xEC",()=>ke()]]})}function Bh(n,e){if(z.soldi<e){qe([["TEO","Ti mancano i soldi."]],()=>ke());return}z.soldi-=e,z.oggetti[n]=(z.oggetti[n]||0)+1,ke(),pi(),qe([["TEO","Preso."]],()=>{})}var Hp={ratto:()=>Cl(),gorm:()=>Il(),guardia:()=>Kn.guardia(),ruggine:()=>Kn.ruggine(),zero:()=>Pl()};function Lr(n,e){e==="gorm"&&z.flag.registro&&(n=n.filter(t=>t.id!=="guardia")),gt="battaglia",le("azione").classList.add("nascosto"),le("joy").classList.add("nascosto"),ye={nemici:n.map((t,i)=>({...t,hpMax:t.hp,i})),i:0,coda:[],copione:e||"",round:0},le("battaglia").classList.remove("nascosto"),Ct.forEach(t=>{(t.id==="gorm"||t.id==="ruggine"||t.id==="zero")&&(t.m.visible=!1)}),n.forEach((t,i)=>{let r=(Hp[t.id]||Kn.guardia)();r.position.set(-1.2+i*1.2,0,-2.2),r.scale.setScalar(t.boss?1.15:1),Rt.add(r),ye.nemici[i].mesh=r}),e==="gorm"&&z.flag.registro&&(le("log").textContent="Il venerd\xEC non lo pagano pi\xF9, capo."),Vh()}function Vh(){if(!ye)return;let n=ye.nemici.filter(t=>t.hp>0),e=z.party.filter(t=>t.hp>0);if(ye.copione==="zero"&&(ye.round+=1,ye.round>3))return Jn();if(!n.length)return ye.copione==="zero"?Jn():Gl();if(!e.length)return ye.copione==="zero"?Jn():Wh();ye.coda=e.map(t=>({side:"p",ref:t,spd:qt(t).spd})).concat(n.map(t=>({side:"e",ref:t,spd:t.spd||8}))),ye.coda.sort((t,i)=>i.spd-t.spd),ye.i=0,dn()}function dn(){if(!ye)return;let n=ye.nemici.filter(i=>i.hp>0),e=z.party.filter(i=>i.hp>0);if(!n.length)return ye.copione==="zero"?Jn():Gl();if(!e.length)return ye.copione==="zero"?Jn():Wh();if(ye.i>=ye.coda.length)return Vh();let t=ye.coda[ye.i];if(t.ref.hp<=0)return ye.i+=1,dn();Vp(),t.side==="e"?(le("batComandi").innerHTML="",setTimeout(()=>jp(t.ref),550)):Wp(t.ref)}function Vp(){let n=(e,t,i,r)=>`<div class="chi"><b>${e}</b> ${r||""}<div class="barra"><span style="width:${Math.max(0,t/i*100)}%"></span></div></div>`;le("batEroi").innerHTML=z.party.map(e=>{let t=qt(e);return n(t.nome,e.hp,t.hpMax,`Lv ${t.lv} \xB7 PM ${e.mp}`)}).join(""),le("batNemici").innerHTML=ye.nemici.map(e=>n(e.nome,e.hp,e.hpMax)).join("")}function Wp(n){let e=qt(n),t=[["Attacca",()=>Dl(n,e.atk,`${e.nome} colpisce.`)],["Difendi",()=>{n.difesa=!0,le("log").textContent=`${e.nome} si copre.`,ye.i+=1,dn()}]];n.id==="ras"&&t.push(["Taglio Alba",()=>{n.mp<6||(n.mp-=6,Dl(n,e.atk+8,"Il Braccio Alba taglia."))}]),n.id==="kiri"&&t.push(["Rattoppo",()=>{if(n.mp<5)return;n.mp-=5;let i=z.party.slice().sort((a,s)=>a.hp-s.hp)[0],r=qt(i);i.hp=Math.min(r.hpMax,i.hp+34),le("log").textContent="Kiri chiude il taglio.",ye.i+=1,dn()}]),n.id==="brick"&&t.push(["Pugno",()=>Dl(n,e.atk+4,"Brick chiude il pugno.")]),z.oggetti.medikit&&t.push(["Medikit",()=>{z.oggetti.medikit-=1,n.hp=Math.min(e.hpMax,n.hp+40),le("log").textContent="Medikit.",ye.i+=1,dn()}]),le("batComandi").innerHTML="",t.forEach(([i,r])=>{let a=document.createElement("button");a.className="grosso",a.textContent=i,a.onclick=()=>r(),le("batComandi").appendChild(a)}),le("log").textContent=`${e.nome}, tocca a te.`}function Xp(){return ye.nemici.find(n=>n.hp>0)}function Dl(n,e,t){let i=Xp();if(!i)return Gl();let r=Math.max(1,e+Math.floor(Math.random()*4)-i.def);i.hp-=r,i.mesh&&(i.mesh.userData.mode="fight",setTimeout(()=>{i.mesh&&(i.mesh.userData.freeze=!1)},400));let a=Ct.find(s=>s.id==="ras");a&&(a.mode="fight"),le("log").textContent=`${t} ${r} danni.`,le("batComandi").innerHTML="",setTimeout(()=>{a&&(a.mode="idle"),ye.i+=1,dn()},480)}function jp(n){let e=z.party.filter(a=>a.hp>0),t=e[Math.floor(Math.random()*e.length)],i=qt(t),r=Math.max(1,n.atk+Math.floor(Math.random()*3)-Math.floor(i.atk/6));if(ye.copione==="zero"&&ye.round<3&&(r=Math.min(r,8)),ye.copione==="zero"&&ye.round>=3)return Jn();t.difesa&&(r=Math.max(1,Math.floor(r/2)),t.difesa=!1),t.hp=Math.max(0,t.hp-r),n.mesh&&(n.mesh.userData.mode="fight"),le("log").textContent=`${n.nome} colpisce ${i.nome}: ${r}.`,setTimeout(()=>{ye.i+=1,dn()},500)}function Gl(){let n=ye.nemici.reduce((o,l)=>o+(l.xp||0),0),e=ye.nemici.reduce((o,l)=>o+(l.soldi||0),0),t=z.party.map(o=>Ul(o.xp));z.party.forEach(o=>{let l=qt(o).hpMax;o.xp+=n;let c=qt(o);o.hp>0&&(o.hp=Math.min(c.hpMax,o.hp+(c.hpMax-l)))}),z.soldi+=e;let i=z.party.some((o,l)=>Ul(o.xp)>t[l]),r=ye.copione==="gorm"||ye.nemici.some(o=>o.boss&&o.id==="gorm"),a=ye.copione==="ruggine";ye.nemici.forEach(o=>o.mesh&&Rt.remove(o.mesh)),ye=null,le("battaglia").classList.add("nascosto"),gt="gioco",le("joy").classList.remove("nascosto"),pi(),ke();let s=i?" La squadra sale di livello.":"";if(a){z.sceltaRuggine="guerra",z.flag.ruggine=!0,z.oggetti.chiave=1,ke(),qe([["RUGGINE","Hai vinto. Non vuol dire che hai ragione."],["RAS","No. Vuol dire che decido io."],["","Bottino: Chiave Inglese Madre."]],()=>pi());return}if(r){z.flag.gormFatto=!0;let o=Ct.find(l=>l.id==="gorm");o&&(o.m.visible=!0),qe([["GORM","Fallo. Davanti a loro. Cos\xEC imparano."],["RAS","Cosa devono imparare?"],["GORM","Chi comanda."]],()=>qp());return}qe([["",`Fine scontro. +${e} soldi, +${n} esperienza.${s}`]],()=>{})}function Wh(){let n=ye&&ye.copione;if(ye.nemici.forEach(e=>e.mesh&&Rt.remove(e.mesh)),ye=null,le("battaglia").classList.add("nascosto"),z.party.forEach(e=>{let t=qt(e);e.hp=Math.max(1,Math.floor(t.hpMax/2))}),We&&(We.position.z=Math.min(2.4,$n[z.stanza].d/2-.8),z.z=We.position.z),gt="gioco",le("joy").classList.remove("nascosto"),ke(),n==="ruggine"){qe([["","Ras \xE8 a terra. Si rialza."]],()=>Lr([{id:"ruggine",nome:"Madre Ruggine",hp:130,atk:14,def:4,spd:9,soldi:70,xp:80,boss:1},{id:"guardia",nome:"Gente di Ruggine",hp:40,atk:9,def:2,spd:8,soldi:12,xp:16}],"ruggine"));return}qe([["","Ras \xE8 a terra. Si rialza."]],()=>{})}function Jn(){!ye&&z.flag.zeroFatto||(ye&&(ye.nemici.forEach(n=>n.mesh&&Rt.remove(n.mesh)),ye=null),le("battaglia").classList.add("nascosto"),z.party.forEach(n=>{let e=qt(n);n.id==="ras"?n.hp=Math.max(1,Math.floor(e.hpMax*.35)):n.hp<=0&&(n.hp=Math.max(1,Math.floor(e.hpMax/2)))}),z.flag.zeroFatto=!0,gt="gioco",le("joy").classList.remove("nascosto"),We&&(We.position.z=1.4,z.z=1.4),ke(),qe([["","Ras cade al terzo turno. Zero si inginocchia accanto a lui. Parla piano."],["ZERO","Non sei ancora un problema."],["RAS","Perch\xE9 non mi uccidi?"],["ZERO","Perch\xE9 nessuno me l'ha chiesto."],["","Si rialza. Guarda Kiri, nascosta dietro un comignolo. Un istante solo. Poi se ne va."]],()=>pi()))}function qp(){rs({testo:"Ras guarda il molo. La gente guarda lui.",voci:[["Risparmiare Gorm",()=>{z.sceltaGorm="risparmia",z.rispetto=(z.rispetto||0)+1,z.flag.gormFatto=!0,ke(),qe([["RAS","Domani restituisci al mercato quello che hai preso questo mese. Poi lavori per me."],["GORM","E se dico di no?"],["RAS","Non lo dici."],["","\u2026"],["GORM","Perch\xE9 mi lasci vivere?"],["RAS","Perch\xE9 un uomo che deve qualcosa lavora meglio di un uomo morto."],["GORM","Te ne pentirai."],["RAS","Forse. Ma lo decider\xF2 io quando."]],()=>Nl("mercato"))}],["Eliminarlo",()=>{z.sceltaGorm="elimina",z.rispetto=(z.rispetto||0)-1,z.flag.gormFatto=!0;let n=Ct.find(e=>e.id==="gorm");n&&(Rt.remove(n.m),Ct.splice(Ct.indexOf(n),1)),ke(),qe([["RAS","Chi ha preso i corpi dei miei?"],["GORM","I miei uomini. Su ordine."],["RAS","Allora anche questo \xE8 un ordine."],["","Stacco al nero. Quando torna la luce, la corona di bulloni \xE8 sul tavolo. Ras non la prende. La lascia l\xEC."]],()=>Nl("mercato"))}]]})}var zh=[{luce:4853792,gente:[["aram",-.8,.2,.2],["nadia",.15,.05,-.1],["zero",.4,1.35,2.8],["varga",-1.3,.8,1.4],["varga",1.3,.7,1.5]],linee:[["ZERO","Sedetevi. Non vi faccio alzare la voce, e voi non la fate alzare a me."],["ARAM","Questa \xE8 casa mia."],["ZERO","Stanotte no."],["","Nadia mette una mano sul braccio di Aram. Lui si siede."],["ZERO","Il Don vuole il codice. Non vuole voi. Ci tiene che lo sappiate."],["NADIA","Il Don vuole sempre una cosa sola. Poi ne vuole un'altra."],["ZERO","Pu\xF2 darsi. Io porto i messaggi, non li scrivo."],["","\u2026"],["ARAM","Non c'\xE8 niente da portare."],["ZERO","Trent'anni nelle torri. Avete progettato l'impianto che ha in testa ogni persona di questa citt\xE0. E adesso non c'\xE8 niente?"],["ARAM","Abbiamo progettato una gabbia. Ce ne siamo accorti tardi."],["","Zero guarda la foto sul frigorifero: un ragazzo con un casco da corriere."],["ZERO","Vostro figlio?"],["NADIA","Lui non sa niente."],["ZERO","Lo so. Per questo non \xE8 qui."],["","Zero si avvicina al tavolo. Parla piano."],["ZERO","Ve lo chiedo una volta. Dove?"],["ARAM","Se lo dico, domani tocca a lui. Lo sappiamo tutti e tre."],["","\u2026"],["ZERO","Fuori."],["","Gli uomini escono. Zero resta solo con loro."],["ARAM","Ti chiedo una cosa. Una sola."],["ZERO","Dimmi."],["ARAM","Il ragazzo. Quando arriva, lascialo vivere."],["","Lo schermo resta sul volto di Zero. Non risponde."],["","Stacco al nero. Due spari."]]},{luce:6948884,gente:[["rasIntero",.7,.3,.2],["zero",-.4,1.15,2.4]],linee:[["RAS","Pap\xE0?"],["","Zero \xE8 in piedi in cucina. Non si gira subito."],["ZERO","Sei arrivato tardi."],["RAS","Chi sei?"],["ZERO","Uno che ha finito."],["","Ras guarda dietro di lui. Vede. Si lancia. Zero lo ferma con una mano sola, lo sbatte contro il muro. Una lama corta si accende."],["ZERO","Non eri nell'ordine."],["","Un colpo. Ras urla. Il braccio destro cade sul pavimento."],["ZERO","Questo \xE8 per ricordartelo. Tu non c'eri. Continua a non esserci."],["","Zero esce. Ras resta a terra. La foto sul frigorifero \xE8 macchiata di sangue."]]},{luce:1056808,gente:[["rasFerito",.35,.15,.1],["kiri",-.85,.55,.7]],linee:[["RAS","Chi sei\u2026"],["KIRI","Una che passava."],["RAS","Non passa nessuno, qui."],["KIRI","Allora sono una che non passava. Stai zitto. Respira."],["RAS","I miei\u2026"],["KIRI","Lo so."],["","Bussa tre volte su una porta di metallo. Si apre una fessura di luce."]]},{luce:1060920,gente:[["rasFerito",.4,.1,0],["medico",-.7,.05,.4],["kiri",-1.15,.45,.2]],linee:[["DOC","Chi \xE8?"],["KIRI","Lo sai chi \xE8."],["DOC","Speravo di non doverlo mai sapere."],["","Doc apre un armadietto. Dentro c'\xE8 un braccio meccanico, con una targhetta: Per R."],["KIRI","Te l'hanno lasciato loro."],["DOC","Mi hanno pagato tre anni fa. Se succede qualcosa. Io ho preso i soldi e ho sperato che non succedesse niente."],["KIRI","\xC8 successo."],["DOC","Tienilo fermo."],["","Stacco. Rumore di metallo. Una luce ambrata si accende dove prima c'era il buio."]]},{luce:1585192,gente:[["ras",.35,.15,-.15],["medico",-.7,.1,.35]],linee:[["RAS","Di chi \xE8?"],["DOC","Tuo. Da prima che tu nascessi a questa mattina."],["RAS","Chi mi ha portato qui?"],["DOC","Una ragazza. Se n'\xE8 andata."],["RAS","Chi paga?"],["DOC","\xC8 gi\xE0 pagato."],["","\u2026"],["RAS","Da chi?"],["DOC","Da gente che non pu\xF2 pi\xF9 chiedertelo indietro."],["","Ras si alza. Si appoggia al muro con il braccio nuovo. Il muro si incrina."],["DOC","Piano. Quel braccio non sa ancora quanto sei arrabbiato. Imparer\xE0."],["RAS","Dove sono i miei?"],["DOC","Li hanno portati via stanotte. Gli uomini di Gorm puliscono per i Varga. Non c'\xE8 una tomba, se \xE8 quello che chiedi."],["","Ras resta fermo. Poi prende la giacca."],["DOC","Dove vai?"],["RAS","A vedere chi ha pulito."]]}],ts=0;function Xh(){gt="prologo",le("titolo").classList.add("nascosto"),le("hud").classList.remove("nascosto"),le("joy").classList.add("nascosto"),ts=0,jh()}function jh(){let n=zh[ts];Gh(),Xi.setClearColor(n.luce),Vi(8,.2,6,n.luce,0,-.1,0),n.gente.forEach(([e,t,i,r])=>Ti(e,t,i,r,Kn[e])),le("luogo").textContent="Prologo \xB7 La notte rossa",qe(n.linee,()=>{ts+=1,ts<zh.length?jh():(z.prologo=!0,z.flag.braccio=!0,z.stanza="infermeria",z.x=0,z.z=1.6,gt="gioco",le("joy").classList.remove("nascosto"),ke(),pn("infermeria"))})}function kh(){gt!=="gioco"||At||ye||(gt="pausa",le("pausa").classList.remove("nascosto"),is("squadra"))}function is(n){let e=[["squadra","Squadra"],["oggetti","Oggetti"],["salva","Salva"],["opzioni","Opzioni"]];le("schedePausa").innerHTML="",e.forEach(([i,r])=>{let a=document.createElement("button");a.textContent=r,a.className=i===n?"on":"",a.onclick=()=>is(i),le("schedePausa").appendChild(a)});let t=le("corpoPausa");if(n==="squadra")t.innerHTML=z.party.map(i=>{let r=qt(i);return`<p><b>${r.nome}</b> \xB7 livello ${r.lv}<br>${i.hp}/${r.hpMax} PV \xB7 ${i.mp}/${r.mpMax} PM \xB7 attacco ${r.atk}</p>`}).join("")+`<p>Rispetto ${z.rispetto||0}. Gorm: ${z.sceltaGorm==="risparmia"?"risparmiato":z.sceltaGorm==="elimina"?"eliminato":"ancora da fare"}.<br>Madre Ruggine: ${z.sceltaRuggine||"ancora da fare"}. Brick: ${z.flag.brickUnito?"in famiglia":"non ancora"}.</p>`;else if(n==="oggetti"){t.innerHTML="";let i=(r,a)=>{let s=document.createElement("button");s.textContent=`${a} \xD7${z.oggetti[r]||0}`,s.disabled=!(z.oggetti[r]>0),s.onclick=()=>{let o=z.party[0],l=qt(o);r==="medikit"?o.hp=Math.min(l.hpMax,o.hp+40):o.mp=Math.min(l.mpMax,o.mp+12),z.oggetti[r]-=1,ke(),pi(),is("oggetti")},t.appendChild(s)};i("medikit","Medikit"),i("stim","Stim"),t.insertAdjacentHTML("beforeend","<p>Il medikit cura Ras. Lo stim gli rende i PM.</p>")}else if(n==="salva")ke(),t.innerHTML="<p>Partita salvata su questo telefono. Il gioco salva da solo a ogni stanza, dopo uno scontro e quando scegli su Gorm.</p>";else{t.innerHTML="";let i=document.createElement("button");i.textContent=Yn?"Musica: spenta":"Musica: accesa",i.onclick=()=>{Yn=!Yn,Ut&&Ut.suspend&&(Yn?Ut.suspend():Ut.resume()),is("opzioni")},t.appendChild(i)}}var Dt={};function ns(n){try{Yp(n)}catch(e){window.__punk={errore:String(e&&e.stack||e)}}requestAnimationFrame(ns)}function Yp(n){let e=Math.min(.05,(n-(ns.t||n))/1e3);if(ns.t=n,es+=e,gt==="gioco"&&Cp(e),Ct.forEach(t=>Ll(t.m,es+(t.x||0),t.mode||"idle")),ye&&ye.nemici.forEach(t=>t.mesh&&Ll(t.mesh,es,"idle")),We){let t=new E(We.position.x,1.45,We.position.z+2.05);if(wi.position.lerp(t,.12),wi.lookAt(We.position.x,1,We.position.z-.2),z&&z.flag.braccio){Pr.intensity=1.2;let i=We.userData.albaArm||We.userData.armR;i&&i.end&&i.end.getWorldPosition(Pr.position)}else Pr.intensity=0}else wi.position.set(.15,1.25,2.15),wi.lookAt(0,1,.2);Xi.render(Wi,wi)}function Zp(){Bl()&&!confirm("C\u2019\xE8 gi\xE0 una partita su questo telefono. La nuova la sostituisce.")||(z=Tp(),localStorage.removeItem(Ol),zl(),Xh())}function Jp(){z=Bl(),z&&(zl(),le("titolo").classList.add("nascosto"),le("hud").classList.remove("nascosto"),z.prologo?(gt="gioco",le("joy").classList.remove("nascosto"),pn(z.stanza),Hh(z.stanza)):Xh())}function Kp(){let n=Bl();le("continua").disabled=!n,le("notaSalva").textContent=n?`Salvataggio: ${$n[n.stanza]?.nome||"in corso"}${n.sceltaGorm?" \xB7 scelta su Gorm fatta":""}`:"Nessuna partita salvata.",le("nuova").onclick=Zp,le("continua").onclick=Jp,le("dialogo").onclick=Fh,le("azione").onclick=r=>{r.stopPropagation(),Oh()},le("pausaBtn").onclick=kh,le("chiudiPausa").onclick=()=>{gt="gioco",le("pausa").classList.add("nascosto")},le("tornaTitolo").onclick=()=>location.reload(),addEventListener("keydown",r=>{Dt[r.key]=!0,(r.key==="Enter"||r.key===" ")&&(At?Fh():Nt&&Oh()),r.key==="Escape"&&(gt==="pausa"?le("chiudiPausa").click():kh())}),addEventListener("keyup",r=>{Dt[r.key]=!1});let e=le("joy"),t=le("pomello");function i(r,a,s){let o=e.getBoundingClientRect(),l=Math.max(-1,Math.min(1,(r-(o.left+o.width/2))/(o.width/2))),c=Math.max(-1,Math.min(1,(a-(o.top+o.height/2))/(o.height/2)));Zn={on:s,x:l,y:c},t.style.left=39+l*30+"px",t.style.top=39+c*30+"px"}e.addEventListener("pointerdown",r=>{e.setPointerCapture(r.pointerId),i(r.clientX,r.clientY,!0)}),e.addEventListener("pointermove",r=>{Zn.on&&i(r.clientX,r.clientY,!0)}),e.addEventListener("pointerup",()=>{Zn={on:!1,x:0,y:0},t.style.left="39px",t.style.top="39px"}),addEventListener("pointerdown",()=>zl(),{once:!0})}Ap();Kp();wi.position.set(.2,1.35,2.55);requestAnimationFrame(ns);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
