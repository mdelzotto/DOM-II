// Your code goes here

const image1 = document.querySelector('.img1');
  image1.addEventListener('mouseover', event => { // 1. mouseenter
    image1.style.border = "5px solid red";
    image1.classlist
  })

const image2 = document.querySelector('.img2');
  image2.addEventListener('mouseover', event => { // 1. mouseenter
    image2.style.border = "5px solid red";
    image2.classlist
  })

const image3 = document.querySelector('.img3');
  image3.addEventListener('mouseover', event => { // 1. mouseenter
    image3.style.border = "5px solid red";
    image3.classlist
  })

const image4 = document.querySelector('.img4');
  image4.addEventListener('mouseover', event => { // 1. mouseenter
      image4.style.border = "5px solid red";
      image4.classlist
    })

const images = document.querySelectorAll('.img');
  images.forEach(image => {
  image.addEventListener('mouseenter', () => { // 1. mouseenter
    image.classList.toggle('glow');
  })
  image.addEventListener('mouseleave', () => { // 2. mouseleave
    image.classList.toggle('glow');
  })
})

const site = document.querySelector('html');
site.addEventListener('contextmenu', () => { // 3. contextmenu
  site.style.opacity = "0.5";
  site.style.background = "gray";
})
site.addEventListener('mousemove', () => { // 4. mousemove
  site.style.opacity = "1";
  site.style.background = "white";
})

const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => { // 5. click
  const horn = new Audio('http://soundbible.com/mp3/Ahooga%20Car%20Horn-SoundBible.com-1499602683.mp3');
  horn.play();

  horn.addEventListener('ended', () => { // 6. ended
    console.log(horn.currentSrc);
  })
})

window.addEventListener("resize", () => { // 7. resize
  console.log('Resized!!1!');
});

const introP = document.querySelector('#test');
introP.addEventListener('select', () => { // 8. select
  console.log('click');
})

window.addEventListener('scroll', function(e) { // 9. scroll
  console.log(e.timeStamp);
})

window.addEventListener('keydown', (e) => { // 10. keydown
  e.which === 32 ? window.open('https://www.youtube.com/watch?v=uSD4vsh1zDA', '_blank') : '';
})

// Event Propagation: stopPropagation
const intro = document.querySelector('.intro');
const introH2 = document.querySelector('.intro h2');
intro.addEventListener('click', (e) => {
  console.log('intro clicked');
})
introH2.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('intro h2 clicked');
})

// preventDefault
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
  e.preventDefault();
  })
})
