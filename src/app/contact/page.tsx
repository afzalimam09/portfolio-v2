"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
    MdOutlineMailOutline,
    MdOutlineWhatsapp,
    MdOutlineCall,
} from "react-icons/md";

const notyf = (message: any, type: any) => {
    if (type === "success") {
        toast.success(message, {
            duration: 5000,
            position: "top-right",
        });
    } else {
        toast.error(message, {
            duration: 5000,
            position: "top-right",
        });
    }
};

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const formRef = useRef<any>();
    const [loading, setLoading] = useState(false);
    const handleSendEmail = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const { name, email, text } = Object.fromEntries(formData);
        if (!email || !name || !text)
            return notyf("All fields are required!", "error");
        try {
            setLoading(true);
            await axios.post(
                "https://kist-6ofr.onrender.com/api/v1/email/send-contact-email",
                { name, email, text }
            );
            notyf("Message Sent Successfully!", "success");

            setTimeout(() => {
                notyf(`We'll contact you soon!`, "success");
            }, 1000);
            formRef.current.reset();
        } catch (error) {
            notyf("Something went wrong. Please try Again!", "error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <article className="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section>
                <ul className="contact-options">
                    <li>
                        <a
                            href="mailto:afzalimam09@gmail.com"
                            className="icon-box"
                            target="_blank"
                        >
                            <MdOutlineMailOutline />
                        </a>
                        <p>Mail</p>
                    </li>
                    <li>
                        <a
                            href="https://api.whatsapp.com/send?phone=916206864101"
                            className="icon-box"
                            target="_blank"
                        >
                            <MdOutlineWhatsapp />
                        </a>
                        <p>Chat</p>
                    </li>
                    <li>
                        <a
                            href="tel:+916206864101"
                            className="icon-box"
                            target="_blank"
                        >
                            <MdOutlineCall />
                        </a>
                        <p>Call</p>
                    </li>
                </ul>
            </section>

            {/* <section className="mapbox">
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                        width="400"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </figure>
            </section> */}

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>

                <form className="form" ref={formRef} onSubmit={handleSendEmail}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Full name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    <textarea
                        name="text"
                        className="form-input"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button className="form-btn" type="submit">
                        <FaPaperPlane />
                        <span>{!loading ? "Send Message" : "Sending ..."}</span>
                    </button>
                </form>
            </section>
            <Toaster />
        </article>
    );
};

export default Contact;
