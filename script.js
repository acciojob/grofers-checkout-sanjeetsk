const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let ans=0;

const getSum = () => {
//Add your code here
    price.forEach((e) => {
        ans += parseInt(e.textContent);
    })

    const table = document.querySelector('table');
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = "Total";
    const cell2 = document.createElement("td");
    cell2.textContent = ans;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);

};

let price = document.querySelectorAll('.price');

getSumBtn.addEventListener("click", getSum);





