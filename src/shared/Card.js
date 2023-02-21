import {Box, Button, Stack, styled, Typography} from "@mui/material";

function Card(props) {

  const {
    imgSrc,
    title,
    description,
    tags
  } = props;

  const CardBox = styled(Box)(() => ({
    width: '100%',
    borderRadius: '1em',
    boxShadow: '-1px 1px 5px 1px lightgray',
    height: '400px'
  }));

  const CardTitle = styled(Typography)(() => ({
    fontSize: '1.2em',
    fontFamily: 'Bree Serif, serif',
    color: '#282828',
    opacity: 0.95
  }));

  const CardInfo = styled(Box)(() => ({
    width: 'auto',
    height: 'auto',
    position: 'relative',
    margin: '0 1em',
    padding: '1.5em 0',
    fontFamily: 'Nunito, sans-serif'
  }));

  const CardImage = styled('img')(() => ({
    width: '100%',
    height: '25vh',
    borderRadius: '0.4em 0.4em 0 0',
    filter: 'grayscale(0.7)',
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
    borderRadius: '1em',
    color: '#F1F1F1',
    backgroundColor: '#9236EFDD'
  }));

  function arrayToTags(tags) {
    return tags.map(tag => ( <Tag key={tag}>#{tag}</Tag> ));
  }

  return (
      <CardBox>
        <CardImage src={imgSrc} alt=""/>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <Description>
            {description.substring(0, 120)}...
          </Description>
          <Stack direction="row" gap={1}>
            {arrayToTags(tags)}
          </Stack>
        </CardInfo>
      </CardBox>
  )
}

export default Card