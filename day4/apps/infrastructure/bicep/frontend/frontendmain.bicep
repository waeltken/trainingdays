@minLength(3)
@maxLength(8)
@description('Name of environment')
param env string = 'devd4'

var resourceTag = {
  Environment: env
  Application: 'SCM'
  Component: 'SCM-Frontend'
}

module staticWebapp 'staticwebapp.bicep' = {
  name: 'deployStaticWebappFrontend'
  params: {
    env: env
    resourceTag: resourceTag
  }
}

output applicationInsightsKey string = staticWebapp.outputs.applicationInsightsKey
output contactsApiEndpoint string = staticWebapp.outputs.contactsApiEndpoint
output resourcesApiEndpoint string = staticWebapp.outputs.resourcesApiEndpoint
output searchApiEndpoint string = staticWebapp.outputs.searchApiEndpoint
output visitReportsEndpoint string = staticWebapp.outputs.visitReportsApiEndpoint
output staticWebappName string = staticWebapp.outputs.staticWebappName
output staticWebappEndpoint string = staticWebapp.outputs.staticWebappEndpoint
