const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    price.forEach((e) => {
        sum += parseInt(e.textContent);
    })

    const table = document.querySelector('table');
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = "Total";
    const cell2 = document.createElement("td");
    cell2.textContent = sum;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);

};

let price = document.querySelectorAll('.price');
let sum=0;

getSumBtn.addEventListener("click", getSum);





