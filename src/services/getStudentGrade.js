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
  try {
    const response = await fetch(`${url}?classes=${className}`);
    if (!response.ok) {
      return -5;
    }
    const data = await response.json();

    if (data[0] === undefined || data[0].classes === undefined) {
      return -3;
    }

    for (let i = 0; i < data[0].data.length; i++) {
      const student = data[0].data[i];
      if (student.studentId === Number(studentId)) {
        return student;
      }
    }

    return -4;
  } catch (error) {
    return -5;
  }
}
