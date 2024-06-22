import { useState } from "react";
import HeaderStyled from "./HeaderStyled";
import { selectCars } from "../../features/reduxSlices/carSlice/carSlice";
import { useSelector } from "react-redux";

const {
  Container,
  Menu,
  MenuLink,
  SideMenu,
  CustomMenu,
  BurgerNav,
  CarItem,
  CloseButton,
} = HeaderStyled;


export default function Header({ scrollHandler }) {
  const [showMenu, setShowMenu] = useState(false);
  const car = useSelector(selectCars);
  // console.log(car);

  const handleShowMenu = () => setShowMenu((condition) => !condition);

  return (
    <Container>
      <a>
        <img src="logo.svg" alt="TESLA" />
      </a>
      <Menu>
        {car?.map((carItem) => (
          <MenuLink
            onClick={(e) => scrollHandler(carItem.id, e)}
            key={carItem.id}
            $mainMenu
            href="#"
          >
            {carItem.car}
          </MenuLink>
        ))}
      </Menu>
      <SideMenu>
        <MenuLink href="#">Shop</MenuLink>
        <MenuLink href="#">Tesla Account</MenuLink>
        <CustomMenu onClick={() => handleShowMenu()} />
      </SideMenu>
      <BurgerNav $show={showMenu}>
        <CloseButton onClick={() => handleShowMenu()} />
        {car?.map((carItem) => (
          <CarItem
            onClick={(e) => scrollHandler(carItem.id, e)}
            key={carItem.id}
          >
            <a href="#">{carItem.car}</a>
          </CarItem>
        ))}
      </BurgerNav>
    </Container>
  );
}
