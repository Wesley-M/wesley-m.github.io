import {Grid, Stack} from "@mui/material";
import ReactTimeAgo from 'react-time-ago';
import {CardTitle, Description, PreviewContainer, Tag, UpdatedAt} from "./PostPreview.styles";
import {POST_PREVIEW_DESCRIPTION} from "../config/config";

export const PostPreview = (props) => {

  const {
    title,
    updatedAt,
    readtime,
    description,
    tags
  } = props;

  function arrayToTags(tags) {
    return tags.map(tag => (<Tag key={tag}>#{tag}</Tag>));
  }

  return (
    <PreviewContainer container>
      <Grid item sx={{padding: "1em 1em"}} xs={12} sm={10}>
        <CardTitle>{title}</CardTitle>
        <UpdatedAt>
          Last updated <ReactTimeAgo date={updatedAt * 1000} locale="en-US"/> · {readtime} read
        </UpdatedAt>
        <Description>
          {description.length < POST_PREVIEW_DESCRIPTION ? (
            description
          ) : (
            description.substring(0, POST_PREVIEW_DESCRIPTION) + "..."
          )}
        </Description>
        <Stack direction="row" gap={1}>
          {arrayToTags(tags)}
        </Stack>
      </Grid>
    </PreviewContainer>
  )
}