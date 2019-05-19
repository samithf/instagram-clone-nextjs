/**
 * will contain nav section of the application
 */

import Link from 'next/link';

const Nav = () => (
  <div className="nav">
    <Link href="/">
      <span className="menu-icon">
        <i className="fas fa-home fa-lg" />
      </span>
    </Link>
    <Link href="/favorites">
      <span className="menu-icon">
        <i className="fas fa-heart fa-lg" />
      </span>
    </Link>

    <style jsx>{`
      .nav {
        z-index: 100;
        background-color: #ff7668;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-content: center;
        min-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .nav > .menu-icon {
        display: block;
        cursor: pointer;
        align-self: center;
      }
      @media (min-width: 800px) {
        .nav {
          bottom: auto;
          top: 0;
          left: 50%;
          width: 1000px;
          transform: translate(-50%, 0);
        }
      }
    `}</style>
  </div>
);

export default Nav;
