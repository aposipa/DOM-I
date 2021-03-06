const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const midPageAccent = document.getElementById("middle-img");
midPageAccent.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const links = document.getElementsByTagName("a");
links[0].textContent = siteContent ['nav']['nav-item-1']
links[1].textContent = siteContent ['nav']['nav-item-2']
links[2].textContent = siteContent ['nav']['nav-item-3']
links[3].textContent = siteContent ['nav']['nav-item-4']
links[4].textContent = siteContent ['nav']['nav-item-5']
links[5].textContent = siteContent ['nav']['nav-item-6']

Array.from(links).forEach(link =>{
  link.style.color = 'green';
})
const parentElement = document.querySelector('nav');

const mission = document.createElement('A');
mission.setAttribute('href',"#");
mission.textContent = "Mission";
parentElement.append(mission);
mission.style.color = 'green';

const homePage = document.createElement('A');
homePage.setAttribute('href',"#");
homePage.textContent = "Home Page";
parentElement.append(homePage);
homePage.style.color = "green";


const title = document.querySelector('h1');
title.innerText = "Dom Is Awesome";

const buttonText = document.querySelector('button');
buttonText.innerText = "Get Started";


const h4array = document.querySelectorAll('h4');
//console.log(h4array);

h4array[0].textContent = siteContent["main-content"]["features-h4"];
h4array[1].textContent = siteContent["main-content"]["about-h4"];
h4array[2].textContent = siteContent["main-content"]["services-h4"];
h4array[3].textContent = siteContent["main-content"]["product-h4"];
h4array[4].textContent = siteContent["main-content"]["vision-h4"];

const parray = document.querySelectorAll('p');
console.log(parray);

parray[0].textContent = siteContent["main-content"]["features-content"];
parray[1].textContent = siteContent["main-content"]["about-content"];
parray[2].textContent = siteContent["main-content"]["services-content"];
parray[3].textContent = siteContent["main-content"]["product-content"];
parray[4].textContent = siteContent["main-content"]["vision-content"];
//middle section
parray[5].textContent = siteContent["contact"]["address"];
parray[6].textContent = siteContent["contact"]["phone"];
parray[7].textContent = siteContent["contact"]["email"];
//contact page
parray[8].textContent = siteContent["footer"]["copyright"];
//footer
