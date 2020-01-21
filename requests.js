import Base64 from './Base64.ts';

const headers = { 'Content-Type': "application/json", "Accept": "application/json"};

const usersUrl = "http://d1e46ad0.ngrok.io/api/v1/users";
const loginUrl = "http://d1e46ad0.ngrok.io/api/v1/login";

const parseData = resp => resp.json();
const catchError = obj => console.log(obj.error)

/****************************USER-AUTH********************************/


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

/****************************SPOTIFY******************************/


//Spotify
let spotifyToken;
let formattedName;

//INSERT CLIENT ID AND CLIENT SECRET
const clientId = "f72960c5793348cbbb950fbad5795195";
const clientSecret = "77b229c0efff4d2a9bee3d79a0e6b3a1";
const base64 = Base64.btoa(`${clientId}:${clientSecret}`);

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

export const fetchAlbumTracks = (spotifyToken, albumId) => fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks?`, {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${spotifyToken}`
    }})
    .then(parseData)
    .catch(catchError)

/****************************VOTES********************************/

export const votesByArtistAlbum = (artistId, albumName, userToken) => fetch('http://d1e46ad0.ngrok.io/api/v1/votes/search', {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify({
        vote: {
            api_artist_id: artistId,
            album_name: albumName
        }
    })
    })
    .then(parseData)
    .catch(catchError)

export const vote = (artistName, artistId, songName, songId, albumName, userId, userToken) => fetch('http://d1e46ad0.ngrok.io/api/v1/votes', {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify({
        artist_name: artistName,
        api_artist_id: artistId,
        song_name: songName,
        api_song_id: songId,
        album_name: albumName,
        user_id: userId
    })})
    .then(parseData)
    .catch(catchError)

export const deleteVote = (voteId, userToken) => fetch(`http://d1e46ad0.ngrok.io/api/v1/votes/${voteId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    }})

/****************************FOLLOWS*******************************/

export const followArtist = (artistId, largeArtistImage, mediumArtistImage, smallArtistImage, artistName, userId, userToken) => fetch(`http://d1e46ad0.ngrok.io/api/v1/follows`, {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    },
    body: JSON.stringify({
        follow: {
            user_id: userId,
            artist_name: artistName,
            api_artist_id: artistId,
            large_image: largeArtistImage,
            medium_image: mediumArtistImage,
            small_image: smallArtistImage
        } 
    })})
    .then(parseData)
    .catch(catchError)

export const unfollowArtist = (artistId, userToken) => fetch(`http://d1e46ad0.ngrok.io/api/v1/follows/${artistId}`, {
    method: "DELETE",
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    }})
    .then(parseData)
    .catch(catchError)


export const followedArtists = (userToken) => fetch(`http://d1e46ad0.ngrok.io/api/v1/follows`, {
    method: "GET",
    headers: {
        'Content-Type': "application/json",
        Accept: "application/json",
        'Authorization': `Bearer ${userToken}`
    }})
    .then(parseData)
    .catch(catchError)