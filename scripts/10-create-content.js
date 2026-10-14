let greeting = "Hello class!";

let greetingMarkup = `<p>${greeting}</p>`;

console.log(greetingMarkup);
console.log(document.querySelector("#greeting"));

document.querySelector("#greeting").innerHTML = greetingMarkup;

/* but creating nodes is better than innerHTML */
  let basket = ["apples", "pears", "bananas", "oranges"];
  /*
    createElement
    createTextNode
    appendChild
    */
  let basketList = document.createElement("ul");
  basket.forEach((item) => {
    /* create text node, create li, append 
           append li to ul */
    let itemTextNode = document.createTextNode(item);
    let itemListItem = document.createElement("li");
    itemListItem.appendChild(itemTextNode);
    basketList.appendChild(itemListItem);
  });
  console.log(basketList);
  document.querySelector("#basket").appendChild(basketList);
