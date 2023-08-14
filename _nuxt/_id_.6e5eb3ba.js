import{d as u,u as y,_ as x,r as A,o as p,c as _,b as o,t as i,e as c,w as l,f as m,p as B,a as E,g as k,h as H,i as P,j as d}from"./entry.abe68778.js";import{u as w}from"./fetch.5b56042f.js";const C=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),g=(e,t)=>(s,n)=>(y(()=>e({...C(s),...n.attrs},n)),()=>{var r,a;return t?(a=(r=n.slots).default)==null?void 0:a.call(r):null}),I={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},N=u({name:"Title",inheritAttrs:!1,setup:g((e,{slots:t})=>{var s,n,r;return{title:((r=(n=(s=t.default)==null?void 0:s.call(t))==null?void 0:n[0])==null?void 0:r.children)||null}})}),j=u({name:"Meta",inheritAttrs:!1,props:{...I,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),q=u({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var s,n;return(n=(s=t.slots).default)==null?void 0:n.call(s)}});const f=e=>(B("data-v-bf4c993f"),e=e(),E(),e),D={class:"card"},M={class:"grid grid-cols-2 gap-10"},T={class:"p-7"},O=["src"],V={class:"p-7"},$={class:"text-4xl my-7"},F={class:"text-xl my-7"},L=f(()=>o("h3",{class:"font-bold border-b-2 mb-4 pb-2"},"Product description:",-1)),R={class:"mb-7"},U=f(()=>o("button",{class:"btn flex"},[o("i",{class:"material-icons mr-2"},"add_shopping_cart"),o("span",null,"Add to cart")],-1)),z={__name:"productDetails",props:["product"],setup(e){return(t,s)=>{const n=A("H2");return p(),_("div",D,[o("div",M,[o("div",T,[o("img",{src:`${e.product.image}`,class:"mx-auto my-7"},null,8,O)]),o("div",V,[o("h2",$,i(e.product.title),1),o("h2",null,"RATINGS: "+i(e.product.rating.rate),1),c(n,null,{default:l(()=>[m("AVAILABLE units:"+i(e.product.rating.count),1)]),_:1}),o("p",F,"Price - $"+i(e.product.price),1),L,o("p",R,i(e.product.description),1),U])])])}}},G=x(z,[["__scopeId","data-v-bf4c993f"]]),W={__name:"[id]",async setup(e){let t,s;const{id:n}=k().params,r="https://fakestoreapi.com/products/"+n,{data:a}=([t,s]=H(()=>w(r,{key:n},"$H3OxYP9tuC")),t=await t,s(),t);if(!a.value)throw P({statusCode:404,statusMessage:"Product not found"});return(Y,J)=>{const h=N,S=j,v=q,b=G;return p(),_("div",null,[c(v,null,{default:l(()=>[c(h,null,{default:l(()=>[m("Nuxt Dojo | "+i(d(a).title),1)]),_:1}),c(S,{name:"description",content:d(a).description},null,8,["content"])]),_:1}),c(b,{product:d(a)},null,8,["product"])])}}};export{W as default};
