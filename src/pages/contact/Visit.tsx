import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardList, Calendar, Users, AlertTriangle, CheckCircle, Send } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Visit() {
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    date: '',
    purpose: '',
    count: '1',
    phone: '',
    email: ''
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 50, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 85%' } })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#D32027] to-[#B91C22]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <ClipboardList size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">申请访问</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">VISIT US</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">来访预约</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学热忱欢迎社会各界人士、教育工作者、学生家长及有意向入学的家庭前来参观访问。
            为了让您获得更好的参观体验，请提前通过本页面预约来访时间。我们会根据您的需求安排专人接待，
            为您介绍学校的办学理念、教学特色和校园文化。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            学校定期举办校园开放日活动，届时您可以深入了解学校的课程设置、师资力量、社团活动等各个方面。
            非开放日期间的个别来访，我们也会尽量安排接待，但建议至少提前一周预约，以便我们做好接待准备。
          </p>
          <p className="text-gray-600 leading-relaxed">
            如有团体来访或特殊需求，请在预约表单中详细说明，或直接致电招生办公室联系我们。
            我们期待着您的到来，与您分享龙樾的教育故事。
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 shadow-md text-center animate-in">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">预约提交成功</h3>
              <p className="text-gray-600 leading-relaxed">
                感谢您预约参观龙樾实验中学！我们将在3个工作日内与您联系，确认来访时间和具体安排。<br />
                如有任何疑问，请拨打招生办电话：010-8888-7777。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-md animate-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">预约表单</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">单位/组织</label>
                  <input
                    type="text"
                    name="org"
                    value={formData.org}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                    placeholder="请输入您的单位或组织名称"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">来访日期 *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">来访人数 *</label>
                    <select
                      name="count"
                      value={formData.count}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                    >
                      <option value="1">1人</option>
                      <option value="2">2人</option>
                      <option value="3">3人</option>
                      <option value="4">4人</option>
                      <option value="5">5人及以上</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">来访目的 *</label>
                  <textarea
                    name="purpose"
                    required
                    rows={4}
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="请简述您的来访目的和期望了解的内容"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">联系电话 *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                      placeholder="请输入手机号码"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">电子邮箱</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32027] focus:border-transparent outline-none transition-all"
                      placeholder="请输入电子邮箱"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D32027] hover:bg-[#B91C22] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  提交预约
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Notes */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-amber-500" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">注意事项</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <Calendar className="text-amber-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">提前预约</h4>
              <p className="text-gray-600 text-sm">请至少提前一周提交预约申请，以便我们安排接待人员。节假日期间校园可能不对外开放。</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <Users className="text-blue-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">入校登记</h4>
              <p className="text-gray-600 text-sm">来访当日请携带有效身份证件，在校门口保安室进行登记，领取访客证后方可入校。</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <AlertTriangle className="text-green-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">校园秩序</h4>
              <p className="text-gray-600 text-sm">请遵守校园秩序，不大声喧哗，不随意进入教学区域，不影响正常的教学活动。</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <ClipboardList className="text-purple-600 mb-3" size={24} />
              <h4 className="font-bold text-gray-900 mb-2">取消预约</h4>
              <p className="text-gray-600 text-sm">如需取消或更改预约时间，请至少提前24小时致电招生办告知，以便我们调整安排。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
