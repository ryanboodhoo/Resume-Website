// JavaScript code (inside the script tag)
function fetchRandomQuote() {
   fetch('https://api.quotable.io/random')
       .then(response => response.json())
       .then(data => {
           const quote = data.content;
           document.getElementById("quote").textContent = quote;
       })
       .catch(error => {
           console.error('Error fetching quote:', error);
       });
}

// Event listener for the "New Quote" button
document.getElementById("new-quote").addEventListener("click", fetchRandomQuote);

// Initial quote display
fetchRandomQuote();
