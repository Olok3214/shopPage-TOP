
import { Link } from 'react-router';

function Header(){
    return(
        <header>
            This is a header
            <nav>
                <Link to='/'>Main</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/basket'>Basket</Link>
                <a href='github.com'>Github</a>
            </nav>
        </header>
    )
}

export default Header;