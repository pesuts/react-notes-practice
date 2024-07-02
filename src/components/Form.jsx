import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('pcs');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(), name, unit, quantity: parseInt(quantity), checked: false
    }
    if (name !== '') onAddItem(newItem);
  }

  const quantityNum = [...Array(15)].map((_, i) => (
    <option value={i + 1} key={i + 1}>{i + 1}</option>
  ));
  
  const units = ['liter', 'ml', 'box', 'pcs', 'kg', 'galon', 'lusin'].map((unit) => (
    <option value={unit} key={unit}>{unit}</option>
  ));
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-form">
        <h3>Hari ini belanja apa kita?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {quantityNum}
        </select>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          {units}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)}/>
        <button>Tambah</button>
      </div>
    </form>
  );
}