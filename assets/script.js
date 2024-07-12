const classes_menu = document.getElementById("menu").className
const btn_dropdown = document.getElementById("dropdown-widget")
let deg_dropdown = 0
btn_dropdown.addEventListener('click',dropdown)

const experiences = document.getElementsByClassName("my-experience")

for (let i = 0; i < experiences.length; i++) {
  const element = experiences[i];
  element.addEventListener('click',function (e) {
    let link = e.target.getAttribute('data-target-link');
    setTimeout(()=>{window.open(link)},500)
  })
}

function change_icon_dropdown() {
  var z = document.getElementById("dropdown-widget");
  z.setAttribute("transform", "rotate(180deg)")
  if (deg_dropdown == 0) {
    z.style.transform = `rotate(180deg) translate(0,50%)`
    deg_dropdown = 180
  }else{
    z.style.transform = `rotate(0deg)`
    deg_dropdown = 0
  }
}

function dropdown() {
  var y = document.getElementById("menu");
  console.log(y.style.maxHeight);

  if (y.style.maxHeight != "100%") {
    y.style.maxHeight = '100%';
  }else{
    y.style.maxHeight = '0';
  }

  change_icon_dropdown()
}

// BootStrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})