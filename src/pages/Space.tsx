import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIndicator from "../components/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

interface PhotoItem {
  src: string;
  caption: string;
}

const photos: PhotoItem[] = [
  {
    src: "/space-1.jpg",
    caption: "现代化教学楼 — 宽敞明亮的教室空间",
  },
  {
    src: "/space-2.jpg",
    caption: "图书馆 — 知识的海洋，阅读的乐园",
  },
  {
    src: "/space-3.jpg",
    caption: "实验室 — 探索科学的实践基地",
  },
  {
    src: "/space-4.jpg",
    caption: "艺术中心 — 激发创造力的多元空间",
  },
];

export default function Space() {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const openLightbox = useCallback((photo: PhotoItem) => {
    setActivePhoto(photo);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setActivePhoto(null);
    document.body.style.overflow = "";
  }, []);

  // Keyboard: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation on load
      gsap.from(".hero-text-group", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Section 1: Campus Introduction
      gsap.from(".intro-anim", {
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

      // Gallery photos stagger
      gsap.from(".gallery-photo", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.12,
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
        className="relative min-h-[100dvh] flex items-end overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero-space.jpg)" }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />

        {/* Hero Content — Bottom Left */}
        <div className="hero-text-group relative z-10 p-8 md:p-16 pb-24">
          <p className="font-noto text-sm uppercase tracking-wider text-white/70 mb-2">
            Space 空间环境
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-1">
            Hello, Longyue
          </h1>
          <p className="font-noto text-xl text-white/90 mb-4">初识小镇</p>
          <p className="font-noto text-base text-white/80 max-w-md">
            努力发掘空间的教育意义。
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator />
        </div>
      </section>

      {/* Campus Introduction Section */}
      <section ref={section1Ref} className="bg-white py-24">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          {/* Section Title */}
          <div className="intro-anim mb-4">
            <span className="font-playfair text-crimson text-sm uppercase tracking-widest">
              Campus Environment
            </span>
          </div>
          <h2 className="intro-anim font-noto text-3xl md:text-4xl font-bold text-crimson mb-4">
            空间环境
          </h2>
          <div className="intro-anim w-16 h-1 bg-crimson mx-auto mb-8" />

          {/* Body Text */}
          <p className="intro-anim text-lg text-gray-600 leading-relaxed mb-6">
            北京十一学校龙樾实验中学拥有现代化的校园设施与优美的学习环境。学校建筑设计充分考虑教育功能与美学体验，每一个角落都蕴含着教育的深意。
          </p>
          <p className="intro-anim text-lg text-gray-600 leading-relaxed">
            从宽敞明亮的教学楼到藏书丰富的图书馆，从设备先进的实验室到充满艺术气息的多功能厅，学校为学生提供了多样化的学习空间。我们相信，优质的空间环境能够激发学生的学习热情，培养审美素养，促进全面发展。
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section ref={galleryRef} className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <span className="font-playfair text-crimson text-sm uppercase tracking-widest">
              Photo Gallery
            </span>
            <h2 className="font-noto text-3xl md:text-4xl font-bold text-crimson mt-2 mb-4">
              校园掠影
            </h2>
            <div className="w-16 h-1 bg-crimson mx-auto" />
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="gallery-photo group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-noto text-sm text-gray-600 mt-3 text-center">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && activePhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-[90vw] max-h-[85vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="font-noto text-white text-center mt-4 text-base">
                {activePhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
