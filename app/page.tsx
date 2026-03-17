import Spline from '@splinetool/react-spline/next';
import App from './app';

export default function Page() {
  return (
    <App
      splineScene={
        <Spline
          scene="https://prod.spline.design/9Pkj5s6nvYyy9e8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      }
    />
  );
}
