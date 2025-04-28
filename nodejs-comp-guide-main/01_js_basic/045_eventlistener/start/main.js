const h1Element = document.querySelector('h1');
h1Element.textContent = '変更後のタイトル'

const btnE1 = document.querySelector('button');
btnE1.addEventListener('click', (el) => {
    console.log(el.target);
    console.log('hello')
})