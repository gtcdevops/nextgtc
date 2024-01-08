import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.useSearchParams;
  const amount = searchParams.get("fare");
  }

// export async function GET(request) {
//     console.log(request.nextUrl.searchParams.get("fare"));
//     return new Response("Hello, Next.js!");
//   }


