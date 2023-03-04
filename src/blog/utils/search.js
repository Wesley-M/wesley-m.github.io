import fuzzysort from "fuzzysort";

/**
 * Searches for posts that match with a query. The fields and penalties 
 * are specified in the 'by' clause. And it has a threshold for scores.
*/
export const searchByQuery = (posts, query, by, threshold = -500) => {
  if (query == "") {
    return posts;
  }

  /**
   * Default fields to search together with their penalties
   */
  const fieldsToSearch = by ?? { 
    'title': { 
      penalty: 0 
    } , 
    'description': {
      penalty: -100
    }
  }

  const keys = Object.keys(fieldsToSearch);
  
  /**
   * Receives a key_score object and a penalty, returns the document's
   * real score.
  */
  const getRealScore = (key, penalty = 0, def=-1000) => {
    return key ? key.score - penalty : def;
  } 

  /**
   * Function that implements score penalties.
  */
  const scoreFn = (scoresByKey) => {
    return Math.max(...scoresByKey.map((key, idx) => {
      const searchKey = fieldsToSearch[keys[idx]];
      return getRealScore(key, searchKey.penalty);
    }));
  }
  
  return fuzzysort.go(query, posts, {keys, scoreFn, threshold}).map(r => r.obj);
}

/**
 * Searches for posts that match with an array of tags.
*/
export const searchByTag = (posts, tags=[]) => {
  if (tags.length == 0) {
    return posts;
  }

  // Filter posts that contain any of the tags
  return posts.filter(post => tags.some((tag) => {
    return post.tags.includes(tag);
  }));
}

/**
 * It returns all distinct tags by number of occurrence
 * */
export const tagsByOccurrence = (posts) => {
  const allTags = Object.keys(posts).reduce((accTags, postId) => {
    const tags = posts[postId]['tags'].split(', ');
    return accTags.concat(tags)
  }, []);

  const occurrences = allTags.reduce((map, tag) => {
    map[tag] = (tag in map) ? map[tag] + 1 : 1;
    return map;
  }, {});

  // Converts into tags array and sort by number of occurrences
  return Object.keys(occurrences).sort(function (a, b) {
    return -(occurrences[a] - occurrences[b]);
  });
}