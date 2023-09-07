const setBg = () => {

  // Usage
  const startColor = '#3b3950';
  const percent = 5; // Specifies the degree to which you want to change the color,
  
  const lighterShades = shadeColor(startColor, percent);
  console.log(lighterShades);
   
  
    document.body.style.backgroundColor = lighterShades ;
    color.innerHTML = "#" + lighterShades ;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();

  
  function shadeColor(color, percent) {
    if (!shadeColor.previousColor) {
      shadeColor.previousColor = color;
    }
  
    var R = parseInt(shadeColor.previousColor.substring(1, 3), 16);
    var G = parseInt(shadeColor.previousColor.substring(3, 5), 16);
    var B = parseInt(shadeColor.previousColor.substring(5, 7), 16);
  
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
  
    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;
  
    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);
  
    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));
  
    var newColor = "#" + RR + GG + BB;
  
    // Update the previousColor for the next call
    shadeColor.previousColor = newColor;
  
    return newColor;
  }
