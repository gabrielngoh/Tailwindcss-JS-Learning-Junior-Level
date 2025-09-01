const inputList = document.querySelectorAll('form input');
const submitbtn = document.querySelector('form button');
const messageList = document.querySelectorAll('form .Name , form .cardNumber, #Date_CVC span');
const [numCard, nameHolder, monthExp, yearExp] = document.querySelectorAll('.cardFront>div span');
const cvcOnCard = document.querySelector('.cardBack>span');
const [asideCardNumber, asideCardHolder, asideCardMonth, asideCardYear] = document.querySelectorAll('aside .cardFront>div span');
const asideCardCVC = document.querySelector('aside .cardBack span');

const cardTargets = [numCard, nameHolder, monthExp, yearExp, cvcOnCard];
const asideTargets = [asideCardNumber, asideCardHolder, asideCardMonth, asideCardYear, asideCardCVC];
const defaults = ['0000 0000 0000 0000', 'Jane Appleseed', '00', '00', '000'];

const patterns = [
  /^[a-z]+\s?[a-z]+$/i,
  /^\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}\s*$/,
  /^(0[1-9]|1[0-2])$/,
  /^(2[5-9]|[3-9]\d)$/,
  /^\d{3}$/
];

const empty = /^\s*$/;

const setState = (input, ok, msg = '') => {
  input.classList.remove('focus:outline-green-500', 'border-green-500', 'focus:outline-inputErrorsColorRed', 'border-inputErrorsColorRed');
  if (ok) input.classList.add('focus:outline-green-500', 'border-green-500');
  else input.classList.add('focus:outline-inputErrorsColorRed', 'border-inputErrorsColorRed');
  messageList[[...inputList].indexOf(input)].textContent = msg;
};

inputList.forEach((input, i) => {
  input.addEventListener('input', () => {
    const v = input.value.toUpperCase();
    cardTargets[i].textContent = asideTargets[i].textContent = empty.test(v) ? defaults[i] : v;
    if (empty.test(v)) setState(input, false, "can't be blank !!");
    else if (!patterns[i].test(v)) setState(input, false, 'Wrong , format !');
    else setState(input, true);
  });
});

const mainSection = document.querySelector('main');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const valid = [...inputList].every((el, i) => patterns[i].test(el.value));
  if (valid) {
    mainSection.innerHTML = `
      <div id="complete_state" class="text-center *:mb-4">
        <img src="./images/icon-complete.svg" class="w-1/5 mx-auto" alt="icon-complete">
        <h1 class="text-purple950 text-xl font-semibold">T H A N K  Y O U !</h1>
        <p class="text-gray400">We've added your card details</p>
        <button type="submit">Continue</button>
      </div>`;
    document.querySelector('#complete_state button').addEventListener('click', () => location.reload());
  } else {
    inputList.forEach((el, i) => el.dispatchEvent(new Event('input')));
  }
});
