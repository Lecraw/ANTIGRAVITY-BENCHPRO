"""
BenchPro — Email Service
Sends transactional emails via SMTP or Resend.
When EMAIL_ENABLED=false, logs links to console (for development).
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

from .config import (
    APP_URL, MAIL_FROM, EMAIL_ENABLED,
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD,
    RESEND_API_KEY
)


def _send_smtp(to: str, subject: str, html_body: str, text_body: str = None) -> bool:
    """Send via SMTP."""
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = MAIL_FROM
        msg['To'] = to
        msg.attach(MIMEText(text_body or html_body.replace('<br>', '\n').replace('</p>', '\n'), 'plain'))
        msg.attach(MIMEText(html_body, 'html'))
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            if SMTP_USER and SMTP_PASSWORD:
                server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(MAIL_FROM, to, msg.as_string())
        return True
    except Exception as e:
        print(f"[EMAIL] SMTP error: {e}")
        return False


def _send_resend(to: str, subject: str, html_body: str) -> bool:
    """Send via Resend API."""
    if not RESEND_API_KEY:
        return False
    try:
        import urllib.request
        import json
        req = urllib.request.Request(
            'https://api.resend.com/emails',
            data=json.dumps({
                'from': MAIL_FROM,
                'to': [to],
                'subject': subject,
                'html': html_body
            }).encode(),
            headers={
                'Authorization': f'Bearer {RESEND_API_KEY}',
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        with urllib.request.urlopen(req) as r:
            return r.status in (200, 201)
    except Exception as e:
        print(f"[EMAIL] Resend error: {e}")
        return False


def send_email(to: str, subject: str, html_body: str, text_body: str = None) -> bool:
    """Send email. Uses Resend if API key set, else SMTP. Returns True on success."""
    if not EMAIL_ENABLED:
        return True  # Caller will have logged the link for dev
    if RESEND_API_KEY:
        return _send_resend(to, subject, html_body)
    return _send_smtp(to, subject, html_body, text_body)


def send_confirmation_email(to: str, name: str, token: str) -> bool:
    """Send email confirmation link."""
    url = f"{APP_URL.rstrip('/')}/confirm-email?token={token}"
    subject = "Confirm your BenchPro account"
    html = f"""
    <p>Hi {name},</p>
    <p>Thanks for signing up for BenchPro! Please confirm your email by clicking the link below:</p>
    <p><a href="{url}" style="color:#F04A00;font-weight:600">Confirm my email</a></p>
    <p>Or copy this link: {url}</p>
    <p>This link expires in 24 hours.</p>
    <p>— BenchPro Team</p>
    """
    if not EMAIL_ENABLED:
        print(f"[DEV] Confirm email link for {to}: {url}")
        return True
    return send_email(to, subject, html)


def send_password_reset_email(to: str, name: str, token: str) -> bool:
    """Send password reset link."""
    url = f"{APP_URL.rstrip('/')}/reset-password?token={token}"
    subject = "Reset your BenchPro password"
    html = f"""
    <p>Hi {name},</p>
    <p>You requested a password reset. Click the link below to set a new password:</p>
    <p><a href="{url}" style="color:#F04A00;font-weight:600">Reset password</a></p>
    <p>Or copy this link: {url}</p>
    <p>This link expires in 1 hour. If you didn't request this, you can ignore this email.</p>
    <p>— BenchPro Team</p>
    """
    if not EMAIL_ENABLED:
        print(f"[DEV] Password reset link for {to}: {url}")
        return True
    return send_email(to, subject, html)
