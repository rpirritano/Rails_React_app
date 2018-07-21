//updated all fruits to be stateless with moving state to body.js
const AllFruits = (props) => {
var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
        <Fruit fruit={fruit} handleDelete={props.handleDelete}/>
      </div>
    )
  })
return(
      <div>
        {fruits}
      </div>
    )
}
