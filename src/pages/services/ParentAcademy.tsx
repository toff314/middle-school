import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, BookOpen, Mic, Video, Library, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const lectures = [
  { title: '青春期心理发展与亲子沟通', speaker: '李明华 教授', date: '2024年3月15日', status: '即将开始' },
  { title: '如何培养孩子的自主学习能力', speaker: '王晓芳 博士', date: '2024年4月10日', status: '报名中' },
  { title: '家庭教育中的情绪管理', speaker: '张建国 心理咨询师', date: '2024年5月8日', status: '预告' }
]

const pastLectures = [
  { title: '新中考政策解读与备考策略', speaker: '陈志刚 教育专家', views: '2,341' },
  { title: '青少年网络素养与数字安全', speaker: '刘芳 网络安全专家', views: '1,876' },
  { title: '亲子阅读：打开知识的大门', speaker: '赵雪梅 儿童文学作家', views: '3,102' }
]

const resources = [
  { icon: BookOpen, title: '家庭教育指南', desc: '涵盖各年龄段教育建议的实用手册' },
  { icon: Video, title: '往期讲座视频', desc: '回看往期精彩讲座内容' },
  { icon: Library, title: '推荐阅读书单', desc: '专家精选的家庭教育书籍' },
  { icon: Users, title: '家长互助社群', desc: '与其他家长交流经验心得' }
]

export default function ParentAcademy() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <GraduationCap size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">家长学院</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">PARENT ACADEMY</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">家长课程</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            家长学院是北京十一学校龙樾实验中学面向全体家长开设的终身学习平台。我们深知，
            家庭教育与学校教育相辅相成，家长的教育理念和方法直接影响孩子的成长轨迹。
            家长学院汇聚教育专家、心理学家、资深教师等专业人士，为家长提供系统化的学习课程。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            课程内容涵盖亲子沟通、情绪管理、学习方法指导、青春期教育、生涯规划等多个领域。
            无论您是新生家长还是毕业班家长，都能在家长学院找到适合自己的课程。
            我们相信，持续学习的家长才能培养出持续学习的孩子。
          </p>
          <p className="text-gray-600 leading-relaxed">
            家长学院采用线上线下相结合的模式，既有面对面的讲座和沙龙，也有随时可学的在线课程。
            完成课程学习后，家长还可获得学习证书，记录您与孩子共同成长的每一步。
          </p>
        </div>
      </section>

      {/* Upcoming Lectures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Mic className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">讲座预告</h2>
          </div>
          <div className="space-y-4">
            {lectures.map((l, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{l.title}</h4>
                  <p className="text-gray-500 text-sm">{l.speaker} · {l.date}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  l.status === '即将开始' ? 'bg-red-100 text-red-700' :
                  l.status === '报名中' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {l.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Lectures */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-in">往期回顾</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastLectures.map((l, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 animate-in">
                <h4 className="font-bold text-gray-900 mb-2">{l.title}</h4>
                <p className="text-gray-500 text-sm mb-3">{l.speaker}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Video size={16} />
                  <span>{l.views} 次观看</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">教育资源</h2>
            <p className="text-gray-600">丰富的学习资源，助您成为更好的家长</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => {
              const IconComp = r.icon
              return (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md animate-in">
                  <div className="p-3 bg-teal-100 rounded-lg inline-flex mb-4">
                    <IconComp className="text-teal-600" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{r.title}</h4>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
