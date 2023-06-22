const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);



const getSum = () => {
//Add your code here

    let ans=0;
    price.forEach((e) => {
        ans += parseInt(e.textContent);
    })

    

    const table = document.querySelector('table');
    const newRow = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.textContent = "Total";
    const cell2 = document.createElement("td");
    cell2.textContent = ans;
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    let existingTotalRow = document.querySelector('#totalRow');
    if(existingTotalRow){
        existingTotalRow.remove();
    }

    newRow.id = "totalRow";
    table.appendChild(newRow);

};

let price = document.querySelectorAll('.price');

getSumBtn.addEventListener("click", getSum);





