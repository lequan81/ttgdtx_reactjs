export const validateForm = (data) => {
  let nameValid = checkFullname(data.fullname);
  let phoneValid = checkPhone(data.phone);
  let emailValid = checkEmail(data.email);
  let addressValid = checkAddress(data.address);
  let lessonValid = checkLesson(data.lesson);

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

export const validateGrade = (data) => {
  let classValid = checkClass(data.className);
  let studentValid = checkStudenId(data.studentId);

  if (!classValid && !studentValid) return -1;
  if (!classValid) return -2;
  if (!studentValid) return -4;
};

function checkFullname(fullname) {
  var regex =
    /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/g; // regex here
  return regex.test(String(fullname).toLowerCase().trim());
}

function checkPhone(phone) {
  var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g; // regex here
  return regex.test(String(phone).trim());
}

function checkEmail(email) {
  var regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i; // regex here
  return regex.test(String(email).trim());
}

function checkLesson(lesson) {
  return String(lesson).trim() === "" ? false : true;
}

function checkAddress(address) {
  return String(address).trim() === "" ? false : true;
}

function checkClass(className) {
  if (String(className).trim() === "") {
    return false;
  } else {
    const regex = /^([0-9][a-zA-z]?|[0-9])/g; // regex here
    return regex.test(String(className).toLowerCase().trim());
  }
}

function checkStudenId(studentId) {
  if (String(studentId).trim() === "") {
    return false;
  } else {
    const regex = /^([0-9])/g;
    return regex.test(String(studentId).toString().trim());
  }
}
