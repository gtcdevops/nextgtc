import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingSummary from "../components/BookingSummary"

// import { Amplify } from 'aws-amplify';
// Amplify.configure(config);


// import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
// import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache';
// import * as mutations from '@/graphql/mutations';
// import config from '@/amplifyconfiguration.json';

// const cookiesClient = generateServerClientUsingCookies({
//   config,
//   cookies
// });

// async function createTodo(formData) {
//   'use server';
//   const { data } = await cookiesClient.graphql({
//     query: mutations.createTodo,
//     variables: {
//       input: {
//         name: formData.get('name')?.toString() ?? '',
//         email: formData.get('email')?.toString() ?? '',
//         name: formData.get('pax')?.toString() ?? '',
//         name: formData.get('luggage')?.toString() ?? '',
//         name: formData.get('typeoftransfer')?.toString() ?? '',
//         name: formData.get('pickup')?.toString() ?? '',
//         name: formData.get('dropoff')?.toString() ?? '',
//         name: formData.get('date')?.toString() ?? '',
//         name: formData.get('flightno')?.toString() ?? '',
//         name: formData.get('pickuptime')?.toString() ?? '',
//         name: formData.get('contactno')?.toString() ?? '',
//         name: formData.get('postal')?.toString() ?? '',
//         name: formData.get('fare')?.toString() ?? '',
//         name: formData.get('typeofvehicle')?.toString() ?? '',
//         name: formData.get('agree')?.toString() ?? '',

//       }
//     }
//   });
//   console.log('Created Todo: ', data?.createTodo);
//   revalidatePath('/');
// } 

const Page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />

<BookingSummary />
{/* <BookingSummary onSubmit={createTodo}/> */}
  <Footer />
  </main>  
  )
}

export default Page;

