document.getElementById('get-quote').addEventListener('click', getQoute);
const showcase = document.getElementById('showcase');

function getQoute() {
  fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      const num = Math.floor(Math.random() * 100);
      const oneQuote = data[num];
      const ouput = `<p class = 'output' id='output'>${oneQuote.text}</p>
      <p><cite>~ ${
        oneQuote.author
          ? oneQuote.author
          : 'Unknown, probably a great fella <span>😅</span>'
      }</cite></p>`;
      showcase.innerHTML = ouput;
    });
}

//Dark Mode
const checkbox = document
  .getElementById('checkbox')
  .addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementById('container').classList.toggle('dark');
    document.getElementById('get-quote').classList.toggle('dark');
    document.getElementById('bazinga').classList.toggle('dark');
    document.getElementById('header').classList.toggle('dark');
    document.getElementById('showcase').classList.toggle('dark');
  });

//Dynamic Footer Date
const date = document.getElementById('date');
const year = new Date().getFullYear();

//Insert Dynamic Date in footer
date.innerHTML = `<p>&copy ${year}</p>`;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
