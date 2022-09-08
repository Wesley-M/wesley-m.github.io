import { useContext } from "react"

import { ContentContext } from '../../contexts/ContentContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import {Box, Button, Stack, styled, Typography} from "@mui/material";

const images = require.context('../../static/images', true)

function WorkCard({ img, title, description, tags }) {

    const Card = styled(Box)(() => ({
        width: '100%',
        margin: '3em 0',
        borderRadius: '1em',
        boxShadow: '-1px 1px 5px 1px lightgray'
    }));

    const CardTitle = styled(Typography)(() => ({
        fontSize: '1.2em',
        fontFamily: 'Bree Serif, serif',
        color: '#282828',
        opacity: 0.95
    }));

    const CardInfo = styled(Box)(() => ({
        width: 'auto',
        height: 'auto',
        position: 'relative',
        margin: '0 1em',
        padding: '1.5em 0',
        fontFamily: 'Nunito, sans-serif'
    }));

    const CardImage = styled('img')(() => ({
        width: '100%',
        height: '25vh',
        borderRadius: '0.2em'
    }));

    const Description = styled(Typography)(() => ({
        fontSize: '0.95em',
        fontFamily: 'Nunito, sans-serif',
        opacity: 0.7,
        margin: '1em 0'
    }));

    const Tag = styled(Typography)(() => ({
        padding: '0.1em 0.4em',
        fontWeight: 'bold',
        fontSize: '0.9em',
        borderRadius: '0.3em',
        color: 'white',
        backgroundColor: '#E1372C'
    }));

    const VisitLink = styled(Button)(() => ({
        backgroundColor: '#282828',
        opacity: 0.8,
        color: 'white',
        marginTop: '1.5em',
        textTransform: 'capitalize'
    }));
    
    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    function arrayToTags(tags) {
        return tags.map(tag => ( <Tag key={tag}>#{tag}</Tag> ));
    }

    return (
        <Card>
            <CardImage src="https://picsum.photos/300/300" alt=""/>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
                <Description>
                    {description.substring(0, 120)}...
                </Description>
                <Stack direction="row" gap={1}>
                    {arrayToTags(tags)}
                </Stack>
                <VisitLink
                    variant="contained"
                    fullWidth
                >
                    {content.works["visit-btn"]}
                </VisitLink>
            </CardInfo>
        </Card>
    )
}

export default WorkCard