(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{832:function(e,t,a){"use strict";a.r(t);var r=a(44),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"challenge-1-receive-an-id-token-in-a-fragment-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-1-receive-an-id-token-in-a-fragment-url"}},[e._v("#")]),e._v(" Challenge 1: Receive an ID Token in a Fragment URL")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-ll-learn-🎯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-ll-learn-🎯"}},[e._v("#")]),e._v(" Here is what you'll learn 🎯")]),e._v(" "),a("ul",[a("li",[e._v("How to register an application in Azure AD")]),e._v(" "),a("li",[e._v("How to create an Open ID Connect request to authenticate an user")]),e._v(" "),a("li",[e._v("How to receive an ID token in a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fragment_identifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fragment URL"),a("OutboundLink")],1),e._v(" for receiving information about the authenticated user")])]),e._v(" "),a("p",[e._v("This is very similar to "),a("RouterLink",{attrs:{to:"/day5/challenges/challenge-0.html"}},[e._v("Challenge 0")]),e._v(", except that this time we will receive the "),a("code",[e._v("id_token")]),e._v(" through a fragment URL instead of it being in the body.")],1),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#create-an-aad-application"}},[e._v("Create an AAD Application")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#run-the-token-echo-server"}},[e._v("Run the Token Echo Server")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-an-authentication-request"}},[e._v("Create an Authentication Request")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),a("h2",{attrs:{id:"create-an-aad-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-aad-application"}},[e._v("#")]),e._v(" Create an AAD Application")]),e._v(" "),a("p",[e._v("Before you can authenticate an user you have to register an application in your AAD tenant.")]),e._v(" "),a("h3",{attrs:{id:"azure-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("az ad app create --display-name challengeidtokenfragment --reply-urls http://localhost:5001/api/tokenechofragment --identifier-uris https://challengeidtokenfragment\n")])])]),a("p",[e._v("Retrieve and note the ID of your current AAD tenant via:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("az account show \n")])])]),a("h2",{attrs:{id:"run-the-token-echo-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-token-echo-server"}},[e._v("#")]),e._v(" Run the Token Echo Server")]),e._v(" "),a("p",[e._v("Open another shell and run the Token Echo Server from "),a("a",{attrs:{href:"../apps/token-echo-server"}},[a("code",[e._v("day5/apps/token-echo-server")])]),e._v(" in this repository. This helper ASP.NET Core tool is used to echo the token issued by your Azure AD. The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),a("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(". This is why we initially registered an AAD application with a reply url pointing to "),a("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("dotnet run\n")])])]),a("h2",{attrs:{id:"create-an-authentication-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-authentication-request"}},[e._v("#")]),e._v(" Create an Authentication Request")]),e._v(" "),a("p",[e._v("Replace "),a("code",[e._v("TENANT_ID")]),e._v(" with your TenantId and "),a("code",[e._v("APPLICATION_ID")]),e._v(" with your ApplicationId. Open a browser and paste the modified request.")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenechofragment\n&response_mode=fragment\n&scope=openid%20profile\n&nonce=1234\n")])])]),a("p",[e._v("Copy the "),a("code",[e._v("id_token")]),e._v(" value from your browser's address bar, go to "),a("a",{attrs:{href:"https://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),a("OutboundLink")],1),e._v(" and paste the token. Take a minute and have a look at the decoded token.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 If you need further information about the issued claims take a look "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#header-claims",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),a("p",[e._v("This challenge showed how to create a new application in Azure AD and how an user can be authenticated using the Open ID Connect protocol. The full process is described "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("p",[e._v("Remove the created resources via the Azure CLI:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("az ad app delete --id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("applicationid"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/day5/challenges/challenge-0.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day5/"}},[e._v("🔼 Day 5")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day5/challenges/challenge-2.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);