import { HireDetails } from "@/pages/hire";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext, useState } from "react";

const HirePage = () => {
    const data = useContext(HireDetails);

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        sub: "",
        message: "",
    });

    const [status, setStatus] = useState({ loading: false, ok: null, error: "" });
    const [errors, setErrors] = useState({});

    const inp_cls = "min-h-[32px] w-full p-2 border-[2px] border-gray-200 rounded";

    const validate = (values) => {
        const errs = {};

        // Name
        if (!values.name.trim()) errs.name = "Name is required";
        else if (values.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

        // Phone number
        if (!values.number.trim()) errs.number = "Phone number is required";
        else if (!/^[0-9+\s()-]{7,15}$/.test(values.number.trim())) errs.number = "Enter a valid phone number";

        // Email
        if (!values.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = "Enter a valid email address";

        // Subject
        if (!values.sub.trim()) errs.sub = "Subject is required";
        else if (values.sub.trim().length < 3) errs.sub = "Subject must be at least 3 characters";

        // Message
        if (!values.message.trim()) errs.message = "Message is required";
        else if (values.message.trim().length < 10) errs.message = "Message must be at least 10 characters";

        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));

        // Optional: clear that field's error as user edits
        if (errors[name]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const sendRequest = async (payload) => {
        setStatus({ loading: true, ok: null, error: "" });

        try {
            const r = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json = await r.json();
            if (!r.ok) throw new Error(json?.error || "Something went wrong");

            setStatus({ loading: false, ok: true, error: "" });
            setFormData({ name: "", number: "", email: "", sub: "", message: "" });
            setErrors({});
        } catch (err) {
            setStatus({ loading: false, ok: false, error: err.message || "Failed to send" });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status.loading) return;

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        await sendRequest(formData);
    };

    return (
        <div className="w-4/5 m-auto h-full flex flex-col gap-4 items-center justify-center">
            <h1 className="font-bold text-center text-[20px] uppercase mt-4">Contact</h1>

            <div className="m-auto w-1/2">
                <form id="contact" onSubmit={onSubmit} className="w-full flex flex-col gap-2 m-4" noValidate>
                    <input
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className={inp_cls}
                        autoComplete="name"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

                    <input
                        onChange={handleChange}
                        value={formData.number}
                        type="tel"
                        name="number"
                        id="number"
                        placeholder="Number"
                        className={inp_cls}
                        autoComplete="tel"
                        inputMode="tel"
                    />
                    {errors.number && <p className="text-red-600 text-sm">{errors.number}</p>}

                    <input
                        onChange={handleChange}
                        value={formData.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={inp_cls}
                        autoComplete="email"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

                    <input
                        onChange={handleChange}
                        value={formData.sub}
                        type="text"
                        name="sub"
                        id="sub"
                        placeholder="Subject"
                        className={inp_cls}
                    />
                    {errors.sub && <p className="text-red-600 text-sm">{errors.sub}</p>}

                    <textarea
                        onChange={handleChange}
                        value={formData.message}
                        name="message"
                        id="msg"
                        placeholder="Message"
                        className={inp_cls}
                        rows={6}
                    />
                    {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

                    <button
                        type="submit"
                        disabled={status.loading}
                        className="bg-secondary hover:bg-cta-hv disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold p-3 rounded w-2/5 m-auto"
                    >
                        {status.loading ? "Sending..." : "Send"}
                    </button>

                    {status.ok === true && <p className="text-green-600 text-sm text-center">✅ Message sent!</p>}
                    {status.ok === false && <p className="text-red-600 text-sm text-center">❌ {status.error}</p>}
                </form>
            </div>

            <div className="flex items-center justify-center text-[20px] w-full">
                <Link
                    href={data.upwork}
                    className="m-2 text-black-300 hover:text-white hover:bg-green-400 font-bold border-[3px] border-black hover:border-green-400 p-3 rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faUpwork} width="20px" height="20px" />
                </Link>

                <Link
                    href={"mailto:" + data.email}
                    className="m-2 text-black-300 hover:text-white hover:bg-blue-400 font-bold border-[3px] border-black hover:border-blue-400 p-3 rounded-md"
                >
                    <FontAwesomeIcon icon={faEnvelope} width="20px" height="20px" />
                </Link>
            </div>
        </div>
    );
};

export default HirePage;
