import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuLink {
  label: string
  to: string
  external?: boolean
}

interface MenuCategory {
  title: string
  en: string
  links: MenuLink[]
}

const menuCategories: MenuCategory[] = [
  {
    title: '初识小镇',
    en: 'ABOUT',
    links: [
      { label: '我们是谁', to: '/about' },
      { label: '镇长寄语', to: '/about/mayor-message' },
      { label: '空间环境', to: '/space' },
      { label: '课程体系', to: '/curriculum' },
      { label: '团队', to: '/team' },
      { label: '吉祥物', to: '/mascot' },
      { label: '新闻', to: '/news' },
      { label: '资源支持', to: '/resources' },
      { label: '品牌指南', to: '/brand' },
      { label: '芝士圈', to: '/cheese-circle' },
      { label: '云校', to: 'https://study.shiyilongyue.com', external: true },
      { label: '校友回忆', to: '/alumni' },
      { label: '语言与文字', to: '/language' },
    ],
  },
  {
    title: '探访小镇',
    en: 'VISIT',
    links: [
      { label: '学习中心', to: '/spaces/study-center' },
      { label: '龙樾cool', to: '/spaces/longyue-cool' },
      { label: '龙樾法庭', to: '/spaces/court' },
      { label: 'HaKuna Matata', to: '/spaces/hakuna' },
      { label: '小镇农场', to: '/spaces/farm' },
      { label: '游泳馆', to: '/spaces/swimming' },
      { label: '体育馆', to: '/spaces/gym' },
      { label: '龙樾博物馆', to: '/spaces/museum' },
      { label: '攀岩墙', to: '/spaces/climbing' },
      { label: '操场', to: '/spaces/playground' },
      { label: '餐厅', to: '/spaces/canteen' },
      { label: '苏园', to: '/spaces/suyuan' },
    ],
  },
  {
    title: '小镇活动',
    en: 'EVENTS',
    links: [
      { label: '开放日', to: '/events/open-day' },
      { label: '研学', to: '/events/study-tour' },
      { label: '龙市', to: '/events/dragon-market' },
      { label: '艺术节', to: '/events/art-festival' },
      { label: '技术节', to: '/events/tech-festival' },
      { label: '体育节', to: '/events/sports-festival' },
      { label: '泼水节', to: '/events/water-festival' },
      { label: '毕业典礼', to: '/events/graduation' },
      { label: '开学典礼', to: '/events/opening' },
      { label: '狂欢节', to: '/events/carnival' },
    ],
  },
  {
    title: '在线服务',
    en: 'SERVICES',
    links: [
      { label: '在线点餐', to: '/services/ordering' },
      { label: '校园卡充值', to: '/services/card-recharge' },
      { label: '网购校服', to: '/services/uniform' },
      { label: '家校中心', to: '/services/family-school' },
      { label: '家长学院', to: '/services/parent-academy' },
      { label: '校历', to: '/services/calendar' },
    ],
  },
]

const contactLinks: MenuLink[] = [
  { label: '小镇坐标', to: '/contact/location' },
  { label: '加入小镇', to: '/contact/join' },
  { label: '申请访问', to: '/contact/visit' },
]

const panelVariants = {
  closed: { x: '100%' },
  open: { x: 0 },
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

const linkContainerVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.2,
    },
  },
}

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
}

function MenuLinkItem({ link, onClose }: { link: MenuLink; onClose: () => void }) {
  const className = 'text-white/90 text-base hover:text-white hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1'

  if (link.external) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClose}
      >
        {link.label}
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )
  }

  return (
    <Link to={link.to} className={className} onClick={onClose}>
      {link.label}
    </Link>
  )
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200]">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="absolute right-0 top-0 h-full w-full max-w-lg bg-[#D32027] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="fixed top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Menu content */}
            <motion.div
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              className="pt-16 pb-12 px-8"
            >
              {menuCategories.map((category) => (
                <motion.div key={category.title} variants={linkVariants} className="mb-8">
                  <div className="mb-3">
                    <span className="text-white/50 text-xs font-inter tracking-widest">{category.en}</span>
                    <h3 className="text-white text-xl font-bold mt-0.5">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {category.links.map((link) => (
                      <MenuLinkItem key={link.label} link={link} onClose={onClose} />
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Contact section */}
              <motion.div variants={linkVariants} className="mt-10 pt-8 border-t border-white/20">
                <span className="text-white/50 text-xs font-inter tracking-widest">CONTACT</span>
                <h3 className="text-white text-xl font-bold mt-0.5 mb-3">联系我们</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {contactLinks.map((link) => (
                    <MenuLinkItem key={link.label} link={link} onClose={onClose} />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
