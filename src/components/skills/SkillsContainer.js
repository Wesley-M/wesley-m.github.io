import { useContext } from "react"

import { ThemeContext } from '../../contexts/ThemeContext'

import styles from "./SkillsContainer.module.css"
import {Box, Grid, Stack, styled, Typography} from "@mui/material";

const imagesContext = require.context('../../static/icons/skills', true)

function SkillsContainer({ type, skills }) {

    const {theme} = useContext(ThemeContext)

    const items = skills.map(src => (
        <img src={imagesContext(`./${src}`)} style={{ margin: '1em 1em 0 0' }} alt=""/>
    ))

    const Container = styled(Box)(() => ({
      margin: '2em 0',
      minWidth: '300px'
    }));

    const SkillType = styled(Typography)(() => ({
      fontFamily: 'Nunito, sans-serif',
      fontWeight: 800,
      fontSize: '1.2em',
      marginTop: '1.5em',
      marginBottom: '1em',
      color: '#E1372C'
    }));

    return (
        <Container>
            <SkillType>{type}</SkillType>
            <Box>
                {items}
            </Box>
        </Container>
    )
}

export default SkillsContainer