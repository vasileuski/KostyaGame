const kostya = document.getElementById('kostya');
const cat = document.getElementById('cat');

document.addEventListener('keydown', function(event) {
      jump()
});
   
function jump () {
   if (kostya.classList != 'jump') {
      kostya.classList.add('jump')
   }
   setTimeout( function() {
      kostya.classList.remove('jump')
   }, 300)
}

let isAlive = setInterval ( function() {
   let kostyaTop = parseInt(window.getComputedStyle(kostya).getPropertyValue('top'))
   let catLeft = parseInt(window.getComputedStyle(cat).getPropertyValue('left'))

   if (catLeft < 120 && catLeft > 0 && kostyaTop >= 290) {
      alert('GAME OVER!')
   }
}, 10)