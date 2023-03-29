import WorkCard from './WorkCard'

import {Stack, Typography} from "@mui/material";
import {Wrapper} from "../layout/Wrapper";

import content from "../../content/works.json"
import {Section} from "./WorkSection.styles";

function WorkSection() {

    const cards = content.works.map((work, idx) => (
      <WorkCard
          key={idx}
          img={work.image}
          title={work.title}
          description={work.description}
          link={work.link}
      />
    ))

    return (
        <Wrapper>
            <Section>Projects</Section>
            <Stack direction="column">
                {cards}
            </Stack>
        </Wrapper>
    )
}

export default WorkSection