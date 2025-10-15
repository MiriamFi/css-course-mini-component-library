import styled from "styled-components";

import { getDisplayedValue } from "./Select.helpers";
import Icon from "../Icon";
import { COLORS } from "../../constants";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
`;

const PresentationalSelect = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  padding: 12px 48px 12px 16px;
  border-radius: 8px;

  &:hover {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    /* Gives prestentational select focus when native select is focused */
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none; /* Fixes problem with non-clickable icon */
`;

export default Select;
