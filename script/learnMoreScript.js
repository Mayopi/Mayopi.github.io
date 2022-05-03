const readMoreButton = document.querySelector('.paragraph-button')
const readContainer = document.querySelector('.dom-event')
//const downloadContainer = document.querySelector('.down-event')
//const downloadButton = document.querySelector('.download-btn')

const paraTitleTag = document.createElement('h3')
const paraTitle = document.createTextNode('How to play?')
const paraDescriptTag = document.createElement('p')
const paraText = document.createTextNode('Guess The Number was actually a classic simple Games. All you have to do is just literally guess the random number given by computer, the rules are pretty simple tho even a six year old kids can play with it. so you A.K.A the User was given a hidden random number between 1-10 by computer. to guess that number the User has to input their guess in the placeholder. And if the User guesses was wrong, the computer tells that User guess was either too high or too low, easy right? but hold it. User only have 3 chance to guess it right!')

/* 
const showHide = () => {
  if(readContainer.style.display == 'block'){
    readMoreButton.innerText = 'Read More'
    readContainer.style.display = 'none'
  } else {
    readMoreButton.innerText = 'Hide'
    paraTitleTag.appendChild(paraTitle)
    paraDescriptTag.appendChild(paraText)
    readContainer.appendChild(paraTitleTag)
    readContainer.appendChild(paraDescriptTag)
    readContainer.style.display = 'block'
  }
}

const downTitleTag = document.createElement('h5')
const downTitleText = document.createTextNode('Ready to Download your Zip!')
const line = document.createElement('hr')

const showHideDown = () => {
  if(downloadContainer.style.display == 'block') {
    downloadContainer.style.display = 'none'
  } else {
    downTitleTag.appendChild(downTitleText)
    downloadContainer.appendChild(downTitleTag)
    downloadContainer.appendChild(line)
    downloadContainer.style.display = 'block'
  }
}
*/
