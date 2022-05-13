
  import axios from "axios"
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const Card = (article) => {

    // create all DOM elements
    const cardElement = document.createElement("div");
    const headlineElement = document.createElement("div");
    const authorElement = document.createElement("div");
    const imgContainer = document.createElement("div");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("span");

    // add all classes and content
    cardElement.classList.add("card");
    headlineElement.classList.add("headline");
    headlineElement.textContent = article.headline;
    authorElement.classList.add("author");
    imgContainer.classList.add("img-container");
    imgElement.src = article.authorPhoto;
    nameElement.textContent = `By ${article.authorName}`;

    // append all elements to their respective parents
    cardElement.appendChild(headlineElement);
    cardElement.appendChild(authorElement);
    authorElement.appendChild(imgContainer);
    authorElement.appendChild(nameElement);
    imgContainer.appendChild(imgElement);

    cardElement.addEventListener("click", () => {
      console.log(article.headline);
    })

    return cardElement;
  }


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardAppender = (selector) => {
    const entry = document.querySelector(selector);
    axios.get("http://localhost:5001/api/articles")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

export { Card, cardAppender }
