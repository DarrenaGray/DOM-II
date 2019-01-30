// Your code goes here
const nav = document.querySelectorAll('.nav-link');
console.log(nav);
const header = document.querySelector('h1');
console.log(header);
const h2Headers = document.querySelectorAll('h2');
console.log(h2Headers);
const h4Headers = document.querySelectorAll('h4');
console.log(h4Headers);
const middleContent = document.querySelectorAll('p');
console.log(middleContent);
const bottomContent = document.querySelectorAll('p');
console.log(bottomContent);
const button = document.querySelectorAll('.btn');


nav.forEach(event => {
    event.addEventListener('mouseover', event => {
        // console.log(`This event: ${event.type}`)
        event.target.style.color = "red"; 
        setTimeout (() => {
            event.target.style.color = '';
           }, 500);
    }, false);
});

header.addEventListener('dblclick', event => {
    console.log(`${event.type}`);
    event.target.innerHTML = '100px';
})

h2Headers.forEach(event => {
    event.addEventListener('click', event => {
        console.log(`${event.type}`);
        event.target.innerHTML = 'HAVE FUN!';
    })
})

h4Headers.forEach(event => {
    event.addEventListener('select', event => {
        console.log(`This event ${event.type}`);
    })
})

middleContent.forEach(event => {
    event.addEventListener('blur', event => {
        // console.log(`${event.target, true}`);
    })
})

button.forEach(event => {
    event.addEventListener('mouseenter', event => {
        console.log(`This event ${event.type}`);
        event.target.style.backgroundColor = "black"; 
        setTimeout(() => {
            event.target.style.backgroundColor = '';
        }, 1000);   
    },)
})


button.forEach(event => {
    event.addEventListener('mouseout', event => {
        event.target.style.color = "red";
        setTimeout(() => {
            event.target.style.color = '';
        },1000);
    })
})

