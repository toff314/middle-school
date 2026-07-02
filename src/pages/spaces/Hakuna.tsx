import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollIndicator from "@/components/ScrollIndicator"
import { Drama, Mic, Palette, Music, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hakuna() {
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
    { title: '专业舞台', desc: '配备专业灯光、音响系统的小型剧场，可容纳150名观众，定期举办戏剧演出。', icon: Mic },
    { title: '表演课程', desc: '开设戏剧表演、即兴表演、舞台设计等课程，由专业戏剧教师授课。', icon: Palette },
    { title: '音乐剧社', desc: '学校音乐剧社团常驻于此，定期排演经典音乐剧选段和原创剧目。', icon: Music },
    { title: '年度大戏', desc: '每年举办校园戏剧节，各年级学生共同参与，呈现精彩纷呈的舞台作品。', icon: Star },
  ]

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B1518] via-[#6B1012] to-[#4A0A0C]" />
        <div className="relative z-10 text-center text-white px-6">
          <Drama className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">HaKuna Matata</h1>
          <p className="text-xl md:text-2xl opacity-90">戏剧空间 · 没有烦恼</p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D32027] mb-6">戏剧教育天地</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              HaKuna Matata取自非洲谚语"没有烦恼"，寓意这里是释放天性、表达自我的舞台。戏剧教育是龙樾实验中学全人教育的重要组成部分。
            </p>
          </div>

          <div className="animate-in mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 leading-relaxed text-gray-700 space-y-6">
              <p className="leading-loose">
                在HaKuna Matata戏剧空间，每一个聚光灯照射的角落都承载着无限的创意与感动。这里不仅是一个物理意义上的剧场，更是学生探索表演艺术、表达内心情感、培养审美情趣的精神家园。
              </p>
              <p className="leading-loose">
                戏剧空间配备了专业的舞台设施，包括可调光LED舞台灯光系统、专业级环绕音响、可移动式舞台布景架和化妆间等。无论是小型的独白表演，还是大型的音乐剧演出，这里都能提供完善的技术支持。
              </p>
              <p className="leading-loose">
                学校高度重视戏剧教育，将其视为培养学生综合素质的重要途径。通过参与戏剧活动，学生不仅可以提升语言表达能力和肢体表现力，更能够在角色扮演中学会共情、理解与尊重，在舞台上收获自信与勇气。
              </p>
            </div>
          </div>

          <div className="animate-in">
            <h2 className="text-3xl font-bold text-[#D32027] mb-8 text-center">空间与课程</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 flex items-start gap-4 hover:shadow-md transition-shadow">
                  <f.icon className="w-10 h-10 text-[#D32027] flex-shrink-0" />
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
