const headers = { 'Content-Type': "application/json", "Accept": "application/json"};

const usersUrl = "http://localhost:3000/api/v1/users";
const loginUrl = "http://localhost:3000/api/v1/login";

const parseData = resp => resp.json();
const catchError = obj => console.log(obj.error)

//Users

export const signUp = (user, city, country) => fetch(usersUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
        user: {
            username: user.username,
            password: user.password,
            first_name: user.firstName,
            last_name: user.lastName,
            city: city,
            country: country
        }})
    })
    .then(parseData)
    .catch(catchError)

export const login = (user) => fetch(loginUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
        user: {
            username: user.username,
            password: user.password
        }})
    })
    .then(parseData)
    .catch(catchError)

//Spotify
let spotifyToken;
let formattedName;

//INSERT CLIENT ID AND CLIENT SECRET


const getTokenUrl = "https://accounts.spotify.com/api/token";
const artistsURL = `https://api.spotify.com/v1/search?q=${formattedName}&type=artist`



const spotifyHeaders = {'Content-Type': "application/json", 
Accept: "application/json", 
"Authorization": `Bearer ${spotifyToken}`} // <-- insert token 

export const getSpotifyToken = () => fetch(getTokenUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${base64}`
        },
        body: 'grant_type=client_credentials'
    })
    .then(parseData)
    .catch(catchError)

export const fetchArtists = (spotifyToken, formattedName) => fetch(`https://api.spotify.com/v1/search?q=${formattedName}&type=artist&limit=4`, {
    headers: {
        'Content-Type': "application/json", 
        Accept: "application/json", 
        "Authorization": `Bearer ${spotifyToken}`
    }})
    .then(parseData)
    .catch(catchError)

export const fetchArtistAlbums = (spotifyToken, id, country) => fetch(`https://api.spotify.com/v1/artists/${id}/albums?limit=20&include_groups=album&market=US`, {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${spotifyToken}`
    }})

    .then(parseData)
    .catch(catchError)
