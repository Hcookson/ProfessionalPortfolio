const height = document.documentElement.offsetHeight;
const text = document.querySelector('.text');
  console.log(height);

window.addEventListener('scroll', () => {
  // get the number of pixels you've scrolled from the top(0).
  let scroll = document.documentElement.scrollTop,
    /* 
      • window.scrollY is the number of pixels that the 
        document is currently scrolled vertically.
      • the variable defined above returns the height of an element - 
        in this case our container which is 1000px talls(defined in css).
      • And lastly window.innerHeight is the height (in pixels) of the browser viewport including, if rendered, the horizontal scrollbar.
      • We do this calculation inside a scroll event listener so that every instance of scrolling, it recalculates which creates the font scale to increase.
    */
    scrolled = window.scrollY / (height - window.innerHeight),
    // just using string interpolation to pass the value of this calculation to a css property which is a string when modifying CSS in JavaScript. 
    transformValue = `scale(${scrolled})`;
      console.log(scroll, scrolled)

    if (scroll > 0 && scroll < 1400) {  
    // if you leave the top of the page, or if you scroll at all increase the font scale. 
    text.style.transform = transformValue;
  } else {
    document.getElementById("grabThis").classList.remove('text');
    document.getElementById("grabThis").classList.add('newText');
    document.getElementById("grabThis").innerHTML = "STATIC TEST SAMPLE TEXT TO SEE IF THIS WORKS";
    
  }
})