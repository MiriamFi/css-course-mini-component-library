import { COLORS } from "../../constants";
import styled from "styled-components";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

/* Note after watching the solution video: this strategy is fine,
but it is better to mainly use the native input (not move the focus etc) and position the icon using absolute position */

const ICONS = ["search", "at-sign"];

const STYLES = {
  small: {
    "--borderWidth": "1px",
    "--fontSize": 14 / 16 + "rem",
    "--height": 24 / 16 + "rem",
    iconSize: 16,
  },
  large: {
    "--borderWidth": "2px",
    "--fontSize": 18 / 16 + "rem",
    "--height": 36 / 16 + "rem",
    iconSize: 24,
  },
};

const IconInput = ({
  label,
  icon = "search",
  width = 250,
  size,
  ...delegated
}) => {
  if (!ICONS.includes(icon)) {
    throw new Error("Icon not recognized.");
  }
  const styles = STYLES[size];

  return (
    <Wrapper width={width} style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconStyled id={icon} size={styles.iconSize} strokeWidth={2} />
      <Input style={styles} {...delegated} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  border-bottom: solid black var(--borderWidth);
  font-size: var(--fontSize);
  width: ${(p) => p.width}px;
  height: var(--height);
  align-items: center;

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  margin-left: 8px;
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

const IconStyled = styled(Icon)``;

export default IconInput;
