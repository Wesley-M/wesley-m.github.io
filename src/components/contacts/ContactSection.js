import { useContext } from 'react'

/** @jsx jsx */
import { jsx } from '@emotion/core'

import styles from './ContactSection.module.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {ContentContext} from '../../contexts/ContentContext'
import {addOpacity} from '../../utils/styles'

function ContactSection() {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    return (
        <section className={styles.ContactSection} id="contact">
            <h1 className="sectionTitle">{content.contacts.sectionTitle}</h1>
            <form className={styles.contactForm}>
                <label>
                    <p>{content.contacts.inputs.name}:</p>
                    <input type="text" name="name" css={inlineStyles(theme).input} />
                </label>
                <label>
                    <p>{content.contacts.inputs.email}:</p>
                    <input type="email" name="email" css={inlineStyles(theme).input} />
                </label>
                <label>
                    <p>{content.contacts.inputs.subject}:</p>
                    <input type="subject" name="subject" css={inlineStyles(theme).input} />
                </label>
                <label>
                    <p>{content.contacts.inputs.message}:</p>
                    <textarea css={inlineStyles(theme).input} />
                </label>
                <button css={inlineStyles(theme).button}>{content.contacts.inputs.submit}</button>
            </form>
        </section>
    )
}

const inlineStyles = (theme) => {
    return {
        input: {
            border: `2px solid ${addOpacity(theme.light, 60)}`,
            '&:focus': {
                border: `3px solid ${addOpacity(theme.dark, 60)}`
            }
        },
        button: {
            backgroundColor: theme.headerForeColor,
            color: theme.contentForeColor
        }
    }
}

export default ContactSection