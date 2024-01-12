import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks, fetchTasksPerPage } from 'redux/operations';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Favorite/Favorites'));
const Cooperation = lazy(() => import('pages/Cooperation/Cooperation'));
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
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    fontSize: '30px',
                    textAlign: 'center',
                  }}
                >
                  Information is already on its way to you. Please wait...
                </div>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
