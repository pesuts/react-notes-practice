
export default function Footer({ items }) {
  if (items.length === 0) return <footer className="stats">Belanjaan masih kosong</footer>;

  const totalItems = items.length;
  const totalCheckedItems = items.filter((item) => item.checked).length;
  const totalCheckedItemsPercentage = Math.round(totalCheckedItems / totalItems * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {totalCheckedItems} barang sudah dibeli (
      {totalCheckedItemsPercentage}%)
    </footer>
  );
}