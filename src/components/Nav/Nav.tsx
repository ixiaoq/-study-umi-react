import { Link } from 'umi';
import style from './Nav.less';

interface nav {
  name: '';
  path: '';
}

export default function Nav(props: any) {
  const NavList = props.navList.map((nav: nav) => (
    <span className={style.navItem} key={nav.path}>
      <Link to={nav.path}>{nav.name}</Link>
    </span>
  ));

  return <div className={style.navList}>{NavList}</div>;
}
