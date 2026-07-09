// Mandy's Delicious Smokies
// WhatsApp Number
const whatsappNumber = "260975473945";

const chicken = document.getElementById("chicken");
const chickenQty = document.getElementById("chickenQty");

const fish = document.getElementById("fish");
const fishQty = document.getElementById("fishQty");

const beef = document.getElementById("beef");
const beefQty = document.getElementById("beefQty");

const summary = document.getElementById("summary");
const totalText = document.getElementById("total");

const orderBtn = document.getElementById("orderBtn");

let grandTotal = 0;

function calculateBill(){

    grandTotal = 0;

    let bill = "";

    //-------------------------
    // Chicken
    //-------------------------

    if(chicken.value !== "" && Number(chickenQty.value) > 0){

        const data = chicken.value.split("|");

        const name = data[0];
        const price = Number(data[1]);

        const qty = Number(chickenQty.value);

        const total = price * qty;

        grandTotal += total;

        bill += `
${name} x${qty}
K${total}

`;

    }

    //-------------------------
    // Fish
    //-------------------------

    if(fish.value !== "" && Number(fishQty.value) > 0){

        const data = fish.value.split("|");

        const name = data[0];
        const price = Number(data[1]);

        const qty = Number(fishQty.value);

        const total = price * qty;

        grandTotal += total;

        bill += `
${name} x${qty}
K${total}

`;

    }

    //-------------------------
    // Beef
    //-------------------------

    if(beef.value !== "" && Number(beefQty.value) > 0){

        const data = beef.value.split("|");

        const name = data[0];
        const price = Number(data[1]);

        const qty = Number(beefQty.value);

        const total = price * qty;

        grandTotal += total;

        bill += `
${name} x${qty}
K${total}

`;

    }

    if(bill === ""){
        bill = "No items selected.";
    }

    summary.innerHTML = bill.replace(/\n/g,"<br>");

    totalText.innerHTML = "K" + grandTotal.toFixed(2);

}

document.querySelectorAll("select,input").forEach(item=>{

    item.addEventListener("change",calculateBill);

    item.addEventListener("keyup",calculateBill);

});

calculateBill();

orderBtn.addEventListener("click",()=>{

    const customer = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const address = document.getElementById("address").value;

    const payment = document.getElementById("payment").value;

    if(customer===""){

        alert("Please enter your name.");

        return;

    }

    if(phone===""){

        alert("Please enter your phone number.");

        return;

    }

    let message =

`🍗 *MANDY'S DELICIOUS SMOKIES*

NEW CUSTOMER ORDER

👤 Name:
${customer}

📞 Phone:
${phone}

📍 Address:
${address}

------------------------
ORDER
------------------------

${summary.innerText}

💰 TOTAL:
K${grandTotal.toFixed(2)}

💳 Payment:
${payment}

*Delivery charges are calculated separately.*

Thank you!
`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});
