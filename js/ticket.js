

let checkDuplicateSeat = [];

const seats = document.getElementsByClassName('seat');
for (let seat of seats) {
      seat.addEventListener('click', function (e) {

            if (checkDuplicateSeat.includes(e.target.firstChild.textContent)) {
                  return alert('You already buy this ticket!!');
            }

            else {
                  checkDuplicateSeat.push(e.target.firstChild.textContent);

                  // total seat purchased
                  const seatCount = getElementTextValueById('seat-count');
                  const updateSeatCount = seatCount + 1;

                  if (updateSeatCount > 4) {
                        alert("You can't buy more than 4 tickets!");
                        return;
                  }
                  else {

                        e.target.classList.remove('seat');
                        e.target.classList.add('new-seat');

                        updateElementTextById('seat-count', updateSeatCount);

                        // available seats
                        const availableSeats = getElementTextValueById('available-seats');
                        const updateAvailableSeats = availableSeats - 1;
                        updateElementTextById('available-seats', updateAvailableSeats);

                        const seatContainer = document.getElementById('seat-container');

                        const creatElement = document.createElement('div');
                        creatElement.innerHTML = `
                  <div class="flex justify-between items-center pb-3">
                        <p id="seat-name" class="text-[#03071299] text-base font-normal">${e.target.innerText}</p>
                        <p class="text-[#03071299] text-base font-normal font-raleway">Economy</p>
                        <p class="text-[#03071299] text-base font-normal font-raleway">550</p>
                  </div>
            `
                        seatContainer.appendChild(creatElement);

                        // Total Price
                        const totalPrice = getElementTextValueById('total-price');
                        const newTotalPrice = totalPrice + 550;
                        updateElementTextById('total-price', newTotalPrice);

                        // Grand Total
                        const grandTotal = getElementTextValueById('grand-total');
                        const newGrandTotal = grandTotal + 550;
                        updateElementTextById('grand-total', newGrandTotal);

                        document.getElementById('input-number').value = '';
                  }
            }
      })
}


const inputNumber = document.getElementById('input-number');
const nextBtn = document.getElementById('next-btn');

inputNumber.addEventListener('input', function () {
      if (inputNumber.value.length > 0 && checkDuplicateSeat.length > 0) {
            nextBtn.disabled = false;
      }
      else {
            nextBtn.disabled = true;
      }
})

const couponInput = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon-btn');

couponInput.addEventListener('input', function () {
      if (couponInput.value === 'NEW15') {
            couponBtn.disabled = false;

      }
      else if (couponInput.value === 'Couple20') {
            couponBtn.disabled = false;
      }
      else {
            couponBtn.disabled = true;
      }
});

function couponDiscount() {
      event.preventDefault();
      const totalPrice = getElementTextValueById('total-price');

      if (couponInput.value === 'NEW15') {
            const discount = totalPrice * (15 / 100);

            const priceContainer = document.getElementById('price-container');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between items-center pb-3 ">
                  <p class="text-[#030712] text-base font-medium">Discount</p>
                  <p class="text-[#030712] text-base font-medium">
                  BDT <span id="discount-price">${discount}</span>
                  </p>
            </div>
            `;
            priceContainer.appendChild(div);

            const priceAfterDiscount = totalPrice - discount;
            updateElementTextById('grand-total', priceAfterDiscount);

            const applyForm = document.getElementById('apply-form');
            applyForm.classList.add('hidden');

      }
      else if (couponInput.value === 'Couple20') {
            const discount = totalPrice * (20 / 100);

            const priceContainer = document.getElementById('price-container');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between items-center pb-3 ">
                  <p class="text-[#030712] text-base font-medium">Discount</p>
                  <p class="text-[#030712] text-base font-medium">
                  BDT <span id="discount-price">${discount}</span>
                  </p>
            </div>
            `;
            priceContainer.appendChild(div);

            const priceAfterDiscount = totalPrice - discount;
            updateElementTextById('grand-total', priceAfterDiscount);

            const applyForm = document.getElementById('apply-form');
            applyForm.classList.add('hidden');
      }

}

