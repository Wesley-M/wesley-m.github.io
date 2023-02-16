import React, {useContext} from 'react'
import SkillsContainer from './SkillsContainer'
import styles from './SkillSection.module.css'

import {ContentContext} from '../../contexts/ContentContext'
import {Box, Stack} from "@mui/material";

function SkillSection() {

  const {content} = useContext(ContentContext)

  const skillsContainers = content.skills.cards.map(skill => (
      <SkillsContainer
          key={skill.id}
          type={skill.type}
          skills={skill.images}
      />
  ));

  return (
      <>
        <a className='anchor' id='skills'></a>
        <h1 className="sectionTitle">{content.skills.sectionTitle}</h1>
        <Box>
          {skillsContainers}
        </Box>
      </>
  )
}

export default SkillSection