import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const valuesList = [
  '改革创新，敢为天下先；',
  '创造适合学生发展的教育，办人民满意的学校；',
  '与共和国一同成长，共和国的利益高于一切；',
  '海纳百川，包容共生；聚天下英才，做英雄事业；',
  '追求卓越，反对平庸，拒绝低劣；',
  '不为高考，赢得高考，追求素质教育与优秀升学成绩的统一实现；',
  '在工作中研究，在研究状态下工作；',
  '学校未来发展：培养——研究型学校；',
  '师德高品位，专业高学识，能力多方位，研究高水平；',
  '干部行为准则：公、勤、谦、坦；',
  '课程改变学校才会改变；',
  '主体性教育：学生能做的，老师不要包办；',
  '优秀做人，成功做事，全面发展，多向成才；',
  '把学校办成教职工心灵的栖所、教师施展才华的舞台、教职工的幸福家园；',
  '不可侵犯的教代会民主权利：信任投票决定校长是否继续任职，满意率评价决定干部是否继续任职，参与制定、修订甚至决定学校重大文件和方案；',
  '敢于否定自我，不断创新发展战略；',
  '生活上可以照顾，工作上不可以照顾；',
  '卓越的领导者是学校最宝贵的财富；',
  '建设国际化学校，培养具有中国灵魂、世界眼光和多元文化理解能力的一流人才；',
  '一心办学，心无旁骛，敬业笃志，乐业奉献。',
]

const principlesList = [
  '坚持主体教育，学生能做的，教师不要包办。',
  '重视日常行为规范落实。重视起始年级、起始学科学生习惯养成的战略作用，梳理不同年级应该强化的不同习惯，逐一落实；要求学生在什么时间干什么事，在什么地方干什么事，干什么事就要干好什么事。关注学生学习与生活细节。',
  '重视教学常规。学科与教研组要全面关注备课、上课、留批作业、课外辅导、成绩考核等教学"五环节"。不断完善与改进教育教学常规，注意用新的科研成果丰富常规。',
  '成功是成功之母。给学生创造更多成功的机会，打造学生的亮点，用成功酿造成功与自信。',
  '实施不被拒绝的教育。兴趣是最好的老师，学校的重大教育活动都尽可能办成学生的节日，并使学生终身难忘，学科教学活动应该充分考虑学生的兴趣。创造条件，努力让教室成为学生最喜欢的地方之一，让课堂教学成为学生最喜欢的活动之一。',
  '坚持多元评价。多几把评价的尺子，就多出一批好学生；形成全面、系统、多元的评价体系。',
  '实施"接力棒计划"。充分发挥党组织和共产党员在接班人培养中的重要作用。',
  '重视学生职业与人生规划。从初中、高中起始年级开始进行职业与人生规划，鼓励学生通过各种方式了解社会，认识自我，明确自己的职业与人生目标，激发学生内在成长的动力。',
  '重视学生情感培养，特别重视学生积极人生态度的培养，重视团队精神、合作意识、良好同伴关系的培养，培养学生学会妥协的意识和能力。',
  '重视班集体建设，立足班风抓校风，遵循班主任岗位优先的原则调配学校人力资源。',
  '重视校园欺负现象的解决，设立"同伴关系日"，营造良好的同伴关系。',
  '敬重教学规律。学校将主要通过学科教学改革，贴近学科学习规律和学生认知规律，以培养学生兴趣和成就感为基础，提高教学质量；学校将通过课程开发、教材整合、教学方式与学习方式更新，使教育教学不断贴近学生的认知规律。',
  '调整教学关系，建设新的课堂文化。课堂是学生学习的地方，是学生的舞台，并非教师展示自我的地方；减少讲和听，增加说与做。学生已经会的不讲，学生自己能够学会的不讲，讲了学生也不会的不讲。从来不提问的学生不一定是没有问题的学生；让每一个问题在学生自己的手底下得到解决；不占用学生自主学习和休息的时间，是对学生的基本尊重。让学生了解教师的教学计划，将教师的教学计划转变为学生的学习计划，让知识树在学生心里扎根。倡导启发式教学，在教学设计特别是问题设计方面狠下工夫，设计并呈现问题的艺术比解答问题的艺术更为重要。',
]

