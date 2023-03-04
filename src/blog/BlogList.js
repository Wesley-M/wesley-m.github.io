import {Stack, styled} from "@mui/material";
import {Link} from "react-router-dom";
import {PostPreview} from "./components/PostPreview";
import {FilterBar} from "./components/FilterBar";
import {useState} from "react";

export function BlogList({ posts }) {

  const [metadataToShow, setMetadataToShow] = useState([]);
  const [hasActiveFilter, setHasActiveFilter] = useState(false);

  return (
    <BlogListContainer direction="column" gap={2}>
      <FilterBar
        metadata={posts['content']}
        handleFilteredMetadata={setMetadataToShow}
        handleHasActiveFilters={setHasActiveFilter}
      />

      {(hasActiveFilter ? metadataToShow : Object.values(posts['content'])).map((post) => (
        <Link
          key={posts['index'][post.title]}
          to={`/blog/${posts['index'][post.title]}`}
          style={{textDecoration: "none"}}
        >
          <PostPreview
            imgSrc={post.cover}
            title={post.title}
            description={post.description}
            tags={post.tags.split(',')}
            publishedAt={post.last_updated}
            readtime={post.readtime}
          />
        </Link>
      ))}
    </BlogListContainer>
  );
}

const BlogListContainer = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    width: '80%'
  },
  marginTop: "5em"
}));
