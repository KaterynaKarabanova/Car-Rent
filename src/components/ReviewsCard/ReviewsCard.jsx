import {
  StyledComment,
  StyledDate,
  StyledImg,
  StyledWrapper,
} from './ReviewsCard.styled';

const ReviewsCard = ({ id, photo, date, comment }) => {
  return (
    <StyledWrapper>
      <StyledImg src={photo} alt="" />
      <StyledDate>{date}</StyledDate>
      <StyledComment>{comment}</StyledComment>
    </StyledWrapper>
  );
};
export default ReviewsCard;
