// Your code goes here
const nav = document.querySelectorAll('.nav-link');
console.log(nav);
const introContent = document.querySelector('p');
console.log(introContent);
const h2Headers = document.querySelectorAll('h2');
console.log(h2Headers);
const h4Headers = document.querySelectorAll('h4');
console.log(h4Headers);
const middleContent = document.querySelectorAll('p');
console.log(middleContent);
const bottomContent = document.querySelectorAll('p');
console.log(bottomContent);
const button = document.querySelectorAll('.btn');
console.log(button);


nav.forEach(element => {
    element.addEventListener('mouseenter', element => {
        console.log(`This element: ${element.type}`)
        element.target.style.color = "red";
    });
    // element[0].target;
});

introContent.addEventListener('click', element => {
    console.log(`This is ${element.type}`);
})

h2Headers.forEach(element => {
    element.addEventListener('wheel', element => {
        console.log(`${element.target}`);
    })
})

h4Headers.forEach(element => {
    element.addEventListener('select', element => {
        console.log(`This element ${element.type}`);
    })
})

middleContent.forEach(element => {
    element.addEventListener('blur', element => {
    
})

// button.forEach(element => {
//     // element.addEventListener('mousemove', element => {
//     //     console.log(`This element ${element.type}`)
//     // })
// })