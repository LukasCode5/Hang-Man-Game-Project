const formEl = document.forms[0];
const inputWordEl = document.querySelector('[data-word-input]');
const wordSubmitButtonEl = document.querySelector('[data-word-submit-button]');
// const allLives = document.querySelectorAll('.lives');
const wordLetterCardListEl = document.querySelector('.word-to-guess-letters-list');
const newGameButtonEl = document.querySelector('.new-game');
const guessButtonEl = document.querySelector('.guess');
const guessWordKeyboardLetters = document.querySelectorAll('[data-word-guess-keyboard-letter]');
// console.log('guessWordKeyboardLetters ===', guessWordKeyboardLetters);
const selectedLetterToGuessEl = document.querySelector('[data-selected-letter-to-guess]');
// console.log('selectedLetterToGuessEl ===', selectedLetterToGuessEl.children[0].textContent);'
const remainingLivesCounterEl = document
  .querySelector('.remaining-lives-counter')
  .querySelector('span');
// console.log('remainingLivesCounterEl ===', remainingLivesCounterEl);
const remainingLivesCounterFatherEl = document.querySelector('.remaining-lives-counter');

const remainingLivesContainerEl = document.querySelector('.hangman-remaining-lives');

const revealInputWordElTextContentButton = document.querySelector(
  '[data-word-input-element-button]'
);

let failCounter = 0;
let livesRemaining = 7;
let inGameState = false;
let changesDone = false;
let gameResult = null;
let revealInputTextContent = false;

let finalWordToGuess = '';
let finalWordToGuessLetterArr = [];
let finalWordToGuessLetterArrDisplay = [];

revealInputWordElTextContentButton.addEventListener('click', () => {
  handleInputElementGroupTextDisplay();
});

// INPUT WORD ELEMENT
inputWordEl.addEventListener('keydown', (event) => {
  if (inGameState) {
    inputWordEl.value = '';
    return;
  }
  console.log('event ===', event);

  const inputRawValue = event.target.value.split('');

  let formattedInputValueArr = [];

  const symbolToCheck = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  inputRawValue.forEach((inputRawLetter) => {
    if (
      inputRawLetter !== '' &&
      inputRawLetter !== ' ' &&
      isNaN(inputRawLetter) &&
      !inputRawLetter.match(symbolToCheck)
    ) {
      formattedInputValueArr.push(inputRawLetter);
    }
  });

  const formattedInputValue =
    formattedInputValueArr.length === 0 ? '' : formattedInputValueArr.join('');
  // console.log('formattedInputValue ===', formattedInputValue);
  // console.log('formattedInputValue ===', formattedInputValue.length);
  inputWordEl.value = formattedInputValue;

  console.log('inputWordEl.value.length ===', inputWordEl.value.length);

  // if (inputWordEl.value.length >= 2) {
  //   wordSubmitButtonEl.removeAttribute('disabled');
  // } else {
  //   wordSubmitButtonEl.setAttribute('disabled', 'disabled');
  // }
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inGameState) return;

  const wordToGuess = inputWordEl.value.trim().toLowerCase();

  if (wordToGuess === '' || wordToGuess.length < 3) return;

  // inputWordEl.setAttribute('disabled', 'disabled');
  // wordSubmitButtonEl.setAttribute('disabled', 'disabled');
  // guessButtonEl.removeAttribute('disabled');

  finalWordToGuess = wordToGuess;

  handleClearWordInput();

  // console.log('wordToGuess ===', wordToGuess);
  const wordToGuessSplitToLetters = wordToGuess.split('');
  // console.log('wordToGuessSplitToLetters ===', wordToGuessSplitToLetters);

  finalWordToGuessLetterArr = wordToGuessSplitToLetters;

  const finalWordToGuessLetterArrCopy = [...finalWordToGuessLetterArr];

  finalWordToGuessLetterArrDisplay = finalWordToGuessLetterArrCopy.map(
    (wordToGuessLetter, index) => {
      if (index === 0 || index === finalWordToGuessLetterArrCopy.length - 1) {
        return wordToGuessLetter;
      }
      return '';
    }
  );

  handleMakeWordLetterList(finalWordToGuessLetterArrDisplay, wordLetterCardListEl);
  remainingLivesCounterEl.textContent = `${livesRemaining}`;
  remainingLivesCounterFatherEl.style.display = 'inline-block';
  handleInGameState(true);
});

newGameButtonEl.addEventListener('click', () => {
  if (!inGameState) return;
  handleNewGame();
});

