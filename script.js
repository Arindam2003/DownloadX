var btn=document.querySelector('button')
var com=document.querySelector('.complete')
var percent=document.querySelector('.percent')

var i=0;
var click=0;
    btn.addEventListener("click", function () {
      if(click==0)
      {
        btn.innerHTML = "Downloading...";
        click = 1;
        var int = setInterval(() => {
          i++;
          percent.innerHTML = i + "%";
          com.style.width = i + "%";
        }, 50);

        setTimeout(() => {
          btn.innerHTML = "Downloaded";
          btn.style.opacity = 0.8;
          clearInterval(int);
        }, 5000);
      }
    });
