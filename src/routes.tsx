import { createBrowserRouter } from 'react-router';
import { ErrorBoundary } from '@/components';
import Layout from '@/layout';
import Main from './pages/main';
import DEMO_ROUTER from '@/pages/demo/router';
import TEST_ROUTER from '@/pages/test/router';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
			{
        index: true, // 表示 / 路径
        element: <Main />, // 这里替换成你的首页组件
      },
			...DEMO_ROUTER,
      ...TEST_ROUTER,
    ],
  },
]);

export default routes;
