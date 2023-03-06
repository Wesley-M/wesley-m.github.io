import {Wrapper} from "../../shared/components/Wrapper";

import experiences from "../../content/experiences.json";
import {
  ExperienceContainer,
  Section,
  Tag,
  Experience,
  Language,
  Tags, SubSection,
} from "./ExperienceSection.styles";
import {Crown} from "./Crown";

function ExperienceSection() {
  return (
    <ExperienceContainer id="experience">
      <Wrapper>
        <Section>Experience</Section>

        {Object.keys(experiences).map((ex) => (
          <>
            <SubSection>#{ex}</SubSection>
            <Tags>
              {experiences[ex].map(tag => (
                <Tag key={tag.name}>
                  <Language>{tag.name}</Language>
                  <Crown type={tag.type}/>
                  <Experience>{tag.ex}</Experience>
                </Tag>
              ))}
            </Tags>
          </>
        ))}
      </Wrapper>
    </ExperienceContainer>
  )
}

export default ExperienceSection