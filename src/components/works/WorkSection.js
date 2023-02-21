import WorkCard from './WorkCard'

import {Stack, Typography} from "@mui/material";
import {Wrapper} from "../../shared/Wrapper";

import content from "../content/works.json"

function WorkSection() {

    const cards = content.works.map((work, idx) => (
      <WorkCard
          key={idx}
          img={work.image}
          title={work.title}
          description={work.description}
      />
    ))

    return (
        <Wrapper>
            <Typography
                sx={{
                    marginTop: "0.5em",
                    color: "#282828",
                    fontSize: "1.8em",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 600
                }}
            >
                Works
            </Typography>

            <Stack direction="column">
                {cards}
            </Stack>
        </Wrapper>
    )
}

export default WorkSection