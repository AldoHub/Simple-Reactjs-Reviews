
import Card from "./components/Card";
import Counter from "./components/Counter";
import Ref from "./components/Ref";


//HOC
import User from "./components/User"
import withLoader from "./components/withLoader"

const UserWithLoader = withLoader(User);


function App() {
  
  return (
    <>
     <Card title='Test Card 1' content='This is some content for the card 1'></Card>
     <Card title='Test Card 2' content='This is some content for the card 2'></Card> 
    
     <hr /> 
     <h3>Updater Function</h3>
     <Counter></Counter>

     <hr /> 
     <h3>useRef Hook</h3> 
     <Ref></Ref>


     <hr />
     <h3>HOC</h3>
     <UserWithLoader></UserWithLoader>
    </>

   
  )
}

export default App
