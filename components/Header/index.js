// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //create the elements
  let header = document.createElement('div');
  let date = document.createElement('span');
  let heading = document.createElement('h1');
  let temp = document.createElement('span');

  //add classes
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  //add any properties that may be needed
  date.textContent = 'SMARCH 28, 2019';
  heading.textContent = 'Lambda Times';
  temp.textContent = '98°';

  let final = header;

  final.appendChild(date);
  final.appendChild(heading);
  final.appendChild(temp);

  return final;

}

let target = document.querySelector('.header-container');
let heading = Header();

target.appendChild(heading);
