export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>There is no item in the packing list.</em>
      </p>
    );

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItem / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go"
          : `💼 You have ${numItems} items on your list, and you already packed
          ${packedItem} (${percentage}%).`}
      </em>
    </footer>
  );
}
