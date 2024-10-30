let y = Math.floor((Math.random() * 10) + 1);
let rounds = 3;
console.log(y);

function login() {
    let x = document.getElementById("txtUserName").value;
    if (rounds > 0) {
        if (x == y) {
            alert("CONGRATULATIONS!!!😍😘👍");
            rounds = 0;
        } else if (x > y) {
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        } else {
            alert("OOPS SORRY!! TRY A GREATER NUMBER");
        }
        rounds--;
    }else{
        alert("iwarai yko");
    }
}
