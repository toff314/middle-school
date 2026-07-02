import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, Palette, Music, Drama, Image } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ArtFestival() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">艺术盛典</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">龙樾艺术节</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年5月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 学校礼堂、展厅</span>
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
              龙樾艺术节是北京十一学校龙樾实验中学一年一度的艺术盛典，于每年五月盛大举行。艺术节以"让每一位学生都精彩"为核心理念，为全校师生搭建展示艺术才华、感受艺术魅力的舞台。艺术节期间，校园化身艺术的海洋，处处洋溢着创作的热情和审美的愉悦。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              艺术节涵盖绘画展、音乐会、舞蹈表演、戏剧演出等多种形式的艺术活动。绘画展览在学校展厅举办，展出学生在美术课程和社团中创作的优秀作品，包括国画、油画、水彩、版画、数字艺术等多种媒介。音乐会分设器乐专场和声乐专场，学校管弦乐团、合唱团、民乐团以及个人表演者带来精彩纷呈的节目。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              舞蹈表演和戏剧演出是艺术节最受欢迎的重头戏。学校舞蹈团编排的原创舞蹈作品融合现代舞、民族舞、街舞等多种风格，展现学生的艺术创造力。戏剧演出则由戏剧社和各年级选送的剧目组成，从经典话剧到原创校园剧，学生们在舞台上尽情释放表演天赋。每年的艺术节还会邀请专业艺术家进校开展工作坊，与学生进行面对面的艺术交流。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              龙樾艺术节不仅是一场艺术成果的展示，更是一次全面的艺术美育实践。学校相信，艺术教育能够培养学生的审美素养、创造力和人文情怀。通过艺术节的筹备和参与，学生们学会了团队协作、时间管理和舞台表达，这些软实力将伴随他们走向更广阔的人生舞台。
            </p>
          </div>

          {/* 活动内容 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动内容</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Palette, title: '绘画展览', desc: '汇集全校学生的优秀美术作品，涵盖多种艺术形式和媒介，在学校展厅集中展示' },
                { icon: Music, title: '音乐会', desc: '管弦乐团、合唱团、民乐团联袂演出，更有个人才艺展示，带来视听盛宴' },
                { icon: Drama, title: '戏剧演出', desc: '戏剧社精心排演的经典剧目和原创作品，展现舞台表演的魅力' },
                { icon: Image, title: '舞蹈表演', desc: '现代舞、民族舞、街舞等多种风格舞蹈汇演，尽显青春活力' },
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
                    i === 1 ? 'bg-gradient-to-br from-purple-400 to-violet-600' :
                    i === 2 ? 'bg-gradient-to-br from-fuchsia-400 to-pink-600' :
                    i === 3 ? 'bg-gradient-to-br from-pink-400 to-rose-600' :
                    'bg-gradient-to-br from-violet-400 to-purple-600'
                  }`}>
                    <span className="text-sm font-medium">艺术节照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 参与方式 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">如何参与</h2>
            <p className="text-gray-600">
              艺术节面向全校师生开放，学生可通过以下方式参与：提交绘画作品参加展览选拔、报名个人才艺表演、参与班级集体节目排演、加入艺术工作坊体验创作乐趣。
              各艺术社团成员将优先参与专场演出，同时欢迎有艺术特长的同学踊跃报名个人节目。艺术节期间所有展览和演出均免费向全校师生开放。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
