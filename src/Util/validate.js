export const validate =(newVal)=>{
    if(newVal.length <5){
        return {
            errorText:"minimmum letters is 6",
            isValid: false 
        }
    } else {return{
        errorText:"It's okay",
        isValid: true
    }}
}