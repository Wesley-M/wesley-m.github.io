import {Grid, Stack, styled, Typography} from "@mui/material";
import {convertTimestamp} from "../utils/time";

export const PostPreview = (props) => {

  const {
    imgSrc,
    title,
    publishedAt,
    readtime,
    description,
    tags
  } = props;

  const CardTitle = styled(Typography)(() => ({
    fontSize: '1.3em',
    fontFamily: 'Bree Serif, serif',
    color: '#282828',
    opacity: 0.95
  }));

  const PublishedAt = styled(Typography)(() => ({
    fontSize: '0.85em',
    marginTop: '0.2em',
    color: '#282828',
    opacity: 0.45
  }));

  const CardImage = styled('img')(() => ({
    width: '100%',
    height: '10em',
    borderRadius: '0.2em'
  }));

  const Description = styled(Typography)(() => ({
    fontSize: '0.95em',
    fontFamily: 'Nunito, sans-serif',
    opacity: 0.7,
    margin: '1em 0',
    color: '#282828'
  }));

  const Tag = styled(Typography)(() => ({
    padding: '0.1em 0.6em',
    fontWeight: 'bold',
    fontSize: '0.9em',
    borderRadius: '0.2em',
    fontFamily: 'Nunito, sans-serif',
    color: '#F1F1F1',
    backgroundColor: '#1D7FC6'
  }));

  function arrayToTags(tags) {
    return tags.map(tag => ( <Tag key={tag}>#{tag}</Tag> ));
  }

  return (
    <Grid container
          sx={{
            borderRadius: '0.25em',
            border: '2px solid #28282810'
          }}
    >
      <Grid item sx={{ padding: '1em' }} xs={12} sm={3} md={3}>
        <CardImage src={imgSrc} loading="lazy" alt=""/>
      </Grid>

      <Grid item sx={{ padding: "1em 1em"  }} xs={12} sm={9} md={9}>
        <CardTitle>{title}</CardTitle>
        <PublishedAt>{convertTimestamp(publishedAt)} · {readtime} read</PublishedAt>
        <Description>
          {description.substring(0, 120)}...
        </Description>
        <Stack direction="row" gap={1}>
          {arrayToTags(tags)}
        </Stack>
      </Grid>
    </Grid>
  )
}