let a;
let time;
let date;
setInterval(() => {
    a = new Date();
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    date = a.toLocaleDateString();
    ele = document.getElementById("time");
    ele.innerHTML = time + " on " + date;
}, 1000);

let add = document.getElementById("add");
add.addEventListener("Click", () => {
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    // populate the table
    let tablebody = document.getElementById("table");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
            <td>${index}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button>Delete</button></td>
        </tr> `;
    });
    tablebody.innerHTML = str;
});