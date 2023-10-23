import { StyledBtn } from 'components/Modal/Modal.styled';

const LoadMore = ({ setCurrentPage }) => {
  return (
    <StyledBtn
      type="button"
      style={{
        background: '#40a246',
        margin: '0 auto',
        display: 'block',
      }}
      onClick={() => setCurrentPage(prev => prev + 8)}
    >
      Load More
    </StyledBtn>
  );
};
export default LoadMore;
