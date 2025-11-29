function electricity(){
    const num1=parseFloat(document.getElementById('num1').value);
    let calculate=0;
   if (num1 <= 100) {
        calculate = num1 * 5;
    }

    // Slab 2: 101 – 200 units → ₹7
    else if (num1 <= 200) {
        calculate = (100 * 5) + ((num1 - 100) * 7);
    }

    // Slab 3: above 200 units → ₹10
    else {
        calculate = (100 * 5) + (100 * 7) + ((num1 - 200) * 10);
    }
document.getElementById('calculate').textContent=`Total Electricity Bill Rs|:${calculate}`;
}