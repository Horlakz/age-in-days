
function ageInDays() {
    var birthYear = prompt("Enter your birth year")
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h1);
}


function reset() {
    document.getElementById('ageInDays').remove();
}
