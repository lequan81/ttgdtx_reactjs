import{r as n,j as a}from"./index-CAmOHGhP.js";import{g as l,r as g}from"./index-6oTXP0dA.js";import{P as u}from"./Post-DxDTk8MI.js";const m="https://ap-northeast-1.cdn.hygraph.com/content/clon2hia1d77l01uq1q3v0i2c/master",h=async t=>{const s=l`
    query postByCategory {
      postsConnection(
        orderBy: createdAt_DESC
        stage: PUBLISHED
        where: { category: { title: "${t}" } }
      ) {
        edges {
          node {
            id
            title
            description
            slug
            createdAt
            coverImage {
              id
              url(
                transformation: {
                  document: { output: { format: webp } }
                  image: { resize: { width: 400, height: 300 } }
                }
              )
            }
            category {
              title
              name
            }
          }
        }
      }
    }
  `;return(await g(m,s)).postsConnection.edges};function f({category:t,isNested:s=!1}){const[r,c]=n.useState(!0),[o,d]=n.useState([]);return n.useEffect(()=>{(async()=>{const e=await h(t);d(e),c(!1)})()},[t]),a.jsx(a.Fragment,{children:r===!1?o.length>0?o.map(e=>{var i;return a.jsx(u,{show:!0,title:e.node.title,description:e.node.description,coverUrl:((i=e.node.coverImage)==null?void 0:i.url)||"https://picsum.photos/seed/picsum/600",hashtag:e.node.category.name,createdAt:e.node.createdAt,path:`${s?"":t+"/"}${e.node.slug}`},e.node.id)}):a.jsx("p",{className:"antialiased hover:subpixel-antialiased text-center leading-relaxed sm:text-lg text-base text-gray-800 dark:text-gray-200 col-span-4 animate__animated animate__fadeIn",children:"Không có bài viết nào gần đây"}):null})}export{f as P};
