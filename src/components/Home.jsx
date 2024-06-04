import styled from "styled-components";
import Section from "./Section";

export default function Home() {
  
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="../public/model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="../public/model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        backgroundImg="../public/model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        backgroundImg="../public/model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        backgroundImg="../public/solar-panel.jpg"
        description="Money-back guarantee"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        backgroundImg="../public/solar-roof.jpg"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accesories"
        backgroundImg="../public/accessories.jpg"
        description=""
        leftBtnText="Shop now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
