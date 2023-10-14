import{j as e,c as i,t as u}from"./index-df1f0e41.js";import{r as x}from"./index-76fb7be0.js";import{B as f}from"./index-3fa0e8ea.js";import{T as p}from"./index-71e6dae1.js";import{I as h}from"./index-b8ad28b5.js";import{C as g}from"./CloseIcon-4a33087c.js";import"./_commonjsHelpers-de833af9.js";function r({open:n=!0,onClose:t,className:o,children:s,...l}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:i("fixed left-0 top-0 h-full w-full backdrop-blur-sm transition-opacity",n?"pointer-events-all opacity-100":"pointer-events-none opacity-0"),onClick:t}),e.jsxs("dialog",{role:"dialog",className:i("fixed left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-100 bg-neutral-950 text-neutral-100 transition-opacity",n?"pointer-events-all opacity-100":"pointer-events-none opacity-0",o),tabIndex:-1,...l,open:!0,children:[e.jsx(h,{className:"absolute right-4 top-4",tabIndex:-1,onClick:t,children:e.jsx(g,{className:"text-2xl"})}),s]})]})}try{r.displayName="Dialog",r.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:{value:"true"},description:"If true, the dialog will be open.",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"The event handler for when the dialog is closed.",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const N={title:"Dialog",component:r,tags:["autodocs"],parameters:{docs:{theme:u.dark}},args:{children:e.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[e.jsx("h1",{className:"text-2xl",children:"Edit profile"}),e.jsxs("p",{children:["Make changes to your profile here.",e.jsx("br",{}),"Click save when you're done."]}),e.jsx(p,{label:"Name",name:"name"}),e.jsx(p,{label:"Email",name:"email"})]})}},a={render:n=>{const[t,o]=x.useState(!1),s=()=>o(!0),l=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"contained",onClick:s,children:"Open Dialog"}),e.jsx(r,{...n,open:t,onClose:l})]})}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <>
        <Button variant="contained" onClick={handleOpen}>
          Open Dialog
        </Button>
        <Dialog {...props} open={open} onClose={handleClose} />
      </>;
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Playground"];export{a as Playground,k as __namedExportsOrder,N as default};
//# sourceMappingURL=Dialog.stories-a1fa29cd.js.map
