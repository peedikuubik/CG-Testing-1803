window.addEventListener('touchstart', function() {
  document.body.classList.add('touch-enabled');
});

var touch = function() {
  var touchTime, touchType;
  var cards = document.getElementsByClassName('js-card-flip');

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('touchstart', function(e) {
      touchTime = new Date();
    });

    cards[i].addEventListener('touchend', function(e) {
      var diff = new Date() - touchTime;
      console.log(diff);
      if (diff < 200) {
        this.classList.toggle('hover');
        e.preventDefault();
      }
    });
  }
}

touch();

var touchBtn = function() {
  var btns = document.getElementsByClassName('js-touch-btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('touchend', function(e) {
      e.stopImmediatePropagation();
    });
  }
}

touchBtn();