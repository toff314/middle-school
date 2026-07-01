import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu } from 'lucide-react'

interface NavbarProps {
  onMenuOpen: () => void
  onSearchOpen: () => void
}

export default function Navbar({ onMenuOpen, onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? '#D32027' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div className="max-w-page mx-auto h-16 flex items-center justify-between px-6 lg:px-20">
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-white font-bold text-xl tracking-wide">未来小镇</span>
        </Link>

        {/* Center: School name (hidden on mobile) */}
        <div className="hidden lg:flex flex-col items-center text-white">
          <span className="text-sm tracking-[0.15em] leading-tight">北京十一学校</span>
          <span className="text-[10px] tracking-[0.1em] font-inter opacity-90 leading-tight">
            BEIJING NATIONAL DAY SCHOOL·LONGYUE
          </span>
          <span className="text-sm tracking-[0.15em] leading-tight">龙樾实验中学</span>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-1">
          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6 mr-4">
            <Link
              to="/about"
              className="text-white text-base font-medium tracking-wider hover:opacity-80 transition-opacity relative group"
            >
              关于
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-200" />
            </Link>
            <Link
              to="/life"
              className="text-white text-base font-medium tracking-wider hover:opacity-80 transition-opacity relative group"
            >
              小镇生活方式
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-200" />
            </Link>
            <Link
              to="/team"
              className="text-white text-base font-medium tracking-wider hover:opacity-80 transition-opacity relative group"
            >
              团队
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-200" />
            </Link>
            <Link
              to="/space"
              className="text-white text-base font-medium tracking-wider hover:opacity-80 transition-opacity relative group"
            >
              空间环境
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-200" />
            </Link>
            <Link
              to="/news"
              className="text-white text-base font-medium tracking-wider hover:opacity-80 transition-opacity relative group"
            >
              云校
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white group-hover:w-full group-hover:left-0 transition-all duration-200" />
            </Link>
          </div>

          {/* Search icon */}
          <button
            onClick={onSearchOpen}
            className="w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="搜索"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Hamburger menu */}
          <button
            onClick={onMenuOpen}
            className="w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="菜单"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
