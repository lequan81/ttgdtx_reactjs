const url = import.meta.env.VITE_GRADE_ENDPOINT;

let result;

export const getStudentGrade = async (data) => {
  let classValid = checkClass(data.className);
  let studentValid = checkStudenId(data.studentId);
  let classExist = await checkExist(data.className);

  if (!classValid && !studentValid) return -1;
  if (!classValid) return -2;
  if (!classExist && classExist !== -5) return -3;
  if (!studentValid) return -4;
  if (studentValid && classValid && classExist) {
    await getData(data.className, data.studentId);
  }

  if (!window.navigator.onLine || classExist === -5 || result === -5) {
    return -5;
  }
  if (result === undefined) {
    return -4;
  } else {
    return result;
  }
};

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

async function checkExist(className) {
  let isValid = await fetch(`${url}?classes=${className}`)
    .then((response) => response.json())
    .then((data) => {
      return (
        data[0].classes === String(className) && data[0].classes !== undefined
      );
    })
    .catch(() => {
      return -5;
    });
  return isValid;
}

async function getData(className, studentId) {
  await fetch(`${url}?classes=${className}`)
    .then((response) => response.json())
    .then((data) => {
      if (data[0] === undefined) {
        return -3;
      } else {
        data[0].data.forEach((student) => {
          if (student.studentId === Number(studentId)) {
            result = student;
          }
        });
      }
    })
    .catch(() => {
      return -5;
    });
}
