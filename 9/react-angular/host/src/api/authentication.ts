export const login = (username: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username === "user" && password === "password");
    }, 1000);
  });
};
