const url = import.meta.env.VITE_SIGNUP_ENDPOINT;

export const postSignUp = async (data) => {
  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.ok;
    })
    .catch(() => {
      return -1;
    });

  return result !== undefined ? result : -1;
};
