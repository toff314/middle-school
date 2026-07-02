import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Trophy, Activity, Zap, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function SportsFestival() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">体育赛事</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">体育节</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年4月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 体育馆、操场</span>
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
              体育节是北京十一学校龙樾实验中学最具活力与激情的校园盛会，于每年四月在春日的暖阳中隆重举行。体育节以"健康第一，运动快乐"为宗旨，旨在增强学生体质、培养体育精神、凝聚班级力量，让每一位学生都能在运动场上挥洒汗水、绽放光芒。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              体育节为期一周，赛事项目丰富多样，涵盖田径比赛、球类比赛和趣味运动三大板块。田径比赛设有短跑、中长跑、跳远、跳高、铅球等传统项目，是学校田径队选拔人才的重要平台。球类比赛包括篮球、足球、排球、乒乓球、羽毛球等多个项目，班级之间展开激烈角逐，争夺年级冠军奖杯。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              趣味运动是体育节最受欢迎的部分，也是体现全员参与理念的亮点环节。趣味项目包括拔河比赛、接力赛、袋鼠跳、三人四足等，设计巧妙、趣味横生，让不擅长竞技体育的同学也能乐在其中。师生友谊赛更是每年体育节的压轴好戏，老师们走下讲台、换上运动装，与学生同场竞技，拉近了师生之间的距离。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              学校拥有标准的田径场、篮球场、足球场、排球场和室内体育馆，为体育节的顺利举办提供了优质场地保障。体育节期间，学校还特别重视运动安全教育，配备专业医护人员全程值守，确保每位参赛者的安全。体育节不仅是一次体育赛事，更是一堂生动的团队协作与意志品质教育课。
            </p>
          </div>

          {/* 赛事项目 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">赛事项目</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Trophy, title: '田径比赛', desc: '100米、400米、800米、1500米、跳远、跳高、铅球等标准田径项目' },
                { icon: Activity, title: '球类比赛', desc: '篮球、足球、排球、乒乓球、羽毛球等球类项目的班级对抗赛' },
                { icon: Zap, title: '趣味运动', desc: '拔河、袋鼠跳、三人四足、趣味接力等全员参与的欢乐项目' },
                { icon: Target, title: '师生友谊赛', desc: '教师队与学生队的篮球、足球友谊赛，增进师生情谊' },
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
                    i === 1 ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                    i === 2 ? 'bg-gradient-to-br from-lime-400 to-green-600' :
                    i === 3 ? 'bg-gradient-to-br from-emerald-400 to-teal-600' :
                    'bg-gradient-to-br from-green-500 to-lime-500'
                  }`}>
                    <span className="text-sm font-medium">体育节照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <p className="text-gray-600">
              体育节面向全校师生开放，田径和球类比赛以班级为单位组队报名，趣味运动全员参与无需提前报名。
              学生可根据自身特长选择参赛项目，每名运动员最多可报名参加两项个人项目和两项集体项目。
              体育节期间所有比赛免费观看，欢迎师生到场为运动员加油助威。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
