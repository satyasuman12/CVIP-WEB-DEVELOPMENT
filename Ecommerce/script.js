

let products ={
    data: [
      {
        productName: " Watch",
        category: "Watch",
        price: "799",
        image:
          "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: " Short Skirt",
        category: "Skirt",
        price: "499",
        image:
          "https://images.unsplash.com/photo-1570413832533-1f48e8fd6b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcnQlMjBza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: " Knitted Top",
        category: "Topwear",
        price: "299",
        image:
          "https://images.unsplash.com/photo-1555085506-82b8d30d8380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtuaXR0ZWQlMjB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Men's Jacket",
        category: "Jacket",
        price: "1999",
        image:
          "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Leather Jacket",
        category: "Jacket",
        price: "1899",
        image:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Pink Trousers",
        category: "Skirt",
        price: "899",
        image:
          "https://plus.unsplash.com/premium_photo-1671641797334-4a12540f7462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpbmslMjB0cm91c2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Gray Pants",
        category: "Skirt",
        price: "499",
        image:
          "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JheSUyMHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "T-Shirt",
        category: "Topwear",
        price: "369",
        image:
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Short Skirt",
        category: "Skirt",
        price: "499",
        image:
          "https://images.unsplash.com/photo-1604728716030-dbe6f830336a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnQlMjBza2lydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Smart Watch",
        category: "Watch",
        price: "1799",
        image:
          "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        productName: "Short Top",
        category: "Topwear",
        price: "599",
        image:
          "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3J0JTIwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      },
    ],
  };


  for (let i of products.data) {
    //   console.log(i);
  
    //Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
  
    //container
    let container = document.createElement("div");
    container.classList.add("container");
  
    card.innerHTML = `
      <div class="image-container"><img src="${i.image}"></div>
      <div><i class='bx bx-heart' id="heart-icon" ></i></div>
      <div class="container">
           <div>
              <h5 class="product-name">${i.productName.toUpperCase()}</h5>
              <h6>₹ ${i.price}</h6>
          </div>
          <button class="cart-btn">Add to Cart</button>
      </div>
      `;
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
  
    //loop through all cards
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      // console.log(index + " Index");
  
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  window.onload = () => {
    filterProduct("all");
  };
  
  // heart 
  
  let heartBtns = document.querySelectorAll("#heart-icon");
  heartBtns.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("bxs-heart");
    });
  });