// document.getElementById('CurrYear').textContent = new Date().getFullYear()
let output = document.getElementById('output')
// I must have an empty array  to add the products
let myProducts = [];

// list of products 
let products = [

    {
        id: 1, 
        name:'HP Mono LaserJet MFP 137fnw Printer' ,
        amount:"R"+ 5309.00 ,
        image:'https://tech.co.za/wp-content/uploads/2022/02/4ZB84Aa-768x576.jpg'
    },
    {
        id:2,
        name:'Corsair TC200 Gaming Chair – Soft Fabric – ' ,
        amount:"R"+ 7759.00 ,
        image:'https://tech.co.za/wp-content/uploads/2023/02/CF-9010049-WWa-768x576.png'
       
       
    }
    ,
    {
        id:3,
        name:'Dell P2418HT Touch Monitor – 23.8″' ,
        amount:"R"+ 5819.00 ,
        image:'https://tech.co.za/wp-content/uploads/2019/06/DELL-P2418HT-510x383.jpg'
       
       
    }
    ,
    {
        id:4,
        name:'Asus Vivobook Pro 15 K6502ZC 15.6″ Laptop ' ,
        amount:"R"+ 24159.00,
        image:'https://tech.co.za/wp-content/uploads/2023/07/Vivobook-Pro-15-K6502ZCa-768x576.png'
       
       
    }
    ,
    {
        id:5,
        name:'Logitech MK330 Wireless Keyboard and Mouse' ,
        amount:"R"+ 699 ,
        image:'https://www.firstshop.co.za/cdn/shop/products/920-003989-keyboards-35708394340516_700x.jpg?v=1673263740'
       
    },
    {
        id:6,
        name:'Canon MAXIFY MB5440 A4 Multifunction Colour' ,
        amount:"R"+ 2940 ,
        image:'https://www.firstshop.co.za/cdn/shop/products/0971c040-multifunctional-printers-33525454504100_800x.png?v=1649777178'
       
    },
    {
        id:7,
        name:'HP USB-C Travel Hub G2 USB 3.2 Gen 3.1 Gen' ,
        amount:"R"+ 1249 ,
        image:'https://www.firstshop.co.za/cdn/shop/products/7pj38aa-interface-hubs-20743052361892_800x.png?v=1631397937'
       
    },
    {
        id:8,
        name:'Samsung UA55CU7000 55-inch Smart UHD TV  ' ,
        amount:"R"+ 9699 ,
        image:'https://www.firstshop.co.za/cdn/shop/files/ua55cu7000kxxa-monitors-43073042415780_800x.png?v=1690377049'
       
    },
    {
        id:9,
        name:'ATEN CS22U KVM Switch Black ' ,
        amount:"R"+ 485 ,
        image:'https://www.firstshop.co.za/cdn/shop/products/cs22u-kvm-switches-20742870139044_800x.png?v=1632095449'
       
    }
    ,
    {
        id:10,
        name:'Synology DiskStation DS220+ NAS/storage  ' ,
        amount:"R"+  7399,
        image:'https://www.firstshop.co.za/cdn/shop/products/ds220-network-attached-storage-20694678503588_600x.png?v=1630664448'
       
    }
    ,
    {
        id:11,
        name:'HP ProBook 450 G10 15.6-inch FHD Laptop ' ,
        amount:"R"+ 19999 ,
        image:'https://www.firstshop.co.za/cdn/shop/files/85b31ea-traditional-laptops-43137839497380_800x.png?v=1692186953'
       
    }
    ,
    {
        id:12,
        name:'Dell Inspiron 7430 14-inch Full HD   ' ,
        amount:"R"+ 26999 ,
        image:'https://www.firstshop.co.za/cdn/shop/files/quaken14-2n1-rpl2401-1006-2-in-1-laptops-42934538272932_800x.png?v=1686725212'
       
    }
    
]
// this function will add the products to myProducts
function displayResults(){
    // this function will add the products to myProducts
    myProducts.push(...products)

    // console.log(myProducts);

        myProducts.forEach(item => {

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

        // 4-adding products to localStorage
       
        localStorage.setItem('myProducts', JSON.stringify(myProducts))

    //must display them in the output
}

displayResults()


// functionality for sort btn 

function sortItems() {
    let sortt = getSortt();
    l
    Sortt.sort((a, b) => a.name.localeCompare(b.name));
    saveSortt(Sortt);
    displayItems();
function Sortt () {
    const storedSortt = localStorage.getItem('Sortt');
    return storedSortt ? JSON.parse(storedSortt) : [];
}
function saveSortt(Sortt) {
    localStorage.setItem('Sortt', JSON.stringify(Sortt));
    }} 

// if (Sortt.length === 0) {
//     output.innerHTML = '<p>the item not found.</p>';}


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
