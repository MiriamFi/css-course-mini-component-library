/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { COLORS } from "../../constants.js";

/*
I chose to use the progress-tag, because the provided link (ARIA: progressbar role) recommended to use
the native <progress> or <input type="range"> elements rather than the progressbar role.
In hidsight I realise that we were supposed to use the progressbar role.
*/

const STYLES = {
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
  const styles = STYLES[size];

  if (!styles) {
    throw new Error("Unkown size passed to ProgressBar.");
  }

  return (
    <Progress
      style={styles}
      id="progressbar"
      max={100}
      value={value}
      aria-valuenow={value}
    ></Progress>
  );
};

const Progress = styled.progress`
  /* reset styling */
  -webkit-appearance: none; /* For WebKit browsers (Chrome, Safari, Edge) */
  -moz-appearance: none; /* For Firefox */
  appearance: none; /* Standard property */
  border: none;

  width: 370px;
  height: var(--height);

  /* for mozilla */
  border-radius: var(--outerBorderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  progress {
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  ::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: ${(props) => (props.value === 100 ? " 4px" : "4px 0 0 4px")};
  }

  /* for chrome, safari */
  ::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--outerBorderRadius);
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${(props) => (props.value === 100 ? " 4px" : "4px 0 0 4px")};
  }
`;

export default ProgressBar;
