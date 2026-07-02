import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { UtensilsCrossed, Clock, CheckCircle, Soup, Salad, Beef } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { name: '红烧狮子头', category: '荤菜', icon: Beef },
  { name: '清炒西兰花', category: '素菜', icon: Salad },
  { name: '番茄蛋汤', category: '汤品', icon: Soup },
  { name: '糖醋排骨', category: '荤菜', icon: Beef },
  { name: '凉拌黄瓜', category: '素菜', icon: Salad },
  { name: '紫菜蛋花汤', category: '汤品', icon: Soup }
]

export default function Ordering() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-600">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <UtensilsCrossed size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">在线点餐</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">ONLINE ORDERING</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">点餐系统介绍</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学在线点餐系统为师生提供便捷的校园餐饮服务。通过该系统，学生和家长可以提前预订每日餐食，
            避免用餐高峰排队等候，同时还能根据个人口味和饮食需求选择适合的菜品。系统支持一周提前预订，让餐饮安排更加从容。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            学校食堂坚持"营养均衡、安全卫生"的原则，每日提供丰富多样的菜品选择。所有食材均经过严格检验，
            确保食品安全。点餐系统还与校园卡系统无缝对接，预订成功后自动扣款，方便快捷。
          </p>
          <p className="text-gray-600 leading-relaxed">
            此外，系统还提供营养分析功能，帮助学生了解每餐的营养摄入情况，培养健康饮食的习惯。
            家长也可以通过家校中心查看孩子的用餐记录和营养报告，共同关注孩子的健康成长。
          </p>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">今日菜单预览</h2>
            <p className="text-gray-600">每日更新，营养搭配均衡</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => {
              const IconComp = item.icon
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4 animate-in">
                  <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ordering Time */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">订餐时间说明</h2>
          </div>
          <div className="space-y-4">
            {[
              { label: '早餐预订', time: '前一晚 20:00 前', desc: '早餐供应时间 07:00 - 08:00' },
              { label: '午餐预订', time: '当日 10:00 前', desc: '午餐供应时间 11:30 - 13:00' },
              { label: '晚餐预订', time: '当日 15:00 前', desc: '晚餐供应时间 17:00 - 18:30' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-bold text-gray-900">{item.label}</h4>
                  <p className="text-[#D32027] font-medium">{item.time}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong>温馨提示：</strong>如需取消或修改订单，请在供餐前2小时进行操作。超过退订时间将无法退款，
              请合理安排订餐计划。如有特殊饮食需求（过敏、宗教饮食等），请联系食堂管理员。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
