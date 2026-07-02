import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Timer, Goal, Trophy, Zap, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Playground() {
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

  const facilities = [
    { title: '标准田径场', desc: '400米标准塑胶跑道，铺设优质人造草坪足球场，满足田径比赛和足球训练需求。', icon: Goal },
    { title: '足球场地', desc: '11人制足球场配备标准球门和角旗，定期举办班级联赛和校际比赛。', icon: Trophy },
    { title: '训练设施', desc: '设有跳远沙坑、铅球投掷区、跨栏训练区等田径专项训练区域。', icon: Zap },
    { title: '场地位置', desc: '操场位于校园东侧，占地面积15000平方米，环绕教学楼而建。', icon: MapPin },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] via-[#1B5E3B] to-[#0F4A2B]" />
        <div className="relative z-10 text-center text-white px-6">
          <Timer className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">操场</h1>
          <p className="text-xl md:text-2xl opacity-90">PLAYGROUND</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2D6A4F] mb-6">奔跑吧 少年</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              操场是学校最大、最开阔的户外运动空间，承载着体育教学、竞技比赛和日常锻炼的重要功能，也是同学们释放活力、享受运动的乐园。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                龙樾实验中学操场占地面积约15000平方米，是学校最为开阔的户外运动空间。操场采用国际标准400米环形塑胶跑道，跑道内侧铺设了高品质人造草坪足球场，无论是清晨的晨跑锻炼，还是下午的体育课程，亦或是课间的自由活动，这里总是洋溢着青春活力的气息。
              </p>
              <p className="leading-loose">
                足球场按照11人制标准建设，场地平整、草皮柔软，是学校足球队日常训练和比赛的主要场地。跑道周边还配备了跳远沙坑、铅球投掷区、跨栏训练区等田径专项训练设施，为开展多元化的体育教学提供了充足条件。操场四周设置了充足的观众看台和遮阳休息区，方便同学们观看比赛和休息。
              </p>
              <p className="leading-loose">
                操场不仅是运动的场所，更是学校重大活动的举办场地。每年一度的运动会、升旗仪式、户外拓展活动等都在这里举行。傍晚时分，这里常常成为同学们散步、聊天、放风筝的休闲空间。操场见证了同学们挥洒的汗水、收获的欢笑和珍贵的友谊。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#2D6A4F] mb-8 text-center">运动设施</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((f, i) => (
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
