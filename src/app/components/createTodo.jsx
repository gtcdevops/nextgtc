"use server"

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import { revalidatePath } from 'next/cache';
import * as mutations from '../../graphql/mutations';

import config from '../../amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies});


  export async function createTodo(formData) {
    const { data } = await cookiesClient.graphql({
      query: mutations.createTodo,
      variables: {
        input: {
          name: formData.get('name')?.toString() ?? '',
          email: formData.get('email')?.toString() ?? '',
          contactno: formData.get('contactno')?.toString() ?? '',
          pax: formData.get('pax')?.toString() ?? '',
          luggage: formData.get('luggage')?.toString() ?? '',
          typeoftransfer: formData.get('typeoftransfer')?.toString() ?? '',
          pickup: formData.get('pickup')?.toString() ?? '',
          dropoff: formData.get('dropoff')?.toString() ?? '',
          date: formData.get('date')?.toString() ?? '',
          flightno: formData.get('flightno')?.toString() ?? '',
          pickuptime: formData.get('pickuptime')?.toString() ?? '',
          postal: formData.get('postal')?.toString() ?? '',
          fare: formData.get('fare')?.toString() ?? '',
          typeofvehicle: formData.get('typeofvehicle')?.toString() ?? '',
          agree: formData.get('agree')?.toString() ?? ''
        }
      }
    });
  
    console.log("Created Todo: ", data?.createTodo )
  
    revalidatePath('/');


  } 

