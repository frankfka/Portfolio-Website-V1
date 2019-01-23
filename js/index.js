import {AnimatedText, cursorAnimation} from './animation.js'

const HEADER_WORD_TYPE_PERIOD = 2000
const HEADER_WORD_LIST = ["software developer.", "Engineering Physics student.", "fitness enthusiast."]
const CURSOR_BLINK_PERIOD = 900 


window.onload = function() {

  var headerAnimation = new AnimatedText(document.querySelector('#animated-text-header'), HEADER_WORD_LIST, HEADER_WORD_TYPE_PERIOD)
  headerAnimation.startAnimation()
  setInterval(function() {cursorAnimation($('.cursor'))}, CURSOR_BLINK_PERIOD)

};


