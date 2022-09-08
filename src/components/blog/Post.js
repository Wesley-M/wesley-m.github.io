import {useState, useEffect} from "react"
import Markdown from "markdown-to-jsx"
import Navbar from "../navigation/Navbar";
import {Box, styled} from "@mui/material";
import Code from "./Code"
import {useParams} from "react-router-dom";
import posts from './posts/metadata.json';

const Post = () => {
  const Wrapper = styled(Box)(({ theme }) => ({
    marginBottom: '5em',
    padding: '1.5em',
    top: 0,
    width: '80%',
    margin: '0 10%'
  }))

  const [postContent, setPostcontent] = useState('')
  const [isDark, setIsDark] = useState(true)

  let params = useParams();

  useEffect(() => {
    import(`./posts/${posts['content'][params.id].path}`)
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
            <Markdown
                options={{
                  overrides: {
                    Code: {
                      component: Code,
                      props: {
                        isDark,
                        setIsDark
                      }
                    }
                  }
                }}
            >
              {postContent}
            </Markdown>
          </Box>
        </Wrapper>
      </>
  )
}

export default Post;