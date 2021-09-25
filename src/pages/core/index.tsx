import Nav from '@/components/Nav/Nav';

import Props from './components/ComponentOrProps';
import State from './components/State';

const navList = [
  {
    path: '/core/index',
    name: '组件 & Props',
  },
  {
    path: '/core/state',
    name: 'State & 生命周期',
  },
];

export default function Core(props: any) {
  const { match } = props;

  let Dom = <Props />;

  switch (match.params.name) {
    case 'state':
      Dom = <State />;
      break;
  }

  return (
    <div className="container">
      <Nav navList={navList} />

      {Dom}
    </div>
  );
}
