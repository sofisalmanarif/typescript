import './App.css'
import Box from './components/Box'


const Semobox =()=>{
  return(
  <div>
    <h1>hello i am a semi box</h1>
  </div>)
}
function App() {


  return (
    <>
    <div>
      <Box name='salman' age={23} >
        {/* <Semobox/> */}
        </Box>
    </div>
    </>
  )
}

export default App



