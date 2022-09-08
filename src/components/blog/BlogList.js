import { Box, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import posts from "./posts/metadata";

export function BlogList() {
  const Wrapper = styled(Box)(({ theme }) => ({
    marginBottom: '5em',
    padding: '1.5em',
    top: 0,
    width: '80%',
    margin: '0 10%'
  }))

  return (
      <>
        <Navbar/>
        <Wrapper>
          <Box>
            <h1 className="sectionTitle">Blog</h1>
          </Box>
          <Stack>
            {Object.keys(posts['content']).map((post) => (
                <Link
                    key={post}
                    to={`/blog/${post}`}
                >
                  {posts['content'][post].title}
                </Link>
            ))}
          </Stack>
        </Wrapper>
      </>
  );
}