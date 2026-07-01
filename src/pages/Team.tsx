import { useState, useRef, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  Teacher data                                                       */
/* ------------------------------------------------------------------ */

const TEACHER_IMAGES = [
  '/teacher-01.jpg',
  '/teacher-02.jpg',
  '/teacher-03.jpg',
  '/teacher-04.jpg',
  '/teacher-05.jpg',
  '/teacher-06.jpg',
  '/teacher-07.jpg',
  '/teacher-08.jpg',
]

const DEPARTMENTS = ['语文组', '数学组', '英语组', '理化生组', '史地政组', '艺体组', '综合组']

const TEACHER_NAMES = [
  '王晓燕', '李明辉', '张婷婷', '刘志强', '陈雪梅', '赵鹏飞', '孙丽华', '周建国',
  '吴雅琴', '郑海涛', '黄慧敏', '杨俊峰', '何秀兰', '罗文彬', '林思琪', '高伟强',
  '谢晓红', '唐志刚', '曹美玲', '许建波', '邓淑芬', '萧子轩', '冯嘉玲', '董明远',
  '袁晓雯', '蒋大为', '魏桂花', '傅天翔', '沈静怡', '陆建华', '姚丽娜', '卢国强',
  '钟晓芳', '姜博文', '范思琪', '金志豪', '万美玲', '夏雨桐', '孟志强', '顾晓兰',
]

const TEACHER_TITLES = [
  '高级教师', '一级教师', '骨干教师', '学科带头人', '特级教师', '青年教师', '教研组长', '年级组长',
  '高级教师', '一级教师', '骨干教师', '学科带头人', '高级教师', '一级教师', '青年教师', '骨干教师',
  '高级教师', '一级教师', '学科带头人', '教研组长', '高级教师', '青年教师', '一级教师', '骨干教师',
  '高级教师', '学科带头人', '一级教师', '青年教师', '骨干教师', '高级教师', '一级教师', '教研组长',
  '高级教师', '青年教师', '一级教师', '骨干教师', '高级教师', '学科带头人', '一级教师', '青年教师',
]

const BIOS = [
  '从事教育教学工作二十余年，始终坚持"以学生为中心"的教育理念。在课堂教学中注重启发式教学，善于激发学生的学习兴趣和创造力。多次获得市级教学能手称号，主持参与多项省级课题研究。',
  '毕业于北京师范大学，拥有丰富的教学经验和深厚的学科功底。教学风格严谨而不失幽默，深受学生喜爱。致力于将现代教育技术与传统教学相结合，探索高效课堂教学模式。',
  '教育硕士，区级骨干教师。在教学中注重培养学生的思维能力和创新精神，多次指导学生在全国竞赛中获奖。热心教研工作，积极参与课程改革，撰写的多篇论文在核心期刊发表。',
  '从教十五年，始终坚持"因材施教"的教育原则。善于发现每个学生的闪光点，帮助学生建立学习自信。担任班主任工作多年，所带班级多次被评为先进集体。',
  '市级学科带头人，拥有丰富的毕业班教学经验。教学方法灵活多样，课堂生动有趣，教学成绩突出。积极参与教育科研，主持完成多项市级课题。',
  '年轻有为的骨干教师，善于运用信息技术辅助教学。课堂设计新颖独特，注重培养学生的自主学习能力。多次在各级教学比武中获得优异成绩。',
  '教育学博士，专注于课程与教学论研究。将前沿教育理念融入日常教学，注重培养学生的核心素养。多次受邀在学术交流活动中做专题报告。',
  '资深教育工作者，从教三十年来始终坚守教学一线。教学经验丰富，对教育事业充满热情。热心培养青年教师，为学校教师队伍建设做出了重要贡献。',
]

interface Teacher {
  id: number
  name: string
  title: string
  department: string
  avatar: string
  bio: string
  email: string
}

const teachers: Teacher[] = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: TEACHER_NAMES[i],
  title: TEACHER_TITLES[i],
  department: DEPARTMENTS[i % DEPARTMENTS.length],
  avatar: TEACHER_IMAGES[i % TEACHER_IMAGES.length],
  bio: BIOS[i % BIOS.length],
  email: `teacher${(i % 8) + 1}@bndsly.cn`,
}))

/* ------------------------------------------------------------------ */
/*  Duotone CSS styles (injected via <style>)                          */
/* ------------------------------------------------------------------ */

