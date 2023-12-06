
let cartSize = JSON.parse(localStorage.getItem('Checkout')).length || 0
console.log(cartSize);

document.querySelector('[cartSize]').textContent = cartSize;

let List = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) : [];
let tbody = document.querySelector('tbody');
(function displayCheckOut() {
    try {
        if (!List.length) throw "Please add the product to the checkout list.";
        let groupBy = Object.groupBy(List, item => {
            return item.id
        })
        let amountDue = 0;
        for (let idx in groupBy) {
            let totalAmount = groupBy[idx].length * groupBy[idx][0].amount;
            amountDue += totalAmount;
            tbody.innerHTML += `
                <tr>
                    <td>${groupBy[idx][0].name}</td>
                    <td>${groupBy[idx][0].amount}</td>
                    <td>${groupBy[idx].length}</td>
                    <td>R${totalAmount}</td>
                </tr>
            `
        }
        // Display the amount due
        tbody.innerHTML += `
            <tr class="amount-due">
                <td></td>                    
                <td></td>                    
                <td>Amount Due:</td> 
                <td>R${amountDue}</td>
            </tr>
        `
    } catch (e) {
        tbody.innerText = e;
        tbody.style = "font-weight: bold; font-size: 8rem;"
    }
})();

let clearAll = document.querySelector('#clearAll');
clearAll.addEventListener('click', () => {
    localStorage.removeItem('checkout');
    tbody.innerHTML = "Please add the product to the checkout list.";
})