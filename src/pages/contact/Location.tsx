import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Train, Car, Bus, Navigation, Clock, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const transportOptions = [
  {
    icon: Train,
    title: '地铁',
    desc: '乘坐地铁8号线至育新站，A口出站后向北步行约800米即到。地铁昌平线至西小口站也可到达。'
  },
  {
    icon: Bus,
    title: '公交',
    desc: '可乘81路、专89路、478路至"北京十一学校龙樾实验中学站"下车；或乘坐315路、371路至"东升中路站"。'
  },
  {
    icon: Car,
    title: '自驾',
    desc: '导航搜索"北京十一学校龙樾实验中学"，校园东侧设有访客停车场。工作日来访建议提前预约停车位。'
  }
]

export default function Location() {
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
            <MapPin size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">小镇坐标</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">LOCATION</p>
        </div>
      </section>

      {/* Address */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">学校地址</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学坐落于北京市海淀区东升中路1号，地处中关村科技园区核心地带，
            周边高校云集、科技企业环绕，学术氛围浓厚。学校占地面积广阔，校园环境优美，
            教学设施先进，是莘莘学子求学成长的理想之地。
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            学校地理位置优越，交通便利。周边有地铁站、公交枢纽，方便师生通勤。
            校园周边配套完善，附近设有商场、医院、图书馆等公共设施，为师生的学习和生活提供便利。
          </p>
          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#D32027] shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">详细地址</h4>
                <p className="text-gray-700">北京市海淀区东升中路1号</p>
                <p className="text-gray-700">北京十一学校龙樾实验中学</p>
                <p className="text-gray-500 text-sm mt-2">邮编：100192</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Navigation className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">交通指南</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 animate-in">
            无论您选择哪种交通方式，都能便捷地到达学校。以下是推荐的几种出行方案，请根据实际情况选择最适合的路线。
          </p>
          <div className="space-y-6">
            {transportOptions.map((t, i) => {
              const IconComp = t.icon
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-4 animate-in">
                  <div className="p-3 bg-red-100 rounded-lg h-fit">
                    <IconComp className="text-[#D32027]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{t.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">校园地图</h2>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-400">
              <MapPin size={64} className="mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">地图区域</p>
              <p className="text-sm">此处将加载校园地图组件</p>
              <p className="text-sm mt-1">定位：北京市海淀区东升中路1号</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Clock className="text-[#D32027] mb-4" size={28} />
              <h4 className="font-bold text-gray-900 mb-3">办公时间</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between"><span>周一至周五</span><span>8:00 - 17:30</span></li>
                <li className="flex justify-between"><span>周六</span><span>9:00 - 12:00</span></li>
                <li className="flex justify-between"><span>周日及节假日</span><span>休息</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Phone className="text-[#D32027] mb-4" size={28} />
              <h4 className="font-bold text-gray-900 mb-3">咨询电话</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between"><span>总机</span><span>010-8888-6666</span></li>
                <li className="flex justify-between"><span>招生办</span><span>010-8888-7777</span></li>
                <li className="flex justify-between"><span>传真</span><span>010-8888-6688</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
