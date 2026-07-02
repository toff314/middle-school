import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Award, Calendar, Users, BookOpen, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const notableAlumni = [
  { name: '陈明远', year: '2018届', achievement: '清华大学计算机科学博士在读，曾获得全国信息学奥赛金牌', field: '学术研究' },
  { name: '林小雨', year: '2019届', achievement: '北京大学光华管理学院，创立校园公益组织"书香传递"', field: '公益创业' },
  { name: '王子涵', year: '2020届', achievement: '入选国家青年足球队，代表国家参加亚洲青年锦标赛', field: '体育竞技' },
  { name: '赵思琪', year: '2021届', achievement: '中国美术学院录取，作品入选全国青少年美术作品展', field: '艺术创作' }
]

const stories = [
  {
    title: '那年的运动会',
    excerpt: '还记得初三那年春季运动会，全班同学齐心协力，最终在接力赛中获得了年级第一名。那一刻的欢呼声至今回荡在耳边...',
    author: '2017届 李同学'
  },
  {
    title: '图书馆的午后',
    excerpt: '龙樾的图书馆是我最喜欢的地方。午后的阳光透过落地窗洒在书桌上，安静地读一本书，那是青春最美好的模样...',
    author: '2019届 张同学'
  },
  {
    title: '最后一次班会',
    excerpt: '毕业前的最后一次班会，班主任让我们每人写一封信给未来的自己。如今再翻开那封信，恍如隔世又历历在目...',
    author: '2020届 王同学'
  }
]

const events = [
  { title: '校友返校日', date: '每年9月第一个周六', desc: '历届校友重返校园，共叙师生情谊' },
  { title: '校友职业分享会', date: '每学期举办', desc: '优秀校友回校分享职业经历和人生感悟' },
  { title: '校友捐赠活动', date: '持续进行', desc: '校友回馈母校，支持学校发展和学生成长' }
]

export default function Alumni() {
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
            <Heart size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">校友回忆</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">ALUMNI</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">校友会介绍</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学校友会是连接历届毕业生与母校的桥梁和纽带。自成立以来，校友会始终秉承"联络校友、
            服务校友、回馈母校"的宗旨，致力于搭建校友之间、校友与学校之间的沟通交流平台。
            无论您身在何处，从事何种职业，龙樾永远是您的精神家园。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            龙樾的校友遍布世界各地，活跃在学术研究、科技创新、商业管理、文化艺术、公益慈善等各个领域。
            他们以卓越的成就诠释着龙樾"志远意诚，思方行圆"的校训精神，
            用自己的实际行动为母校增光添彩，为社会发展贡献力量。
          </p>
          <p className="text-gray-600 leading-relaxed">
            校友会定期举办返校日、职业分享会、校友联谊等活动，为校友们提供重温校园时光、交流经验、
            拓展人脉的机会。我们诚挚地邀请每一位龙樾校友加入校友会，
            与我们一同守护这份珍贵的校友情谊，共同书写龙樾的新篇章。
          </p>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <Award className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">杰出校友</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notableAlumni.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex gap-4 animate-in">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <span className="text-[#D32027] font-bold text-lg">{a.name[0]}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-gray-900">{a.name}</h4>
                    <span className="text-xs text-gray-500">{a.year}</span>
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-red-100 text-[#D32027] rounded text-xs mb-2">{a.field}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <BookOpen className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">回忆故事</h2>
          </div>
          <div className="space-y-6">
            {stories.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 animate-in">
                <Quote className="text-red-200 mb-3" size={28} />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{s.excerpt}</p>
                <p className="text-[#D32027] text-sm font-medium">—— {s.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12 animate-in">
            <Calendar className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">校友活动</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md text-center animate-in">
                <Users className="text-[#D32027] mx-auto mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">{e.title}</h4>
                <p className="text-[#D32027] text-sm font-medium mb-2">{e.date}</p>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
