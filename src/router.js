import LoginPage from './pages/user/loginOrSignUpPage/index.js';
import HomePage from './pages/user/homePage';
import AboutPage from './pages/user/aboutPage';
import RecruitPage from './pages/user/recruitPage';
import RecruitDetailPage from './pages/user/recruitDetailPage';
import CategoryPage from './pages/user/categoryPage';
import ProductTypePage from './pages/user/producttypePage';
import ProductDetailPage from './pages/user/productdetailPage';
import DesignPage from './pages/user/designPage';
import LogoPage from './pages/user/designPage/logoPage';
import PolicyPage from './pages/user/policyPage';
import OrderPage from './pages/user/orderPage';
import MasterLayout from './pages/user/theme/masterLayout';
import { ROUTERS } from './utils/router';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin/adminPage/index.js';
import { getState } from './redux/utilredux.js';
const renderUserRouter = () => {
  const allState = getState();
  const user = allState.user;
  console.log('🚀 ~ renderUserRouter ~ user:', user.isAdmin);
  const userRouters = [
    {
      path: ROUTERS.USER.LOGIN,
      component: <LoginPage />,
      hideHeader: true,
      hideFooter: true,
    },
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.ABOUT.PATH,
      component: <AboutPage />,
    },
    {
      path: ROUTERS.USER.ABOUT.RECRUIT.PATH,
      component: <RecruitPage />,
    },
    {
      path: ROUTERS.USER.ABOUT.RECRUIT.POSITION,
      component: <RecruitDetailPage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.PATH,
      component: <CategoryPage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.TYPE,
      component: <ProductTypePage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.DETAIL,
      component: <ProductDetailPage />,
    },
    {
      path: ROUTERS.USER.DESIGN.PATH,
      component: <DesignPage />,
    },
    {
      path: ROUTERS.USER.DESIGN.LOGO,
      component: <LogoPage />,
    },
    {
      path: ROUTERS.USER.POLICY,
      component: <PolicyPage />,
    },
    {
      path: ROUTERS.USER.ORDER,
      component: <OrderPage />,
    },
    {
      path: ROUTERS.ADMIN.PATH,
      component: <AdminPage />,
      hideHeader: true,
      hideFooter: true,
      isPrivate: true,
    },
  ];

  return (
    <>
      <Routes>
        {userRouters.map((item, key) => {
          const ischeckAuth = !item.isPrivate || (user && user.isAdmin);
          return ischeckAuth ? (
            <Route
              key={key}
              path={item.path}
              element={
                <MasterLayout hideHeader={item.hideHeader} hideFooter={item.hideFooter}>
                  {item.component}
                </MasterLayout>
              }
            />
          ) : null;
        })}
      </Routes>
    </>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
