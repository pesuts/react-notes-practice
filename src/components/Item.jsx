export default function Item({item, onDeleteItem, onCheckedItem}) {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => onCheckedItem(item.id)}/>
      <span style={{ textDecoration: item.checked ? "line-through" : "" }}>
        {item.name} ({item.quantity} {item.unit})
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}