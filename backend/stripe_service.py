"""
BenchPro — Stripe subscription service
Creates checkout sessions and handles webhooks.
"""
import stripe
from .config import (
    APP_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET,
    STRIPE_PRICE_STANDARD, STRIPE_PRICE_ELITE, STRIPE_TRIAL_DAYS
)


def is_configured():
    return bool(STRIPE_SECRET_KEY and (STRIPE_PRICE_STANDARD or STRIPE_PRICE_ELITE))


def create_checkout_session(user_id, email, name, plan, cancel_path='/'):
    """
    Create a Stripe Checkout session for subscription with trial.
    Returns { url } or raises.
    """
    if not STRIPE_SECRET_KEY:
        raise ValueError('Stripe is not configured')
    stripe.api_key = STRIPE_SECRET_KEY

    price_id = STRIPE_PRICE_ELITE if plan == 'elite' else STRIPE_PRICE_STANDARD
    if not price_id:
        price_id = STRIPE_PRICE_ELITE or STRIPE_PRICE_STANDARD
    if not price_id:
        raise ValueError('No Stripe price configured')

    base = APP_URL.rstrip('/')
    cancel_url = f"{base}{cancel_path}"
    success_url = f"{base}/api/stripe/checkout-success?session_id={{CHECKOUT_SESSION_ID}}"

    session = stripe.checkout.Session.create(
        mode='subscription',
        customer_email=email,
        line_items=[{
            'price': price_id,
            'quantity': 1,
        }],
        subscription_data={
            'trial_period_days': STRIPE_TRIAL_DAYS,
            'metadata': {'user_id': str(user_id)},
        },
        metadata={'user_id': str(user_id), 'plan': plan},
        success_url=success_url,
        cancel_url=cancel_url,
    )
    return {'url': session.url, 'session_id': session.id}


def get_session_and_subscription(session_id):
    """Retrieve session and subscription from Stripe."""
    if not STRIPE_SECRET_KEY:
        return None, None
    stripe.api_key = STRIPE_SECRET_KEY
    try:
        session = stripe.checkout.Session.retrieve(
            session_id,
            expand=['subscription']
        )
        sub = session.subscription
        if sub and hasattr(sub, 'id'):
            sub = stripe.Subscription.retrieve(sub.id) if isinstance(sub, str) else sub
        return session, sub
    except Exception:
        return None, None


def create_portal_session(customer_id, return_path='/'):
    """Create Stripe Customer Portal session for managing subscription."""
    if not STRIPE_SECRET_KEY:
        raise ValueError('Stripe is not configured')
    stripe.api_key = STRIPE_SECRET_KEY
    return_url = f"{APP_URL.rstrip('/')}{return_path}"
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url=return_url,
    )
    return {'url': session.url}
