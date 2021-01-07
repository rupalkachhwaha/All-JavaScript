
let button = document.querySelector('#buttonId');

const quoteList = [{
        quote:'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.' ,
        author: '- Scott Adams',

},
{        quote:'Prose is architecture, not interior decoration.' ,
        author:'- Ernest Hemingway' ,
},
{
        quote: 'It is perfectly okay to write garbage—as long as you edit brilliantly.',
        author: '- C. J. Cherryh',
},
{
        quote: 'A blank piece of paper is Gods way of telling us how hard it to be God.',
        author:'- Sidney Sheldon' ,
}]

button.addEventListener('click', () =>{

        let index = Math.floor(Math.random() * quoteList.length)

        document.querySelector('#quote').textContent = quoteList[index].quote;
        document.querySelector('#author').textContent = quoteList[index].author;
})