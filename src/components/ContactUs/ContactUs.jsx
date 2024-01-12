import { useTranslation } from 'react-i18next';
import {
  StyledConditions,
  StyledFollowDiv,
  StyledFooterDiv,
  StyledImage,
  StyledLink,
  StyledLinkDiv,
  StyledList,
  StyledListLink,
  StyledText,
  StyledTitle,
} from './ContactUs.styled';

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <StyledFooterDiv>
      <div>
        <StyledTitle>{t('anyQuestions')}</StyledTitle>
        <StyledText>{t('callUs')}</StyledText>
        <StyledText>{t('contacts')} </StyledText>
        <StyledList>
          <li>+380(999)999-99-99</li>
          <li>+380(999)999-99-99</li>
          <li>+380(999)999-99-99</li>
        </StyledList>
      </div>
      <StyledConditions>
        <StyledTitle> {t('conditions')}</StyledTitle>
        <StyledList>
          <li>
            <StyledListLink href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
              {t('rentConditions')}
            </StyledListLink>
          </li>
          <li>
            <StyledListLink href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
              {t('rentContract')}
            </StyledListLink>
          </li>
        </StyledList>
      </StyledConditions>
      <StyledFollowDiv>
        <StyledTitle>{t('followUs')}</StyledTitle>
        <StyledLinkDiv>
          <StyledLink href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
            <StyledImage
              src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
              alt="facebook"
            />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
            <StyledImage
              src="https://www.svgrepo.com/show/30539/instagram-logo.svg"
              alt="instagram"
            />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/kateryna-karabanova-8082601bb/">
            <StyledImage
              src="https://www.svgrepo.com/show/107798/twitter.svg"
              alt="twitter"
            />
          </StyledLink>
        </StyledLinkDiv>
      </StyledFollowDiv>
    </StyledFooterDiv>
  );
};
export default ContactUs;
