import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Compass, BookOpen, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function StudyTour() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">实践活动</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">研学旅行</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 学期中定期组织</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 校外研学基地</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 全体学生</span>
          </div>
        </div>
      </section>

      {/* 活动介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              研学旅行是北京十一学校龙樾实验中学课程体系的重要组成部分，旨在打破课堂边界，将学习延伸到广阔的社会和自然之中。学校秉承"读万卷书，行万里路"的教育理念，精心设计每一次研学活动，让学生在真实情境中探究学习、体验成长。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              研学活动涵盖人文历史、自然科学、科技创新、社会调查等多个主题领域。学校与多家博物馆、科技馆、自然保护区、高新技术企业建立了长期合作关系，为学生提供丰富多样的研学基地。每一次研学前，学科教师都会设计配套的学习手册，引导学生带着问题出发、带着收获归来。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              在课程设计上，研学旅行注重学科融合和项目式学习。例如"古都文化探寻"研学将历史、语文、美术等学科有机结合，学生在参观故宫、天坛等文化遗产时，不仅了解历史背景，还要完成文物解说、手绘建筑、文化对比等探究任务。科学类研学则强调实验精神和数据分析，学生在自然环境中采集样本、记录观察、得出结论。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              研学旅行的成果通过研学报告、作品展览、主题分享会等形式呈现，优秀作品还有机会在校内进行展示和交流。学校鼓励学生将研学历程中的所见所闻转化为深度学习成果，培养自主探究能力和批判性思维，真正实现"行走的课堂"这一教育理想。
            </p>
          </div>

          {/* 研学目的地 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">研学目的地</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '故宫博物院', tag: '人文历史', desc: '深入了解明清皇宫建筑与珍贵文物，感受中华文明的深厚底蕴' },
                { title: '中国科技馆', tag: '科技创新', desc: '体验前沿科技成果，参与互动实验，激发科学探索热情' },
                { title: '国家博物馆', tag: '文化传承', desc: '纵览五千年中华文明史，培养文化自信与历史责任感' },
              ].map((dest) => (
                <div key={dest.title} className="p-6 bg-gray-50 rounded-xl">
                  <span className="text-xs font-semibold text-[#D32027] bg-red-50 px-2 py-1 rounded">{dest.tag}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">{dest.title}</h3>
                  <p className="text-gray-600">{dest.desc}</p>
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
                    i === 1 ? 'bg-gradient-to-br from-emerald-400 to-teal-600' :
                    i === 2 ? 'bg-gradient-to-br from-sky-400 to-blue-600' :
                    i === 3 ? 'bg-gradient-to-br from-indigo-400 to-violet-600' :
                    'bg-gradient-to-br from-cyan-400 to-emerald-500'
                  }`}>
                    <span className="text-sm font-medium">研学照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">报名方式</p>
                  <p>通过学校研学平台在线选课报名，选择感兴趣的研学线路</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">行前准备</p>
                  <p>完成研学前置学习任务，阅读学习手册，做好知识储备</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">成果提交</p>
                  <p>研学结束后一周内提交研学报告或作品，参与优秀成果评选</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
