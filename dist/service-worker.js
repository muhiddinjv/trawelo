if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,n,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+c.slice(1)};return Promise.all(n.map(c=>{switch(c){case"exports":return i;case"module":return s;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"9a4c8716d822fde37ea290c666a522fb"},{url:"main.js",revision:"a93c27a41c588fb3f1f395edd16a20d5"},{url:"src/client/pics/a01d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a01n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/a02d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a02n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/a03d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a03n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/a04d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a04n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/a05d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a05n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/a06d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"src/client/pics/a06n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"src/client/pics/banner.jpg",revision:"dfcd9b9c118ff8e01181490b419bf613"},{url:"src/client/pics/bukhara.jpg",revision:"8de2265a7eddf0151a0e92ce34052daf"},{url:"src/client/pics/c01d.png",revision:"5bd79e6650e3e2767f61a4934d4e0c45"},{url:"src/client/pics/c01n.png",revision:"15d2a8bf9346af031d632374e27d9aa0"},{url:"src/client/pics/c02d.png",revision:"e036c5b2eebc6c9adfa84f5dac34d725"},{url:"src/client/pics/c02n.png",revision:"3494f86bb355776828f4e471c76c56d5"},{url:"src/client/pics/c03d.png",revision:"e93d272802d6631fd16be26e7b72657f"},{url:"src/client/pics/c03n.png",revision:"c284f4296f3f14086f805adefe46d00d"},{url:"src/client/pics/c04d.png",revision:"2c5994f7d9426ea4bbae0f33ba417bd9"},{url:"src/client/pics/c04n.png",revision:"2c5994f7d9426ea4bbae0f33ba417bd9"},{url:"src/client/pics/d01d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/d01n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/d02d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/d02n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/d03d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/d03n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"src/client/pics/f01d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/f01n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r01d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r01n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r02d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r02n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r03d.png",revision:"c96f1cb1d19fd3453cf74f4dbb7059a5"},{url:"src/client/pics/r03n.png",revision:"c96f1cb1d19fd3453cf74f4dbb7059a5"},{url:"src/client/pics/r04d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r04n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"src/client/pics/r05d.png",revision:"87ccf2d87bfbfb6013b90744986d7781"},{url:"src/client/pics/r05n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"src/client/pics/r06d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/r06n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"src/client/pics/s01d.png",revision:"adf57aee773961e0093750518f0573a9"},{url:"src/client/pics/s01n.png",revision:"7c5e9375d99b54defcb17ec56e246703"},{url:"src/client/pics/s02d.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"src/client/pics/s02n.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"src/client/pics/s03d.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"src/client/pics/s03n.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"src/client/pics/s04d.png",revision:"adf57aee773961e0093750518f0573a9"},{url:"src/client/pics/s04n.png",revision:"7c5e9375d99b54defcb17ec56e246703"},{url:"src/client/pics/s05d.png",revision:"d1a4a3475009e7c2b7a8ee8ee4dfa8c2"},{url:"src/client/pics/s05n.png",revision:"d1a4a3475009e7c2b7a8ee8ee4dfa8c2"},{url:"src/client/pics/s06d.png",revision:"9c82e68544657b2c2bbed1918a654747"},{url:"src/client/pics/s06n.png",revision:"9c82e68544657b2c2bbed1918a654747"},{url:"src/client/pics/t01d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"src/client/pics/t01n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"src/client/pics/t02d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"src/client/pics/t02n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"src/client/pics/t03d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"src/client/pics/t03n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"src/client/pics/t04d.png",revision:"3a792b96d369a96b9baed3b12945f849"},{url:"src/client/pics/t04n.png",revision:"4547d79eaf485245262e87203fee77bb"},{url:"src/client/pics/t05d.png",revision:"3a792b96d369a96b9baed3b12945f849"},{url:"src/client/pics/t05n.png",revision:"4547d79eaf485245262e87203fee77bb"},{url:"src/client/pics/u00d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/pics/u00n.png",revision:"fe27c344277901aa5be6e95337439959"}],{})}));
//# sourceMappingURL=service-worker.js.map
