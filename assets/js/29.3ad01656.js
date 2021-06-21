(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{437:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringarchitecture.9cfb28ed.png"},438:function(e,t,r){e.exports=r.p+"assets/img/deploytoazure.e0e5d477.png"},439:function(e,t,r){e.exports=r.p+"assets/img/armdeploymentresult.9be38aa5.png"},440:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringsettings.7e68a907.png"},441:function(e,t,r){e.exports=r.p+"assets/img/vnetpeeringtest.ed5c5417.png"},791:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"challenge-9-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-9-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[e._v("#")]),e._v(" Challenge 9: Networking - Connect Two Virtual Networks Using Azure VNET Peering")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),a("p",[e._v("How to connect 2 virtual networks with Azure VNET Peering. Our final architecture should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(437),alt:"Final architecture"}})]),e._v(" "),a("p",[e._v("At first you will deploy the "),a("em",[e._v("start environment")]),e._v(" and then you will implement the "),a("em",[e._v("peering")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of Contents")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#deploy-the-starting-point"}},[e._v("Deploy the Starting Point")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#implement-the-vnet-peering"}},[e._v("Implement the VNET peering")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#check-if-the-peering-works"}},[e._v("Check if the peering works")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#cleanup"}},[e._v("Cleanup")])])]),e._v(" "),a("h2",{attrs:{id:"deploy-the-starting-point"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-starting-point"}},[e._v("#")]),e._v(" Deploy the Starting Point")]),e._v(" "),a("p",[e._v("In this directory there is an ARM-template which 2 virtual networks and 2 VMs and its requirements (networking, disks,...):")]),e._v(" "),a("p",[e._v("Deploy this scenario into your subscription by "),a("strong",[e._v("clicking")]),e._v(" on the"),a("br"),e._v(" "),a("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-09%2Fchallengestart%2Fchallengestart.json"}},[a("img",{attrs:{src:r(438)}})]),e._v(" button.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Resource group")])]),e._v(" "),a("td",[a("strong",[e._v("(new)")]),e._v(" rg-VNETPeering")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Location")])]),e._v(" "),a("td",[e._v("West Europe")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Admin user")])]),e._v(" "),a("td",[e._v("demouser")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Admin password")])]),e._v(" "),a("td",[e._v("%some complex value%")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Vm Size")])]),e._v(" "),a("td",[e._v("Standard_B2s  or try e.g. Standard_F2s_v2")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Disk Sku")])]),e._v(" "),a("td",[e._v("StandardSSD_LRS")])])])]),e._v(" "),a("p",[e._v("The result should look similar to this:")]),e._v(" "),a("p",[a("img",{attrs:{src:r(439),alt:"Deployment result"}})]),e._v(" "),a("h2",{attrs:{id:"implement-the-vnet-peering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implement-the-vnet-peering"}},[e._v("#")]),e._v(" Implement the VNET peering")]),e._v(" "),a("p",[e._v("You need to create the peerings on each virtual network:")]),e._v(" "),a("ul",[a("li",[e._v("VNET1 ---\x3e VNET2")]),e._v(" "),a("li",[e._v("VNET2 ---\x3e VNET1")])]),e._v(" "),a("p",[e._v("The wizard in the portal is smart enough to let create 2 peerings in a single step. Select e.g. VNET1 as starting point:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[Azure Portal] \n-> Resource Groups \n-> "rg-VNETPeering" \n-> "VNET1" \n-> Peerings -> Add\n')])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("This virtual network")]),e._v(" (Peering link name)")]),e._v(" "),a("td",[e._v("VNET1-to-VNET2")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Virtual Network")]),e._v(" (to peer with)")]),e._v(" "),a("td",[e._v("VNET2")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Remote virtual network")]),e._v("  (Peering link name)")]),e._v(" "),a("td",[e._v("VNET2-to-VNET1")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:r(440),alt:"VNET Peering settings"}})]),e._v(" "),a("h2",{attrs:{id:"check-if-the-peering-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-if-the-peering-works"}},[e._v("#")]),e._v(" Check if the peering works")]),e._v(" "),a("ol",[a("li",[e._v("Connect to one VM through RDP using its public ip address: e.g. VMonVNET1 through")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[Azure Portal] \n-> Virtual Machines \n-> "VMonVNET1" \n-> Connect\n')])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("User")]),e._v(" "),a("th",[e._v("Password")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("demouser")]),e._v(" "),a("td",[e._v("%your deployment password%")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Open a command prompt and ping the other VM using its internal IP: In our case VMonVNET2 - should be 192.168.100.4:")])]),e._v(" "),a("p",[a("img",{attrs:{src:r(441),alt:"VNET Peering ping test"}})]),e._v(" "),a("h2",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("p",[e._v("Delete the resource group "),a("code",[e._v("rg-VNETPeering")])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/day1/challenge-08/"}},[e._v("◀ Previous challenge")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day1/"}},[e._v("🔼 Day 1")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day1/challenge-10/"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);