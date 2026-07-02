import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, BookOpen, Users, Settings, CheckCircle, Send, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const teacherPositions = [
  { subject: '初中数学', count: 2, require: '硕士及以上学历，有教学经验优先' },
  { subject: '初中英语', count: 1, require: '硕士及以上学历，英语专业八级' },
  { subject: '初中物理', count: 1, require: '硕士及以上学历，物理相关专业' },
  { subject: '初中语文', count: 2, require: '硕士及以上学历，文学相关专业' }
]

const adminPositions = [
  { title: '行政助理', dept: '校办公室', require: '本科及以上，行政管理相关专业' },
  { title: '信息技术专员', dept: '信息中心', require: '本科及以上，计算机相关专业' },
  { title: '学生辅导员', dept: '学生处', require: '本科及以上，心理学或教育学专业优先' }
]

const processSteps = [
  { step: '在线投递', desc: '发送简历至 hr@longyue.bnds.cn' },
  { step: '资格审查', desc: '人力资源部对简历进行筛选' },
  { step: '面试考核', desc: '包括试讲/笔试和综合面试' },
  { step: '体检背调', desc: '入职前体检和背景调查' },
  { step: '正式录用', desc: '签订劳动合同，办理入职' }
]

export default function Join() {
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
            <Briefcase size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">加入小镇</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">JOIN US</p>
          <p className="mt-6 text-lg opacity-70 max-w-2xl mx-auto animate-in">
            与优秀的人一起做有意义的教育，在龙樾实现您的教育理想。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">招聘信息</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学始终坚持"以人为本"的办学理念，深知优秀的师资队伍是学校发展的核心竞争力。
            我们期待热爱教育、专业过硬、富有创新精神的教育工作者加入龙樾大家庭，共同为培养未来社会的栋梁之材而努力。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            学校为教职工提供具有竞争力的薪酬待遇、完善的职业发展通道和丰富的培训学习机会。
            我们注重每一位教师的职业成长，定期组织校内外培训、学术交流活动，支持教师参加国内外教育会议和进修课程。
            在龙樾，您将与一群志同道合的教育伙伴一起，探索教育改革的前沿，实现教育理想。
          </p>
          <p className="text-gray-600 leading-relaxed">
            除了教学岗位，学校也常年招聘优秀的行政管理人员和技术人才，为学校的高效运转提供有力保障。
            无论您是想在三尺讲台绽放光芒，还是在管理岗位上施展才华，龙樾都欢迎您的到来。
          </p>
        </div>
      </section>

      {/* Teacher Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <BookOpen className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">教师招聘</h2>
          </div>
          <div className="space-y-4">
            {teacherPositions.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md animate-in">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{p.subject}教师</h4>
                    <p className="text-gray-500 text-sm mt-1">{p.require}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-red-100 text-[#D32027] rounded-full text-sm font-medium">
                      招聘 {p.count} 人
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Settings className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">行政招聘</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adminPositions.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200 animate-in">
                <h4 className="font-bold text-gray-900 mb-1">{p.title}</h4>
                <p className="text-gray-500 text-sm mb-3">{p.dept}</p>
                <p className="text-gray-600 text-sm">{p.require}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <Users className="text-[#D32027] mx-auto mb-4" size={36} />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">应聘流程</h2>
            <p className="text-gray-600">简单五步，开启龙樾教育之旅</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-200 hidden md:block" />
            <div className="space-y-6">
              {processSteps.map((s, i) => (
                <div key={i} className="relative flex items-start gap-6 animate-in">
                  <div className="w-12 h-12 rounded-full bg-[#D32027] text-white flex items-center justify-center font-bold shrink-0 z-10">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-md flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{s.step}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200 animate-in">
            <div className="flex items-start gap-3">
              <Send className="text-[#D32027] shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">投递方式</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  请将个人简历（附近照）发送至 hr@longyue.bnds.cn，邮件标题请注明"应聘岗位+姓名"。
                  我们将在收到简历后7个工作日内进行回复，请保持通讯畅通。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in">
          <Award className="text-[#D32027] mx-auto mb-4" size={36} />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">在龙樾，您将获得</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '有竞争力的薪酬', desc: '行业领先的薪资待遇，绩效奖金' },
              { title: '完善的福利保障', desc: '五险一金、带薪假期、年度体检' },
              { title: '职业发展通道', desc: '清晰的晋升路径，培训进修机会' },
              { title: '温馨的工作环境', desc: '优美的校园环境，和谐的团队氛围' }
            ].map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <CheckCircle className="text-green-500 mx-auto mb-3" size={24} />
                <h4 className="font-bold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
