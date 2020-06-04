import React from 'react';

const Header = () => {
    return (
        <nav>
        <div class="nav-wrapper #00838f cyan darken-3">
          <a href="/" class="brand-logo">Reactibilidade</a>
          <ul  class="right">
            <li><a href="/reactibilidade">Reactibilidade</a></li>
            <li><a href="/bosqdev">BosqDev</a></li>
            <li><a href="/goomdev">GoomDev</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;