import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">PrimeFlix</Link>
            <Link className='Favoritos' to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;