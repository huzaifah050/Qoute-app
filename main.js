document.getElementById('get-quote').addEventListener('click', go);
const showcase = document.getElementById('showcase');

function go() {
  console.log('mee');
  // showcase.innerHTML = hello;
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      const num = Math.floor(Math.random() * 100);
      console.log(num);
      const oneQuote = data[num];
      const ouput = `<p class = 'output' id='output'>${oneQuote.body}</p>`;
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

const date = document.getElementById('date');
const year = new Date().getFullYear();

console.log(year);

date.innerHTML = `<p>&copy ${year}</p>`;
