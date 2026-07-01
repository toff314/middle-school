import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuCategories = [
  {
    title: '初识小镇',
    en: 'ABOUT',
    links: ['我们是谁', '镇长寄语', '空间环境', '课程体系', '团队', '吉祥物', '新闻'],
  },
  {
    title: '探访小镇',
    en: 'VISIT',
    links: ['学习中心', '龙樾cool', '龙樾法庭', 'HaKuna Matata', '小镇农场', '游泳馆', '体育馆', '龙樾博物馆', '攀岩墙', '操场', '餐厅', '苏园'],
  },
  {
    title: '小镇活动',
    en: 'EVENTS',
    links: ['开放日', '研学', '龙市', '艺术节', '技术节', '体育节', '泼水节', '毕业典礼', '开学典礼', '狂欢节'],
  },
  {
    title: '在线服务',
    en: 'SERVICES',
    links: ['在线点餐', '校园卡充值', '网购校服', '家校中心', '家长学院', '校历'],
  },
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
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
}

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
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
            className="absolute right-0 top-0 h-full w-full max-w-md bg-[#D32027] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
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
                      <button
                        key={link}
                        onClick={onClose}
                        className="text-white/90 text-base hover:text-white hover:underline underline-offset-4 transition-colors"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Contact section */}
              <motion.div variants={linkVariants} className="mt-10 pt-8 border-t border-white/20">
                <span className="text-white/50 text-xs font-inter tracking-widest">CONTACT</span>
                <h3 className="text-white text-xl font-bold mt-0.5 mb-3">联系我们</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {['小镇坐标', '加入小镇', '申请访问'].map((link) => (
                    <button
                      key={link}
                      onClick={onClose}
                      className="text-white/90 text-base hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {link}
                    </button>
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
