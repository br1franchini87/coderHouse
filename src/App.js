import "./App.css";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/ItemList";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index path='/' element={<ItemListContainer greeting='Bienvenido' />} />
                <Route index path='/category/:id' element={<ItemList />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
