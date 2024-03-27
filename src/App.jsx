import { Layout } from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Layout>
        <ItemListContainer greeting={"Bienvenidos"} />
      </Layout>
    </>
  );
}

export default App;
