import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Droplets, Sun, Heart, CircleDot, PartyPopper } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WaterFestival() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">夏日狂欢</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">泼水节</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年6月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 学校操场</span>
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
              泼水节是北京十一学校龙樾实验中学最具特色的夏季活动，于每年六月在炎炎夏日中欢乐举行。活动借鉴了云南傣族等少数民族的泼水节传统，结合校园文化进行创新，成为全校师生最期待的夏日狂欢盛典。在这一天，整个校园化身为欢乐的水世界，师生们在清凉的水花中释放压力、增进友谊。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              泼水节一般在期末考试前一周举行，旨在帮助学生缓解考前紧张情绪，以更加轻松的心态迎接考试。学校为此做了充分的安全准备，活动区域设置防滑地面，配备充足的安全员和医护人员，要求学生穿着合适的服装和防滑鞋参与。水枪、水盆、水球等各种"装备"纷纷上阵，师生不分彼此，在水花四溅中尽情欢笑。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              除了自由泼水环节，学校还精心设计了多项水上趣味游戏。水球大战将师生分成若干战队，展开激烈又有趣的水球攻防战；泼水接力赛考验团队的配合与速度；水中寻宝则让大家在欢乐中寻找隐藏的"宝藏"。活动的高潮部分是全校师生共同参与的"万人泼水"环节，当音乐响起，操场上的水花如烟花般绽放，场面壮观而温馨。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              泼水节不仅是一场夏日降温的狂欢活动，更是一次难得的情感交流和团队建设机会。在水中嬉戏的过程中，师生之间的隔阂被打破，同学之间的友谊在欢笑中升华。学校希望通过这样独特的活动，让学生在紧张的学习之余学会放松、懂得快乐，培养积极乐观的心态和团结协作的精神，为即将到来的考试季注入满满的正能量。
            </p>
          </div>

          {/* 活动环节 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动环节</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Droplets, title: '自由泼水', desc: '师生自由组队，用水枪、水盆等装备尽情享受泼水乐趣，清凉一夏' },
                { icon: CircleDot, title: '水球大战', desc: '分战队进行水球攻防对抗，考验投掷精准度和团队战术配合' },
                { icon: PartyPopper, title: '泼水接力', desc: '班级接力赛，用水桶传递挑战，考验速度与默契的团队竞赛' },
                { icon: Sun, title: '万人泼水', desc: '全校师生共同参与的高潮环节，在音乐中释放夏日的热情与活力' },
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
                    i === 1 ? 'bg-gradient-to-br from-cyan-400 to-blue-500' :
                    i === 2 ? 'bg-gradient-to-br from-sky-400 to-cyan-500' :
                    i === 3 ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                    'bg-gradient-to-br from-cyan-500 to-teal-400'
                  }`}>
                    <span className="text-sm font-medium">泼水节照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 温馨提示 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#D32027]" />
              温馨提示
            </h2>
            <p className="text-gray-600">
              参加泼水节请穿着轻便、易干的衣物和防滑鞋，可自备水枪等泼水工具（禁止使用高压水枪）。
              活动现场设有更衣区和姜汤供应点，活动结束后可及时更换衣物、饮用姜汤驱寒。
              有身体不适或特殊情况的同学请提前告知班主任，可选择在观众区观看活动。
              请遵守活动秩序，文明泼水，切勿向不愿意参与的同学强行泼水。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
