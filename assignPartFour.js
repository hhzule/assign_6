

// 1. Consider you have 4 images in a file as shown below:

var modalele = document.getElementById("modalimged");
modalele.addEventListener("click", modalered);
var modalele = document.getElementById("modalimgedone");
modalele.addEventListener("click", modalered);
var modalele = document.getElementById("modalimgedtwo");
modalele.addEventListener("click", modalered);
var modalele = document.getElementById("modalimgedthree");
modalele.addEventListener("click", modalered);
var modalele = document.getElementById("modalimgedfour");
modalele.addEventListener("click", modalered);
function modaled(para) {
  var modal = para.parentNode;
  modal.classList.remove('closedopen')
  modal.classList.add("modalooo")
}
function modalered() {
  var modal = this.parentNode;
  modal.classList.remove('modalooo')
  modal.classList.add("closedopen")

  
}


// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).


  function zoomin(){
      var mypara = document.getElementById("para");
      var currfontsize = mypara.style.fontSize;
      currfontsize = currfontsize.slice(0, -2);
      currfontsize = parseInt(currfontsize)
      var reallsize;
      currfontsize += 10;
      reallsize = currfontsize + "px";
      mypara.style.fontSize = reallsize;
      console.log(reallsize);
        

  }
  function zoomout(){
    var mypara = document.getElementById("para");
    var currfontsize = mypara.style.fontSize;
    currfontsize = currfontsize.slice(0, -2);
    currfontsize = parseInt(currfontsize)
    var reallsize;
    currfontsize -= 10;
    reallsize = currfontsize + "px";
    mypara.style.fontSize = reallsize;
    console.log(reallsize);
      

}

