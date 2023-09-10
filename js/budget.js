function getElementInputFieldById(inputField) {
  const elementField = document.getElementById(inputField);
  const elementFieldQuantityString = elementField.value;
  const elementFieldQuantity = parseInt(elementFieldQuantityString);
  elementField.value = "";
  return elementFieldQuantity;
}

function getElementInnerTextById(innerText) {
  const elementInnerText = document.getElementById(innerText);
  const itemsPriceString = elementInnerText.innerText;
  const itemsPrice = parseInt(itemsPriceString);
  return itemsPrice;
}

function getElementByIdItemsPrice(id) {
  const itemsPrice = document.getElementById(id);
  const totalItemsPriceString = itemsPrice.innerText;
  const totalItemsPrice = parseInt(totalItemsPriceString);
  return totalItemsPrice;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

function elementCost(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}

function totalCost() {
  const chocolate = elementCost("chocolate");
  const rose = elementCost("rose");
  const diary = elementCost("diary");
  const total = chocolate + rose + diary;
  setTextElementValueById("total", total);
  return total;
}

document.getElementById("btn-kitKat").addEventListener("click", function () {
  const kitKatQuantity = getElementInputFieldById("kitKat-quantity");
  if (isNaN(kitKatQuantity)) {
    alert("please input a valid number");
    return;
  }
  const kitKatPrice = getElementInnerTextById("kitKat-price");
  const totalKitKatPrice = kitKatPrice * kitKatQuantity;

  const totalKitKatChocolateCost = getElementByIdItemsPrice("chocolate");
  setTextElementValueById("chocolate", totalKitKatPrice);
  totalCost();
});

document.getElementById("btn-rose").addEventListener("click", function () {
  const roseQuantity = getElementInputFieldById("rose-quantity");
  if (isNaN(roseQuantity)) {
    alert("please input a valid number");
    return;
  }
  const rosePrice = getElementInnerTextById("rose-price");
  const totalRosePrice = rosePrice * roseQuantity;

  const totalRoseCost = getElementByIdItemsPrice("rose");
  setTextElementValueById("rose", totalRosePrice);
  totalCost();
});

document.getElementById("btn-diary").addEventListener("click", function () {
  const diaryQuantity = getElementInputFieldById("diary-quantity");
  if (isNaN(diaryQuantity)) {
    alert("please input a valid number");
    return;
  }
  const diaryPrice = getElementInnerTextById("diary-price");
  const totalDiaryPrice = diaryPrice * diaryQuantity;

  const totalDiaryCost = getElementByIdItemsPrice("diary");
  setTextElementValueById("diary", totalDiaryPrice);
  totalCost();
});

function handlePromoCode() {
  const promoCode = document.getElementById("promo-code").value;
  if (parseInt(promoCode) === 101) {
    alert("Success Your promo code");
    const total = totalCost("total");
    setTextElementValueById("all-total", total - total * 0.1);
  } else {
    alert("promo code is not correct");
  }
}
