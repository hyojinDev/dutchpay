import styled from "styled-components";

interface OverlayWrapperProps {
  children: React.ReactNode;
}

const OverlayWrapper: React.FC<OverlayWrapperProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  min-height: 70vh;
  padding: 2vw;
  border-radius: 15px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 600px) {
    padding: 6vw;
  }
`;

export default OverlayWrapper;
