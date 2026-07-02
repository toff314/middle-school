import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Landmark, History, Palette, BookOpen, CalendarDays } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Museum() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 60, duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const features = [
    { title: '历史长廊', desc: '展示学校发展历史、重要时刻和老照片，让同学们了解学校的沿革与变迁。', icon: History },
    { title: '艺术展厅', desc: '定期举办学生美术作品展、书法展、摄影展，为同学们提供展示才华的舞台。', icon: Palette },
    { title: '文化讲堂', desc: '邀请学者、艺术家开展文化讲座，拓展学生的人文视野和艺术修养。', icon: BookOpen },
    { title: '主题展览', desc: '结合传统节日和重要纪念日，策划举办主题文化展览活动。', icon: CalendarDays },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1518] via-[#6B1012] to-[#4A0A0C]" />
        <div className="relative z-10 text-center text-white px-6">
          <Landmark className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">龙樾博物馆</h1>
          <p className="text-xl md:text-2xl opacity-90">LONGYUE MUSEUM</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">校园里的文化殿堂</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾博物馆是学校独特的文化教育空间，承载着记录历史、展示艺术、传承文化的使命，是培养学生人文素养的重要阵地。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾博物馆是学校最具文化底蕴的空间之一，它将厚重的历史积淀与现代教育理念融为一体，为师生提供了一个感知文化、启迪思想的精神家园。博物馆的藏品涵盖学校发展各个时期的重要文献、实物、照片和影像资料，完整记录了学校从创立到发展壮大的光辉历程。
              </p>
              <p className="leading-loose">
                博物馆采用数字化展示手段，结合传统展陈方式，打造了一个集展览、教学、研究于一体的现代化文化空间。通过触摸屏互动系统，参观者可以深入了解每一件展品背后的故事；VR虚拟现实体验区让同学们身临其境地感受历史场景；数字化档案馆则为师生研究学校历史提供了便捷的检索平台。
              </p>
              <p className="leading-loose">
                博物馆不仅是对过去的记录，更是对未来的启迪。这里定期举办各类文化展览和主题活动，从学生艺术作品展到传统文化体验日，从校史教育到名家书画展，丰富多彩的馆内外活动让博物馆真正成为校园文化建设的重要窗口和育人平台。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8 text-center">展馆功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#D32027] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
