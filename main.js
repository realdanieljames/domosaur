// const heading = document.querySelector('h1');

// const makeBold = function () {
//     heading.fontWeight = 600;
// }

// heading.addEventListener('click', makeBold);



// Change the span with the class mess-with-me to have a font size of 3em.
const paragraph = document.querySelector('.mess-with-me')
paragraph.style.fontSize = '3em'

//  Change the paragraph with the class mess-with-me to have a background color of green.
paragraph.style.backgroundColor = 'green'


//  Hide the second dinosaur's image so that it's no longer visible
//      and so that the area below it moves up to take the space
const secondDinosaurImage = document.querySelector('img:first-child')




//      Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const firstDinosaurImage = document.querySelector('img')
firstDinosaurImage.style.width = '324px'


//      Add an event listener to the span with the class mess-with-me so that when it is clicked, 
//          the font color changes to orange.

const orangeFont = function () {
    paragraph.style.color = 'orange'
}
paragraph.addEventListener('click', orangeFont)



//      Add an event listener to the first dinosaur so that when they are clicked,
//           they receive a red border.

const makeRedBorder = function () {
    firstDinosaurImage.style.borderColor = 'red'
    firstDinosaurImage.style.borderStyle = 'double'
}
firstDinosaurImage.addEventListener('click', makeRedBorder)


// Add an event listener to the feathered dinosaur,
//   so that when they are clicked, they become 50% transparent.

const featheredDinosaur = document.querySelector('#feathers')

const transparentTo50 = function () {
    featheredDinosaur.style.opacity = '0.5'
}

featheredDinosaur.addEventListener('click', transparentTo50)



//  Add an event listener to the "Switch Background Color" button 
// when it is clicked, we switch the background color of the row of dinosaurs

const button = document.querySelector('button')
const dinoRow = document.querySelector('#row')

const blueBackground = function () {

    dinoRow.style.backgroundColor = 'blue'
    //toggle
}

button.addEventListener('click', blueBackground)




//  Add an event listener to the dinosaur with the id biggify
//     when HOVERED, grows the image to 200 pixels wide. 

const biggifyDino = document.querySelector('#biggify')

const bigUpDino = function () {
    biggifyDino.style.width = '200px'
}

biggifyDino.addEventListener('mouseenter', bigUpDino )


//  STRETCH GOALS

//  when you click the "Switch Background Color" button, 
//  you switch it back and forth from white to whatever color you chose.