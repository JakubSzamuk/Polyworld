(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6452:function(e,t,r){Promise.resolve().then(r.bind(r,4787))},4787:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),a=r(2265),l=r(5887),n=r(3730),o=r(7973),i=r(6375),c=e=>{let t=(0,a.useRef)(null),[r,l]=(0,a.useState)(),n=()=>{let t=e.dimension,r=e.array;(0,o.hA)();let s=[],a=[],n=[],c=[],x=()=>{let t=e.array,r=e.dimension,s={x:Math.floor(Math.random()*r),y:0,z:Math.floor(Math.random()*r)};for(s.y=t[s.x][s.z],c.push(s);s.y>-7;){let e={value:0,lowestDrop:{}};if(t[s.x+1][s.z]<s.y){let r=s.y-t[s.x+1][s.z];r>e.value&&(e.value=r,e.lowestDrop={x:s.x+1,y:t[s.x+1][s.z],z:s.z})}else if(t[s.x][s.z+1]<s.y){let r=s.y-t[s.x][s.z+1];r>e.value&&(e.value=r,e.lowestDrop={x:s.x,y:t[s.x][s.z+1],z:s.z+1})}else if(t[s.x+1][s.z+1]<s.y){let r=s.y-t[s.x+1][s.z+1];r>e.value&&(e.value=r,e.lowestDrop={x:s.x+1,y:t[s.x+1][s.z+1],z:s.z+1})}else if(t[s.x-1][s.z]<s.y){let r=s.y-t[s.x-1][s.z];r>e.value&&(e.value=r,e.lowestDrop={x:s.x-1,y:t[s.x-1][s.z],z:s.z})}else if(t[s.x][s.z-1]<s.y){let r=s.y-t[s.x][s.z-1];r>e.value&&(e.value=r,e.lowestDrop={x:s.x,y:t[s.x][s.z-1],z:s.z-1})}else if(t[s.x-1][s.z-1]<s.y){let r=s.y-t[s.x-1][s.z-1];r>e.value&&(e.value=r,e.lowestDrop={x:s.x-1,y:t[s.x-1][s.z-1],z:s.z-1})}else{c.push(s);break}c.push(e.lowestDrop),s=e.lowestDrop}console.log(c)};for(let e=0;e<1;e++)x();for(let e=0;e<t-1;e++)for(let l=0;l<t-1;l++){let o=e,x=l,u=1==Math.floor(20*Math.random()),h=new i.Vector3(o-t/2,r[o][x],x-t/2),m=new i.Vector3(o-t/2+1,r[o+1][x],x-t/2),d=new i.Vector3(o-t/2+1,r[o+1][x+1],x-t/2+1),y=new i.Vector3(o-t/2,r[o][x],x-t/2),p=new i.Vector3(o-t/2,r[o][x+1],x-t/2+1),f=new i.Vector3(o-t/2+1,r[o+1][x+1],x-t/2+1),g=r[o][x]>-3?r[o][x]>0?r[o][x]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4],v=r[o+1][x]>-3?r[o+1][x]>0?r[o+1][x]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4],w=r[o+1][x+1]>-3?r[o+1][x+1]>0?r[o+1][x+1]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4],z=r[o][x]>-3?r[o][x]>0?r[o][x]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4],j=r[o][x+1]>-3?r[o][x+1]>0?r[o][x+1]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4],b=r[o+1][x+1]>-3?r[o+1][x+1]>0?r[o+1][x+1]>5?[.8,.8,.8]:[.5,.5,.5]:[.4,.6,.2]:[.5,.45,.4];for(let e=0;e<c.length;e++)c[e].x==o&&c[e].z==x&&(g=[.3,.25,.2],v=[.3,.25,.2],w=[.3,.25,.2],z=[.3,.25,.2],j=[.3,.25,.2],b=[.3,.25,.2]);s.push(h,d,m,y,p,f),u&&.4==g[0]&&o>0&&x>0&&!n.includes({x:o-1,y:r[o-1][x-1],z:x-1})&&!n.includes({x:o,y:r[o][x-1],z:x-1})&&!n.includes({x:o-1,y:r[o-1][x],z:x})&&n.push({x:o-t/2,y:r[o][x],z:x-t/2}),a.push(...g,...v,...w,...z,...j,...b)}l(n);let u=new Float32Array(a);return console.log(s),{verticesArr:s,colorAr:u}};return(0,a.useEffect)(()=>{e.isLoaded(!1),t.current.geometry.setFromPoints(n().verticesArr),t.current.geometry.attributes.position.count,t.current.geometry.setAttribute("color",new i.BufferAttribute(n().colorAr,3,!0)),t.current.geometry.attributes.color.needsUpdate=!0,t.current.geometry.computeVertexNormals(),e.isLoaded(!0)},[JSON.stringify(e.regen)]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("mesh",{ref:t,children:[(0,s.jsx)("bufferGeometry",{attach:"geometry"}),(0,s.jsx)("meshStandardMaterial",{vertexColors:!0})]}),r?r.map((e,t)=>(0,s.jsxs)("group",{position:[e.x,e.y+2,e.z],children:[(0,s.jsxs)("mesh",{children:[(0,s.jsx)("sphereGeometry",{attach:"geometry"}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"green"})]}),(0,s.jsxs)("mesh",{position:[0,-2,0],children:[(0,s.jsx)("cylinderGeometry",{args:[.2,.2,2.4],attach:"geometry"}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:[.188,.168,.058]})]})]},t)):null]})},x=e=>{let{regen:t,size:r,level:l}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=[new i.Vector3(0-r/2,l,0-r/2),new i.Vector3(r-r/2,l,r-r/2),new i.Vector3(r-r/2,l,0-r/2),new i.Vector3(0-r/2,l,r-r/2),new i.Vector3(r-r/2,l,r-r/2),new i.Vector3(0-r/2,l,0-r/2)];console.log(n.current),n.current.geometry.setFromPoints(e)},[t,l]),(0,s.jsxs)("mesh",{ref:n,children:[(0,s.jsx)("bufferGeometry",{attach:"geometry"}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:[.062,.561,.818]})]})};function u(){let[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)(-2),[u,h]=(0,a.useState)(8),[m,d]=(0,a.useState)(200),[y,p]=(0,a.useState)(.06),[f,g]=(0,a.useState)(),[v,w]=(0,a.useState)(!1),[z,j]=(0,a.useState)(!1),[b,N]=(0,a.useState)(!0),S=()=>{let e=(e,t,r)=>{let s=[];for(let a=0;a<e;a++){s[a]=[];for(let e=0;e<t;e++)s[a][e]=v?r(a*y,e*y)*u*10*(r(a*y,e*y)*u*10)/1e3-6:r(a*y,e*y)*u}return s};(()=>{let t=(0,o.hA)();g(e(m,m,t))})(),j(!z)};return(0,a.useEffect)(()=>{S()},[]),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"w-screen h-screen m-0 p-0 relative bg-gray-400 hideSmall",children:[(0,s.jsx)("div",{className:"h-screen w-screen z-10",children:(0,s.jsxs)(l.Xz,{camera:{position:[5,20,5]},className:"w-screen h-screen",children:[(0,s.jsx)(n.z,{}),(0,s.jsx)("ambientLight",{intensity:1.4}),e?(0,s.jsx)("pointLight",{position:[55,15,55],intensity:800}):null,f?(0,s.jsx)(c,{array:f,regen:z,isLoaded:t,dimension:m}):null,(0,s.jsx)(x,{regen:z,size:m,level:r})]})}),(0,s.jsxs)("div",{className:"absolute top-[20vh] right-0 w-[20vw] h-[60vh] flex flex-col bg-gray-700 borderRadius p-8 opacity-90 z-60 ".concat(b?"":"foldAway"),children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("h1",{className:"displayFont text-2xl text-white w-1/2",children:"Terrain generator!"}),(0,s.jsx)("button",{onClick:()=>N(!b),className:"p-4 bg-white ml-28 text-black displayFont ".concat(b?"translate":"negateFold"),children:(0,s.jsx)("span",{className:"material-symbols-outlined",children:"arrow_forward"})})]}),(0,s.jsxs)("div",{className:"flex mb-4 items-center mt-16 relative w-full",children:[(0,s.jsx)("p",{className:"text-white text-xl displayFont",children:"Normalise?"}),(0,s.jsx)("input",{onChange:()=>w(!v),value:"normalise",type:"checkbox",className:"absolute right-0"})]}),(0,s.jsx)("p",{className:"text-white text-xl displayFont",children:"Amplitude:"}),(0,s.jsx)("input",{type:"range",min:"3",max:"16",value:u,onChange:e=>h(e.target.value)}),(0,s.jsx)("p",{className:"text-white text-xl displayFont mt-4",children:"Size:"}),(0,s.jsx)("input",{type:"range",min:"10",max:"200",value:m,onChange:e=>d(e.target.value)}),(0,s.jsx)("p",{className:"text-white text-xl displayFont mt-4",children:"Frequency:"}),(0,s.jsx)("input",{type:"range",min:"1",max:"14",value:100*y,onChange:e=>p(e.target.value/100)}),(0,s.jsx)("p",{className:"text-white text-xl displayFont mt-4",children:"Water Level:"}),(0,s.jsx)("input",{type:"range",min:"-6",max:"6",value:r,onChange:e=>i(e.target.value)}),(0,s.jsx)("button",{className:"bg-white text-black mt-8 rounded-md p-8 displayFont hover:opacity-80 transition-all",onClick:()=>S(),children:"Generate!"})]})]}),(0,s.jsx)("div",{className:"w-screen h-[50vh] hideLarge flex justify-center items-center absolute top-0",children:(0,s.jsx)("p",{className:"displayFont text-3xl w-[90%]",children:"This Terrain Generator is unavailable on mobile devices"})})]})}}},function(e){e.O(0,[689,454,971,596,744],function(){return e(e.s=6452)}),_N_E=e.O()}]);