# Sample Node.js SOAP client with WSDL

```
npm install
```

## Generate types

```sh
npm run wsdl -- 'http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl'

npm run wsdl -- 'http://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderService_V04_01.asmx?wsdl'
```

OR


```sh
wsdl-to-ts --outdir=./src 'http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl'

wsdl-to-ts --outdir=./src 'http://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderService_V04_01.asmx?wsdl'
```

## Run the example

```sh
npm start

# {
#   Country: 'Australia',
#   Organization: '',
#   Latitude: -33.494,
#   Longitude: 143.2104,
#   AreaCode: '0',
#   TimeZone: '',
#   HasDaylightSavings: false,
#   Certainty: '90',
#   RegionName: '',
#   CountryCode: 'AU'
# }
```