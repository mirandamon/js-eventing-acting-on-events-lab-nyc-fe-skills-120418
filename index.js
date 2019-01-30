// Event Listener

// 1 - find the thing to do the events on
// we actually don't need an element (the document will get the event listener)

// 2 - write the function that will happen when we do the thing
const moveDodgerLeft = () => {
  // get the dodger first
  const dodger = document.getElementById('dodger')
  // next thing is change the layout/position of dodger
  // which means we need some css changes
  console.log(dodger.style.left)
}



// if (left arrow is pressed)