import { SonyNavBar, SonyNavBarBrand, SonyNav, SonyNavLink, SonyContainer } from '../SonyComponents';
import styles from './navbar.module.scss'


function NavBar() {
  return (
    <>
      <SonyNavBar className={`${styles.NavBar}`} variant="dark">
        <SonyContainer>
          <SonyNavBarBrand className={styles.Logo} />
          <SonyNav className="justify-content-end">
            <SonyNavLink href="#home">Home</SonyNavLink>
            <SonyNavLink href="#features">Portfolio</SonyNavLink>
            <SonyNavLink href="#pricing">Currículo</SonyNavLink>
          </SonyNav>
        </SonyContainer>
      </SonyNavBar>
    </>
  );
}

export default NavBar;