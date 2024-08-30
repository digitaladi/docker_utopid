
import './styles/public.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './pages/public/PublicRouter';
import SideNav from './component/dashbord/SideNav';
//ROUTE FAIRE DE DASHBOARD
//https://www.youtube.com/watch?v=ibOz6Lz40xU&list=PLwP3cL-MKVkNM28X96Dhc3BLMhtUktiik&index=1
function App() {
  {/* <SideNav />*/}
  return (


<BrowserRouter>


<Routes>
                                                    
<Route  path='/*' element={<PublicRouter />}/>

</Routes>

</BrowserRouter>


  )




}

export default App;
