const btn = document.getElementById('generator');
let output = document.getElementById('output');
let quotes =
[
  'Beans, lentils, and peas are excellent sources of dietary fiber, folate, and potassium/',
  'Complex carbohydrates are an excellent fuel source, such as beans, whole grain pasta, vegetables and potatoes',
  'Protein is broken down into amino acids when digested, which as used as building blocks for muscle building and repair.',
  'Eating foods such as spinach, fortified cereals, red meat, and lentils can prevent iron deficiencies.',
  'The 8 most common food allergies are: milk, eggs, shellfish, peanuts, fish, wheat, soybeans, and tree nuts.',
  'Celiacs disease is an autoimmune disease which prevents gluten absorption in the small intestines.',
  'Saturated fats are solid, such as butter, coconut oil, or fat. Unsaturated fats are liquid, such as olive or vegetable oil',
  'Not a fan of milk? You can also get adequate calcium from dark green vegetables, tofu, or fortified juices.',
];

btn.addEventListener('click', function(){
 var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
 output.innerHTML = randomQuote;
})
