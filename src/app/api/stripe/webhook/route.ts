import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
	const body = await req.text();
	const signature = req.headers.get("stripe-signature");

	if (!signature) {
		return NextResponse.json(
			{ error: "Missing stripe-signature header" },
			{ status: 400 },
		);
	}

	let event: Stripe.Event;
	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			process.env.STRIPE_WEBHOOK_SECRET!,
		);
	} catch (err) {
		const message =
			err instanceof Error ? err.message : "Webhook verification failed";
		return NextResponse.json({ error: message }, { status: 400 });
	}

	switch (event.type) {
		case "checkout.session.completed": {
			const session = event.data.object as Stripe.Checkout.Session;
			// TODO: provision access — e.g. update DB, send welcome email
			console.log("Checkout completed:", session.id);
			break;
		}
		case "customer.subscription.deleted": {
			const subscription = event.data.object as Stripe.Subscription;
			// TODO: revoke access
			console.log("Subscription cancelled:", subscription.id);
			break;
		}
		default:
			break;
	}

	return NextResponse.json({ received: true });
}

// Required: disable body parsing so Stripe can verify the raw body
export const config = {
	api: { bodyParser: false },
};
