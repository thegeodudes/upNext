const show = {
    "adult": false,
    "backdrop_path": "/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg",
    "created_by": [
        {
            "id": 566273,
            "credit_id": "623ca00ad1a89300885f6b46",
            "name": "Kyle Killen",
            "gender": 2,
            "profile_path": null
        },
        {
            "id": 1324451,
            "credit_id": "623c9fe4a7e363008bde5e74",
            "name": "Steven Kane",
            "gender": 2,
            "profile_path": null
        }
    ],
    "episode_run_time": [
        60
    ],
    "first_air_date": "2022-03-24",
    "genres": [
        {
            "id": 10759,
            "name": "Action & Adventure"
        },
        {
            "id": 10765,
            "name": "Sci-Fi & Fantasy"
        }
    ],
    "homepage": "https://www.paramountplus.com/shows/halo/",
    "id": 52814,
    "in_production": true,
    "languages": [
        "af",
        "en",
        "eo",
        "pt",
        "ug"
    ],
    "last_air_date": "2022-05-19",
    "last_episode_to_air": {
        "air_date": "2022-05-19",
        "episode_number": 9,
        "id": 3619248,
        "name": "Transcendence",
        "overview": "Beaten, battered, and betrayed, John 117 leads the Spartans on a suicide mission to find the Halo and save humanity. But at what price?",
        "production_code": "",
        "runtime": 48,
        "season_number": 1,
        "still_path": "/AkSS0MyRpjbQ6WrOhIwQw4t7Ea8.jpg",
        "vote_average": 7.0,
        "vote_count": 6
    },
    "name": "Halo",
    "next_episode_to_air": null,
    "networks": [
        {
            "name": "Paramount+",
            "id": 4330,
            "logo_path": "/fi83B1oztoS47xxcemFdPMhIzK.png",
            "origin_country": "US"
        }
    ],
    "number_of_episodes": 9,
    "number_of_seasons": 1,
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Halo",
    "overview": "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
    "popularity": 4253.105,
    "poster_path": "/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
    "production_companies": [
        {
            "id": 7671,
            "logo_path": "/r7KeUsNVv0iggZRh6XmNNq2OEw1.png",
            "name": "Amblin Television",
            "origin_country": "US"
        },
        {
            "id": 115160,
            "logo_path": null,
            "name": "One Big Picture",
            "origin_country": ""
        },
        {
            "id": 115161,
            "logo_path": null,
            "name": "Chapter Eleven",
            "origin_country": ""
        },
        {
            "id": 48856,
            "logo_path": "/gyEyIXqnVkOxjbASaWthewkjGgI.png",
            "name": "343 Industries",
            "origin_country": "US"
        },
        {
            "id": 4343,
            "logo_path": "/rXq1B1Hnkdnw6soz1zoGcslK3wb.png",
            "name": "Showtime Networks",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "seasons": [
        {
            "air_date": "2022-03-24",
            "episode_count": 9,
            "id": 284981,
            "name": "Specials",
            "overview": "",
            "poster_path": null,
            "season_number": 0
        },
        {
            "air_date": "2022-03-24",
            "episode_count": 9,
            "id": 105701,
            "name": "Season 1",
            "overview": "",
            "poster_path": "/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
            "season_number": 1
        }
    ],
    "spoken_languages": [
        {
            "english_name": "Afrikaans",
            "iso_639_1": "af",
            "name": "Afrikaans"
        },
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Esperanto",
            "iso_639_1": "eo",
            "name": "Esperanto"
        },
        {
            "english_name": "Portuguese",
            "iso_639_1": "pt",
            "name": "Português"
        },
        {
            "english_name": "Uighur",
            "iso_639_1": "ug",
            "name": ""
        }
    ],
    "status": "Returning Series",
    "tagline": "Find the Halo, win the war.",
    "type": "Scripted",
    "vote_average": 8.6,
    "vote_count": 751
}

const showSQL = {
  id: show.id,
  name: show.name,
  last_air_date: show.last_air_date,
  next_episode_to_air: show.next_episode_to_air
  in_production: show.in_production,
  episode_run_time: show.episode_run_time[0]
  poster_path: show.poster_path,
  networks_id: ?
  genres_id: ?
}

const { genres, networks } = show;
