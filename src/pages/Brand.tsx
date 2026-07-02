import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Palette, Type, Image, Shield, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const brandColors = [
  { name: '龙樾红', hex: '#D32027', usage: '主品牌色，用于Logo、主标题、重要按钮' },
  { name: '深红', hex: '#B91C22', usage: '辅助色，用于渐变、阴影效果' },
  { name: '墨黑', hex: '#1A1A1A', usage: '正文文字、标题文字' },
  { name: '云灰', hex: '#F5F5F5', usage: '页面背景、卡片底色' }
]

const fontRules = [
  { type: '标题字体', font: '思源黑体 / Noto Sans SC', usage: '页面大标题、章节标题', weight: 'Bold (700)' },
  { type: '正文字体', font: '思源黑体 / Noto Sans SC', usage: '正文段落、描述文字', weight: 'Regular (400)' },
  { type: '英文字体', font: 'Inter / Helvetica Neue', usage: '英文标题和正文', weight: 'Medium (500)' }
]

const logoRules = [
  'Logo最小使用尺寸不得小于宽度20mm',
  'Logo周围需保留足够的安全空间，不小于Logo高度的1/4',
  '禁止拉伸、压缩、旋转或改变Logo比例',
  '禁止在复杂背景下使用标准色Logo，可使用反白版本',
  '禁止修改Logo的颜色、字体或任何设计元素'
]

export default function Brand() {
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
            <Palette size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in">品牌指南</h1>
          <p className="text-xl opacity-80 tracking-widest animate-in">BRAND GUIDE</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 animate-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">学校品牌介绍</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            北京十一学校龙樾实验中学的品牌形象是学校文化和精神的外在体现。我们的品牌设计秉承"简约有力、现代大气"的理念，
            以红色为主色调，象征着热情、活力和进取精神，体现了龙樾人追求卓越、勇于担当的精神风貌。
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            "龙樾"二字蕴含着深厚的文化内涵。"龙"代表着中华民族的精神图腾，象征着力量、智慧和腾飞；
            "樾"意为树荫，寓意学校是莘莘学子成长的庇护之所，为学生提供知识的荫蔽和精神的滋养。
            学校品牌将这一理念融入视觉设计之中，力求每一处细节都能传达龙樾的教育信念。
          </p>
          <p className="text-gray-600 leading-relaxed">
            本品牌指南旨在规范学校视觉形象的使用标准，确保品牌形象的一致性和专业度。
            所有与学校品牌相关的视觉物料，包括但不限于宣传册、网站、社交媒体、活动物料等，
            均应遵循本指南的规定。如有疑问，请联系学校品牌管理办公室。
          </p>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Palette className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">品牌色彩</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandColors.map((c, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-in">
                <div className="h-24" style={{ backgroundColor: c.hex }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{c.name}</h4>
                    <span className="font-mono text-sm text-gray-500">{c.hex}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Rules */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Image className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Logo使用规范</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8 animate-in">
            <div className="flex items-center justify-center gap-8 py-8">
              <div className="w-32 h-32 bg-[#D32027] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                龙樾
              </div>
              <div className="w-32 h-32 bg-gray-900 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                龙樾
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm">标准色版本（左）和反白版本（右）</p>
          </div>
          <div className="space-y-3 animate-in">
            {logoRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3">
                <Shield className="text-[#D32027] shrink-0 mt-0.5" size={18} />
                <p className="text-gray-700">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 animate-in">
            <Type className="text-[#D32027]" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">字体规范</h2>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-in">
            <table className="w-full text-left">
              <thead className="bg-[#D32027] text-white">
                <tr>
                  <th className="px-6 py-4">用途</th>
                  <th className="px-6 py-4">字体</th>
                  <th className="px-6 py-4">字重</th>
                </tr>
              </thead>
              <tbody>
                {fontRules.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium">{f.type}</td>
                    <td className="px-6 py-4">{f.font}</td>
                    <td className="px-6 py-4">{f.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200 animate-in">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <p className="text-blue-800 text-sm">
                在实际应用中，如无法使用指定字体，可优先选用系统默认的无衬线字体（如微软雅黑、PingFang SC）作为替代方案，
                以确保最佳显示效果。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
