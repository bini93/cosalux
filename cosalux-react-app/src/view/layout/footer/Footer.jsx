import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 86px;
  border-top: 1px solid red;
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

const StyledContactEmail = styled.span`
`

const StyledContactPhone = styled.span`
`

const StyledContactFax = styled.span`
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

            <StyledContactEmail>
              <b>E</b> info@cosalux.com
            </StyledContactEmail>

            <StyledContactPhone>
              <b>T</b> +49 (0)69 – 860 07 22 – 660
            </StyledContactPhone>

            <StyledContactFax>
              <b>F</b> +49 (0)69 – 860 07 22 – 610
            </StyledContactFax>

          </StyledContact>
        </StyledFooterContentWrapper>
      </ContentWrapper>
    </StyledFooter>
  );
}

export default Footer;