import { useState } from "react"

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]
let yanse = 'red'
function MyButton({name}){
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1)
  }
  return(
    <button onClick={handleClick}>{name}{count}</button>
  )
}
function App() {
  return (
    <div className="App">
      <ul>
        {list.map(item => <li key={item.id} 
        style={{color:item.name==='React'?yanse:'blue'}}>{item.name}</li>)}
      </ul>
      <MyButton name='clike me'/>
    </div>
  );
}

export default App;
