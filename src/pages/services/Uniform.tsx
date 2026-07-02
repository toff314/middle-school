import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, Shirt, Ruler, Truck, RotateCcw, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const uniformStyles = [
  { name: '夏季运动套装', desc: '透气速干面料，舒适运动', color: 'bg-blue-50 border-blue-200' },
  { name: '春秋季校服外套', desc: '防风保暖，经典款式', color: 'bg-gray-50 border-gray-200' },
  { name: '冬季冲锋衣', desc: '三合一设计，防水保暖', color: 'bg-red-50 border-red-200' },
  { name: '正装制服套装', desc: '重要场合穿着，端庄大方', color: 'bg-slate-50 border-slate-200' }
]

const sizeTable = [
  { size: 'S', height: '150-160cm', chest: '84-88cm', waist: '68-72cm' },
  { size: 'M', height: '160-170cm', chest: '88-92cm', waist: '72-76cm' },
  { size: 'L', height: '170-180cm', chest: '92-96cm', waist: '76-80cm' },
  { size: 'XL', height: '180-190cm', chest: '96-100cm', waist: '80-84cm' }
]

export default function Uniform() {
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
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_70%)]" />
        <div className="relative text-center text-white px-6">
          <div className="inline-flex p-5 rounded-2xl bg-white/20 backdrop-blur mb-6 animate-in">
            <ShoppingBag size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">网购校服</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">UNIFORM SHOP</p>
        </div>
      </section>

      {/* Uniform Styles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Shirt className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">校服款式展示</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 animate-in">
            龙樾实验中学的校服设计秉承"简约大方、舒适实用"的理念，由专业设计团队精心打造。
            校服不仅是学校的标识，更是学生青春记忆的载体。我们选用优质面料，注重穿着体验，
            让每一位学生都能在校园中展现自信风采。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uniformStyles.map((u, i) => (
              <div key={i} className={`${u.color} rounded-xl p-6 border animate-in`}>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <ShoppingBag className="text-slate-600" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{u.name}</h4>
                <p className="text-gray-600 text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Ruler className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">尺码对照表</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8 animate-in">
            请参考以下尺码对照表选择合适的校服尺码。建议测量身体各部位尺寸后对照选择，
            如有疑问可咨询客服人员。校服为正常版型，喜欢宽松可适当选大一码。
          </p>
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-in">
            <table className="w-full text-left">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4">尺码</th>
                  <th className="px-6 py-4">身高参考</th>
                  <th className="px-6 py-4">胸围</th>
                  <th className="px-6 py-4">腰围</th>
                </tr>
              </thead>
              <tbody>
                {sizeTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-bold">{row.size}</td>
                    <td className="px-6 py-4">{row.height}</td>
                    <td className="px-6 py-4">{row.chest}</td>
                    <td className="px-6 py-4">{row.waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">购买流程</h2>
            <p className="text-gray-600">简单几步，校服送到班级</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: '在线选购', desc: '浏览款式，选择尺码，加入购物车' },
              { icon: Truck, title: '配送到班', desc: '订单完成后统一配送至班级' },
              { icon: RotateCcw, title: '无忧退换', desc: '尺码不合适可免费调换一次' }
            ].map((item, i) => {
              const IconComp = item.icon
              return (
                <div key={i} className="text-center animate-in">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <IconComp className="text-slate-700" size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
