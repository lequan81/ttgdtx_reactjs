import{r as o,j as e,u as c,N as m}from"./index-DvkixYhr.js";import{d as n}from"./data-C-Mmsf6e.js";function x({title:t,titleId:r,...a},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const f=o.forwardRef(x),h=f;function g({title:t,titleId:r,...a},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const b=o.forwardRef(g),p=b;function w({title:t,titleId:r,...a},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const v=o.forwardRef(w),y=v;function k(){return e.jsx("div",{className:"flex items-center lg:w-full md:max-w-fit w-full justify-start h-full px-2 md:px-0",children:e.jsxs("a",{href:"/",className:"text-xl font-semibold dark:text-white text-gray-900 cursor-default inline-flex space-x-2 flex-row items-center w-full",children:[e.jsx("img",{"data-nosnippet":!0,src:"/icon.ico",height:32,width:32,alt:"logo",className:"block md:inline bg-center bg-no-repeat object-cover h-8"}),e.jsx("span",{className:"hidden lg:block sm:text-xs md:text-sm xl:text-lg",children:n.landing[0].heading})]})})}function j({title:t,titleId:r,...a},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,o.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"}))}const N=o.forwardRef(j),$=N;function M({title:t,titleId:r,...a},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":r},a),t?o.createElement("title",{id:r},t):null,o.createElement("path",{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"}))}const E=o.forwardRef(M),R=E;function D(){const[t,r]=o.useState(localStorage.theme),a=t==="dark"?"light":"dark";return o.useEffect(()=>{const l=window.document.documentElement;l.classList.remove(a),l.classList.add(t),localStorage.setItem("theme",t)},[t,a]),[a,r]}function L(){const[t,r]=D(),[a,l]=o.useState(t==="light");return e.jsx("div",{"data-nosnippet":!0,className:"flex items-center rounded-lg h-fit w-fit justify-end sm:justify-normal mr-4 sm:mr-0 bg-transparent sm:hover:bg-gray-200 sm:dark:hover:bg-gray-700/50 group order-2 xl:order-3",children:e.jsx("button",{type:"button",className:"block p-1.5",onClick:()=>{r(a==!0?"light":"dark"),l(!a)},"aria-label":"Toggle dark mode",children:a?e.jsx(R,{className:"size-5 text-gray-700 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-180 duration-300",strokeWidth:2,"aria-label":"light mode"}):e.jsx($,{className:"size-5 text-gray-700 group-hover:text-blue-600 font-medium dark:text-gray-400 dark:group-hover:text-gray-200 group-hover:rotate-[360deg] duration-500",strokeWidth:2,"aria-label":"dark mode"})})})}function i({title:t,path:r,isSubmenu:a,isCollapsed:l=!1}){const d=c();return e.jsx(m,{to:r,reloadDocument:l,className:({isActive:s})=>`${l?`font-medium text-sm ${a?`w-full px-2 py-1.5 my-1 ${s?"bg-blue-600 rounded text-white":"text-gray-900 dark:text-white"}`:`max-w-fit ${r==="/signup"?"border-none px-2 py-1.5 bg-blue-600 text-white":`text-gray-900 dark:text-white ${s||d.pathname.split("/")[1]==="recently"&&r==="/"?"border-b-[3px] border-blue-500":"border-none"}`}`}`:`${a?`hidden sm:flex md:text-xs xl:text-sm items-center sm:px-1.5 md:px-2.5 h-8 xl:h-10 my-0.5 rounded focus:ring-2 focus:ring-blue-500 ${s?"bg-blue-600 hover:bg-blue-500 text-white":"dark:hover:bg-gray-700 hover:bg-gray-300/70 text-gray-900 dark:text-gray-200 hover:text-blue-700"}`:`md:text-xs xl:text-base transition-colors duration-300 transform font-medium sm:mx-1.5 ${r==="/signup"?`px-2 py-1 ${s?"bg-blue-600 text-white border-blue-500":"group relative transform transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-white"}`:`sm:relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-300 after:origin-left ${s||d.pathname.split("/")[1]==="recently"&&r==="/"?"text-blue-600 dark:text-gray-200 after:scale-x-100":"dark:hover:text-gray-200 hover:text-blue-600 after:scale-x-0 after:hover:scale-x-100"}`}`}`}`,children:r==="/signup"&&l===!1?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full"}),e.jsx("span",{className:"absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full"}),e.jsx("span",{className:"absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full"}),e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-600 group-hover:h-full"}),e.jsx("span",{className:"absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-600 opacity-0 group-hover:opacity-100"}),e.jsx("span",{className:"relative group-hover:delay-300 duration-300 group-hover:text-white",children:t})]}):e.jsx("span",{children:t})})}function S({title:t,path:r,isCollapsed:a}){let l=c();return e.jsx("button",{type:"button",className:`flex items-center font-medium ${a?`w-fit text-gray-800 dark:text-gray-200 text-sm ${l.pathname.includes(r)?"text-blue-600 dark:text-gray-200 border-b-[3px] border-blue-500":""}`:`md:mx-1.5 sm:mx-1 md:text-xs xl:text-base sm:relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-300 after:origin-left ${l.pathname.includes(r)?"text-blue-600 dark:text-gray-200 after:scale-x-100":"after:scale-x-0 after:group-hover:scale-x-100 dark:group-hover:text-gray-200 group-hover:text-blue-600"}`}`,children:e.jsxs("div",{className:"inline-flex w-fit items-center",children:[e.jsx("span",{children:t}),e.jsx(p,{className:"ml-1.5 size-2.5",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",fill:"none"})]})})}function u({data:t,isCollapsed:r=!1}){return e.jsxs("div",{className:"hs-dropdown text-base group [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] [--trigger:hover] block",children:[e.jsx(S,{title:t.title,path:t.path,isCollapsed:r}),e.jsx("div",{className:`text-base hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 z-10 bg-white sm:shadow-md rounded-md px-1.5 py-1 dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700 before:absolute top-full border border-gray-200 hidden before:-top-5 before:h-5 ${r?"w-48 before:start-0 flex flex-col gap-y-1 before:w-3/4":"min-w-fit before:left-0 before:w-full"}`,children:t.children.map(a=>e.jsx(i,{title:a.title,path:`${t.path}${a.path}`,isSubmenu:!0,isCollapsed:r},a.title))})]})}function Z(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:hidden flex w-fit justify-end items-center order-3 mr-4",children:e.jsxs("button",{type:"button",className:"hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white active:text-blue-500 dark:focus:outline-none","data-hs-collapse":"#navbar-collapse-with-animation","aria-controls":"navbar-collapse-with-animation","aria-label":"Toggle navigation",children:[e.jsx(h,{className:"hs-collapse-open:hidden flex-shrink-0 size-4",strokeWidth:2}),e.jsx(y,{className:"hs-collapse-open:block hidden flex-shrink-0 size-4",strokeWidth:2})]})}),e.jsx("div",{className:"sm:hidden top-12 w-full fixed z-10",children:e.jsx("div",{id:"navbar-collapse-with-animation",className:"hs-collapse dark:hs-collapse-open:bg-gray-900 hs-collapse-open:bg-gray-50 hs-collapse-close:bg-transparent p-4 hidden overflow-hidden transition-all duration-300 basis-full grow sm:block",children:e.jsx("div",{className:"flex flex-col gap-y-4 gap-x-0 p-1.5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7",children:n.menu.map(t=>t.isSubmenu?e.jsx(u,{data:t,isCollapsed:!0},t.name):e.jsx(i,{title:t.title,path:t.path,isSubmenu:!1,isCollapsed:!0},t.name))})})}),e.jsx("div",{className:"container sm:flex items-center justify-end h-full w-fit sm:w-full text-gray-700 dark:text-gray-300 order-3 sm:order-2 hs-collapse hidden",children:n.menu.map(t=>t.isSubmenu?e.jsx(u,{data:t},t.name):e.jsx(i,{title:t.title,path:t.path,isSubmenu:!1},t.name))})]})}function I(){return e.jsx("header",{className:"flex flex-row h-10 xl:h-12 fixed z-20 top-0 w-full bg-white text-sm dark:bg-gray-800 shadow shadow-gray-300 dark:shadow-none",children:e.jsx("nav",{className:"relative w-full mx-auto sm:mx-0 sm:px-3 sm:flex sm:flex-row sm:items-center sm:justify-between",children:e.jsxs("div",{className:"flex flex-row w-full h-full items-center",children:[e.jsx(k,{}),e.jsx(Z,{}),e.jsx(L,{})]})})})}export{I as default};
