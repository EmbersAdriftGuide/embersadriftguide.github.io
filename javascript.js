var thing = {}

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
      overlayList[i].style.display = "none";}
}

function accordion(name) {
  var doc = document.getElementById(name) 
    if (doc.style.display === "block") {
        doc.style.display = "none";
    } else {
        doc.style.display = "block";}
}

var recipe = {Name:"", Materials:{}}

function crafting(item, component, value) { 
  recipe.Name = item
  recipe.Materials[component] = value
  var doc = document.getElementById(item + "Output")
  document.getElementById(component + item + "Btn").innerHTML = value;
  document.getElementById(component + item).style.display = "none";
    if (filterRecipe(thing).length > 1){
        doc.innerHTML = "<p>Please select materials from the lists above</p>";
    } else if (filterRecipe(thing).length === 0){
        doc.innerHTML = "<p>No data available, please select different materials</p>";
    } else {
        doc.innerHTML = " "
        append(filterRecipe(thing), doc)}
}

function filterRecipe(item) {
  let out = item[recipe.Name]
  for(let i of Object.entries(recipe.Materials)){
    out = out.filter(r => r[i[0]] === i[1])}
  return out
}

function loadJSON(file) {
  let scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", file);
  scriptEle.setAttribute("type", "text/javascript");
  document.body.appendChild(scriptEle);
}

function append(input, doc) {
  for (const [key, value] of Object.entries(input[0])) {
    doc.innerHTML += "<p>" + key + " :" + value + "</p>";
    console.log(key, value);}
}