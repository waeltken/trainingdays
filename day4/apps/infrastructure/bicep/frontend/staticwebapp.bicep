
@minLength(3)
@maxLength(8)
@description('Name of environment')
param env string = 'devd4'

@description('Resource tags object to use')
param resourceTag object

var staticWebappName = 'stfe${env}${take(uniqueString(resourceGroup().id), 11)}'
var location = resourceGroup().location

var appiName = 'appi-scm-${env}-${uniqueString(resourceGroup().id)}'
var contactsApiName = 'app-contactsapi-${env}-${uniqueString(resourceGroup().id)}'
var resourcesApiName = 'app-resourcesapi-${env}-${uniqueString(resourceGroup().id)}'
var searchApiName = 'app-searchapi-${env}-${uniqueString(resourceGroup().id)}'
var visitReportsApiName = 'app-visitreportsapi-${env}-${uniqueString(resourceGroup().id)}'

resource appi 'Microsoft.Insights/components@2015-05-01' existing = {
  name: appiName
}

resource staticWebapp 'Microsoft.Web/staticSites@2020-12-01' = {
  name: staticWebappName
  location: location
  tags: resourceTag
  sku: {
    name: 'Free'
  }
  properties: {}
}

output applicationInsightsKey string = appi.properties.InstrumentationKey
output contactsApiEndpoint string = 'https://${contactsApiName}.azurewebsites.net'
output resourcesApiEndpoint string = 'https://${resourcesApiName}.azurewebsites.net'
output searchApiEndpoint string = 'https://${searchApiName}.azurewebsites.net'
output visitReportsApiEndpoint string = 'https://${visitReportsApiName}.azurewebsites.net'
output staticWebappName string = staticWebappName
output staticWebappEndpoint string = staticWebapp.properties.defaultHostname
