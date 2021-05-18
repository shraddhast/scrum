export default function validateInfo(state){

    let errors = {}

    if(!state.email) {
        errors.email = "Email required"
    } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(state.email) ) 
    {
        errors.email = "Not a valid Email" 
    }

    if(state.password === ""){
        errors.password = "Password required"
    }
   else if(!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(state.password)){
        errors.password = "Password should be Alphanumeric"
   }
   else if((state.password.length <= 8) || (state.password.length > 12)){
        errors.password ="Password length should be between 8-12"
    }

    if(state.cpassword === ""){
        errors.cpassword = "Password required"
    }
   else if(!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(state.cpassword)){
        errors.cpassword = "Password should be Alphanumeric"
   }
   else if(state.password !== state.cpassword){
        errors.cpassword = "Password does not match"
   }
 



    // if( state.ename === "") {
    //      errors.ename= "Name required"
    //  }
    //  else if (! /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(state.ename)){
    //     errors.ename = "Only Alphabets are allowed" 
     //}
    //  else if (! /^[A-Za-z]+$/.test(values.ename)){
    //     errors.ename = "Only Alphabets are allowed" 
    //  }

    //  if(values.password == ""){
    //      errors.password ="Enter Password"
    //  }
    //  else if((values.password.length <= 8) || (values.password.length > 12)){
    //     errors.password ="Password length should be between 8-12"
    // }
    // else if(!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(values.password)){
    // errors.password = "Password should be Alphanumeric"
    // }

     return errors;
}

    

