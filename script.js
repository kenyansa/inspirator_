const api_url = "https://api.api-ninjas.com/v1/quotes?category=health"
const apiKey = 'soP2DeFDH0h3N+n7RWfAiA==7bCg5koQKLpC0Av5'

async function getQuote(url){
    const res = await fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    });
    const data = await res.json();
    console.log(data);
}
getQuote(api_url)