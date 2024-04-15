
const seats = document.getElementsByClassName('seat');
for (let seat of seats) {
      seat.addEventListener('click', function (e) {

            e.target.classList.remove('seat');
            e.target.classList.add('new-seat');

            // total seat purchased
            const seatCount = getElementTextValueById('seat-count')
            const updateSeatCount = seatCount + 1;
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



      })
}