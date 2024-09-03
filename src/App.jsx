import { useState } from "react"
import ListUsers from "./components/ListUsers"


const users = [{
  id: 1,
  name: 'Juan', 
  email: 'juan@gmail.com',
},

{
  id: 2,
  name: 'Pedro', 
  email: 'pedro@gmail.com',
},
{
  id: 3,
  name: 'Luis', 
  email: 'luis@gmail.com',
},
{
  id: 4,
  name: 'Maria', 
  email: 'maria@gmail.com',
}]

const App = () => {
  const [data, setData] = useState(users)
  return (
    <div>
      <ListUsers data={data} />
    </div>
  )
}

export default App