/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLORS } from "../../constants.js";

const sizeStyles = {
  small: {
    "--height": "8px",
    "--outerBorderRadius": "4px",
    "--padding": 0,
  },
  medium: {
    "--height": "12px",
    "--outerBorderRadius": "4px",
    "--padding": 0,
  },
  large: {
    "--height": "24px",
    "--outerBorderRadius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const sizes = sizeStyles[size];
  return (
    <Progress style={sizes} id="progressbar" max={100} value={value}></Progress>
  );
};

const Progress = styled.progress`
  appearance: none;
  width: 370px;
  height: var(--height);

  ::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--outerBorderRadius);
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(props) => (props.value >= 99 ? " 4px" : "4px 0 0 4px")};
  }
`;

export default ProgressBar;
