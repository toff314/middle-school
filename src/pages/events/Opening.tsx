import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Flag, Award, Target, BookOpen } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Opening() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">新学期</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">开学典礼</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年9月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 学校礼堂</span>
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
              开学典礼是北京十一学校龙樾实验中学每年秋季学期开学之际举行的庄重仪式，于每年九月在焕然一新的校园中隆重举行。典礼以"新学期、新目标、新起点"为主题，旨在帮助全校师生以饱满的热情和积极的心态迎接新学期的到来，明确奋斗目标，激发学习动力。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              开学典礼在学校礼堂举行，全体教职工和学生齐聚一堂。典礼包含升旗仪式、校长致辞、表彰优秀、学生代表发言、新学期宣誓等多个环节。庄严的升旗仪式拉开典礼序幕，全体师生起立高唱国歌，表达对祖国的热爱和对新学期的美好期盼。校长在致辞中回顾学校上一学年取得的各项成绩，对新学期提出殷切期望和明确要求。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              表彰优秀是开学典礼的重要环节，学校对在上一学年中表现突出的班级和个人进行表彰，颁发荣誉证书和奖学金。获奖学生代表上台发言，分享自己的学习经验和成长感悟，激励同学们以他们为榜样，在新的学年里追求卓越。新入学的六年级新生也在典礼上亮相，他们满怀憧憬地站上龙樾的舞台，开启人生崭新的篇章。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              开学典礼的最后环节是全校师生共同宣誓，许下新学期的庄严承诺。铮铮誓言回荡在礼堂中，表达了龙樾师生团结奋进、共创辉煌的决心。典礼结束后，各班还召开新学期主题班会，制定班级目标和个人计划，将开学典礼的精神落实到日常的学习生活中。开学典礼如同一面旗帜，引领着全校师生在新学期扬帆起航、砥砺前行。
            </p>
          </div>

          {/* 典礼流程 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">典礼流程</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Flag, title: '升旗仪式', desc: '庄严的升国旗仪式，全体师生高唱国歌，开启新学期的篇章' },
                { icon: Award, title: '表彰优秀', desc: '表彰上一学年表现突出的优秀班级、优秀学生干部和奖学金获得者' },
                { icon: Target, title: '校长致辞', desc: '校长回顾过往成绩，展望新学期发展蓝图，提出殷切期望' },
                { icon: BookOpen, title: '新学期宣誓', desc: '全校师生共同宣誓，许下新学期努力学习、追求卓越的庄严承诺' },
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
                    i === 1 ? 'bg-gradient-to-br from-red-500 to-rose-600' :
                    i === 2 ? 'bg-gradient-to-br from-orange-400 to-red-500' :
                    i === 3 ? 'bg-gradient-to-br from-rose-400 to-red-600' :
                    'bg-gradient-to-br from-amber-400 to-red-500'
                  }`}>
                    <span className="text-sm font-medium">开学典礼照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <p className="text-gray-600">
              开学典礼面向全校师生开放，全体教职工和学生均需参加。典礼在学校礼堂举行，各班级按照指定区域就座。
              家长代表将收到特别邀请参加典礼观礼。新学期欢迎所有同学以饱满的精神状态参加开学典礼，
              共同开启崭新的学习旅程，在龙樾的舞台上书写属于自己的精彩篇章。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
