// these are the values which will be displayed on the browser
const reviews = [
    {
        id: 1,
        name: "Aaryan Naugaraiya",
        job: "UX Designer",
        img: "Aaryan_new.jpg",
        text: "Awesome product, loved the packaging. Was well wrapped and had no issues in the delivery. The best thing was that the prices were reasonable. Would love to shop in future too." 
    },
    {
        id: 2,
        name: "Ethan Jones",
        job: "Web Developer",
        img: "person_1.jpg",
        text: "Beautifully handcrafted, I should've purchased this before. It added a charm to my house, all my family members loved it."
    },
    {
        id: 3,
        name: "Benjammin Dunn",
        job: "Web Designer",
        img: "person_2.jpg",
        text: "Can't get better than this at this price range, totally worth the price, I would suggest you guys to purchase this too. Product is just awesome. I would rate it 5/5."
    },
    {
        id: 4,
        name: "Jeremmy",
        job: "UI UX Designer",
        img: "person_3.jpg",
        text: "Loved the product, the design, the build material and quality.. Everything is awesome. Thanks to the team for fast delivery."
    }
];

// select all the items that we want to change 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const jpb = document.getElementById("jpb");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


// set starting items
let currentItem = 0;
// we want that when the document loads, we want to display the first item of the array i.e Aaryan Naugaraiya wali photo

// we've added an event listener which will update the values when the user click on the prev or the next button
prevBtn.addEventListener('click', function(){
    currentItem = currentItem - 1;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

nextBtn.addEventListener('click', function(){
    currentItem = currentItem + 1;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// load initial item
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});


// this is the function which will be called everytime the user clicks on the next and the prev button
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

