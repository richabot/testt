document.getElementById("submit").addEventListener("click",formSubmit);
function formSubmit(){
   var div1= document.getElementById("mother")
div1.style.display="none"



}

document.getElementById("otpsubmit").addEventListener("click",otpverify);



async function otpverify(){
    var otpvalue=document.querySelector("#xyz").value
    console.log(otpvalue,"opt")
    if(otpvalue==="1234")
    {
        console.log("Successfull")
        
               try {
                let formData = {
                    brand : form.elements[0].value,
                    year : form.elements[1].value,
                    type : form.elements[2].value,
                   kms : form.elements[3].value,
                    Description : form.elements[4].value,
                    Price : form.elements[5].value,
                }
                console.log(formData);
                formData = JSON.stringify(formData);
                let res = await fetch("https://whispering-badlands-80400.herokuapp.com/cars",{
                    method:"POST",
                    body : formData,
                    headers : {
                        "Content-Type" : "application/json"
                    }
                })
            
                let data = await res.json();
                alert("successfully registered");
            } catch (error) {
                console.log(error);
            }
            
    }
    else{
        console.log("Something went wrong")
    }
}

