import { StyledBtn } from 'pages/Catalog/Catalog.styled';
import { useDispatch } from 'react-redux';
import { fetchTasksPerPage } from 'redux/operations';

const LoadMore = ({ setCurrentPage, currentPage }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    setCurrentPage(prev => prev + 1);
    dispatch(fetchTasksPerPage(currentPage));
  };

  return (
    <StyledBtn
      type="button"
      style={{
        background: '#40a246',
        margin: '0 auto',
        display: 'block',
      }}
      onClick={() => onClick()}
    >
      Load More
    </StyledBtn>
  );
};
export default LoadMore;
