
import { Link } from 'react-router';

function Header({items}){

    

    return(
        <header>
            <nav>
                <Link to='/'>
                    Placeholder shop
                </Link>
                <Link to='/shop'>
                    Shop
                    <i className="fa-solid fa-shop"></i>
                </Link>
                
                <Link to='/basket'>
                    Basket 
                    <span className='cart-items'>
                        {items.reduce((total, item) => total + item.selectedAmount, 0)}
                    </span>
                    <i className="fa-solid fa-basket-shopping"></i>
                </Link>
            </nav>
        </header>
    )
}

export default Header;