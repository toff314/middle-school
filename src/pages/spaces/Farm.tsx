import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Sprout, Sun, Droplets, Apple, Leaf } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Farm() {
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

  const features = [
    { title: '种植体验', desc: '学生亲自参与播种、浇水、施肥、收获全过程，体验农耕劳作的乐趣与辛劳。', icon: Sun },
    { title: '生态循环', desc: '了解农作物生长周期与生态循环系统，培养环保意识和可持续发展理念。', icon: Droplets },
    { title: '食育课堂', desc: '从田间到餐桌，了解食物的来源，学习营养知识，培养健康饮食习惯。', icon: Apple },
    { title: '自然观察', desc: '通过观察植物和昆虫，培养科学探究精神，撰写自然观察日记。', icon: Leaf },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] via-[#1B5E3B] to-[#0F4A2B]" />
        <div className="relative z-10 text-center text-white px-6">
          <Sprout className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">小镇农场</h1>
          <p className="text-xl md:text-2xl opacity-90">TOWN FARM</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D6A4F] mb-6">亲近自然 体验农耕</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              小镇农场是龙樾实验中学劳动教育的重要基地，也是学生亲近自然、体验农耕文化的实践课堂。在这里，同学们用双手触摸泥土的温度，感受生命的力量。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                小镇农场占地面积约2000平方米，划分为蔬菜种植区、果树栽培区、花卉观赏区和动物饲养区四大功能区。农场采用有机种植方式，不使用化学农药和化肥，让学生在纯自然的环境中学习生态农业知识。
              </p>
              <p className="leading-loose">
                学校将劳动教育纳入课程体系，每位同学都需要在农场完成一定的劳动实践学时。同学们以班级为单位认领责任田，自主选择种植品种，从翻土播种到浇水施肥，全程参与农作物的生长管理。当季收获时，同学们还可以将自己种植的蔬菜带回家，与家人分享劳动成果的喜悦。
              </p>
              <p className="leading-loose">
                农场不仅是劳动教育的场所，更是跨学科综合学习的平台。生物课上，同学们在这里观察植物的光合作用和根系生长；化学课上，大家检测土壤的pH值和养分含量；语文课上，农场成为最好的写作素材源泉。多学科知识的交叉融合，让学习变得更加生动有趣。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#2D6A4F] mb-8 text-center">农场特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#2D6A4F] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
