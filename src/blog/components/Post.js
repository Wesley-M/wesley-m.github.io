import {useState, useEffect} from "react"
import {Box, Skeleton} from "@mui/material";
import {useParams} from "react-router-dom";
import posts from '../posts/metadata.json';
import {Markdown} from "./Markdown";
import {convertTimestamp} from "../utils/time";
import {AboutMe} from "./AboutMe";
import Giscus from "@giscus/react";
import {PostHeader, PostWrapper} from "./Post.styles";

const Post = () => {
  let params = useParams();

  const [postContent, setPostcontent] = useState("")
  const post_metadata = posts['content'][params.id];

  useEffect(() => {
    import(`../posts/${post_metadata.path}`)
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [params.id]);

  return (
    <PostWrapper>
      {postContent !== '' ? (
        <>
          <PostHeader>
            <span style={{fontStyle: 'italic'}}>Published at</span>
            {" " + convertTimestamp(post_metadata['last_updated'])}
          </PostHeader>

          <Markdown content={postContent}/>

          <AboutMe/>

          <Box sx={{marginTop: "2em"}}>
            <Giscus
              id="comments"
              repo="Wesley-M/wesley-m.github.io"
              repoId="MDEwOlJlcG9zaXRvcnkxOTU2OTQ1NjA="
              category="Comments"
              categoryId="DIC_kwDOC6oP4M4CUeul"
              mapping="url"
              term="Welcome to @giscus/react component!"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="light"
              lang="en"
              loading="lazy"
            />
          </Box>
        </>
      ) : (
        <>
          <Skeleton width="30%"/>
          <Skeleton sx={{ marginBottom: "2em" }} variant="text" height="12vh" width="90%"/>
          <SkeletonParagraph lines={5}/>
          <SkeletonParagraph lines={5}/>
          <Skeleton variant="rectangular" height="20vh"/>
          <Skeleton sx={{ marginTop: "2em" }}  variant="rectangular" height="40vh"/>
        </>
      )}
    </PostWrapper>
  )
}

const SkeletonParagraph = ({lines}) => {
  const emptyArray = Array.apply(null, Array(lines));
  return (
    <Box sx={{ margin: "1em 0" }}>
      {emptyArray.map((line, idx) => (
        <Skeleton key={idx} variant="text" width={idx === lines - 1 ? "90%" : "100%"}/>
      ))}
    </Box>
  )
}

export default Post;