import React, { useEffect, useState } from "react";
import { Pizza } from "../types/models";
import { submitOrder } from "../api/order";

const Basket: React.FC = () => {
  const initialPizzaList = (window as any).sharedState.getState("pizzaList");
  const [pizzaList, setPizzaList] = useState<Pizza[]>(initialPizzaList ?? []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    const result = await submitOrder(pizzaList);
    setIsSubmitting(false);

    if (result) {
      alert("Order submitted successfully!");
    } else {
      alert("Failed to submit order.");
    }
  };
  // Assumes a fixed tax rate
  const TAX_RATE = 0.1;

  useEffect(() => {
    setTotalPrice(
      pizzaList.reduce((acc: number, item: Pizza) => acc + item.price, 0) ?? 0
    );
  }, [pizzaList]);

  const removePizzaWithIndex = (pizzaIndex: number) => {
    const newItems = pizzaList.filter(
      (_: Pizza, index: number) => pizzaIndex !== index
    );
    (window as any).sharedState.setState("pizzaList", newItems);
    setPizzaList(newItems);
    setTotalPrice(newItems.reduce((acc, item) => acc + item.price, 0));
  };

  const calculateSubtotal = () => {
    return totalPrice;
  };

  const calculateTax = () => {
    return calculateSubtotal() * TAX_RATE;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {pizzaList?.map((pizza: Pizza, index: number) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>{`$${pizza.price.toFixed(2)}`}</p>
            <button onClick={() => removePizzaWithIndex(index)}>
              Remove from basket
            </button>
          </li>
        ))}
      </ul>
      <h3>Subtotal: {`$${calculateSubtotal().toFixed(2)}`}</h3>
      <h3>Tax: {`$${calculateTax().toFixed(2)}`}</h3>
      <h3>Total: {`$${calculateTotal().toFixed(2)}`}</h3>
      <h3>Number of Pizzas: {pizzaList?.length}</h3>
      <button onClick={handleSubmitOrder} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Order"}
      </button>
    </div>
  );
};

export default Basket;
