(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(13),r=t.n(c),s=(t(84),t(14)),m=t(15),i=t(28),o=t(17),u=t(16),d=(t(85),t(40)),E=t.n(d),v=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,a=void 0===e?{}:e,t=a.name,l=void 0===t?"":t,c=a.occupation,r=void 0===c?"":c,s=a.socials,m=(void 0===s?[]:s).map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Experience")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h2",{className:"responsive-headline"},"Hello, I'm ",n.a.createElement("span",{className:"name"},l)),n.a.createElement("h3",null,n.a.createElement("span",null,r)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("ul",{className:"social"},m))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(l.Component),h=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,a=void 0===e?{}:e,t=a.name,l=void 0===t?"":t,c=a.bio,r=void 0===c?"":c,s=a.email,m=void 0===s?"":s,i=a.phone,o=void 0===i?"":i,u=a.image,d=void 0===u?"":u,E=a.resumedownload,v=void 0===E?"":E,h=a.address,p=void 0===h?{}:h,b="images/".concat(d),f=p.street,N=void 0===f?"":f,g=p.city,j=void 0===g?"":g,y=p.zip,w=void 0===y?"":y;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:b,alt:""})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,r),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,l),n.a.createElement("br",null),n.a.createElement("span",null,N,n.a.createElement("br",null),j,", ",w),n.a.createElement("br",null),n.a.createElement("span",null,o),n.a.createElement("br",null),n.a.createElement("span",null,m))),n.a.createElement("div",{className:"columns download"},n.a.createElement("p",null,n.a.createElement("a",{href:v,className:"button"},n.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(l.Component),p=t(130),b={width:"25%",textAlign:"center"},f=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,a=void 0===e?{}:e,t=a.skillmessage1,l=void 0===t?"":t,c=a.skillmessage2,r=void 0===c?"":c,s=a.education,m=void 0===s?[]:s,i=a.work,o=void 0===i?[]:i,u=a.skills,d=void 0===u?{}:u,E=m.map((function(e){return n.a.createElement("div",{key:e.school},n.a.createElement("h3",null,e.school),n.a.createElement("p",{className:"info"},e.degree," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.graduated)),n.a.createElement("p",null,e.description))})),v=o.map((function(e){return n.a.createElement("div",{key:e.company},n.a.createElement("h3",null,e.company),n.a.createElement("p",{className:"info"},e.title,n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.years)),n.a.createElement("p",null,e.description))})),h=Object.keys(d).map((function(e){return n.a.createElement(p.a,{style:{marginTop:"70px"},title:e},d[e].map((function(e){var a="images/icons/".concat(e.split("|")[1]);console.log(a);var t=a+".svg",l="images/icons/"+e.split("|")[1]+".png",c=a.includes("PNG")?l:t;return console.log(t),n.a.createElement(p.a.Grid,{style:b},n.a.createElement("div",null,e.split("|")[0]),n.a.createElement("img",{src:c}))})))}));return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},E)))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},v)),n.a.createElement("div",{className:"row skills"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns"},l),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"nine columns offset-3"},r),n.a.createElement("div",null,h)))}}]),t}(l.Component),N=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,a=(void 0===e?{}:e).projects,t=(void 0===a?[]:a).map((function(e){var a="images/portfolio/"+e.image;return n.a.createElement("div",{key:e.title,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.url,title:e.title},n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})),n.a.createElement("img",{alt:e.title,src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.category))))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"My Works"),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},t))))}}]),t}(l.Component),g=t(77),j=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={name:"",email:"",subject:"",message:""},l.handleChange=l.handleChange.bind(Object(i.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(i.a)(l)),l}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,email:this.state.email,subject:this.state.subject,message:this.state.message,date:new Date};E.a.post("http://localhost:3004/api/contacts",a).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(e){var a="checkbox"===e.target.type?e.target.checked:e.target.value;this.setState(Object(g.a)({},e.target.name,a))}},{key:"render",value:function(){var e=this.props.data,a=(void 0===e?{}:e).contactmessage,t=void 0===a?"":a;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"two columns header-col centered"},n.a.createElement("h1",null,n.a.createElement("span",null,"CONTACT"))),n.a.createElement("div",{id:"columns eight"},n.a.createElement("p",{className:"lead"},t)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"eight columns centered"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("fieldset",null,n.a.createElement("div",null,n.a.createElement("input",{type:"text",value:this.state.value,placeholder:"Name",id:"contactName",name:"name",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("input",{type:"email",value:this.state.value,placeholder:"Enter email",id:"contactEmail",name:"email",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("input",{type:"text",value:this.state.value,placeholder:"Subject",id:"contactSubject",name:"subject",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("textarea",{cols:"30",rows:"15",value:this.state.value,placeholder:"Your Message",id:"contactMessage",name:"message",onChange:this.handleChange})),n.a.createElement("div",null,n.a.createElement("button",{className:"submit"},"Submit"),n.a.createElement("span",{id:"image-loader"},n.a.createElement("img",{alt:"",src:"images/loader.gif"})))))))))}}]),t}(l.Component),y=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,a=(void 0===e?{}:e).socials,t=(void 0===a?[]:a).map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},t),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"Damilola Faseun  ",n.a.createElement("span",null,"\xa92020")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(l.Component),w=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).state={portfolioData:{}},l.getData=l.getData.bind(Object(i.a)(l)),l}return Object(m.a)(t,[{key:"getData",value:function(){var e=this;E.a.get("./portfolioData.json").then((function(a){e.setState({portfolioData:a.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.portfolioData,a=void 0===e?{}:e;return n.a.createElement("div",{style:{backgroundColor:"1px solid red"},className:"App"},n.a.createElement(v,{data:a.main}),n.a.createElement(h,{data:a.main}),n.a.createElement(f,{data:a.resume}),n.a.createElement(N,{data:a.portfolio}),n.a.createElement(j,{data:a.main}),n.a.createElement(y,{data:a.main}))}}]),t}(l.Component);t(127);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))},79:function(e,a,t){e.exports=t(128)},84:function(e,a,t){},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.137c4971.chunk.js.map