import{j as r,a as D,t as O}from"./index-6f6f6e9d.js";import{r as m}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=n=>r.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",...n,children:r.jsx("polyline",{points:"5 8.5 12 15.5 19 8.5"})});try{h.displayName="ArrowDownIcon",h.__docgenInfo={description:"",displayName:"ArrowDownIcon",props:{}}}catch{}const v="ArrowUp",_="ArrowDown";function x({label:n,helperText:y,fullWidth:E,options:u=[],id:c,name:o,className:I,value:g,onChange:p,...S}){const d=m.useRef(null);m.useEffect(()=>{const e=t=>{var w,b;if(!d.current||t.key!==v&&t.key!==_)return;const l=d.current.querySelectorAll("button");let a=null;for(let s=0;s<l.length;s++)if(l[s]===document.activeElement){a=s;break}a!==null&&(t.key===_&&((w=l[a+1])==null||w.focus()),t.key===v&&((b=l[a-1])==null||b.focus()))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]);const f=m.useMemo(()=>u.find(e=>e.value===g),[u,g]),T=e=>{const t=e.currentTarget.querySelector("input");t==null||t.focus()},q=(e,t)=>{e.preventDefault(),e.stopPropagation(),p==null||p(t.value),e.currentTarget.blur()};return r.jsxs("div",{className:D("group flex w-64 flex-col",E?"w-full":"w-64",I),children:[n&&r.jsx("label",{className:"px-1 py-1 text-base font-medium text-neutral-100",htmlFor:c||o,children:n}),r.jsxs("div",{className:"relative flex flex-row items-center gap-3 rounded border-2 border-neutral-800 bg-inherit px-4 py-3 transition-colors group-focus-within:border-neutral-100",onClick:T,children:[r.jsx("input",{type:"text",className:"w-0 grow bg-transparent caret-transparent focus:outline-none",id:c||o,name:o,value:f?f.label||String(f.value):"",...S}),r.jsx(h,{className:"rotate-0 transition-transform group-focus-within:rotate-180"}),r.jsx("div",{className:"pointer-events-none absolute left-0 top-full z-10 flex w-full translate-y-0 flex-col rounded border-2 border-neutral-100 bg-neutral-950 opacity-0 transition-all group-focus-within:pointer-events-auto group-focus-within:translate-y-2 group-focus-within:opacity-100",ref:d,children:u.map(e=>r.jsx("button",{className:"p-2 text-left transition-colors hover:bg-neutral-100/5 focus:bg-neutral-100/5 focus:outline-none",onClick:t=>q(t,e),children:e.label||String(e.value)},e.value))})]}),y&&r.jsx("label",{className:"px-4 py-1 text-base font-medium text-neutral-400",htmlFor:c||o,children:y})]})}try{x.displayName="SelectInput",x.__docgenInfo={description:"",displayName:"SelectInput",props:{label:{defaultValue:null,description:"The label for the input.",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"The helper text for the input.",name:"helperText",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"If true, the input will fill the width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"[]"},description:"The icon for the input.",name:"options",required:!1,type:{name:"SelectOption[]"}},onChange:{defaultValue:null,description:"The callback for when the input changes.",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}}}}}catch{}const R={title:"SelectInput",component:x,tags:["autodocs"],parameters:{docs:{theme:O.dark}},args:{id:"id",label:"Label",placeholder:"Placeholder",helperText:"Helper text",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}]}},i={};var k,N,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const W=["Playground"];export{i as Playground,W as __namedExportsOrder,R as default};
//# sourceMappingURL=SelectInput.stories-dfbd1391.js.map
