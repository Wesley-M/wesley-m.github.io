import {useState, useEffect} from "react"
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import posts from '../posts/metadata.json';
import {Markdown} from "./Markdown";
import {convertTimestamp} from "../utils/time";
import {AboutMe} from "./AboutMe";
import Giscus from "@giscus/react";
import {PostHeader, PostWrapper} from "./Post.styles";

const Post = () => {
  let params = useParams();

  const [postContent, setPostcontent] = useState('')
  const post_metadata = posts['content'][params.id];

  useEffect(() => {
    import(`../posts/${post_metadata.path}`)
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [params.id])

  return (
    <PostWrapper>
      {postContent !== '' ? (
        <PostHeader>
          <span style={{fontStyle: 'italic'}}>Published at</span>
          {" " + convertTimestamp(post_metadata['last_updated'])}
        </PostHeader>
      ) : null}

      <Markdown content={postContent}/>

      {postContent !== '' ? (
        <AboutMe/>
      ) : null}

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
    </PostWrapper>
  )
}

export default Post;