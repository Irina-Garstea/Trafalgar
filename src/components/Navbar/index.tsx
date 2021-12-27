import Link from 'next/link';
import Nav from './styled';

const Menu = () => {
  return (
    <Nav>
      <nav className="links">
        <Link href="/">
          <a target="_blank" id="link-home">
            Home
          </a>
        </Link>
        <Link href="/find">
          <a target="_blank" id="link-find">
            Find a doctor
          </a>
        </Link>
        <Link href="/apps">
          <a target="_blank" id="link-apps">
            Apps
          </a>
        </Link>
        <Link href="/testimonials">
          <a target="_blank" id="link-testimonials">
            Testimonials
          </a>
        </Link>
        <Link href="/about">
          <a target="_blank" id="link-about">
            About us
          </a>
        </Link>
      </nav>
    </Nav>
  );
};

export default Menu;
