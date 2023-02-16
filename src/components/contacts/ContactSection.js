import {useContext} from 'react'

import {ContentContext} from '../../contexts/ContentContext'
import {ThemeContext} from '../../contexts/ThemeContext'
import styles from './ContactSection.module.css'
import {Box, Button, Grid, Stack, styled, TextField} from "@mui/material";
import {Wrapper} from "../../shared/Wrapper";

function ContactSection() {

  const {theme} = useContext(ThemeContext)
  const {content} = useContext(ContentContext)

  const ContactTextField = styled(TextField)({
    backgroundColor: "#eee",
    borderRadius: "0.2em",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
      }
    }
  });

  const Label = styled('p')(() => ({
    color: 'white'
  }));

  return (
      <>
        <a className='anchor' id='contact'></a>
        <Grid container>
          <Grid item lg={7} sx={{ backgroundColor: '#282828' }}>
            <Wrapper>
              <h1 className="sectionTitle">{content.contacts.sectionTitle}</h1>
              <form className={styles.contactForm}>
                <label>
                  <Label>{content.contacts.inputs.name}:</Label>
                  <ContactTextField
                      sx={{ input: { backgroundColor: 'white' } }}
                      placeholder="Poderia me informar seu nome ?"
                      name="name"
                      variant="outlined"
                      fullWidth
                  />
                </label>
                <label>
                  <Label>{content.contacts.inputs.email}:</Label>
                  <ContactTextField
                      placeholder="Vou precisar do seu email"
                      name="email"
                      variant="outlined"
                      fullWidth
                  />
                </label>
                <label>
                  <Label>{content.contacts.inputs.subject}:</Label>
                  <ContactTextField
                      placeholder="Qual o assunto ?"
                      name="subject"
                      variant="outlined"
                      fullWidth
                  />
                </label>
                <label>
                  <Label>{content.contacts.inputs.message}:</Label>
                  <ContactTextField
                      placeholder="Sua mensagem vai aqui"
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
            </Wrapper>
          </Grid>
          <Grid item lg={5}>
            Olá
          </Grid>
        </Grid>
      </>
  )
}

export default ContactSection