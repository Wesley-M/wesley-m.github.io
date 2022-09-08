import { useContext } from 'react'

import { ContentContext } from '../../contexts/ContentContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import { addOpacity } from '../../utils/styles'
import styles from './ContactSection.module.css'
import {Button, TextField} from "@mui/material";

function ContactSection() {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    return (
        <section id="contact">
            <h1 className="sectionTitle">{content.contacts.sectionTitle}</h1>
            <form className={styles.contactForm}>
                <label>
                    <p>{content.contacts.inputs.name}:</p>
                    <TextField
                        label="Poderia me informar seu nome ?"
                        name="name"
                        variant="outlined"
                        fullWidth
                    />
                </label>
                <label>
                    <p>{content.contacts.inputs.email}:</p>
                    <TextField
                        label="Vou precisar do seu email"
                        name="email"
                        variant="outlined"
                        fullWidth
                    />
                </label>
                <label>
                    <p>{content.contacts.inputs.subject}:</p>
                    <TextField
                        label="Qual o assunto ?"
                        name="subject"
                        variant="outlined"
                        fullWidth
                    />
                </label>
                <label>
                    <p>{content.contacts.inputs.message}:</p>
                    <TextField
                        label="Sua mensagem vai aqui"
                        variant="outlined"
                        name="message"
                        multiline
                        fullWidth
                    />
                </label>
                <Button type="submit">
                    {content.contacts.inputs.submit}
                </Button>
            </form>
        </section>
    )
}

export default ContactSection