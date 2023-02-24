// const container = document.querySelector('.container');

export function generateGameScreen(destination) {
  if (!destination) return;

  // start of div class=game-container

  const gameContainerDivEl = document.createElement('div');
  gameContainerDivEl.className = 'game-container ';

  //  start of div class=word-input-group

  const wordInputGroupDivEl = document.createElement('div');
  wordInputGroupDivEl.className = 'word-input-group ';

  const wordInputGroupFormEl = document.createElement('form');

  const wordInputGroupFormLabelEl = document.createElement('label');
  wordInputGroupFormLabelEl.setAttribute('for', 'word-to-guess');
  wordInputGroupFormLabelEl.textContent = 'Enter word to guess:';

  const inputElementGroupEl = document.createElement('div');
  inputElementGroupEl.className = 'input-element-group ';

  const wordInputEl = document.createElement('input');
  wordInputEl.setAttribute('data-word-input', '');
  wordInputEl.setAttribute('type', 'password');

  //   console.log('wordInputEl ===', wordInputEl);

  const wordInputElementButtonEl = document.createElement('button');
  wordInputElementButtonEl.setAttribute('data-word-input-element-button', '');
  wordInputElementButtonEl.setAttribute('type', 'button');
  wordInputElementButtonEl.textContent = 'R';

  inputElementGroupEl.append(wordInputEl, wordInputElementButtonEl);

  const wordSubmitButtonEl = document.createElement('button');
  wordSubmitButtonEl.setAttribute('data-word-submit-button', '');
  wordSubmitButtonEl.setAttribute('type', 'submit');
  wordSubmitButtonEl.textContent = 'Submit word';

  wordInputGroupFormEl.append(wordInputGroupFormLabelEl, inputElementGroupEl, wordSubmitButtonEl);

  wordInputGroupDivEl.append(wordInputGroupFormEl);
  // console.log('wordInputGroupDivEl ===', wordInputGroupDivEl);

  // end of div class-word-input-group

  // start of div class=hangman-remaining-lives

  const hangmanRemainingLivesDivEl = document.createElement('div');
  hangmanRemainingLivesDivEl.className = 'hangman-remaining-lives ';

  const remainingLivesCounterDivEl = document.createElement('div');
  remainingLivesCounterDivEl.className = 'remaining-lives-counter ';

  const remainingLivesCounterPEl = document.createElement('p');
  remainingLivesCounterPEl.textContent = 'Lives remaining: ';

  const remainingLivesCounterPElSpanEl = document.createElement('span');

  remainingLivesCounterPEl.append(remainingLivesCounterPElSpanEl);

  remainingLivesCounterDivEl.append(remainingLivesCounterPEl);
  // console.log('remainingLivesCounterDivEl ===', remainingLivesCounterDivEl);

  // start of div class=first-life lives

  // const firstLifeDivEl = document.createElement('div');
  // firstLifeDivEl.className = 'first-life lives ';

  // const firstLifePartOneDivEl = document.createElement('div');
  // firstLifePartOneDivEl.className = 'part-one ';

  // const firstLifePartTwoDivEl = document.createElement('div');
  // firstLifePartTwoDivEl.className = 'part-two ';

  // const firstLifePartThreeDivEl = document.createElement('div');
  // firstLifePartThreeDivEl.className = 'part-three ';

  // firstLifeDivEl.append(firstLifePartOneDivEl, firstLifePartTwoDivEl, firstLifePartThreeDivEl);

  // end of div class=second-life lives

  // start of div class=second-life lives

  // const secondLifeDivEl = document.createElement('div');
  // secondLifeDivEl.className = 'second-life lives ';

  // end of div class=second-life lives

  // start of div class=third-life lives

  // const thirdLifeDivEl = document.createElement('div');
  // thirdLifeDivEl.className = 'third-life lives ';

  // end of div class=third-life lives

  // start of div class=fourth-life lives

  // const fourthLifeDivEl = document.createElement('div');
  // fourthLifeDivEl.className = 'fourth-life lives ';

  // const fourthLifePartOneDivEl = document.createElement('div');
  // fourthLifePartOneDivEl.className = 'part-one ';

  // const fourthLifePartTwoDivEl = document.createElement('div');
  // fourthLifePartTwoDivEl.className = 'part-two ';

  // fourthLifeDivEl.append(fourthLifePartOneDivEl, fourthLifePartTwoDivEl);

  // end of div class=fourth-life lives

  // start of div class=fifth-life lives

  // const fifthLifeDivEl = document.createElement('div');
  // fifthLifeDivEl.className = 'fifth-life lives ';

  // end of div class=fifth-life lives

  // start of div class=sixth-life lives

  // const sixthLifeDivEl = document.createElement('div');
  // sixthLifeDivEl.className = 'sixth-life lives ';

  // const sixthLifePartOneDivEl = document.createElement('div');
  // sixthLifePartOneDivEl.className = 'part-one ';

  // const sixthLifePartTwoDivEl = document.createElement('div');
  // sixthLifePartTwoDivEl.className = 'part-two ';

  // const sixthLifePartThreeDivEl = document.createElement('div');
  // sixthLifePartThreeDivEl.className = 'part-three ';

  // const sixthLifePartFourDivEl = document.createElement('div');
  // sixthLifePartFourDivEl.className = 'part-four ';

  // const fourthLifePartFiveDivEl = document.createElement('div');
  // fourthLifePartFiveDivEl.className = 'part-five ';

  // sixthLifeDivEl.append(
  //   sixthLifePartOneDivEl,
  //   sixthLifePartTwoDivEl,
  //   sixthLifePartThreeDivEl,
  //   sixthLifePartFourDivEl,
  //   fourthLifePartFiveDivEl
  // );

  // end of div class=sixth-life lives

  // start of div class=seventh-life lives

  // const seventhLifeDivEl = document.createElement('div');
  // seventhLifeDivEl.className = 'seventh-life lives ';

  // const seventhLifePartOneDivEl = document.createElement('div');
  // seventhLifePartOneDivEl.className = 'part-one ';

  // const seventhLifePartTwoDivEl = document.createElement('div');
  // seventhLifePartTwoDivEl.className = 'part-two ';

  // seventhLifeDivEl.append(seventhLifePartOneDivEl, seventhLifePartTwoDivEl);

  // end of div class=seventh-life lives

  hangmanRemainingLivesDivEl.append(
    remainingLivesCounterDivEl
    // ,
    // firstLifeDivEl,
    // secondLifeDivEl,
    // thirdLifeDivEl,
    // fourthLifeDivEl,
    // fifthLifeDivEl,
    // sixthLifeDivEl,
    // seventhLifeDivEl
  );

  // console.log('hangmanRemainingLivesDivEl ===', hangmanRemainingLivesDivEl);

  // end of div class=hangman-remaining-lives

  // start of div class=word-to-guess-letters-list

  const wordToGuessLettersListDivEl = document.createElement('div');
  wordToGuessLettersListDivEl.className = 'word-to-guess-letters-list ';

  // end of div class=word-to-guess-letters-list

  // start of div class=word-to-guess-keyboard

  const wordGuessKeyboardDivEl = document.createElement('div');
  wordGuessKeyboardDivEl.className = 'word-guess-keyboard ';

  // start of div class=word-guess-keyboard-letters

  const wordGuessKeyboardLettersDivEl = document.createElement('div');
  wordGuessKeyboardLettersDivEl.className = 'word-guess-keyboard-letters ';

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  alphabet.forEach((alphabetLetter) => {
    const wordGuessKeyboardLetterDivEl = document.createElement('div');
    wordGuessKeyboardLetterDivEl.className = 'word-guess-keyboard-letter ';
    wordGuessKeyboardLetterDivEl.setAttribute('data-word-guess-keyboard-letter', '');

    const wordGuessKeyboardLetterDivElPEl = document.createElement('p');
    wordGuessKeyboardLetterDivElPEl.textContent = alphabetLetter.toUpperCase();

    wordGuessKeyboardLetterDivEl.append(wordGuessKeyboardLetterDivElPEl);

    wordGuessKeyboardLettersDivEl.append(wordGuessKeyboardLetterDivEl);
  });

  // end of div class=word-guess-keyboard-letters

  // start of div class=selected-letter-to-guess-group

  const selectedLetterToGuessGroupDivEl = document.createElement('div');
  selectedLetterToGuessGroupDivEl.className = 'selected-letter-to-guess-group ';

  const selectedLetterToGuessDivEl = document.createElement('div');
  selectedLetterToGuessDivEl.className = 'selected-letter-to-guess ';
  selectedLetterToGuessDivEl.setAttribute('data-selected-letter-to-guess', '');

  const selectedLetterToGuessDivElPEl = document.createElement('p');

  selectedLetterToGuessDivEl.append(selectedLetterToGuessDivElPEl);

  const guessButtonEl = document.createElement('button');
  guessButtonEl.textContent = 'Guess';
  guessButtonEl.className = 'guess ';
  guessButtonEl.setAttribute('data-guess-button', '');

  selectedLetterToGuessGroupDivEl.append(selectedLetterToGuessDivEl, guessButtonEl);

  // end of div class=selected-letter-to-guess-group

  wordGuessKeyboardDivEl.append(wordGuessKeyboardLettersDivEl, selectedLetterToGuessGroupDivEl);

  // end of div class=word-to-guess-keyboard

  // start of newGame div

  const newGameDivEl = document.createElement('div');
  newGameDivEl.className = 'new-game-container ';

  const newGameButtonEl = document.createElement('button');
  newGameButtonEl.textContent = 'New Game';
  newGameButtonEl.className = 'new-game ';
  newGameButtonEl.setAttribute('data-new-game', '');

  newGameDivEl.append(newGameButtonEl);

  // end of div newGame div

  gameContainerDivEl.append(
    wordInputGroupDivEl,
    hangmanRemainingLivesDivEl,
    wordToGuessLettersListDivEl,
    wordGuessKeyboardDivEl,
    newGameDivEl
  );

  // end of div class=game-container

  destination.append(gameContainerDivEl);
}

