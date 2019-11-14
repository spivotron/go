(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){e.exports=a(340)},198:function(e,t,a){},199:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(41),l=a.n(i),r=(a(198),a(199),a(200),a(355)),s=a(58),u=a(182),c=a(80),d=a(81),m=a(89),p=a(82),h=a(90),v=a(52),f=a.n(v),g=a(357),E=a(352),y=a(349),q=a(348),b=a(341),S=a(353),C=a(356),w=a(88),x=a(350),k=function(e){var t=e.question;return o.a.createElement(x.a,null,o.a.createElement(x.a.Item,null,t.question))},O=function(e){var t=e._id,a=e.questions;return o.a.createElement(E.a,{color:"purple",fluid:!0},o.a.createElement(E.a.Content,null,o.a.createElement(E.a.Meta,null,"Survey ",t),a&&a.map(function(e){return o.a.createElement(k,{question:e})})),o.a.createElement(E.a.Content,{extra:!0},o.a.createElement(w.b,{to:"/survey/".concat(t)},"Take Survey")))},F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onQuestionChange=function(e){return function(t){var n=t.target.value,o=a.state.questions;o[e].question=n,a.setState({questions:o},function(){a.validateField("question",n)})}},a.validateField=function(e,t){var n=a.state.questionError,o=a.state.optionError;switch(e){case"question":n=t.length<1;break;case"option":o=t.length<1}a.setState({questionError:n,optionError:o},a.validateForm)},a.validateForm=function(){a.setState({disabled:!a.state.questionError&&!a.state.optionError})},a.onSubmit=function(){var e=a.state,t=e.questions,n=e.votes;f.a.post("/api/survey",{questions:t,votes:n},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){a.getSurveys()}).catch(function(e){console.log(e)}),a.setState({question:"",options:[{text:"",selected:!1}]})},a.getSurveys=function(){f.a.get("/api/survey").then(function(e){e.data?a.setState({surveys:e.data}):a.setState({surveys:[]})})},a.addQuestion=function(e){a.setState({questions:[].concat(Object(u.a)(a.state.questions),[{question:"",options:[{text:"",selected:!1}]}])})},a.addOption=function(e){var t=a.state.questions;t[e].options.push({text:"",selected:!1}),a.setState({questions:t})},a.handleOptionChange=function(e,t){return function(n){var o=a.state.questions,i=n.target.value;if(o.length>0){var l=o&&o[e].options.map(function(e,a){return a!==t?e:Object(s.a)({},e,{text:n.target.value})});o[e].options=l,a.setState({questions:o},function(){a.validateField("option",i)})}}},a.state={surveys:[],questions:[{question:"",options:[{text:"",selected:!1}]}],votes:[],disabled:!1,questionError:!1,optionError:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSurveys()}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions;t.questionError;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{as:"h2"},"Survey App"),o.a.createElement(E.a,{fluid:!0},o.a.createElement(E.a.Content,null,o.a.createElement(y.a,null,o.a.createElement(y.a.Field,null,a.map(function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a.Input,{required:!0,type:"text",name:"title",onChange:e.onQuestionChange(a),value:t.question,fluid:!0,placeholder:"Enter your question",label:"Question: "}),t.options.map(function(t,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a.Field,{inline:!0,key:n,required:!0},o.a.createElement(q.a,{label:"Option # ".concat(n+1),required:!0,type:"text",placeholder:"Please enter an option",onChange:e.handleOptionChange(a,n)})))}),o.a.createElement(b.a,{icon:"plus",labelPosition:"left",onClick:function(){return e.addOption(a)},content:"Add Option"}))}),o.a.createElement(S.a,{visible:this.state.questionError||this.state.optionError,error:!0,header:o.a.createElement(g.a,{as:"h3",textAlign:"left",content:"Invalid Inputs"}),content:"Please check your inputs again. All fields are required."})),o.a.createElement(b.a,{icon:"plus",labelPosition:"left",onClick:function(){return e.addQuestion()},content:"Add Question"}))),o.a.createElement(E.a.Content,{extra:!0},o.a.createElement(b.a,{color:"teal",type:"submit",onClick:this.onSubmit,content:"Submit"}))),o.a.createElement(r.a.Row,null,o.a.createElement(C.a,null,o.a.createElement(g.a,{as:"h2"},"Surveys"),o.a.createElement(E.a.Group,null,0===this.state.surveys.length?o.a.createElement(g.a,null,"No surveys yet"):this.state.surveys.map(function(e,t){return o.a.createElement(O,Object.assign({key:e._id},e))})))))}}]),t}(n.Component),j=a(79),I=[{key:"be",flag:"be",text:"Belgium",value:"Belgium"},{key:"fr",flag:"fr",text:"France",value:"France"},{key:"it",flag:"it",text:"Italy",value:"Italy"},{key:"us",flag:"us",text:"United States",value:"United States"},{key:"nl",flag:"nl",text:"Netherlands",value:"Netherlands"}],V=a(59),A=a(351),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(){var e=a.props.match.params.id,t=a.state.age,n=a.state,o=n.country,i=n.email,l=n.questions,r=n.disabled;t=parseInt(t);var s=l.map(function(e){if(!r)return{question:"".concat(e.question),response:e.options&&e.options.filter(function(e){return!0===e.selected})}});r||f.a.post("/api/survey/".concat(e,"/vote"),{email:i,country:o,age:t,responses:s},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){a.setState({voted:!a.state.voted})}).catch(function(e){console.log(e)})},a.handleRadioChange=function(e){var t=e.target,n=a.state.questions.map(function(e,a){return e.question!==t.name?e:Object(s.a)({},e,{options:e.options.map(function(e){var a=e.text===t.value;return Object(s.a)({},e,{selected:a})})})});a.setState({questions:n})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(j.a)({},t,n),function(){a.validateField(t,n)})},a.validateField=function(e,t){var n=a.state.emailValid,o=a.state.ageValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)&&t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).length>0;break;case"age":o=t>0&&!isNaN(t)}a.setState({emailValid:n,ageValid:o},a.validateForm)},a.validateForm=function(){a.setState({disabled:!a.state.emailValid&&!a.state.ageValid})},a.selectCountry=function(e,t){a.setState({country:t.value})},a.getSurvey=function(e){f.a.get("/api/survey/".concat(e)).then(function(e){var t=e.data.questions;a.setState({questions:t,loading:!1})}).catch(function(e){console.log(e)})},a.state={loading:!0,statistics:[],country:"",age:0,email:"",questions:[],ageValid:!1,emailValid:!1,disabled:!0,voted:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;e&&this.getSurvey(e)}},{key:"render",value:function(){var e=this;if(this.state.loading)return o.a.createElement("p",null,"Loading ... ");var t=this.state,a=t.questions,n=t.country,i=t.age,l=t.email,r=(t.emailValid,t.ageValid,t.disabled),s=t.voted;return o.a.createElement("div",null,o.a.createElement(E.a,{fluid:!0},o.a.createElement(E.a.Content,null,o.a.createElement(y.a,{onSubmit:this.onSubmit},a.map(function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{as:"h2",textAlign:"left",dividing:!0},t.question),t.options&&t.options.map(function(a,n){return o.a.createElement(y.a.Field,null,o.a.createElement(g.a,{sub:!0,textAlign:"left"},a.text),o.a.createElement(q.a,{type:"radio",name:t.question,value:a.text,checked:a.selected,onChange:e.handleRadioChange}))}))}),o.a.createElement(y.a.Field,null,o.a.createElement(V.a,null,"Choose your country"),o.a.createElement(A.a,{placeholder:"Select Country",fluid:!0,selection:!0,options:I,onChange:this.selectCountry,value:n})),o.a.createElement(y.a.Group,{widths:"equal"},o.a.createElement(y.a.Field,null,o.a.createElement(y.a.Input,{type:"number",name:"age",onChange:this.handleInputChange,value:i,fluid:!0,label:"What is your age?",required:!0})),o.a.createElement(y.a.Field,null,o.a.createElement(y.a.Input,{type:"email",name:"email",onChange:this.handleInputChange,value:l,fluid:!0,label:"What is your email?",required:!0}))),o.a.createElement(S.a,{visible:r,error:!0,header:o.a.createElement(g.a,{as:"h3",textAlign:"left",content:"Invalid Inputs"}),content:"Please check your inputs again. All fields are required."}),o.a.createElement(S.a,{visible:s,success:!0,header:o.a.createElement(g.a,{as:"h3",textAlign:"left",content:"Thanks for voting!"}),content:"You're all set."}),o.a.createElement(b.a,{type:"submit",content:"Vote",disabled:r})))))}}]),t}(n.Component),N=a(36);var P=function(){return o.a.createElement(r.a,{padded:!0},o.a.createElement(r.a.Row,null,o.a.createElement(r.a.Column,null,o.a.createElement(w.a,null,o.a.createElement(N.c,null,o.a.createElement(N.a,{exact:!0,path:"/",component:F}),o.a.createElement(N.a,{path:"/survey/:id",component:Q}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[193,1,2]]]);
//# sourceMappingURL=main.dd349384.chunk.js.map