import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FileText,
  Users,
  Image,
  Settings,
  LogOut,
  Lock,
  Eye,
  TrendingUp,
  Edit3,
  Trash2,
  Plus,
  Search,
  Bell,
  Upload,
  Save,
  X,
} from 'lucide-react'

/* ────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────── */

interface NewsItem {
  id: string
  title: string
  category: string
  author: string
  date: string
}

interface Teacher {
  id: string
  name: string
  title: string
  department: string
  email: string
}

interface Activity {
  id: string
  text: string
  time: string
}

/* ────────────────────────────────────────────────
   Mock Data
   ────────────────────────────────────────────── */

const mockNews: NewsItem[] = [
  { id: '1', title: '龙樾实验中学举办2024年春季运动会', category: '龙樾进行时', author: '校办公室', date: '2024-04-15' },
  { id: '2', title: '我校学生在市科技创新大赛中荣获佳绩', category: '龙樾洞察', author: '科技中心', date: '2024-04-10' },
  { id: '3', title: '龙樾艺术节：让每一个孩子绽放光彩', category: '龙樾进行时', author: '艺术中心', date: '2024-03-28' },
  { id: '4', title: '新学期升旗仪式：以梦为马，不负韶华', category: '升旗敬礼', author: '学生处', date: '2024-03-01' },
  { id: '5', title: '龙樾教师参加国家级教学研讨会', category: '公示', author: '教务处', date: '2024-02-20' },
  { id: '6', title: '寒假研学活动：走进故宫，感受历史', category: '龙樾进行时', author: '研学中心', date: '2024-02-05' },
  { id: '7', title: '我校党支部开展主题党日活动', category: '党建', author: '党支部', date: '2024-01-18' },
  { id: '8', title: '龙樾科技节：激发创新潜能', category: '龙樾进行时', author: '科技中心', date: '2024-01-10' },
]

const mockTeachers: Teacher[] = [
  { id: '1', name: '王明华', title: '高级教师', department: '语文组', email: 'wangmh@shiyilongyue.com' },
  { id: '2', name: '李建国', title: '特级教师', department: '数学组', email: 'lijg@shiyilongyue.com' },
  { id: '3', name: '张晓芳', title: '一级教师', department: '英语组', email: 'zhangxf@shiyilongyue.com' },
  { id: '4', name: '陈志强', title: '高级教师', department: '物理组', email: 'chenzq@shiyilongyue.com' },
  { id: '5', name: '刘美玲', title: '二级教师', department: '化学组', email: 'liuml@shiyilongyue.com' },
  { id: '6', name: '赵文博', title: '高级教师', department: '历史组', email: 'zhaowb@shiyilongyue.com' },
  { id: '7', name: '孙丽华', title: '一级教师', department: '生物组', email: 'sunlh@shiyilongyue.com' },
  { id: '8', name: '周建国', title: '特级教师', department: '体育组', email: 'zhoujg@shiyilongyue.com' },
]

const mockActivities: Activity[] = [
  { id: '1', text: '管理员 发布了新文章《龙樾实验中学举办2024年春季运动会》', time: '10 分钟前' },
  { id: '2', text: '管理员 编辑了教师信息：王明华', time: '32 分钟前' },
  { id: '3', text: '管理员 删除了文章《旧通知公告》', time: '1 小时前' },
  { id: '4', text: '管理员 上传了 3 张图片到媒体库', time: '2 小时前' },
  { id: '5', text: '管理员 修改了系统设置：网站标题', time: '3 小时前' },
  { id: '6', text: '管理员 发布了新文章《我校学生在市科技创新大赛中荣获佳绩》', time: '5 小时前' },
  { id: '7', text: '管理员 添加了新教师：张晓芳', time: '1 天前' },
  { id: '8', text: '管理员 登录了管理后台', time: '1 天前' },
]

const mediaPlaceholders = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  name: `图片 ${i + 1}`,
  src: i % 3 === 0 ? '/news-1.jpg' : i % 3 === 1 ? '/news-2.jpg' : '/news-3.jpg',
}))

/* ────────────────────────────────────────────────
   Login Gate
   ────────────────────────────────────────────── */

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim() && password.trim()) {
      localStorage.setItem('admin_token', 'mock-token')
      onLogin()
    }
  }

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-auto"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-crimson/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-crimson" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 font-noto">管理后台登录</h1>
          <p className="text-sm text-gray-500 mt-2">北京十一学校龙樾实验中学</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">用户名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">密码</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none transition-all text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-crimson text-white py-2.5 rounded-lg font-medium hover:bg-crimson-dark transition-colors cursor-pointer text-sm"
          >
            登录
          </button>
        </form>
      </motion.div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Sidebar Navigation
   ────────────────────────────────────────────── */

const navItems = [
  { id: 'dashboard', label: '仪表盘', icon: LayoutDashboard },
  { id: 'news', label: '新闻管理', icon: FileText },
  { id: 'teachers', label: '教师管理', icon: Users },
  { id: 'media', label: '媒体库', icon: Image },
  { id: 'settings', label: '系统设置', icon: Settings },
]

