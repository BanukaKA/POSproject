/* Team Name : LambdaX - Group 1
PROG 1180-02
Banuka Kumara Ambegoda
Ravisanka Siriwardenage
Adam Augier
Akash Slatch
Amritpal Singh 
2022-10-24*/
$('#demo').daterangepicker({
  "showISOWeekNumbers": true,
  "timePicker": true,
  "autoUpdateInput": true,
  "locale": {
      "cancelLabel": 'Clear',
      "format": "MMMM DD, YYYY @ h:mm A",
      "separator": " - ",
      "applyLabel": "Apply",
      "cancelLabel": "Cancel",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
      ],
      "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      "firstDay": 1
  },
  "linkedCalendars": true,
  "showCustomRangeLabel": false,
  "startDate": 1,
  "endDate": "December 31, 2016 @ h:mm A",
  "opens": "center"
});


const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
const selectElem = document.getElementById('repType');

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
$(window).on("load resize", function() {
  
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
  
});

$('#order').change(function(){
  let num = $(this).val();
  let details = document.getElementById('OrderDetails');
  let items = document.getElementById('selectedItems');
  let cost = document.getElementById('OrderValue');
  let staff = document.getElementById('StaffID');
  var opt = document.createElement('option');
  var opt1 = document.createElement('option');
  items.innerHTML = "";
  
  opt.value = "i";
  opt.innerHTML = "i";

  if(num === "12"){
    details.value = "Order proccessing yet";    
    cost.value = "$ 900.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Electric Mower";
  }
  else if(num === "7"){
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 1600.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  else if(num === "8"){
    details.value = "Order proccesssed 4 days ago";    
    cost.value = "$ 1700.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  else if(num === "9"){
    details.value = "Order proccesssed succesfully";    
    cost.value = "$ 1200.00";
    staff.value = "5";
    opt.value = "1";
    opt.innerHTML = "Lawn Mower Tire set";
  }
  else if(num === "10"){
    details.value = "Order proccesssed succesfully";    
    cost.value = "$ 1200.00";
    staff.value = "5";
    opt.value = "1";
    opt.innerHTML = "Lawn Mower Tire set";
  }
  else if(num === "11"){
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 800.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  else{
    name.value = "";
    adress.value = "";
    details.value = "";    
    cost.value = "";
    staff.value = "";
    opt.value = "";
    opt.innerHTML = "";
  }
  items.appendChild(opt);
  opt1.value = "2";
  opt1.innerHTML = "Machine Utility Kit Set";
  items.appendChild(opt1);
})



