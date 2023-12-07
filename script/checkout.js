
let checkoutItems = JSON.parse(localStorage.getItem('Checkout')) || [];
let display = document.querySelector('.displayItems')

function displayInTable(){
  // console.log(checkoutItems);
  
  let groupObject = Object.groupBy(checkoutItems, item => {
    // console.log(item);
    return item.id;
  })
  // I want to display the items in a table one by one 
// For in loop, is used to loop through index of each added item in the checkout

  for (let item in groupObject) {
    let qty = groupObject[item].length

    let amoutPerItem  = groupObject[item][0].amount * qty

    console.log(amoutPerItem);
    // console.log(qty);

    // console.log(groupObject[item][0].name);

    display.innerHTML += 
    `
    <tr>
      <td>${groupObject[item][0].name}</td>
      <td>${amoutPerItem}</td>
      <td>${qty}</td>
     
    </tr>
    `
  }

}

displayInTable()

document.addEventListener('DOMContentLoaded', function () {
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function () {
    clearTableItems();
  });
  function clearTableItems() {
    const displayItems = document.querySelector('.displayItems');
    displayItems.innerHTML = '';
  }
});

document.querySelector('[purchaseBtn]').addEventListener('click', ()=>{
  let backdrop = document.querySelector('.modal-backdrop')
  try{
    if(backdrop){
      backdrop.style.display = 'none'
    }
    
  }catch(e) {
    console.log(e)
  } finally{
    if(backdrop){
      breakackdrop.style.display = 'none'
    }
  }
})