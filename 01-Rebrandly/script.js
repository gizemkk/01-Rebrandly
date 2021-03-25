// Information to reach API
const apiKey = '1362cb3b9fe84d6896af6970296fc0d5';
const url = 'https://api.rebrandly.com/v1/links';
// page elements

const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');




const shortenUrl=() =>{
const urlToShorten = inputField.value;
const data= JSON.stringify({destination: urlToShorten});   
const xhr= new XMLHttpRequest;
xhr.responseType= "json";
xhr.onreadystatechange = () => {
    console.log(xhr)
    if (xhr.readyState === XMLHttpRequest.DONE) {
        renderResponse(xhr.response);
      }

};
xhr.open('POST', url);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
xhr.send(data)


}
 

shortenButton.addEventListener('click',displayShortUrl)