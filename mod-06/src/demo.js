const url = ' http://localhost:3001/jon-skeet';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumEven = document.getElementById('sum-even');
const jokes = document.getElementById('jokes');
const result = document.getElementById('result');

sumEven.addEventListener('click', () => {
  const sum = numbers
    .filter(n => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);

  result.textContent = sum;
});

jokes.addEventListener('click', () => {
  fetch(url)
    .then(rsp => rsp.json())
    .then(jokes => (result.textContent = JSON.stringify(jokes, null, 2)));
});

/*

  Just make sure Parcel clears event handlers and subscriptions on a code change

*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
