import {Box, Grid, Stack, styled, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import posts from "./posts/metadata";
import {Wrapper} from "../shared/Wrapper";
import {convertTimestamp} from "./utils/time";

function PostPreview(props) {

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
    height: '200px',
    borderRadius: '0.2em',
    filter: 'grayscale(0.5)',
    transition: 'filter 150ms ease-in-out',
    "&:hover": {
      filter: 'grayscale(0)'
    }
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
    <Grid container sx={{
      borderRadius: '0.25em',
      boxShadow: '-1px 1px 2px 1px #00000010',
      transition: 'all 250ms ease',
      "&:hover": {
        boxShadow: '-1px 1px 6px 1px #00000025'
      }
    }}>
      <Grid item sx={{ padding: '1em' }} xs={12} sm={4} md={2}>
        <CardImage src={imgSrc} alt=""/>
      </Grid>

      <Grid item sx={{ padding: "1em 1em" }} xs={12} sm={8} md={10}>
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

export function BlogList() {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Box>
          <h1 className="sectionTitle">Blog</h1>
        </Box>
        <Stack direction="column" gap={2} xs={12}>
          {Object.keys(posts['content']).map((post) => (
            <Link
              key={post}
              to={`/blog/${post}`}
              style={{ textDecoration: "none" }}
            >
              <PostPreview
                imgSrc={posts['content'][post].cover}
                title={posts['content'][post].title}
                description={posts['content'][post].description}
                tags={posts['content'][post].tags.split(',')}
                publishedAt={posts['content'][post].creation_date}
                readtime={posts['content'][post].readtime}
              />
            </Link>
          ))}
        </Stack>
      </Wrapper>
    </>
  );
}