import React, { useContext } from 'react'

import {ThemeContext} from '../../contexts/ThemeContext'
import {addOpacity} from '../../utils/styles'

import styles from './ContactSection.module.css'

/** @jsx jsx */
import { jsx } from '@emotion/core'

function ContactSection() {

    const {theme} = useContext(ThemeContext)

    return (
        <section className={styles.ContactSection} id="contact">
            <h1 className="sectionTitle">Contact me</h1>
            <form className={styles.contactForm}>
                <label>
                    <p>Name:</p>
                    <input type="text" name="name" css={getInputBorder(theme, 60)} />
                </label>
                <label>
                    <p>Email:</p>
                    <input type="email" name="email" css={getInputBorder(theme, 60)} />
                </label>
                <label>
                    <p>Subject:</p>
                    <input type="subject" name="subject" css={getInputBorder(theme, 60)} />
                </label>
                <label>
                    <p>Message:</p>
                    <textarea css={getInputBorder(theme, 60)} />
                </label>
                <button css={getButtonColors(theme)}>SEND MESSAGE</button>
            </form>
        </section>
    )
}

function getInputBorder(theme, opacity = 100) {
    return {
        border: `3px solid ${addOpacity(theme.light)}`
    }
}

function getButtonColors(theme, opacity = 100) {
    return {
        backgroundColor: addOpacity(theme.headerForeColor),
        color: addOpacity(theme.contentForeColor)
    }
}

export default ContactSection