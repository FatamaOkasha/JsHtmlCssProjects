function calcAge() {
  const buttonElement = document.querySelector(".js-data-input");
  const ageString = buttonElement.value;
  const birthdate = new Date(ageString);
  const inputDay = birthdate.getDate();
  const inputMonth = birthdate.getMonth() + 1;
  const inputYear = birthdate.getFullYear();

  const date = new Date();
  let Currentday = date.getDate();
  let Currentmonth = date.getMonth() + 1;
  let Currentyear = date.getFullYear();

  document.querySelector(".output-paragraph").innerHTML = `Your are ${
    Currentyear - inputYear
  } years, ${Currentmonth - inputMonth} months and ${
    Currentday - inputDay
  } days old`;
}