const DUOTONE_CSS = `
  .duotone-wrap {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .duotone-wrap::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #D32027 0%, #2B5797 100%);
    mix-blend-mode: multiply;
    opacity: 0.85;
    z-index: 2;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .duotone-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #E8484D 0%, #4ECDC4 100%);
    mix-blend-mode: screen;
    opacity: 0.4;
    z-index: 3;
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .duotone-wrap:hover::before,
  .duotone-wrap:hover::after {
    opacity: 0;
  }
  .duotone-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    filter: grayscale(100%) contrast(1.1);
    transition: filter 400ms cubic-bezier(0.4, 0, 0.2, 1), transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .duotone-wrap:hover img {
    filter: grayscale(0%) contrast(1);
    transform: scale(1.05);
  }
  .duotone-wrap .teacher-info-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
    z-index: 4;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1), transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .duotone-wrap:hover .teacher-info-overlay {
    opacity: 1;
    transform: translateY(0);
  }
  /* fallback for browsers without mix-blend-mode support */
  @supports not (mix-blend-mode: multiply) {
    .duotone-wrap::before {
      opacity: 0;
    }
    .duotone-wrap::after {
      opacity: 0;
    }
    .duotone-wrap img {
      filter: sepia(30%) saturate(1.5) hue-rotate(-10deg);
    }
    .duotone-wrap:hover img {
      filter: sepia(0%) saturate(1) hue-rotate(0deg);
      transform: scale(1.05);
    }
  }
`

/* ------------------------------------------------------------------ */
/*  Teacher Detail Drawer — Framer Motion (isolated)                   */
/* ------------------------------------------------------------------ */

const easeDramatic = [0.16, 1, 0.3, 1] as [number, number, number, number]

