import {CLIENT_ID,CLIENT_SECRET} from './constants.js'

console.log(CLIENT_ID);
console.log(CLIENT_SECRET);

const _getToken = async() =>{
    const result = await fetch('https://accounts.spotify.com/api/token',{
        method: 'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':'Basic' + btoa(CLIENT_ID +":"+CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;   
}

const _getFavoriteArtist = async(token) =>{
    const result = await fetch()
}