import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Smile, Sparkles, Users, Flame } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Mascot() {
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
    { title: '龙之精神', desc: '龙是中华民族的精神图腾，象征着力量、智慧与勇气，激励学生不断超越自我。', icon: Flame },
    { title: '温暖陪伴', desc: '龙小樾是每位同学的校园伙伴，陪伴大家度过每一个快乐而充实的学习时光。', icon: Users },
    { title: '创意灵感', desc: '吉祥物形象融入了现代设计元素，展现了学校创新精神与时代活力。', icon: Sparkles },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D32027] via-[#B91C22] to-[#8B1518]" />
        <div className="relative z-10 text-center text-white px-6">
          <Smile className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">吉祥物</h1>
          <p className="text-xl md:text-2xl opacity-90">MASCOT</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Mascot Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">龙小樾 Long Xiaoyue</h2>
            <p className="text-lg text-gray-600">龙樾实验中学的可爱代言人</p>
          </div>

          <div className="animate-in grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-12 flex items-center justify-center min-h-[360px]">
              <div className="text-center">
                <Smile className="w-32 h-32 text-[#D32027] mx-auto mb-4" />
                <p className="text-2xl font-bold text-[#D32027]">龙小樾</p>
                <p className="text-gray-500 mt-2">校园吉祥物</p>
              </div>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                龙小樾是北京十一学校龙樾实验中学的官方吉祥物，其形象以中国传统龙为设计原型，融入了现代卡通元素，塑造出一个活泼可爱、充满正能量的龙形形象。它身穿校服，头戴学士帽，手持书本，既体现了浓厚的文化底蕴，又展现了青春学子的蓬勃朝气。
              </p>
              <p>
                "龙"取自校名"龙樾"，寓意学校如巨龙腾飞，蒸蒸日上；"小樾"则亲切可爱，寓意学校是同学们成长的港湾。龙小樾的火焰尾巴象征着同学们心中的梦想之火，明亮的大眼睛代表着对世界的好奇与探索精神。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="animate-in bg-gray-50 rounded-xl p-8">
                <f.icon className="w-10 h-10 text-[#D32027] mb-4" />
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
