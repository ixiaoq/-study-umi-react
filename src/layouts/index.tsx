import Nav from './Nav/Nav';

export default function Layouts(props: any) {
  return (
    <div className="layouts">
      <Nav />
      {props.children}
    </div>
  );
}
