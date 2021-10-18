// let input = document.querySelector(`input[type = "text"]`);
// let rootElm = document.querySelector('.movies_List');
// allMovies = [
//   {
//     name: 'Inception',
//     watched: false,
//   },
//   {
//     name: 'Krish',
//     watched: true,
//   },
// ];

// input.addEventListener('keyup', (event) => {
//   if (event.keyCode === 13) {
//     allMovies.push({
//       name: event.target.value,
//       watched: false,
//     });
//     event.target.value = '';
//     createMovies();
//   }
// });

// // // function deleteMovie(event) {
// // //   let id = event.target.dataset.id;
// // //   allMovies.splice(id, 1);
// // //   createMovies();
// // // }

// function handleChange(event) {
//   let id = event.target.id;
//   allMovies[id].watched = !allMovies[id].watched;
//   createMovies();
// }

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith('on')) {
//       let eventType = key.replace('on', '').toLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(child);
//     }
//   });
//   return element;
// }

// function createMovies() {
//   //   rootElm.innerHTML = '';
//   let todoUI = allMovies.map((movie, i) => {
//     let li = React.createElement(
//       'li',
//       {},
//       React.createElement('label', {}, movie.name),
//       React.createElement(
//         'button',
//         { id: i, onClick: handleChange },
//         movie.watched ? 'Watched' : 'To Watch'
//       )
//     );
//     return li;
//   });
//   ReactDOM.render(todoUI, rootElm);
// }

// createMovies();