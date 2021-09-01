'use strict'
// window.onload =  function() {
//     draw();
//     setInterval(function(){
//         var homePage = document.getElementById('home-page');
//         homePage.style.display = 'flex';
//     }, 1000)
// }

function draw() {
    var canvas = document.getElementById("spinner");
  
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      
      var blades = 3;
      var bladeRadius = 13;
      var innerBladeRadius = bladeRadius/2;
      var centerX = 150;
      var centerY = 150;
      var largeRadius = 26;
      var middleRadius = largeRadius/1.6;
      var smallRadius = largeRadius/2.2;
      var degree = 360/blades;
      var step = 0;
  
        ctx.fillStyle = "#ff7800";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, bladeRadius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill(); 
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, innerBladeRadius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
        
        for(var i = 0; i < blades; i++) {
        ctx.fillStyle = "#ff7800";  
            step = i;
            var x = centerX + (largeRadius * Math.cos((Math.PI/180)*degree*step));
            var y = centerY + (largeRadius * Math.sin((Math.PI/180)*degree*step));  
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, bladeRadius, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill(); 
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, innerBladeRadius, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill(); 
            x = centerX + (middleRadius * Math.cos((Math.PI/180)*degree*step));
            y = centerY + (middleRadius * Math.sin((Math.PI/180)*degree*step)); 
            var xLine = centerX + (smallRadius * Math.cos((Math.PI/180)*degree*step));
            var yLine = centerY + (smallRadius * Math.sin((Math.PI/180)*degree*step));  
            ctx.strokeStyle = "#ff7800";
            ctx.lineWidth = 12;
            ctx.beginPath();
            ctx.moveTo(xLine, yLine);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }   
        } else {
            alert('Sorry, but your browser not support canvas');
            }
            canvas.toBlob(function(blob) {
                var newImg = document.createElement('img'),
                    url = URL.createObjectURL(blob);
            
                newImg.onload = function() {
                  URL.revokeObjectURL(url);
                };
            
                newImg.src = url;
                document.body.appendChild(newImg).classList.add('spinner-img');
            });
}