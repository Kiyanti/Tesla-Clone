import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  return (
    <Container>
      <a>
        <img src="../public/logo.svg" alt="TESLA" />
      </a>
      <Menu>
        <MenuLink href="#">Model S |</MenuLink>
        <MenuLink href="#">Model 3 |</MenuLink>
        <MenuLink href="#">Model X |</MenuLink>
        <MenuLink href="#">Model Y</MenuLink>
      </Menu>
      <SideMenu>
        <MenuLink href="#">Shop</MenuLink>
        <MenuLink href="#">Tesla Account</MenuLink>
        <CustomMenu />
      </SideMenu>
      <BurgerNav>
        <CloseButton />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 786px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 8px;
  border-bottom: 2px solid;
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 20;
  list-style: none;
  padding: 20px;
  li {
    text-align: left;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);    
    a {
      font-weight: 600;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  margin-left: auto;
`