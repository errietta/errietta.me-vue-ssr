const cache = require('./cache');

const Parser = require('rss-parser');

const getFeed = async () => {
  if (!cache.posts || cache.posts.time <= new Date().getTime() - 60 * 60 * 24 * 1000) {
    // eslint-disable-next-line
    console.log('fetching new');

    const start = new Date().getTime();

    const parser = new Parser();
    cache.posts = {
      value: await parser.parseURL('https://www.errietta.me/blog/feed'),
      time: new Date().getTime(),
    };

    // eslint-disable-next-line
    console.log(`took ${new Date().getTime() - start} ms.`);
  }

  return cache.posts.value;
}

module.exports = { getFeed };
