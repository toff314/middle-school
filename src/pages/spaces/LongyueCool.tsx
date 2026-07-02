import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Cpu, Printer, Code, Bot, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function LongyueCool() {
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

  const equipment = [
    { title: '3D打印工坊', desc: '配备多台工业级3D打印机，支持PLA、树脂等多种材料，让创意变为现实。', icon: Printer },
    { title: '编程实验室', desc: '高性能计算机工作站，支持Python、C++、Scratch等多种编程环境。', icon: Code },
    { title: '机器人工作室', desc: 'VEX、乐高EV3等多套机器人套件，培养学生工程思维与动手能力。', icon: Bot },
    { title: '智能硬件区', desc: 'Arduino、树莓派等开源硬件平台，支持物联网与人工智能项目开发。', icon: Zap },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1518] via-[#6B1012] to-[#4A0A0C]" />
        <div className="relative z-10 text-center text-white px-6">
          <Cpu className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">龙樾cool</h1>
          <p className="text-xl md:text-2xl opacity-90">LONGYUE COOL — 创新创客空间</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">让创意成为现实</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              龙樾cool是学校最具活力的创新空间，集创客教育、项目实践、科技竞赛于一体，为同学们提供从创意到实现的完整平台。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾cool秉承&quot;做中学、创中学&quot;的教育理念，打破传统课堂的边界，将学习空间转变为一个充满可能性的创意工坊。在这里，学生可以动手实践最前沿的科学技术，将自己的奇思妙想转化为真实的作品。
              </p>
              <p className="leading-loose">
                空间配备了先进的制造设备和丰富的数字资源，涵盖3D打印、激光切割、电子电路、编程开发、机器人制作等多个领域。无论是想设计一个智能装置，还是创作一件艺术作品，龙樾cool都能提供所需的一切支持。
              </p>
              <p className="leading-loose">
                这里不仅是设备的空间，更是思维碰撞的舞台。定期举办的创客马拉松、项目展示会和技术分享活动，让同学们在交流协作中共同成长，培养创新精神与实践能力。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8 text-center">设备与资源</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {equipment.map((e, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <e.icon className="w-10 h-10 text-[#D32027] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{e.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{e.desc}</p>
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
