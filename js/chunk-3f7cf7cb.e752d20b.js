(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7cf7cb"],{"7db0":function(e,t,o){"use strict";var c=o("23e7"),r=o("b727").find,n=o("44d2"),l="find",i=!0;l in[]&&Array(1)[l]((function(){i=!1})),c({target:"Array",proto:!0,forced:i},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(l)},d2f1:function(e,t,o){"use strict";o.r(t);o("a4d3"),o("e01a"),o("9911");var c=o("7a23"),r={class:"lg:px-36 pt-12 md:pb-10 px-5"},n={class:"block"},l={key:1,autoplay:"",muted:"",loop:""},i={class:"py-7 md:py-20"},d=Object(c["createVNode"])("h3",{class:"font-medium text-lg text-black-lighter mb-3"}," Next Project ",-1),a={class:"text-black-light text-2xl font-light flex items-center"};function s(e,t,o,s,u,p){var b=Object(c["resolveComponent"])("Intro"),m=Object(c["resolveComponent"])("Conclusion"),j=Object(c["resolveComponent"])("SvgIcon"),O=Object(c["resolveComponent"])("router-link"),f=Object(c["resolveComponent"])("Footer"),g=Object(c["resolveComponent"])("ScrollTop");return Object(c["openBlock"])(),Object(c["createBlock"])("div",r,[Object(c["createVNode"])(b,{title:p.getProductById.intro.title,slogan:p.getProductById.intro.slogan,description:p.getProductById.intro.description,creative:p.getProductById.intro.creative,creationTime:p.getProductById.intro.creationTime,time:p.getProductById.intro.time,style:p.getProductById.intro.style,class:"md:mx-3"},null,8,["title","slogan","description","creative","creationTime","time","style"]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(p.getProductById.images,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t,class:"md:mx-3"},[Object(c["createVNode"])("picture",n,[Object(c["createVNode"])("img",{src:e.src,alt:e.alt,class:"w-full"},null,8,["src","alt"])]),e.conclusion?(Object(c["openBlock"])(),Object(c["createBlock"])(m,{key:0,title:e.conclusion.title,description:e.conclusion.description},null,8,["title","description"])):Object(c["createCommentVNode"])("",!0),e.video?(Object(c["openBlock"])(),Object(c["createBlock"])("video",l,[Object(c["createVNode"])("source",{src:e.video,type:"video/mp4"},null,8,["src"])])):Object(c["createCommentVNode"])("",!0)])})),128)),Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",i,[d,Object(c["createVNode"])(O,{to:p.getProductById.link.herf,onClick:p.scrollToTop},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("span",a,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(p.getProductById.link.title)+" ",1),Object(c["createVNode"])(j,{iconName:"arrow-right",class:"w-6 h-5 ml-1 text-black-default"})])]})),_:1},8,["to","onClick"])])]})),_:1}),Object(c["createVNode"])(g)])}o("7db0");var u=o("a380"),p={class:"w-full lg:w-2/3 py-16 md:px-10"},b={class:"pl-7 md:pl-10 pb-4 border-l border-black-light"},m={class:"font-medium text-lg"},j={class:"text-lg font-light mt-7"};function O(e,t,o,r,n,l){return Object(c["openBlock"])(),Object(c["createBlock"])("div",p,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])("h2",m,Object(c["toDisplayString"])(o.title),1),Object(c["createVNode"])("p",j,Object(c["toDisplayString"])(o.description),1)])])}var f={name:"Conclusion",components:{},props:{title:{type:String,default:""},description:{type:String,default:""}}};f.render=O;var g=f,y=o("fd2d"),k=o("0032"),v=o("7fd9"),B={name:"Product",components:{Intro:u["a"],Conclusion:g,Footer:y["a"],SvgIcon:k["a"],ScrollTop:v["a"]},data:function(){return{}},props:{},computed:{getProductById:function(){var e=this;return this.$store.state.productLists.find((function(t){return t.article==e.$route.params.id}))}},methods:{scrollToTop:function(){window.scrollTo(0,0)}}};B.render=s;t["default"]=B}}]);
//# sourceMappingURL=chunk-3f7cf7cb.e752d20b.js.map