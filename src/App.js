import "./App.css";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/ItemList";
import { CartContextProvider } from "./components/CartContext";
import Cart from "./components/Cart";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index path='/' element={<ItemListContainer greeting='Bienvenido al Mundo de las Mesas' />} />
                    <Route path='/category/:id' element={<ItemList />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
