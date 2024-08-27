import Student from './Student'
import './App.css'

function App() {
  return (
    <>
      <Student name="Mateo" age={21} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" />
    </>
  )
}

export default App
