import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CreditCard, Smartphone, Search, AlertCircle, CheckCircle2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { step: 1, title: '选择充值方式', desc: '支持微信支付、支付宝、银行卡转账' },
  { step: 2, title: '输入充值金额', desc: '可选固定金额或自定义输入' },
  { step: 3, title: '确认支付信息', desc: '核对姓名、学号及充值金额' },
  { step: 4, title: '完成支付', desc: '支付成功后金额实时到账' }
]

export default function CardRecharge() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <CreditCard size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">校园卡充值</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">CARD RECHARGE</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">充值方式</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            校园卡是龙樾实验中学师生在校内消费和身份认证的重要工具，可用于食堂就餐、超市购物、图书馆借阅、门禁通行等场景。
            为确保校园生活便利，请保持卡内余额充足。当余额低于20元时，系统会自动发送提醒通知。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            我们提供多种便捷的充值渠道，包括微信支付、支付宝和银行转账。所有充值方式均支持实时到账，
            充值记录可在个人中心随时查询。家长也可通过家校中心为孩子代充值，方便管理学生的生活费用。
          </p>
          <p className="text-gray-600 leading-relaxed">
            此外，学校在各教学楼和食堂均设有自助充值机，支持现金充值和刷卡充值，满足不同用户的需求。
            如有卡片丢失或损坏，请立即前往信息中心办理挂失和补办手续。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">充值步骤</h2>
            <p className="text-gray-600">简单四步，轻松完成充值</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-md animate-in">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balance Query */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Search className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">余额查询</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <Smartphone className="text-blue-600 mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">手机查询</h4>
              <p className="text-gray-600 text-sm">登录学校App或微信小程序，实时查看余额和消费记录</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <CheckCircle2 className="text-green-600 mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">自助机查询</h4>
              <p className="text-gray-600 text-sm">在教学楼或食堂的自助终端上刷卡查询余额</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <AlertCircle className="text-purple-600 mb-3" size={28} />
              <h4 className="font-bold text-gray-900 mb-2">短信提醒</h4>
              <p className="text-gray-600 text-sm">绑定手机号后，余额不足时会自动收到短信提醒</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
