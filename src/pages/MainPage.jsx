import { Link } from "react-router";

function MainPage(){
    return(<div className="mainPage">
        <h1>Placeholder Shop</h1>
        <p>Welcome to the Placeholder Shop! This is a simple e-commerce website built with React. Browse our selection of products and add them to your cart.</p>
        <Link to='/shop'> Go to shop page </Link>
    </div>
    )
}

export default MainPage;