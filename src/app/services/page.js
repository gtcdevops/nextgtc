import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import * as mutations from '@/graphql/mutations';

import config from '@/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

async function createTodo(FormData) {
  'use server';
  const { data } = await cookiesClient.graphql({
    query: mutations.createTodo,
    variables: {
      input: {
        name: FormData.get('name')?.toString() ?? '',
        email: FormData.get('email')?.toString() ?? '',
        contactno: FormData.get('contactno')?.toString() ?? '',
        fare: FormData.get('fare')?.toString() ?? ''
      }
    }
  });

  console.log('Created Todo: ', data?.createTodo);

  revalidatePath('/');
}

export default async function Home() {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        marginTop: '100px'
      }}
    >
 
      <form action={createTodo}>
        <input name="name" placeholder="Add a todo" />
        <input name="email" placeholder="Add a email" />
        <input name="contactno" placeholder="Add a contactno" />
        <input name="fare" placeholder="Add a fare" />
        <button type="submit" className="p-6 flex mx-auto">Add</button>
      </form>
    </div>
  );
}