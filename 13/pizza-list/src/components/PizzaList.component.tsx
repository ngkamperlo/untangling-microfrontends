import React, { useState } from "react";
import { Pizza } from "../types/models";

interface PizzaListProps {
  menu: Pizza[];
}

const PizzaList: React.FC<PizzaListProps> = ({ menu }) => {
  const pizzasFromState: Pizza[] =
    (window as any).sharedState.getState("pizzaList") ?? [];
  const [pizzas, setPizzas] = useState<Pizza[]>(pizzasFromState);
  const pizzaCount = pizzas.reduce(
    (acc: { [id: number]: number }, pizza: Pizza) => {
      if (!acc[pizza.id]) {
        acc[pizza.id] = 0;
      }
      acc[pizza.id]++;
      return acc;
    },
    {}
  );
  const totalPizzas = pizzas?.length ?? 0;

  const onAddPizza = (pizza: Pizza) => {
    const newItems = [...pizzas, pizza];
    setPizzas(newItems);
    (window as any).sharedState.setState("pizzaList", newItems);
  };

  const onRemovePizza = (pizza: Pizza) => {
    if (pizzaCount[pizza.id] && pizzaCount[pizza.id] > 0) {
      const newItems = pizzas.filter((item: Pizza) => item.id !== pizza.id);
      (window as any).sharedState.setState("pizzaList", newItems);
    }
  };

  return (
    <div>
      <h2>Pizza List</h2>
      <ul>
        {menu.map((pizza: Pizza) => (
          <li key={pizza.id} style={{ listStyleType: "none" }}>
            <h3>{pizza.name}</h3>
            <p style={{ color: "gray", fontStyle: "italic" }}>
              {pizza.description}
            </p>
            <p>${pizza.price.toFixed(2)}</p>
            <p>{pizzaCount[pizza.id] || 0}</p>
            <div>
              <button onClick={() => onRemovePizza(pizza)}>-</button>
              <button onClick={() => onAddPizza(pizza)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Order</h2>
      <h3>Total Pizzas: {totalPizzas}</h3>
    </div>
  );
};

export default PizzaList;
