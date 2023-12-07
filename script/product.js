
let output = document.getElementById('output')

let myProducts = [];

// list of products 
let products = [

    {
        id: 1, 
        name:'HP Mono LaserJet MFP 137fnw Printer' ,
        amount: 5309.00 ,
        image:'https://tech.co.za/wp-content/uploads/2022/02/4ZB84Aa-768x576.jpg'
    },
    {
        id:2,
        name:'Corsair TC200 Gaming Chair – Soft Fabric – ' ,
        amount: 7759.00 ,
        image:'https://tech.co.za/wp-content/uploads/2023/02/CF-9010049-WWa-768x576.png'
       
       
    }
    ,
    {
        id:3,
        name:'Dell P2418HT Touch Monitor – 23.8″' ,
        amount: 5819.00 ,
        image:'https://tech.co.za/wp-content/uploads/2019/06/DELL-P2418HT-510x383.jpg'
       
       
    }
    ,
    {
        id:4,
        name:'Asus Vivobook Pro 15 K6502ZC 15.6″ Laptop ' ,
        amount: 24159.00,
        image:'https://tech.co.za/wp-content/uploads/2023/07/Vivobook-Pro-15-K6502ZCa-768x576.png'
       
       
    }
    ,
    {
        id:5,
        name:'Logitech MK330 Wireless Keyboard and Mouse' ,
        amount: 699 ,
        image:'https://www.firstshop.co.za/cdn/shop/products/920-003989-keyboards-35708394340516_700x.jpg?v=1673263740'
       
    },

    
]
// this function will add the products to myProducts
function displayResults(){
    // this function will add the products to myProducts
    myProducts.push(...products)

    // console.log(myProducts);

        myProducts.forEach(item => {

            output.innerHTML += 
            `
            <div  class="card m-5" style="width: 15rem;">
            <img src="${item.image} " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <h4 class="card-text mt-5">R${item.amount}</h4>
              <button href="#" onclick='addCart(${JSON.stringify(item)})' class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
            `
        })

        // 4-adding products to localStorage
       
        localStorage.setItem('myProducts', JSON.stringify(myProducts))

    //must display them in the output
}

displayResults()

function searchProducts(){
    let sInput = document.querySelector('#Input');
    let searchedProds = products.filter( prod => {
        return prod.name.toLowerCase().includes( sInput.value )
    });
    
    output.innerHTML = ''
    searchedProds.forEach(item => {

        output.innerHTML += 
        `
        <div  class="card m-5" style="width: 17rem;">
        <img src="${item.image} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h4 class="card-text mt-5">${item.amount}</h4>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
        `
    })
}



function sortItems(){
    let sortedItems = myProducts.sort((item1, item2) => {
        return item2.amount - item1.amount;
    })

    console.log(sortedItems);
    output.innerHTML = ''
    sortedItems.forEach(ii=>{
        output.innerHTML += 
        `
        <div  class="card m-5" style="width: 17rem;">
        <img src="${ii.image} " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${ii.name}</h5>
          <h4 class="card-text mt-5">${ii.amount}</h4>

          <a href="#" class="btn btn-primary " onclick=''>Add to Cart</a>
        </div>
      </div>
        `
    })   
}

let checkout = []

function addCart(item){
    if(item){
        checkout.push(item)
        localStorage.setItem('Checkout', JSON.stringify(checkout))
    }
}
