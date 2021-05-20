function calc(){
let num1 = Number(document.querySelector("#adult").value);
let date1 = new Date(document.getElementById("fromdate").value);
let date2 = new Date(document.getElementById("todate").value);
if(date2 < date1){
alert('date should not be in minus');
}else{
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    let sum = (num1 * Difference_In_Days) * 1000;
    document.getElementById("total").value = "Rs." + sum;

}
}
