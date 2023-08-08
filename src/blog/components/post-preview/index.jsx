import { Grid, Stack } from '@mui/material';
import { CardTitle, Description, PreviewContainer, Tag, UpdatedAt } from './index.styles';
import React from 'react';
import TimeAgo from 'timeago-react';
import { useLanguageContext } from '../../../shared/components/language-switcher/provider';
import { useTranslation } from 'react-i18next';

// Maximum length of the post preview description
export const POST_PREVIEW_DESCRIPTION = 240;

export const PostPreview = (props) => {
  const { title, updatedAt, readtime, description, tags } = props;

  function arrayToTags (tags) {
    return tags.map((tag) => <Tag key={tag}>#{tag}</Tag>);
  }

  const { language } = useLanguageContext();
  const { t } = useTranslation();

  return (
    <PreviewContainer container>
      <Grid item sx={{ padding: '1em 1em' }} xs={12} sm={10}>
        <CardTitle>{title}</CardTitle>
        <UpdatedAt>
          {t('blog.post.lastUpdated')}&nbsp;
          <TimeAgo datetime={updatedAt * 1000} locale={language} />&nbsp;·&nbsp;
          {t('blog.post.readtime', { readtime })}
        </UpdatedAt>
        <Description>
          {description.length < POST_PREVIEW_DESCRIPTION ?
            description :
            description.substring(0, POST_PREVIEW_DESCRIPTION) + '...'}
        </Description>
        <Stack direction="row" gap={1}>
          {arrayToTags(tags)}
        </Stack>
      </Grid>
    </PreviewContainer>
  );
};
