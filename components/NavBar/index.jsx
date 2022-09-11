import { SonyNavBar,SonyLinkedInIcon,SonyGitHubIcon, SonyNavBarBrand, SonyNav, SonyNavLink, SonyContainer } from '../SonyComponents';
import styles from './navbar.module.scss'


function NavBar() {
  return (
    <>
      <SonyNavBar className={`${styles.NavBar}`} variant="dark">
        <SonyContainer>
          <SonyNavBarBrand className={styles.Logo} />
          <SonyNav className="justify-content-end">
            <a href={'https://www.linkedin.com/in/erikson-santos/'}>
              <SonyLinkedInIcon fontSize="large" style={{ color: 'white', width: '5rem' }} />
            </a>
            <a href={'https://github.com/eriksonsantos'}>
              <SonyGitHubIcon fontSize="large" style={{ color: 'white', width: '5rem' }} />
            </a>
          </SonyNav>
        </SonyContainer>
      </SonyNavBar>
    </>
  );
}

export default NavBar;