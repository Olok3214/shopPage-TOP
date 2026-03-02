import 'react';
import { useState, useEffect } from 'react';
//fetch, memory links to other pages,
//header dosent change, only the content




function App(){
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

    return <h1>Our Firsts Test</h1>
}

export default App;