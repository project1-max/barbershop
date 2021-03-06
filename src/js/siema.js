import Siema from 'siema';

const mySiema = new Siema({
  selector: '.siema',
  duration: 500,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
// listen for keydown event
setInterval(() => mySiema.next(), 3000);
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
//
//

//
//
//
//
// // extend a Siema class by two methods
// // addDots - to create a markup for dots
// // updateDots - to update classes on dots on change callback
// class SiemaWithDots extends Siema {
//   addDots() {
//     // create a contnier for all dots
//     // add a class 'dots' for styling reason
//     this.dots = document.createElement('div');
//     this.dots.classList.add('dots');

//     // loop through slides to create a number of dots
//     for (let i = 0; i < this.innerElements.length; i++) {
//       // create a dot
//       const dot = document.createElement('button');

//       // add a class to dot
//       dot.classList.add('dots__item');

//       // add an event handler to each of them
//       dot.addEventListener('click', () => {
//         this.goTo(i);
//       });

//       // append dot to a container for all of them
//       this.dots.appendChild(dot);
//     }

//     // add the container full of dots after selector
//     this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
//   }

//   updateDots() {
//     // loop through all dots
//     for (let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
//       // if current dot matches currentSlide prop, add a class to it, remove otherwise
//       const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
//       this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
//     }
//   }
// }

// // instantiate new extended Siema
// const mySiemaWithDots = new SiemaWithDots({
//   // on init trigger method created above
//   onInit: function () {
//     this.addDots();
//     this.updateDots();
//   },

//   // on change trigger method created above
//   onChange: function () {
//     this.updateDots();
//   },
// });
