let newBtn = document.querySelector('#js-new-quote');

newBtn.addEventListener('click', getQuote);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
   // alert("THIS WORKS!");
   try {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
   }
   catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
   }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent(quote);
}
