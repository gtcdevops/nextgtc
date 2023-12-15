import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

// import { revalidatePath } from 'next/cache';
import * as mutations from '../../graphql/mutations';

import config from '../../amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config, 
  cookies});


  async function createBookingNew() {
    "use server"
    const { data } = await cookiesClient.graphql({
      query: mutations.createBookingNew,
      variables: {
        input: {
          name: FormData.get('name')?.toString() ?? '',
          name: formData.get('email')?.toString() ?? '',
          name: formData.get('contactno')?.toString() ?? '',
          name: formData.get('pax')?.toString() ?? '',
          name: formData.get('luggage')?.toString() ?? '',
          name: formData.get('typeoftransfer')?.toString() ?? '',
          name: formData.get('pickup')?.toString() ?? '',
          name: formData.get('dropoff')?.toString() ?? '',
          name: formData.get('date')?.toString() ?? '',
          name: formData.get('flightno')?.toString() ?? '',
          name: formData.get('pickuptime')?.toString() ?? '',
          name: formData.get('postal')?.toString() ?? '',
          name: formData.get('fare')?.toString() ?? '',
          name: formData.get('typeofvehicle')?.toString() ?? ''
        }
      }
    });
  
    console.log("Created Todo: ", data?.createBookingNew )
  
    // revalidatePath('/');


  } 

export default function Action () {
    
}
