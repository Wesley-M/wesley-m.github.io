import { Grid } from '@mui/material';
import * as React from 'react';
import { Wrapper } from '../../../shared/components/wrapper';
import { WorkCard } from './components/work-card';
import { SectionTitle } from '../../components/section-title';
import content from '../../assets/content/works.json';
import { useTranslation } from 'react-i18next';

export function WorkSection () {
  const cards = content.works.map((work, idx) => <WorkCard key={idx} work={work} />);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SectionTitle>{t('portfolio.works.title')}</SectionTitle>
      <Grid container spacing={1}>
        {cards}
      </Grid>
    </Wrapper>
  );
}
