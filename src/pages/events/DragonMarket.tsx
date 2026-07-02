import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, ShoppingBag, Sparkles, HandHeart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function DragonMarket() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">龙市</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每学期一次</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 学校广场</span>
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
              龙市是北京十一学校龙樾实验中学最具特色的校园活动之一，也是全校师生最期待的盛会。"龙市"之名取"龙樾之市"的寓意，是一个由学生自主策划、自主经营的校园跳蚤市场与创意义卖活动。在这里，每个学生都可以成为"小老板"，展示自己的创意和商业头脑。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              龙市活动完全由学生自主运营。从摊位申请、商品筹备、定价策略到营销宣传，每一个环节都由学生团队自主完成。学校为学生提供场地支持和基础指导，但具体的经营决策权完全交到学生手中。这种"放手"式的教育模式，让学生在实践中学习经济学基础知识，培养财商意识和创业精神。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              龙市上的商品琳琅满目，既有学生亲手制作的手工艺品、创意绘画、自制美食，也有闲置书籍、文具、饰品的交换售卖。部分班级还将龙市与公益结合，将所得收益捐赠给慈善机构或用于班级建设。近年来，龙市还涌现出不少"网红摊位"，有的学生设计出校园文创产品，有的推出创意游戏体验，让龙市充满了青春的活力与创意。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              龙市不仅是一次买卖交易的活动，更是一堂生动的社会实践课。学生在活动中学会了如何与人沟通、如何合理定价、如何吸引顾客、如何管理收入和支出。这些宝贵的经验将成为他们成长路上的重要财富，也是学校"做中学"教育理念的生动体现。
            </p>
          </div>

          {/* 活动亮点 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动亮点</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '自主经营', desc: '从选品到定价，从营销到售后，全流程由学生团队自主决策和运营' },
                { title: '创意无限', desc: '手工艺品、文创设计、美食制作、互动游戏，展示学生的无限创意' },
                { title: '公益义卖', desc: '部分摊位收益用于公益捐赠，培养学生的社会责任感和爱心' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
                    i === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-600' :
                    i === 2 ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                    i === 3 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' :
                    'bg-gradient-to-br from-red-400 to-orange-500'
                  }`}>
                    <span className="text-sm font-medium">龙市照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-start gap-3">
                <ShoppingBag className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">申请摊位</p>
                  <p>以班级或社团为单位提交摊位申请方案，经审核通过后获得摊位资格</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">创意筹备</p>
                  <p>提前准备售卖的商品或服务，制定营销策略和价格方案</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HandHeart className="w-5 h-5 text-[#D32027] mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">现场体验</p>
                  <p>龙市当天所有师生均可参与，既可当卖家也可当买家，享受集市乐趣</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