guessButtonEl.addEventListener('click', () => {
  if (!selectedLetterToGuessEl || !inGameState) return;

  console.log('selectedLetterToGuessEl ===', selectedLetterToGuessEl);

  const selectedLetterToGuessValue = selectedLetterToGuessEl.children[0].textContent.toLowerCase();
  console.log('selectedLetterToGuessValue ===', selectedLetterToGuessValue);
  if (!selectedLetterToGuessValue) return;

  handleCheckIfCorrectGuess(
    selectedLetterToGuessValue,
    finalWordToGuessLetterArr,
    finalWordToGuessLetterArrDisplay
  );

  switch (changesDone) {
    case false:
      // console.log('allLivesInFunction.length ===', allLivesInFunction.length);
      handleFailCounter();
      // handleFailCounterDisplay(allLives[failCounter - 1]);
      handleFailCounterDisplay(failCounter, remainingLivesContainerEl);
      handleRemainingLivesCounter();
      if (failCounter === 7) {
        gameResult = false;
        alert(`You failed to guess the word, the word was: ${finalWordToGuess}`);
        return;
      }
      break;
    case true:
      if (gameResult === false) return;
      handleMakeWordLetterList(finalWordToGuessLetterArrDisplay, wordLetterCardListEl);
      if (!finalWordToGuessLetterArrDisplay.includes('')) alert('You guessed the word');
      break;
    default:
      return;
  }
  handleChangesDoneFalse();
});

guessWordKeyboardLetters.forEach((htmlGuessWordKeyboardElement) => {
  htmlGuessWordKeyboardElement.addEventListener('click', () => {
    if (!inGameState) return;

    console.log(htmlGuessWordKeyboardElement.children[0].textContent);

    const selectedGuessWordKeyboardLetter = htmlGuessWordKeyboardElement.children[0].textContent;

    selectedLetterToGuessEl.children[0].textContent = selectedGuessWordKeyboardLetter;
  });
});

function handleFailCounter() {
  failCounter += 1;
}

function handleFailCounterDisplay(failElNumber, destination, currentFailHtmlElement) {
  // if (!currentFailHtmlElement) return;

  // const currentFail = currentFailHtmlElement;
  // console.log('currentFail ===', currentFail);
  // currentFail.style.display = 'inline-block';

  // if (currentFail.children.length > 0) {
  //   const currentFailArr = Array.from(currentFail.children);
  //   // console.log('currentFailArr ===', currentFailArr);
  //   currentFailArr.forEach((htmlELChildren) => {
  //     console.log('htmlELChildren ===', htmlELChildren);
  //     htmlELChildren.style.display = 'inline-block';
  //   });
  // }

  const failFatherElement = document.createElement('div');

  switch (failElNumber) {
    case 1:
      failFatherElement.className = 'first-life lives';

      const partOne = document.createElement('div');
      partOne.className = 'part-one';

      const partTwo = document.createElement('div');
      partTwo.className = 'part-two';

      const partThree = document.createElement('div');
      partThree.className = 'part-three';

      failFatherElement.append(partOne, partTwo, partThree);

      destination.append(failFatherElement);
      break;
    case 2:
      failFatherElement.className = 'second-life lives';

      destination.append(failFatherElement);
      break;
    case 3:
      failFatherElement.className = 'third-life lives';

      destination.append(failFatherElement);
      break;
    case 4:
      failFatherElement.className = 'fourth-life lives';

      const parttOne = document.createElement('div');
      parttOne.className = 'part-one';

      const parttTwo = document.createElement('div');
      parttTwo.className = 'part-two';

      failFatherElement.append(parttOne, parttTwo);

      destination.append(failFatherElement);
      break;
    case 5:
      failFatherElement.className = 'fifth-life lives';

      destination.append(failFatherElement);
      break;
    case 6:
      failFatherElement.className = 'sixth-life lives';

      const partttOne = document.createElement('div');
      partttOne.className = 'part-one';

      const partttTwo = document.createElement('div');
      partttTwo.className = 'part-two';

      const partttThree = document.createElement('div');
      partttThree.className = 'part-three';

      const partttFour = document.createElement('div');
      partttFour.className = 'part-four';

      const partttFive = document.createElement('div');
      partttFive.className = 'part-five';

      failFatherElement.append(partttOne, partttTwo, partttThree, partttFour, partttFive);

      destination.append(failFatherElement);
      break;
    case 7:
      failFatherElement.className = 'seventh-life lives';

      const parttttOne = document.createElement('div');
      parttttOne.className = 'part-one';

      const parttttTwo = document.createElement('div');
      parttttTwo.className = 'part-two';

      failFatherElement.append(parttttOne, parttttTwo);

      destination.append(failFatherElement);
      break;
    default:
      return;
  }
}

