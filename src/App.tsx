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

/* ── 初识小镇子页面 ── */
import MayorMessage from '@/pages/MayorMessage'
import Mascot from '@/pages/Mascot'

/* ── 探访小镇 ── */
import StudyCenter from '@/pages/spaces/StudyCenter'
import LongyueCool from '@/pages/spaces/LongyueCool'
import Court from '@/pages/spaces/Court'
import Hakuna from '@/pages/spaces/Hakuna'
import Farm from '@/pages/spaces/Farm'
import Swimming from '@/pages/spaces/Swimming'
import Gym from '@/pages/spaces/Gym'
import Museum from '@/pages/spaces/Museum'
import Climbing from '@/pages/spaces/Climbing'
import Playground from '@/pages/spaces/Playground'
import Canteen from '@/pages/spaces/Canteen'
import Suyuan from '@/pages/spaces/Suyuan'

/* ── 小镇活动 ── */
import OpenDay from '@/pages/events/OpenDay'
import StudyTour from '@/pages/events/StudyTour'
import DragonMarket from '@/pages/events/DragonMarket'
import ArtFestival from '@/pages/events/ArtFestival'
import TechFestival from '@/pages/events/TechFestival'
import SportsFestival from '@/pages/events/SportsFestival'
import WaterFestival from '@/pages/events/WaterFestival'
import Graduation from '@/pages/events/Graduation'
import Opening from '@/pages/events/Opening'
import Carnival from '@/pages/events/Carnival'

/* ── 在线服务 ── */
import ServicesHome from '@/pages/services/ServicesHome'
import Ordering from '@/pages/services/Ordering'
import CardRecharge from '@/pages/services/CardRecharge'
import Uniform from '@/pages/services/Uniform'
import FamilySchool from '@/pages/services/FamilySchool'
import ParentAcademy from '@/pages/services/ParentAcademy'
import Calendar from '@/pages/services/Calendar'

/* ── 联系我们 ── */
import ContactHome from '@/pages/contact/ContactHome'
import Location from '@/pages/contact/Location'
import Join from '@/pages/contact/Join'
import Visit from '@/pages/contact/Visit'

/* ── 其他 ── */
import Resources from '@/pages/Resources'
import Brand from '@/pages/Brand'
import CheeseCircle from '@/pages/CheeseCircle'
import Alumni from '@/pages/Alumni'
import Language from '@/pages/Language'

export default function App() {
  return (
    <Routes>
      {/* Routes WITH shared Navbar/Footer Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/mayor-message" element={<MayorMessage />} />
        <Route path="/life" element={<Life />} />
        <Route path="/team" element={<Team />} />
        <Route path="/space" element={<Space />} />
        <Route path="/news" element={<News />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/mascot" element={<Mascot />} />

        {/* 探访小镇 */}
        <Route path="/spaces/study-center" element={<StudyCenter />} />
        <Route path="/spaces/longyue-cool" element={<LongyueCool />} />
        <Route path="/spaces/court" element={<Court />} />
        <Route path="/spaces/hakuna" element={<Hakuna />} />
        <Route path="/spaces/farm" element={<Farm />} />
        <Route path="/spaces/swimming" element={<Swimming />} />
        <Route path="/spaces/gym" element={<Gym />} />
        <Route path="/spaces/museum" element={<Museum />} />
        <Route path="/spaces/climbing" element={<Climbing />} />
        <Route path="/spaces/playground" element={<Playground />} />
        <Route path="/spaces/canteen" element={<Canteen />} />
        <Route path="/spaces/suyuan" element={<Suyuan />} />

        {/* 小镇活动 */}
        <Route path="/events/open-day" element={<OpenDay />} />
        <Route path="/events/study-tour" element={<StudyTour />} />
        <Route path="/events/dragon-market" element={<DragonMarket />} />
        <Route path="/events/art-festival" element={<ArtFestival />} />
        <Route path="/events/tech-festival" element={<TechFestival />} />
        <Route path="/events/sports-festival" element={<SportsFestival />} />
        <Route path="/events/water-festival" element={<WaterFestival />} />
        <Route path="/events/graduation" element={<Graduation />} />
        <Route path="/events/opening" element={<Opening />} />
        <Route path="/events/carnival" element={<Carnival />} />

        {/* 在线服务 */}
        <Route path="/services" element={<ServicesHome />} />
        <Route path="/services/ordering" element={<Ordering />} />
        <Route path="/services/card-recharge" element={<CardRecharge />} />
        <Route path="/services/uniform" element={<Uniform />} />
        <Route path="/services/family-school" element={<FamilySchool />} />
        <Route path="/services/parent-academy" element={<ParentAcademy />} />
        <Route path="/services/calendar" element={<Calendar />} />

        {/* 联系我们 */}
        <Route path="/contact" element={<ContactHome />} />
        <Route path="/contact/location" element={<Location />} />
        <Route path="/contact/join" element={<Join />} />
        <Route path="/contact/visit" element={<Visit />} />

        {/* 其他 */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cheese-circle" element={<CheeseCircle />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/language" element={<Language />} />
      </Route>

      {/* Admin route WITHOUT shared layout */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}
