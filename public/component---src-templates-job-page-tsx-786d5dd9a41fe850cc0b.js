(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{148:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return l});var n=t(0),r=t(178),o=t(170),i=t(269),s=t(177),c=t(271);a.default=Object(s.a)(function(e){var a=e.data.jobItem,t=Object(r.a)(e.data.dictionaryContacts.edges);return n.createElement(n.Fragment,null,n.createElement(o.a,{type:"small",title:a.title,description:[a.salary,a.office.title].join("\n")}),n.createElement(i.a,null,a.description&&a.description.childMarkdownRemark.html),n.createElement(c.a,{dictionary:t,jobTitle:a.title}))});var l="3810604662"},167:function(e,a,t){"use strict";t(172);var n=t(0),r=t.n(n),o=t(163),i=t.n(o),s=t(183),c=t.n(s),l=function(e){var a=e.children,t=e.title,n=t?r.a.createElement("h2",{className:c.a.container__title,"data-aos":"fade-up"},t):null;return r.a.createElement("div",{className:c.a.container},n,a)},d=t(184),m=t.n(d),u=function(e){var a,t=e.children,n=e.container,o=e.title,s=e.fill,c=n?r.a.createElement(l,{title:o},t):t;return r.a.createElement("section",{className:i()(m.a.section,(a={},a[m.a.section__fillDark]="dark"===s,a[m.a.section__fillLight]="light"===s,a))},c)};u.defaultProps={container:!0};a.a=u},168:function(e,a,t){e.exports={container:"Background-module--container--1yQRW"}},169:function(e,a,t){e.exports={heading:"Head-module--heading--1ZcrQ",heading__home:"Head-module--heading__home--nog1B",heading__homeBackground:"Head-module--heading__homeBackground--F20Bd",heading__homeGradient:"Head-module--heading__homeGradient--3cT57",heading__homeShadow:"Head-module--heading__homeShadow--3kl4o",heading__service:"Head-module--heading__service--wJxLn",heading__serviceBackground:"Head-module--heading__serviceBackground--2hvJK",heading__serviceBackground__svg:"Head-module--heading__serviceBackground__svg--3sEXP",heading__case:"Head-module--heading__case--24pId",heading__caseBackground:"Head-module--heading__caseBackground--2wffW",heading__caseBackground__image:"Head-module--heading__caseBackground__image--1Sr9W",heading__caseBackground__svg:"Head-module--heading__caseBackground__svg--2nEQ1",heading__page:"Head-module--heading__page--3kXrL",heading__small:"Head-module--heading__small--HcWi1",heading__container:"Head-module--heading__container--3X6pN",heading__base:"Head-module--heading__base--3oB8q",heading__baseTitle:"Head-module--heading__baseTitle--29d1R",heading__baseDescription:"Head-module--heading__baseDescription--2Z6il",heading__sub:"Head-module--heading__sub--1Bf2J"}},170:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(175),i=t.n(o),s=t(163),c=t.n(s),l=(t(34),t(192),t(172),t(7)),d=t.n(l),m=t(193),u=t(168),p=t.n(u),h="\n  attribute float scale;\n  void main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = scale * ( 300.0 / - mvPosition.z );\n    gl_Position = projectionMatrix * mvPosition;\n  }\n",_="\n  uniform vec3 color;\n  void main() {\n    if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n    gl_FragColor = vec4( color, 1.0 );\n  }\n",g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).separation=60,a.amountX=60,a.amountY=30,a.positionX=450,a.positionY=450,a.positionZ=700,a.count=0,a.buildCamera=function(){a.width=a.container.clientWidth,a.height=a.container.clientHeight,a.camera=new m.d(50,a.width/a.height,1,1400),a.camera.position.z=a.positionZ,a.camera.position.x=a.positionX,a.camera.position.y=a.positionY},a.buildRenderer=function(){a.renderer=new m.i({alpha:!1,antialias:!0,logarithmicDepthBuffer:!0,precision:"highp",preserveDrawingBuffer:!0}),a.renderer.setClearColor(a.props.fill),a.renderer.setSize(a.width,a.height),a.container.appendChild(a.renderer.domElement)},a.buildScene=function(){a.scene=new m.f;for(var e=a.amountX*a.amountY,t=new Float32Array(3*e),n=new Float32Array(e),r=0,o=0,i=0;i<a.amountX;i+=1)for(var s=0;s<a.amountY;s+=1)t[r]=i*a.separation-a.amountX*a.separation/2,t[r+1]=0,t[r+2]=s*a.separation-a.amountY*a.separation/2,n[o]=1,r+=3,o+=1;var c=new m.b;c.addAttribute("position",new m.a(t,3)),c.addAttribute("scale",new m.a(n,1));var l=new m.h({fragmentShader:a.shaderParse(_),uniforms:{color:{value:new m.c(13619412)}},vertexShader:a.shaderParse(h)});a.particles=new m.e(c,l),a.scene.add(a.particles)},a.onWindowResize=function(){a.width=a.container.clientWidth,a.height=a.container.clientHeight,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.replaceThreeChunk=function(e,a){return m.g[a]+"\n"},a.shaderParse=function(e){return e.replace(/\/\/\s?chunk\(\s?(\w+)\s?\);/g,a.replaceThreeChunk)},a.start=function(){a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.stop=function(){cancelAnimationFrame(a.frameId)},a.animate=function(){a.renderScene(),a.frameId=window.requestAnimationFrame(a.animate)},a.renderScene=function(){a.camera.lookAt(a.scene.position);for(var e=a.particles.geometry.attributes.position.array,t=a.particles.geometry.attributes.scale.array,n=0,r=0,o=0;o<a.amountX;o+=1)for(var i=0;i<a.amountY;i+=1)e[n+1]=50*Math.sin(.3*(o+a.count))+50*Math.sin(.5*(i+a.count)),t[r]=6*(Math.sin(.3*(o+a.count))+1)+6*(Math.sin(.5*(i+a.count))+1),n+=3,r+=1;a.particles.geometry.attributes.position.needsUpdate=!0,a.particles.geometry.attributes.scale.needsUpdate=!0,a.renderer.render(a.scene,a.camera),a.count+=.1},a}d()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.buildCamera(),this.buildScene(),this.buildRenderer(),this.start(),window.addEventListener("resize",this.onWindowResize,!1)},t.componentWillUnmount=function(){this.stop(),this.container.removeChild(this.renderer.domElement),window.removeEventListener("resize",this.onWindowResize)},t.render=function(){var e=this;return r.a.createElement("div",{"data-aos":"fade",className:p.a.container,ref:function(a){return e.container=a}})},a}(r.a.Component),b=t(164),f=t(169),v=t.n(f),E=function(e){var a,t=e.type,n=e.title,o=e.description,s=e.button,l=e.background;return r.a.createElement("div",{className:c()(v.a.heading,(a={},a[v.a.heading__home]="home"===t,a[v.a.heading__service]="service"===t,a[v.a.heading__case]="case"===t,a[v.a.heading__page]="page"===t,a[v.a.heading__small]="small"===t,a))},function(e,a){return"home"===e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.heading__homeGradient}),r.a.createElement("div",{className:v.a.heading__homeBackground},r.a.createElement(g,{fill:"#101229"})),r.a.createElement("div",{className:v.a.heading__homeShadow})):"service"===e?r.a.createElement("svg",{viewBox:"0 0 800 100",className:v.a.heading__serviceBackground__svg},r.a.createElement("path",{d:"M 0 50 Q 200 100 400 50 Q 600 0 800 50 L 800 100 L 0 100 Z"})):"case"===e?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(i.a,{className:v.a.heading__caseBackground__image,fluid:a}),r.a.createElement("svg",{viewBox:"0 0 800 100",className:v.a.heading__caseBackground__svg},r.a.createElement("path",{d:"M 0 50 Q 200 100 400 50 Q 600 0 800 50 L 800 100 L 0 100 Z"}))):null}(t,l),r.a.createElement("div",{className:v.a.heading__container},r.a.createElement("div",{className:v.a.heading__base},n&&r.a.createElement("h1",{className:v.a.heading__baseTitle,"data-aos":"fade-right"},n),o&&r.a.createElement("p",{className:v.a.heading__baseDescription,"data-aos":"fade-right"},o)),r.a.createElement("div",{className:v.a.heading__sub,"data-aos":"fade-left"},s&&r.a.createElement(b.a,{title:s,size:"large"}))))};E.defaultProps={type:"page"};a.a=E},183:function(e,a,t){e.exports={container:"Container-module--container--2Vjc6",container__title:"Container-module--container__title--6TDaP",full:"Container-module--full--70L39"}},184:function(e,a,t){e.exports={section:"Section-module--section--2nM98",section__fillDark:"Section-module--section__fillDark--nOVW6",section__fillLight:"Section-module--section__fillLight--1jXLR"}},190:function(e,a,t){"use strict";t(33),t(176);var n=t(7),r=t.n(n),o=t(163),i=t.n(o),s=t(0),c=t.n(s),l=t(189),d=t.n(l),m=t(191),u=t.n(m),p=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={errors:[],focused:!1,maxRows:6,minRows:1,rows:1,value:""},a.handleChange=function(e){a.props.onChange(e);var t="checkbox"===e.target.type?e.target.checked:e.target.value,n=d.a.single(t,a.props.constraints)||[];if(a.props.multiline){var r=e.target.rows;e.target.rows=a.state.minRows;var o=Math.floor(e.target.scrollHeight/24);o===r&&(e.target.rows=o),o>=a.state.maxRows&&(e.target.rows=a.state.maxRows,e.target.scrollTop=e.target.scrollHeight),a.setState({errors:n,value:t,rows:o<a.state.maxRows?o:a.state.maxRows})}else a.setState({errors:n,value:t})},a.onFocus=function(){a.setState({focused:!0})},a.onBlur=function(){a.state.value||a.setState({focused:!1})},a.renderLabel=function(){var e;return"checkbox"===a.props.type?null:c.a.createElement("label",{className:i()(u.a.inputLabel,u.a.inputLabel__scalable,(e={},e[u.a.inputLabel__scalableScaled]=a.state.focused,e[u.a.inputLabel__required]=a.props.required,e))},a.props.label)},a.renderInput=function(){var e,t={className:i()(u.a.inputText,(e={},e[u.a.inputText__empty]=!a.state.value,e)),name:a.props.name,onBlur:a.onBlur,onChange:a.handleChange,onFocus:a.onFocus};return a.props.multiline?c.a.createElement("textarea",Object.assign({},t,{rows:a.state.rows,"aria-label":a.props.name})):"checkbox"===a.props.type?c.a.createElement("div",{className:u.a.inputCheckbox},c.a.createElement("input",Object.assign({},t,{id:a.props.name,className:u.a.inputCheckbox__check,type:a.props.type,checked:a.props.checked,"aria-label":a.props.name})),c.a.createElement("label",{htmlFor:a.props.name},a.props.label)):c.a.createElement("input",Object.assign({},t,{type:a.props.type,autoComplete:"off","aria-label":a.props.name}))},a.renderErrors=function(){return a.state.errors.length?c.a.createElement("div",{className:u.a.inputErrors__message},c.a.createElement("div",{className:u.a.inputErrors__messageText},a.state.errors.map(function(e,a){return c.a.createElement("span",{key:a},e)}))):null},a}r()(a,e);var t=a.prototype;return t.componentWillReceiveProps=function(e){if(e.showErrors&&!this.props.showErrors){var a=d.a.single(this.state.value,this.props.constraints)||[];this.setState({errors:a})}},t.render=function(){var e;return c.a.createElement("div",{className:i()(u.a.input,(e={},e[u.a.inputErrors]=this.state.errors.length,e))},this.renderLabel(),this.renderInput(),this.renderErrors())},a}(c.a.Component);p.defaultProps={constraints:{},multiline:!1,required:!1,type:"text"},a.a=p},191:function(e,a,t){e.exports={input:"Input-module--input--1qEAK",inputLabel:"Input-module--inputLabel--1WrVJ",inputLabel__scalable:"Input-module--inputLabel__scalable--2_gfB",inputLabel__scalableScaled:"Input-module--inputLabel__scalableScaled--1dzes",inputLabel__required:"Input-module--inputLabel__required--2xG3X",inputText:"Input-module--inputText--3nUuC",inputText__empty:"Input-module--inputText__empty--xSMv4",inputErrors:"Input-module--inputErrors--1z5Po",inputErrors__message:"Input-module--inputErrors__message--3qesc",inputErrors__messageText:"Input-module--inputErrors__messageText--3pyoo",inputCheckbox:"Input-module--inputCheckbox--2YVsH",inputCheckbox__check:"Input-module--inputCheckbox__check--1cFME"}},269:function(e,a,t){"use strict";var n=t(7),r=t.n(n),o=t(0),i=t.n(o),s=t(167),c=t(270),l=t.n(c),d=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){return this.props.children?i.a.createElement(s.a,{title:this.props.title},i.a.createElement("div",{"data-aos":"fade-right",className:l.a.description,dangerouslySetInnerHTML:{__html:this.props.children}})):null},a}(i.a.Component);a.a=d},270:function(e,a,t){e.exports={description:"Description-module--description--38xvK"}},271:function(e,a,t){"use strict";var n=t(75),r=t.n(n),o=(t(176),t(33),t(7)),i=t.n(o),s=(t(74),t(54),t(221),t(163)),c=t.n(s),l=t(166),d=t(0),m=t.n(d),u=t(223),p=t(189),h=t.n(p),_=t(180),g=t.n(_),b=t(181),f=t.n(b),v=t(182),E=t.n(v),w=t(167),y=t(164),k=t(190),C=t(272),x=t.n(C);function N(e){for(var a=new FormData,t=Object.keys(e),n=0;n<t.length;n++){var r=t[n];a.append(r,e[r])}return a}var F=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).state={fields:{agreement:!1},showErrors:!1},a.constraints={agreement:{inclusion:{message:a.props.dictionary.contactsAgreementRequired,within:[!0]},presence:{allowEmpty:!1,message:a.props.dictionary.contactsAgreementRequired}},email:{email:{message:a.props.dictionary.contactsEmailRequired}},message:{presence:{allowEmpty:!1,message:a.props.dictionary.contactsMessageRequired}},name:{presence:{allowEmpty:!1,message:a.props.dictionary.contactsNameRequired}},phone:{presence:{allowEmpty:!1,message:a.props.dictionary.contactsPhoneRequired}}},a.handleChange=function(e){var t,n="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState({fields:Object.assign({},a.state.fields,(t={},t[e.target.name]=n,t))})},a.handleDrop=function(e){a.setState({fields:Object.assign({},a.state.fields,{attachment:e[0]})})},a.handleSubmit=function(e){e.preventDefault();var t=e.currentTarget,n=h()(a.state.fields,a.constraints),o=a.state.fields,i=(o.attachment,r()(o,["attachment"]));if(a.props.jobTitle&&(i.jobTitle=a.props.jobTitle),n)return a.setState({showErrors:!0});console.log("body",i),fetch("/",{body:N(Object.assign({"form-name":t.getAttribute("name")},i)),method:"POST"}).then(function(){return Object(l.b)(t.getAttribute("action"))}).catch(function(e){return alert(e)})},a}return i()(a,e),a.prototype.render=function(){var e=this.props.dictionary;return m.a.createElement(w.a,{title:e.job},m.a.createElement("div",{className:x.a.contacts,"data-aos":"fade-up"},m.a.createElement("form",{name:"career",method:"POST",action:"/thank-you-cv","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit,noValidate:!0},m.a.createElement("input",{type:"hidden",name:"form-name",value:"career"}),m.a.createElement("div",{hidden:!0},m.a.createElement(k.a,{label:"Don’t fill this out",name:"bot-field",onChange:this.handleChange})),m.a.createElement("div",{className:x.a.formContainer},m.a.createElement("div",{className:x.a.formItem__gridContainer},m.a.createElement("div",{className:x.a.formItem__gridItem},m.a.createElement(k.a,{label:e.contactsName,name:"name",onChange:this.handleChange,required:!0,constraints:this.constraints.name,showErrors:this.state.showErrors})),m.a.createElement("div",{className:x.a.formItem__gridItem},m.a.createElement(k.a,{type:"email",label:e.contactsEmail,name:"email",onChange:this.handleChange,required:!0,constraints:this.constraints.email,showErrors:this.state.showErrors}))),m.a.createElement("div",{className:x.a.formItem__gridContainer},m.a.createElement("div",{className:x.a.formItem__gridItem},m.a.createElement(k.a,{type:"phone",label:e.contactsPhone,name:"phone",onChange:this.handleChange,required:!0,constraints:this.constraints.phone,showErrors:this.state.showErrors})),m.a.createElement("div",{className:x.a.formItem__gridItem},m.a.createElement(u.a,{onDrop:this.handleDrop},function(a){var t,n=a.getRootProps,r=a.getInputProps,o=a.isDragAccept,i=a.isDragReject,s=a.acceptedFiles;return m.a.createElement("div",Object.assign({},n(),{className:c()(x.a.dropzone,(t={},t[x.a.dropzone__active]=o,t[x.a.dropzone__reject]=i,t))}),m.a.createElement("input",r()),o?e.jobFileDrop:s.length?s[0].name:e.jobFileDrag,!s.length&&m.a.createElement("small",{className:x.a.dropzone__accepted},".pdf, .doc, .docx, .ppt, .pptx"))}))),m.a.createElement("div",{className:x.a.formItem__gridContainer},m.a.createElement("div",{className:x.a.formItem__gridItem},m.a.createElement(k.a,{label:e.jobMessage,name:"message",onChange:this.handleChange,required:!0,multiline:!0,constraints:this.constraints.message,showErrors:this.state.showErrors})))),m.a.createElement("div",{className:x.a.formFooter},m.a.createElement("div",{className:x.a.formFooter__agreement},m.a.createElement(k.a,{type:"checkbox",label:e.contactsAgreement,name:"agreement",onChange:this.handleChange,checked:this.state.fields.agreement.value,constraints:this.constraints.agreement,showErrors:this.state.showErrors})),m.a.createElement("div",{className:x.a.formFooter__submit},m.a.createElement(y.a,{title:e.contactsSubmit,type:"submit",size:"large"})))),m.a.createElement("div",{className:c()(x.a.contacts__bubbles,x.a.contacts__bubbles3),"data-aos":"zoom-in","data-aos-delay":"500"},m.a.createElement(g.a,null)),m.a.createElement("div",{className:c()(x.a.contacts__bubbles,x.a.contacts__bubbles4),"data-aos":"zoom-in","data-aos-delay":"500"},m.a.createElement(f.a,null)),m.a.createElement("div",{className:c()(x.a.contacts__bubbles,x.a.contacts__bubbles5)},m.a.createElement(E.a,null))))},a}(m.a.Component);a.a=F},272:function(e,a,t){e.exports={contacts:"FormJob-module--contacts--1Adtk",contacts__bubbles:"FormJob-module--contacts__bubbles--nIbC4",contacts__bubbles3:"FormJob-module--contacts__bubbles3--2y9Pm",contacts__bubbles4:"FormJob-module--contacts__bubbles4--2xPXl",contacts__bubbles5:"FormJob-module--contacts__bubbles5--1odKX",formContainer:"FormJob-module--formContainer--3sUdt",formItem__gridContainer:"FormJob-module--formItem__gridContainer--1XwBn",formItem__gridItem:"FormJob-module--formItem__gridItem--2JEi3",formFooter:"FormJob-module--formFooter--1ab03",formFooter__agreement:"FormJob-module--formFooter__agreement--1py6T",formFooter__submit:"FormJob-module--formFooter__submit--zKbkP",dropzone:"FormJob-module--dropzone--3hria",dropzone__accepted:"FormJob-module--dropzone__accepted--2y6es",dropzone__active:"FormJob-module--dropzone__active--2ttnV",dropzone__reject:"FormJob-module--dropzone__reject--1cojh"}}}]);
//# sourceMappingURL=component---src-templates-job-page-tsx-786d5dd9a41fe850cc0b.js.map