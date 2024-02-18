(function(){"use strict";var t={1993:function(t,n,e){e.a(t,(async function(t,a){try{var i=e(1815),s=t([i]);i=(s.then?(await s)():s)[0],n.Z=(await e.e(866).then(e.bind(e,6866))).defineComponent({name:"App",components:{Weather:i.Z},data(){return{city:"",showWeather:!1}},methods:{async searchWeather(){try{if(!this.city)return void alert("Please enter a city name");this.showWeather=!1,await this.$nextTick(),this.showWeather=!0}catch(t){console.error("Error fetching weather data:",t)}}}}),a()}catch(r){a(r)}}),1)},110:function(t,n,e){e.a(t,(async function(t,a){try{e(560);n.Z=(await e.e(866).then(e.bind(e,6866))).defineComponent({name:"App",props:{pass:Object},data(){return{desc:[],hour:[],ico:[],temp:[],loading:!0}},async mounted(){try{await new Promise((t=>{setTimeout(t,"5000")})),this.loading=!1;let t=new Date;console.log("loading",this.loading);let n=this.pass.t.times;n.forEach((n=>{n.datetime===String(t.getDate())&&this.temp.push(n.celcius)}));let e=this.pass.weather.times.filter((n=>n.datetime===String(t.getDate()))),a={0:"00:00",1:"06:00",2:"12:00",3:"18:00"},i={Cerah:"icon1","Cerah Berawan":"icon2",Berawan:"icon2","Hujan Ringan":"icon3","Hujan Lebat":"icon4","Hujan Petir":"icon4"};e.forEach(((t,n)=>{this.desc.push(t.name),this.hour.push(a[n]),console.log(t.name),this.ico.push(i[t.name]?i[t.name]:"icon2")}))}catch(t){console.log(t)}}}),a()}catch(i){a(i)}}),1)},4073:function(t,n,e){e.a(t,(async function(t,a){try{e(560);var i=e(8282),s=e(1076),r=t([i]);i=(r.then?(await r)():r)[0],n.Z=(await e.e(866).then(e.bind(e,6866))).defineComponent({name:"myWeather",components:{DaysWeather:i.Z},props:{city:String},data(){return{pass:Object,hari:null,tanggal:null,jam:null,kabupaten:null,temp:null,weather:null,wind:[],humidity:null,humax:null}},mounted(){this.startIntv()},methods:{startIntv(){window.setInterval((()=>{let t=new Date;this.jam=`${t.getHours()<10?"0"+t.getHours():t.getHours} : ${t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()} : ${t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds()}`}),1e3)}},async created(){try{const t=await s.Z.get(`https://0wwhsalsx2.execute-api.us-east-1.amazonaws.com/api/v2/regency/${this.city}`).then((t=>t.data.data));this.pass=t;let n={0:"Minggu",1:"Senin",2:"Selasa",3:"Rabu",4:"Kamis",5:"Jumat",6:"Sabtu"},e={1:"Januari",2:"Februari",3:"Maret",4:"April",5:"Mei",6:"Juni",7:"Juli",8:"Agustus",9:"September",10:"Oktober",11:"November",12:"Desember"},a=new Date;this.hari=n[a.getDay()];let i=a.getYear(),r=a.getMonth(),c=t.humax.times.filter((t=>t.day===String(a.getDate())))[0];this.tanggal=`${a.getDate()} ${e[r+1]} ${i}`,this.jam=`${a.getHours()<10?"0"+a.getHours():a.getHours} : ${a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes()} : ${a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds()}`,this.kabupaten=t.description;let o={0:0,6:1,12:2,18:3,24:4,30:5,36:6},u=this.jam>0&&this.jam<6?o["0"]:this.jam>6&&this.jam<12?o["6"]:this.jam>12&&this.jam<18?o["12"]:this.jam>18&&this.jam<24?o["18"]:this.jam>24&&this.jam<30?o["24"]:this.jam>30&&this.jam<36?o["30"]:o["36"],l=t.hu.times[u].value,h=t.t.times[u].celcius,d=t.t.times[u].fahrenheit;console.log(t.ws.times[u]),this.temp=`${h} | ${d}`,this.weather=t.weather.times[u].name,this.wind.push(`${t.ws.times[u].kt} kt`),this.wind.push(`${t.ws.times[u].mph} mph`),this.wind.push(`${t.ws.times[u].kph} kph`),this.humidity=`${l} %`,this.humax=`${c.value} %`}catch(t){console.log(t)}}}),a()}catch(c){a(c)}}),1)},866:function(t,n,e){e.a(t,(async function(t,n){try{var a=e(9242),i=e(8555),s=(e(7024),t([i]));i=(s.then?(await s)():s)[0],(0,a.ri)(i.Z).mount("#app"),n()}catch(r){n(r)}}))},8555:function(t,n,e){e.a(t,(async function(t,a){try{var i=e(7446),s=e(3337),r=(e(2752),e(89)),c=t([s]);s=(c.then?(await c)():c)[0];const o=(0,r.Z)(s.Z,[["render",i.s]]);n.Z=o,a()}catch(o){a(o)}}))},8282:function(t,n,e){e.a(t,(async function(t,a){try{var i=e(822),s=e(3530),r=(e(4016),e(89)),c=t([s]);s=(c.then?(await c)():c)[0];const o=(0,r.Z)(s.Z,[["render",i.s]]);n.Z=o,a()}catch(o){a(o)}}))},1815:function(t,n,e){e.a(t,(async function(t,a){try{var i=e(1916),s=e(3304),r=(e(6030),e(89)),c=t([s]);s=(c.then?(await c)():c)[0];const o=(0,r.Z)(s.Z,[["render",i.s]]);n.Z=o,a()}catch(o){a(o)}}))},2752:function(){},4016:function(){},6030:function(){},3337:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{Z:function(){return i.Z}});var i=e(1993),s=t([i]);i=(s.then?(await s)():s)[0],a()}catch(r){a(r)}}))},3530:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{Z:function(){return i.Z}});var i=e(110),s=t([i]);i=(s.then?(await s)():s)[0],a()}catch(r){a(r)}}))},3304:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{Z:function(){return i.Z}});var i=e(4073),s=t([i]);i=(s.then?(await s)():s)[0],a()}catch(r){a(r)}}))},7446:function(t,n,e){e.d(n,{s:function(){return d}});var a=e(3396),i=e(9242),s=e.p+"img/sun.6987b9c9.gif";const r={class:"app"},c={class:"header container h-100 p-5"},o=(0,a._)("div",{class:"sun",id:"sun"},[(0,a._)("h1",{class:"mb-5"},"Aprika Weatherapp"),(0,a._)("img",{src:s,width:"80",height:"80",alt:"sun gif"})],-1),u={class:"justify-content-center btn-search h-100"},l={class:"searchbar w-50 mx-2"},h=(0,a._)("i",{class:"fas fa-Search"},null,-1);function d(t,n,e,s,d,f){const p=(0,a.up)("Weather");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",c,[o,(0,a._)("div",u,[(0,a._)("div",l,[(0,a.wy)((0,a._)("input",{type:"text",class:"input form-control","onUpdate:modelValue":n[0]||(n[0]=n=>t.city=n),placeholder:"Enter a city",onKeyup:n[1]||(n[1]=(0,i.D2)(((...n)=>t.searchWeather&&t.searchWeather(...n)),["enter"]))},null,544),[[i.nr,t.city]])]),(0,a._)("button",{class:"btn-search btn btn-primary",onClick:n[2]||(n[2]=(...n)=>t.searchWeather&&t.searchWeather(...n))},[(0,a.Uk)("Search "),h])])]),t.showWeather?((0,a.wg)(),(0,a.j4)(p,{key:0,city:t.city},null,8,["city"])):(0,a.kq)("",!0)])}},822:function(t,n,e){e.d(n,{s:function(){return P}});var a=e(3396),i=e(7139);const s={class:"days-tab text-center"},r={key:0,class:"loading"},c={class:"p-0"},o={class:"li_active"},u=["id"],l=(0,a._)("span",null,null,-1),h=[l],d={class:"class py-3"},f={class:"class py-3"},p={class:"class py-3"},m={class:"li_active"},w=["id"],y=(0,a._)("span",null,null,-1),v=[y],g={class:"class py-3"},_={class:"class py-3"},b={class:"class py-3"},k={class:"li_active"},j=["id"],S=(0,a._)("span",null,null,-1),z=[S],Z={class:"class py-3"},$={class:"class py-3"},x={class:"class py-3"},D={class:"li_active"},O=["id"],W=(0,a._)("span",null,null,-1),E=[W],M={class:"class py-3"},C={class:"class py-3"},H={class:"class py-3"};function P(t,n,e,l,y,S){return(0,a.wg)(),(0,a.iD)("div",s,[t.loading?((0,a.wg)(),(0,a.iD)("div",r,"Loading...")):(0,a.kq)("",!0),(0,a._)("ul",c,[(0,a._)("li",o,[(0,a._)("div",{class:"class py-3",id:`${this.ico[0]}`},h,8,u),(0,a._)("div",d,(0,i.zw)(this.hour[0]),1),(0,a._)("div",f,(0,i.zw)(this.temp[0]),1),(0,a._)("div",p,(0,i.zw)(this.desc[0]),1)]),(0,a._)("li",m,[(0,a._)("div",{class:"class py-3",id:`${this.ico[1]}`},v,8,w),(0,a._)("div",g,(0,i.zw)(this.hour[1]),1),(0,a._)("div",_,(0,i.zw)(this.temp[1]),1),(0,a._)("div",b,(0,i.zw)(this.desc[1]),1)]),(0,a._)("li",k,[(0,a._)("div",{class:"class py-3",id:`${this.ico[2]}`},z,8,j),(0,a._)("div",Z,(0,i.zw)(this.hour[2]),1),(0,a._)("div",$,(0,i.zw)(this.temp[2]),1),(0,a._)("div",x,(0,i.zw)(this.desc[2]),1)]),(0,a._)("li",D,[(0,a._)("div",{class:"class py-3",id:`${this.ico[3]}`},E,8,O),(0,a._)("div",M,(0,i.zw)(this.hour[3]),1),(0,a._)("div",C,(0,i.zw)(this.temp[3]),1),(0,a._)("div",H,(0,i.zw)(this.desc[3]),1)])])])}},1916:function(t,n,e){e.d(n,{s:function(){return S}});var a=e(3396),i=e(7139);const s={class:"container p-0"},r={class:"d-flex gap-3"},c={class:"card main-div w-100"},o={class:"p-3"},u={class:"mb-1 day"},l={class:"date mb-0"},h={class:"place"},d={class:"fa fa-location"},f=(0,a._)("small",null,"Indonesia",-1),p={class:"temp"},m={class:"weather-temp"},w={class:""},y={class:"card card-2 w-100"},v={class:"m-4"},g=(0,a._)("th",null,"Wind",-1),_=(0,a._)("th",null,"Humidity",-1),b=(0,a._)("th",null,"precipitation",-1),k=(0,a._)("br",null,null,-1),j=(0,a._)("div",{class:"footer"},"Powered by Luthfith & Saiful Islam",-1);function S(t,n,e,S,z,Z){const $=(0,a.up)("DaysWeather");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("div",o,[(0,a._)("h2",u,(0,i.zw)(this.hari),1),(0,a._)("p",l,(0,i.zw)(this.tanggal),1),(0,a._)("small",null,(0,i.zw)(this.jam),1),(0,a._)("h2",h,[(0,a._)("i",d,[(0,a.Uk)((0,i.zw)(this.kabupaten)+" ",1),f])]),(0,a._)("div",p,[(0,a._)("h1",m,(0,i.zw)(this.temp),1),(0,a._)("h2",w,(0,i.zw)(this.weather),1)])])]),(0,a._)("div",y,[(0,a._)("table",v,[(0,a._)("tbody",null,[(0,a._)("tr",null,[g,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.wind,(t=>((0,a.wg)(),(0,a.iD)("td",{key:t},(0,i.zw)(t),1)))),128))]),(0,a._)("tr",null,[_,(0,a._)("td",null,(0,i.zw)(this.humidity),1)]),(0,a._)("tr",null,[b,(0,a._)("td",null,(0,i.zw)(this.humax),1)])])]),(0,a.Wm)($,{pass:t.pass},null,8,["pass"]),k])])]),j],64)}}},n={};function e(a){var i=n[a];if(void 0!==i)return i.exports;var s=n[a]={exports:{}};return t[a].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",i=function(t){t&&t.d<1&&(t.d=1,t.forEach((function(t){t.r--})),t.forEach((function(t){t.r--?t.r++:t()})))},s=function(e){return e.map((function(e){if(null!==e&&"object"===typeof e){if(e[t])return e;if(e.then){var s=[];s.d=0,e.then((function(t){r[n]=t,i(s)}),(function(t){r[a]=t,i(s)}));var r={};return r[t]=function(t){t(s)},r}}var c={};return c[t]=function(){},c[n]=e,c}))};e.a=function(e,r,c){var o;c&&((o=[]).d=-1);var u,l,h,d=new Set,f=e.exports,p=new Promise((function(t,n){h=n,l=t}));p[n]=f,p[t]=function(t){o&&t(o),d.forEach(t),p["catch"]((function(){}))},e.exports=p,r((function(e){var i;u=s(e);var r=function(){return u.map((function(t){if(t[a])throw t[a];return t[n]}))},c=new Promise((function(n){i=function(){n(r)},i.r=0;var e=function(t){t!==o&&!d.has(t)&&(d.add(t),t&&!t.d&&(i.r++,t.push(i)))};u.map((function(n){n[t](e)}))}));return i.r?c:r()}),(function(t){t?h(p[a]=t):l(f),i(o)})),o&&o.d<0&&(o.d=0)}}(),function(){var t=[];e.O=function(n,a,i,s){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],i=t[l][1],s=t[l][2];for(var c=!0,o=0;o<a.length;o++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](a[o])}))?a.splice(o--,1):(c=!1,s<r&&(r=s));if(c){t.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,i,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,a){return e.f[a](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+".fbfd5d1f.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="aprika-weatherapp:";e.l=function(a,i,s,r){if(t[a])t[a].push(i);else{var c,o;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var h=u[l];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==n+s){c=h;break}}c||(o=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",n+s),c.src=a),t[a]=[i];var d=function(n,e){c.onerror=c.onload=null,clearTimeout(f);var i=t[a];if(delete t[a],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(t){return t(e)})),n)return n(e)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),o&&document.head.appendChild(c)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,a){var i=e.o(t,n)?t[n]:void 0;if(0!==i)if(i)a.push(i[2]);else{var s=new Promise((function(e,a){i=t[n]=[e,a]}));a.push(i[2]=s);var r=e.p+e.u(n),c=new Error,o=function(a){if(e.o(t,n)&&(i=t[n],0!==i&&(t[n]=void 0),i)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+n+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,i[1](c)}};e.l(r,o,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,a){var i,s,r=a[0],c=a[1],o=a[2],u=0;if(r.some((function(n){return 0!==t[n]}))){for(i in c)e.o(c,i)&&(e.m[i]=c[i]);if(o)var l=o(e)}for(n&&n(a);u<r.length;u++)s=r[u],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},a=self["webpackChunkaprika_weatherapp"]=self["webpackChunkaprika_weatherapp"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(866)}));a=e.O(a)})();
//# sourceMappingURL=app.508e6d4a.js.map