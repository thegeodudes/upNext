// http://localhost:3000/api/shows/find/?search=${searchTerm}
//const utilFuncs = {};

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

utilFuncs.signup = async(username, password, setLoginForDispatch, setUserIdForDispatch, setSignupError) => {
  try {
    const data = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const success = await data.json();
    if (typeof success === 'number') {
      setLoginForDispatch(true);
      setUserIdForDispatch(success);
      // set userId state to the response
    } else {
      setSignupError(true);
    }
  } catch (err) {
    console.log('ERROR', err)
  }
};

utilFuncs.login = async(username, password, setLoginForDispatch, setUserIdForDispatch, setLoginError) => {
  try {
    const data = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const success = await data.json();
    if (success > 0) {
      setLoginForDispatch(true);
      setUserIdForDispatch(success);
      // set userId state to the response
    }
  } catch (err) {
    setLoginError(true);
    console.log('ERROR', err);
  }
}

// export default utilFuncs;
// got it
export const { getResults, getFavorites, addFavorite, removeFav } = utilFuncs;
