let digitOdd = document.querySelectorAll('span:nth-child(odd)');
let digitEven = document.querySelectorAll('span:nth-child(even)');


digitOdd.forEach((span) => {
    span.style.background = "#ccc";


})

digitEven.forEach((span) => {
    span.style.background = "red";


})