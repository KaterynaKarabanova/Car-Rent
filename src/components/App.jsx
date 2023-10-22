import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/operations';

// const value = useSelector(state => state.some.value);

export const App = () => {
  const dispatch = useDispatch();
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
