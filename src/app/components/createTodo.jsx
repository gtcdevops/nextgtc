"use server"

import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import { revalidatePath } from 'next/cache';
import * as mutations from '../../graphql/mutations';

import config from '@/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config, 
  cookies});


  export async function createTodo(FormData) {
    const { data } = await cookiesClient.graphql({
      query: mutations.createTodo,
      variables: {
        input: {
          name: FormData.get('name')?.toString() ?? '',
          email: FormData.get('email')?.toString() ?? '',
          contactno: FormData.get('contactno')?.toString() ?? ''
          // pax: FormData.get('pax')?.toString() ?? '',
          // luggage: FormData.get('luggage')?.toString() ?? '',
          // typeoftransfer: FormData.get('typeoftransfer')?.toString() ?? '',
          // pickup: FormData.get('pickup')?.toString() ?? '',
          // dropoff: FormData.get('dropoff')?.toString() ?? '',
          // date: FormData.get('date')?.toString() ?? '',
          // flightno: FormData.get('flightno')?.toString() ?? '',
          // pickuptime: FormData.get('pickuptime')?.toString() ?? '',
          // postal: FormData.get('postal')?.toString() ?? '',
          // fare: FormData.get('fare')?.toString() ?? '',
          // typeofvehicle: FormData.get('typeofvehicle')?.toString() ?? ''
        }
      }
    });
  
    console.log("Created Todo: ", data?.createTodo )
  
    revalidatePath('/');


  } 

