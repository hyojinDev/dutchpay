import styled from "styled-components";

interface OverlayWrapperProps {
  children: React.ReactNode;
  minHeight?: string;
}

const OverlayWrapper: React.FC<OverlayWrapperProps> = ({
  children,
  minHeight = "0",
}) => <StyledContainer minHeight={minHeight}>{children}</StyledContainer>;

const StyledContainer = styled.div<{ minHeight: string }>`
  min-height: ${({ minHeight }) => minHeight};
  padding: 2vw;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 600px) {
    padding: 6vw;
  }
`;

export default OverlayWrapper;
