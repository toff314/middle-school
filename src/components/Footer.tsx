import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: '初识小镇',
    links: ['我们是谁', '镇长寄语', '空间环境', '课程体系', '团队', '吉祥物', '新闻'],
  },
  {
    title: '探访小镇',
    links: ['学习中心', '龙樾cool', '龙樾法庭', 'HaKuna Matata', '小镇农场', '游泳馆', '体育馆', '龙樾博物馆', '攀岩墙', '操场', '餐厅', '苏园'],
  },
]

const footerEvents = ['开放日', '研学', '龙市', '艺术节', '技术节', '体育节', '泼水节', '毕业典礼', '开学典礼', '狂欢节']
const footerServices = ['在线点餐', '校园卡充值', '网购校服', '家校中心', '家长学院', '校历']

export default function Footer() {
  return (
    <footer className="bg-[#D32027] text-white">
      {/* Row 1: Tagline + Logo */}
      <div className="max-w-page mx-auto px-6 lg:px-20 pt-16 pb-12 text-center">
        <Link to="/" className="inline-block mb-6">
          <span className="text-white font-bold text-4xl tracking-wide">未来小镇</span>
        </Link>
        <p className="text-2xl font-medium tracking-wide mb-2">
          每个人都是共享文化实践的参与者
        </p>
        <p className="text-base font-inter opacity-60">
          Everyone is a participant in shared cultural practice
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-page mx-auto px-6 lg:px-20">
        <div className="h-px bg-white/20" />
      </div>

      {/* Row 2: Navigation Columns */}
      <div className="max-w-page mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-white/80 hover:text-white transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Events column */}
          <div>
            <h4 className="text-lg font-bold mb-4">小镇活动</h4>
            <div className="flex flex-wrap gap-2">
              {footerEvents.map((event) => (
                <button
                  key={event}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {event}
                </button>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-lg font-bold mb-4">在线服务</h4>
            <div className="flex flex-wrap gap-2">
              {footerServices.map((service) => (
                <button
                  key={service}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-page mx-auto px-6 lg:px-20">
        <div className="h-px bg-white/20" />
      </div>

      {/* Row 3: Bottom Bar */}
      <div className="max-w-page mx-auto px-6 lg:px-20 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* Weibo */}
          <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all" aria-label="微博">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.098 20c-4.27 0-8.598-1.86-8.598-5.623 0-1.96.98-4.11 2.66-6.052 2.24-2.537 4.838-3.678 5.808-2.547.42.48.388 1.27-.04 2.2-.16.33.253.22.253.22 1.64-.52 3.106-.56 3.626.2.267.39.227.96-.08 1.627-.1.21.033.27.18.23 1.413-.38 2.653-.16 3.033.707.313.71-.147 1.717-1.147 2.777 0 0-.227.24-.107.44.907 1.557.187 3.247-1.893 4.557C11.828 19.56 11.028 20 10.098 20zm-1.5-8.3c-2.467.133-4.44 1.667-4.407 3.427.033 1.76 2.06 3.093 4.527 2.96 2.467-.133 4.44-1.667 4.407-3.427-.033-1.76-2.06-3.093-4.527-2.96zm-1.48 4.44c-.773.347-1.753.04-2.187-.687-.433-.727-.173-1.58.6-1.927.78-.347 1.767-.033 2.2.694.433.727.16 1.573-.613 1.92zm1.68-2.013c-.287.133-.647.013-.807-.267-.16-.28-.06-.6.227-.733.293-.133.66-.013.82.267.16.28.047.6-.24.733zm8.542-6.66c-.267-1.02-1.533-1.653-2.933-1.467l-.227.033c-.187.027-.32-.12-.347-.307-.027-.187.12-.32.307-.347l.227-.033c1.787-.253 3.413.573 3.76 1.907.04.173-.067.347-.24.387-.173.04-.347-.067-.387-.24l-.16.167zm-.44-2.987c-.48-1.733-2.56-2.853-4.907-2.547-.2.027-.387-.107-.413-.307-.027-.2.107-.387.307-.413 2.72-.347 5.173.987 5.76 3.12.053.187-.053.387-.24.44-.187.053-.387-.053-.44-.24l-.067-.053z" />
            </svg>
          </button>
          {/* WeChat */}
          <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all" aria-label="微信">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.87a.968.968 0 0 1 .963.964.968.968 0 0 1-.963.963.968.968 0 0 1-.963-.963c0-.535.428-.964.963-.964zm4.844 0a.968.968 0 0 1 .964.964.968.968 0 0 1-.964.963.968.968 0 0 1-.963-.963c0-.535.429-.964.963-.964z" />
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60 text-center">
          &copy;2018北京十一学校龙樾实验中学版权所有 京ICP备17050733号
        </p>
      </div>
    </footer>
  )
}
