# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

```javascript

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

```

# Project 2 BMI cal

```javascript
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Invaild ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Invaild ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.6) {
      results.innerHTML = `<span> Under Weight ${BMI} </span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML = `<span> Normal Range ${BMI} </span>`;
    } else {
      results.innerHTML = `<span> Over Weight ${BMI} </span>`;
    }
  }

  // console.log(result)
});


```

# Project 3 Digital clock
```javascript
let clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString())

setInterval(function (){
  let date =new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```
Project 4 Random color changer
```javascript
//generate random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
  
    return color;
  };
  let interavalId
  const startChangingColor = function () {
    if(!interavalId){
      interavalId=setInterval(changeBGColor,200)
    }
    
  
    function changeBGColor(){
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(interavalId)
    interavalId=null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
 
```
project 5
```javascript

  console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>`;
});

```