
import { useState } from "react";
import "./index.css";

function App() {
  const [items] = useState([
    { name: "Apples", price: 50, quantity: 2 },
    { name: "Milk", price: 30, quantity: 1 },
    { name: "Bread", price: 40, quantity: 3 },
  ]);

  const grandTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>Grocery Calculator</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Total (₹)</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Grand Total: ₹{grandTotal}</h3>
    </div>
  );
}

export default App;
