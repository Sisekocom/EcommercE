document.getElementById('CurrYear').textContent = new Date().getFullYear()
let cartSize = JSON.parse(localStorage.getItem('checkout'))?.length || 0
document.querySelector('[cartSize]').textContent = cartSize
let recentWrapper = document.querySelector('[data-recent-products]') || 0
// Retrieve data from the local storage
let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products',
        JSON.stringify(
            [
                {
                    "id": 1,
                    "make": "Dell",
                    "spec": "Latitude-E5450 i3 5th, HDD 1TB, RAM 16GB, Operating System Windows 11 Business",
                    "amount": 25000.00,
                    "image": "https://i.postimg.cc/65tcMqdc/Dell-Latitude-E5450-i3-5th-GEN-1-for-business-10000.jpg"
                },
                {
                    "id": 2,
                    "make": "Acer",
                    "spec": "Extensa 15.6 inch, SSD 256GB, RAM 8GB, Operating System Windows 10 Home",
                    "amount": 6240.00,
                    "image": "https://i.postimg.cc/gJKtZmp1/Acer-Extensa-15-6-inch-256-GBSSd-8-GBRAM.png"
                },
                {
                    "id": 3,
                    "make": "Acer",
                    "spec": "Travel Mate Intel Core i5, SSD 512GB, RAM 8GB, Operating System Windows 10 Pro",
                    "amount": 10000.00,
                    "image": "https://i.postimg.cc/0j2WGF2j/Acer-Travel-Mate-Intel-Corei5-SSD512-8-GBRAM.png"
                },
                {
                    "id": 4,
                    "make": "Lenovo",
                    "spec": "Idea Pad Intel Celeron, HDD 1TB, RAM 4GB, Operating System Windows 10 Home",
                    "amount": 6350.00,
                    "image": "https://i.postimg.cc/rwwdXLQg/Lenovo-IDea-Pad-1-TBHDD-4-GBRAM-6350.png"
                },
                {
                    "id": 5,
                    "make": "HP",
                    "spec": "Elite Book Intel core i5, SSD 256GB, RAM 8GB, Operating System Windows 11",
                    "amount": 25800.00,
                    "image": "https://i.postimg.cc/7Y83v1PB/HPElite-Book-Intel-Core-i5-1135-G7-256-GBSSD-8-GB.png"
                }
            ]
        ))
(
    function() {
        console.log(window.location.href);
    }
)()
recentWrapper.innerHTML = ""
if (products) {
    products.reverse().slice(0, products.length >> 1)
        .forEach((item) => {
            recentWrapper.innerHTML += `
        <div class="card">
            <div class="card-header bg-gradient bg-transparent">
                <h3>${item.make} ${item.spec.split(' ')[0].slice(0, item.spec.indexOf(' '))}</h3> 
            </div>
            <div class="card-body">
                <img class="img-fluid" src="${item.image}" loading="lazy"/>
                <div>                    
                    <span>Spec: 
                        <li>${item.spec}</li>
                    </span>
                </div>
            </div>
            <div class="card-footer bg-gradient bg-transparent">
                <p class="product-amount">Price: R${item.amount}</p>
            </div>
        </div>
    
        `
        })
} else {
    recentWrapper.innerHTML = `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `
}
