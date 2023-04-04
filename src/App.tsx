import { useEffect, useState } from "react";
import "./App.css";
import { PayButton, Tr, Table, Td } from "./components/Table/table";
import { Aside } from "./components/Table/table";
import { api } from "./provider";

type Products = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

function App() {
  const [cart, setCart] = useState<Products[]>([]);
  let [quantity,setQuantity] = useState(0)



  const getQuantity = (max:number)=>{
    return (Math.floor(Math.random() * max))
  }
  
  const fetchData = () => {
    api.get("?limit=5").then((res) => {
      setCart(res.data)
    })

    .catch(err=>console.log(err))
  };

  useEffect(() => {

    setQuantity(getQuantity(5))
    fetchData();
  }, []);


    

//Fazer o getTotal mas como o item.quantity é depois da execução da function getTotal, é retornado um NAN.


  return (
    <div className="App">
      <header>
        <h1>Shopping cart</h1>
      </header>
      <main>
        <section style={{ width: "80%", display: "flex" }}>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item=>(
                <Tr key={item.id}>
                  <img src={item.image} alt="" width="50"/>
                  <Td >{item.title}</Td>
                  <Td>
                    <button> - </button>
                      {quantity}
                    <button> + </button>
                  </Td>
                  <Td>R$ {item.price}</Td>
                  <Td>R$ {item.price * quantity}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
          <Aside>
            <p>Total - R$ {}</p>
            <p>Frete - Grátis</p>

            <p></p>

            <a href="#">
              <span>Adicionar cupom</span>
            </a>

            <PayButton>Realizar pagamento</PayButton>
          </Aside>
        </section>
      </main>
    </div>
  );
}

export default App;


