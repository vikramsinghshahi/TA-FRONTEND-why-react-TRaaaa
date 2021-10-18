let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector('.movies_List');
allMovies = [
//   {
//     name: 'Inception',
//     watched: false,
//   },
//   {
//     name: 'Krish',
//     watched: true,
//   },
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

function createMovies() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, i) => {
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.innerText = movie.name;
    let button = document.createElement('button');
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.id = i;
    button.addEventListener('click', handleChange);
    li.append(label, button);
    rootElm.append(li);
    input.innerHTML = '';
  });
}

createMovies();