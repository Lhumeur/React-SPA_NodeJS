# Description

Back-end server application is designed to get a list of songs through API requests and was implemented on nanobox-express for NodeJS with mongodb for storage Data.

## App was deployed on cloud service and server home-page is available by the next link:

<a href="http://back-end.nanoapp.io">Back-end server application.</a>

# Run server locally and deployment

## Clone the repo

```bash
# clone the code
git clone https://github.com/Lhumeur/React-SPA_NodeJS.git

# cd into the express app
cd Back-end
```

## Run the app localy

```bash
# Run
npm start
```

## Deploy an app to AWS

Go to the next link and perform steps from sections "Prerequsites" and  "Deploy Express to AWS":

<a href="https://content.nanobox.io/express-js-app-deployment-with-nanobox/">Deploy an app to AWS.</a>

# API usage

The application implements 2 API methods: GET and POST

## GET method Request

Request available by the URL "{app home-page}/api/songs" and can be used for primary initialization front-end application.

Request can takes two parameters: 
- "index" - number of requested data page (1 by default);
- "limit" - number of the requested data on the page (10 by default).

```bash
# Example:
http://back-end.nanoapp.io/api/songs/
# or
http://back-end.nanoapp.io/api/songs/?index=3&limit=5
```

## GET method Response

Response of the GET method  - it is an Object with parameters:
- "SINGERS" - sorted Array of singer names;
- "GENRES" - an Array of song genres;
- "YEARS" - an Array of years of song publications;
- "SONGS" - an Array of Objects with their own parameters "singer", "genre", "title" and "year";
- "PAGES" - total pages count according GET method Request parameters.

## POST method Request

Request available by the URL "{app home-page}/api/songs" and can be used to retrieve filtered and sorted data pages.

Request can takes two parameters (see GET Request Example above): 
- "index" - number of requested data page (1 by default);
- "limit" - number of the requested data on the page (10 by default),

and Request can take Body in JSON format:

```bash
# JavaScript XHR Example of the POST Request:
var data = JSON.stringify({
  "SINGERS": [
    "Singer 1",
    "Singer 4"
  ],
  "GENRES": [],
  "YEARS": [
    1990,
    1994
  ],
  "SORTING": {
    "singer": 1
  }
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://back-end.nanoapp.io/api/songs/?index=1&limit=10");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "80753f1a-b72b-4389-abb4-914601334c5a");

xhr.send(data);
```

were:
- "SINGERS" - an Array of Singers, which will be filtered data;
- "GENRES" - an Array of Genres, which will be filtered data;
- "YEARS" - an Array of Years of song publications, which will be filtered data;
- "SORTING" - is an Object for Response data sorting (by default "SORTING": {"singer": 1}), where:

-- parameter name = "SONGS" parameter name from GET Request (see above);

-- parameter value = 1 (ascending sorting) or 0 (descending sorting);

## POST method Response

Response of the POST method  - it is an Object with parameters:
- "SONGS" - an Array of Objects with their own parameters "singer", "genre", "title" and "year";
- "PAGES" - total pages count according POST method Request parameters.

# DB

Mongodb Data Base for app was deployed on a separate cloud service.
