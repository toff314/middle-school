import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PenTool, BookOpen, Sparkles, Users, Feather, ScrollText } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const festivals = [
  { name: '汉字文化节', desc: '每年秋季举办，通过汉字听写大赛、书法展览、汉字溯源讲座等活动，感受汉字之美。' },
  { name: '诗词朗诵大会', desc: '春季学期的传统活动，学生们朗诵古典诗词，感受中华诗词的音韵之美和意境之深远。' },
  { name: '世界语言日', desc: '展示各国语言文化的魅力，设有外语角、文化展台、语言游戏等互动环节。' },
  { name: '创意写作大赛', desc: '鼓励学生发挥想象力和创造力，用笔墨书写青春，优秀作品将结集出版。' }
]

const calligraphyCourses = [
  { level: '入门班', name: '楷书基础', desc: '从握笔姿势和基本笔画开始，学习楷书的基本结构和章法' },
  { level: '进阶班', name: '行书提高', desc: '在楷书基础上学习行书，提高书写速度和艺术表现力' },
  { level: '高阶班', name: '书法创作', desc: '系统学习篆隶楷行草五种书体，创作个人书法作品' }
]

const clubs = [
  { name: '龙樾文学社', desc: '聚集文学爱好者的创作阵地，定期举办读书分享、写作工作坊、文学沙龙', members: 45 },
  { name: '诗词研习社', desc: '深入研习古典诗词，学习格律诗写作，传承中华诗词文化', members: 32 },
  { name: '演讲与辩论社', desc: '锻炼语言表达和逻辑思维能力，培养自信从容的演讲风采', members: 38 }
]

const works = [
  { title: '《龙樾文集》', desc: '学生优秀作文选集，每年出版一期，收录各年级优秀习作' },
  { title: '《青春诗选》', desc: '学生原创诗歌作品集，展现龙樾学子的诗意青春' },
  { title: '《墨香龙樾》', desc: '书法作品集，收录师生优秀书法创作，展示书法教育成果' }
]

export default function Language() {
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
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <PenTool size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">语言与文字</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">LANGUAGE & LITERATURE</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">语言文化节</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            语言是人类文明的载体，文字是文化传承的纽带。北京十一学校龙樾实验中学高度重视语言与文字教育，
            将语言文字能力的培养作为学生综合素质提升的重要组成部分。学校每年举办多场语言文化节活动，
            让学生在丰富多彩的活动中感受语言文字的魅力，提升语言表达和文字运用能力。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            语言文化节是学校最具特色的文化活动之一，涵盖汉字文化、诗词文学、世界语言等多个主题板块。
            活动内容既有传统文化的深度体验，如汉字听写大赛、诗词朗诵、书法展览，也有面向世界语言的趣味互动，
            如外语角、语言游戏、文化展台等。这些活动不仅丰富了校园文化生活，也拓宽了学生的文化视野。
          </p>
          <p className="text-gray-600 leading-relaxed">
            通过参与语言文化节，学生们不仅提升了语言文字运用能力，更增强了对中华优秀传统文化的认同感和自豪感。
            我们相信，扎实的语言文字功底将使学生受益终身，成为他们未来发展的重要基石。
          </p>
        </div>
      </section>

      {/* Festivals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <Sparkles className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">精彩活动</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivals.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md animate-in">
                <div className="p-3 bg-red-100 rounded-lg inline-flex mb-4">
                  <ScrollText className="text-[#D32027]" size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{f.name}</h4>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calligraphy Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Feather className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">书法课程</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 animate-in">
            书法是中华传统文化的瑰宝，也是龙樾实验中学的特色课程之一。学校设有系统的书法课程体系，
            由经验丰富的书法教师授课，从基础笔画到创作实践，循序渐进地培养学生的书法技能和艺术修养。
          </p>
          <div className="space-y-4">
            {calligraphyCourses.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 animate-in">
                <span className="px-4 py-2 bg-[#D32027] text-white rounded-full text-sm font-medium shrink-0">
                  {c.level}
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{c.name}</h4>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literature Clubs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <Users className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">文学社团</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clubs.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md animate-in">
                <BookOpen className="text-[#D32027] mb-4" size={28} />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{c.name}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                <p className="text-gray-400 text-sm">成员 {c.members} 人</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <ScrollText className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">作品展示</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <div key={i} className="bg-red-50 rounded-xl p-6 border border-red-200 animate-in">
                <h4 className="font-bold text-gray-900 mb-2">{w.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
