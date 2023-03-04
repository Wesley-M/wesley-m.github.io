import { Grid, InputBase, Stack, styled, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { searchByQuery, searchByTag, tagsByOccurrence } from "../utils/search";

export const FilterBar = (props) => {
  const {
    metadata,
    handleFilteredMetadata,
    handleHasActiveFilters
  } = props;
  
  /**
   * Current query being used
   */
  const [query, setQuery] = useState("");

  /**
   * Currently selected tags
  */
  const [selectedTags, setSelectedTags] = useState([]);

  /**
   * Posts considered when searching
  */
  const [postsToSearch, setPostsToSearch] = useState(() => Object.values(metadata))

  /**
   * Stores all tags to filter by
   */
  const allTags = useMemo(() => tagsByOccurrence(Object.values(metadata)), []);

  /**
   * Returns true if tag is selected
   */
  const isTagSelected = (tag) => {
    return selectedTags.includes(tag);
  }

  /**
   * Handles the selection of tags
   */
  const handleSelectedTags = (tag) => {
    let newTags = [];
    
    if (selectedTags.includes(tag)) {
      newTags = (selectedTags.filter(t => t != tag));
    } else {
      newTags = ([...selectedTags, tag]);
    }

    const filteredByTags = searchByTag(Object.values(metadata), newTags);
    
    setPostsToSearch(filteredByTags);
    setSelectedTags(newTags);
  }

  /**
   * Debounced query change
  */
  const handleQueryChange = useCallback(debounce((q) => setQuery(q), 200), []);

  /**
   * Conducting the metadata search and setting active filter status
  */
  useEffect(() => {
    let results = [];

    if (query !== "" || selectedTags.length > 0) {
      results = searchByQuery(postsToSearch, query);
      handleHasActiveFilters(true);
    } else {
      handleHasActiveFilters(false);
    }

    handleFilteredMetadata(results);
  }, [query, selectedTags]);

  return (
    <Stack direction="column">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a topic you like…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => handleQueryChange(e.target.value)}
        />
      </Search>

      <Grid container
        sx={{
          marginTop: '0.5em'
        }}
      >
        {allTags.map(tag => (
          <Grid item
            sx={{
              padding: '0 0.4em',
              margin: '0.2em',
              borderRadius: '0.2em',
              border: `2px solid ${isTagSelected(tag) ? '#1D7FC6' : '#28282820'}`,
              fontWeight: 'bold',
              '&:hover': {
                cursor: 'pointer'
              },
              backgroundColor: isTagSelected(tag) ? '#1D7FC6' : 'auto'
            }}
            onClick={() => handleSelectedTags(tag)}
          >
            <Typography sx={{ color: isTagSelected(tag) ? 'white' : '#28282850' }}>#{tag}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  '& .MuiSvgIcon-root': {
    color: '#1D7FC6'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderRadius: theme.shape.borderRadius,
  border: '2px solid #28282820',
  '&.Mui-focused': {
    border: '2px solid #1D7FC6',
  },
  '&.MuiInputBase-root': {
    width: '100%',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: 'inherit',
  },
}));
