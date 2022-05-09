


var form=document.querySelector("form");
    var userdata=JSON.parse(localStorage.getItem("userData"));



    form.addEventListener("submit",function(event){
        event.preventDefault();
         
        var data={
           
           email:form.email.value,
           password:form.pass.value,
       }

       if(userdata==null)
       {
           alert("please create an account");
       }
       else if(userdata.email==data.email && userdata.password==data.password)
       {
           alert("login succesfull");
           localStorage.setItem("signin",JSON.stringify(userdata));
           window.location.href="../Product_Category_Page/Product.html"
       }
       else{
           alert("user does not exist")
       }
     
    });