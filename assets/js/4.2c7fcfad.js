(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,6,7,8,9,12],{10:function(t,e,n){"use strict";n.r(e);var a={props:{url:{type:String,required:!0},title:{type:String,required:!1},caption:{type:String,required:!1},indicator:String}},r=n(0),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.url,title:t.title,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n  "+t._s(t.caption)+"\n  "),t.caption?t._e():t._t("default"),"true"===t.indicator?n("OutboundLink"):t._e()],2)},[],!1,null,null,null);e.default=i.exports},166:function(t,e,n){},167:function(t,e,n){},168:function(t,e,n){"use strict";var a=n(4),r=n(23),i=n(66);a(a.P+a.F*n(6)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},169:function(t,e){function n(t,e,n){var a,r,i,s,l;function o(){var u=Date.now()-s;u<e&&u>=0?a=setTimeout(o,e-u):(a=null,n||(l=t.apply(i,r),i=r=null))}null==e&&(e=100);var u=function(){i=this,r=arguments,s=Date.now();var u=n&&!a;return a||(a=setTimeout(o,e)),u&&(l=t.apply(i,r),i=r=null),l};return u.clear=function(){a&&(clearTimeout(a),a=null)},u.flush=function(){a&&(l=t.apply(i,r),i=r=null,clearTimeout(a),a=null)},u}n.debounce=n,t.exports=n},171:function(t,e,n){"use strict";var a=n(166);n.n(a).a},172:function(t,e,n){"use strict";var a=n(167);n.n(a).a},173:function(t,e,n){},184:function(t,e,n){"use strict";var a=n(173);n.n(a).a},192:function(t,e,n){"use strict";n.r(e);var a=n(34),r=n(52),i=n(51),s=n(53),l=n(50),o=n(1),u=n(169),c={components:{DateTime:a.default,MapLink:r.default,Speakers:i.default,Synopsis:s.default,TicketsLink:l.default},computed:{data:function(){return this.$page.frontmatter},debounce:function(){return u(d,100)}},methods:{capitalizeWord:function(t){return Object(o.a)(t)}},mounted:function(){window.addEventListener("load",this.debounce),window.addEventListener("resize",this.debounce)},destroyed:function(){window.removeEventListener("load",this.debounce),window.removeEventListener("resize",this.debounce)}},d=function(){var t=document.querySelector("header"),e=document.querySelector(".hero"),n=document.querySelector(".category");if(t&&e&&n){var a=t.offsetHeight+e.offsetHeight;n.style.marginTop="".concat(a,"px")}},p=c,v=(n(184),n(0)),h=Object(v.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeroInternalPage",{attrs:{title:t.data.name}}),n("div",{staticClass:"category"},[n("Badge",{attrs:{text:t.capitalizeWord(t.data.category)}})],1),n("Synopsis"),t.data.speakers&&t.data.speakers.length>0?n("div",[n("h2",[t._v("Speakers")]),n("Speakers")],1):t._e(),t.data.date?n("div",[n("h2",[t._v("Date")]),n("DateTime")],1):t._e(),t.data.venue||t.data.address?n("div",[Array.isArray(t.data.address)?n("h2",[t._v("Venues")]):n("h2",[t._v("Venue")]),n("MapLink")],1):t._e(),t.data.tickets?n("div",[n("h2",[t._v("More information")]),n("TicketsLink")],1):t._e()],1)},[],!1,null,"d0a14d5e",null);e.default=h.exports},34:function(t,e,n){"use strict";n.r(e);n(168);var a={props:["date","endDate","time","endTime"],data:function(){return{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}},computed:{datetime:function(){var t=this.date||this.$page.frontmatter.date;t=new Date(t);var e=this.dayNames[t.getUTCDay()],n=this.monthNames[t.getUTCMonth()],a="".concat(e,", ").concat(t.getUTCDate()),r=this.endDate||this.$page.frontmatter.endDate;r&&(r=new Date(r)).toJSON()!==t.toJSON()&&(e=this.dayNames[r.getUTCDay()],a+=" - ".concat(e,", ").concat(r.getUTCDate())),a+=" ".concat(n);var i=this.time||this.$page.frontmatter.time;i&&(a+=" @ ".concat(i));var s=this.endTime||this.$page.frontmatter.endTime;return s&&i&&s!==i&&(a+="-".concat(s)),a}}},r=n(0),i=Object(r.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"datetime"},[this._t("before"),this._v("\n  "+this._s(this.datetime)+"\n  "),this._t("after")],2)},[],!1,null,null,null);e.default=i.exports},50:function(t,e,n){"use strict";n.r(e);var a={components:{ExternalLink:n(10).default},computed:{price:function(){var t=this.$page.frontmatter.price;return t&&0!==t?(t+=" €",t):"Free"}}},r=(n(172),n(0)),i=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ticket--container"},[e("span",{staticClass:"ticket--price"},[this._v("\n    Cost: "+this._s(this.price)+"\n  ")]),this.$page.frontmatter.tickets?e("span",{staticClass:"button"},[e("ExternalLink",{attrs:{url:this.$page.frontmatter.tickets,caption:"Website",indicator:"true"}})],1):this._e()])},[],!1,null,null,null);e.default=i.exports},51:function(t,e,n){"use strict";n.r(e);n(85);var a={components:{ExternalLink:n(10).default},methods:{removeProtocol:function(t){if(t)return(t=t.split(/https?:\/\//))[1]}}},r=(n(171),n(0)),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"speakers--container"},t._l(t.$page.frontmatter.speakers,function(e){return n("div",[n("h3",[t._v(t._s(e.name))]),e.title||e.company?n("h5",[t._v("\n      "+t._s(e.title)+"\n\n      "),e.company?n("span",[e.title&&e.company?n("span",[t._v("\n           • \n        ")]):t._e(),e.companyURL?n("ExternalLink",{attrs:{url:e.companyURL,caption:e.company}}):n("span",[t._v("\n          "+t._s(e.company)+"\n        ")])],1):t._e()]):t._e(),e.bio?n("p",[t._v("\n      "+t._s(e.bio)+"\n    ")]):t._e(),e.twitter||e.website?n("div",[e.twitter?n("ExternalLink",{attrs:{url:"https://twitter.com/"+e.twitter,title:"@"+e.twitter}},[n("svg",{attrs:{"enable-background":"new 0 0 612 612",viewBox:"0 0 612 612",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"}})])]):t._e(),e.twitter&&e.website?n("span",[t._v("\n         \n      ")]):t._e(),e.website?n("ExternalLink",{attrs:{url:e.website,title:e.website}},[n("svg",{attrs:{"enable-background":"new 0 0 48.625 48.625",height:"48.625",viewBox:"0 0 48.625 48.625",width:"48.625",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m35.432 10.815.047.361-.541.112-.072.769h.648l.862-.083.445-.529-.473-.184-.259-.298-.389-.63-.186-.891-.731.149-.205.314v.354l.352.241z"}}),n("path",{attrs:{d:"m34.809 11.111.039-.482-.429-.185-.6.139-.445.714v.463h.519z"}}),n("path",{attrs:{d:"m22.459 13.158-.132.34h-.639v.33h.152s.009.07.022.162l.392-.033.245-.152.064-.307.317-.027.125-.258-.291-.06z"}}),n("path",{attrs:{d:"m20.812 13.757-.025.323.463-.039.048-.324-.278-.219z"}}),n("path",{attrs:{d:"m48.619 24.061c-.007-.711-.043-1.417-.11-2.112-.225-2.317-.779-4.538-1.609-6.62-.062-.155-.119-.312-.185-.465-1.106-2.613-2.659-4.992-4.56-7.045-.125-.134-.252-.266-.379-.396-.359-.373-.728-.737-1.11-1.086-4.322-3.935-10.062-6.337-16.354-6.337-6.345 0-12.126 2.445-16.46 6.44-1.01.931-1.938 1.947-2.78 3.035-3.176 4.108-5.072 9.254-5.072 14.837 0 13.407 10.907 24.313 24.313 24.313 9.43 0 17.617-5.4 21.647-13.268.862-1.682 1.533-3.475 1.985-5.354.115-.477.214-.956.3-1.441.245-1.381.379-2.801.379-4.25.001-.084-.004-.167-.005-.251zm-4.576-9.717.141-.158c.185.359.358.724.523 1.094l-.23-.009-.434.06zm-3.513-4.242.004-1.086c.382.405.75.822 1.102 1.254l-.438.652-1.531-.014-.096-.319zm-29.328-2.699v-.041h.487l.042-.167h.797v.348l-.229.306h-1.098zm.778 1.085s.487-.083.529-.083 0 .486 0 .486l-1.098.069-.209-.25zm33.612 9.651h-1.779l-1.084-.807-1.141.111v.696h-.361l-.39-.278-1.976-.501v-1.28l-2.504.195-.776.417h-.994l-.487-.049-1.207.67v1.261l-2.467 1.78.205.76h.5l-.131.724-.352.129-.019 1.892 2.132 2.428h.928l.056-.148h1.668l.481-.445h.946l.519.52 1.41.146-.187 1.875 1.565 2.763-.824 1.575.056.742.649.647v1.784l.852 1.146v1.482h.736c-4.096 5.029-10.33 8.25-17.305 8.25-12.302.001-22.311-10.009-22.311-22.312 0-3.097.636-6.049 1.781-8.732v-.696l.798-.969c.277-.523.574-1.033.891-1.53l.036.405-.926 1.125c-.287.542-.555 1.096-.798 1.665v1.27l.927.446v1.765l.889 1.517.723.111.093-.52-.853-1.316-.167-1.279h.5l.211 1.316 1.233 1.799-.318.581.784 1.199 1.947.482v-.315l.779.111-.074.556.612.112.945.258 1.335 1.521 1.705.129.167 1.391-1.167.816-.055 1.242-.167.76 1.688 2.113.129.724s.612.166.687.166c.074 0 1.372.983 1.372.983v3.819l.463.13-.315 1.762.779 1.039-.144 1.746 1.029 1.809 1.321 1.154 1.328.024.13-.427-.976-.822.056-.408.175-.5.037-.51-.66-.02-.333-.418.548-.527.074-.398-.612-.175.036-.37.872-.132 1.326-.637.445-.816 1.391-1.78-.316-1.392.427-.741 1.279.039.861-.682.278-2.686.955-1.213.167-.779-.871-.279-.575-.943-1.965-.02-1.558-.594-.074-1.111-.52-.909-1.409-.021-.814-1.278-.723-.353-.037.39-1.316.078-.482-.671-1.373-.279-1.131 1.307-1.78-.302-.129-2.006-1.299-.222.521-.984-.149-.565-1.707 1.141-1.074-.131-.383-.839.234-.865.592-1.091 1.363-.69 2.632-.001-.007.803.946.44-.075-1.372.682-.686 1.376-.904.094-.636 1.372-1.428 1.459-.808-.129-.106.988-.93.362.096.166.208.375-.416.092-.041-.411-.058-.417-.139v-.4l.221-.181h.487l.223.098.193.39.236-.036v-.034l.068.023.684-.105.097-.334.39.098v.362l-.362.249h.001l.053.397 1.239.382s.001.005.003.015l.285-.024.019-.537-.982-.447-.056-.258.815-.278.036-.78-.852-.519-.056-1.315-1.168.574h-.426l.112-1.001-1.59-.375-.658.497v1.516l-1.183.375-.474.988-.514.083v-1.264l-1.112-.154-.556-.362-.224-.819 1.989-1.164.973-.296.098.654.542-.028.042-.329.567-.081.01-.115-.244-.101-.056-.348.697-.059.421-.438.023-.032.005.002.128-.132 1.465-.185.648.55-1.699.905 2.162.51.28-.723h.945l.334-.63-.668-.167v-.797l-2.095-.928-1.446.167-.816.427.056 1.038-.853-.13-.131-.574.817-.742-1.483-.074-.426.129-.185.5.556.094-.111.556-.945.056-.148.37-1.371.038s-.038-.778-.093-.778 1.075-.019 1.075-.019l.817-.798-.446-.223-.593.576-.984-.056-.593-.816h-1.261l-1.316.983h1.206l.11.353-.313.291 1.335.037.204.482-1.503-.056-.073-.371-.945-.204-.501-.278-1.125.009c3.683-2.683 8.212-4.271 13.107-4.271 5.642 0 10.797 2.109 14.73 5.574l-.265.474-1.029.403-.434.471.1.549.531.074.32.8.916-.369.151 1.07h-.276l-.752-.111-.834.14-.807 1.14-1.154.181-.167.988.487.115-.141.635-1.146-.23-1.051.23-.223.585.182 1.228.617.289 1.035-.006.699-.063.213-.556 1.092-1.419.719.147.708-.64.132.5 1.742 1.175-.213.286-.785-.042.302.428.483.106.566-.236-.012-.682.251-.126-.202-.214-1.162-.648-.306-.861h.966l.309.306.832.717.035.867.862.918.321-1.258.597-.326.112 1.029.583.64 1.163-.02c.225.579.427 1.168.604 1.769zm-32.331-7.093.584-.278.528.126-.182.709-.57.181zm3.099 1.669v.459h-1.334l-.5-.139.125-.32.641-.265h.876v.265zm.614.64v.445l-.334.215-.416.077s0-.667 0-.737zm-.376-.181v-.529l.459.418zm.209 1.07v.433l-.319.32h-.709l.111-.486.335-.029.069-.167zm-1.766-.889h.737l-.945 1.321-.39-.209.084-.556zm3.018.737v.432h-.709l-.194-.28v-.402h.056zm-.655-.594.202-.212.341.212-.273.225zm28.55 5.767.07-.082c.029.126.06.252.088.38z"}}),n("path",{attrs:{d:"m3.782 14.884v.696c.243-.568.511-1.122.798-1.665z"}})])]):t._e()],1):t._e()])}))},[],!1,null,null,null);e.default=i.exports},52:function(t,e,n){"use strict";n.r(e);n(24),n(89);var a={components:{ExternalLink:n(10).default},computed:{venues:function(){var t=this.$page.frontmatter.address,e=this.$page.frontmatter.venue;if(Array.isArray(e)){var n=-1;return e.map(function(e){return{name:e,address:t[++n]||null}})}return[{name:e||null,address:t}]}}},r=n(0),i=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.venues,function(e){return n("p",[e.name?n("span",[t._v("\n      "+t._s(e.name)),n("br")]):t._e(),e.address?n("ExternalLink",{attrs:{url:"https://www.google.com/maps/place/"+e.address,caption:e.address,indicator:"true"}}):t._e()],1)}))},[],!1,null,null,null);e.default=i.exports},53:function(t,e,n){"use strict";n.r(e);var a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.$page.frontmatter.synopsis,function(e){return n("p",[e.list?n("ul",t._l(e.list,function(e){return n("li",[t._v("\n        "+t._s(e)+"\n      ")])})):n("span",[t._v("\n      "+t._s(e)+"\n    ")])])}))},[],!1,null,null,null);e.default=r.exports}}]);