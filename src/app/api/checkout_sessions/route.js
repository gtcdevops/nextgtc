
import Stripe from "stripe";
import { NextResponse } from "next/server"

// const searchParams = request.nextUrl.searchParams;
// const amount = searchParams.get("fare");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


  export async function POST (req, res) {

    // const {fare} = req.body;
    // const totalFare = parseInt(fare * 100);


      const session = await stripe.checkout.sessions.create({
        
        line_items: [
          {
            price_data: {
              // unit_amount: totalFare,
              unit_amount: 56 * 100,
              currency: 'sgd',
              product_data: {
                name: 'Ground Transport Concierge',
                description: 'Changi Airport Transfer Services',
              }
            },
            quantity: 1,
          }
        ],
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/canceled",


      });
      
      return NextResponse.json({ url: session.url })    
  
    }
