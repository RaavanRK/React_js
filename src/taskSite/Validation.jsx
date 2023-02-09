function validation (type,data){
    switch(type){
        case 'name' : { 
            const regexName =/[\d\s!@#$%^&*()_+=]/;
            if(data === ''){
                return { error: true,  message:'should not be empty', isDisabled: true  }   }
            else if(data.match(regexName)){
                return { error: true,  message:'invalid input', isDisabled: true  }  }
            else{ return { error: false,  message:'', isDisabled: false  }  }
        }
        case 'email' : {  
            const regexEmail= /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
            if(data ===''){
                return{ error: true,  message:'should not be empty', isDisabled: true  }  }
            else if(!data.match(regexEmail)){
                return{ error: true,  message:'invalid input', isDisabled: true  }
            }else{
                return{ error: false,  message:'', isDisabled: false  }
            }
          }
        case 'password' : {  
            const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
            if(data === ''){ 
                return { error: true, message: "should not be empty", isDisabled: true}   }
            else if(!data.match(regexPassword)){    
                return { error: true, message:'invalid input', isDisabled: true}; }
            else {  return { error:false, message:'', isDisabled: false}}
           }
        default : { }
    }
}
export default validation