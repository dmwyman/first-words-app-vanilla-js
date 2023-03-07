//Imported card objects
import {
  card_dog,
  card_car,
  card_cow,
  card_banana,
  card_apple,
  card_table,
  card_window,
  card_clock,
  card_ball,
  card_book,
  card_train,
  card_plane,
  card_ear,
  card_nose,
  card_mouth,
} from './cards.js'
// array of cards = the card stack
const cardStack = [
  card_dog,
  card_car,
  card_cow,
  card_banana,
  card_apple,
  card_table,
  card_window,
  card_clock,
  card_ball,
  card_book,
  card_train,
  card_plane,
  card_ear,
  card_nose,
  card_mouth,
]
// TODO: use document.queryselector for all the cards

// **********************
// Landing Page Start Button

const startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', () => {
  // TODO: display card_dog
  console.log('Clicked')
})

// **********************
// CARD TEMPLATE PAGE
// **********************
let currentCardCount = 0

// **********************
// Previous button
const previousBtn = document.querySelector('.previous-btn')

previousBtn.addEventListener('click', () => {
  console.log(`clicked`)
})

// **********************
// Next button

// startBtn.addEventListener('click', () => {
//   // TODO: display card_dog
//   // TODO: display: none for start-btn
//   console.log('Clicked')
// })

// **********************
// current card template
const currentCard = document.querySelector('.card-container')

// **********************
// Skip Link JS
const skipLink = document.querySelector('.skip-link')
skipLink.addEventListener('click', (e) => {
  document.querySelector(skipLink.getAttribute('href')).focus()
})
