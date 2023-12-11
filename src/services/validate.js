export const validateForm = (fullname, email, phone, address, lesson) => {
  let nameValid = checkFullname(fullname);
  let phoneValid = checkPhone(phone);
  let emailValid = checkEmail(email);
  let addressValid = checkAddress(address);
  let lessonValid = checkLesson(lesson);

  if (nameValid && phoneValid && lessonValid && emailValid && addressValid) {
    return true;
  }
  if (
    !nameValid &&
    !phoneValid &&
    !lessonValid &&
    !emailValid &&
    !addressValid
  ) {
    return -1;
  } else {
    if (!nameValid) return -2;
    if (!emailValid) return -3;
    if (!addressValid) return -4;
    if (!phoneValid) return -5;
    if (!lessonValid) return -6;
  }
};

function checkFullname(fullname) {
  var regex =
    /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/g; // regex here
  return regex.test(fullname.toString().toLowerCase().trim());
}

function checkPhone(phone) {
  var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g; // regex here
  return regex.test(phone.toString().trim());
}

function checkEmail(email) {
  var regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i; // regex here
  return regex.test(email.toString().trim());
}

function checkLesson(lesson) {
  return lesson.toString().trim() === "" ? false : true;
}

function checkAddress(address) {
  return address.toString().trim() === "" ? false : true;
}
