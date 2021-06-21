(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{707:function(e,a,t){e.exports=t.p+"assets/img/api-premissions.d7f46520.png"},833:function(e,a,t){"use strict";t.r(a);var s=t(44),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-2-oauth-2-implicit-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-2-oauth-2-implicit-flow"}},[e._v("#")]),e._v(" Challenge 2: OAuth 2 Implicit Flow")]),e._v(" "),s("h2",{attrs:{id:"here-is-what-you-ll-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-ll-learn-🎯"}},[e._v("#")]),e._v(" Here is what you'll learn 🎯")]),e._v(" "),s("ul",[s("li",[e._v("How to register an Azure AD application and allow the OAuth2 Implicit Grant Flow")]),e._v(" "),s("li",[e._v("How to register an Azure AD application and expose an API with OAuth2 permissions")]),e._v(" "),s("li",[e._v("How to authenticate an user and start an OAuth2 implicit flow to acquire an access token for the API")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The Implicit Grant Flow is less secure than the Code Grant Flow. This is because the generation of the "),s("code",[e._v("access_token")]),e._v(" for accessing the user's data on a resource server (e.g., the Graph API), is completely happening on the front channel. However, as the flow completely happens in the browser, it is suited for applications that do not have a server backend (e.g., 100% JS-based SPA).")])]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-an-azure-ad-application-and-enable-implicit-grant-flow"}},[e._v("Create an Azure AD Application and enable Implicit Grant Flow")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#create-an-azure-ad-application-and-expose-an-api-with-oauth2-permissions"}},[e._v("Create an Azure AD Application and expose an API with OAuth2 Permissions")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#run-the-token-echo-server"}},[e._v("Run the Token Echo Server")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#create-the-request-to-directly-acquire-an-access-token-for-the-microsoft-graph-api"}},[e._v("Create the Request to directly acquire an "),s("code",[e._v("access_token")]),e._v(" for the Microsoft Graph API")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),s("h2",{attrs:{id:"create-an-azure-ad-application-and-enable-implicit-grant-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application-and-enable-implicit-grant-flow"}},[e._v("#")]),e._v(" Create an Azure AD Application and enable Implicit Grant Flow")]),e._v(" "),s("p",[e._v("Before you can authenticate an user and acquire an access token for the API you must register an application in your Azure AD tenant.\nBy default the "),s("em",[e._v("Implicit Grant Flow")]),e._v(" for issuing access tokens is disabled.")]),e._v(" "),s("h3",{attrs:{id:"azure-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),s("p",[e._v("First, create a new Azure AD Application, this time with "),s("code",[e._v("oauth2-allow-implicit-flow")]),e._v(" enabled:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az ad app create --display-name challengeimplicitgrant --reply-urls http://localhost:5001/api/tokenechofragment --identifier-uris https://challengeimplicitgrantflow --oauth2-allow-implicit-flow "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),s("p",[e._v("As before, note down the "),s("code",[e._v("appId")]),e._v(". Next, retrieve and note the ID of your current Azure AD tenant via:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az account show\n")])])]),s("h2",{attrs:{id:"create-an-azure-ad-application-and-expose-an-api-with-oauth2-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-ad-application-and-expose-an-api-with-oauth2-permissions"}},[e._v("#")]),e._v(" Create an Azure AD Application and expose an API with OAuth2 Permissions")]),e._v(" "),s("p",[e._v("In this sample we create an API that exposes four OAuth2 permissions:")]),e._v(" "),s("ul",[s("li",[e._v("Contacts.Read")]),e._v(" "),s("li",[e._v("Contacts.Create")]),e._v(" "),s("li",[e._v("Contacts.Update")]),e._v(" "),s("li",[e._v("Contacts.Delete")])]),e._v(" "),s("h3",{attrs:{id:"azure-cli-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-2"}},[e._v("#")]),e._v(" Azure CLI")]),e._v(" "),s("p",[e._v("First, create a new Azure AD application and write the output to a variable:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("API_APP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az ad app create --display-name challengeimplicitgrantapi --identifier-uris https://challengeimplicitgrantapi"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝The example here describes how to execute the commands in a bash. If you don't have a bash on your system, you can use the Azure Cloud Shell")])]),e._v(" "),s("p",[e._v("After that we have created an Azure AD application that contains one default OAuth2 permission which was created by Azure AD.\nTo make your own OAuth2 permission, the default permission must be disabled first:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# get the app id")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("API_APP_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" $API_APP "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.appId'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# disable default exposed scope")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DEFAULT_SCOPE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az ad app show --id $API_APP_ID "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.oauth2Permissions[0].isEnabled = false'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq -r "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.oauth2Permissions'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\naz ad app update --id "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v(" --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("oauth2Permissions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$DEFAULT_SCOPE")]),e._v('"')]),e._v("\n")])])]),s("p",[e._v("Now your own OAuth2 permissions can be added:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set needed scopes from file 'ouath2-permissions (day5/challenges/oauth2-permissions)'")]),e._v("\naz ad app update --id "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v(" --set "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("oauth2Permissions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("@oauth2-permissions.json\n")])])]),s("p",[e._v("To keep it simple, the needed OAuth2 permissions are defined in a "),s("a",{attrs:{href:"oauth2-permissions.json"}},[e._v(".json")]),e._v(" file.")]),e._v(" "),s("p",[e._v("In Azure AD an "),s("em",[e._v("Application")]),e._v(" is something like a template with all necessary settings like ReplyUrl, required permissions, OAuth2 Permissions etc.\nWhen a user logs in for the first time and grants consent, an instance of the application is created. The instance is called a "),s("strong",[e._v("Service Principal")]),e._v(".\nAll created Service principals can be found in your Azure AD under "),s("strong",[e._v("Enterprise Applications")]),e._v(".\nAs no user ever logs on to an API we must create the "),s("strong",[e._v("Service Principal")]),e._v(" for the API.")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az ad sp create --id "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v("\n")])])]),s("p",[e._v("Go to your Azure AD and have a look at the registered application. The permissions look as follow:\n"),s("img",{attrs:{src:t(707),alt:"API Permissions"}})]),e._v(" "),s("h2",{attrs:{id:"run-the-token-echo-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-token-echo-server"}},[e._v("#")]),e._v(" Run the Token Echo Server")]),e._v(" "),s("p",[e._v("Open another shell and run the "),s("code",[e._v("Token Echo Server")]),e._v(" from "),s("a",{attrs:{href:"../apps/token-echo-server"}},[s("code",[e._v("day5/apps/token-echo-server")])]),e._v(" in this repository. This helper ASP.NET Core tool is used to echo the token issued by your AAD. The tool is listening on port 5001 on your local machine. Tokens are accepted on the route "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(". That's the reason why we initially registered an AAD application with a reply url pointing to "),s("code",[e._v("http://localhost:5001/api/tokenechofragment")]),e._v(".")]),e._v(" "),s("p",[e._v("Run the application via:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("dotnet run\n")])])]),s("h2",{attrs:{id:"create-the-request-to-directly-acquire-an-access-token-for-the-microsoft-graph-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-request-to-directly-acquire-an-access-token-for-the-microsoft-graph-api"}},[e._v("#")]),e._v(" Create the Request to directly acquire an "),s("code",[e._v("access_token")]),e._v(" for the Microsoft Graph API")]),e._v(" "),s("p",[e._v("We can directly request an "),s("code",[e._v("access_token")]),e._v(" by specifying "),s("code",[e._v("token")]),e._v(" in the "),s("code",[e._v("response_type")]),e._v(" field. Adding "),s("code",[e._v("token")]),e._v(" will allow our app to receive an "),s("code",[e._v("access_token")]),e._v(" immediately from the authorize endpoint without having to make a second request to the token endpoint. If you use the token in "),s("code",[e._v("response_type")]),e._v(", the scope parameter must contain a scope indicating which resource to issue the token for.")]),e._v(" "),s("p",[e._v("Replace "),s("code",[e._v("TENANT_ID")]),e._v(" with your AAD Tenant Id and "),s("code",[e._v("APPLICATION_ID")]),e._v(" with your Application Id (this is the id that you received when you created the first application). Open a browser and paste the request:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("https:")]),e._v("//login.microsoftonline.com/TENANT_ID/oauth2/v2.0/authorize?\nclient_id=APPLICATION_ID\n&response_type=id_token+token\n&redirect_uri=http%3A%2F%2Flocalhost%3A5001%2Fapi%2Ftokenechofragment\n&response_mode=fragment\n&scope=openid%20profile%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Read%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Create%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Update%20https%3A%2F%2Fchallengeimplicitgrantapi%2FContacts.Delete\n&nonce=1234\n")])])]),s("p",[e._v("After executing the request and you have signed in, Azure AD shows you a consent page and you have to grant access for the requested API permissions.\nAfter giving consent, have a look at your browser's address bar. The "),s("code",[e._v("access_token")]),e._v(" is in the fragment of the url and should look something like this:")]),e._v(" "),s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("http:")]),e._v("//localhost:5001/api/tokenechofragment#access_token=eyJ0eX...&token_type=Bearer&expires_in=3599&scope=openid+profile+User.Read+email&id_token=eyJ0eXAiOi...&session_state=0f76c823-eac5-4ec0-9d4a-edf40b783583\n")])])]),s("p",[e._v("Make sure to only copy the "),s("code",[e._v("access_token")]),e._v(", not the full remainder of the string!")]),e._v(" "),s("p",[e._v("Go to "),s("a",{attrs:{href:"http://jwt.ms",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://jwt.ms"),s("OutboundLink")],1),e._v(", paste the token and have a look at the decoded token. You will see that there is issued an additional claim "),s("code",[e._v("scp")]),e._v(". This claim contains all OAuth2Permissions the user gave consent to.")]),e._v(" "),s("p",[e._v("More details on how the OAuth2 Implicit Grant Flow request can be used is documented "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow#send-the-sign-in-request",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"wrap-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),s("p",[e._v("This challenge showed how to create a new application in AAD and use the OAuth 2.0 Implicit Grant Flow to request an access token for accessing the Graph API. The full process is described "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),s("p",[e._v("Remove the created resources via the Azure CLI:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("az ad app delete --id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("applicationid"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\naz ad app delete --id "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$API_APP_ID")]),e._v("\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/day5/challenges/challenge-1.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day5/"}},[e._v("🔼 Day 5")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);