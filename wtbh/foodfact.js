let btn = document.getElementById('generator');
let output = document.getElementById('output');
let quotes =
[
  'apple seeds have cyanide',
  'avocado is a healthy fat',
  'saturated fats are solid, unsaturated are liquid',
  'carbs, fats, and proteins are digested differently',
  'diets are only quick fixes, not long term solutions',
];

btn.addEventListener('click', function(){
 var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
 output.innerHTML = randomQuote;
})
