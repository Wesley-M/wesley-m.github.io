import React from 'react'

import styles from './ContactSection.module.css'

function ContactSection() {
    return (
        <section className={styles.ContactSection} id="contact">
            <h1 className="sectionTitle">Contact me</h1>
            <form className={styles.contactForm}>
                <label>
                    <p>Name:</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>Email:</p>
                    <input type="email" name="email" />
                </label>
                <label>
                    <p>Subject:</p>
                    <input type="subject" name="subject" />
                </label>
                <label>
                    <p>Message:</p>
                    <textarea />
                </label>
                <button>SEND MESSAGE</button>
            </form>
        </section>
    )
}

export default ContactSection