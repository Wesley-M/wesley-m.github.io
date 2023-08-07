import React from 'react';
import { Language, Skill, SkillContainer, SubSection, Tag, Tags } from './index.styles';
import { Wrapper } from '../../../shared/components/wrapper';
import { SectionTitle } from '../../components/section-title';
import { Crown } from '../../components/crown';
import skills from '../../assets/content/skills.json';
import { useTranslation } from 'react-i18next';

export function SkillSection () {
  const { t } = useTranslation();

  return (
    <SkillContainer id="experience">
      <Wrapper>
        <SectionTitle>{t('portfolio.skills.title')}</SectionTitle>

        {Object.keys(skills).map((sk, index) => (
          <React.Fragment key={index}>
            <SubSection>#{t(`portfolio.skills.${sk}`)}</SubSection>
            <Tags>
              {skills[sk].map((tag) => (
                <Tag key={tag.name}>
                  <Crown type={tag.type} />
                  <Language>{tag.name}</Language>
                  <Skill>{tag.ex}</Skill>
                </Tag>
              ))}
            </Tags>
          </React.Fragment>
        ))}
      </Wrapper>
    </SkillContainer>
  );
}
