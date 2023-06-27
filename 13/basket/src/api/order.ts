import { Pizza } from "../types/models";

export const submitOrder = (pizzas: Pizza[]): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};
