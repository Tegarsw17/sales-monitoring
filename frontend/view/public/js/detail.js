let incrementButton = document.getElementById('increment')
let decrementButton = document.getElementById('decrement')
let counter = document.getElementById('counter')
let count = 0

incrementButton.addEventListener('click', function () {
  count++
  counter.textContent = count
  zeroCheck(count)
})

decrementButton.addEventListener('click', () => {
  count--
  counter.textContent = count
  zeroCheck(count)
})

function zeroCheck(count) {
  if (count == 0) {
    decrementButton.classList.add('invisible')
  } else {
    decrementButton.classList.remove('invisible')
  }
}

const addToCart = () => {
  const nameItem = document.getElementById('nameItem').innerHTML
  if (count != 0) {
    successAlert(
      `berhasil menambahkan ${count} ${nameItem}`,
      window.location.href
    )
  } else {
    errorAlert(`jumlah belum diisi`, window.location.href)
  }
}

function isCartHaveId() {
  if (!sessionStorage.getItem('cartId')) {
    alert('Yakin membuat cart baru?')
    sessionStorage.setItem('cartId', '15')
  }
  let personName = sessionStorage.getItem('cartId')
  document.getElementById('demo').innerHTML = personName
}
