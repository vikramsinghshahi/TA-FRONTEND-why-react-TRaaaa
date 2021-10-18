let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector('.movies_List');
allMovies = [
  {
    name: 'Inception',
    watched: false,
  },
  {
    name: 'Krish',
    watched: true,
  },
];




input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovies();
  }
});

// function deleteMovie(event) {
//   let id = event.target.dataset.id;
//   allMovies.splice(id, 1);
//   createMovies();
// }

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovies();
}



function elm(type, atr={}){
    let element = document.createElement(type);
    for(let key in atr){
    if(key.startsWith("data-")){
        element.setAttribute(key, atr[key]);
    }else{
        element[key] = atr[key]
     }
    }
    return element
}

console.log(elm("input", {
    type:"checkbox",
    className:"check",
    "data-id": 1
}));

function createMovies() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, i) => {
    // let li = document.createElement('li');
    // let label = document.createElement('label');
    // let button = document.createElement('button');
    let li = elm("li")
    let label =elm('label');
    let button = elm('button');
    
    label.innerText = movie.name;
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.id = i;
    button.addEventListener('click', handleChange);
    li.append(label, button);
    // console.log(li)
    rootElm.append(li);
    input.innerHTML = '';
  });
}

createMovies();