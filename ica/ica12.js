const newQuoteButton = document.querySelector("#js-new-quote");

const twitterButton = document.querySelector('#js-tweet');

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

newQuoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", showAnswer);

function getQuote() {
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayQuote(data);
    })
    .catch(error => {
      console.error("Error fetching trivia:", error);
      alert("Sorry! Something went wrong while fetching trivia.");
    });
}

function displayQuote(trivia) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = trivia.question;
}

getQuote();