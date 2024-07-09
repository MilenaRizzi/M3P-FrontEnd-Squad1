import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/components'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            {/* quando usuário não digitar nada vai carregar a Home */}
            <Route path="/" element={<Home/>}/>  
            <Route path="/dashboard" element={<Dashboard/>}/>  
        </Routes>
    )
}