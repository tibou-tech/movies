# Movies
`Movies` is 

- Developed with `Vue3` composition api and `Vite 4`
- Use `locale storage` for authentication and register favorite movies
- Use `Tailwind css` for UI

- It is a web application that allows users to search and 
save their favorite movies. 

- The application use the Open Movie API Database (OMDb) (http://www.omdbapi.com/) 

- To retrieve data from film and display them to the user

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run 
The project run on

```sh
http://127.0.0.1:5173/
```


## Config project with OMDb API
For the api to work you must create an account on OMDb API.

You will receive an apiKey in your mail

Add this key in main.ts

```sh
app.provide('api_url', 'http://www.omdbapi.com/?apikey=[YOUR KEY HERE]')
```

## Login
Click on the `login` button and fill in the username field for the connection

You can watch movies and even search unauthenticated, but you can only create a favorite list if you are authenticated

## Logout
Click on the `logout` button for logout

## Switch mode
Click on `the Sun/Moon` for switch `Light/Dark` mode

## Favorite movies
For `add a movie to favorite list` you must click on movie from list movies and click on button favorite

For `show favorite list movies` click on `favorite button` in navbar

## Search movies
Type your search by title on the `search input` to find your favorite movies.

