/* eslint-disable no-console */

import { getFeed } from 'feed-api';

export const fetchPosts = async () => {
  try {
    const feed = await getFeed();

    return feed.items.map(item => ({
      title: item.title,
      content: item.content,
      link: item.link,
    }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
}
