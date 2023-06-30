let products = {
  data: [
    {
      productName: "Regular white T-shirt",
      category: "Topwear",
      price: "30",
      image: "images/Regular-white-T-shirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "images/Beige-Short-Skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/Sporty-SmartWatch.jfif",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/Basic-Knitted-Top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/Black-Leather-Jacket.jfif",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/Stylish-Pink-Trousers.jfif",
    },
    {
      productName: "Brown Man's Jacket",
      category: "Jacket",
      price: "156",
      image: "images/Brown-Man's-Jacket.jfif",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "78",
      image: "images/Comfy-Gray-Pants.jfif",
    },
  ],
};
for (let i of products.data) {
  //create card
  let card = document.createElement("div");
  //card should have category and shouls stay hidden
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("imageContainer");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  card.appendChild(name);
  // card.appendChild(container)
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  card.appendChild(price);

  document.getElementById("products").appendChild(card);
}
//parameter passed from button(parametr same as category)
function filterProduct(value) {
  //button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //Select all cards
  let elements=document.querySelectorAll('.card');
  //loop through all cards
  elements.forEach((elements)=>{
    //display all cards on 'all' button click
    if(value=="all"){
      elements.classList.remove('hide')
    }else{
      //click if element contains category class
      if(elements.classList.contains(value)){
        elements.classList.remove('hide')
      }else{
        //hide other element
        elements.classList.add('hide')
      }
    }
  })
}
//Search button click
document.getElementById("search").addEventListener('click',()=>{
  //initialzations
  let searchInput=document.getElementById("search-input").value;
  let elements=document.querySelectorAll('.product-name');
  let cards=document.querySelectorAll('.card');


  //loop through all elements
  elements.forEach((element,index)=>{
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
     cards[index].classList.remove('hide') ;

    }else{
      //hide othes
      cards[index].classList.add('hide');
    }
  })
})
//Initially display all products
window.onload = () => {
  filterProduct("all");
};
