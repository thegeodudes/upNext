const utilFuncs = {};

utilFuncs.getResults = async (searchString) => {
  try {
    const results = await fetch('/api/shows/find/?search=' + searchString);
    const jsonified = await results.json();
    console.log('is this a promise', jsonified);
    return jsonified
  } catch (err) {
    console.log('ERROR', err);
  }
};

utilFuncs.getFavorites = async (userId) => {
  try {
    const results = await fetch('/api/shows/myshows', {
      method: 'POST',
      body: JSON.stringify({ userId }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await results.json();
  } catch (err) {
    console.log('ERROR', err);
  }
};

utilFuncs.addFavorite = async (showId, userId) => {
  try {
    console.log('hello');
    const results = await fetch('/api/shows/addfavorite', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        showId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log('ERROR', err);
  }
};

utilFuncs.removeFav = async(showId, userId) => {
  try {
    const results = await fetch('/api/shows/removefavorite', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        showId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.log('ERROR', err);
  }
};

export const { getResults, getFavorites, addFavorite, removeFav } = utilFuncs;
