import './style.css';
import logo from "../../img/logo.png";

function Footer(){
    return(<footer className='footer'>
        <div className="wrapper">
            <div className="footer-content">
                <div className="footer-title logo">
                    <a href="#" className="header-logo-link"><img src={logo} className="header-logo-pic" alt=''/></a>
                    <p className="footer-title-desc">Web and machine learning developing company</p>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-contacts-list">
                        <li className="footer-contact-item">+7 499 679 45 79</li>
                        <li className="footer-contact-item">hello@cyberia.ru</li>
                        <li className="footer-contact-item">Аносова 3Б, оф. 1</li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">Главная</a></li>
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">Услуги</a></li>
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">Проекты</a></li>
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">Блог</a></li>
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">О нас</a></li>
                        <li className="footer-nav-list-item"><a href="#" className="nav-list-item-link">Команда</a></li>
                    </ul>
                </nav>
                <div className="copyright">
                    <p>2022, digital-агентство Cyberia</p><p> Положение о защите персональных данных</p><p> Политика в отношении обработки и защиты персональных данных </p><p>Оферта оказания услуг</p>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;