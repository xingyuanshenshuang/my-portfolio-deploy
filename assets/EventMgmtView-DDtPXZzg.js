import{p as A}from"./projects-DQdcHOwA.js";import{S as d}from"./SectionTitle-RDbOxMQ8.js";import{I as x,C as k}from"./CodeBlock-BuQkkeCJ.js";import{d as j,a as n}from"./animations-Cbg2QUCt.js";import{_ as V}from"./index-CyQpfSQu.js";import{f as s,g as e,y as c,u as t,t as v,F as h,j as _,k as g,A as f,h as a,i as y,a as w,b as i}from"./vue-vendor-oEk9T1ka.js";import"./json-CulIrMt9.js";import"./highlight-vendor-nSGkUMep.js";const C={class:"project-detail-view"},S={class:"project-hero"},I={class:"container"},P={class:"hero-content"},E={class:"project-category"},B={class:"project-title"},M={class:"project-description"},U={class:"project-tags"},F={class:"project-actions"},L=["href"],z=["href"],N={class:"hero-image"},T=["src","alt"],D={class:"project-gallery-section"},G={class:"container"},K={class:"project-tech-section"},R={class:"container"},q={class:"tech-grid"},H={class:"tech-icon"},J=["src","alt"],O={class:"tech-name"},Q={class:"project-highlights-section"},W={class:"container"},X={class:"highlights-grid"},Y={class:"highlight-text"},Z={class:"project-case-section"},$={class:"container"},ee={class:"case-content"},te={class:"case-block"},se={class:"case-block"},ie={class:"case-block"},oe={class:"case-block"},ce={class:"project-code-section"},le={class:"container"},ne={class:"project-video-section"},ae={class:"container"},re={class:"video-container"},de=["poster"],ve=["src"],ue={class:"project-nav-section"},pe={class:"container"},he={class:"project-nav"},_e=`// Pinia 文章状态管理
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getArticles, createArticle, updateArticle, deleteArticle } from '@/api/article'

export const useArticleStore = defineStore('article', () => {
  // State
  const articles = ref([])
  const categories = ref([])
  const loading = ref(false)
  const total = ref(0)

  // Getters
  const publishedArticles = computed(() => 
    articles.value.filter(article => article.status === 1)
  )

  // Actions
  const fetchArticles = async (params = {}) => {
    loading.value = true
    try {
      const res = await getArticles(params)
      articles.value = res.data
      total.value = res.total
      return res
    } finally {
      loading.value = false
    }
  }

  const addArticle = async (data) => {
    const res = await createArticle(data)
    articles.value.unshift(res.data)
    return res
  }

  const editArticle = async (id, data) => {
    const res = await updateArticle(id, data)
    const index = articles.value.findIndex(item => item.id === id)
    if (index !== -1) {
      articles.value[index] = res.data
    }
    return res
  }

  const removeArticle = async (id) => {
    await deleteArticle(id)
    articles.value = articles.value.filter(item => item.id !== id)
  }

  return {
    articles,
    categories,
    loading,
    total,
    publishedArticles,
    fetchArticles,
    addArticle,
    editArticle,
    removeArticle
  }
})`,ge={__name:"EventMgmtView",setup(me){const l=A.find(u=>u.id==="eventmgmt"),b=u=>({Vue3:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",Vue2:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",Pinia:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",Vuex:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg","Vue Router":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg","Element Plus":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg","Vant UI":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",Axios:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"})[u]||"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";return(u,o)=>{const m=w("router-link");return i(),s("div",C,[e("section",S,[e("div",I,[c((i(),s("div",P,[e("span",E,v(t(l).category),1),e("h1",B,v(t(l).name),1),e("p",M,v(t(l).description),1),e("div",U,[(i(!0),s(h,null,_(t(l).tags,r=>(i(),s("span",{key:r,class:"tag"},v(r),1))),128))]),e("div",F,[t(l).githubUrl?(i(),s("a",{key:0,href:t(l).githubUrl,target:"_blank",rel:"noopener noreferrer",class:"btn btn-primary"},[...o[0]||(o[0]=[e("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),g(" 查看源码 ",-1)])],8,L)):f("",!0),t(l).demoUrl?(i(),s("a",{key:1,href:t(l).demoUrl,target:"_blank",rel:"noopener noreferrer",class:"btn btn-secondary"},[...o[1]||(o[1]=[e("svg",{class:"icon",viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"})],-1),g(" 在线演示 ",-1)])],8,z)):f("",!0)])])),[[t(j)]]),e("div",N,[e("img",{src:t(l).image,alt:t(l).name},null,8,T)])])]),e("section",D,[e("div",G,[c((i(),s("div",null,[a(d,{title:"项目截图",subtitle:"Project Screenshots"}),a(x,{images:t(l).gallery},null,8,["images"])])),[[t(n),{delay:0}]])])]),e("section",K,[e("div",R,[c((i(),s("div",null,[a(d,{title:"技术栈",subtitle:"Technology Stack"})])),[[t(n)]]),e("div",q,[(i(!0),s(h,null,_(t(l).techStack,(r,p)=>c((i(),s("div",{key:r,class:"tech-item"},[e("div",H,[e("img",{src:b(r),alt:r},null,8,J)]),e("span",O,v(r),1)])),[[t(n),{delay:p*100}]])),128))])])]),e("section",Q,[e("div",W,[c((i(),s("div",null,[a(d,{title:"项目亮点",subtitle:"Key Features"})])),[[t(n)]]),e("div",X,[(i(!0),s(h,null,_(t(l).highlights,(r,p)=>c((i(),s("div",{key:p,class:"highlight-card"},[o[2]||(o[2]=e("div",{class:"highlight-icon"},[e("svg",{viewBox:"0 0 24 24",fill:"currentColor"},[e("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})])],-1)),e("p",Y,v(r),1)])),[[t(n),{delay:p*150}]])),128))])])]),e("section",Z,[e("div",$,[c((i(),s("div",null,[a(d,{title:"案例分析",subtitle:"Case Study"})])),[[t(n)]]),e("div",ee,[c((i(),s("div",te,[...o[3]||(o[3]=[e("h3",{class:"case-title"},"项目背景",-1),e("p",{class:"case-text"}," 大事件管理系统是一个现代化的后台管理解决方案，旨在帮助内容创作者和管理员高效地管理文章发布、分类组织和用户权限。 随着内容管理需求的不断增长，传统的管理方式已经无法满足快速迭代和多人协作的需求。 ",-1)])])),[[t(n),{delay:0}]]),c((i(),s("div",se,[...o[4]||(o[4]=[e("h3",{class:"case-title"},"技术选型",-1),e("p",{class:"case-text"}," 项目采用 Vue3 + Pinia + Element Plus 技术栈。Vue3 的 Composition API 提供了更好的代码组织方式， Pinia 作为新一代状态管理方案，相比 Vuex 更加轻量和直观。Element Plus 提供了丰富的后台管理组件， 大大加速了开发进程。 ",-1)])])),[[t(n),{delay:150}]]),c((i(),s("div",ie,[...o[5]||(o[5]=[e("h3",{class:"case-title"},"核心功能",-1),e("ul",{class:"case-list"},[e("li",null,"文章发布与编辑，支持富文本内容"),e("li",null,"文章分类与标签管理"),e("li",null,"用户注册、登录与权限控制"),e("li",null,"响应式布局适配不同设备"),e("li",null,"数据可视化展示")],-1)])])),[[t(n),{delay:300}]]),c((i(),s("div",oe,[...o[6]||(o[6]=[e("h3",{class:"case-title"},"项目成果",-1),e("p",{class:"case-text"}," 系统成功上线并稳定运行，为内容管理团队提供了高效的工作平台。通过模块化的架构设计， 系统具备良好的可扩展性，能够快速响应业务需求的变化。 ",-1)])])),[[t(n),{delay:450}]])])])]),e("section",ce,[e("div",le,[c((i(),s("div",null,[a(d,{title:"代码示例",subtitle:"Code Example"})])),[[t(n)]]),c((i(),s("div",null,[a(k,{code:_e,language:"javascript"})])),[[t(n),{delay:200}]])])]),e("section",ne,[e("div",ae,[c((i(),s("div",null,[a(d,{title:"演示视频",subtitle:"Demo Video"})])),[[t(n)]]),c((i(),s("div",re,[e("video",{controls:"",poster:t(l).image},[e("source",{src:t(l).demoVideo,type:"video/mp4"},null,8,ve),o[7]||(o[7]=g(" 您的浏览器不支持视频播放。 ",-1))],8,de)])),[[t(n),{delay:200}]])])]),e("section",ue,[e("div",pe,[c((i(),s("div",he,[a(m,{to:"/projects/smartmall",class:"nav-item prev"},{default:y(()=>[...o[8]||(o[8]=[e("span",{class:"nav-label"},"上一个项目",-1),e("span",{class:"nav-title"},"智慧商城",-1)])]),_:1}),a(m,{to:"/projects",class:"nav-item all"},{default:y(()=>[...o[9]||(o[9]=[e("span",{class:"nav-label"},"查看全部",-1),e("span",{class:"nav-title"},"项目列表",-1)])]),_:1})])),[[t(j)]])])])])}}},we=V(ge,[["__scopeId","data-v-2112156a"]]);export{we as default};
