export default function validateInfo(state){

    let errors = {}

    if( state.name === "") {
         errors.name= "Name required" }
    else if (! /^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(state.name)){
        errors.name = "Only Alphabets are allowed" 
    }

    if(!state.email) {
        errors.email = "Email required" }
    else if(!/^[A-Za-z]{3,}[.][a-z]{2,}@[a-z]{2,}[.]{1}[a-z.]{2,}$/.test(state.email) ) {
        errors.email = "Not a valid Email" 
    }
    if(state.password === ""){
        errors.password = "Password required"
    }

    return errors;
}
   
