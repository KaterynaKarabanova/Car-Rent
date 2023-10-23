const LoadMore = ({ setCurrentPage }) => {
  return (
    <button type="button" onClick={() => setCurrentPage(prev => prev + 8)}>
      Load More
    </button>
  );
};
export default LoadMore;
