import { Outlet } from "react-router";
import { useState, useEffect } from 'react';
import Header from "./Header.jsx"

//Layout component, includes header and outlet
//for page content

function Layout(){
    const [storeItems, setStoreItems] = useState([]);
    const [cartItems, setCatrtItems] = useState([]);
    
        //Fetching data from the server
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if(response.status >= 400){
                    throw new Error(`Failed to fetch data, status code: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setStoreItems(data))
            .catch(e => console.error(`Error fetching data: ${e.message}`));
        
    },[]);
    
    console.log(storeItems)

    return (
        <>
        <Header itemsInBasket={cartItems}/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Layout;