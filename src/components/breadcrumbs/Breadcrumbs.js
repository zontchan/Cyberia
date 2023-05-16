import './style.css';
function Breadcrumbs() {
 return(<nav className="breadcrumbs">
     <ul className="breadcrumbs-list list">
         <li className="breadcrumbs-list-item">Главная</li>
         <li className="breadcrumbs-list-item active">Проекты</li>
     </ul>
 </nav>)
}

export default Breadcrumbs;