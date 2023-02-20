
let num = 0 ;
document.getElementById("first-card").addEventListener('click', function(){
    num = num + 1;
    const fName =document.getElementById('first-name').innerText;
    const fPrice =document.getElementById('first-price').innerText;
    const fQuantity =document.getElementById('first-quantity').innerText;
    const Total =fPrice * fQuantity;
    // console.log(fName, fPrice,fQuantity);
    // console.log(Total);
    createTable(num, fName, fPrice, fQuantity, Total)

    document.getElementById('first-card').setAttribute("disabled", true);
})

document.getElementById("second-card").addEventListener('click', function(){
    num = num + 1;
    const sName =document.getElementById('SecondName').innerText;
    const sPrice =document.getElementById('secondPrice').innerText;
    const sQuantity =document.getElementById('secondQuantity').innerText;
    const Total =sPrice * sQuantity/100;
    const vats =  "VAT" + " " + Total +" " + "TAKA";
    // console.log(fName, fPrice,fQuantity);
    // console.log(Total);
    createTable(num, sName, sPrice, sQuantity, vats)

    document.getElementById('second-card').setAttribute("disabled", true);
})


document.getElementById("third-card").addEventListener('click', function(){
    num = num + 1;
    const tName =document.getElementById('third-title').innerText;
    const tPrice =document.getElementById('third-price').innerText;
    const tQuantity =document.getElementById('third-quantity').innerText;
    const Total =tPrice / tQuantity;
    // console.log(fName, fPrice,fQuantity);
    // console.log(Total);
    createTable(num, tName, tPrice, tQuantity, Total)

    document.getElementById('third-card').setAttribute("disabled", true);
})

document.getElementById("second-last").addEventListener('click', function(){
    num = num + 1;
    const LName =document.getElementById('SLName').innerText;
    const LPrice =document.getElementById('SLPrice').innerText;
    const LQuantity =document.getElementById('SLQuantity').innerText;
    const Total =LPrice * LQuantity;
    // console.log(fName, fPrice,fQuantity);
    // console.log(Total);
    createTable(num, LName, LPrice, LQuantity, Total);

    document.getElementById('second-last').setAttribute("disabled", true);
})


document.getElementById("last-card").addEventListener('click', function(){
    num = num + 1;
    const last_title =document.getElementById('last-title').innerText;
    const first_input =document.getElementById('first-input').value;
    const last_input =document.getElementById('second-input').value;
    const Total =parseInt(first_input) + parseInt(last_input);
   
    createTable(num, last_title, first_input, last_input, Total)

    document.getElementById('last-card').setAttribute("disabled", true);
})


function createTable(num, fName, fPrice, fQuantity, Total){
    const setTable=document.getElementById('table-container');
    const tr =document.createElement('tr');
       
    tr.innerHTML=`
        <td>${num}</td>
        <td>${fName}</td>
        <td>${fPrice}</td>
        <td>${fQuantity}</td>
        <td>${Total}</td>
        <td><button class="btn"><i class="fa-solid fa-trash dlt-btn"></i></button></td>
    `
    setTable.appendChild(tr);
    delate();

}

function delate(){

    const allList =document.getElementsByClassName('dlt-btn');
   for (let i = 0; i < allList.length; i++) {
    const element = allList[i];
    element.addEventListener('click', function(event){
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
        event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
    })
    
   }
   
}

