window.addEventListener("load", function () {
     var signup_form = document.getElementById("signup-form"); 
     signup_form.addEventListener("submit", function (event) {//when it get "submit" event it will invoke a function
         var XHR = new XMLHttpRequest();//creating http request object  from in built XMLHttprequest
         var form_data = new FormData(signup_form);//getti
     })
});