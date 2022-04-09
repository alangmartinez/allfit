import './ItemListContainer.css'

export default function ItemListContainer(props) {

  const {title} = props;
  console.log(props);

  return (
    <>
        <h2 className="title m-auto">{title}</h2>
        {
          props.children.map(btn => btn)
        }
    </>
  )
}
