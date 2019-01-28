export class AnimatedText {
  constructor (element, textList, period) {
    this.textList = textList;
    this.element = element;
    this.loopNum = 0;
    this.period = period;
    this.isDeleting = false;
    this.currentlyDisplayedText = '';

    // This is the animation function
    this.startAnimation = function() {

      // Get the word to animate from the list
      var wordToAnimate = this.loopNum % this.textList.length;
      var fullWord = this.textList[wordToAnimate];
    
      // Update the text to show
      if (this.isDeleting) {
        this.currentlyDisplayedText = fullWord.substring(0, this.currentlyDisplayedText.length - 1);
      } else {
        this.currentlyDisplayedText = fullWord.substring(0, this.currentlyDisplayedText.length + 1);
      }
    
      // Push the change to the HTML
      this.element.innerHTML = this.currentlyDisplayedText;
    
      var repeatFunction = this;
      // Time to wait between each character addition/subtraction
      var timeToWait = 130 - Math.random() * 100;
      if (this.isDeleting) { timeToWait /= 2; }
      if (!this.isDeleting && this.currentlyDisplayedText === fullWord) {
        timeToWait = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentlyDisplayedText === '') {
        this.isDeleting = false;
        this.loopNum++;
      }
      setTimeout(function() {repeatFunction.startAnimation();}, timeToWait);
    };
  }
}

export function cursorAnimation(element) {
  element.html("&boxv;")
  element.animate({
      opacity: 0
  }, 'fast', 'swing').animate({
      opacity: 1
  }, 'fast', 'swing');
}