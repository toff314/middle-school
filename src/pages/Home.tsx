import { useState, useEffect, useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from '@/components/ScrollIndicator'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────── data ──────────────────────── */

const heroSlides = [
  { src: '/hero-home-1.jpg', alt: '学校建筑外观' },
  { src: '/hero-home-2.jpg', alt: '学校走廊内景' },
  { src: '/hero-home-3.jpg', alt: '玉兰花盛开' },
]

const campusHotspots = [
  { label: '小镇晒谷场', sub: 'Public Library', x: 15, y: 20, desc: '开放式阅读空间，学生和教师可以自由阅读、交流。' },
  { label: '北楼', sub: 'North Building', x: 30, y: 15, desc: '主教学楼，设有多个学科教室和实验室。' },
  { label: '餐厅', sub: 'Canteen', x: 25, y: 40, desc: '宽敞明亮的食堂，提供营养均衡的学生餐。' },
  { label: '操场', sub: 'Playground', x: 55, y: 35, desc: '标准运动场，包含田径跑道和足球场。' },
  { label: '苏园', sub: 'Su Yuan', x: 75, y: 30, desc: '传统中式园林，学生休憩和文化体验空间。' },
  { label: '地下空间', sub: 'B1/B2', x: 45, y: 55, desc: '地下活动空间，包含多功能厅和艺术教室。' },
  { label: '南楼', sub: 'South Building', x: 70, y: 50, desc: '副教学楼，设有语言教室和创客空间。' },
  { label: '体育馆', sub: 'Gymnasium', x: 15, y: 65, desc: '室内体育馆，可进行篮球、羽毛球等多项运动。' },
  { label: '游泳馆', sub: 'Swimming Pool', x: 30, y: 70, desc: '标准游泳池，开设游泳课程。' },
  { label: '攀岩墙', sub: 'Climbing Wall', x: 50, y: 65, desc: '专业攀岩设施，锻炼学生勇气和体能。' },
  { label: '小镇农场', sub: 'Town Farm', x: 80, y: 60, desc: '学生经营的农场，体验种植和收获的乐趣。' },
  { label: '小镇商店', sub: 'Mall', x: 85, y: 75, desc: '学生商店，由学生自主经营和管理。' },
]

/* ──────────────────────── Hero ──────────────────────── */

function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const dotsRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }, [])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      '.hero-bg-img',
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      0.3
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.8
    )
    .fromTo(
      dotsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      1.0
    )
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background images with crossfade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className="hero-bg-img absolute inset-0 w-full h-full"
          style={{
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 800ms ease',
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{
              transform: idx === current ? 'scale(1)' : 'scale(1.05)',
              transition: 'transform 800ms ease',
            }}
          />
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)' }}
          />
        </div>
      ))}

      {/* Hero text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1
          ref={titleRef}
          className="font-playfair text-white text-7xl md:text-[96px] font-bold tracking-[0.05em] text-center"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          HELLO
        </h1>
        <p
          ref={subtitleRef}
          className="font-noto text-white text-xl md:text-[32px] font-normal tracking-[0.1em] mt-4 text-center"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
        >
          带着你的梦想来
        </p>
      </div>

      {/* Carousel dots */}
      <div
        ref={dotsRef}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3"
      >
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor: idx === current ? 'white' : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`切换到第${idx + 1}张`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}

/* ──────────────────────── Intro ──────────────────────── */

function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const els = sectionRef.current?.querySelectorAll('.intro-animate')
    if (!els) return
    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.2,
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 md:py-32 px-6 lg:px-20"
    >
      <div className="max-w-page mx-auto">
        <h2 className="intro-animate font-noto text-[#D32027] text-4xl md:text-[64px] font-bold tracking-[0.02em] leading-[1.2] mb-12">
          Hello, 带着你的梦想来
        </h2>
        <p className="intro-animate font-noto text-[#1A1A1A] text-lg md:text-[28px] font-medium leading-[1.5] tracking-[0.02em] max-w-[900px] mb-12">
          十一龙樾着力于培养志远意诚、思方行圆，即志存高远、诚信笃志、言行规范、思想活跃的社会栋梁和民族脊梁。
        </p>
        <p className="intro-animate font-noto text-[#666666] text-base md:text-lg font-normal leading-[1.8] max-w-[680px] md:ml-[20%]">
          十一龙樾拥有一支满怀教育梦想的专家团队，我们有着共同的方向：创造适合每一位学生发展的教育。为孩子提供鼓舞人心的学习经历：如何去生活，工作，如何融入经济大潮和适应未来社会。教育不是为生活做准备的，而是生活本身。
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────── Campus Map ──────────────────────── */

function CampusMapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  useGSAP(() => {
    const els = sectionRef.current?.querySelectorAll('.map-animate')
    if (!els) return
    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i === 0 ? 0 : 40, y: i === 0 ? 0 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.2,
        }
      )
    })

    // Map image scale-in
    gsap.fromTo(
      '.map-image',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.map-image',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Hotspots stagger
    gsap.fromTo(
      '.hotspot-marker',
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.map-image',
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        delay: 0.5,
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-24"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F7FF 100%)' }}
    >
      <div className="max-w-page mx-auto px-6 lg:px-20">
        {/* Title area - right aligned */}
        <div className="text-right mb-16">
          <h2 className="map-animate font-playfair text-[#D32027] text-5xl md:text-[80px] font-bold leading-[1.1] mb-6">
            Let's walk around
          </h2>
          <p className="map-animate font-noto text-[#1A1A1A] text-lg md:text-[28px] font-medium leading-[1.5] mb-6">
            欢迎来到龙樾未来小镇，我们认为学校应该是个很有趣的地方
          </p>
          <p className="map-animate font-noto text-[#666666] text-base md:text-lg font-normal leading-[1.8] max-w-[680px] ml-auto">
            我们喜欢和孩子一起创造有趣、美好的成长经历，这一点很重要。注意哦！来到龙樾很容易，而忘记龙樾很难。准备好了吗？我们一起来小镇转转！
          </p>
        </div>

        {/* Campus map with hotspots */}
        <div className="map-image relative w-full min-h-[60vh] md:min-h-[80vh] rounded-2xl overflow-hidden">
          <img
            src="/campus-map.jpg"
            alt="龙樾未来小镇校园地图"
            className="w-full h-full object-contain"
          />

          {/* Hotspots */}
          {campusHotspots.map((spot, idx) => (
            <div
              key={idx}
              className="hotspot-marker absolute"
              style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveHotspot(idx)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              {/* Marker circle */}
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#D32027] cursor-pointer transition-transform duration-200 hover:scale-[1.3] shadow-md relative z-10" />

              {/* Label pill */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap px-2 py-0.5 rounded-full bg-[#D32027] text-white text-xs font-medium opacity-0 transition-opacity duration-200 pointer-events-none"
                style={{ opacity: activeHotspot === idx ? 1 : 0 }}
              >
                {spot.label}
              </div>

              {/* Tooltip */}
              {activeHotspot === idx && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-8 w-48 bg-white rounded-lg shadow-xl p-3 z-20 pointer-events-none"
                >
                  <p className="font-noto text-sm font-bold text-[#D32027] mb-1">
                    {spot.label}
                  </p>
                  <p className="font-inter text-xs text-[#666666] mb-1">{spot.sub}</p>
                  <p className="font-noto text-xs text-[#666666] leading-relaxed">{spot.desc}</p>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-white rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────── Quote ──────────────────────── */

function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.quote-text',
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-[60vh] flex items-center justify-center py-24 md:py-32 px-6"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <p
          className="quote-text font-noto text-[#D32027] text-2xl md:text-[36px] font-medium leading-[1.6] tracking-[0.05em]"
          style={{
            textShadow: '0 0 40px rgba(211,32,39,0.15)',
          }}
        >
          星空璀璨，心之所向；道阻且长，行则将至。
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────── Home Page ──────────────────────── */

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CampusMapSection />
      <QuoteSection />
    </>
  )
}
