import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Scale, Gavel, BookOpen, Shield, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Court() {
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
    { title: '模拟审判', desc: '定期举办模拟法庭活动，学生扮演法官、检察官、律师等角色，亲身体验司法程序。', icon: Gavel },
    { title: '法治课程', desc: '开设法律基础知识课程，邀请法官、律师等法律工作者走进校园开展讲座。', icon: BookOpen },
    { title: '权益保护', desc: '设立学生权益保护机制，帮助学生了解自身权利，学会用法律保护自己。', icon: Shield },
    { title: '辩论训练', desc: '通过法庭辩论训练，培养学生的逻辑思维能力、语言表达能力和临场应变能力。', icon: Users },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1518] via-[#6B1012] to-[#4A0A0C]" />
        <div className="relative z-10 text-center text-white px-6">
          <Scale className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">龙樾法庭</h1>
          <p className="text-xl md:text-2xl opacity-90">LONGYUE COURT</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">法治教育实践基地</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾法庭是学校特色法治教育的重要载体，通过模拟法庭的形式，让学生在沉浸式的体验中学习法律知识，培养法治意识和公民素养。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾法庭按照真实法庭的标准建设，设有法官席、原告席、被告席、旁听席等功能区域，配备法槌、法袍等庭审器具，营造庄严肃穆的庭审氛围。这里不仅是一个物理空间，更是一扇通往法治世界的大门。
              </p>
              <p className="leading-loose">
                法庭定期举办模拟审判活动，由学生分别扮演审判长、书记员、公诉人、辩护人、被告人、证人和法警等角色，完整再现案件审理的全过程。从立案审查、庭前准备，到法庭调查、法庭辩论，再到最后陈述、当庭宣判，每一个环节都严格按照真实法律程序进行。
              </p>
              <p className="leading-loose">
                通过亲身参与模拟审判，学生不仅学到了丰富的法律知识，更深刻理解了法治精神的核心内涵——公正、平等、程序正义。许多参加过模拟法庭活动的学生表示，这样的体验让他们对法律产生了浓厚的兴趣，也让他们更加懂得了规则意识的重要性。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8 text-center">特色活动</h2>
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
