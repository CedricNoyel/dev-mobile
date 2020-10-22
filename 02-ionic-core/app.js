console.log("file loaded: ./app.js");

const DATA_URL = "https://devfest-nantes-2018-api.cleverapps.io/blog";
const IMG_URL = "https://devfest2018.gdgnantes.com/";

fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    const posts = data;
    posts.forEach((post) => addCard(post));
    console.log(posts);
  })
  .catch((err) => {
    // handle the error
    console.log(err);
  });

function addCard(data) {
  const container = document.getElementById("container");
  let card = document.createElement("ion-card");
  let header = document.createElement("ion-card-header");
  let title = document.createElement("ion-card-title");
  let img = document.createElement("img");
  let content = document.createElement("ion-card-content");

  title.innerHTML = data.title;
  img.src = IMG_URL + data.image;
  content.innerHTML = data.brief;

  header.appendChild(title);
  card.appendChild(header);
  card.appendChild(img);
  card.appendChild(content);
  container.appendChild(card);
}
