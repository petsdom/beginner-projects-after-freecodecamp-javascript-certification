let bill = document.getElementById("bill")
let tip = document.getElementById("tip")
let result = document.getElementById("result")

function calTotalBill(){
    // get values
    let billAmount = Number(bill.value)
    let tippercent = Number(tip.value)
    // convert percentage to number
    let tipamount = tippercent * billAmount/100 
    // add both values
    let amount = billAmount + tipamount
    // display amount on screen
    result.innerText = `Total amount: ${amount}`

}