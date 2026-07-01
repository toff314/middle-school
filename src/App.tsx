import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Life from '@/pages/Life'
import Team from '@/pages/Team'
import Space from '@/pages/Space'
import News from '@/pages/News'
import Curriculum from '@/pages/Curriculum'
import Admin from '@/pages/Admin'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/life" element={<Life />} />
        <Route path="/team" element={<Team />} />
        <Route path="/space" element={<Space />} />
        <Route path="/news" element={<News />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}
