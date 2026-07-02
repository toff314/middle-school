import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, PartyPopper, Gamepad2, Utensils, Mic } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Carnival() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">年末盛典</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">狂欢节</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年12月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 全校</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 全体师生</span>
          </div>
        </div>
      </section>

      {/* 活动介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              狂欢节是北京十一学校龙樾实验中学在每年年末为全校师生精心打造的欢乐盛典，于每年十二月举行。狂欢节以"欢乐龙樾，精彩无限"为主题，旨在为一年的学习生活画上圆满句号，让师生在欢声笑语中迎接新年的到来。这是全校参与度最高、气氛最热烈的大型活动之一。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              狂欢节在学校各区域同时展开，活动内容丰富多样，包括才艺展示、游戏互动、美食分享、主题巡游等多个板块。学校食堂和各班级精心准备特色美食，从传统小吃到创意料理，让师生在品尝美食中感受温暖与关怀。才艺展示环节为全校师生搭建舞台，唱歌、舞蹈、乐器、魔术等节目精彩纷呈，展现龙樾人多才多艺的一面。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              游戏互动区是狂欢节最热闹的地方，学校精心设计了 dozens 种趣味游戏，包括套圈、投壶、猜谜、知识竞答等传统项目，以及结合校园文化的特色游戏。各社团和班级也设立了自己的游戏摊位，师生可以自由穿梭、尽情游玩。活动采用积分制，参与者通过游戏获得积分，兑换精美奖品，增添了竞技的乐趣。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              狂欢节的压轴环节是全校师生共同参与的跨年倒计时和主题巡游。师生们穿上精心准备的节日盛装，手持彩灯和气球，在校园中欢乐巡游。当倒计时归零、新年钟声敲响，烟花绽放、礼花齐鸣，整个校园沉浸在欢乐的海洋中。狂欢节不仅是一次年末的狂欢聚会，更是学校"让每一位学生都精彩"教育理念的生动实践，让每个龙樾人在欢笑中感受校园生活的温暖与美好。
            </p>
          </div>

          {/* 活动内容 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动内容</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Mic, title: '才艺展示', desc: '唱歌、舞蹈、乐器、魔术等精彩节目汇演，展现龙樾师生多才多艺的一面' },
                { icon: Gamepad2, title: '游戏互动', desc: '数十种趣味游戏，积分兑换奖品，在游戏中收获欢乐与惊喜' },
                { icon: Utensils, title: '美食分享', desc: '学校食堂与各班级精心准备的特色美食，品味舌尖上的龙樾' },
                { icon: PartyPopper, title: '跨年巡游', desc: '全校师生身着盛装欢乐巡游，共同迎接新年的到来' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <item.icon className="w-8 h-8 text-[#D32027] shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
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
                    i === 1 ? 'bg-gradient-to-br from-red-500 to-pink-600' :
                    i === 2 ? 'bg-gradient-to-br from-pink-400 to-rose-600' :
                    i === 3 ? 'bg-gradient-to-br from-rose-400 to-purple-600' :
                    'bg-gradient-to-br from-red-400 to-amber-500'
                  }`}>
                    <span className="text-sm font-medium">狂欢节照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <p className="text-gray-600">
              狂欢节面向全校师生开放，活动当天凭校园卡入场。才艺展示节目需提前报名选拔，游戏互动和美食区无需预约。
              各班级可组织特色摊位参与美食分享环节，社团可申请设立游戏摊位。欢迎全体师生穿上节日盛装，
              带上好心情，一起来享受这场年末的欢乐盛宴！
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
