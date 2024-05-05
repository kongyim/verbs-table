(function(){"use strict";var a={3300:function(a,t,e){var i=e(7195),n=function(){var a=this,t=a._self._c;return t("div",{attrs:{id:"app"}},[a.selectedGame?"location"===a.selectedGame.id?t("NameByLocation",{attrs:{countries:a.countries,selectedGame:a.selectedGame},on:{"update:countries":function(t){a.countries=t},"update:selectedGame":function(t){a.selectedGame=t},"update:selected-game":function(t){a.selectedGame=t}}}):"flag"===a.selectedGame.id?t("NameByFlag",{attrs:{field:"country",countries:a.countries,selectedGame:a.selectedGame},on:{"update:countries":function(t){a.countries=t},"update:selectedGame":function(t){a.selectedGame=t},"update:selected-game":function(t){a.selectedGame=t}}}):"alpha2"===a.selectedGame.id?t("NameByFlag",{attrs:{field:"alpha2",showCountryName:!0,countries:a.countries,selectedGame:a.selectedGame},on:{"update:countries":function(t){a.countries=t},"update:selectedGame":function(t){a.selectedGame=t},"update:selected-game":function(t){a.selectedGame=t}}}):"alpha3"===a.selectedGame.id?t("NameByFlag",{attrs:{field:"alpha3",showCountryName:!0,countries:a.countries,selectedGame:a.selectedGame},on:{"update:countries":function(t){a.countries=t},"update:selectedGame":function(t){a.selectedGame=t},"update:selected-game":function(t){a.selectedGame=t}}}):a._e():t("MainMenu",{attrs:{countries:a.countries,games:a.games,selectedGame:a.selectedGame,originalCountries:a.originalCountries},on:{"update:countries":function(t){a.countries=t},"update:selectedGame":function(t){a.selectedGame=t},"update:selected-game":function(t){a.selectedGame=t}}})],1)},o=[],l=e(1579),r=e.n(l),u=function(){var a=this,t=a._self._c;return a.isReady?t("div",{staticClass:"main-page",on:{click:a.onClickApplication}},[t("div",{key:`correct-${a.correctList.length}`,staticClass:"header-box"},[t("div",{staticClass:"progress"},[a._v(" "+a._s(a.correctList.length)+" / "+a._s(a.countries.length)+" ")]),a.lastCountry?t("div",{staticClass:"last-country"},[t("img",{attrs:{src:a.lastCountry.image}}),t("div",[a._v(a._s(a.lastCountry.country))])]):a._e(),a.isGiveUp||a.isWin?[t("div",{staticClass:"try-again",on:{click:a.onClickTryAgain}},[a._v(" Try again ")]),t("div",{staticClass:"back-button",on:{click:a.onClickBack}},[a._v(" Back ")])]:t("div",{staticClass:"give-up",on:{click:a.onClickGiveUp}},[a._v(" Give up ")])],2),t("div",{key:"map",ref:"map",staticClass:"map",on:{click:a.onClickMap}},[t("div",{staticClass:"map-background"}),a._l(a.countries,(function(e){return t("div",{key:`item-${e.alpha2}`,staticClass:"box",class:{active:e.active,last:e===a.lastCountry},style:e.style,on:{click:function(t){return a.onClickCountryBox(e)}}})}))],2),a.isWin?[t("div",{staticClass:"congratulations"},[a._v(" Congratulations ")])]:[a.isGiveUp?t("div",{staticClass:"missing-countries-canvas"},a._l(a.missingCountries,(function(e){return t("div",{key:`missing-${e.alpha2}`,staticClass:"country-item",on:{click:function(t){return a.onClickCountryBox(e)}}},[t("img",{staticClass:"flag",attrs:{src:e.image}}),t("span",{staticClass:"label"},[a._v(a._s(e.country))])])})),0):a._e()],t("div",{staticClass:"input-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.inputCountry,expression:"inputCountry"}],ref:"input",attrs:{disabled:a.isGiveUp||a.isWin},domProps:{value:a.inputCountry},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.onEnter.apply(null,arguments)},input:function(t){t.target.composing||(a.inputCountry=t.target.value)}}})])],2):a._e()},s=[];e(7658);class c{constructor(){this.audioMap={}}play(a){let t=this.audioMap[a];t?(t.pause(),t.currentTime=0):this.audioMap[a]=t=new Audio(a),t.play()}playError(){this.play("./assets/mp3/error.mp3")}playApplause(){this.play("./assets/mp3/applause.mp3")}stopAll(){r().each(this.audioMap,(a=>{a.pause(),a.currentTime=0}))}}var d,p,h=new c,g={data(){return{correctList:[],lastCountry:null,isReady:!1,isGiveUp:!1,isWin:!1}},methods:{checkWin(){r().isEmpty(r().difference(this.countries,this.correctList))&&(this.isWin=!0,setTimeout((()=>{h.playApplause()}),1e3))},onClickGiveUp(){confirm("Are you sure you want to give up?")&&(this.isGiveUp=!0,this.inputCountry="",this.missingCountries=r().difference(this.countries,this.correctList))},onClickTryAgain(){this.resetGame()},onClickBack(){this.$emit("update:selectedGame",null)}}},y=g,A=e(1001),f=(0,A.Z)(y,d,p,!1,null,null,null),m=f.exports,C={mixins:[m],props:["countries","selectedGame"],data(){const a=2520,t=1260;return{mapWidth:a,mapHeight:t,inputCountry:"",missingCountries:this.countries}},mounted(){r().each(this.countries,(a=>{const t=Math.floor(this.mapWidth/360*(180+a.longitude))-100,e=Math.floor(this.mapHeight/180*(90-a.latitude))-0;a.x=(t+this.mapWidth)%this.mapWidth,a.y=e,a.style={left:`${a.x}px`,top:`${a.y}px`}})),this.$emit("update:countries",r().sortBy(this.countries,(a=>a.country))),this.isReady=!0,setTimeout((()=>{this.$refs.input.focus(),this.setMapCenter({x:this.mapWidth/2,y:this.mapHeight/3},!1)}))},methods:{onEnter(){if(this.inputCountry=r().trim(this.inputCountry),r().isEmpty(this.inputCountry))return;const a=r().find(this.countries,(a=>r().toLower(a.country)===r().toLower(this.inputCountry)));a?(r().includes(this.correctList,a)||(a.active=!0,this.correctList.push(a)),this.lastCountry=a,h.play(a.audio),this.setMapCenter(a),this.checkWin()):h.playError(),this.inputCountry="",setTimeout((()=>{this.$refs.input.focus()}))},setMapCenter(a,t=!0){this.$refs.map.scrollTo({left:a.x-this.$refs.map.clientWidth/2,top:a.y-this.$refs.map.clientHeight/2,behavior:t?"smooth":void 0})},onClickApplication(){setTimeout((()=>{this.$refs.input.focus()}))},onClickMap(a){const t=a.clientX+this.$refs.map.scrollLeft,e=a.clientY+this.$refs.map.scrollTop;this.setMapCenter({x:t,y:e}),setTimeout((()=>{this.$refs.input.focus()}))},onClickCountryBox(a){console.log(a.country,a),this.setMapCenter(a),this.isGiveUp&&(this.lastCountry=a,h.play(a.audio))},resetGame(){r().each(this.countries,(a=>r().set(a,"active",!1))),this.correctList=[],this.lastCountry="",this.isGiveUp=!1,this.isWin=!1,h.stopAll()}}},v=C,S=(0,A.Z)(v,u,s,!1,null,"58517d22",null),G=S.exports,M=function(){var a=this,t=a._self._c;return a.isReady?t("div",{key:`key-${a.correctList.length}`,staticClass:"main-page"},[t("div",{key:`correct-${a.correctList.length}`,staticClass:"header-box"},[t("div",{staticClass:"progress"},[a._v(" "+a._s(a.correctList.length)+" / "+a._s(a.countries.length)+" ")]),a.isGiveUp||a.isWin?[t("div",{staticClass:"try-again",on:{click:a.onClickTryAgain}},[a._v(" Try again ")]),t("div",{staticClass:"back-button",on:{click:a.onClickBack}},[a._v(" Back ")])]:t("div",{staticClass:"give-up",on:{click:a.onClickGiveUp}},[a._v(" Give up ")])],2),a.isWin?[t("div",{staticClass:"congratulations"},[a._v(" Congratulations ")])]:a._e(),t("div",{staticClass:"countries"},a._l(a.countries,(function(e,i){return t("div",{key:`country-${e.country}`,staticClass:"country",class:{correct:e.correct||a.isGiveUp},on:{click:function(t){return a.onClickCountry(e)}}},[t("img",{attrs:{src:e.image}}),a.showCountryName?t("p",[a._v(a._s(a.get(e,"country")))]):a._e(),e.correct||a.isGiveUp?t("p",{class:{miss:a.isGiveUp&&!e.correct}},[a._v(a._s(a.get(e,a.field)))]):t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"item.answer"}],ref:`input-${i}`,refInFor:!0,domProps:{value:e.answer},on:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.onKey(e,i)},input:function(t){t.target.composing||a.$set(e,"answer",t.target.value)}}})])})),0)],2):a._e()},E=[],N={mixins:[m],props:["showCountryName","countries","selectedGame","field"],data(){return{get:r().get,isReady:!1,correctList:[],missingCountries:this.countries}},mounted(){this.resetGame(),this.isReady=!0},methods:{onKey(a,t){r().toLower(r().get(a,this.field))===r().trim(r().toLower(a.answer))?(a.correct=!0,r().includes(this.correctList,a)||this.correctList.push(a),h.play(a.audio),this.focusNextInput(t),this.checkWin()):h.playError()},focusNextInput(a){setTimeout((()=>{let t;r().each(r().range(this.countries.length),(e=>{if(t)return;const i=(a+e+1)%this.countries.length;t=r().first(this.$refs[`input-${i}`])})),t&&t.focus()}))},resetGame(){r().each(this.countries,(a=>{r().set(a,"correct",!1),r().set(a,"answer","")})),this.$emit("update:countries",r().shuffle(this.countries)),this.correctList=[],this.isGiveUp=!1,this.isWin=!1,h.stopAll()},onClickCountry(a){(a.correct||this.isGiveUp)&&h.play(a.audio)}}},R=N,P=(0,A.Z)(R,M,E,!1,null,"f97d8c98",null),B=P.exports,k=function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"buttons"},a._l(a.games,(function(e){return t("div",{key:`button-${e.id}`,staticClass:"button",on:{click:function(t){return a.onClickGame(e)}}},[a._v(" "+a._s(e.label)+" ")])})),0),t("div",{staticClass:"regions"},[t("p",{staticClass:"title"},[a._v(" Total number of countries selected: "+a._s(this.countries.length)+" / "+a._s(a.originalCountries.length)+" ")]),a._l(a.regions,(function(e){return t("div",{key:`region-${e.label}`,staticClass:"region",on:{change:function(t){return a.onChangeRegion(e)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.selectedRegions,expression:"selectedRegions"}],attrs:{type:"checkbox",size:"60"},domProps:{value:e,checked:Array.isArray(a.selectedRegions)?a._i(a.selectedRegions,e)>-1:a.selectedRegions},on:{change:function(t){var i=a.selectedRegions,n=t.target,o=!!n.checked;if(Array.isArray(i)){var l=e,r=a._i(i,l);n.checked?r<0&&(a.selectedRegions=i.concat([l])):r>-1&&(a.selectedRegions=i.slice(0,r).concat(i.slice(r+1)))}else a.selectedRegions=o}}}),t("span",[a._v(a._s(e.label)+" ("+a._s(e.countries.length)+")")])])})),t("div",{staticClass:"region clear-all",on:{click:a.onClickClearAll}},[a._v(" Clear All ")])],2)])},L=[],T={props:["games","selectedGame","countries","originalCountries"],data(){return{regions:[],selectedRegions:[]}},mounted(){const a=r().sortBy(this.originalCountries,(a=>r().toLower(a.country))),t=r().flatten(r().map(a,"regions"));this.regions=r().map(r().uniq(r().sortBy(t)),(a=>({label:a,countries:r().filter(this.originalCountries,(t=>r().includes(t.regions,a)))})));const e=localStorage.getItem("slectedRegions");if(r().isEmpty(e))this.selectedRegions=r().clone(this.regions);else try{const a=JSON.parse(e);this.selectedRegions=r().filter(this.regions,(t=>r().includes(a,t.label)))}catch(i){console.error(i)}this.updateCountriesBySelectedRegons()},methods:{onClickGame(a){r().isEmpty(this.countries)||this.$emit("update:selectedGame",a)},onChangeRegion(){localStorage.setItem("slectedRegions",JSON.stringify(r().map(this.selectedRegions,"label"))),this.updateCountriesBySelectedRegons()},updateCountriesBySelectedRegons(){let a=r().uniq(r().flatten(r().map(this.selectedRegions,"countries")));this.$emit("update:countries",a)},onClickClearAll(){this.selectedRegions=[],this.updateCountriesBySelectedRegons()}}},b=T,U=(0,A.Z)(b,k,L,!1,null,"514e6403",null),_=U.exports,I=JSON.parse('[{"country":"Afghanistan","alpha2":"AF","alpha3":"AFG","latitude":33,"longitude":65,"regions":["Asia & Pacific"]},{"country":"Albania","alpha2":"AL","alpha3":"ALB","latitude":41,"longitude":20,"regions":["Europe"]},{"country":"Algeria","alpha2":"DZ","alpha3":"DZA","latitude":28,"longitude":3,"regions":["Africa","Arab States"]},{"country":"Andorra","alpha2":"AD","alpha3":"AND","latitude":42.5,"longitude":1.6,"regions":["Europe"]},{"country":"Angola","alpha2":"AO","alpha3":"AGO","latitude":-12.5,"longitude":18.5,"regions":["Africa"]},{"country":"Antigua and Barbuda","alpha2":"AG","alpha3":"ATG","latitude":17.05,"longitude":-61.8,"regions":["North America"]},{"country":"Argentina","alpha2":"AR","alpha3":"ARG","latitude":-34,"longitude":-64,"regions":["South America"]},{"country":"Armenia","alpha2":"AM","alpha3":"ARM","latitude":40,"longitude":45,"regions":["Europe"]},{"country":"Australia","alpha2":"AU","alpha3":"AUS","latitude":-27,"longitude":133,"regions":["Asia & Pacific"]},{"country":"Austria","alpha2":"AT","alpha3":"AUT","latitude":47.3333,"longitude":13.3333,"regions":["Europe"]},{"country":"Azerbaijan","alpha2":"AZ","alpha3":"AZE","latitude":40.5,"longitude":47.5,"regions":["Europe","Asia & Pacific"]},{"country":"Bahamas","alpha2":"BS","alpha3":"BHS","latitude":24.25,"longitude":-76,"regions":["North America"]},{"country":"Bahrain","alpha2":"BH","alpha3":"BHR","latitude":26,"longitude":50.55,"regions":["Arab States","Middle east"]},{"country":"Bangladesh","alpha2":"BD","alpha3":"BGD","latitude":24,"longitude":90,"regions":["Asia & Pacific"]},{"country":"Barbados","alpha2":"BB","alpha3":"BRB","latitude":13.1667,"longitude":-59.5333,"regions":["North America"]},{"country":"Belarus","alpha2":"BY","alpha3":"BLR","latitude":53,"longitude":28,"regions":["Europe"]},{"country":"Belgium","alpha2":"BE","alpha3":"BEL","latitude":50.8333,"longitude":4,"regions":["Europe"]},{"country":"Belize","alpha2":"BZ","alpha3":"BLZ","latitude":17.25,"longitude":-88.75,"regions":["North America"]},{"country":"Benin","alpha2":"BJ","alpha3":"BEN","latitude":9.5,"longitude":2.25,"regions":["Africa"]},{"country":"Bhutan","alpha2":"BT","alpha3":"BTN","latitude":27.5,"longitude":90.5,"regions":["Asia & Pacific"]},{"country":"Bolivia","alpha2":"BO","alpha3":"BOL","latitude":-17,"longitude":-65,"regions":["South America"]},{"country":"Bosnia and Herzegovina","alpha2":"BA","alpha3":"BIH","latitude":44,"longitude":18,"regions":["Europe"]},{"country":"Botswana","alpha2":"BW","alpha3":"BWA","latitude":-22,"longitude":24,"regions":["Africa"]},{"country":"Brazil","alpha2":"BR","alpha3":"BRA","latitude":-10,"longitude":-55,"regions":["South America"]},{"country":"Brunei","alpha2":"BN","alpha3":"BRN","latitude":4.5,"longitude":114.6667,"regions":["Asia & Pacific"]},{"country":"Bulgaria","alpha2":"BG","alpha3":"BGR","latitude":43,"longitude":25,"regions":["Europe"]},{"country":"Burkina Faso","alpha2":"BF","alpha3":"BFA","latitude":13,"longitude":-2,"regions":["Africa"]},{"country":"Burundi","alpha2":"BI","alpha3":"BDI","latitude":-3.5,"longitude":30,"regions":["Africa"]},{"country":"Cambodia","alpha2":"KH","alpha3":"KHM","latitude":13,"longitude":105,"regions":["Asia & Pacific"]},{"country":"Cameroon","alpha2":"CM","alpha3":"CMR","latitude":6,"longitude":12,"regions":["Africa"]},{"country":"Canada","alpha2":"CA","alpha3":"CAN","latitude":60,"longitude":-98,"regions":["North America"]},{"country":"Cape Verde","alpha2":"CV","alpha3":"CPV","latitude":16,"longitude":-24,"regions":["Africa"]},{"country":"Central African Republic","alpha2":"CF","alpha3":"CAF","latitude":7,"longitude":21,"regions":["Africa"]},{"country":"Chad","alpha2":"TD","alpha3":"TCD","latitude":15,"longitude":19,"regions":["Africa"]},{"country":"Chile","alpha2":"CL","alpha3":"CHL","latitude":-30,"longitude":-71,"regions":["South America"]},{"country":"China","alpha2":"CN","alpha3":"CHN","latitude":35,"longitude":105,"regions":["Asia & Pacific"]},{"country":"Colombia","alpha2":"CO","alpha3":"COL","latitude":4,"longitude":-72,"regions":["South America"]},{"country":"Comoros","alpha2":"KM","alpha3":"COM","latitude":-12.1667,"longitude":44.25,"regions":["Africa","Arab States"]},{"country":"Congo","alpha2":"CG","alpha3":"COG","latitude":-1,"longitude":15,"regions":["Africa"]},{"country":"Costa Rica","alpha2":"CR","alpha3":"CRI","latitude":10,"longitude":-84,"regions":["North America"]},{"country":"Croatia","alpha2":"HR","alpha3":"HRV","latitude":45.1667,"longitude":15.5,"regions":["Europe"]},{"country":"Cuba","alpha2":"CU","alpha3":"CUB","latitude":21.5,"longitude":-80,"regions":["North America"]},{"country":"Cyprus","alpha2":"CY","alpha3":"CYP","latitude":35,"longitude":33,"regions":["Europe","Middle east"]},{"country":"Czechia","alpha2":"CZ","alpha3":"CZE","latitude":49.75,"longitude":15.5,"regions":["Europe"]},{"country":"DRC","speak":"D.R.C.","alpha2":"CD","alpha3":"COD","latitude":0,"longitude":25,"regions":["Africa"]},{"country":"Denmark","alpha2":"DK","alpha3":"DNK","latitude":56,"longitude":10,"regions":["Europe"]},{"country":"Djibouti","alpha2":"DJ","alpha3":"DJI","latitude":11.5,"longitude":43,"regions":["Africa","Arab States"]},{"country":"Dominica","alpha2":"DM","alpha3":"DMA","latitude":15.4167,"longitude":-61.3333,"regions":["North America"]},{"country":"Dominican Republic","alpha2":"DO","alpha3":"DOM","latitude":19,"longitude":-70.6667,"regions":["North America"]},{"country":"Ecuador","alpha2":"EC","alpha3":"ECU","latitude":-2,"longitude":-77.5,"regions":["South America"]},{"country":"Egypt","alpha2":"EG","alpha3":"EGY","latitude":27,"longitude":30,"regions":["Arab States","Africa","Middle east"]},{"country":"El Salvador","alpha2":"SV","alpha3":"SLV","latitude":13.8333,"longitude":-88.9167,"regions":["North America"]},{"country":"Equatorial Guinea","alpha2":"GQ","alpha3":"GNQ","latitude":2,"longitude":10,"regions":["Africa"]},{"country":"Eritrea","alpha2":"ER","alpha3":"ERI","latitude":15,"longitude":39,"regions":["Africa"]},{"country":"Estonia","alpha2":"EE","alpha3":"EST","latitude":59,"longitude":26,"regions":["Europe"]},{"country":"Eswatini","alpha2":"SZ","alpha3":"SWZ","latitude":-26.5,"longitude":31.5,"regions":["Africa"]},{"country":"Ethiopia","alpha2":"ET","alpha3":"ETH","latitude":8,"longitude":38,"regions":["Africa"]},{"country":"Fiji","alpha2":"FJ","alpha3":"FJI","latitude":-18,"longitude":175,"regions":["Asia & Pacific"]},{"country":"Finland","alpha2":"FI","alpha3":"FIN","latitude":64,"longitude":26,"regions":["Europe"]},{"country":"France","alpha2":"FR","alpha3":"FRA","latitude":46,"longitude":2,"regions":["Europe"]},{"country":"Gabon","alpha2":"GA","alpha3":"GAB","latitude":-1,"longitude":11.75,"regions":["Africa"]},{"country":"Gambia","alpha2":"GM","alpha3":"GMB","latitude":13.4667,"longitude":-16.5667,"regions":["Africa"]},{"country":"Georgia","alpha2":"GE","alpha3":"GEO","latitude":42,"longitude":43.5,"regions":["Europe","Asia & Pacific"]},{"country":"Germany","alpha2":"DE","alpha3":"DEU","latitude":51,"longitude":9,"regions":["Europe"]},{"country":"Ghana","alpha2":"GH","alpha3":"GHA","latitude":8,"longitude":-2,"regions":["Africa"]},{"country":"Greece","alpha2":"GR","alpha3":"GRC","latitude":39,"longitude":22,"regions":["Europe"]},{"country":"Grenada","alpha2":"GD","alpha3":"GRD","latitude":12.1167,"longitude":-61.6667,"regions":["North America"]},{"country":"Guatemala","alpha2":"GT","alpha3":"GTM","latitude":15.5,"longitude":-90.25,"regions":["North America"]},{"country":"Guinea","alpha2":"GN","alpha3":"GIN","latitude":11,"longitude":-10,"regions":["Africa"]},{"country":"Guinea Bissau","alpha2":"GW","alpha3":"GNB","latitude":12,"longitude":-15,"regions":["Africa"]},{"country":"Guyana","alpha2":"GY","alpha3":"GUY","latitude":5,"longitude":-59,"regions":["South America"]},{"country":"Haiti","alpha2":"HT","alpha3":"HTI","latitude":19,"longitude":-72.4167,"regions":["North America"]},{"country":"Honduras","alpha2":"HN","alpha3":"HND","latitude":15,"longitude":-86.5,"regions":["North America"]},{"country":"Hungary","alpha2":"HU","alpha3":"HUN","latitude":47,"longitude":20,"regions":["Europe"]},{"country":"Iceland","alpha2":"IS","alpha3":"ISL","latitude":65,"longitude":-18,"regions":["Europe"]},{"country":"India","alpha2":"IN","alpha3":"IND","latitude":20,"longitude":77,"regions":["Asia & Pacific"]},{"country":"Indonesia","alpha2":"ID","alpha3":"IDN","latitude":-5,"longitude":120,"regions":["Asia & Pacific"]},{"country":"Iran","alpha2":"IR","alpha3":"IRN","latitude":32,"longitude":53,"regions":["Middle east"]},{"country":"Iraq","alpha2":"IQ","alpha3":"IRQ","latitude":33,"longitude":44,"regions":["Middle east","Arab States"]},{"country":"Ireland","alpha2":"IE","alpha3":"IRL","latitude":53,"longitude":-8,"regions":["Europe"]},{"country":"Israel","alpha2":"IL","alpha3":"ISR","latitude":31.5,"longitude":34.75,"regions":["Middle east"]},{"country":"Italy","alpha2":"IT","alpha3":"ITA","latitude":45.5,"longitude":11,"regions":["Europe"]},{"country":"Ivory Coast","alpha2":"CI","alpha3":"CIV","latitude":8,"longitude":-5,"regions":["Africa"]},{"country":"Jamaica","alpha2":"JM","alpha3":"JAM","latitude":18.25,"longitude":-77.5,"regions":["North America"]},{"country":"Japan","alpha2":"JP","alpha3":"JPN","latitude":36,"longitude":138,"regions":["Asia & Pacific"]},{"country":"Jordan","alpha2":"JO","alpha3":"JOR","latitude":31,"longitude":36,"regions":["Middle east","Arab States"]},{"country":"Kazakhstan","alpha2":"KZ","alpha3":"KAZ","latitude":48,"longitude":68,"regions":["Asia & Pacific"]},{"country":"Kenya","alpha2":"KE","alpha3":"KEN","latitude":1,"longitude":38,"regions":["Africa"]},{"country":"Kiribati","alpha2":"KI","alpha3":"KIR","latitude":1.4167,"longitude":173,"regions":["Asia & Pacific"]},{"country":"Kosovo","alpha2":"XK","alpha3":"XXK","latitude":42,"longitude":21,"regions":["Europe"]},{"country":"Kuwait","alpha2":"KW","alpha3":"KWT","latitude":29.3375,"longitude":47.6581,"regions":["Middle east","Arab States"]},{"country":"Kyrgyzstan","alpha2":"KG","alpha3":"KGZ","latitude":41,"longitude":75,"regions":["Asia & Pacific"]},{"country":"Laos","alpha2":"LA","alpha3":"LAO","latitude":18,"longitude":105,"regions":["Asia & Pacific"]},{"country":"Latvia","alpha2":"LV","alpha3":"LVA","latitude":57,"longitude":25,"regions":["Europe"]},{"country":"Lebanon","alpha2":"LB","alpha3":"LBN","latitude":33.8333,"longitude":35.8333,"regions":["Arab States","Middle east"]},{"country":"Lesotho","alpha2":"LS","alpha3":"LSO","latitude":-29.5,"longitude":28.5,"regions":["Africa"]},{"country":"Liberia","alpha2":"LR","alpha3":"LBR","latitude":6.5,"longitude":-9.5,"regions":["Africa"]},{"country":"Libya","alpha2":"LY","alpha3":"LBY","latitude":26,"longitude":17,"regions":["Arab States","Africa"]},{"country":"Liechtenstein","alpha2":"LI","alpha3":"LIE","latitude":47.1667,"longitude":9.5333,"regions":["Europe"]},{"country":"Lithuania","alpha2":"LT","alpha3":"LTU","latitude":56,"longitude":24,"regions":["Europe"]},{"country":"Luxembourg","alpha2":"LU","alpha3":"LUX","latitude":49.75,"longitude":6.1667,"regions":["Europe"]},{"country":"Madagascar","alpha2":"MG","alpha3":"MDG","latitude":-20,"longitude":47,"regions":["Africa"]},{"country":"Malawi","alpha2":"MW","alpha3":"MWI","latitude":-13.5,"longitude":34,"regions":["Africa"]},{"country":"Malaysia","alpha2":"MY","alpha3":"MYS","latitude":2.5,"longitude":112.5,"regions":["Asia & Pacific"]},{"country":"Maldives","alpha2":"MV","alpha3":"MDV","latitude":3.25,"longitude":73,"regions":["Asia & Pacific"]},{"country":"Mali","alpha2":"ML","alpha3":"MLI","latitude":17,"longitude":-4,"regions":["Africa"]},{"country":"Malta","alpha2":"MT","alpha3":"MLT","latitude":35.8333,"longitude":14.5833,"regions":["Europe"]},{"country":"Marshall Islands","alpha2":"MH","alpha3":"MHL","latitude":9,"longitude":168,"regions":["Asia & Pacific"]},{"country":"Mauritania","alpha2":"MR","alpha3":"MRT","latitude":20,"longitude":-12,"regions":["Arab States","Africa"]},{"country":"Mauritius","alpha2":"MU","alpha3":"MUS","latitude":-20.2833,"longitude":57.55,"regions":["Africa"]},{"country":"Mexico","alpha2":"MX","alpha3":"MEX","latitude":23,"longitude":-102,"regions":["North America"]},{"country":"Micronesia","alpha2":"FM","alpha3":"FSM","latitude":6.9167,"longitude":158.25,"regions":["Asia & Pacific"]},{"country":"Moldova","alpha2":"MD","alpha3":"MDA","latitude":47,"longitude":29,"regions":["Europe"]},{"country":"Monaco","alpha2":"MC","alpha3":"MCO","latitude":43.7333,"longitude":7.4,"regions":["Europe"]},{"country":"Mongolia","alpha2":"MN","alpha3":"MNG","latitude":46,"longitude":105,"regions":["Asia & Pacific"]},{"country":"Montenegro","alpha2":"ME","alpha3":"MNE","latitude":42,"longitude":19,"regions":["Europe"]},{"country":"Morocco","alpha2":"MA","alpha3":"MAR","latitude":32,"longitude":-5,"regions":["Arab States","Africa"]},{"country":"Mozambique","alpha2":"MZ","alpha3":"MOZ","latitude":-18.25,"longitude":35,"regions":["Africa"]},{"country":"Myanmar","alpha2":"MM","alpha3":"MMR","latitude":22,"longitude":98,"regions":["Asia & Pacific"]},{"country":"Namibia","alpha2":"NA","alpha3":"NAM","latitude":-22,"longitude":17,"regions":["Africa"]},{"country":"Nauru","alpha2":"NR","alpha3":"NRU","latitude":-0.5333,"longitude":166.9167,"regions":["Asia & Pacific"]},{"country":"Nepal","alpha2":"NP","alpha3":"NPL","latitude":28,"longitude":84,"regions":["Asia & Pacific"]},{"country":"Netherlands","alpha2":"NL","alpha3":"NLD","latitude":52.5,"longitude":5.75,"regions":["Europe"]},{"country":"New Zealand","alpha2":"NZ","alpha3":"NZL","latitude":-41,"longitude":174,"regions":["Asia & Pacific"]},{"country":"Nicaragua","alpha2":"NI","alpha3":"NIC","latitude":13,"longitude":-85,"regions":["North America"]},{"country":"Niger","alpha2":"NE","alpha3":"NER","latitude":16,"longitude":8,"regions":["Africa"]},{"country":"Nigeria","alpha2":"NG","alpha3":"NGA","latitude":10,"longitude":8,"regions":["Africa"]},{"country":"North Korea","alpha2":"KP","alpha3":"PRK","latitude":40,"longitude":127,"regions":["Asia & Pacific"]},{"country":"North Macedonia","alpha2":"MK","alpha3":"MKD","latitude":41.8333,"longitude":22,"regions":["Europe"]},{"country":"Norway","alpha2":"NO","alpha3":"NOR","latitude":62,"longitude":10,"regions":["Europe"]},{"country":"Oman","alpha2":"OM","alpha3":"OMN","latitude":21,"longitude":57,"regions":["Middle east","Arab States"]},{"country":"Pakistan","alpha2":"PK","alpha3":"PAK","latitude":30,"longitude":70,"regions":["Asia & Pacific"]},{"country":"Palau","alpha2":"PW","alpha3":"PLW","latitude":7.5,"longitude":134.5,"regions":["Asia & Pacific"]},{"country":"Palestine","alpha2":"PS","alpha3":"PSE","latitude":32,"longitude":35.25,"regions":["Arab States","Middle east"]},{"country":"Panama","alpha2":"PA","alpha3":"PAN","latitude":9,"longitude":-80,"regions":["North America"]},{"country":"Papua New Guinea","alpha2":"PG","alpha3":"PNG","latitude":-6,"longitude":147,"regions":["Asia & Pacific"]},{"country":"Paraguay","alpha2":"PY","alpha3":"PRY","latitude":-23,"longitude":-58,"regions":["South America"]},{"country":"Peru","alpha2":"PE","alpha3":"PER","latitude":-10,"longitude":-76,"regions":["South America"]},{"country":"Philippines","alpha2":"PH","alpha3":"PHL","latitude":13,"longitude":122,"regions":["Asia & Pacific"]},{"country":"Poland","alpha2":"PL","alpha3":"POL","latitude":52,"longitude":20,"regions":["Europe"]},{"country":"Portugal","alpha2":"PT","alpha3":"PRT","latitude":39.5,"longitude":-8,"regions":["Europe"]},{"country":"Qatar","alpha2":"QA","alpha3":"QAT","latitude":25.5,"longitude":51.25,"regions":["Middle east","Arab States"]},{"country":"Romania","alpha2":"RO","alpha3":"ROU","latitude":46,"longitude":25,"regions":["Europe"]},{"country":"Russia","alpha2":"RU","alpha3":"RUS","latitude":60,"longitude":100,"regions":["Europe","Asia & Pacific"]},{"country":"Rwanda","alpha2":"RW","alpha3":"RWA","latitude":-2,"longitude":30,"regions":["Africa"]},{"country":"Samoa","alpha2":"WS","alpha3":"WSM","latitude":-13.5833,"longitude":-172.3333,"regions":["Asia & Pacific"]},{"country":"San Marino","alpha2":"SM","alpha3":"SMR","latitude":43.7667,"longitude":12.4167,"regions":["Europe"]},{"country":"Sao Tome and Principe","alpha2":"ST","alpha3":"STP","latitude":1,"longitude":7,"regions":["Africa"]},{"country":"Saudi Arabia","alpha2":"SA","alpha3":"SAU","latitude":25,"longitude":45,"regions":["Arab States","Middle east"]},{"country":"Senegal","alpha2":"SN","alpha3":"SEN","latitude":14,"longitude":-14,"regions":["Africa"]},{"country":"Serbia","alpha2":"RS","alpha3":"SRB","latitude":44,"longitude":21,"regions":["Europe"]},{"country":"Seychelles","alpha2":"SC","alpha3":"SYC","latitude":-4.5833,"longitude":55.6667,"regions":["Africa"]},{"country":"Sierra Leone","alpha2":"SL","alpha3":"SLE","latitude":8.5,"longitude":-11.5,"regions":["Africa"]},{"country":"Singapore","alpha2":"SG","alpha3":"SGP","latitude":1.3667,"longitude":103.8,"regions":["Asia & Pacific"]},{"country":"Slovakia","alpha2":"SK","alpha3":"SVK","latitude":48.6667,"longitude":19.5,"regions":["Europe"]},{"country":"Slovenia","alpha2":"SI","alpha3":"SVN","latitude":46,"longitude":15,"regions":["Europe"]},{"country":"Solomon Islands","alpha2":"SB","alpha3":"SLB","latitude":-8,"longitude":159,"regions":["Asia & Pacific"]},{"country":"Somalia","alpha2":"SO","alpha3":"SOM","latitude":10,"longitude":49,"regions":["Africa","Arab States"]},{"country":"South Africa","alpha2":"ZA","alpha3":"ZAF","latitude":-29,"longitude":24,"regions":["Africa"]},{"country":"South Korea","alpha2":"KR","alpha3":"KOR","latitude":37,"longitude":127.5,"regions":["Asia & Pacific"]},{"country":"South Sudan","alpha2":"SS","alpha3":"SSD","latitude":7.8,"longitude":29.6,"regions":["Africa"]},{"country":"Spain","alpha2":"ES","alpha3":"ESP","latitude":40,"longitude":-4,"regions":["Europe"]},{"country":"Sri Lanka","alpha2":"LK","alpha3":"LKA","latitude":7,"longitude":81,"regions":["Asia & Pacific"]},{"country":"St Kitts and Nevis","speak":"Saint Kitts and Nevis","alpha2":"KN","alpha3":"KNA","latitude":17.3333,"longitude":-62.75,"regions":["North America"]},{"country":"St Lucia","speak":"Saint Lucia","alpha2":"LC","alpha3":"LCA","latitude":13.8833,"longitude":-61.1333,"regions":["North America"]},{"country":"St Vincent and the Grenadines","speak":"Saint Vincent and the Grenadines","alpha2":"VC","alpha3":"VCT","latitude":13.25,"longitude":-61.2,"regions":["North America"]},{"country":"Sudan","alpha2":"SD","alpha3":"SDN","latitude":15,"longitude":30,"regions":["Africa","Arab States"]},{"country":"Suriname","alpha2":"SR","alpha3":"SUR","latitude":4,"longitude":-56,"regions":["South America"]},{"country":"Sweden","alpha2":"SE","alpha3":"SWE","latitude":62,"longitude":15,"regions":["Europe"]},{"country":"Switzerland","alpha2":"CH","alpha3":"CHE","latitude":47,"longitude":8,"regions":["Europe"]},{"country":"Syria","alpha2":"SY","alpha3":"SYR","latitude":35,"longitude":38,"regions":["Arab States","Middle east"]},{"country":"Taiwan","alpha2":"TW","alpha3":"TWN","latitude":23.5,"longitude":121,"regions":["Asia & Pacific"]},{"country":"Tajikistan","alpha2":"TJ","alpha3":"TJK","latitude":39,"longitude":71,"regions":["Asia & Pacific"]},{"country":"Tanzania","alpha2":"TZ","alpha3":"TZA","latitude":-6,"longitude":35,"regions":["Africa"]},{"country":"Thailand","alpha2":"TH","alpha3":"THA","latitude":15,"longitude":100,"regions":["Asia & Pacific"]},{"country":"Timor-Leste","alpha2":"TL","alpha3":"TLS","latitude":-8.55,"longitude":125.5167,"regions":["Asia & Pacific"]},{"country":"Togo","alpha2":"TG","alpha3":"TGO","latitude":8,"longitude":1.1667,"regions":["Africa"]},{"country":"Tonga","alpha2":"TO","alpha3":"TON","latitude":-20,"longitude":-175,"regions":["Asia & Pacific"]},{"country":"Trinidad and Tobago","alpha2":"TT","alpha3":"TTO","latitude":11,"longitude":-61,"regions":["North America"]},{"country":"Tunisia","alpha2":"TN","alpha3":"TUN","latitude":34,"longitude":9,"regions":["Arab States","Africa"]},{"country":"Turkey","alpha2":"TR","alpha3":"TUR","latitude":39,"longitude":35,"regions":["Middle east","Asia & Pacific","Europe"]},{"country":"Turkmenistan","alpha2":"TM","alpha3":"TKM","latitude":40,"longitude":60,"regions":["Asia & Pacific"]},{"country":"Tuvalu","alpha2":"TV","alpha3":"TUV","latitude":-8,"longitude":178,"regions":["Asia & Pacific"]},{"country":"UAE","speak":"U.A.E.","alpha2":"AE","alpha3":"ARE","latitude":24,"longitude":54,"regions":["Arab States","Middle east"]},{"country":"UK","speak":"U.K.","alpha2":"GB","alpha3":"GBR","latitude":54,"longitude":-2,"regions":["Europe"]},{"country":"USA","speak":"U.S.A.","alpha2":"US","alpha3":"USA","latitude":38,"longitude":-97,"regions":["North America"]},{"country":"Uganda","alpha2":"UG","alpha3":"UGA","latitude":1,"longitude":32,"regions":["Africa"]},{"country":"Ukraine","alpha2":"UA","alpha3":"UKR","latitude":49,"longitude":32,"regions":["Europe"]},{"country":"Uruguay","alpha2":"UY","alpha3":"URY","latitude":-33,"longitude":-56,"regions":["South America"]},{"country":"Uzbekistan","alpha2":"UZ","alpha3":"UZB","latitude":41,"longitude":64,"regions":["Asia & Pacific"]},{"country":"Vanuatu","alpha2":"VU","alpha3":"VUT","latitude":-16,"longitude":167,"regions":["Asia & Pacific"]},{"country":"Vatican City","alpha2":"VA","alpha3":"VAT","latitude":41.9,"longitude":12.45,"regions":["Europe"]},{"country":"Venezuela","alpha2":"VE","alpha3":"VEN","latitude":8,"longitude":-66,"regions":["South America"]},{"country":"Vietnam","alpha2":"VN","alpha3":"VNM","latitude":12,"longitude":108,"regions":["Asia & Pacific"]},{"country":"Yemen","alpha2":"YE","alpha3":"YEM","latitude":15,"longitude":48,"regions":["Arab States","Middle east"]},{"country":"Zambia","alpha2":"ZM","alpha3":"ZMB","latitude":-15,"longitude":30,"regions":["Africa"]},{"country":"Zimbabwe","alpha2":"ZW","alpha3":"ZWE","latitude":-20,"longitude":30,"regions":["Africa"]}]'),O={name:"App",components:{NameByLocation:G,NameByFlag:B,MainMenu:_},data(){const a=[{id:"location",label:"Name Every Country By Location"},{id:"flag",label:"Name Every Country By Flag"},{id:"alpha2",label:"Name Every Country Alpha2 By Flag"},{id:"alpha2",label:"Name Every Country Alpha3 By Flag"}];return{originalCountries:I,selectedGame:null,games:a,countries:I}},mounted(){r().each(this.originalCountries,(a=>{const t=r().toLower(a.alpha2);a.audio=`./assets/mp3/${t}.mp3`,a.image=`./assets/flags/svg/${t}.svg`}))}},K=O,w=(0,A.Z)(K,n,o,!1,null,null,null),D=w.exports;i.ZP.config.productionTip=!1,new i.ZP({render:a=>a(D)}).$mount("#app")}},t={};function e(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return a[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}e.m=a,function(){var a=[];e.O=function(t,i,n,o){if(!i){var l=1/0;for(c=0;c<a.length;c++){i=a[c][0],n=a[c][1],o=a[c][2];for(var r=!0,u=0;u<i.length;u++)(!1&o||l>=o)&&Object.keys(e.O).every((function(a){return e.O[a](i[u])}))?i.splice(u--,1):(r=!1,o<l&&(l=o));if(r){a.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[i,n,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var i in t)e.o(t,i)&&!e.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.nmd=function(a){return a.paths=[],a.children||(a.children=[]),a}}(),function(){var a={826:0};e.O.j=function(t){return 0===a[t]};var t=function(t,i){var n,o,l=i[0],r=i[1],u=i[2],s=0;if(l.some((function(t){return 0!==a[t]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(u)var c=u(e)}for(t&&t(i);s<l.length;s++)o=l[s],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(c)},i=self["webpackChunkname_every_country"]=self["webpackChunkname_every_country"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(3300)}));i=e.O(i)})();
//# sourceMappingURL=index.145e09aa.js.map