import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  CreditCard,
  ShoppingBag,
  HeartHandshake,
  GraduationCap,
  CalendarDays,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const serviceCards = [
  {
    icon: UtensilsCrossed,
    title: '在线点餐',
    desc: '便捷的校园餐饮预订服务，提前锁定心仪菜品，节省时间享受美食。',
    path: '/services/ordering',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: CreditCard,
    title: '校园卡充值',
    desc: '支持微信、支付宝等多种充值方式，随时随地为校园卡充值，消费无忧。',
    path: '/services/card-recharge',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingBag,
    title: '网购校服',
    desc: '官方校服在线选购平台，款式齐全、尺码精准，送货到班级。',
    path: '/services/uniform',
    color: 'from-slate-700 to-slate-900'
  },
  {
    icon: HeartHandshake,
    title: '家校中心',
    desc: '家校沟通的桥梁，实时了解学生在校表现，参与学校重要事务。',
    path: '/services/family-school',
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: GraduationCap,
    title: '家长学院',
    desc: '面向家长的教育课程与讲座，共同成长，做更好的父母。',
    path: '/services/parent-academy',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    icon: CalendarDays,
    title: '校历',
    desc: '学年校历一览无余，掌握重要时间节点，合理规划学习与生活。',
    path: '/services/calendar',
    color: 'from-[#D32027] to-[#B91C22]'
  }
]

export default function ServicesHome() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">在线服务</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">ONLINE SERVICES</p>
          <p className="mt-6 text-lg opacity-70 max-w-2xl mx-auto animate-in">
            为学生、家长和教师提供一站式数字化校园服务，让校园生活更便捷、更高效。
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">服务入口</h2>
            <p className="text-gray-600">点击卡片进入相应服务页面</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => {
              const IconComp = card.icon
              return (
                <Link
                  key={i}
                  to={card.path}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-in"
                >
                  <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.color} text-white mb-6`}>
                      <IconComp size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{card.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[#D32027] font-medium group-hover:gap-3 transition-all">
                      进入服务 <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">温馨提示</h2>
          <p className="text-gray-600 leading-relaxed">
            所有在线服务均需使用学校统一身份认证账号登录。如遇到任何问题，请联系信息技术中心或拨打服务热线。
            建议家长与学生共同使用家校中心，以便更好地了解学生在校的学习与生活情况。
          </p>
        </div>
      </section>
    </div>
  )
}
