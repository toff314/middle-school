import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Cpu, Code, Bot, Lightbulb } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function TechFestival() {
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

  return (
    <div ref={sectionRef}>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[#D32027]/30" />
        <div className="relative z-10 pb-16 px-6 md:px-16 w-full max-w-6xl mx-auto">
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">科技创新</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">技术节</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年11月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 科技馆、实验室</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 全体师生</span>
          </div>
        </div>
      </section>

      {/* 活动介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              技术节是北京十一学校龙樾实验中学专为激发学生科技创新热情而打造的年度盛会，于每年十一月举行。技术节以"探索科技奥秘，创造无限可能"为主题，通过编程竞赛、机器人比赛、科技展览等丰富的活动形式，为学生提供展示科技才华和实践创新能力的平台。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              学校高度重视科技教育，建有设备先进的STEM实验室、科技馆、机器人工作室和编程教室。技术节期间，这些场馆全部向师生开放，展示最前沿的科技设备和学生的科技作品。学校还邀请科技企业进校园，带来人工智能、虚拟现实、无人机等前沿科技的互动体验，让学生零距离感受科技发展的脉搏。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              编程竞赛是技术节的核心赛事之一，涵盖Scratch创意编程、Python应用开发和算法竞赛等多个组别，适合不同编程水平的学生参与。机器人比赛则考验学生的机械设计、编程控制和团队协作能力，参赛队伍需要设计并操控机器人完成指定任务。科技展览环节展出学生在日常课程和社团中完成的科技项目，从智能小发明到科学探究报告，全方位展示学生的科技创新成果。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              技术节不仅是一次科技展示与竞赛的活动，更是学校科技教育理念的集中体现。学校致力于培养学生的计算思维、工程素养和创新精神，让学生在动手实践中发现问题、解决问题，成为适应未来社会的创新型人才。每年的技术节都涌现出许多令人眼前一亮的创意作品，这些作品不仅是学生智慧的结晶，也承载着他们对未来科技的美好想象。
            </p>
          </div>

          {/* 活动内容 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动内容</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Code, title: '编程竞赛', desc: 'Scratch创意编程、Python应用开发、算法挑战赛，多组别分层次竞赛' },
                { icon: Bot, title: '机器人比赛', desc: '机器人工程设计、编程控制、任务挑战，考验团队协作与创新能力' },
                { icon: Cpu, title: '科技展览', desc: '学生科技项目成果展，涵盖人工智能、物联网、3D打印等多个领域' },
                { icon: Lightbulb, title: '科技体验', desc: 'VR虚拟现实、无人机飞行、3D打印等前沿科技互动体验项目' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <item.icon className="w-8 h-8 text-[#D32027] shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 精彩瞬间 */}
          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8">精彩瞬间</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className={`w-full h-full flex items-center justify-center text-white/60 ${
                    i === 1 ? 'bg-gradient-to-br from-cyan-400 to-blue-600' :
                    i === 2 ? 'bg-gradient-to-br from-blue-400 to-indigo-600' :
                    i === 3 ? 'bg-gradient-to-br from-teal-400 to-cyan-600' :
                    'bg-gradient-to-br from-indigo-400 to-blue-500'
                  }`}>
                    <span className="text-sm font-medium">技术节照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <p className="text-gray-600">
              技术节面向全校师生开放，各项活动均可免费参与。编程竞赛和机器人比赛需提前组队报名，科技展览欢迎所有学生提交作品参展，科技体验区无需预约即可参与。
              对科技感兴趣的同学还可以加入学校的编程社、机器人社、创客社等科技类社团，在日常学习中就为技术节做好充分准备。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
