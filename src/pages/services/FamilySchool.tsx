import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeartHandshake, MessageCircle, FileText, TrendingUp, Users, Bell } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: MessageCircle,
    title: '即时通讯',
    desc: '家长与教师实时沟通，了解学生课堂表现和作业完成情况。支持文字、语音、图片等多种消息形式。'
  },
  {
    icon: FileText,
    title: '成绩查询',
    desc: '随时查看学生各科成绩、排名变化和成绩趋势分析，全面掌握学习动态。'
  },
  {
    icon: TrendingUp,
    title: '成长档案',
    desc: '记录学生从入学到毕业的完整成长轨迹，包括学业成绩、活动参与、获奖情况等。'
  },
  {
    icon: Bell,
    title: '通知公告',
    desc: '学校重要通知、活动安排、放假安排等信息第一时间推送到家长手机。'
  }
]

export default function FamilySchool() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-violet-700">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <HeartHandshake size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">家校中心</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">FAMILY & SCHOOL</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">家校沟通平台</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            家校中心是北京十一学校龙樾实验中学搭建的家校协同育人平台，旨在促进家庭与学校之间的有效沟通与合作。
            通过该平台，家长可以实时了解孩子在校的学习生活情况，教师也可以及时向家长反馈学生的成长动态，
            形成教育合力，共同促进学生全面发展。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            平台整合了即时通讯、成绩查询、成长档案、通知公告等多种功能，为家长提供一站式信息服务。
            无论是日常的学习情况了解，还是重要事务的沟通协调，家校中心都能满足您的需求。
            我们还定期推送家庭教育资讯和专家建议，帮助家长提升教育理念和方法。
          </p>
          <p className="text-gray-600 leading-relaxed">
            龙樾实验中学始终相信，家校合作是教育成功的关键。只有家庭和学校携手同行，
            才能为每一位学生创造最适合的成长环境。欢迎广大家长积极使用家校中心，
            与我们共同关注孩子的成长，见证他们的每一次进步。
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <Users className="text-purple-600 mx-auto mb-4" size={36} />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">平台功能</h2>
            <p className="text-gray-600">全方位家校互动，关注学生成长</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => {
              const IconComp = f.icon
              return (
                <div key={i} className="bg-white rounded-xl p-8 shadow-md animate-in">
                  <div className="p-3 bg-purple-100 rounded-lg inline-flex mb-4">
                    <IconComp className="text-purple-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">家长反馈</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            我们非常重视家长的意见和建议。如果您对学校的教学工作、管理服务、校园环境等方面有任何想法，
            都可以通过家校中心的反馈通道向我们反映。每一条反馈都会被认真阅读和处理，
            学校会定期汇总分析家长意见，持续改进各项工作。
          </p>
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-4">反馈渠道</h4>
            <ul className="space-y-3 text-purple-800">
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="shrink-0 mt-0.5" />
                <span>家校中心App内反馈入口 — 随时提交，即时响应</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="shrink-0 mt-0.5" />
                <span>家长座谈会 — 每学期定期举办，面对面交流</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="shrink-0 mt-0.5" />
                <span>校长信箱 — jiazhang@longyue.bnds.cn</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
