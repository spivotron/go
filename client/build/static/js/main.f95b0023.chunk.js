(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,n){e.exports=n(341)},198:function(e,t,n){},199:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(41),u=n.n(l),i=(n(198),n(199),n(200),n(355)),r=n(58),s=n(182),c=n(80),m=n(81),d=n(88),p=n(82),h=n(89),f=n(52),v=n.n(f),g=n(358),y=n(353),E=n(350),b=n(349),q=n(342),C=n(356),S=n(352),x=function(e){var t=e.question;return o.a.createElement(S.a,null,o.a.createElement(S.a.Item,null,t.question))},O=function(e){var t=e._id,n=e.questions;return o.a.createElement(y.a,{color:"purple",fluid:!0},o.a.createElement(y.a.Content,null,o.a.createElement(y.a.Meta,null,"Survey ",t),n&&n.map(function(e){return o.a.createElement(x,{question:e})})),o.a.createElement(y.a.Content,{extra:!0},o.a.createElement(q.a,{href:"/survey/".concat(t),color:"blue",content:"Take Survey"})))},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onQuestionChange=function(e){return function(t){var a=n.state.questions;a[e].question=t.target.value,n.setState({questions:a})}},n.onSubmit=function(){var e=n.state,t=e.questions,a=e.votes;v.a.post("/api/survey",{questions:t,votes:a},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){n.getSurveys()}).catch(function(e){console.log(e)}),n.setState({question:"",options:[{text:"",selected:!1}]})},n.getSurveys=function(){v.a.get("/api/survey").then(function(e){e.data?n.setState({surveys:e.data}):n.setState({surveys:[]})})},n.addQuestion=function(e){n.setState({questions:[].concat(Object(s.a)(n.state.questions),[{question:"",options:[{text:"",selected:!1}]}])})},n.addOption=function(e){var t=n.state.questions;t[e].options.push({text:"",selected:!1}),n.setState({questions:t})},n.removeOption=function(e){return function(){n.setState({options:n.state.options.filter(function(t,n){return e!==n})})}},n.handleOptionChange=function(e,t){return function(a){var o=n.state.questions,l=o[e].options.map(function(e,n){return n!==t?e:Object(r.a)({},e,{text:a.target.value})});o[e].options=l,n.setState({questions:o})}},n.state={surveys:[],questions:[{question:"",options:[{text:"",selected:!1}]}],votes:[],disabled:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getSurveys()}},{key:"render",value:function(){var e=this,t=this.state,n=t.questions;t.title,t.options,t.country,t.region;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{as:"h2"},"Survey App"),o.a.createElement(y.a,{fluid:!0},o.a.createElement(y.a.Content,null,o.a.createElement(E.a,null,o.a.createElement(E.a.Field,null,n.map(function(t,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{type:"text",name:"title",onChange:e.onQuestionChange(n),value:t.question,fluid:!0,placeholder:"Enter your question",label:"Question: "}),t.options.map(function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a.Field,{inline:!0,key:a,required:!0},o.a.createElement(b.a,{label:"Option # ".concat(a+1),type:"text",placeholder:"Please enter an option",onChange:e.handleOptionChange(n,a)})))}),o.a.createElement(q.a,{icon:"plus",labelPosition:"left",onClick:function(){return e.addOption(n)},content:"Add Option"}))})),o.a.createElement(q.a,{icon:"plus",labelPosition:"left",onClick:function(){return e.addQuestion()},content:"Add Question"}))),o.a.createElement(y.a.Content,{extra:!0},o.a.createElement(q.a,{color:"teal",type:"submit",onClick:this.onSubmit,content:"Submit"}))),o.a.createElement(i.a.Row,null,o.a.createElement(C.a,null,o.a.createElement(g.a,{as:"h2"},"Surveys"),o.a.createElement(y.a.Group,null,0===this.state.surveys.length?o.a.createElement(g.a,null,"No surveys yet"):this.state.surveys.map(function(e,t){return o.a.createElement(O,Object.assign({key:e._id},e))})))))}}]),t}(a.Component),k=n(79),j=(n(339),n(354),[{key:"be",flag:"be",text:"Belgium",value:"Belgium"},{key:"fr",flag:"fr",text:"France",value:"France"},{key:"it",flag:"it",text:"Italy",value:"Italy"},{key:"us",flag:"us",text:"United States",value:"United States"},{key:"nl",flag:"nl",text:"Netherlands",value:"Netherlands"}]),F=n(59),I=n(351),Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(){var e=n.props.match.params.id,t=n.state.age,a=n.state,o=a.country,l=a.email,u=a.questions;t=parseInt(t);var i=u.map(function(e){return{question:"".concat(e.question),response:e.options.filter(function(e){return!0===e.selected}).reduce(function(e){return e.text})}});console.log(i),v.a.post("/api/survey/".concat(e,"/vote"),{email:l,country:o,age:t,responses:i},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})},n.handleRadioChange=function(e){var t=e.target,a=n.state.questions.map(function(e,n){return e.question!==t.name?e:Object(r.a)({},e,{options:e.options.map(function(e){var n=e.text===t.value;return Object(r.a)({},e,{selected:n})})})});n.setState({questions:a})},n.handleInputChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n.selectCountry=function(e,t){n.setState({country:t.value})},n.getSurvey=function(e){v.a.get("/api/survey/".concat(e)).then(function(e){var t=e.data.questions;n.setState({questions:t,loading:!1})}).catch(function(e){console.log(e)})},n.state={loading:!0,statistics:[],country:"",age:0,email:"",questions:[]},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;e&&this.getSurvey(e)}},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement("p",null,"Loading ... ");var t=this.state,n=t.questions,a=(t.statistics,t.country),l=t.age,u=t.email;return o.a.createElement("div",null,o.a.createElement(y.a,{fluid:!0},o.a.createElement(y.a.Content,null,o.a.createElement(E.a,{onSubmit:this.onSubmit},n.map(function(t,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{as:"h2",textAlign:"left",dividing:!0},t.question),t.options&&t.options.map(function(n,a){return o.a.createElement(E.a.Field,null,o.a.createElement(g.a,{sub:!0,textAlign:"left"},n.text),o.a.createElement(b.a,{type:"radio",name:t.question,value:n.text,checked:n.selected,onChange:e.handleRadioChange}))}))}),o.a.createElement(E.a.Field,null,o.a.createElement(F.a,null,"Choose your country"),o.a.createElement(I.a,{placeholder:"Select Country",fluid:!0,selection:!0,options:j,onChange:this.selectCountry,value:a})),o.a.createElement(E.a.Group,{widths:"equal"},o.a.createElement(E.a.Field,null,o.a.createElement(b.a,{type:"number",name:"age",onChange:this.handleInputChange,value:l,fluid:!0,label:"What is your age?"})),o.a.createElement(E.a.Field,null,o.a.createElement(b.a,{type:"email",name:"email",onChange:this.handleInputChange,value:u,fluid:!0,label:"What is your email?"}))),o.a.createElement(q.a,{type:"submit",content:"Vote"})))))}}]),t}(a.Component),A=n(178),B=n(36);var R=function(){return o.a.createElement(i.a,{padded:!0},o.a.createElement(i.a.Row,null,o.a.createElement(i.a.Column,null,o.a.createElement(A.a,null,o.a.createElement(B.c,null,o.a.createElement(B.a,{path:"/",exact:!0,component:w}),o.a.createElement(B.a,{path:"/survey/:id",exact:!0,component:Q}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[193,1,2]]]);
//# sourceMappingURL=main.f95b0023.chunk.js.map