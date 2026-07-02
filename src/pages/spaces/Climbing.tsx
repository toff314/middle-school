import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Mountain, Shield, Layers, GraduationCap, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Climbing() {
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
    { title: '难度分级', desc: '设置V0-V6多个难度等级线路，适合从零基础到进阶的不同水平攀岩者。', icon: Layers },
    { title: '安全保障', desc: '采用国际标准攀岩墙材质，配备自动保护器和专业防护垫，确保训练安全。', icon: Shield },
    { title: '专业教学', desc: '由专业攀岩教练授课，系统教授攀爬技巧、安全规范和体能训练方法。', icon: GraduationCap },
    { title: '挑战自我', desc: '攀岩运动锻炼全身肌肉协调性和核心力量，培养克服困难的意志品质。', icon: TrendingUp },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#78716C] via-[#5C5550] to-[#443E3A]" />
        <div className="relative z-10 text-center text-white px-6">
          <Mountain className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">攀岩墙</h1>
          <p className="text-xl md:text-2xl opacity-90">CLIMBING WALL</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#78716C] mb-6">攀登高峰 超越自我</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              攀岩墙是龙樾实验中学独特的体育设施，为同学们提供了挑战自我、锻炼身心的绝佳平台，是学校特色体育教育的重要组成部分。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-stone-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾实验中学攀岩墙是学校最具特色的体育设施之一，占地面积约200平方米，墙体高度达12米，分为难度攀岩区、速度攀岩区和抱石区三大功能区域。攀岩墙采用国际标准的玻璃钢材质，模拟天然岩壁的质感和形态，岩点覆盖多种颜色和形状，为不同水平的攀岩者提供了丰富的线路选择。
              </p>
              <p className="leading-loose">
                学校高度重视攀岩运动的安全保障。所有攀岩区域均配备国际认证的自动保护器和专业防护垫，确保每位同学在享受攀岩乐趣的同时得到充分的安全保障。攀岩墙还配备了专用的热身区和拉伸区，帮助同学们在运动前做好充分准备，降低运动损伤的风险。
              </p>
              <p className="leading-loose">
                攀岩不仅是一项体育运动，更是一种生活态度的培养。每一次向上攀爬的过程，都是对自我的挑战和超越。学校将攀岩运动纳入体育课程体系，由专业教练进行系统化教学，从基础的安全知识到进阶的攀爬技巧，帮助同学们逐步掌握这项运动。许多同学在攀岩中找到了自信和勇气，学会了在面对困难时坚持不懈、永不放弃。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#78716C] mb-8 text-center">攀岩特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-stone-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#78716C] flex-shrink-0" />
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
