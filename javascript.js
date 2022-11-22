function checkRadio(name) {
  if (name.match("tabJuggernaut") || name.match("tabKnight") || name.match("tabMarshal")) {
    document.getElementById("tabDefender").checked = true; window.scrollTo(0,0)
  } else if (name.match("tabBerserker") || name.match("tabBrigand") || name.match("tabWarden")) {
    document.getElementById("tabStriker").checked = true; window.scrollTo(0,0)
  } else if (name.match("tabDuelist") || name.match("tabSentinel") || name.match("tabWarlord")) {
    document.getElementById("tabSupport").checked = true; window.scrollTo(0,0)
  }
  document.getElementById(name).checked = true;
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

  function accordion(name) {
    var blah = document.getElementById(name)
        if (blah.style.display === "block") {
            blah.style.display = "none";
        } else {
            blah.style.display = "block";
        }
  }