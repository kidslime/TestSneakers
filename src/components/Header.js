import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
          <Link to="/">
            <div className="headerLeft">
                <img className="logo" height={40} width={40} src="/img/logo.png" alt="" />
                <div className="headerInfo">
                  <h3 className="headerTitle">React Sneakers</h3>
                  <p>Магазин лучших кроссовок</p>
                </div>
            </div>
          </Link>
        <ul className="headerRight">
          <li >
            <Link to="/favorites">
              <img height={18} width={18} src="/img/favorites.svg" alt="" />
            </Link>
          </li>
        </ul>
      </header>
    )
}

export default Header;