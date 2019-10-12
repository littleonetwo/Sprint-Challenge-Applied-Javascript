// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( response => {

    
    let target = document.querySelector('.cards-container');
    let count = 0;


    let topics = Object.keys(response.data.articles);

    while( count < topics.length){

        let currentTopic = `response.data.articles.${topics[count]}.forEach( id =>{

        let article = newCard(id);
        target.appendChild(article);

      })`;
      //console.log(currentTopic);

      eval(currentTopic);
      count ++;
    };


    // response.data.articles.bootstrap.forEach( id =>{
    //
    //   let article = newCard(id);
    //   target.appendChild(article);
    //
    // });
    //
    // response.data.articles.javascript.forEach( id =>{
    //
    //   let article = newCard(id);
    //   target.appendChild(article);
    //
    // });
    //
    // response.data.articles.jquery.forEach( id =>{
    //
    //   let article = newCard(id);
    //   target.appendChild(article);
    //
    // });
    //
    // response.data.articles.node.forEach( id =>{
    //
    //   let article = newCard(id);
    //   target.appendChild(article);
    //
    // });
    //
    // response.data.articles.technology.forEach( id =>{
    //
    //   let article = newCard(id);
    //   target.appendChild(article);
    //
    // });



  })
  .catch(err => {

    console.log("Error:", err);

  })

  function newCard(article){

    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement('div');
    let image = document.createElement('img');
    let signed = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = `${article.headline}`;
    image.src = `${article.authorPhoto}`;
    signed.textContent =`By ${article.authorName}`;

    let final = card;

    final.appendChild(headline);
    imgCont.appendChild(image);
    author.appendChild(imgCont);
    author.appendChild(signed);
    final.appendChild(author);

    return final;

  }
