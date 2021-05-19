function validateInfo(state){

    let errors = {}

    if(!state.email) {
        errors.email = "Email required"
    } else if(!/^[A-Za-z]{3,}[.][a-z]{2,}@[a-z]{2,}[.]{1}[a-z.]{2,}$/.test(state.email)) {
         errors.email = "Not a valid Email" 
    }

//     if(state.password === ""){
//         errors.password = "Password required"
//     }
//    else if(!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(state.password)){
//         errors.password = "Password should be Alphanumeric"
//    }





    // else if((state.password.length <= 8) || (state.password.length > 12)){
    //     state.password ="Password length should be between 8-12"
    // }
 
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
export default validateInfo
    

