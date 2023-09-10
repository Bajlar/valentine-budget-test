// calculate kitKat chocolate price with quantity
document.getElementById("btn-kitKat").addEventListener("click", function () {
  const kitKatCost = multiplePriceWithQuantity("kitKat-quantity", 200);
  setInnerText("chocolate", kitKatCost);
  document.getElementById("kitKat-quantity").value = "";
  total();
});

// calculate rose  price with quantity
document.getElementById("btn-rose").addEventListener("click", function () {
  const roseCost = multiplePriceWithQuantity("rose-quantity", 100);
  setInnerText("rose", roseCost);
  document.getElementById("rose-quantity").value = "";
  total();
});

// calculate diary  price with quantity
document.getElementById("btn-diary").addEventListener("click", function () {
  const diaryCost = multiplePriceWithQuantity("diary-quantity", 500);
  setInnerText("diary", diaryCost);
  document.getElementById("diary-quantity").value = "";
  total();
});

function total(params) {
  const chocolate = stringToNumberConverter("chocolate");
  const rose = stringToNumberConverter("rose");
  const diary = stringToNumberConverter("diary");
  const total = chocolate + rose + diary;
  setInnerText("total", total);
}

// pass the id of the tag this function will convert just innerText to number
function stringToNumberConverter(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}

// this function will take id & value of tag and set innerText
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// this function will calculate the quantity and price of gift this function will take two parameter inputField id & price of gift
function multiplePriceWithQuantity(id, price) {
  const quantity = document.getElementById(id).value;
  const totalPrice = parseInt(quantity) * parseInt(price);
  return totalPrice;
}

function handlePromoCode(params) {
  const promoCode = document.getElementById("promo-code").value;
  if (promoCode == "101") {
    const total = stringToNumberConverter("total");
    setInnerText("all-total", total - total * 0.1);
  } else {
    alert("promo code is not correct");
  }
}
