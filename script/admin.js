document.addEventListener('DOMContentLoaded', function () {
  // Myproducts
  const productsData = [
    { name: 'HP Mono LaserJet MFP 137fnw Printer', image: 'https://tech.co.za/wp-content/uploads/2022/02/4ZB84Aa-768x576.jpg', amount: 5309.00 },
    { name: 'Dell P2418HT Touch Monitor – 23.8 ', image: 'https://tech.co.za/wp-content/uploads/2019/06/DELL-P2418HT-510x383.jpg', amount: 7759 },
    { name: 'Corsair TC200 Gaming Chair – Soft Fabric  ', image: 'https://tech.co.za/wp-content/uploads/2023/02/CF-9010049-WWa-768x576.png', amount: 5309 },
    { name: 'Asus Vivobook Pro 15 K6502ZC 15.6″ Laptop  ', image: 'https://tech.co.za/wp-content/uploads/2023/07/Vivobook-Pro-15-K6502ZCa-768x576.png', amount: 24159 },
    { name: 'Logitech MK330 Wireless Keyboard and Mouse ', image: 'https://www.firstshop.co.za/cdn/shop/products/920-003989-keyboards-35708394340516_700x.jpg?v=1673263740', amount: 699 },
  ];
  // table body
  const tbody = document.querySelector('tbody[data-admin]');
  // Function updateAdminTable
  function updateAdminTable() {
    tbody.innerHTML = '';
    productsData.forEach((product, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${product.name}</td>
          <td><img src="${product.image}" alt="${product.name}" style="max-width: 50px; max-height: 50px;"></td>
          <td>${product.amount}</td>
          <td>
            <button class="btn btn-light btn-sm edit-btn" data-index="${index}">Edit</button>
            <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Delete</button>
          </td>
        `;
      tbody.appendChild(row);
    });
    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn')
    editButtons.forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        editProduct(index);
      });
    })
    deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        deleteProduct(index);
      });
    });
  }
  const addProductButton = document.getElementById('saveProduct');
  addProductButton.addEventListener('click', function () {
    const name = document.getElementById('addName').value;
    const amount = document.getElementById('addAmount').value;
    const image = document.getElementById('addImage').value;
    productsData.push({ name: name, image, amount });
    updateAdminTable();
    const addNewProductModal = new bootstrap.Modal(document.getElementById('addNewProduct'));
    addNewProductModal.hide();
  });
  updateAdminTable();
});
function editProduct(index) {
  const newName = prompt('Enter new name:');
  const newAmount = prompt('Enter new amount:');
  if (newName !== null && newAmount !== null) {
    productsData[index].name = newName;
    productsData[index].amount = parseFloat(newAmount);
    updateAdminTable();
  }
}
function deleteProduct(index) {
  const confirmDelete = confirm('Are you sure you want to delete this product?');
  if (confirmDelete) {
    productsData.splice(index, 1);
    updateAdminTable();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const sortingButton = document.getElementById('sorting');
  sortingButton.addEventListener('click', function () {
    sortTable();
  });
  // sort the table by product name functionn
  function sortTable() {
    const tableBody = document.querySelector('[data-admin]');
    const rows = Array.from(tableBody.children);
    rows.sort((rowA, rowB) => {
      const nameA = rowA.cells[0].textContent.trim().toLowerCase();
      const nameB = rowB.cells[0].textContent.trim().toLowerCase();
      return nameA.localeCompare(nameB);
    });
    tableBody.innerHTML = '';
    rows.forEach((row) => {
      tableBody.appendChild(row);
    });
  }
});
document.querySelector('[productBtn]').addEventListener('click', () => {
  let backdrop = document.querySelector('.modal-backdrop')
  try {
    if (backdrop) {
      backdrop.style.display = 'none'
    }
  } catch (e) {
    console.log(e)
  } finally {
    if (backdrop) {
      breakackdrop.style.display = 'none'
    }
  }
})