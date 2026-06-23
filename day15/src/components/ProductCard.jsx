function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>
        <p>₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;