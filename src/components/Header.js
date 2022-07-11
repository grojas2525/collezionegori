import {Navbar, NavbarBrand} from 'reactstrap';
import GoriLogo from '../app/assets/img/GoriLogo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={GoriLogo} alt='gori logo' />
            </NavbarBrand>
      </Navbar>
    )
}

export default Header;