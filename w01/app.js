let name;
let amount = 0;
let totalAmount = 0;

const controller = document.querySelector('ion-alert-controller');
let inputName = document.getElementById('input-name');
let inputAmount = document.getElementById('input-amount');

function processForm(event) {
  event.preventDefault();

  name = inputName.value;
  amount = inputAmount.value;

  if (name !== '' && amount > 0) {
    totalAmount += Number(amount);

    let newItem = document.createElement('new-item');
    let list = document.getElementById('list-item');

    newItem.innerHTML = `<ion-item><text>${name}: Rp. ${amount}.00</text><ion-item>`;
    list.appendChild(newItem);

    let textTotal = document.getElementById('total-amount');

    textTotal.innerHTML = `Rp. ${totalAmount}.00`;

    clearInputValue();
  } else {
    controller
      .create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran',
        buttons: ['Tutup'],
      })
      .then((alert) => {
        alert.present();
      });
  }
}

function clearInputValue() {
  inputName.value = '';
  inputAmount.value = '';
}
