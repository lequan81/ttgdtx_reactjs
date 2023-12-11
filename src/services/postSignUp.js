// const url = import.meta.env.VITE_SIGNUP_ENDPOINT;
const url = "";

export const postSignUp = async (data) => {
  let result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result;
};
