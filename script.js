
function ageInDays() {
    var birthYear = prompt("Enter your birth year")
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.querySelector('#ageInDayss');
    var textAnswer = 'You are ' + ageInDayss + ' days old'
    h1.innerText = textAnswer
    // document.getElementById('flexbox-result').appendChild(h1);
}


function reset() {
    document.querySelector('#ageInDayss').innerText = "";
}
