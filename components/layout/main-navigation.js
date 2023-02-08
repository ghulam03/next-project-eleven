import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        
          <Logo />
        
      </Link>
      <nav>
        <ul>
        <li>
            <Link href='/tech'>New Tech</Link>
          </li>
          <li>
            <Link href='/pform'>New Form</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
