import './style.scss';
import { Button } from '@/lib/button/Button';

const Home = () => {
  return (
    <div>
      {/* <div>
        <Button type="primary" />
        <Button type="danger" />
        <Button type="dashed" />
        <Button type="default" />
      </div>
      <div>
        <Button type="primary" size="small" />
        <Button type="danger" size="small" />
        <Button type="dashed" size="small" />
        <Button type="default" size="small" />
      </div> */}
      <Button size="small" disabled type="primary" />
      <Button size="small" theme="link" disabled type="primary" />
      <Button size="small" theme="text" disabled type="primary" />
      {/* <Button type="danger" loading={true} /> */}
    </div>
  );
};

export { Home };
