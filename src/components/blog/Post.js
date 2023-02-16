import {useState, useEffect} from "react"
import Navbar from "../navigation/Navbar";
import {Box, styled, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import posts from './posts/metadata.json';
import {Markdown} from "../../shared/Markdown";
import {convertTimestamp} from "../../utils/time";
import {AboutMe} from "./components/AboutMe";
import {Wrapper} from "../../shared/Wrapper";

const Post = () => {
  const Header = styled(Typography)(() => ({
    color: '#282828',
    opacity: 0.7,
    fontSize: '0.9em',
    marginBottom: '-1.5em'
  }));

  let params = useParams();

  const [postContent, setPostcontent] = useState('')
  const post_metadata = posts['content'][params.id];

  useEffect(() => {
    import(`./posts/${post_metadata.path}`)
        .then(res =>
            fetch(res.default)
                .then(response => response.text())
                .then(response => setPostcontent(response))
                .catch(err => console.log(err))
        )
  }, [params.id])

  return (
      <>
        <Navbar/>
        <Wrapper>
          <Box
              sx={{
                marginTop: '4em',
                fontFamily: 'Nunito, sans-serif'
              }}
          >
            <Header>
              <span style={{ fontStyle: 'italic' }}>
                Published at
              </span>
              {" " + convertTimestamp(post_metadata['creation_date'])}
            </Header>

            <Markdown content={postContent} />

            <AboutMe/>
          </Box>
        </Wrapper>
      </>
  )
}

export default Post;