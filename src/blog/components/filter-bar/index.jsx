import SearchIcon from '@mui/icons-material/Search';
import { Grid, Stack } from '@mui/material';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { searchByQuery, searchByTag, tagsByOccurrence } from '../../utils/search';
import { Search, SearchIconWrapper, StyledInputBase, Tag, TagContainer } from './index.styles';
import { useTags } from '../../../shared/hooks/useTags';
import { useTranslation } from 'react-i18next';

export const FilterBar = (props) => {
  const { metadata, handleFilteredPosts, handleHasActiveFilters } = props;
  const { t } = useTranslation();

  /**
   * Current query being used
   */
  const [query, setQuery] = useState('');

  /**
   * Stores all tags to filter by
   */
  const allTags = useMemo(() => tagsByOccurrence(Object.values(metadata)), []);

  /**
   * Posts considered when searching
   */
  const [postsToSearch, setPostsToSearch] = useState(() => Object.values(metadata));

  /**
   * Updates the posts that will be searched over when some tag changes
   */
  const onTagsChange = (newTags) => {
    const filteredByTags = searchByTag(Object.values(metadata), newTags);
    setPostsToSearch(filteredByTags);
  };

  /**
   * Currently selected tags
   */
  const [selectedTags, isTagSelected, handleTagsChange] = useTags(allTags, [], onTagsChange);

  /**
   * Debounced query change
   */
  const handleQueryChange = useCallback(
      debounce((q) => setQuery(q), 200),
      [],
  );

  /**
   * Conducting the metadata search and setting active filter status
   */
  useEffect(() => {
    let results = [];

    if (query !== '' || selectedTags.length > 0) {
      results = searchByQuery(postsToSearch, query);
      handleHasActiveFilters(true);
    } else {
      handleHasActiveFilters(false);
    }

    handleFilteredPosts(results);
  }, [query, selectedTags]);

  return (
    <Stack direction="column">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t('blog.search')}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => handleQueryChange(e.target.value)}
        />
      </Search>

      <Grid container sx={{ marginTop: '0.5em' }}>
        {allTags.map((tag) => (
          <TagContainer item key={tag} selected={isTagSelected(tag)} onClick={() => handleTagsChange(tag)}>
            <Tag selected={isTagSelected(tag)}>#{tag}</Tag>
          </TagContainer>
        ))}
      </Grid>
    </Stack>
  );
};