export function generateGameStartOrEndScreen(destination, gameScreenState = null) {
  if (!destination || !gameScreenState || typeof gameScreenState !== 'string') return;

  const gameStatOrEndScreenDivEl = document.createElement('div');
  gameStatOrEndScreenDivEl.className = `${
    gameScreenState === 'start'
      ? 'game-start-screen'
      : gameScreenState === 'end'
      ? 'game-end-screen'
      : 'game-success-screen'
  } `;

  const gameStatOrEndScreenH1El = document.createElement('h1');
  gameStatOrEndScreenH1El.textContent = `${
    gameScreenState === 'start'
      ? 'Hang Man Game'
      : gameScreenState === 'end'
      ? 'Game Over'
      : 'Success'
  }`;

  const gameStatOrEndScreenPEl = document.createElement('p');
  gameStatOrEndScreenPEl.textContent = `${
    gameScreenState === 'start'
      ? 'Guess the '
      : gameScreenState === 'end'
      ? 'Failed to guess the word: '
      : 'Successfully guessed the word: '
  }`;

  const gameStatOrEndScreenPElSpanEl = document.createElement('span');
  gameStatOrEndScreenPElSpanEl.className = `${
    gameScreenState === 'start'
      ? 'span-start'
      : gameScreenState === 'end'
      ? 'span-end'
      : 'span-success'
  } `;
  gameStatOrEndScreenPElSpanEl.textContent = `${
    gameScreenState === 'start' ? 'W??D' : gameScreenState === 'end' ? '' : ''
  }`;

  gameStatOrEndScreenPEl.append(gameStatOrEndScreenPElSpanEl);

  const gameStatOrEndScreenButtonEl = document.createElement('button');
  gameStatOrEndScreenButtonEl.className = `${
    gameScreenState === 'start'
      ? 'start-button'
      : gameScreenState === 'end'
      ? 'play-again-button'
      : 'play-again-success-button'
  } `;
  gameStatOrEndScreenButtonEl.setAttribute(
    `${
      gameScreenState === 'start'
        ? 'data-start-button'
        : gameScreenState === 'end'
        ? 'data-play-again-button'
        : 'data-play-again-success-button'
    }`,
    ''
  );
  gameStatOrEndScreenButtonEl.textContent = `${
    gameScreenState === 'start' ? 'Start' : gameScreenState === 'end' ? 'Try again' : 'Play again'
  }`;

  gameStatOrEndScreenDivEl.append(
    gameStatOrEndScreenH1El,
    gameStatOrEndScreenPEl,
    gameStatOrEndScreenButtonEl
  );

  destination.append(gameStatOrEndScreenDivEl);
}

// generateGameScreen(container);
