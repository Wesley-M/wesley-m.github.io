import {Box, Grid, Stack, styled} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import posts from "./posts/metadata";
import Card from "../../shared/Card";
import BottomMenu from "../navigation/BottomMenu";
import {Wrapper} from "../../shared/Wrapper";

export function BlogList() {
  return (
      <>
        <Navbar/>
        <Wrapper>
          <Box>
            <h1 className="sectionTitle">Blog</h1>
          </Box>
          <Grid container spacing={{xs: 1, sm: 1, md: 10, lg: 10, xl: 10}}>
            {Object.keys(posts['content']).map((post) => (
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                >
                  <Link
                      key={post}
                      to={`/blog/${post}`}
                      style={{ textDecoration: "none" }}
                  >
                    <Card
                        imgSrc={posts['content'][post].cover}
                        title={posts['content'][post].title}
                        description={posts['content'][post].description}
                        tags={posts['content'][post].tags.split(',')}
                        hideAction
                    />
                  </Link>
                </Grid>
            ))}
          </Grid>
        </Wrapper>
        <BottomMenu/>
      </>
  );
}