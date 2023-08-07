import { useState } from 'react';

/**
 * A hook to manage tags
 * */
export const useTags = (tags = [], initialTags = [], actionOnSelection = (newTags) => {}) => {
  /**
   * Currently selected tags
   */
  const [selectedTags, setSelectedTags] = useState(initialTags);

  const isTagSelected = (tag) => {
    return selectedTags.includes(tag);
  };

  /**
   * Handles tag selection and performs an action based on the new tags
   * */
  const handleTagsChange = (tag) => {
    let newTags = [];

    if (selectedTags.includes(tag)) {
      newTags = selectedTags.filter((t) => t !== tag);
    } else {
      newTags = [...selectedTags, tag];
    }

    setSelectedTags(newTags);
    actionOnSelection(newTags);
  };

  return [selectedTags, isTagSelected, handleTagsChange];
};
