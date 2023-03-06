import {Stack, styled} from "@mui/material";
import {Link} from "react-router-dom";
import {PostPreview} from "./components/PostPreview";
import {FilterBar} from "./components/FilterBar";
import {useMemo, useState} from "react";
import {sortBy} from "./utils/sort";
import {BlogListContainer} from "./BlogList.styles";

export function BlogList({ posts }) {

  const [postsToShow, setPostsToShow] = useState([]);
  const [hasActiveFilter, setHasActiveFilter] = useState(false);

  /**
   * All the posts passed to blog list sorted
   * */
  const allPosts = useMemo(() => sortBy(Object.values(posts['content'])), []);

  const handlePostsChange = (posts) => {
    setPostsToShow(sortBy(posts));
  }

  return (
    <BlogListContainer direction="column" gap={2}>
      <FilterBar
        metadata={posts['content']}
        handleFilteredPosts={handlePostsChange}
        handleHasActiveFilters={setHasActiveFilter}
      />

      {(hasActiveFilter ? postsToShow : allPosts).map((post) => (
        <Link
          key={posts['index'][post.title]}
          to={`/blog/${posts['index'][post.title]}`}
          style={{textDecoration: "none"}}
        >
          <PostPreview
            title={post.title}
            description={post.description}
            tags={post.tags.split(', ')}
            updatedAt={post.last_updated}
            readtime={post.readtime}
          />
        </Link>
      ))}
    </BlogListContainer>
  );
}
