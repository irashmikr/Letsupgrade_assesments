let clickbtn = document.querySelector("button")
console.log("🚀 ~ file: test.js:2 ~ clickbtn:", clickbtn)

// get the element you want to display
let viewBox = document.getElementById('box4')


clickbtn.addEventListener("click",()=>{
    viewBox.style.display = "flex"
    clickbtn.style.display = "none"

})

viewBox.addEventListener('click', function(event) {
    viewBox.style.display = "none"
    clickbtn.style.display = "flex"
});