import styled from "styled-components";
import Section from "./Section";
import data from "../data/carInfo.json";
import { forwardRef } from "react";

const Home = forwardRef((_props, carsRef) => {
  const carData = data;

  return (
    <Container>
      {carData?.map((car) => (
        <Section
          ref={(e) => (carsRef.current[car.id] = e)}
          key={car.id}
          title={car.title}
          backgroundImg={car.image}
          description={car.description}
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
      ))}
      <Section
        title="Solar for New Roofs"
        backgroundImg="solar-roof.jpg"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accesories"
        backgroundImg="accessories.jpg"
        description=""
        leftBtnText="Shop now"
      />
    </Container>
  );
});

const Container = styled.div`
  height: 100vh;
`;

export default Home;
