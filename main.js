var Quote = function (quote, author) {
    this.quote = quote;
    this.author = author;
}

var quoteContainer = [
    new Quote('To, że milczę, nie znaczy, że nie mam nic do powiedzenia.', 'Jonathan Carroll'),
    new Quote('Lepiej zaliczać się do niektórych, niż do wszystkich.', 'Andrzej Sapkowski'),
    new Quote('Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła', 'Wisława Szymborska'),
    new Quote('Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu', 'Antoine de Saint-Exupéry'),
    new Quote('Książki są lustrem: widzisz w nich tylko to co, już masz w sobie.', 'Carlos Ruiz Zafón'),
    new Quote('W chwili, kiedy zastanawiasz się czy kogoś kochasz, przestałeś go już kochać na zawsze.', 'Carlos Ruiz Zafón'),
    new Quote('Kocha się za nic. Nie istnieje żaden powód do miłości.', 'Paulo Coelho'),
    new Quote('Pozbierać jest się dziesięć razy trudniej, niż rozsypać.', 'Suzanne Collins'),
    new Quote('Im mniej człowiek wie, tym łatwiej mu żyć. Wiedza daje wolność, ale unieszczęśliwia.', 'Erich Maria Remarque'),
    new Quote('Zabijanie dla pokoju jest jak pieprzenie się dla cnoty.', 'Stephen King'),
    new Quote('Kochać kogoś, to przede wszystkim pozwalać mu na to, żeby był, jaki jest.', 'William Wharton '),
    new Quote('Dopóki nie skorzystałem z Internetu, nie wiedziałem, że na świecie jest tylu idiotów.', 'Stanisław Lem'),
    new Quote('Istniejemy póki ktoś o nas pamięta.', 'Carlos Ruiz Zafón'),
    new Quote('Kiedy łamiesz zasady, łam je mocno i na dobre.', 'Terry Pratchett')
]

var text = document.querySelector('.quote');
var author = document.querySelector('.author');
var header = document.querySelector('.header');
var tw = document.querySelector('.tw');
var fb = document.querySelector('.fb');
var btnNext = document.querySelector('.nextQuote');
var counter = 1;
var counterColor = 0;

text.textContent = quoteContainer[0].quote;
author.textContent = '- ' + quoteContainer[0].author;

var colors = ['#1abc9c', '#2ecc71', '#16a085', '#f1c40f', '#f39c12', '#c0392b', '#2980b9', '#9b59b6', '#2c3e50', '#8e44ad', '#95a5a6', ]
btnNext.addEventListener('click', function () {

    text.textContent = quoteContainer[counter].quote;
    author.textContent = '- ' + quoteContainer[counter].author;

    header.style.backgroundColor = colors[counter];
    tw.style.backgroundColor = colors[counter];
    fb.style.backgroundColor = colors[counter];
    btnNext.style.backgroundColor = colors[counter];
    text.style.color = colors[counter];
    text.classList.add('animate');
    author.style.color = colors[counter];
    author.classList.add('animate');

    setTimeout(function () {
        text.classList.remove('animate');
        author.classList.remove('animate');
    }, 1000);

    counter++;
    counterColor++;

    if (counterColor === colors.length) {
        counterColor = 0;
    }

    if (counter === quoteContainer.length) {
        counter = 0;
    }
});
