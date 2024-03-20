const url = import.meta.env.VITE_SIGNUP_ENDPOINT;

export const postSignUp = async (data) => {
  try {
    let requestTime = new Date();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        createdAt:
          new Date(
            requestTime.getTime() - requestTime.getTimezoneOffset() * 60000
          )
            .toISOString()
            .split(".")[0] + "+07:00",
      }),
    });

    return response.status;
  } catch (error) {
    return -1;
  }
};
