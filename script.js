const items = document.querySelectorAll('.cli');

items.forEach((item, index) => {
  // init data-id from element
  const itemId = item.dataset.id;
  
  // if localStorage has Id marked completed
  if (localStorage.getItem('item_' + itemId) === 'complete') {
      item.classList.add('complete');
  }
  
  // add click event
  item.addEventListener('click', function() {
    // toggle the 'complete' class
    this.classList.toggle('complete');
    // update localStorage
    localStorage.setItem('item_' + itemId, this.classList.contains('complete') ? 'complete' : '');
  });
});

// optional option
let isAnimating = false;
const optional = document.querySelector('#optional');
const optionalItems = document.querySelectorAll('.optional');
// function hides and shows optional checklist items
function updateOptionalItems() {
  if (optional.classList.contains('selected')) {
    // update page state
    optionalItems.forEach(function(item) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.classList.remove('hidden');
      });
    });
  } else {
    optionalItems.forEach(function(item) {
      item.classList.add('hidden');
      setTimeout(() => {
        item.style.display = 'none';
      }, 500);
    });
  }
}
// check local storage for selected option
const isOptionalSelected = localStorage.getItem('optionalSelected');
// this option is selected by default
if (isOptionalSelected === 'false') {
  optional.classList.remove('selected')
}
updateOptionalItems();
// add click event listener
optional.addEventListener('click', function() {
  // prevent toggle if an animation is in progress
  if (isAnimating) return;
  // set flag
  isAnimating = true;
  // toggle selected class
  this.classList.toggle('selected');
  // call update function
  updateOptionalItems();
  // update local storage
  localStorage.setItem('optionalSelected', this.classList.contains('selected') ? 'true' : 'false');
  // timer
  setTimeout(() => {
    isAnimating = false;
  }, 500);
});

// very option
const very = document.querySelector('#very-optional');
const veryItems = document.querySelectorAll('.very-optional')
// function hides and shows very-optional checklist items
function updateVeryItems() {
  if (very.classList.contains('selected')) {
    // update page state
    veryItems.forEach(function(item) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.classList.remove('hidden');
      });
    });
  } else {
    veryItems.forEach(function(item) {
      item.classList.add('hidden');
      setTimeout(() => {
        item.style.display = 'none';
      }, 500);
    });
  }
}
// check local storage for selected option
const isVerySelected = localStorage.getItem('verySelected') === 'true';
if (isVerySelected) {
  very.classList.add('selected');
}
updateVeryItems();
// add click event listener
very.addEventListener('click', function() {
  // prevent toggle if an animation is in progress
  if (isAnimating) return;
  // set flag
  isAnimating = true;
  // toggle selected class
  this.classList.toggle('selected');
  // call update function
  updateVeryItems();
  // update local storage
  localStorage.setItem('verySelected', this.classList.contains('selected') ? 'true' : 'false');
  // timer
  setTimeout(() => {
    isAnimating = false;
  }, 500);
});

// lab trial option
const trial = document.querySelector('#trial');
const trialItems = document.querySelectorAll('.trial');
// function hides and shows trial checklist items
function updateTrialItems() {
  if (trial.classList.contains('selected')) {
    // update page state
    trialItems.forEach(function(item) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.classList.remove('hidden');
      });
    });
  } else {
    trialItems.forEach(function(item) {
      item.classList.add('hidden');
      setTimeout(() => {
        item.style.display = 'none';
      }, 500);
    });
  }
}
// check local storage for selected option
const isTrialSelected = localStorage.getItem('trialSelected');
// this option is selected by default
if (isTrialSelected === 'false') {
  trial.classList.remove('selected');
}
updateTrialItems();
// add click event listener
trial.addEventListener('click', function() {
  // prevent toggle if an animation is in progress
  if (isAnimating) return;
  // set flag
  isAnimating = true;
  // toggle selected class
  this.classList.toggle('selected');
  // call update function
  updateTrialItems();
  // update local storage
  localStorage.setItem('trialSelected', this.classList.contains('selected') ? 'true' : 'false');
  // timer
  setTimeout(() => {
    isAnimating = false;
  }, 500);
});

// skill option
const skill = document.querySelector('#skills');
const skillItems = document.querySelectorAll('.skill');
// function hides and shows skill checklist items
function updateSkillItems() {
  if (skill.classList.contains('selected')) {
    // update page state
    skillItems.forEach(function(item) {
      item.style.display = 'block';
      requestAnimationFrame(() => {
        item.classList.remove('hidden');
      });
    });
  } else {
    skillItems.forEach(function(item) {
      item.classList.add('hidden');
      setTimeout(() => {
        item.style.display = 'none';
      }, 500);
    });
  }
}
// check local storage for selected option
const isSkillSelected = localStorage.getItem('skillSelected');
if (isSkillSelected == 'false') {
  skill.classList.remove('selected');
}
updateSkillItems();
// add click event listener
skill.addEventListener('click', function() {
  // prevent toggle if an animation is in progress
  if (isAnimating) return;
  // set flag
  isAnimating = true;
  // toggle selected class
  this.classList.toggle('selected');
  // call update function
  updateSkillItems();
  // update local storage
  localStorage.setItem('skillSelected', this.classList.contains('selected') ? 'true' : 'false');
  // timer
  setTimeout(() => {
    isAnimating = false;
  }, 500);
});

// reset button

// init selector
const reset = document.querySelector('#reset');
// add event
reset.addEventListener('click', function() {
  // update options to default selections
  optional.classList.add('selected');
  trial.classList.add('selected');
  skill.classList.add('selected');
  very.classList.remove('selected');
  // update checklist items
  updateOptionalItems();
  updateSkillItems();
  updateTrialItems();
  updateVeryItems();
  // store in local
  localStorage.setItem('skillSelected', skill.classList.contains('selected') ? 'true' : 'false');
  localStorage.setItem('trialSelected', trial.classList.contains('selected') ? 'true' : 'false');
  localStorage.setItem('verySelected', very.classList.contains('selected') ? 'true' : 'false');
  localStorage.setItem('optionalSelected', optional.classList.contains('selected') ? 'true' : 'false');
});
