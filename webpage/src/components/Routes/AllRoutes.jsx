import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Main from '../swarnibhar/Main'
import { ProgramPageComponent } from '../ProgramPageComponents/ProgramPageComponent'
export const AllRoutes = () => {
    return(
<Routes>
<Route path={'/'} element={<Main/>}/>
 <Route path={'/summit'} element={<ProgramPageComponent/>}/>
    <Route path={'/freelancer'} element={<ProgramPageComponent/>}/>
    <Route path={'/entrepreneur'} element={<ProgramPageComponent/>}/>
    <Route path={'/womanProgram'} element={<ProgramPageComponent/>}/>
    <Route path={'/mentor'} element={<ProgramPageComponent/>}/>
</Routes>
    )
}
