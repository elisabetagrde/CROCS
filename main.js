console.log("JavaScript is working!");



// locate the button
let megaBtn = document.querySelector('#hero-mega');
let hikerBtn = document.querySelector('#hero-hiker');
let classicBtn = document.querySelector('#hero-classic');
let sirenBtn = document.querySelector('#hero-siren');
let chainBtn = document.querySelector('#hero-chain');

// get image
let crocsImage = document.querySelector('#animated-croc');

// listening for user click to change image
megaBtn.addEventListener('click', function(){
  crocsImage.setAttribute('src', 'images/MEGA.png');
});

hikerBtn.addEventListener('click', function(){
  crocsImage.setAttribute('src', 'images/HIKER.png');
});

classicBtn.addEventListener('click', function(){
  crocsImage.setAttribute('src', 'images/CLASSIC.png');
});

sirenBtn.addEventListener('click', function(){
  crocsImage.setAttribute('src', 'images/SIREN.png');
});

chainBtn.addEventListener('click', function(){
  crocsImage.setAttribute('src', 'images/CHAIN.png');
});



// shoelace details
const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('sl-show', event => {
    if (event.target.localName === 'sl-details') {
      [...container.querySelectorAll('sl-details')].map(details => (details.open = event.target === details));
    }
  });


// shoelace drawer
const drawer = document.querySelector('.drawer-overview');
const openButton = drawer.nextElementSibling;
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());



// JS animation (NOT WORKING)
var tlLogo = gsap.timeline(); // creating timeline
tlLogo.to("#crocs-logo", {scale: 100, duration: 1}); // animating #crocs-logo to become bigger

gsap.registerPlugin(ScrollTrigger);
gsap.to("#crocs-logo", { // selecting what will animate
  scrollTrigger: "#trigger", // when this item is scrolled to and becomes visible, the animation will trigger
  x: 100,  // specifying how item 1 will be animated, e.g., moving 100px along the x axis
});