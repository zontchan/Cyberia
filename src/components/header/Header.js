import './style.css';
import logo from "../../img/logo.png";
import burger from "../../img/Menu-burger.png";
import themeSwitcher from "../../img/theme-switcher.png";

function Header(){
    return(<header>
        <div className="wrapper">
            <div className="header">
                <div className="header-logo logo">
                    <a href="#" className="header-logo-link"><img src={logo} className="header-logo-pic" alt='picture'/></a>
                    <div className="burger-menu"><img src={burger} className="burger-menu-ico" alt=''/></div>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list list">
                        <li className="nav-list-item"><a href="#" className="nav-list-item-link">О нас</a></li>
                        <li className="nav-list-item"><a href="#" className="nav-list-item-link">Услуги</a></li>
                        <li className="nav-list-item"><a href="#" className="nav-list-item-link">Проекты</a></li>
                        <li className="nav-list-item"><a href="#" className="nav-list-item-link">Блог</a></li>
                        <li className="nav-list-item"><a href="#" className="nav-list-item-link">Контакты</a></li>
                    </ul>
                </nav>
                <div className="theme-switcher"><img src={themeSwitcher} className="theme-switcher-ico" alt=''/></div>
            </div>

        </div>
    </header>)
}

export default Header;