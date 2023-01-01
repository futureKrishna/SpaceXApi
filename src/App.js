import {Route,Routes} from 'react-router-dom';
import LaunchPads from './components/LaunchPads';
import LaunchDetail from "./components/LaunchDetail.js"

const App = () => {
  return (
    <>
        <Routes>
          <Route element={<LaunchPads/>} path="/"></Route>
          <Route element={<LaunchDetail/>} path="/launchdetail/:id"></Route>
        </Routes>
      </>
  )
}

export default App