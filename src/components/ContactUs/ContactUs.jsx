import {
  StyledDiv,
  StyledImage,
  StyledLink,
  StyledLinkDiv,
  StyledList,
  StyledText,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <StyledDiv>
      <h2>Any questions left?</h2>
      <StyledText>You can call us Mon-Fri 10:00-18:00! </StyledText>
      <StyledText>Contacts: </StyledText>
      <StyledList>
        <li>+380(999)999-99-99</li>
        <li>+380(999)999-99-99</li>
        <li>+380(999)999-99-99</li>
      </StyledList>
      <h3>Follow us in social media:</h3>
      <StyledLinkDiv>
        <StyledLink href="">
          <StyledImage
            src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
            alt="facebook"
          />
        </StyledLink>
        <StyledLink href="">
          <StyledImage
            src="https://www.svgrepo.com/show/30539/instagram-logo.svg"
            alt="instagram"
          />
        </StyledLink>
        <StyledLink href="">
          <StyledImage
            src="https://www.svgrepo.com/show/107798/twitter.svg"
            alt="twitter"
          />
        </StyledLink>
      </StyledLinkDiv>
    </StyledDiv>
  );
};
export default ContactUs;
