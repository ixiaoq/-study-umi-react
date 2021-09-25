import style from './ComponentOrProps.less';

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>;
}

function Avatar(props: any) {
  return (
    <img
      className={style.Avatar}
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function Comment(props: any) {
  return (
    <div className={style.Comment}>
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
    </div>
  );
}

const user = {
  text: '基材基材㐱脞',
  author: {
    name: 'zhangsan',
    avatarUrl: require('@/static/avatar.jpg'),
  },
};

export default function ComponentOrProps() {
  return (
    <div className="props">
      <Welcome name="World" />
      <Welcome name="React" />

      <Comment {...user} />
    </div>
  );
}
