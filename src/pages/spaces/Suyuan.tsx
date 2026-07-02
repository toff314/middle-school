import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Flower2, TreePine, Wind, Coffee, Brush } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Suyuan() {
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
    { title: '古典园林', desc: '融合苏州园林造景手法，假山、流水、亭台、回廊，一步一景。', icon: TreePine },
    { title: '书香雅韵', desc: '设有户外书亭和书法石桌，同学们可在此品读经典、挥毫泼墨。', icon: Brush },
    { title: '静谧休憩', desc: '竹林幽径和石凳茶座为师生提供放松身心、静思冥想的空间。', icon: Coffee },
    { title: '自然清风', desc: '四季花卉更迭，绿树成荫，鸟语花香，是自然生态教育的活教材。', icon: Wind },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] via-[#1B5E3B] to-[#0F4A2B]" />
        <div className="relative z-10 text-center text-white px-6">
          <Flower2 className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">苏园</h1>
          <p className="text-xl md:text-2xl opacity-90">SU YUAN</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D6A4F] mb-6">诗意的栖居</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              苏园是学校精心打造的中式园林花园，融合传统江南园林美学与现代教育理念，是同学们感受自然之美、陶冶人文情操的静谧空间。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                苏园取&quot;苏州园林&quot;之意，将江南园林的造景精髓融入校园之中。步入苏园，曲径通幽，移步换景，处处体现着中国传统美学的精妙。园内假山叠翠，流水潺潺，古亭静立，翠竹环绕，四季花卉依次绽放，营造出一种闹中取静的诗意氛围。
              </p>
              <p className="leading-loose">
                园林的设计充分体现了中式园林&quot;虽由人作，宛自天开&quot;的造园理念。湖石假山错落有致，池塘中游鱼嬉戏，荷花夏日盛开；蜿蜒的回廊将各处景致串联，一步一景，步移景异。春天樱花烂漫，夏季绿荫如盖，秋日桂花飘香，冬时腊梅傲雪，苏园四季皆有不同风情。
              </p>
              <p className="leading-loose">
                苏园不仅是一个景观空间，更是学校文化教育和美育实践的重要场所。这里定期举办书法展示、诗词朗诵、传统乐器演奏等文化活动；美术课上，同学们在此写生采风，用画笔捕捉园林之美；语文课上的古典诗词教学也常在此进行，让同学们在真实的环境中感受传统文化的魅力。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#2D6A4F] mb-8 text-center">园林雅韵</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#2D6A4F] flex-shrink-0" />
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
