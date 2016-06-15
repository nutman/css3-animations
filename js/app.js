document.addEventListener('DOMContentLoaded', function () {
  var pigeon = document.querySelector('.pigeon');

  pigeon.addEventListener('click', function() {
    this.classList.add('wings','fly');
  });
});
