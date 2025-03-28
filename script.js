var btn=document.querySelector('button')
var com=document.querySelector('.complete')
var percent=document.querySelector('.percent')
var timeLeft=document.querySelector('.time-left');

var i=0;
var click=0;
var random=Math.floor(Math.random()*100+50)-1;
// timeLeft.innerHTML = Time Left ${random/10} Sec;

timeLeft.innerHTML = `Time Left ${Math.floor(random/10)} Sec`;


    btn.addEventListener("click", function () {
      if(click==0)
      {
        btn.innerHTML = "Downloading...";
        click = 1;
        
        var int = setInterval(() => {
          timeLeft.innerHTML = `Time Left ${Math.floor((random / 10)-
            ((random/(10*100))*i))} Sec`;
          i++;
          percent.innerHTML = i + "%";
          com.style.width = i + "%";
        }, random);

        setTimeout(() => {
          btn.innerHTML = "Downloaded";
          btn.style.opacity = 0.8;
          clearInterval(int);
        }, 100*random);
      }
    });
