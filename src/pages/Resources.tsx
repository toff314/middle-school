import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FolderOpen, BookOpen, Wrench, Globe, Download, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const resourceCategories = [
  {
    icon: BookOpen,
    title: '教学资源',
    desc: '涵盖各学科的教学课件、教案、试题库等资源，供教师备课和学生自主学习使用。资源定期更新，紧跟课程标准和教学进度。',
    items: ['精品课件库', '教案设计模板', '历年试题汇编', '学科知识点梳理']
  },
  {
    icon: Wrench,
    title: '学习工具',
    desc: '实用的在线学习工具，帮助学生提高学习效率。包括思维导图工具、在线计算器、科学实验模拟等辅助学习工具。',
    items: ['思维导图工具', '在线计算器', '实验模拟平台', '学习计时器']
  },
  {
    icon: Globe,
    title: '在线平台',
    desc: '精选优质在线学习平台和教育网站，拓展学习视野。涵盖学科竞赛、语言学习、编程教育等多个领域。',
    items: ['国家中小学智慧教育平台', '学科竞赛网', '英语在线学习', '编程启蒙平台']
  },
  {
    icon: Download,
    title: '下载中心',
    desc: '提供各类表格、手册、指南的下载服务。包括校历、课程表、请假单、活动报名表等常用文档。',
    items: ['校历下载', '请假申请表', '活动报名表', '家长手册']
  }
]

export default function Resources() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 50, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#D32027] to-[#B91C22]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <FolderOpen size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">资源支持</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">RESOURCES</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">教育资源中心</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学教育资源中心致力于为师生提供丰富、优质的教育资源支持。
            我们整合了校内外优质资源，构建了涵盖教学资源、学习工具、在线平台和下载中心的四位一体资源体系，
            为师生的教与学提供全方位的支持保障。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            教学资源库由学校骨干教师精心打造，覆盖初中全部学科，内容与新课标和教材紧密结合。
            学习工具区精选了多种实用工具，帮助学生养成高效学习习惯。在线平台推荐汇集了国内外优质教育网站，
            让学生在课堂之外也能拓展知识边界。
          </p>
          <p className="text-gray-600 leading-relaxed">
            所有资源均经过严格审核，确保内容准确、安全、有益。我们也鼓励师生积极推荐优质资源，
            共同建设和完善学校的资源库。如果您有任何资源需求或建议，欢迎随时联系信息中心。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">资源分类</h2>
            <p className="text-gray-600">四大资源板块，满足多样化学习需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((cat, i) => {
              const IconComp = cat.icon
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-md animate-in">
                  <div className="p-3 bg-red-100 rounded-lg inline-flex mb-4">
                    <IconComp className="text-[#D32027]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1">
                        <ExternalLink size={12} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">快速访问</h2>
          <p className="text-gray-600 mb-8">
            以下链接将跳转至外部教育平台，请在老师和家长的指导下合理使用网络资源。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '国家中小学智慧教育平台', desc: '教育部官方教育平台', color: 'bg-blue-50 border-blue-200' },
              { name: '北京十一学校官网', desc: '了解学校最新动态', color: 'bg-red-50 border-red-200' },
              { name: '学科网', desc: '优质教学资源分享', color: 'bg-green-50 border-green-200' }
            ].map((link, i) => (
              <div key={i} className={`${link.color} rounded-xl p-6 border cursor-pointer hover:shadow-md transition-all`}>
                <h4 className="font-bold text-gray-900 mb-1">{link.name}</h4>
                <p className="text-gray-500 text-sm">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
