const client_id = '2b4d511c11bc46ba9e084361e9f7941f';
const redirect_uri = 'http://localhost:3000/redirect'
const scope = 'playlist-modify-private playlist-modify-public user-read-private user-read-email';

function generateRandomString(length) {

    let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const charactersLength = characters.length;

    let counter = 0;

    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    return result;
}

function authentication (){

    const state = generateRandomString(16);

    const url = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + encodeURIComponent(client_id) +
      '&scope=' + encodeURIComponent(scope) +
      '&redirect_uri=' + encodeURIComponent(redirect_uri) +
      '&state=' + encodeURIComponent(state);
  
      window.location.href = url;

}

export default authentication;