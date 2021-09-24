import Nav from './Nav/Nav'

export default function Layouts (props: any) {
  console.log(props)
  return (
    <div className="layouts">
      <Nav />
      { props.children }
    </div>
  )
}
