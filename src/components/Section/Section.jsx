import { Fade } from "react-awesome-reveal";
import { forwardRef } from "react";
import SectionStyled from "./SectionStyled";

const {
  Wrapper,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons,
} = SectionStyled


const Section = forwardRef(({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}, carsRef) => {

  return (
    <Wrapper ref={carsRef} $backgroundImg={backgroundImg}>
      <Fade direction="right">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrapper>
  );
})

export default Section;