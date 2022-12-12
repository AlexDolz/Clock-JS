// clock's hands
const secondHand = document.querySelector('#second_hand');
const minuteHand = document.querySelector('#minute_hand');
const hourHand = document.querySelector('#hour_hand');

// buttons
const startBtn = document.querySelector('#start_btn');
const endBtn = document.querySelector('#end_btn');

function getDate() {
  // new Date()
  let now = new Date();

  // seconds
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  if (secondsDeg === 90) {
    secondHand.classList.add('no_transition');
  } else {
    secondHand.classList.remove('no_transition');
  }

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  // minutes
  const minutes = now.getMinutes();
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  if (minutesDeg === 90) {
    minuteHand.classList.add('no_transition');
  } else {
    minuteHand.classList.remove('no_transition');
  }

  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  // hours
  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  if (hoursDeg === 90) {
    hourHand.classList.add('no_transition');
  } else {
    hourHand.classList.remove('no_transition');
  }

  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// setInterval

let setInt;
startBtn.addEventListener('click', () => {
  setInt = setInterval(getDate, 1000);
});

// clearInterval
endBtn.addEventListener('click', () => {
  clearInterval(setInt);
});
