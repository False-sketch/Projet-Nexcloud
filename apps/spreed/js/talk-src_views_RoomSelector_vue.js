/*! For license information please see talk-src_views_RoomSelector_vue.js.LICENSE.txt */
"use strict";(self.webpackChunktalk=self.webpackChunktalk||[]).push([["src_views_RoomSelector_vue"],{81415:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(28017),i=e.n(o),a=e(58061);const s={name:"ConversationIcon",components:{Avatar:i()},props:{hideFavorite:{type:Boolean,default:!0},hideCall:{type:Boolean,default:!0},disableMenu:{type:Boolean,default:!1},item:{type:Object,default:function(){return{objectType:"",type:0,displayName:"",isFavorite:!1}}},offline:{type:Boolean,default:!1}},computed:{showCall:function(){return!this.hideCall&&this.item.hasCall},showFavorite:function(){return!this.hideFavorite&&this.item.isFavorite},iconClass:function(){return"file"===this.item.objectType?"icon-file":"share:password"===this.item.objectType?"icon-password":"emails"===this.item.objectType?"icon-mail":this.item.type===a.Sl.TYPE.CHANGELOG?"icon-changelog":this.item.type===a.Sl.TYPE.GROUP?"icon-contacts":this.item.type===a.Sl.TYPE.PUBLIC?"icon-public":""},preloadedUserStatus:function(){if(Object.prototype.hasOwnProperty.call(this.item,"statusMessage"))return{status:this.item.status||null,message:this.item.statusMessage||null,icon:this.item.statusIcon||null}},menuContainer:function(){if(this.$store)return this.$store.getters.getMainContainerSelector()}}}},96639:(n,e,o)=>{o.d(e,{Z:()=>C});var i=o(47450),a=o.n(i),s=o(4820),r=o(79753),l=o(58061),A=o(41673),c=o(1412),d=o.n(c);const C={name:"RoomSelector",components:{ConversationIcon:A.Z,Modal:a(),Button:d()},props:{container:{type:String,default:void 0},dialogTitle:{type:String,default:t("spreed","Link to a conversation")},dialogSubtitle:{type:String,default:""},showPostableOnly:{type:Boolean,default:!1}},data:function(){return{rooms:[],selectedRoom:null,currentRoom:null,searchText:"",loading:!0}},computed:{availableRooms:function(){var n=this,t=this.rooms.filter((function(t){return!(t.type===l.Sl.TYPE.CHANGELOG||n.currentRoom&&n.currentRoom===t.token||n.showPostableOnly&&t.readOnly!==l.Sl.STATE.READ_WRITE||"file"===t.objectType||"share:password"===t.objectType)}));return this.searchText?t.filter((function(t){return t.displayName.toLowerCase().includes(n.searchText.toLowerCase())})):t}},beforeMount:function(){var n,t;this.fetchRooms();var e=null===(n=OCA.Talk)||void 0===n||null===(t=n.instance)||void 0===t?void 0:t.$store;e&&(this.currentRoom=e.getters.getToken())},methods:{fetchRooms:function(){var n=this;s.default.get((0,r.generateOcsUrl)("/apps/spreed/api/v4/room")).then((function(t){n.rooms=t.data.ocs.data.sort(n.sortConversations),n.loading=!1}))},sortConversations:function(n,t){return n.isFavorite!==t.isFavorite?n.isFavorite?-1:1:t.lastActivity-n.lastActivity},close:function(){this.$root.$emit("close"),this.$emit("close")},select:function(){this.$root.$emit("select",this.selectedRoom),this.$emit("select",this.selectedRoom)}}}},58061:(n,t,e)=>{e.d(t,{Sl:()=>o});var o={START_CALL:{EVERYONE:0,USERS:1,MODERATORS:2},STATE:{READ_WRITE:0,READ_ONLY:1},LISTABLE:{NONE:0,USERS:1,ALL:2},TYPE:{ONE_TO_ONE:1,GROUP:2,PUBLIC:3,CHANGELOG:4}}},97841:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(87537),i=e.n(o),a=e(23645),s=e.n(a)()(i());s.push([n.id,".conversation-icon[data-v-07744d0e]{width:44px;height:44px;position:relative}.conversation-icon .avatar.icon[data-v-07744d0e]{width:44px;height:44px;line-height:44px;font-size:22px;background-color:var(--color-background-darker)}.conversation-icon .avatar.icon.icon-changelog[data-v-07744d0e]{background-size:44px}.conversation-icon .avatar.icon.icon-public[data-v-07744d0e],.conversation-icon .avatar.icon.icon-contacts[data-v-07744d0e],.conversation-icon .avatar.icon.icon-password[data-v-07744d0e],.conversation-icon .avatar.icon.icon-file[data-v-07744d0e],.conversation-icon .avatar.icon.icon-mail[data-v-07744d0e]{background-size:22px}.conversation-icon .overlap-icon[data-v-07744d0e]{position:absolute;top:0;left:calc(44px - 12px);line-height:100%}.conversation-icon .overlap-icon .icon-favorite[data-v-07744d0e]{display:inline-block;vertical-align:middle;background-image:var(--icon-star-dark-FC0)}.conversation-icon .overlap-icon .icon-active-call[data-v-07744d0e]{display:inline-block;vertical-align:middle;background-image:var(--icon-video-E9322D)}.offline[data-v-07744d0e]{opacity:.4}","",{version:3,sources:["webpack://./src/components/ConversationIcon.vue"],names:[],mappings:"AAmJA,oCACC,UAHW,CAIX,WAJW,CAKX,iBAAA,CAEA,iDACC,UARU,CASV,WATU,CAUV,gBAVU,CAWV,cAAA,CACA,+CAAA,CAEA,gEACC,oBAfS,CAkBV,iTAKC,oBAAA,CAIF,kDACC,iBAAA,CACA,KAAA,CACA,sBAAA,CACA,gBAAA,CAEA,iEACC,oBAAA,CACA,qBAAA,CACA,0CAAA,CAGD,oEACC,oBAAA,CACA,qBAAA,CACA,yCAAA,CAKH,0BACC,UAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$icon-size: 44px;\n\n.conversation-icon {\n\twidth: $icon-size;\n\theight: $icon-size;\n\tposition: relative;\n\n\t.avatar.icon {\n\t\twidth: $icon-size;\n\t\theight: $icon-size;\n\t\tline-height: $icon-size;\n\t\tfont-size: calc($icon-size / 2);\n\t\tbackground-color: var(--color-background-darker);\n\n\t\t&.icon-changelog {\n\t\t\tbackground-size: $icon-size;\n\t\t}\n\n\t\t&.icon-public,\n\t\t&.icon-contacts,\n\t\t&.icon-password,\n\t\t&.icon-file,\n\t\t&.icon-mail {\n\t\t\tbackground-size: calc($icon-size / 2);\n\t\t}\n\t}\n\n\t.overlap-icon {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: calc(#{$icon-size} - 12px);\n\t\tline-height: 100%;\n\n\t\t.icon-favorite {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tbackground-image: var(--icon-star-dark-FC0);\n\t\t}\n\n\t\t.icon-active-call {\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tbackground-image: var(--icon-video-E9322D);\n\t\t}\n\t}\n}\n\n.offline {\n\topacity: .4;\n}\n\n"],sourceRoot:""}]);const r=s},34085:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(87537),i=e.n(o),a=e(23645),s=e.n(a)()(i());s.push([n.id,"[data-v-67dd50b2] .modal-container{height:700px}.talk-modal[data-v-67dd50b2]{height:80vh}#modal-inner[data-v-67dd50b2]{width:100%;padding:16px;margin:0 auto;position:relative;display:flex;align-items:center;justify-content:center;height:100%;box-sizing:border-box}#modal-inner h2[data-v-67dd50b2]{margin-bottom:4px}#modal-content[data-v-67dd50b2]{position:absolute;width:calc(100% - 40px);height:calc(100% - 40px);display:flex;flex-direction:column}#room-list[data-v-67dd50b2]{overflow-y:auto;flex:0 1 auto;height:100%}li[data-v-67dd50b2]{padding:6px;border:1px solid transparent;display:flex}li[data-v-67dd50b2]:hover,li[data-v-67dd50b2]:focus{background-color:var(--color-background-dark);border-radius:var(--border-radius-pill)}li.selected[data-v-67dd50b2]{background-color:var(--color-primary-light);border-radius:var(--border-radius-pill)}li>span[data-v-67dd50b2]{padding:5px 5px 5px 10px;vertical-align:middle;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#modal-buttons[data-v-67dd50b2]{overflow:hidden;flex-shrink:0;margin-left:auto}.subtitle[data-v-67dd50b2]{color:var(--color-text-maxcontrast);margin-bottom:8px}.search-form[data-v-67dd50b2]{position:relative;display:flex;flex-direction:column;margin-bottom:10px}.search-form__input[data-v-67dd50b2]{width:100%;font-size:16px;padding-left:28px;line-height:34px;box-shadow:0 10px 5px var(--color-main-background);z-index:1}.search-form .icon-search[data-v-67dd50b2]{position:absolute;top:12px;left:8px;z-index:2}","",{version:3,sources:["webpack://./src/views/RoomSelector.vue"],names:[],mappings:"AA0KA,mCACC,YAAA,CAGD,6BACC,WAAA,CAGD,8BACC,UAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,WAAA,CACA,qBAAA,CACA,iCACC,iBAAA,CAIF,gCACC,iBAAA,CACA,uBAAA,CACA,wBAAA,CACA,YAAA,CACA,qBAAA,CAGD,4BACC,eAAA,CACA,aAAA,CACA,WAAA,CAGD,oBACC,WAAA,CACA,4BAAA,CACA,YAAA,CAEA,oDAEC,6CAAA,CACA,uCAAA,CAGD,6BACC,2CAAA,CACA,uCAAA,CAGD,yBACC,wBAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAIF,gCACC,eAAA,CACA,aAAA,CACA,gBAAA,CAGD,2BACC,mCAAA,CACA,iBAAA,CAGD,8BACC,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,qCACC,UAAA,CACA,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,kDAAA,CACA,SAAA,CAED,2CACC,iBAAA,CACA,QAAA,CACA,QAAA,CACA,SAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n::v-deep .modal-container {\n\theight: 700px;\n}\n\n.talk-modal {\n\theight: 80vh;\n}\n\n#modal-inner {\n\twidth: 100%;\n\tpadding: 16px;\n\tmargin: 0 auto;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\theight: 100%;\n\tbox-sizing: border-box;\n\th2 {\n\t\tmargin-bottom: 4px;\n\t}\n}\n\n#modal-content {\n\tposition: absolute;\n\twidth: calc(100% - 40px);\n\theight: calc(100% - 40px);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#room-list {\n\toverflow-y: auto;\n\tflex: 0 1 auto;\n\theight: 100%;\n}\n\nli {\n\tpadding: 6px;\n\tborder: 1px solid transparent;\n\tdisplay: flex;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-dark);\n\t\tborder-radius: var(--border-radius-pill);\n\t}\n\n\t&.selected {\n\t\tbackground-color: var(--color-primary-light);\n\t\tborder-radius: var(--border-radius-pill);\n\t}\n\n\t& > span {\n\t\tpadding: 5px 5px 5px 10px;\n\t\tvertical-align: middle;\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n}\n\n#modal-buttons {\n\toverflow: hidden;\n\tflex-shrink: 0;\n\tmargin-left: auto;\n}\n\n.subtitle {\n\tcolor: var(--color-text-maxcontrast);\n\tmargin-bottom: 8px;\n}\n\n.search-form {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-bottom: 10px;\n\t&__input {\n\t\twidth: 100%;\n\t\tfont-size: 16px;\n\t\tpadding-left: 28px;\n\t\tline-height: 34px;\n\t\tbox-shadow: 0 10px 5px var(--color-main-background);\n\t\tz-index: 1;\n\t}\n\t.icon-search {\n\t\tposition: absolute;\n\t\ttop: 12px;\n\t\tleft: 8px;\n\t\tz-index: 2;\n\t}\n}\n"],sourceRoot:""}]);const r=s},87565:(n,t,e)=>{var o=e(93379),i=e.n(o),a=e(7795),s=e.n(a),r=e(90569),l=e.n(r),A=e(3565),c=e.n(A),d=e(19216),C=e.n(d),p=e(44589),v=e.n(p),u=e(97841),m={};m.styleTagTransform=v(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=C();i()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals},18121:(n,t,e)=>{var o=e(93379),i=e.n(o),a=e(7795),s=e.n(a),r=e(90569),l=e.n(r),A=e(3565),c=e.n(A),d=e(19216),C=e.n(d),p=e(44589),v=e.n(p),u=e(34085),m={};m.styleTagTransform=v(),m.setAttributes=c(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=C();i()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals},41673:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(13310),i=e(56429);e(32520);const a=(0,e(51900).Z)(i.Z,o.s,o.x,!1,null,"07744d0e",null).exports},35504:(n,t,e)=>{e.r(t),e.d(t,{default:()=>a});var o=e(61723),i=e(71082);e(6931);const a=(0,e(51900).Z)(i.Z,o.s,o.x,!1,null,"67dd50b2",null).exports},56429:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e(81415).Z},71082:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e(96639).Z},32520:(n,t,e)=>{e(87565)},6931:(n,t,e)=>{e(18121)},13310:(n,t,e)=>{e.d(t,{s:()=>o,x:()=>i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"conversation-icon",class:{offline:n.offline}},[n.iconClass?e("div",{staticClass:"avatar icon",class:n.iconClass}):e("Avatar",{staticClass:"conversation-icon__avatar",attrs:{size:44,user:n.item.name,"disable-menu":n.disableMenu,"display-name":n.item.displayName,"preloaded-user-status":n.preloadedUserStatus,"show-user-status-compact":n.disableMenu,"menu-container":n.menuContainer,"menu-position":"left"}}),n._v(" "),n.showCall?e("div",{staticClass:"overlap-icon"},[e("span",{staticClass:"icon icon-active-call"}),n._v(" "),e("span",{staticClass:"hidden-visually"},[n._v(n._s(n.t("spreed","Call in progress")))])]):n.showFavorite?e("div",{staticClass:"overlap-icon"},[e("span",{staticClass:"icon icon-favorite"}),n._v(" "),e("span",{staticClass:"hidden-visually"},[n._v(n._s(n.t("spreed","Favorite")))])]):n._e()],1)},i=[]},61723:(n,t,e)=>{e.d(t,{s:()=>o,x:()=>i});var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Modal",{attrs:{size:"normal",container:n.container},on:{close:n.close}},[e("div",{staticClass:"talk-modal",class:{"icon-loading":n.loading},attrs:{id:"modal-inner"}},[e("div",{attrs:{id:"modal-content"}},[e("h2",[n._v("\n\t\t\t\t"+n._s(n.dialogTitle)+"\n\t\t\t")]),n._v(" "),n.dialogSubtitle?e("p",{staticClass:"subtitle"},[n._v("\n\t\t\t\t"+n._s(n.dialogSubtitle)+"\n\t\t\t")]):n._e(),n._v(" "),e("div",{staticClass:"search-form"},[e("div",{staticClass:"icon-search"}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.searchText,expression:"searchText"}],staticClass:"search-form__input",attrs:{type:"text"},domProps:{value:n.searchText},on:{input:function(t){t.target.composing||(n.searchText=t.target.value)}}})]),n._v(" "),e("div",{attrs:{id:"room-list"}},[!n.loading&&n.availableRooms.length>0?e("ul",n._l(n.availableRooms,(function(t){return e("li",{key:t.token,class:{selected:n.selectedRoom===t.token},on:{click:function(e){n.selectedRoom=t.token}}},[e("ConversationIcon",{attrs:{item:t,"hide-call":!0,"hide-favorite":!1,"disable-menu":!0}}),n._v(" "),e("span",[n._v(n._s(t.displayName))])],1)})),0):n.loading?n._e():e("div",[n._v("\n\t\t\t\t\t"+n._s(n.t("spreed","No conversations found"))+"\n\t\t\t\t")])]),n._v(" "),e("div",{attrs:{id:"modal-buttons"}},[!n.loading&&n.availableRooms.length>0?e("Button",{attrs:{type:"primary",disabled:!n.selectedRoom},on:{click:n.select}},[n._v("\n\t\t\t\t\t"+n._s(n.t("spreed","Select conversation"))+"\n\t\t\t\t")]):n._e()],1)])])])},i=[]}}]);
//# sourceMappingURL=talk-src_views_RoomSelector_vue.js.map?v=4f4a025b950257c76243