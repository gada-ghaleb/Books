//This code imports two functions, triggers a search when a button is clicked, and immediately runs the second function.
import search from '../assets/scripts/search';
import description from '../assets/scripts/description';

const input = document.getElementById('search_data');
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    search();
  }
});

const button = document.getElementById('get-button');
button.addEventListener('click', search);

description();