function Sidebar({ activeView, onViewChange }: { activeView: string; onViewChange: (v: string) => void }) {
  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    window.location.reload()
  }

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold font-noto tracking-wide">未来小镇</h2>
        <p className="text-xs text-gray-400 mt-1">管理后台</p>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer
                ${isActive
                  ? 'bg-crimson text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          退出登录
        </button>
      </div>
    </aside>
  )
}

/* ────────────────────────────────────────────────
   Dashboard View
   ────────────────────────────────────────────── */

function DashboardView() {
  const stats = [
    { label: '总新闻数', value: '128', icon: FileText, color: 'text-crimson', bg: 'bg-crimson/10' },
    { label: '教师人数', value: '86', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: '页面浏览', value: '12.5K', icon: Eye, color: 'text-green-600', bg: 'bg-green-50' },
    { label: '媒体文件', value: '342', icon: Image, color: 'text-orange-500', bg: 'bg-orange-50' },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">仪表盘</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">最近活动</h3>
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-2 h-2 bg-crimson rounded-full mt-2 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700">{activity.text}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   News Management View
   ────────────────────────────────────────────── */

function NewsManagementView() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = mockNews.filter(
    (n) =>
      n.title.includes(searchTerm) ||
      n.category.includes(searchTerm) ||
      n.author.includes(searchTerm)
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900">新闻管理</h2>
        <button className="inline-flex items-center gap-2 bg-crimson text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-crimson-dark transition-colors cursor-pointer self-start">
          <Plus className="w-4 h-4" />
          添加新闻
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索新闻标题、分类或作者..."
          className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 font-medium text-gray-700">标题</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">分类</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">作者</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">日期</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate">{item.title}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-crimson/10 text-crimson text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.author}</td>
                  <td className="px-6 py-4 text-gray-500">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-gray-500 hover:text-crimson hover:bg-crimson/10 rounded transition-colors cursor-pointer" title="编辑">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer" title="删除">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">没有找到匹配的新闻</div>
        )}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Teacher Management View
   ────────────────────────────────────────────── */

function TeacherManagementView() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = mockTeachers.filter(
    (t) =>
      t.name.includes(searchTerm) ||
      t.department.includes(searchTerm) ||
      t.title.includes(searchTerm)
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900">教师管理</h2>
        <button className="inline-flex items-center gap-2 bg-crimson text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-crimson-dark transition-colors cursor-pointer self-start">
          <Plus className="w-4 h-4" />
          添加教师
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索教师姓名、部门或职称..."
          className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 font-medium text-gray-700">姓名</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">职称</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">部门</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">邮箱</th>
                <th className="text-left px-6 py-4 font-medium text-gray-700">操作</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-gray-600">{item.title}</td>
                  <td className="px-6 py-4 text-gray-600">{item.department}</td>
                  <td className="px-6 py-4 text-gray-500">{item.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-gray-500 hover:text-crimson hover:bg-crimson/10 rounded transition-colors cursor-pointer" title="编辑">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer" title="删除">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">没有找到匹配的教师</div>
        )}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Media Library View
   ────────────────────────────────────────────── */

function MediaLibraryView() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900">媒体库</h2>
        <button className="inline-flex items-center gap-2 bg-crimson text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-crimson-dark transition-colors cursor-pointer self-start">
          <Upload className="w-4 h-4" />
          上传文件
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaPlaceholders.map((media) => (
          <div
            key={media.id}
            className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={media.src}
                alt={media.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2.5">
              <p className="text-xs text-gray-600 truncate">{media.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Settings View
   ────────────────────────────────────────────── */

function SettingsView() {
  const [title, setTitle] = useState('北京十一学校龙樾实验中学')
  const [description, setDescription] = useState('龙樾实验中学是北京市十一学校的一所分校，致力于培养具有中国灵魂、世界眼光的现代公民。')
  const [contact, setContact] = useState('010-8888-6666')

  const handleSave = () => {
    alert('设置已保存')
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">系统设置</h2>

      <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">网站标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">网站描述</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">联系方式</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-crimson/20 focus:border-crimson outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-crimson text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-crimson-dark transition-colors cursor-pointer"
            >
              <Save className="w-4 h-4" />
              保存设置
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────
   Main Admin Component
   ────────────────────────────────────────────── */

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeView, setActiveView] = useState('dashboard')
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (token) {
      setIsLoggedIn(true)
    }
    setChecking(false)
  }, [])

  if (checking) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-gray-100">
        <div className="w-8 h-8 border-3 border-crimson border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isLoggedIn) {
    return <LoginGate onLogin={() => setIsLoggedIn(true)} />
  }

  const currentNav = navItems.find((n) => n.id === activeView)

  return (
    <div className="h-[100dvh] flex flex-row overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 flex-shrink-0">
          <h1 className="text-lg font-bold text-gray-900">
            {currentNav?.label ?? '仪表盘'}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson rounded-full" />
            </button>
            <div className="w-9 h-9 bg-crimson rounded-full flex items-center justify-center text-white text-sm font-medium">
              管
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeView === 'dashboard' && <DashboardView />}
              {activeView === 'news' && <NewsManagementView />}
              {activeView === 'teachers' && <TeacherManagementView />}
              {activeView === 'media' && <MediaLibraryView />}
              {activeView === 'settings' && <SettingsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
