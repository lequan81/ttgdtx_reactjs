const url = import.meta.env.VITE_GRADE_ENDPOINT;

export const getStudentGrade = async (className, studentId) => {
  let classValid = checkClass(className);
  let studentValid = checkStudenId(studentId);
  let classExist = await checkExist(className);
  let result;

  if (!classValid && !studentValid) return -1;
  if (!classValid) return -2;
  if (!classExist) return -3;
  if (!studentValid) return -4;
  if (!window.navigator.onLine) return -5;
  if (studentValid && classValid && classExist) {
    await fetch(`${url}?classes=${className}`)
      .then((response) => response.json())
      .then((data) => {
        if (data[0] === undefined) {
          result = -3;
          return -3;
        } else {
          data[0].data.map((student) => {
            if (student.studentId === Number(studentId)) {
              result = student;
            }
          });
        }
      })
      .catch(() => {});
  }
  return result !== undefined ? result : -4;
};

function checkClass(className) {
  const regex = /^([0-9][a-zA-z]?|[0-9])/g; // regex here
  return regex.test(className.toString().toLowerCase().trim());
}

function checkStudenId(studentId) {
  if (studentId.toString().trim() === "") {
    return false;
  } else {
    const regex = /^([0-9])/g;
    return regex.test(studentId.toString().trim());
  }
}

async function checkExist(className) {
  let isValid = await fetch(`${url}?classes=${className}`)
    .then((response) => response.json())
    .then((data) => {
      return data[0].classes === className && data[0].classes !== undefined;
    })
    .catch(() => {});
  return isValid;
}
