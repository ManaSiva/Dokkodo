const toggle = document.getElementById('toggle');
toggle.addEventListener('change', function() {
  if (this.checked) {
    // do something when the switch is on
    console.log('Switch is on');
  } else {
    // do something when the switch is off
    console.log('Switch is off');
  }
});
