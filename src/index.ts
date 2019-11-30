// import * as path from 'path';
import { createClientAsync, Client } from 'soap';
import { IIP2GeoSoapSoap } from './IP2Geo/IP2GeoSoap';

function createSoapClientAs<T extends Client>(url: string): Promise<T> {
  return createClientAsync(url) as Promise<T>;
}

async function main() {
  // const url = path.resolve('./wsdl/ip2geo.wsdl.xml')
  const url = 'http://ws.cdyne.com/ip2geo/ip2geo.asmx?wsdl';
  const client = await createSoapClientAs<IIP2GeoSoapSoap>(url);

  try {
    const [result] = await client.ResolveIPAsync({ ipAddress: '1.1.1.1', licenseKey: '' });
    console.log(result.ResolveIPResult);
  } catch (error) {
    console.log(error);
  }
}

main();
