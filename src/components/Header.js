import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
        <nav>
          <div className="nav-div container">
            Traingle Fest
            <ul className="nav-list">
              <li className="list-inline link-active">
                <Link to="/is-triangle">Is Triangle?</Link>
              </li>
              <li className="list-inline">
                <Link to="/">Quiz</Link>
              </li>
              <li className="list-inline">
                <Link to="/hypotenuse">Hypotenuse</Link>
              </li>
              <li className="list-inline">
                <Link to="/area">Area</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header;