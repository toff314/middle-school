import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { UtensilsCrossed, Heart, Salad, Clock, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Canteen() {
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
    { title: '营养搭配', desc: '专业营养师制定每周食谱，科学搭配荤素比例，确保膳食均衡。', icon: Heart },
    { title: '新鲜食材', desc: '每日采购新鲜蔬菜和肉类，严选优质食材供应商，保证食品安全。', icon: Salad },
    { title: '用餐时间', desc: '分时段错峰用餐，午餐11:30-13:00，晚餐17:00-18:30，避免拥挤。', icon: Clock },
    { title: '明厨亮灶', desc: '开放式厨房设计，后厨操作全程可视，接受师生和家长监督。', icon: Award },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D97706] via-[#B65D04] to-[#92400E]" />
        <div className="relative z-10 text-center text-white px-6">
          <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">餐厅</h1>
          <p className="text-xl md:text-2xl opacity-90">CANTEEN</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D97706] mb-6">美味与健康同行</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾实验中学餐厅是学校用心打造的健康饮食空间，秉承&quot;安全、营养、美味&quot;的理念，为师生提供高品质的餐饮服务。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-orange-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾实验中学餐厅建筑面积达2000平方米，可同时容纳800人用餐。餐厅采用明亮通透的装修风格，搭配绿植装饰和舒适的座椅，营造温馨宜人的就餐氛围。餐厅实行明厨亮灶工程，后厨操作全程可视，确保食品加工过程的透明与安全。
              </p>
              <p className="leading-loose">
                学校高度重视师生餐饮质量，建立了完善的食品安全管理体系。从食材采购源头严格把关，所有供应商均经过资质审核和实地考察；食材入库实行索证索票制度，确保每批食材可追溯；后厨严格执行食品留样制度，确保食品安全万无一失。
              </p>
              <p className="leading-loose">
                餐厅由专业营养师制定每周食谱，注重荤素搭配、营养均衡。菜品种类丰富，涵盖中式热菜、西式简餐、面点小吃、汤品粥类等多个品类，满足不同口味需求。同时，餐厅特别关注有特殊饮食需求的同学，提供清真餐、低盐餐、过敏源标识等贴心服务。每月举办美食节活动，推出各地特色美食，让同学们在校园里也能品尝天下美味。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D97706] mb-8 text-center">餐饮特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#D97706] flex-shrink-0" />
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
