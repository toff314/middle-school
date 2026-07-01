import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "../components/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

const educationalGoals = [
  "社会责任 — 关注社会问题，积极参与社区服务",
  "追求真理 — 保持好奇心，勇于探索未知",
  "与人和善 — 尊重他人，善于合作沟通",
  "自省悟达 — 善于反思，不断提升自我",
  "相信梦想 — 敢于追梦，勇于实现理想",
];

const orgStructure = [
  { title: "校长室", desc: "统筹学校整体发展与战略规划" },
  { title: "教学管理中心", desc: "负责课程设置、教学研究与质量评估" },
  { title: "学生成长中心", desc: "关注学生心理健康与全面发展" },
  { title: "教师发展中心", desc: "支持教师专业成长与培训" },
  { title: "行政服务中心", desc: "提供后勤保障与日常运营管理" },
  { title: "家校共育中心", desc: "促进家校沟通与协同育人" },
  { title: "信息技术中心", desc: "推进教育信息化与数字化转型" },
  { title: "课程研发中心", desc: "开发特色课程与创新教学模式" },
];

export default function Life() {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation on load
      gsap.from(".hero-title-en", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(".hero-title-cn", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Section 1: Educational Philosophy
      gsap.from(".edu-anim", {
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Goal items stagger
      gsap.from(".goal-item", {
        scrollTrigger: {
          trigger: ".goals-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Section 2: Organizational Structure
      gsap.from(".org-anim", {
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".org-card", {
        scrollTrigger: {
          trigger: ".org-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-life.jpg)" }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="hero-title-en font-playfair italic text-5xl md:text-7xl mb-4">
            Life itself
          </h1>
          <p className="hero-title-cn font-noto text-2xl md:text-3xl tracking-widest">
            生活方式
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator />
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section ref={section1Ref} className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Section Title */}
          <div className="edu-anim flex items-baseline gap-4 mb-8">
            <span className="font-playfair text-crimson text-[80px] leading-none font-light">
              01
            </span>
            <h2 className="font-noto text-3xl md:text-4xl font-bold text-crimson">
              学生培养目标
            </h2>
          </div>

          {/* Body Text */}
          <p className="edu-anim text-lg text-gray-600 leading-relaxed mb-12">
            基于真实问题解决的项目式学习、研究性学习，让学生关注社会、服务社区。我们更希望孩子成为一个有社会责任感、追求真理、与人和善、自省悟达、相信梦想的人。在龙樾，每一位学生都是独特的个体，我们尊重差异、包容多元，为学生提供个性化的成长路径。学校致力于创造一个开放、包容的学习环境，让学生在安全、自由的氛围中探索自我、发展潜能。
          </p>

          {/* Goal Items */}
          <div className="goals-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationalGoals.map((goal, index) => (
              <div
                key={index}
                className="goal-item bg-gray-50 rounded-lg p-5 border-l-4 border-crimson hover:shadow-md transition-shadow duration-300"
              >
                <p className="font-noto text-gray-700 text-base">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section ref={section2Ref} className="bg-gray-50 py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Section Title */}
          <div className="org-anim flex items-baseline gap-4 mb-4">
            <span className="font-playfair text-crimson text-[80px] leading-none font-light">
              02
            </span>
            <h2 className="font-noto text-3xl md:text-4xl font-bold text-crimson">
              组织架构
            </h2>
          </div>

          <p className="org-anim text-lg text-gray-500 mb-12 max-w-[600px]">
            科学合理的组织架构，保障学校高效运转与教育质量持续提升
          </p>

          {/* Org Cards Grid */}
          <div className="org-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orgStructure.map((item, index) => (
              <div
                key={index}
                className="org-card bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center mb-4">
                  <span className="font-playfair text-crimson text-lg font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-noto text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="font-noto text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
