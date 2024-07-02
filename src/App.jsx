import { useState } from "react";
import Footer from './components/Footer';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Header from './components/Header';

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    unit: 'pcs',
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    unit: 'kg',
    checked: false,
  },
  {
    id: 3,
    name: "Minyak goreng",
    quantity: 3,
    unit: 'liter',
    checked: false,
  },
  // {
  //   id: 4,
  //   name: "Minyak Goreng",
  //   quantity: 1,
  //   checked: true,
  // },
];

export default function App() {
  const [items, setItems] = useState([...groceryItems]);

  function handleAddItem(newItem){ 
    setItems([...items, newItem])
  }

  function handleRemoveItem(id){ 
    setItems(items.filter((item) => item.id !== id))
  }

  function handleCheckItem(id){ 
    setItems(items.map((item) => (item.id === id) ? { ...item, checked: !item.checked } : item));
  }

  function handleClearItems(){ 
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleRemoveItem}
        onCheckedItem={handleCheckItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items}/>
    </div>
  );
}





