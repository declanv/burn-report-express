(this["webpackJsonpburn-report"]=this["webpackJsonpburn-report"]||[]).push([[0],{2:function(e,t,a){e.exports=a.p+"static/media/sun.7e82d79b.svg"},20:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(12),c=a.n(s),r=(a(25),a(13)),i=a(14),l=a(18),u=a(15),d=a(19),m=(a(26),a(16)),p=a.n(m),g=a(17),h=a.n(g),v=a(2),k=a.n(v),f="",b="https://maps.googleapis.com/maps/api/js?key=".concat("","&libraries=places"),y="https://api.openuv.io/api/v1/uv?lat=",E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleScriptLoad=function(){a.autocomplete=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{types:["(cities)"]}),a.autocomplete.setFields(["address_components","formatted_address","geometry"]),a.autocomplete.addListener("place_changed",a.handlePlaceSelect)},a.handlePlaceSelect=function(){var e=a.autocomplete.getPlace(),t=e.address_components,n=(new Date).toISOString(),o=e.geometry.location,s=o.lat(),c=o.lng(),r=y+s+"&lng="+c+"&dt="+n;p.a.get(r,{headers:{"x-access-token":f}}).then((function(n){t&&a.setState({city:t[0].long_name,query:e.formatted_address,uvRisk:Math.round(n.data.result.uv),report:"show"}),console.log(n.data)})).catch((function(e){console.log(e)}))},a.state={city:"",query:"",uvRisk:0,report:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"appContainer",className:"risk-".concat(this.state.uvRisk)},o.a.createElement("img",{src:k.a,className:"sun-background quad",alt:"sun"}),o.a.createElement("img",{src:k.a,className:"sun-background trip",alt:"sun"}),o.a.createElement("img",{src:k.a,className:"sun-background dupe",alt:"sun"}),o.a.createElement("img",{src:k.a,className:"sun-background",alt:"sun"}),o.a.createElement("div",{id:"inputMessageContainer"},o.a.createElement("h1",{id:"logo"},"Burn Report"),o.a.createElement(h.a,{url:b,onLoad:this.handleScriptLoad}),o.a.createElement("p",{id:"instructions"},"Enter your location"),o.a.createElement("input",{id:"autocomplete",placeholder:"",defaultValue:this.state.query}),o.a.createElement("h1",{id:"riskMessage",className:this.state.report},"Your UV risk for today is: ",this.state.uvRisk)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fb8b466a.chunk.js.map