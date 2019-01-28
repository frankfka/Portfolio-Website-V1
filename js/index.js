import {AnimatedText, cursorAnimation} from './animation.js'

const HEADER_WORD_TYPE_PERIOD = 2000
const HEADER_WORD_LIST = ["Backend Problem Solver.", "Mobile App Developer.", "Engineering Physics Student.", "Fitness Enthusiast."]
const CURSOR_BLINK_PERIOD = 900 


window.onload = function() {

  var headerAnimation = new AnimatedText(document.querySelector('#animated-text-header'), HEADER_WORD_LIST, HEADER_WORD_TYPE_PERIOD)
  headerAnimation.startAnimation()
  setInterval(function() {cursorAnimation($('.cursor'))}, CURSOR_BLINK_PERIOD)

  $('#contact-form').submit(function(e) {
    if (!e.isDefaultPrevented()) {
        var url = "../php/contact.php";

        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
        return false;
    }
})

};


