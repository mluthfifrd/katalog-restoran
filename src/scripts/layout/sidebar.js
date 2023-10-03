var button = document.querySelector('#openNav')
button.addEventListener('click', function () {
  document.getElementById('mySidenav').style.width = '250px'
})

var button = document.querySelector('#closeNav')
button.addEventListener('click', function () {
  document.getElementById('mySidenav').style.width = '0'
})
