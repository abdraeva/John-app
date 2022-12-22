import { Route, Routes } from 'react-router-dom';
import * as LayoutPages from '../../apps/layout';

function LayoutRoutes (){
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutPages.Main/>}/>
        <Route path="/works" element={<LayoutPages.Works/>}/>
        <Route path="/blog" element={<LayoutPages.Blog/>}/>
        <Route path="/contacts" element={<LayoutPages.Contacts/>}/>

      </Routes>


    </div>
  )
}

export default LayoutRoutes;