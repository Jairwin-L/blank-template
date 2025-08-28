import { ErrorBoundary } from '@/components';
import Layout from '@/layout';
import { createBrowserRouter } from 'react-router';
import DEMO_ROUTER from '@/pages/demo/router';
import TEST_ROUTER from '@/pages/test/router';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
			...DEMO_ROUTER,
      ...TEST_ROUTER,
    ],
  },
]);

export default routes;
