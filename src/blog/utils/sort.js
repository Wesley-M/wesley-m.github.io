/**
 * Sort array of posts by a property. If it is a number,
 * we sort in descendent order, if it is a string, in
 * ascending order.
 *
 * TODO: Make it accept ASC/DESC directives
 * */
export const sortBy = (posts, attr = 'last_updated') => {
    if (posts.length === 0) return [];

    const firstEl = posts[0];

    if (!(attr in firstEl)) return [];

    if (typeof(firstEl[attr]) === "number") {
        return posts.sort((a, b) => b[attr] - a[attr]);
    } else if (typeof(firstEl[attr]) === "string") {
        return posts.sort((a, b) => a[attr].localeCompare(b[attr]));
    }

    return [];
}