let newOTP= Math.floor(100000 + Math.random() * 900000).toString()

function onSubmit(e) {
    e.preventDefault();
    document.getElementById('success').textContent="";
    const address = document.getElementById('input-address').value;
    const amount = document.getElementById('input-amount').value;
    const otp = document.getElementById('input-otp').value;

    //check for valid eth address and valid OTP
    if(!ethers.utils.isAddress(address)) document.getElementById('address-error').style.display="block"
    else if (otp!=newOTP) document.getElementById('otp-error').style.display="block"
    else {
        document.getElementById('address-error').style.display="none";
        document.getElementById('otp-error').style.display="none";
        document.getElementById('input-address').value="";
        document.getElementById('input-amount').value="";
        document.getElementById('input-otp').value="";
        document.getElementById('success').textContent="Transaction of " + amount +" ETH to " + address+" is successful!";
        newOTP= Math.floor(100000 + Math.random() * 900000).toString()
    }
    
}

//show otp
function toast() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    newOTP = Math.floor(100000 + Math.random() * 900000).toString()
    // Add the "show" class to DIV

    x.className = "show";
    x.textContent="Your OTP is: "+newOTP;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
  }

const form = document.getElementById('transaction-form');
form.addEventListener('submit', onSubmit);

const otpButton = document.getElementById('OTPbutton');
otpButton.addEventListener('click', toast);