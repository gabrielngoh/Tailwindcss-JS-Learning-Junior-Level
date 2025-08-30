
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
const cardFrontContent = document.querySelectorAll('.cardFront>div span');
const cvcOnCard = document.querySelector('.cardBack>span');
const accountNumber = document.querySelector('.account_number');
const nameHolder_CVC = document.querySelectorAll('.nameHolder_CVC>span ');
const [numCard , nameHolder , monthExp , yearExp] = cardFrontContent;
const cardInformationUpdate = [numCard , nameHolder , monthExp , yearExp , cvcOnCard];
const cardInformationInitial = ['0000 0000 0000 0000' , 'Jane Appleseed' , '00' , '00' , '000']

const [asideCardNumber, asideCardHolder, asideCardMonth, asideCardYear] = 
      document.querySelectorAll('aside .cardFront>div span');
const asideCardCVC = document.querySelector('aside .cardBack span');
const cardAsideInformationUpdate = [asideCardNumber, asideCardHolder, asideCardMonth, asideCardYear , asideCardCVC];

const nameFormat = /^[a-z]+\s?[a-z]+$/i
const cardNumber =/^\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}\s*$/
const monthCVC = /^(0[1-9]|1[0-2])$/
const yearCVC = /^(2[5-9]|[3-9]\d)$/
const CVC = /^\d{3}$/
const emptyValueReg = /^\s*$/

const validPatternArray = [nameFormat , cardNumber , monthCVC , yearCVC , CVC ]


inputList.forEach((input,index) => {
    input.addEventListener('input',()=>{
        
        isFormatValid(input,index);
    })

})

const updateCardInputList =[ inputList[1], inputList[0], inputList[2],inputList[3],inputList[4]]
updateCardInputList.forEach((input,index)=>{
    input.addEventListener('input',()=>{
        
        cardInformationUpdate[index].textContent = input.value.toUpperCase();
        cardAsideInformationUpdate[index].textContent = input.value.toUpperCase();
        if (emptyValueReg.test(input.value))
        {
            cardInformationUpdate[index].textContent = cardInformationInitial[index]
            cardAsideInformationUpdate[index].textContent = cardInformationInitial[index]
        }
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
            {  
                 if (input.classList.contains('focus:outline-green-500'))
                    {
                        input.classList.remove('focus:outline-green-500')
                        input.classList.remove('border-green-500')
                    }
                 
                        input.classList.add('focus:outline-inputErrorsColorRed','border-inputErrorsColorRed');        
                        messageList[index].textContent='incorrect format';
                    
            }
        else{
                     if (input.classList.contains('focus:outline-inputErrorsColorRed'))
                    {
                        input.classList.remove('focus:outline-inputErrorsColorRed')
                        input.classList.remove('border-inputErrorsColorRed')
                    }
                     input.classList.add('focus:outline-green-500','border-green-500');        
                     messageList[index].textContent='';
            }
                                     } 
        
                                // submission feature
const mainSection = document.querySelector('main')
const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  
  let isAllInputValid = validPatternArray.every((pattern, index) =>
    pattern.test(inputList[index].value)
  );

  if (isAllInputValid) {
   
    mainSection.innerHTML = `<div id = "complete_state" class=" text-center *:mb-4">
    <img src="./images/icon-complete.svg" class="w-1/5 mx-auto" alt="icon-complete">
    <h1 class=" text-purple950 text-xl font-semibold" >T H A N K  Y O U ! </h1>
    <p class=" text-gray400">We've added your card details</p>
      <button type="submit" >Continue</button>   
     </div>`;

  } else {
    inputList.forEach((input, index) => {
      isFormatValid(input, index);
    });
  }
});