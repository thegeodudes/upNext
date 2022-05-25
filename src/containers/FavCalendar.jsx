import React, { useState, useEffect } from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';

function FavCalendar() {
  const [spacing, setSpacing] = useState(.5);
  const weekdays = ['Wednesday 5/25/22', 'Thursday 5/26/22', 'Friday 5/27/22', 'Saturday 5/28/22', 'Sunday 5/29/22', 'Monday 5/30/22', 'Tuesday 5/31/22'];
  const weekdays2 = ['Wednesday 6/1/22', 'Thursday 6/2/22', 'Friday 6/3/22', 'Saturday 6/4/22', 'Sunday 6/5/22', 'Monday 6/6/22', 'Tuesday 6/7/22'];
  return (
    <div className="calendar">
    <Grid sx={{ flexGrow: 1, pt: 1, pl:2 }}  container spacing={1}>
    <Typography  variant="h6">What's upNext Calendar</Typography>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
          {weekdays.map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 150,
                  width: 130,
                  // backgroundColor: (theme) =>
                  //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                >
                <Typography variant="caption">{value}</Typography>
                <h4></h4>
                <Box>
                {value.includes('Thursday') && <Typography color="primary" variant="caption">The Kardashians</Typography>}
                </Box>
                <Box>
                {value.includes('Thursday') && <Typography variant="caption">Air Time: 12:00am PT</Typography>}
                </Box>
                <Box>
                {value.includes('Thursday') && <Typography variant="caption">Network: Hulu</Typography>}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    <Grid sx={{ flexGrow: 1, pt: 1, pl:2 }} container spacing={1}>
    <Grid item xs={12}>
      <Grid container spacing={spacing}>
        {weekdays.map((value) => (
          <Grid key={value} item>
            <Paper sx={{ height: 150, width: 130 }}>
                <Typography variant="caption">{value}</Typography>
                <h4></h4>
                <Box>
                {value.includes('Thursday') && <Typography color="primary" variant="caption">The Kardashians</Typography>}
                </Box>
                <Box>
                {value.includes('Thursday') && <Typography variant="caption">Air Time: 12:00am PT</Typography>}
                </Box>
                <Box>
                {value.includes('Thursday') && <Typography variant="caption">Network: Hulu</Typography>}
                </Box>

              </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
    </Grid>
  </div>
  );
}

export default FavCalendar;