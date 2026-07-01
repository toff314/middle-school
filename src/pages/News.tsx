import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ChevronDown } from 'lucide-react'

interface NewsArticle {
  id: string
  title: string
  category: string
  excerpt: string
  coverImage: string
  date: string
  author: string
}

const categories = ['全部', '龙樾进行时', '升旗敬礼', '龙樾洞察', '公示', '党建']

const newsData: NewsArticle[] = [
  { id: '1', title: '龙樾实验中学举办2024年春季运动会', category: '龙樾进行时', excerpt: '阳光明媚，春意盎然。北京十一学校龙樾实验中学2024年春季运动会在全校师生的期盼中隆重开幕。', coverImage: '/news-1.jpg', date: '2024-04-15', author: '校办公室' },
  { id: '2', title: '我校学生在市科技创新大赛中荣获佳绩', category: '龙樾洞察', excerpt: '在刚刚结束的北京市青少年科技创新大赛中，我校学子凭借出色的创新项目获得评委高度评价。', coverImage: '/news-2.jpg', date: '2024-04-10', author: '科技中心' },
  { id: '3', title: '龙樾艺术节：让每一个孩子绽放光彩', category: '龙樾进行时', excerpt: '一年一度的龙樾艺术节如期而至，同学们用歌声、舞蹈、绘画等多种形式展现艺术才华。', coverImage: '/news-3.jpg', date: '2024-03-28', author: '艺术中心' },
  { id: '4', title: '新学期升旗仪式：以梦为马，不负韶华', category: '升旗敬礼', excerpt: '新学期的第一次升旗仪式上，校长寄语全体师生以梦为马，在求知路上不断前行。', coverImage: '/news-1.jpg', date: '2024-03-01', author: '学生处' },
  { id: '5', title: '龙樾教师参加国家级教学研讨会', category: '公示', excerpt: '我校多名教师受邀参加全国中学教育教学研讨会，与来自全国各地的教育工作者深入交流。', coverImage: '/news-2.jpg', date: '2024-02-20', author: '教务处' },
  { id: '6', title: '寒假研学活动：走进故宫，感受历史', category: '龙樾进行时', excerpt: '寒假期间，学校组织学生走进故宫博物院，开展以"探寻中华文明"为主题的研学活动。', coverImage: '/news-3.jpg', date: '2024-02-05', author: '研学中心' },
  { id: '7', title: '我校党支部开展主题党日活动', category: '党建', excerpt: '为深入学习贯彻党的二十大精神，学校党支部组织全体党员开展主题党日学习活动。', coverImage: '/news-1.jpg', date: '2024-01-18', author: '党支部' },
  { id: '8', title: '龙樾科技节：激发创新潜能', category: '龙樾进行时', excerpt: '为期一周的龙樾科技节圆满落幕，机器人竞赛、编程挑战赛等活动激发了学生的科技创新热情。', coverImage: '/news-2.jpg', date: '2024-01-10', author: '科技中心' },
  { id: '9', title: '期末表彰大会：见证成长，表彰优秀', category: '公示', excerpt: '本学期期末表彰大会上，学校对各方面表现优异的学生和班集体进行了表彰奖励。', coverImage: '/news-3.jpg', date: '2024-01-05', author: '学生处' },
  { id: '10', title: '家长学院：家校共育，携手成长', category: '龙樾洞察', excerpt: '本期家长学院邀请教育专家为家长们带来关于青春期亲子沟通的专题讲座。', coverImage: '/news-1.jpg', date: '2023-12-22', author: '家校中心' },
  { id: '11', title: '龙樾学子在全国英语演讲比赛中获奖', category: '龙樾洞察', excerpt: '我校初二年级学生在"外研社杯"全国中学生英语演讲比赛中表现优异，获得一等奖。', coverImage: '/news-2.jpg', date: '2023-12-15', author: '英语组' },
  { id: '12', title: '冬季体育锻炼：强身健体，磨练意志', category: '升旗敬礼', excerpt: '学校开展冬季体育锻炼活动，鼓励学生积极参与户外运动，增强体质，磨练意志品质。', coverImage: '/news-3.jpg', date: '2023-12-01', author: '体育组' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [visibleCount, setVisibleCount] = useState(6)
  const tabsRef = useRef<HTMLDivElement>(null)

  const filteredNews = activeCategory === '全部'
    ? newsData
    : newsData.filter((article) => article.category === activeCategory)

  const visibleNews = filteredNews.slice(0, visibleCount)
  const hasMore = visibleCount < filteredNews.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setVisibleCount(6)
  }

  return (
    <div className="min-h-[100dvh]">
      {/* Hero Section */}
      <section className="bg-crimson min-h-[50vh] flex items-center justify-center">
        <div className="text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold font-noto mb-4"
          >
            新闻
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-2xl md:text-3xl font-playfair italic opacity-90"
          >
            News
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <div
        ref={tabsRef}
        className="sticky top-16 z-30 bg-crimson border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`
                  whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium
                  transition-all duration-300 flex-shrink-0 cursor-pointer
                  ${activeCategory === category
                    ? 'bg-white text-crimson shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleNews.map((article) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category Badge */}
                <span className="inline-block bg-crimson text-white text-xs px-2 py-1 rounded mb-3">
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {visibleNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">该分类下暂无新闻</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="text-sm font-medium">加载更多</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
