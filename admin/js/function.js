/* Team Name : LambdaX - Group 1
PROG 1180-02
Banuka Kumara Ambegoda
Ravisanka Siriwardenage
Adam Augier
Akash Slatch
Amritpal Singh 
2022-10-24*/

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

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
  let name = document.getElementById('CustomerName');
  let adress = document.getElementById('Address');
  let details = document.getElementById('OrderDetails');
  let items = document.getElementById('selectedItems');
  let cost = document.getElementById('OrderValue');
  let staff = document.getElementById('StaffID');
  var opt = document.createElement('option');
  var opt1 = document.createElement('option');
  items.innerHTML = "";
  
  opt.value = "i";
  opt.innerHTML = "i";

  if(num === "1"){
    name.value = "James Garfield";
    adress.value = "51 Well Ave, Welland ON";
    details.value = "Order proccesed succesfully";    
    cost.value = "$ 2000.00";
    staff.value = "2";
    opt.value = "1";
    opt.innerHTML = "Electric Lawn Mower";

  }
  else if(num === "2"){
    name.value = "Win Deasel";
    adress.value = "31 Dail Ave, Kitchner ON";
    details.value = "Order proccessing yet";    
    cost.value = "$ 900.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Electric Mower";
  }
  else if(num === "3"){
    name.value = "Michel Jorden";
    adress.value = "23 Lane Way, Vaugen ON";
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 1700.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  else if(num === "12"){
    details.value = "Order proccessing yet";    
    cost.value = "$ 900.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Electric Mower";
  }
  else if(num === "4"){
    name.value = "Dave Kendell";
    adress.value = "56 First Ave, St. Katherins ON";
    details.value = "Order proccesssed succesfully";    
    cost.value = "$ 1200.00";
    staff.value = "5";
    opt.value = "1";
    opt.innerHTML = "Lawn Mower Tire set";
  }
  else if(num === "5"){
    name.value = "Dave Stovell";
    adress.value = "27 Lane Way, Vaugen ON";
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 1700.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  else if(num === "6"){
    name.value = "Dave Corden";
    adress.value = "23 Lane Way, London ON";
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 1700.00";
    staff.value = "3";
    opt.value = "1";
    opt.innerHTML = "Hand Held Gas Mower";
  }
  
  else if(num === "6"){
    name.value = "Dave Corden";
    adress.value = "23 Lane Way, London ON";
    details.value = "Order proccesssed 2 days ago";    
    cost.value = "$ 1700.00";
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
  opt1.innerHTML = "Lawn Moweing Utility Kit";
  items.appendChild(opt1);
})





