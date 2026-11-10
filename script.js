// Task 1: Get an Attribute Value
const imgTask1 = document.getElementById('task1-img');
const imgSrc = imgTask1.getAttribute('src');
console.log('Task 1 - Image src:', imgSrc);

// Task 2: Change Image Source
const imgTask2 = document.getElementById('task2-img');
const changeImgBtn = document.getElementById('change-img-btn');

changeImgBtn.addEventListener('click', function() {
    imgTask2.setAttribute('src', 'https://picsum.photos/200/300?random=2');
    console.log('Task 2 - Image src changed.');
});

// Task 3: Set Attribute to Input Field
const inputTask3 = document.getElementById('task3-input');
inputTask3.setAttribute('placeholder', 'Enter your name');
console.log('Task 3 - Placeholder set.');

// Task 4: Remove an Attribute
const inputTask4 = document.getElementById('task4-input');
const enableBtn = document.getElementById('enable-btn');

enableBtn.addEventListener('click', function() {
    inputTask4.removeAttribute('disabled');
    console.log('Task 4 - Disabled attribute removed.');
});

// Task 5: Check if Attribute Exists
const paraTask5 = document.getElementById('task5-para');
const hasClass = paraTask5.hasAttribute('class');
console.log('Task 5 - Has class attribute:', hasClass);

// Task 6: Change Link Destination
const linkTask6 = document.getElementById('task6-link');
const changeLinkBtn = document.getElementById('change-link-btn');

changeLinkBtn.addEventListener('click', function() {
    linkTask6.setAttribute('href', 'https://www.github.com');
    linkTask6.textContent = 'Go to GitHub';
    console.log('Task 6 - Link destination changed to GitHub.');
});