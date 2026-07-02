import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { BookOpen, Clock, Users, BookMarked, MessageCircle, Focus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function StudyCenter() {
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

  const zones = [
    { title: '静心阅读区', desc: '宽敞明亮的阅读空间，配备丰富的中外文图书资源，为学生提供沉浸式阅读体验。', icon: BookMarked },
    { title: '小组讨论区', desc: '开放式讨论空间，配备白板与多媒体设备，支持小组合作学习和项目研讨。', icon: MessageCircle },
    { title: '自主自习区', desc: '安静舒适的自习环境，独立桌椅设计，帮助学生集中精力、高效学习。', icon: Focus },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1518] via-[#6B1012] to-[#4A0A0C]" />
        <div className="relative z-10 text-center text-white px-6">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">学习中心</h1>
          <p className="text-xl md:text-2xl opacity-90">STUDY CENTER</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">学习的心脏</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              学习中心是龙樾实验中学的知识殿堂，集阅读、自习、研讨于一体的综合性学习空间，为同学们提供最优质的学习资源和环境。
            </p>
          </div>

          <div className="animate-in grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#D32027] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">开放时间</h3>
                <p className="text-gray-600 leading-relaxed">
                  周一至周五 7:30 - 21:00<br />
                  周六、周日 8:00 - 18:00<br />
                  法定节假日另行通知
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 flex items-start gap-4">
              <Users className="w-8 h-8 text-[#D32027] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">容纳人数</h3>
                <p className="text-gray-600 leading-relaxed">
                  学习大厅可容纳200人同时自习<br />
                  小组讨论室共6间，每间8-12人<br />
                  阅读区座位80个
                </p>
              </div>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8 text-center">功能分区</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {zones.map((z, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                  <z.icon className="w-10 h-10 text-[#D32027] mb-4" />
                  <h3 className="text-xl font-bold mb-3">{z.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
