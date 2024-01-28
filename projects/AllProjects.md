# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

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

# Project 2

```javascript
const form = document.querySelector('form');
console.log(form);

form.addEventListener('click', (e) => {
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


