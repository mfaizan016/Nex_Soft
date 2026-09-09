from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import smtplib
from email.message import EmailMessage

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: str
    service: str
    message: str

@app.post("/api/contact")
async def contact(data: ContactForm):
    try:
        sender_email = "mfaizanghakhar016@gmail.com"
        sender_password = "xtmnvdgyfxuwlwpz"
        recipient_email = "nexsoft2026@gmail.com"

        msg = EmailMessage()
        msg["Subject"] = f"New Contact Request: {data.service}"
        msg["From"] = sender_email
        msg["To"] = recipient_email

        body = f"""
Name: {data.name}
Email: {data.email}
Service: {data.service}

Message:
{data.message}
"""
        msg.set_content(body)

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)

        return {"success": True, "message": "Email sent successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))