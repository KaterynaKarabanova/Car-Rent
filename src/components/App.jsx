import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from 'pages/Home/Home';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchTasks, fetchTasksPerPage } from 'redux/operations';
import { useState } from 'react';

// const value = useSelector(state => state.some.value);

export const App = () => {
  const dispatch = useDispatch();
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    dispatch(fetchTasksPerPage(1));
  }, [dispatch, isInitialRender]);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
