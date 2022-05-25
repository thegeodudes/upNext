manualAddFavorite = async(showId) => {
  try{
    const results = await fetch('/api/shows/add', {
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