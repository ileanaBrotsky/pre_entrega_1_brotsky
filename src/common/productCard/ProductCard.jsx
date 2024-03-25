const ProductCard = (props) => {
    const{title, description, price}=props
  return (
    <div>
      <h3>{title}</h3>
      <h2>{description}</h2>
    <h4>{price}</h4>
    </div>
  );
};

export default ProductCard;
