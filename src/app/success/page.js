
import Head from "next/head";

import Hero from '@/app/components/Hero'
const Success = () => { return (
<> <Head>
<title>Success Page</title> </Head>
<div className="h-screen flex justify-center items-center"> <h1 className="text-white text-4xl">Success</h1>
<Hero />
</div> </>
); };
export default Success;