function handleNewGame(FailHtmlElementCollection) {
  // console.log('FailHtmlElementCollection ===', FailHtmlElementCollection);
  wordLetterCardListEl.innerHTML = '';

  failCounter = 0;
  livesRemaining = 7;
  gameResult = null;
  handleInputElementGroupTextDisplay(true);

  remainingLivesCounterFatherEl.style.display = 'none';

  handleClearWordInput();

  handleClearSelectedLetterToGuess();

  handleInGameState();

  // inputWordEl.removeAttribute('disabled');
  // wordSubmitButtonEl.removeAttribute('disabled');

  const allLivesInFunction = document.querySelectorAll('.lives');

  // console.log('allLivesInFunction ===', allLivesInFunction);

  if (!allLivesInFunction) return;

  // const FailHtmlElementArray = Array.from(FailHtmlElementCollection);

  // if (!Array.isArray(FailHtmlElementArray)) return;
  // console.log(allLives[0].children);

  allLivesInFunction.forEach((htmlLifeElement) => {
    //   htmlLifeElement.style.display = 'none';

    // if (htmlLifeElement.children.length > 0) {
    //   const htmlELChildren = Array.from(htmlLifeElement.children);
    //   htmlELChildren.forEach((htmlLifeElementChildren) => {
    //     htmlLifeElementChildren.style.display = 'none';
    //   });
    // }
    console.log('htmlLifeElement ===', htmlLifeElement);
    htmlLifeElement.remove();
  });
}

function handleClearWordInput() {
  inputWordEl.value = '';
}

async function handleMakeWordLetterList(wordLetterArray, destination) {
  if (!destination || !Array.isArray(wordLetterArray)) return;

  destination.innerHTML = '';

  wordLetterArray.forEach((wordLetter) => {
    const letterCardEl = document.createElement('div');
    letterCardEl.className = 'word-letter ';

    const letterCardContentEl = document.createElement('p');
    letterCardContentEl.textContent = wordLetter;

    letterCardEl.append(letterCardContentEl);
    destination.append(letterCardEl);
  });
}

function handleInGameState(gameState = false) {
  console.log(typeof gameState);
  if (typeof gameState !== 'boolean') return;
  inGameState = gameState;
}

function handleCheckIfCorrectGuess(letterToCheck, fullWordLetterArray, displayedWordLetterArray) {
  let changesCount = 0;
  // console.log('displayedWordLetterArray ===', displayedWordLetterArray);
  fullWordLetterArray.forEach((fullWordLetter, index) => {
    const indexF = index;

    if (index !== 0 || index !== fullWordLetterArray.length - 1) {
      if (letterToCheck === fullWordLetter) {
        displayedWordLetterArray[indexF] = letterToCheck;
        // console.log('displayedWordLetterArray[indexF] ===', displayedWordLetterArray[indexF]);
        // console.log('displayedWordLetterArray ===', displayedWordLetterArray);
        changesCount += 1;
        // console.log('changesDone ===', changesDone);
      }
    }
  });
  if (changesCount > 0) {
    handleChangesDoneTrue();
  } else {
    handleChangesDoneFalse();
  }
}
function handleChangesDoneTrue() {
  changesDone = true;
  console.log('changesDone ===', changesDone);
}
function handleChangesDoneFalse() {
  changesDone = false;
  console.log('changesDone ===', changesDone);
}

function handleClearSelectedLetterToGuess() {
  selectedLetterToGuessEl.children[0].textContent = '';
}

function handleRemainingLivesCounter() {
  if (livesRemaining <= 0) return;

  livesRemaining -= 1;

  remainingLivesCounterEl.textContent = `${livesRemaining}`;
}

function handleInputElementGroupTextDisplay(resetTextRevealState = false) {
  revealInputTextContent = resetTextRevealState ? false : !revealInputTextContent;

  console.log('revealInputTextContent ===', revealInputTextContent);

  if (!inputWordEl || !revealInputWordElTextContentButton) return;

  if (revealInputTextContent) {
    inputWordEl.removeAttribute('type');
    inputWordEl.setAttribute('type', 'text');
    revealInputWordElTextContentButton.textContent = 'H';
  } else {
    inputWordEl.removeAttribute('type');
    inputWordEl.setAttribute('type', 'password');
    revealInputWordElTextContentButton.textContent = 'R';
  }
}

// const isyItBlue = (color) => {
//   return new Promise((resolve, reject) => {
//     if (color === 'blue') {
//       setTimeout(() => resolve(true), 3000);
//     }
//     setTimeout(() => reject(false), 3000);
//   });
// };

// async function asyncDoSomething() {
//   try {
//     const result = await isyItBlue('blu');
//     const finalResult = Boolean(result);
//     if (finalResult === true) {
//       console.log('it is blue');
//     }
//   } catch (error) {
//     console.log('sorry, not blue');
//   }
// }

// asyncDoSomething();
