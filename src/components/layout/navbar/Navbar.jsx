import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* a la izquierda */}
      <h3>Logo Navbar</h3>
      <ul>
        <li>alimentos</li>
        <li>juguetes</li>
        <li>limpieza y perfumeria</li>
        <li></li>
        {/* pasar a otro componente y llamar en Navbar */}
        {/*  cuando son strings no necesitan llaves*/}
        <FaShoppingCart color="red" size={30}/>
      </ul>
    </div>
  );
};

export default Navbar;
