import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Waves, Clock, Thermometer, GraduationCap, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Swimming() {
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

  const specs = [
    { title: '开放时间', desc: '周一至周五 6:30-8:00 / 16:30-20:00  周末 9:00-17:00', icon: Clock },
    { title: '水温控制', desc: '四季恒温26-28度，采用先进的水循环过滤系统，水质达到国家标准。', icon: Thermometer },
    { title: '游泳课程', desc: '从基础蛙泳到竞技自由泳，分级教学，专业教练全程指导。', icon: GraduationCap },
    { title: '安全保障', desc: '配备持证救生员、AED急救设备，24小时水质监测系统。', icon: ShieldCheck },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A6DAF] via-[#0A5A93] to-[#073F6E]" />
        <div className="relative z-10 text-center text-white px-6">
          <Waves className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">游泳馆</h1>
          <p className="text-xl md:text-2xl opacity-90">SWIMMING POOL</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A6DAF] mb-6">畅游健康人生</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾实验中学游泳馆是学校体育教育的重要设施，配备国际标准的恒温泳池，为学生提供专业、安全、舒适的游泳环境。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                游泳馆建筑面积达3000平方米，内设一个50米×25米的标准比赛泳池和一个25米×15米的教学训练池。馆内配备了先进的恒温恒湿系统，全年保持水温26-28度、室温30-32度，让同学们在任何季节都能享受游泳的乐趣。
              </p>
              <p className="leading-loose">
                泳池采用国际先进的水循环过滤系统，24小时不间断运行，配合紫外线消毒和臭氧杀菌双重保障，确保水质达到国家卫生标准。馆内还配备了专业的出发台、电子计时系统和水下摄像系统，可承接各类游泳赛事。
              </p>
              <p className="leading-loose">
                学校将游泳列为必修体育课程之一，所有学生在校期间需完成基础游泳技能学习。同时开设游泳选修课和校游泳队训练，为有特长的同学提供更高水平的训练平台。校游泳队在区级和市级比赛中多次取得优异成绩。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#0A6DAF] mb-8 text-center">场馆设施</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specs.map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <s.icon className="w-10 h-10 text-[#0A6DAF] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
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
