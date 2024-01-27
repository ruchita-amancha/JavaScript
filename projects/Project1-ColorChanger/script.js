const color = document.querySelectorAll(".color")
const body = document.querySelector("body")
color.forEach((color) => {
    console.log(color);
    color.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === "grey"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "pink"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "orange"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor=e.target.id
        }
    })
});