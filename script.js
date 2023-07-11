const api_url = "https://api.api-ninjas.com/v1/quotes?category=health"
const apiKey = 'soP2DeFDH0h3N+n7RWfAiA==7bCg5koQKLpC0Av5'
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

async function getQuote(url){
    const res = await fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    });
    const data = await res.json();
    console.log(data);
    //set innerHTML of the quote element
    quoteElement.innerHTML = data[0].quote
    // Set theinnerHTML of the author element
    authorElement.innerHTML = data[0].author;
}
getQuote(api_url)