function TeacherDrawer({
  teacher,
  onClose,
}: {
  teacher: Teacher | null
  onClose: () => void
}) {
  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  /* Lock body scroll when open */
  useEffect(() => {
    if (teacher) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [teacher])

  return (
    <AnimatePresence>
      {teacher && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            role="presentation"
          />

          {/* Drawer panel — right on desktop, bottom on mobile */}
          <motion.div
            className="relative ml-auto h-full w-full bg-white shadow-[-4px_0_24px_rgba(0,0,0,0.15)] md:w-[480px]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: easeDramatic }}
            style={{
              maxHeight: '100dvh',
              overflowY: 'auto',
            }}
          >
            {/* Mobile: bottom sheet styling overrides via responsive classes */}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[201] hidden max-md:block max-md:pointer-events-auto">
              <motion.div
                className="mx-auto w-full max-w-lg rounded-t-2xl bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.15)]"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ duration: 0.4, ease: easeDramatic }}
              >
                <MobileDrawerContent teacher={teacher} onClose={onClose} />
              </motion.div>
            </div>

            {/* Desktop drawer content */}
            <div className="hidden h-full flex-col p-8 md:flex">
              <DesktopDrawerContent teacher={teacher} onClose={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function DesktopDrawerContent({
  teacher,
  onClose,
}: {
  teacher: Teacher
  onClose: () => void
}) {
  return (
    <>
      {/* Close button */}
      <button
        onClick={onClose}
        className="mb-6 ml-auto flex h-10 w-10 items-center justify-center rounded-full text-[var(--gray-500)] transition-colors hover:bg-[var(--gray-100)] hover:text-[var(--black)]"
        aria-label="关闭"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Avatar */}
      <motion.div
        className="mb-6 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: easeDramatic }}
      >
        <div className="h-[200px] w-[200px] overflow-hidden rounded-full shadow-lg">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h3
        className="mb-1 text-center font-noto text-[28px] font-bold"
        style={{ color: 'var(--black)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: easeDramatic }}
      >
        {teacher.name}
      </motion.h3>

      {/* Department */}
      <motion.p
        className="mb-1 text-center font-noto text-base font-medium"
        style={{ color: 'var(--crimson)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: easeDramatic }}
      >
        {teacher.department}
      </motion.p>

      {/* Title */}
      <motion.p
        className="mb-6 text-center font-noto text-sm"
        style={{ color: 'var(--gray-500)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: easeDramatic }}
      >
        {teacher.title}
      </motion.p>

      {/* Divider */}
      <motion.div
        className="mb-6 h-px w-full"
        style={{ backgroundColor: 'var(--gray-300)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
      />

      {/* Bio */}
      <motion.div
        className="mb-6 flex-1 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: easeDramatic }}
      >
        <p
          className="font-noto text-base leading-[1.8]"
          style={{ color: 'var(--gray-700)' }}
        >
          {teacher.bio}
        </p>
      </motion.div>

      {/* Email */}
      <motion.div
        className="flex items-center gap-2 pt-4"
        style={{ borderTop: '1px solid var(--gray-300)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease: easeDramatic }}
      >
        <Mail className="h-4 w-4" style={{ color: 'var(--gray-500)' }} />
        <span className="font-noto text-sm" style={{ color: 'var(--gray-500)' }}>
          {teacher.email}
        </span>
      </motion.div>
    </>
  )
}

function MobileDrawerContent({
  teacher,
  onClose,
}: {
  teacher: Teacher
  onClose: () => void
}) {
  return (
    <div className="flex max-h-[90vh] flex-col p-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="mb-4 ml-auto flex h-10 w-10 items-center justify-center rounded-full text-[var(--gray-500)] transition-colors hover:bg-[var(--gray-100)] hover:text-[var(--black)]"
        aria-label="关闭"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Avatar */}
      <div className="mb-4 flex justify-center">
        <div className="h-[160px] w-[160px] overflow-hidden rounded-full shadow-lg">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3
        className="mb-1 text-center font-noto text-2xl font-bold"
        style={{ color: 'var(--black)' }}
      >
        {teacher.name}
      </h3>

      {/* Department */}
      <p
        className="mb-1 text-center font-noto text-base font-medium"
        style={{ color: 'var(--crimson)' }}
      >
        {teacher.department}
      </p>

      {/* Title */}
      <p
        className="mb-4 text-center font-noto text-sm"
        style={{ color: 'var(--gray-500)' }}
      >
        {teacher.title}
      </p>

      {/* Bio */}
      <div className="mb-4 flex-1 overflow-y-auto">
        <p
          className="font-noto text-base leading-[1.8]"
          style={{ color: 'var(--gray-700)' }}
        >
          {teacher.bio}
        </p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid var(--gray-300)' }}>
        <Mail className="h-4 w-4" style={{ color: 'var(--gray-500)' }} />
        <span className="font-noto text-sm" style={{ color: 'var(--gray-500)' }}>
          {teacher.email}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Teacher Photo Grid — GSAP ScrollTrigger (isolated)                 */
/* ------------------------------------------------------------------ */

function TeacherPhotoGrid({
  onSelectTeacher,
}: {
  onSelectTeacher: (teacher: Teacher) => void
}) {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!gridRef.current) return

      const items = gridRef.current.querySelectorAll('.teacher-grid-item')

      /* Staggered scale-in animation */
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          stagger: {
            each: 0.03,
            from: 'random',
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
          delay: 0.4,
        }
      )
    },
    { scope: gridRef }
  )

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-3 gap-1 sm:grid-cols-5 sm:gap-1.5 lg:grid-cols-8 lg:gap-2"
      role="grid"
      aria-label="教师照片墙"
    >
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          className="teacher-grid-item aspect-square"
          role="button"
          tabIndex={0}
          aria-label={`${teacher.name} - ${teacher.department} ${teacher.title}`}
          onClick={() => onSelectTeacher(teacher)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelectTeacher(teacher)
            }
          }}
        >
          <div className="duotone-wrap h-full w-full">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              loading="lazy"
            />
            <div className="teacher-info-overlay">
              <p className="font-noto text-sm font-bold text-white">
                {teacher.name}
              </p>
              <p className="font-noto text-xs text-white/80">
                {teacher.department}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

function TeamHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      if (!titleRef.current || !subtitleRef.current) return

      const tl = gsap.timeline({ delay: 0.2 })

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      ).fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    },
    { scope: sectionRef }
  )

  return (
    <div
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/hero-team.jpg"
        alt="教师团队"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center" style={{ zIndex: 2 }}>
        <h1
          ref={titleRef}
          className="mb-4 font-noto text-[40px] font-bold text-white sm:text-[52px] lg:text-[64px]"
          style={{ opacity: 0, textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          团队
        </h1>
        <p
          ref={subtitleRef}
          className="font-playfair text-[32px] font-bold italic tracking-[0.02em] text-white sm:text-[48px] lg:text-[64px]"
          style={{
            opacity: 0,
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          TEAM
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <div className="flex h-10 w-10 animate-bounce-scroll items-center justify-center rounded-full border-2 border-white">
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Team Page                                                     */
/* ------------------------------------------------------------------ */

export default function Team() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

  const handleSelectTeacher = useCallback((teacher: Teacher) => {
    setSelectedTeacher(teacher)
  }, [])

  const handleCloseDrawer = useCallback(() => {
    setSelectedTeacher(null)
  }, [])

  return (
    <>
      {/* Inject duotone CSS */}
      <style>{DUOTONE_CSS}</style>

      {/* Hero Section */}
      <TeamHero />

      {/* Teacher Photo Wall Section */}
      <section
        className="relative py-16 lg:py-24"
        style={{ backgroundColor: '#F5F0EB' }}
      >
        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-20">
          {/* Section title */}
          <h2
            className="mb-12 text-center font-noto text-[40px] font-bold sm:text-[52px] lg:mb-16 lg:text-[64px]"
            style={{ color: 'var(--crimson)' }}
          >
            团队
          </h2>

          {/* Photo Grid */}
          <TeacherPhotoGrid onSelectTeacher={handleSelectTeacher} />
        </div>
      </section>

      {/* Teacher Detail Drawer */}
      <TeacherDrawer teacher={selectedTeacher} onClose={handleCloseDrawer} />
    </>
  )
}
