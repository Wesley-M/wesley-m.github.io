import { useContext } from 'react'

import WorkCard from './WorkCard'

import { ContentContext } from '../../contexts/ContentContext'
import { ThemeContext } from '../../contexts/ThemeContext'
import {Grid} from "@mui/material";

function WorkSection() {

    const {theme} = useContext(ThemeContext)
    const {content} = useContext(ContentContext)

    const cards = content.works.cards.map(work => (
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={3}
        >
          <WorkCard
              key={work.id}
              img={work.image}
              title={work.title}
              description={work.description}
              tags={work.tags}
          />
        </Grid>
    ))

    return (
        <section id="works">
            <h1 className="sectionTitle">{content.works.sectionTitle}</h1>
            <Grid container spacing={{xs: 1, sm: 1, md: 10, lg: 10, xl: 10}}>
              {cards}
            </Grid>
        </section>
    )
}

export default WorkSection