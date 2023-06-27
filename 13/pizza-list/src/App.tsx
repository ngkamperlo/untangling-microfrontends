import React from "react";
import "./App.css";
import PizzaList from "./components/PizzaList.component";
import { Pizza } from "./types/models";

const App = () => {
  const pizzas: Pizza[] = [
    { id: 1, name: "Margherita", description: "Classic pizza", price: 10 },
    { id: 2, name: "Pepperoni", description: "Spicy pizza", price: 12 },
    {
      id: 3,
      name: "Veggie",
      description: "Loaded with bell peppers, tomatoes, and olives",
      price: 11,
    },
    {
      id: 4,
      name: "Hawaiian",
      description: "Pineapple and ham for a sweet and salty combination",
      price: 13,
    },
    {
      id: 5,
      name: "BBQ Chicken",
      description: "Chicken with tangy barbecue sauce",
      price: 15,
    },
    {
      id: 6,
      name: "Meat Lovers",
      description: "Loaded with various kinds of meat",
      price: 16,
    },
    {
      id: 7,
      name: "Buffalo Chicken",
      description: "Chicken with spicy buffalo sauce",
      price: 15,
    },
    {
      id: 8,
      name: "Mushroom",
      description: "Loaded with fresh mushrooms",
      price: 12,
    },
    {
      id: 9,
      name: "Cheese",
      description: "Simple and delicious cheese pizza",
      price: 10,
    },
    { id: 10, name: "Sausage", description: "Sausage pizza", price: 14 },
    { id: 11, name: "Bacon", description: "Bacon pizza", price: 15 },
    {
      id: 12,
      name: "Garlic Chicken",
      description: "Garlic flavored chicken pizza",
      price: 15,
    },
    { id: 13, name: "Seafood", description: "Seafood pizza", price: 18 },
    { id: 14, name: "Greek", description: "Greek style pizza", price: 14 },
    { id: 15, name: "Pesto", description: "Basil pesto pizza", price: 13 },
    {
      id: 16,
      name: "Four Cheese",
      description: "Four types of cheese pizza",
      price: 14,
    },
    {
      id: 17,
      name: "Spinach and Ricotta",
      description: "Spinach and ricotta pizza",
      price: 13,
    },
    {
      id: 18,
      name: "Chicken Alfredo",
      description: "Alfredo sauce with chicken",
      price: 15,
    },
    { id: 19, name: "Prosciutto", description: "Prosciutto pizza", price: 16 },
    {
      id: 20,
      name: "Taco Pizza",
      description: "Mexican-style pizza",
      price: 14,
    },
  ];
  return (
    <div className="App" id="pizza-list">
      <PizzaList menu={pizzas}></PizzaList>
    </div>
  );
};

export default App;
