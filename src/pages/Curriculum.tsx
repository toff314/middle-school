import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { BookOpen, Layers, Grid3X3, Star, User, BarChart3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StatItem {
  value: number
  suffix: string
  label: string
}

interface CategoryItem {
  icon: React.ReactNode
  name: string
  description: string
  count: string
}

interface CourseItem {
  name: string
  code: string
  category: string
  bannerColor: string
  description: string
  instructor: string
  level: string
  tags: string[]
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats: StatItem[] = [
  { value: 200, suffix: '+', label: '课程数量' },
  { value: 30, suffix: '+', label: '学科领域' },
  { value: 50, suffix: '+', label: '特色社团' },
  { value: 100, suffix: '%', label: '选课走班' },
]

const categories: CategoryItem[] = [
  {
    icon: <BookOpen className="w-12 h-12" strokeWidth={1.5} />,
    name: '基础课程',
    description: '国家必修课程，夯实学科基础',
    count: '80+',
  },
  {
    icon: <Layers className="w-12 h-12" strokeWidth={1.5} />,
    name: '分层课程',
    description: '根据学生水平分层教学',
    count: '40+',
  },
  {
    icon: <Grid3X3 className="w-12 h-12" strokeWidth={1.5} />,
    name: '分类课程',
    description: '多学科交叉的综合课程',
    count: '30+',
  },
  {
    icon: <Star className="w-12 h-12" strokeWidth={1.5} />,
    name: '特需课程',
    description: '满足学生个性化发展需求',
    count: '50+',
  },
]

const courses: CourseItem[] = [
  {
    name: '创意写作',
    code: 'CW-101',
    category: '分类课程',
    bannerColor: '#4ECDC4',
    description: '通过创意写作培养学生的表达能力...',
    instructor: '张老师',
    level: '初中',
    tags: ['写作', '创意'],
  },
  {
    name: '机器人编程',
    code: 'RB-201',
    category: '特需课程',
    bannerColor: '#F59E0B',
    description: '学习机器人设计与编程，培养逻辑思维...',
    instructor: '李老师',
    level: '初中',
    tags: ['编程', '机器人'],
  },
  {
    name: '戏剧表演',
    code: 'DR-301',
    category: '特需课程',
    bannerColor: '#F59E0B',
    description: '通过戏剧表演提升自信与表达能力...',
    instructor: '王老师',
    level: '初中',
    tags: ['表演', '艺术'],
  },
  {
    name: '数学思维拓展',
    code: 'MA-201',
    category: '分层课程',
    bannerColor: '#2B5797',
    description: '拓展数学思维，培养解题能力...',
    instructor: '陈老师',
    level: '初中',
    tags: ['数学', '思维'],
  },
  {
    name: '中国传统文化',
    code: 'CU-101',
    category: '基础课程',
    bannerColor: '#D32027',
    description: '深入了解中华文化的精髓...',
    instructor: '刘老师',
    level: '初中',
    tags: ['文化', '传统'],
  },
  {
    name: '科学探究',
    code: 'SC-201',
    category: '分类课程',
    bannerColor: '#4ECDC4',
    description: '动手实验，探究科学原理...',
    instructor: '赵老师',
    level: '初中',
    tags: ['科学', '实验'],
  },
]

/* ------------------------------------------------------------------ */
/*  ScrollIndicator                                                    */
/* ------------------------------------------------------------------ */

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Curriculum page                                                    */
/* ------------------------------------------------------------------ */

export default function Curriculum() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      /* ---- Hero entrance ---- */
      const heroTl = gsap.timeline()

      heroTl
        .fromTo(
          '.curriculum-hero-bg',
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' }
        )
        .fromTo(
          '.hero-en-word',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08 },
          0.3
        )
        .fromTo(
          '.hero-cn',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          0.6
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          0.9
        )

      /* ---- Section 2: Overview title + text ---- */
      gsap.fromTo(
        '.overview-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.overview-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.overview-text',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.overview-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* ---- Stats: stagger reveal + count-up ---- */
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* Count-up animation for stat numbers */
      stats.forEach((stat, i) => {
        const el = document.querySelector(`.stat-num-${i}`)
        if (!el) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: 0.3 + i * 0.1,
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix
          },
        })
      })

      /* ---- Section 3: Course Categories ---- */
      gsap.fromTo(
        '.cat-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cat-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.cat-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.cat-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* ---- Section 4: Featured Courses ---- */
      gsap.fromTo(
        '.featured-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.course-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.course-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* ============================================================= */}
      {/*  HERO SECTION                                                  */}
      {/* ============================================================= */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        {/* Gradient background */}
        <div
          className="curriculum-hero-bg absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #B91C22 0%, #D32027 50%, #E8484D 100%)',
          }}
        >
          {/* Subtle pattern overlay — diagonal lines */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 11px)',
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] text-center px-6">
          <h1 className="text-white font-playfair italic font-bold text-[52px] lg:text-[96px] leading-none tracking-[0.02em]">
            <span className="hero-en-word inline-block">C</span>
            <span className="hero-en-word inline-block">o</span>
            <span className="hero-en-word inline-block">u</span>
            <span className="hero-en-word inline-block">r</span>
            <span className="hero-en-word inline-block">s</span>
            <span className="hero-en-word inline-block">e</span>
          </h1>
          <p className="hero-cn text-white font-noto text-[24px] lg:text-[36px] font-normal mt-4 tracking-[0.15em] opacity-90">
            课程体系
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <ScrollIndicator />
        </div>
      </section>

      {/* ============================================================= */}
      {/*  CURRICULUM OVERVIEW SECTION                                   */}
      {/* ============================================================= */}
      <section className="overview-section bg-white pt-[128px] pb-[64px]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          <h2 className="overview-title font-noto text-[32px] lg:text-[48px] font-bold text-[#D32027] mb-12">
            课程体系
          </h2>
          <p className="overview-text font-noto text-[18px] lg:text-[20px] font-normal text-[#666666] leading-[1.8] max-w-[800px] mb-12">
            十一龙樾的课程体系以"创造适合每一位学生发展的教育"为核心理念，构建起分层、分类、综合、特需的课程体系，让每一位学生都能找到适合自己的成长路径。
          </p>

          {/* Stats row */}
          <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-item flex flex-col items-center text-center relative"
              >
                <span
                  className={`stat-num-${i} font-playfair text-[48px] font-bold text-[#D32027] leading-tight`}
                >
                  0{stat.suffix}
                </span>
                <span className="font-noto text-[16px] text-[#666666] mt-2">
                  {stat.label}
                </span>
                {/* Vertical divider (desktop only, except last) */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#E5E5E5]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  COURSE CATEGORIES SECTION                                     */}
      {/* ============================================================= */}
      <section className="cat-section bg-[#F5F5F5] py-[96px]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          <h2 className="cat-title font-noto text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] text-center mb-16">
            课程分类
          </h2>

          <div className="cat-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="cat-card bg-white rounded-xl p-10 px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="text-[#D32027] mb-6">{cat.icon}</div>
                <h3 className="font-noto text-[20px] font-bold text-[#1A1A1A] mb-2">
                  {cat.name}
                </h3>
                <p className="font-noto text-[14px] text-[#666666] leading-[1.6] mb-4">
                  {cat.description}
                </p>
                <span className="font-noto text-[14px] text-[#D32027] font-medium">
                  {cat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  FEATURED COURSES SECTION                                      */}
      {/* ============================================================= */}
      <section className="featured-section bg-white py-[96px]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          <div className="featured-header text-center mb-16">
            <h2 className="font-noto text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] mb-4">
              特色课程
            </h2>
            <p className="font-noto text-[18px] text-[#999999]">
              探索未知，发现潜能
            </p>
          </div>

          <div className="course-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.code}
                className="course-card bg-white rounded-lg border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Color banner */}
                <div
                  className="h-20 relative"
                  style={{ backgroundColor: course.bannerColor }}
                >
                  {/* Course code */}
                  <span className="absolute bottom-3 left-3 font-playfair text-[14px] font-bold text-white bg-black/30 px-2 py-0.5 rounded">
                    {course.code}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-noto text-[20px] font-bold text-[#1A1A1A] mb-2">
                    {course.name}
                  </h3>
                  <p className="font-noto text-[14px] text-[#666666] leading-[1.6] mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-noto text-[12px] text-[#666666] border border-[#E5E5E5] rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta row */}
                  <div className="flex items-center justify-between text-[14px]">
                    <div className="flex items-center gap-1 text-[#666666]">
                      <User className="w-4 h-4" />
                      <span className="font-noto">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#999999]">
                      <BarChart3 className="w-4 h-4" />
                      <span className="font-noto">{course.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
