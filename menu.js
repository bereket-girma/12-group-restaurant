fetch("https://obscure-tundra-54269.herokuapp.com/fine-dining")
  .then((res) => res.json())
  .then((menu) => {
    document.querySelector("#apps").innerHTML = menu.appetizers
      .map(
        (item) =>
          `<h4>${item.name}.................................${item.price}</h4>
        <div class="descriptions">  
        <p class="menuDescription">${item.description}</p>
        <ul id="icons">
        <li id="infoIcon"><i class="fa fa-info-circle"></i><div class="infoPopup">*This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.</div></li>
        
        <li id="starIcon"><i class="fa fa-star" aria-hidden="true"></i></li>
        <div class="starPopup">We have been doing this a long time and this item has become one of our favorites.</div>
        <li id="spicyIcon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></li>
        <div class = "spicyPopup">This item is spicy, please handle with care and drink lots of water.</div>
        <li id="veganIcon"><i class="fa fa-leaf"></i></li>
        <div class="veganPopup">This item contains no meat and has been prepared without the use of animal products.</div>
        </ul>
        </div>`
      )
      .join("");
    document.querySelector("#entrees").innerHTML = menu.entrees
      .map(
        (item) =>
          `<h4>${item.name}.................................${item.price}</h4>
          <div class="descriptions">  
          <p class="menuDescription">${item.description}</p>
          <ul id="icons">
          <li id="infoIcon"><i class="fa fa-info-circle"></i><div class="infoPopup">*This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.</div></li>
          
          <li id="starIcon"><i class="fa fa-star" aria-hidden="true"></i></li>
          <div class="starPopup">We have been doing this a long time and this item has become one of our favorites.</div>
          <li id="spicyIcon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></li>
          <div class = "spicyPopup">This item is spicy, please handle with care and drink lots of water.</div>
          <li id="veganIcon"><i class="fa fa-leaf"></i></li>
          <div class="veganPopup">This item contains no meat and has been prepared without the use of animal products.</div>
          </ul>
          </div>`
      )
      .join("");
    document.querySelector("#desserts").innerHTML = menu.desserts
      .map(
        (item) =>
          `<h4>${item.name}.................................${item.price}</h4>
        <div class="descriptions">  
        <p class="menuDescription">${item.description}</p>
        <ul id="icons">
        <li id="infoIcon"><i class="fa fa-info-circle"></i><div class="infoPopup">*This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.</div></li>
        
        <li id="starIcon"><i class="fa fa-star" aria-hidden="true"></i></li>
        <div class="starPopup">We have been doing this a long time and this item has become one of our favorites.</div>
        <li id="spicyIcon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></li>
        <div class = "spicyPopup">This item is spicy, please handle with care and drink lots of water.</div>
        <li id="veganIcon"><i class="fa fa-leaf"></i></li>
        <div class="veganPopup">This item contains no meat and has been prepared without the use of animal products.</div>
        </ul>
        </div>`
      )
      .join("");
  });
