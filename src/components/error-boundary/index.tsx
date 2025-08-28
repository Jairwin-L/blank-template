import { useNavigate, useRouteError } from 'react-router';
import AutoCenter from '../auto-center';

export default function ErrorBoundary() {
  const error: any = useRouteError();
  const navigate = useNavigate();
  console.error('ErrorBoundary----->：', error);
  const onGoBack = () => {
    navigate('/main', { replace: true });
  };
  return (
    <AutoCenter>
      <div>
        <button onClick={onGoBack}>返回主页</button>
      </div>
    </AutoCenter>
  );
}
