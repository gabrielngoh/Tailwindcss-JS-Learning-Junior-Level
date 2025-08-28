
// ``` 
// *** FEATURE LIST ***
// 1. Afficher un message d'erreur  lorsque :
//   - Certains champs sont vides : Can't be blank ! (soumission du formulaire avec submit event)
//   - Certains Champs dans le mauvais format Wrong Format, number only ! (soumission du formulaire)

// 2. Mise a jour en direct dans la carte 

// ```

// ``` Feature 1 Steps :

//  - selectionner les inputs dans le DOM done
//  - verifier si les inputs sont vides done
//  - verifier si les inputs ont le mauvais format 
// ```
const inputList = document.querySelectorAll('form input');
const submitbtn = document.querySelector(' form button')
const messageList = document.querySelectorAll('form .Name , form .cardNumber, #Date_CVC span')
const cardFrontContent = document.querySelector('.cardFront>div>span')
const cardBackContent = document.querySelector('.cardBack>span')

const nameFormat = /^[a-z]+\s?[a-z]+$/i
const cardNumber =/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/
const monthCVC = /^(0[1-9]|1[0-2])$/
const yearCVC = /^(2[5-9]|[3-9]\d)$/
const CVC = /^\d{3}$/
const emptyValueReg = /^\s*$/

const validPatternArray = [nameFormat , cardNumber , monthCVC , yearCVC , CVC ]


inputList.forEach((input,index) => {
    input.addEventListener('input',()=>{
        //isInputEmpty (input,index)
        isFormatValid(input,index);
    })

})

function isFormatValid (input,index)
{
    (!validPatternArray[index].test(input.value)) ? isInputEmpty(input,index) : validateState(input,index)
}

function validateState(input,index)
{
         input.classList.add('focus:outline-green-500','border-green-500');
         messageList[index].textContent='';
         isInputEmpty(input,index)
}

function isInputEmpty (input,index)
{
        displayInvalidInputMsg(input, index)       
}

function displayInvalidInputMsg(input, index){
      if (emptyValueReg.test(input.value))
            {
                messageList[index].textContent='can\'t be blank !!';
                input.classList.add('outline-inputErrorsColorRed');
        
            }     
     else
            {
         valpatern(input, index)
            }
        }


        function valpatern (input , index){
                   if((!validPatternArray[index].test(input.value)))
{   if (input.classList.contains('focus:outline-green-500'))
{
    input.classList.remove('focus:outline-green-500')
    input.classList.remove('border-green-500')
}
   else{ 
    input.classList.add('focus:outline-inputErrorsColorRed','border-inputErrorsColorRed');        
                messageList[index].textContent='incorrect format';
   }
}
else{
input.classList.add('focus:outline-green-500','border-green-500');        
                messageList[index].textContent='';
            }
            } 
        