/* ------------------------------------------------------------------ */
/*  ScrollIndicator sub-component                                      */
/* ------------------------------------------------------------------ */

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  About page                                                         */
/* ------------------------------------------------------------------ */

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      /* ---- Hero entrance ---- */
      const heroTl = gsap.timeline()

      heroTl
        .fromTo(
          '.hero-bg',
          { scale: 1.05, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
        )
        .fromTo(
          '.hero-en-word',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08 },
          0.4
        )
        .fromTo(
          '.hero-cn',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          0.7
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          1.0
        )

      /* ---- Section 2: School Introduction ---- */
      gsap.fromTo(
        '.intro-label',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.intro-label',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.intro-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.intro-title',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.intro-p1',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.intro-p1',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.intro-p2',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.intro-p2',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* ---- Section 3: Culture & Values (01) ---- */
      gsap.fromTo(
        '.culture-number',
        { opacity: 0, x: -40 },
        {
          opacity: 0.9,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.culture-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.culture-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.culture-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.culture-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: '.culture-list',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      /* ---- Section 4: Organizational Structure (02) ---- */
      gsap.fromTo(
        '.org-number',
        { opacity: 0, x: -40 },
        {
          opacity: 0.9,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.org-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.org-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.org-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.org-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: '.org-list',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      {/* ============================================================= */}
      {/*  HERO SECTION                                                  */}
      {/* ============================================================= */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        {/* Background image */}
        <div className="hero-bg absolute inset-0">
          <img
            src="/hero-about.jpg"
            alt="学生们穿着校服，佩戴红领巾，站在一起微笑"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] text-center px-6">
          <h1 className="text-white font-playfair font-bold text-[56px] lg:text-[96px] leading-none tracking-[0.02em]">
            <span className="hero-en-word inline-block">A</span>
            <span className="hero-en-word inline-block">b</span>
            <span className="hero-en-word inline-block">o</span>
            <span className="hero-en-word inline-block">u</span>
            <span className="hero-en-word inline-block">t</span>
          </h1>
          <p
            className="hero-cn text-white font-noto text-[24px] lg:text-[36px] font-normal mt-4 tracking-[0.1em]"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}
          >
            关于
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <ScrollIndicator />
        </div>
      </section>

      {/* ============================================================= */}
      {/*  SCHOOL INTRODUCTION SECTION                                   */}
      {/* ============================================================= */}
      <section className="bg-white pt-[128px] pb-[64px]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          <p className="intro-label font-playfair text-[36px] lg:text-[48px] font-normal text-[#999999] mb-2">
            About
          </p>
          <h2 className="intro-title font-noto text-[32px] lg:text-[48px] font-bold text-[#D32027] mb-12">
            关于
          </h2>
          <p className="intro-p1 font-noto text-[18px] lg:text-[20px] font-normal text-[#666666] leading-[1.8] max-w-[800px] mb-8">
            十一龙樾着力于培养志远意诚、思方行圆，即志存高远、诚信笃志、言行规范、思想活跃的社会栋梁和民族脊梁。
          </p>
          <p className="intro-p2 font-noto text-[18px] lg:text-[20px] font-normal text-[#666666] leading-[1.8] max-w-[800px]">
            龙樾是一所没有围墙的学校，我们认为未来学校最显著的特点将是："开放，多元，融通。""未来小镇"就是我们基于十一学校教育体系下对未来学校的一种想象和实践。
          </p>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  CULTURE & VALUES — 01                                         */}
      {/* ============================================================= */}
      <section className="culture-section bg-white py-[96px] border-t border-[#E5E5E5]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          {/* Header with large number */}
          <div className="flex items-start mb-12">
            <span className="culture-number font-playfair text-[72px] lg:text-[120px] font-bold text-[#D32027] leading-none mr-4 lg:mr-8 flex-shrink-0">
              01
            </span>
            <h2 className="culture-header font-noto text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] pt-4 lg:pt-6">
              文化与价值观
            </h2>
          </div>

          {/* Values list */}
          <ol className="culture-list max-w-[900px] space-y-0">
            {valuesList.map((item, i) => (
              <li
                key={i}
                className="culture-item font-noto text-[16px] lg:text-[18px] text-[#666666] leading-[2.0]"
                style={{
                  textIndent: '-2em',
                  paddingLeft: '2em',
                }}
              >
                <span className="font-bold text-[#D32027]">{i + 1}．</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  ORGANIZATIONAL STRUCTURE — 02                                  */}
      {/* ============================================================= */}
      <section className="org-section bg-white py-[96px] border-t border-[#E5E5E5]">
        <div className="max-w-page mx-auto px-6 lg:px-20">
          {/* Header with large number */}
          <div className="flex items-start mb-12">
            <span className="org-number font-playfair text-[72px] lg:text-[120px] font-bold text-[#D32027] leading-none mr-4 lg:mr-8 flex-shrink-0">
              02
            </span>
            <div className="org-header pt-4 lg:pt-6">
              <p className="font-noto text-[18px] font-normal text-[#999999] mb-1">
                文化与价值观
              </p>
              <h2 className="font-noto text-[28px] lg:text-[36px] font-bold text-[#1A1A1A]">
                师生导向 —
              </h2>
            </div>
          </div>

          {/* Principles list */}
          <ol className="org-list max-w-[900px] space-y-0">
            {principlesList.map((item, i) => (
              <li
                key={i}
                className="org-item font-noto text-[16px] lg:text-[18px] text-[#666666] leading-[2.0]"
                style={{
                  textIndent: '-2em',
                  paddingLeft: '2em',
                }}
              >
                <span className="font-bold text-[#D32027]">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
