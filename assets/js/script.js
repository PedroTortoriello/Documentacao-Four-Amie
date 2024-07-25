document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.MCDropDown');

  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
      var body = this.querySelector('.MCDropDownBody');
      var currentState = this.getAttribute('data-mc-state');

      if (currentState === 'closed') {
        body.style.display = 'block';
        this.setAttribute('data-mc-state', 'open');
      } else {
        body.style.display = 'none';
        this.setAttribute('data-mc-state', 'closed');
      }
    });
  });
});
