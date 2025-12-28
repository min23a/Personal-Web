"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        const { name, number, email, sub, message } = req.body || {};

        // Basic validation
        if (!name || !email || !message || !sub || !number) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Simple anti-header-injection guard
        const clean = (str) => String(str).replace(/(\r|\n)/g, " ").trim();

        const subject = `${sub} from ${clean(name)} through website`;

        const { data, error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL,     // e.g. onboarding@resend.dev (test) or no-reply@yourdomain.com (verified)
            to: process.env.CONTACT_TO_EMAIL,         // your inbox
            replyTo: clean(email),                    // so you can hit reply
            subject,
            text: `Name: ${clean(name)}\nEmail: ${clean(email)}\n\n${String(message).trim()}`,
        });

        if (error) return res.status(500).json({ error: error.message });

        return res.status(200).json({ ok: true, id: data?.id });
    } catch (e) {
        return res.status(500).json({ error: "Failed to send message" });
    }
}
