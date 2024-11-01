import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="nav">
            <div className="cart">
                <div className="iconoContainer">
                    <img className="icono" src="/images/Icono AG.png" alt="logoPrincipal" />
                </div>
                <button><img className="marca" src="/images/agrestaMS1.jpg" alt="marca" /></button>
                <CartWidget />       
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link active fs-3 text-primary-emphasis">- Monitores Vitales -</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active fs-3 text-primary-emphasis">- Equipos de Quirófano -</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active fs-3 text-primary-emphasis">- Cirugía y Prótesis -</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link active fs-3 text-primary-emphasis">- Accesorios Clínicos -</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;