import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

const MenuLink = styled.a.attrs()`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 8px;
  display: inline-block;
  border-bottom: ${({ $mainMenu }) => ($mainMenu ? "2px solid" : null)};
  border-right: ${({ $mainMenu }) => ($mainMenu ? "2px solid" : null)};
  &:last-child {
    border-right: none;
  }
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
  transform: ${({ $show }) => ($show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-out;
`;

const CarItem = styled.li`
  text-align: left;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  a {
    font-weight: 600;
  }
`;

const CloseButton = styled(CloseIcon)`
  margin-left: auto;
  cursor: pointer;
`;

export default {
  Container,
  Menu,
  MenuLink,
  SideMenu,
  CustomMenu,
  BurgerNav,
  CarItem,
  CloseButton,
};
