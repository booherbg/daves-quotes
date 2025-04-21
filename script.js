function getQuoteForToday() {
    // Get today's date components
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // Create a simple hash from the date string
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Use the hash to select a quote
    const index = Math.abs(hash) % quotes.length;
    return quotes[index];
}

// Display the quote when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const todaysQuote = getQuoteForToday();
    document.getElementById('quote-text').textContent = todaysQuote.text;
    document.getElementById('quote-author').textContent = todaysQuote.author;
}); 