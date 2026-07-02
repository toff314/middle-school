import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CircleDot, Users, MessageCircle, Star, Zap, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const activities = [
  {
    title: '学科互助小组',
    desc: '按学科组建互助小组，由成绩优异的同学担任组长，定期组织集体学习和答疑解惑。',
    icon: Users
  },
  {
    title: '学习方法分享会',
    desc: '每月举办一次学习方法分享会，邀请不同学科的优秀学生分享学习心得和备考经验。',
    icon: MessageCircle
  },
  {
    title: '考前冲刺营',
    desc: '期中、期末考试前组织集中冲刺活动，系统梳理知识点，进行模拟训练和错题分析。',
    icon: Zap
  }
]

const testimonials = [
  { name: '张同学', grade: '初二', text: '加入芝士圈后，我的数学成绩从70分提升到了90分，真的太感谢了！' },
  { name: '李同学', grade: '初一', text: '在这里认识了很多学霸朋友，大家一起学习、一起进步，氛围特别好。' },
  { name: '王同学', grade: '初三', text: '考前冲刺营帮了大忙，系统复习让备考效率提高了不少。' }
]

export default function CheeseCircle() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-500">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <CircleDot size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">芝士圈</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">CHEESE CIRCLE</p>
          <p className="mt-6 text-lg opacity-70 max-w-2xl mx-auto animate-in">
            一起学习，一起成长 —— 龙樾学子的学习互助社群
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">什么是芝士圈？</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            "芝士圈"是北京十一学校龙樾实验中学独具特色的学生互助学习社群。"芝士"谐音"知识"，
            寓意着知识的分享与传递如同芝士般浓郁香醇。在这里，每一位学生既是知识的汲取者，也是知识的分享者，
            大家互帮互助、共同进步，营造浓厚的学习氛围。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            芝士圈秉持"授人以鱼不如授人以渔"的理念，不仅帮助同学解决具体的学习问题，更注重培养自主学习能力和良好的学习习惯。
            通过同伴互助的形式，学生们在帮助他人的过程中巩固自己的知识，在请教问题的过程中拓展思维视野，
            实现教学相长、共同提升。
          </p>
          <p className="text-gray-600 leading-relaxed">
            自创立以来，芝士圈已帮助数千名学生在学业上取得了显著进步。许多曾经成绩平平的同学，
            在芝士圈的帮助下找到了适合自己的学习方法，成绩稳步提升。更重要的是，芝士圈培养了学生们团结协作、
            乐于助人的优秀品质，让龙樾校园充满了温暖和正能量。
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <Star className="text-amber-500 mx-auto mb-4" size={36} />
            <h2 className="text-3xl font-bold text-gray-900 mb-3">活动形式</h2>
            <p className="text-gray-600">多种多样的互助活动，满足不同学习需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((a, i) => {
              const IconComp = a.icon
              return (
                <div key={i} className="bg-white rounded-xl p-8 shadow-md animate-in">
                  <div className="p-3 bg-amber-100 rounded-lg inline-flex mb-4">
                    <IconComp className="text-amber-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{a.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center animate-in">同学心声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-6 border border-amber-200 animate-in">
                <Heart className="text-amber-500 mb-3" size={20} />
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center animate-in">
          <CircleDot className="text-amber-500 mx-auto mb-4" size={36} />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">加入芝士圈</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            无论你是想寻求帮助还是愿意分享知识，芝士圈都欢迎你的加入。加入方式非常简单：
            登录学校App，在"社团活动"板块中找到"芝士圈"，点击"加入"即可。加入后，
            你可以根据自己的学科特长和需求选择加入相应的互助小组。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3 text-amber-600 font-bold">1</div>
              <h4 className="font-bold text-gray-900 mb-1">登录学校App</h4>
              <p className="text-gray-500 text-sm">使用学号登录</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3 text-amber-600 font-bold">2</div>
              <h4 className="font-bold text-gray-900 mb-1">找到芝士圈</h4>
              <p className="text-gray-500 text-sm">在社团活动中搜索</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3 text-amber-600 font-bold">3</div>
              <h4 className="font-bold text-gray-900 mb-1">点击加入</h4>
              <p className="text-gray-500 text-sm">选择感兴趣的学科组</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
