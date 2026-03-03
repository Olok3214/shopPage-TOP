
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
                <i class="fa-solid fa-shop"></i>
                </Link>
                
                <Link to='/basket'>
                Basket <span className='cart-items'>{items}</span>
                <i class="fa-solid fa-basket-shopping"></i>
                </Link>
            </nav>
        </header>
    )
}

export default Header;