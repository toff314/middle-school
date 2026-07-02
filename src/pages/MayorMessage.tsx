import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Quote, Heart, Target, Lightbulb } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function MayorMessage() {
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
    { title: '以爱育爱', desc: '用爱心浇灌每一颗心灵，让每一位学生都能在温暖的校园氛围中茁壮成长。', icon: Heart },
    { title: '立德树人', desc: '坚持德育为先，培养学生成为有理想、有本领、有担当的时代新人。', icon: Target },
    { title: '启迪智慧', desc: '激发学生的好奇心与求知欲，培养独立思考和创新实践的能力。', icon: Lightbulb },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D32027] via-[#B91C22] to-[#8B1518]" />
        <div className="relative z-10 text-center text-white px-6">
          <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">镇长寄语</h1>
          <p className="text-xl md:text-2xl opacity-90">MAYOR&apos;S MESSAGE</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Letter Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">致全体师生的信</h2>
            <p className="text-lg text-gray-500">北京十一学校龙樾实验中学 校长</p>
          </div>

          <div className="animate-in prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="text-lg leading-loose">
                亲爱的老师们、同学们：
              </p>
              <p className="leading-loose">
                欢迎来到龙樾实验中学——这片承载着教育理想与青春梦想的沃土。作为校长，我深感荣幸能与诸位一同在这里书写属于我们的教育篇章。龙樾实验中学自创办以来，始终秉承北京十一学校&quot;以学生为中心&quot;的教育理念，致力于培养具有中国灵魂、世界眼光的现代公民。
              </p>
              <p className="leading-loose">
                在这里，我们不仅关注学生的学业成绩，更重视每一位同学的全面发展。我们相信，每个孩子都是独一无二的，都拥有无限的潜能等待被发掘。学校为同学们提供了丰富多样的课程选择、自由开放的校园空间和充满人文关怀的成长环境，让每一个梦想都能在这里生根发芽。
              </p>
              <p className="leading-loose">
                教育的本质是唤醒——唤醒学生内心对知识的渴望、对真理的追求、对美好生活的向往。我们的教师团队始终以身作则，用专业与热情点燃学生心中的火种。我希望每一位同学都能在龙樾找到属于自己的成长路径，勇敢地追逐梦想，成为最好的自己。
              </p>
              <p className="leading-loose">
                展望未来，我们将继续深化教育教学改革，不断创新育人模式，努力将龙樾实验中学建设成为一所让学生向往、家长放心、社会满意的优质学校。让我们携手并进，共同创造更加美好的明天！
              </p>
              <p className="text-right mt-8 font-medium text-gray-900">
                校长 敬上<br />
                <span className="text-gray-500 font-normal">北京十一学校龙樾实验中学</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">教育愿景</h2>
            <p className="text-lg text-gray-600">我们为每一位学生的未来奠基</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="animate-in bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
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
