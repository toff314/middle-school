import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Phone, Mail, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function OpenDay() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">校园活动</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">校园开放日</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年3月、9月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 全校各区域</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 社会公众、家长、学生</span>
          </div>
        </div>
      </section>

      {/* 活动介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              北京十一学校龙樾实验中学每年定期举办校园开放日活动，诚邀社会各界人士走进校园，近距离感受学校的教育理念与校园文化氛围。开放日不仅是一次参观体验，更是一场教育对话，让每位来访者深入了解学校的办学特色、课程体系和学生发展成果。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              学校精心设计了多条参观路线，涵盖教学楼、实验室、图书馆、体育馆、艺术中心等多个功能区域。来访者可以亲眼见证学生们在各领域的学习成果，从精美的艺术创作到前沿的科技项目，从丰富的社团活动到深度的学科探究，全方位展示学校的育人成效。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              开放日当天还设有特色体验环节，包括学科趣味互动、社团风采展示、学生作品展览等。学校领导和教师团队将在现场与家长和社会各界进行面对面交流，解答关于招生政策、课程设置、学生发展等方面的疑问。此外，校园开放日还特别设置了学生志愿者导览服务，由在校生亲自带领参观，真实展现龙樾学子的风采。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              通过校园开放日，学校希望搭建起家校社协同育人的桥梁，让更多人了解龙樾实验中学"让每一位学生都精彩"的教育追求，共同关注和支持青少年的健康成长与全面发展。
            </p>
          </div>

          {/* 参观路线 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">参观路线</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '经典路线', desc: '校史馆 → 教学楼 → 图书馆 → 艺术中心 → 体育馆，全程约90分钟' },
                { title: '科技探索路线', desc: 'STEM实验室 → 科技馆 → 机器人工作室 → 编程教室，全程约60分钟' },
                { title: '艺术人文路线', desc: '音乐厅 → 美术展厅 → 戏剧教室 → 书法教室，全程约60分钟' },
              ].map((route) => (
                <div key={route.title} className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{route.title}</h3>
                  <p className="text-gray-600">{route.desc}</p>
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
                    i === 1 ? 'bg-gradient-to-br from-red-400 to-red-600' :
                    i === 2 ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                    i === 3 ? 'bg-gradient-to-br from-rose-400 to-pink-600' :
                    'bg-gradient-to-br from-orange-400 to-red-500'
                  }`}>
                    <span className="text-sm font-medium">开放日照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 预约方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">预约方式</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">电话预约</p>
                  <p>拨打学校招生办公室电话进行咨询与预约</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">在线预约</p>
                  <p>关注学校官方微信公众号，通过开放日预约通道进行报名</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">开放时间</p>
                  <p>上午 9:00 - 12:00，下午 14:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">集合地点</p>
                  <p>学校正门大厅签到处</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
