import { Link } from 'umi'
import style from './Nav.less'

// 导航菜单
const navList = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/core',
    name: '核心概念'
  },
  {
    path: '/advanced',
    name: '高级指引'
  },
  {
    path: '/api',
    name: 'api 参考'
  },
  {
    path: '/hook',
    name: 'hook'
  }
]

export default function Nav () {
  return (
    <div className={ style.navList }>
      {
        navList.map(nav => (
          <span className={ style.navItem } key={ nav.path }>
            <Link to={ nav.path } >{ nav.name }</Link>
          </span>
        ))
      }
    </div>
  )
}
