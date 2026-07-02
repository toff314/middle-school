import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Dumbbell, Trophy, Calendar, Heart, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Gym() {
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

  const facilities = [
    { title: '主比赛场地', desc: '可灵活划分为2个标准篮球场或4个羽毛球场，配备专业运动木地板和照明系统。', icon: Trophy },
    { title: '乒乓球区', desc: '设有12张标准乒乓球台，配备发球机，是乒乓球爱好者的训练天堂。', icon: Calendar },
    { title: '健身训练区', desc: '配备跑步机、椭圆机、力量训练器械等，满足师生的日常健身需求。', icon: Heart },
    { title: '运动社团', desc: '篮球社、羽毛球社、排球社等运动社团定期开展训练和比赛活动。', icon: Users },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D97706] via-[#B65D04] to-[#92400E]" />
        <div className="relative z-10 text-center text-white px-6">
          <Dumbbell className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">体育馆</h1>
          <p className="text-xl md:text-2xl opacity-90">GYMNASIUM</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D97706] mb-6">挥洒汗水 激扬青春</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾实验中学体育馆是学校最大的室内运动场馆，设施先进、功能齐全，是同学们进行体育活动和竞技比赛的主要场所。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-orange-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                体育馆采用现代化设计理念，建筑面积达5000平方米，可容纳近2000名观众。馆内采用专业运动木地板，具有良好的弹性和防滑性能，有效保护运动员的关节和肌肉。顶部配备了高清LED大屏幕和专业照明系统，满足各类赛事的转播需求。
              </p>
              <p className="leading-loose">
                主场地采用可移动式设施设计，可根据不同赛事需求灵活变换场地布局。标准模式下为两个并排的篮球场，通过移动隔断可快速切换为四个羽毛球场、一个排球场或小型演出场地。这种灵活的设计理念大大提高了场馆的使用效率。
              </p>
              <p className="leading-loose">
                体育馆是学校体育教学和活动的重要阵地。每天放学后，这里就成为同学们运动健身的热闹场所。各类运动社团在这里开展训练，校级联赛在这里举办，校际比赛在这里进行。体育馆不仅锻炼了同学们的体魄，更培养了团队协作精神和顽强拼搏的意志品质。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D97706] mb-8 text-center">场地设施</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((f, i) => (
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
