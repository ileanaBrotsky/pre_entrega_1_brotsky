import ProductCard from "../../common/productCard/ProductCard"

const ItemListContainer = () => {
  return (
    <div>
        <h1>Bienvenidos a nuestra tienda</h1>
        <ProductCard price={100} title={"Titulo 1"} description={"descripcion 1"}/>
        <ProductCard price={200} title={"Titulo 2"} description={"descripcion 2"}/>
        <ProductCard price={300} title={"Titulo 3"} description={"descripcion 3"}/>
        </div>
  )
}

export default ItemListContainer