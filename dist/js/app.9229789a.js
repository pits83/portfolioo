(function(){"use strict";var t={5432:function(t,e,a){var r=a(9242),o=a(3396);function s(t,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var n=a(89);const l={},i=(0,n.Z)(l,[["render",s]]);var d=i,c=a(2483),u=a(7139),m=a.p+"img/logos.aaeec82c.jpg";const g={class:"bg-white mt-5"},f={class:"mx-auto max-w-screen-xl px-12 py-2"},p={class:"flex flex-row items-center justify-between"},x={class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"},y={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"},b=(0,o._)("img",{src:m,alt:"Your Logo",class:"h-16 w-16 object-contain"},null,-1),h=(0,o._)("svg",{class:"w-5 h-5 text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 8 19"},[(0,o._)("path",{"fill-rule":"evenodd",d:"M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z","clip-rule":"evenodd"})],-1),v=[h],w=(0,o.uE)('<div class="md:hidden"><button id="mobileMenuButton" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div>',1),k={id:"navbarSticky",class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1"},_={class:"flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},j="https://www.facebook.com/SayconMel";var C={__name:"Header",setup(t){return document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("mobileMenuButton"),e=document.getElementById("navbarSticky");t.addEventListener("click",(function(){const t="true"===e.getAttribute("aria-expanded");e.setAttribute("aria-expanded",!t),e.classList.toggle("hidden")}))})),(t,e)=>{const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",g,[(0,o._)("div",f,[(0,o._)("div",p,[(0,o._)("nav",x,[(0,o._)("div",y,[(0,o.Wm)(a,{to:"/",class:"flex flex-col items-center"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o._)("div",{class:"flex md:order-2"},[(0,o._)("ul",{class:"flex flex-row items-center gap-4"},[(0,o._)("a",{href:j,target:"_blank",class:"bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 hover:from-gray-200 hover:via-gray-300 hover:to-gray-200 p-3 rounded-full transition-all duration-300 transform hover:-rotate-3"},v)])]),w,(0,o._)("div",k,[(0,o._)("ul",_,[(0,o._)("li",{class:(0,u.C_)("home"===t.$route.name?"text-cyan-700 font-medium text-lg":"text-gray-700 hover:text-cyan-700 font-normal text-lg")},[(0,o.Wm)(a,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})],2),(0,o._)("li",{class:(0,u.C_)("about"===t.$route.name?"text-cyan-700 font-medium text-lg":"text-gray-700 hover:text-cyan-700 font-normal text-lg")},[(0,o.Wm)(a,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})],2),(0,o._)("li",{class:(0,u.C_)("projects"===t.$route.name?"text-cyan-700 font-medium text-lg":"text-gray-700 hover:text-cyan-700 font-normal text-lg")},[(0,o.Wm)(a,{to:"/projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1})],2),(0,o._)("li",{class:(0,u.C_)("diary"===t.$route.name?"text-cyan-700 font-medium text-lg":"text-gray-700 hover:text-cyan-700 font-normal text-lg")},[(0,o.Wm)(a,{to:"/notepad"},{default:(0,o.w5)((()=>[(0,o.Uk)("NotePad")])),_:1})],2),(0,o._)("li",{class:(0,u.C_)("contact"===t.$route.name?"text-cyan-700 font-medium text-lg":"text-gray-700 hover:text-cyan-700 font-normal text-lg")},[(0,o.Wm)(a,{to:"/contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})],2)])])])])])])])}}};const T=C;var D=T;const A={class:"mx-auto max-w-screen-xl px-12 py-6"};var O={__name:"MainLayout",props:{pageTitle:String},setup(t){const e=t;return(0,o.bv)((()=>{document.title=e.pageTitle+" - My Portfolio"})),(t,e)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D),(0,o._)("main",A,[(0,o.WI)(t.$slots,"default")])],64))}};const M=O;var W=M,E=a.p+"img/mel.a59cfb7e.jpg";const L={class:"flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row py-16"},S={class:"flex flex-col-reverse xl:flex-row justify-between xl:w-full"},V={class:"xl:w-5/12"},H={class:"sm:text-center lg:py-14 lg:text-left xl:py-28"},P=(0,o._)("h1",{class:"mb-3 text-5xl text-gray-900 sm:text-4xl"},"Hi,",-1),U=(0,o._)("h2",{class:"mb-2 text-5xl text-gray-900 sm:text-4xl"},"I am Loriemel Cañete Saycon",-1),I=(0,o._)("h4",{class:"mb-7 text-5xl text-gray-900 sm:text-2xl"},"UI & Graphic Designer ",-1),Z={class:"flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"},B=(0,o._)("div",{class:"relative h-48 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300 lg:h-auto xl:w-5/12"},[(0,o._)("img",{src:E,class:"h-80 sm:h-full w-50 object-cover object-center"})],-1);function Y(t,e){const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",L,[(0,o._)("div",S,[(0,o._)("div",V,[(0,o._)("div",H,[P,U,I,(0,o._)("div",Z,[(0,o.Wm)(a,{to:"/contact",class:"inline-block rounded-lg bg-gray-200 px-3 py-2 text-center text-sm font-semibold text-yellow-700 outline-none ring-indigo-300 transition duration-100 hover:transform hover:scale-105 hover:bg-gray-300 hover:shadow-xl focus:shadow-md active:shadow-md md:text-base"},{default:(0,o.w5)((()=>[(0,o.Uk)(" CONTACT ME ")])),_:1})])])]),B])])}const $={},q=(0,n.Z)($,[["render",Y]]);var N=q;const Q="Home";var z={__name:"HomeView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.j4)(W,{pageTitle:Q},{default:(0,o.w5)((()=>[(0,o.Wm)(N)])),_:1}))}};const G=z;var K=G;const R={class:"flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row"},F=(0,o.uE)('<div class="py-10 flex flex-col-reverse xl:flex-row justify-between xl:w-50"><div class="relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300 xl:w-5/12 mt-12"><img src="'+E+'" class="h-50 w-50 object-cover object-center"></div><div class="xl:w-5/12"><div class="sm:text-center lg:py-24 lg:text-left"><h3 class="mb-4 text-4xl text-gray-700 sm:text-5xl">I am Loriemel Cañete Saycon</h3><p class="mb-2 text-lg">born on June 30, 2001, proudly hails from Gun-ob Purok Saging, Ampalaya Village, Lapu-Lapu City—an individual with a unique background and a passion for making a positive impact. </p></div></div></div>',1),J=[F];function X(t,e){return(0,o.wg)(),(0,o.iD)("section",R,J)}const tt={},et=(0,n.Z)(tt,[["render",X]]);var at=et;const rt="About";var ot={__name:"AboutView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.j4)(W,{pageTitle:rt},{default:(0,o.w5)((()=>[(0,o._)("section",null,[(0,o.Wm)(at)])])),_:1}))}};const st=ot;var nt=st;const lt=t=>((0,o.dD)("data-v-ab2d0222"),t=t(),(0,o.Cn)(),t),it={class:"bg-white py-6 sm:py-8 lg:py-46"},dt=lt((()=>(0,o._)("div",{class:"text-center"},[(0,o._)("h1",{class:"py-5 text-3xl text-gray-800 lg:text-3xl"},"Todo App Project")],-1))),ct={class:"container w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"},ut=lt((()=>(0,o._)("header",null,[(0,o._)("h1",{class:"text-4xl"},"Todo App")],-1))),mt={class:"actions"},gt=lt((()=>(0,o._)("button",{class:"add",type:"submit"},"Add",-1))),ft={class:"tasks"},pt=["onClick","disabled"],xt=["onClick"];function yt(t,e,a,s,n,l){return(0,o.wg)(),(0,o.iD)("div",it,[dt,(0,o._)("div",ct,[ut,(0,o._)("section",mt,[(0,o._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)(((...t)=>l.addTask&&l.addTask(...t)),["prevent"])),class:"add-task-form"},[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Add Task","onUpdate:modelValue":e[0]||(e[0]=t=>n.task=t),required:""},null,512),[[r.nr,n.task]]),(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Search task","onUpdate:modelValue":e[1]||(e[1]=t=>n.searchQuery=t),class:"search-input"},null,512),[[r.nr,n.searchQuery]]),gt],32)]),(0,o._)("section",ft,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.filteredTodos,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"task-item"},[(0,o._)("p",{class:(0,u.C_)({done:t.status})},(0,u.zw)(t.details),3),(0,o._)("button",{class:"done-btn",onClick:e=>l.markAsDone(t.id),disabled:t.status},"Done",8,pt),(0,o._)("button",{class:"remove-btn",onClick:e=>l.removeTask(t.id)},"Remove",8,xt)])))),128)),(0,o._)("button",{class:"clear-btn",onClick:e[3]||(e[3]=(...t)=>l.clearAllTasks&&l.clearAllTasks(...t))},"Clear All Tasks")])])])}a(1719);var bt=a(536),ht={data(){return{task:"",searchQuery:"",todos:[]}},computed:{filteredTodos(){return this.todos.filter((t=>t.details.toLowerCase().includes(this.searchQuery.toLowerCase())))}},methods:{addTask(){const t={id:(0,bt.Z)(),details:this.task,status:!1};this.todos.unshift(t),this.task=""},removeTask(t){const e=this.todos.findIndex((e=>e.id===t));-1!==e&&this.todos.splice(e,1)},markAsDone(t){const e=this.todos.find((e=>e.id===t));e&&(e.status=!0)},clearAllTasks(){this.todos=[]}}};const vt=(0,n.Z)(ht,[["render",yt],["__scopeId","data-v-ab2d0222"]]);var wt=vt;const kt="Projects";var _t={__name:"ProjectsView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.j4)(W,{pageTitle:kt},{default:(0,o.w5)((()=>[(0,o.Wm)(wt)])),_:1}))}};const jt=_t;var Ct=jt;const Tt=t=>((0,o.dD)("data-v-868cd1ca"),t=t(),(0,o.Cn)(),t),Dt={class:"bg-white py-6 sm:py-8 lg:py-46"},At=Tt((()=>(0,o._)("h1",{class:"text-5xl text-gray-900 dark:text-white text-center"},"My NotePad",-1))),Ot={class:"container p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-500 dark:border-gray-700"},Mt=Tt((()=>(0,o._)("header",null,[(0,o._)("h1",{class:"text-3xl mb-1"},"Notes")],-1))),Wt={class:"actions"},Et=Tt((()=>(0,o._)("button",{class:"add",type:"submit"},"Save",-1))),Lt={class:"tasks"},St=["onClick","disabled"],Vt=["onClick"];function Ht(t,e,a,s,n,l){return(0,o.wg)(),(0,o.iD)("div",Dt,[At,(0,o._)("div",Ot,[Mt,(0,o._)("section",Wt,[(0,o._)("form",{onSubmit:e[1]||(e[1]=(...t)=>l.addTask&&l.addTask(...t)),class:"add-task-form"},[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Something need to do??","onUpdate:modelValue":e[0]||(e[0]=t=>n.task=t),required:""},null,512),[[r.nr,n.task]]),Et],32)]),(0,o._)("section",Lt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.todos,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id,class:"task-item"},[(0,o._)("p",{class:(0,u.C_)({done:t.status})},(0,u.zw)(t.details),3),(0,o._)("button",{class:"done-btn",onClick:e=>l.markAsDone(t.id),disabled:t.status},"Done",8,St),(0,o._)("button",{class:"remove-btn",onClick:e=>l.removeTask(t.id)},"Remove",8,Vt)])))),128))])])])}var Pt={data(){return{task:"",todos:[]}},methods:{addTask(t){t.preventDefault();const e={id:(0,bt.Z)(),details:this.task,status:!1};this.todos.unshift(e),this.task=""},removeTask(t){const e=this.todos.findIndex((e=>e.id===t));-1!==e&&this.todos.splice(e,1)},markAsDone(t){const e=this.todos.find((e=>e.id===t));e&&(e.status=!0)},clearAllTasks(){this.todos=[]}}};const Ut=(0,n.Z)(Pt,[["render",Ht],["__scopeId","data-v-868cd1ca"]]);var It=Ut;const Zt="Diary";var Bt={__name:"DiaryView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.j4)(W,{pageTitle:Zt},{default:(0,o.w5)((()=>[(0,o.Wm)(It)])),_:1}))}};const Yt=Bt;var $t=Yt;const qt={class:"mt-10 px-4 mx-auto max-w-screen-md"},Nt=(0,o.uE)('<h2 class="mb-3 text-4xl tracking-tight font-bold text-center text-gray-700 dark:text-white">CONTACT ME</h2><form action="#" class="space-y-8"><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter name</label><input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Username" required></div><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter email</label><input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your email" required></div><div class="sm:col-span-2"><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Enter message</label><textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea></div><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button></form>',2),Qt=[Nt];function zt(t,e){return(0,o.wg)(),(0,o.iD)("div",qt,Qt)}const Gt={},Kt=(0,n.Z)(Gt,[["render",zt]]);var Rt=Kt;const Ft="Contact";var Jt={__name:"ContactView",setup(t){return(t,e)=>((0,o.wg)(),(0,o.j4)(W,{pageTitle:Ft},{default:(0,o.w5)((()=>[(0,o._)("section",null,[(0,o.Wm)(Rt)])])),_:1}))}};const Xt=Jt;var te=Xt;const ee=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:nt},{path:"/projects",name:"projects",component:Ct},{path:"/notepad",name:"diary",component:$t},{path:"/contact",name:"contact",component:te}],ae=(0,c.p7)({history:(0,c.PO)("/"),routes:ee});var re=ae;(0,r.ri)(d).use(re).mount("#app")}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var n=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],s=t[c][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(l=!1,s<n&&(n=s));if(l){t.splice(c--,1);var d=o();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,n=r[0],l=r[1],i=r[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var c=i(a)}for(e&&e(r);d<n.length;d++)s=n[d],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},r=self["webpackChunkvue_portfolio_template"]=self["webpackChunkvue_portfolio_template"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5432)}));r=a.O(r)})();
//# sourceMappingURL=app.9229789a.js.map