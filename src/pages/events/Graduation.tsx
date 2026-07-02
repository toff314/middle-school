import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Users, GraduationCap, Star, BookOpen, MessageCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function GraduationPage() {
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
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2 block">青春盛典</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">毕业典礼</h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2"><Calendar className="w-5 h-5" /> 每年7月</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> 学校礼堂</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5" /> 毕业生及家长</span>
          </div>
        </div>
      </section>

      {/* 活动介绍 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">活动介绍</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              毕业典礼是北京十一学校龙樾实验中学为每届毕业生精心筹办的最隆重的告别仪式，于每年七月在学期末举行。这不仅是一场仪式，更是龙樾学子人生中的重要里程碑，标志着三年初中生活的圆满落幕和崭新征程的正式开启。学校以最庄重的形式，为每一位毕业生送上最真挚的祝福。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              毕业典礼在学校礼堂隆重举行，全体毕业生身着礼服，在家长和老师的见证下走过红毯、登上舞台。典礼包含校长致辞、颁发毕业证书、优秀毕业生表彰、师生代表发言、家长寄语等多个环节。校长在致辞中回顾毕业生三年来的成长历程，寄语同学们带着龙樾的精神和品格，勇敢追寻自己的梦想。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              毕业典礼上最令人动容的环节是师生互诉心声。班主任老师们为每位学生准备了临别赠言，回忆三年来的点点滴滴，言语间满是不舍与期许。学生们也用精心准备的节目表达对母校和老师的感恩之情，歌曲、朗诵、视频等形式多样，常常让全场师生和家长热泪盈眶。校友们也发来祝福视频，分享高中阶段的学习经验，鼓励学弟学妹们在未来继续保持龙樾人的优秀品质。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              毕业典礼结束后，学校还会为毕业生举办温馨的毕业晚会和班级告别活动。校园里的每一个角落都承载着毕业生们珍贵的回忆，他们在这里相识相知、共同成长，结下了深厚的友谊。龙樾实验中学永远是他们的精神家园，无论走到哪里，"龙樾人"的身份将伴随他们一生。学校祝愿每一位毕业生前程似锦，在新的征程中继续书写精彩人生。
            </p>
          </div>

          {/* 典礼流程 */}
          <div className="animate-in mb-16">
            <h2 className="text-3xl font-bold text-[#D32027] mb-6">典礼流程</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, title: '校长致辞', desc: '校长回顾毕业生三年成长历程，寄语未来人生道路的祝福与期望' },
                { icon: Star, title: '优秀毕业生表彰', desc: '颁发优秀毕业生荣誉证书，表彰在学业、品德、特长等方面表现突出的学生' },
                { icon: BookOpen, title: '颁发毕业证书', desc: '毕业生依次登台，从校长手中接过毕业证书，正式完成学业' },
                { icon: MessageCircle, title: '师生心声', desc: '师生代表发言互诉心声，毕业生以节目表达感恩之情' },
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
                    i === 1 ? 'bg-gradient-to-br from-amber-400 to-yellow-600' :
                    i === 2 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
                    i === 3 ? 'bg-gradient-to-br from-orange-400 to-amber-600' :
                    'bg-gradient-to-br from-rose-400 to-orange-500'
                  }`}>
                    <span className="text-sm font-medium">毕业典礼照片 {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 校友寄语 */}
          <div className="animate-in mt-16 p-8 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-[#D32027]" />
              校友寄语
            </h2>
            <p className="text-gray-600">
              亲爱的毕业生们，祝贺你们顺利完成初中学业！在龙樾的三年里，你们收获了知识、友谊和成长。
              无论未来的道路通向何方，请记住在这里学到的勇气与坚持。龙樾永远是你们温暖的家，欢迎常回家看看。
              愿你们带着"让每一位学生都精彩"的信念，在人生的新征程中继续发光发热，成为最优秀的自己！
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
