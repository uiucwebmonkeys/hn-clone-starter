const PREFIX = 'https://hacker-news.firebaseio.com/v0';

async function getStory(id) {
  const route = `${PREFIX}/item/${id}.json`;

  const response = await fetch(route);
  return response.json();
}

async function getTopStoriesRange(start, end) {
  const route = `${PREFIX}/topstories.json`;
  
  const response = await fetch(route);
  const body = await response.json();

  const reqs = body.slice(start, end).map(getStory);
  return Promise.all(reqs);
};

async function getTopStories() {
  return getTopStoriesRange(0, 30);
}

export { getTopStories };
