const url = import.meta.env.VITE_SIGNUP_ENDPOINT;

export const postSignUp = async (data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        createdAt: new Date().toLocaleDateString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      }),
    });

    return response.status;
  } catch (error) {
    return -1;
  }
};
