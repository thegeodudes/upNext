// http://localhost:3000/api/shows/find/?search=${searchTerm}
const utilFuncs = {};

utilFuncs.getResults = async(showTitle, setSearchResult) => {
  try {
    const results = await fetch('/api/shows/find/?search=' + showTitle);
    const jsonified = await results.json();
    console.log(jsonified);
    setSearchResult(jsonified);
  } catch (err) {
    console.log('ERROR', err);
  }
};

utilFuncs.getFavorites = async(userId) => {
  try{
    const results = await fetch('/api/shows/myshows', {
      method: 'POST',
      body: json.stringify({ userId: 1 }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log('ERROR', err);
  }
};

utilFuncs.addFavorite = async(showId, userId) => {
  try{
    const results = await fetch('/api/shows/addfavorite', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        showId: 1399,
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
  try{
    const results = await fetch('/api/shows/removefavorite', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        showId: 1399,
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

export default utilFuncs;
// got it