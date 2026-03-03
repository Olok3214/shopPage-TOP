
import { Link } from 'react-router';

function Header(itemsInBasket){
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
                Basket {itemsInBasket}
                <i class="fa-solid fa-basket-shopping"></i>
                </Link>
                <a href='github.com'>
                Github
                <i class="fa-brands fa-github"></i>
                </a>
            </nav>
        </header>
    )
}

export default Header;