// POINT DOMとイベントリスナ
const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello')
};
btnEl.addEventListener('click', helloFn)