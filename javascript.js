function checkRadio(name) {
    document.getElementById(name).checked = true; window.scrollTo(0,0);
};
    
function openOverlay(name) {
    document.getElementById(name).style.display = "block";
}
    
function closeOverlay() {
      overlayList = document.getElementsByClassName("overlay"); 
    for (i = 0; i < overlayList.length; i++) {
      overlayList[i].style.display = "none";
    }
  }