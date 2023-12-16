const url = import.meta.env.VITE_GRADE_ENDPOINT;

export const getStudentGrade = async (data) => {
  if (!window.navigator.onLine) {
    return -5;
  } else {
    let result = await getData(data.className, data.studentId);
    return result;
  }
};

async function getData(className, studentId) {
  let result = -3;
  await fetch(`${url}?classes=${className}`)
    .catch(() => (result = -5))
    .then((response) => response.json())
    .then((data) => {
      if (data[0] !== undefined) result = -3;
      if (data[0].classes !== undefined) {
        result = -4;
        data[0].data.forEach((student) => {
          if (student.studentId === Number(studentId)) {
            result = student;
          }
        });
      }
    })
    .catch(() => {});
  return result;
}
