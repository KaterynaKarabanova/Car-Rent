import { StyledBtn } from 'pages/Catalog/Catalog.styled';

import { useDispatch } from 'react-redux';
import { fetchTasksPerPage } from 'redux/operations';

const LoadMore = ({ setCurrentPage, currentPage, currentCars }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    setCurrentPage(prev => prev + 1);
    dispatch(fetchTasksPerPage(currentPage));
  };

  return (
    <StyledBtn
      type="button"
      style={{
        background: '#030e4c',
      }}
      onClick={() => onClick()}
    >
      Load More
    </StyledBtn>
  );
};
export default LoadMore;
