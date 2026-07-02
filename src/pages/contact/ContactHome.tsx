import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Briefcase, ClipboardList, Phone, Mail, Navigation, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const contactCards = [
  {
    icon: MapPin,
    title: '小镇坐标',
    desc: '查看学校地址和交通指南，找到龙樾实验中学的最佳路线。',
    path: '/contact/location',
    color: 'from-[#D32027] to-[#B91C22]'
  },
  {
    icon: Briefcase,
    title: '加入小镇',
    desc: '了解学校招聘信息，加入我们优秀的教师和管理团队。',
    path: '/contact/join',
    color: 'from-[#D32027] to-[#B91C22]'
  },
  {
    icon: ClipboardList,
    title: '申请访问',
    desc: '预约校园参观，亲身体验龙樾的教育氛围与校园环境。',
    path: '/contact/visit',
    color: 'from-[#D32027] to-[#B91C22]'
  }
]

export default function ContactHome() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">联系我们</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">CONTACT US</p>
          <p className="mt-6 text-lg opacity-70 max-w-2xl mx-auto animate-in">
            我们期待与您的每一次交流，无论是参观校园、加入团队还是其他咨询，欢迎随时联系。
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">联系方式</h2>
            <p className="text-gray-600">您可以通过以下方式与我们取得联系</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-in">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#D32027]" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">学校地址</h4>
              <p className="text-gray-600 text-sm">北京市海淀区东升中路1号<br />北京十一学校龙樾实验中学</p>
            </div>
            <div className="text-center animate-in">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#D32027]" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">联系电话</h4>
              <p className="text-gray-600 text-sm">教务处：010-8888-6666<br />招生办：010-8888-7777</p>
            </div>
            <div className="text-center animate-in">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-[#D32027]" size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">电子邮箱</h4>
              <p className="text-gray-600 text-sm">info@longyue.bnds.cn<br />admission@longyue.bnds.cn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">快速入口</h2>
            <p className="text-gray-600">选择您需要的服务类型</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card, i) => {
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
                      了解更多 <ArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Navigation className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">来访指引</h2>
          </div>
          <p className="text-gray-600 mb-8">
            学校位于北京市海淀区东升中路，交通便利。可乘坐地铁8号线至育新站下车，步行约10分钟即可到达。
            校园周边设有充足的停车位，方便自驾来访。
          </p>
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapPin size={48} className="mx-auto mb-3" />
              <p>地图加载中...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
