import { StyledBtn } from 'pages/Catalog/Catalog.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchTasksPerPage } from 'redux/operations';

const LoadMore = ({ setCurrentPage, currentPage, currentCars }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onClick = () => {
    setCurrentPage(prev => prev + 1);
    dispatch(fetchTasksPerPage(currentPage));
  };

  return (
    <StyledBtn
      type="button"
      style={{
        background: '#e74c3c',
      }}
      onClick={() => onClick()}
    >
      {t('loadMore')}
    </StyledBtn>
  );
};
export default LoadMore;
