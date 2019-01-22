import { from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, reduce, scan, flatMap, tap, switchMap } from 'rxjs/operators';

const url = ' http://localhost:3001/jon-skeet';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumEven = document.getElementById('sum-even');
const jokes = document.getElementById('jokes');
const result = document.getElementById('result');

// sumEven.addEventListener('click', () => {
fromEvent(sumEven, 'click')
  .pipe(
    switchMap(() => from(numbers)),
    filter(n => n % 2 === 0),
    scan((sum, n) => sum + n, 0),
    tap(e => console.log(e))
  )
  .subscribe(number => {
    console.log(number);
    result.textContent = number;
  });
// const sum = numbers
//   .filter(n => n % 2 === 0)
//   .reduce((sum, n) => sum + n, 0);

// result.textContent = sum;

// jokes.addEventListener('click', () => {
fromEvent(jokes, 'click')
  .pipe(
    switchMap(() => ajax.getJSON(url)),

    flatMap(jokes => jokes),
    tap(e => console.log(e.joke.length)),
    filter(joke => joke.joke.length < 50)
  )
  .subscribe(jokes => {
    result.textContent = JSON.stringify(jokes, null, 2);
  });

// fetch(url)
//   .then(rsp => rsp.json())
//   .then(jokes => {
//     result.textContent = JSON.stringify(jokes, null, 2);
//   });
// });

/*

  Just make sure Parcel clears event handlers and subscriptions on a code change

*/

if (module.hot) {
  module.hot.dispose(function() {
    location.reload();
  });
}
