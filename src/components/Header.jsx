import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header(props) {
  return (
    <Container>
      <a>
        <img src="../public/logo.svg" alt="TESLA" />
      </a>
      <Menu>
        <MenuLink href="#">Model S</MenuLink>
        <MenuLink href="#">Model 3</MenuLink>
        <MenuLink href="#">Model X</MenuLink>
        <MenuLink href="#">Model Y</MenuLink>
      </Menu>
      <SideMenu>
        <MenuLink href="#">Shop</MenuLink>
        <MenuLink href="#">Tesla Account</MenuLink>
        <CustomMenu />
      </SideMenu>
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
  @media(max-width: 786px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 8px;
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
