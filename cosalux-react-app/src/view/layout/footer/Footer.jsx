import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";


const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 86px;
  font-size: 12px;

  color: ${props => props.theme.colors.tertiary};

`
const StyledFooterContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const StyledCopyright = styled.div`
`
const StyledContact = styled.div`
  display: flex;
  column-gap: 40px;
`

const StyledContactInfo = styled.span`
  span {
    font-weight: 700;
  }
`


const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <StyledFooterContentWrapper>
          <StyledCopyright>
            © COSALUX GmbH 2023
          </StyledCopyright>
          <StyledContact>

            <StyledContactInfo>
              <span>E</span> info@cosalux.com
            </StyledContactInfo>

            <StyledContactInfo>
              <span>T</span> +49 (0)69 – 860 07 22 – 660
            </StyledContactInfo>

            <StyledContactInfo>
              <span>F</span> +49 (0)69 – 860 07 22 – 610
            </StyledContactInfo>

          </StyledContact>
        </StyledFooterContentWrapper>
      </ContentWrapper>
    </StyledFooter>
  );
}

export default Footer;