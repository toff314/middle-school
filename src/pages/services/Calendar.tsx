import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CalendarDays, Calendar as CalendarIcon, Flag, Clock, Snowflake, Sun, Leaf } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const semester1 = [
  { date: '9月1日', event: '新学期开学', type: '开学' },
  { date: '9月10日', event: '教师节庆祝活动', type: '活动' },
  { date: '10月1日', event: '国庆节放假（7天）', type: '假期' },
  { date: '11月中旬', event: '期中考试', type: '考试' },
  { date: '12月31日', event: '元旦联欢晚会', type: '活动' },
  { date: '1月上旬', event: '期末考试', type: '考试' },
  { date: '1月中旬', event: '寒假开始', type: '假期' }
]

const semester2 = [
  { date: '2月下旬', event: '春季学期开学', type: '开学' },
  { date: '4月上旬', event: '春季运动会', type: '活动' },
  { date: '4月中旬', event: '期中考试', type: '考试' },
  { date: '5月1日', event: '劳动节放假（5天）', type: '假期' },
  { date: '6月上旬', event: '端午节放假', type: '假期' },
  { date: '6月下旬', event: '期末考试', type: '考试' },
  { date: '7月上旬', event: '暑假开始', type: '假期' }
]

const typeColor: Record<string, string> = {
  '开学': 'bg-blue-100 text-blue-700',
  '活动': 'bg-green-100 text-green-700',
  '假期': 'bg-orange-100 text-orange-700',
  '考试': 'bg-red-100 text-red-700'
}

export default function Calendar() {
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
            <CalendarDays size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">校历</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">SCHOOL CALENDAR</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">学年校历</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            本页面提供北京十一学校龙樾实验中学2024-2025学年完整校历，包括学期安排、重要活动、考试时间和假期安排。
            请学生和家长密切关注校历更新，合理规划学习和生活。校历会根据实际情况进行调整，
            最新变动将通过家校中心及时通知。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            学校每学年分为秋季学期和春季学期两个主要学期，每学期约18-20周教学周。
            教学周内包含常规教学、期中/期末考试、运动会、文化艺术节等丰富活动。
            假期包括国庆节假期、寒假、劳动节假期、端午节假期和暑假。
          </p>
          <p className="text-gray-600 leading-relaxed">
            我们建议家长和学生在学期初就熟悉整学期的安排，提前做好准备。特别是考试周和重要活动，
            请合理安排时间，确保学习和活动两不误。如有疑问，请咨询班主任或教务处。
          </p>
        </div>
      </section>

      {/* Semester 1 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Leaf className="text-amber-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">秋季学期</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-in">
            <table className="w-full text-left">
              <thead className="bg-[#D32027] text-white">
                <tr>
                  <th className="px-6 py-4">日期</th>
                  <th className="px-6 py-4">事项</th>
                  <th className="px-6 py-4">类型</th>
                </tr>
              </thead>
              <tbody>
                {semester1.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium">{row.date}</td>
                    <td className="px-6 py-4">{row.event}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColor[row.type] || 'bg-gray-100'}`}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Semester 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Sun className="text-yellow-500" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">春季学期</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-in border">
            <table className="w-full text-left">
              <thead className="bg-[#D32027] text-white">
                <tr>
                  <th className="px-6 py-4">日期</th>
                  <th className="px-6 py-4">事项</th>
                  <th className="px-6 py-4">类型</th>
                </tr>
              </thead>
              <tbody>
                {semester2.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium">{row.date}</td>
                    <td className="px-6 py-4">{row.event}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColor[row.type] || 'bg-gray-100'}`}>
                        {row.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Flag className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">重要提醒</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <Clock className="text-blue-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">上课时间安排</h4>
              <p className="text-gray-600 text-sm">上午 8:00 - 12:00，下午 13:30 - 17:30。请按时到校，不迟到早退。</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <CalendarIcon className="text-green-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">调课通知</h4>
              <p className="text-gray-600 text-sm">如遇调课，学校会提前3天通过家校中心通知，请留意消息推送。</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <Snowflake className="text-orange-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">假期安全</h4>
              <p className="text-gray-600 text-sm">假期期间请注意人身和财产安全，合理安排学习与休息时间。</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <Flag className="text-purple-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">活动参与</h4>
              <p className="text-gray-600 text-sm">鼓励学生积极参与学校组织的各项活动，丰富校园生活。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
