import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Physiotherapy Blog | Vautika Physiotherapy Bhubaneswar',
  description:
    'Expert physiotherapy articles and health tips from Dr. Satya Mohanty. Learn about back pain, sports injuries, rehabilitation, and more.',
  alternates: { canonical: 'https://vautika.in/blog/' },
}

const posts = [
  {
    slug: 'best-exercises-back-pain',
    title: 'Best Exercises for Back Pain Relief at Home',
    excerpt: 'Chronic lower back pain affects millions of people. Here are clinically proven exercises you can do at home to reduce pain and strengthen your back.',
    category: 'Back Pain',
    date: '2024-10-15',
    readTime: '6 min read',
    emoji: '🔙',
  },
  {
    slug: 'physiotherapy-sports-injuries',
    title: 'How Physiotherapy Helps Sports Injuries Heal Faster',
    excerpt: 'Sports injuries can sideline athletes for weeks or months. Discover how evidence-based physiotherapy accelerates recovery and helps you return stronger.',
    category: 'Sports Rehab',
    date: '2024-10-10',
    readTime: '5 min read',
    emoji: '⚽',
  },
  {
    slug: 'knee-pain-treatment-guide',
    title: 'Knee Pain: Causes, Treatment & Prevention Guide',
    excerpt: 'Knee pain is one of the most common musculoskeletal complaints. This comprehensive guide covers all causes, physiotherapy treatments, and prevention strategies.',
    category: 'Knee Pain',
    date: '2024-10-05',
    readTime: '8 min read',
    emoji: '🦵',
  },
  {
    slug: 'post-surgery-rehabilitation',
    title: 'Post-Surgery Rehabilitation: What to Expect',
    excerpt: 'After orthopedic surgery, rehabilitation is as important as the operation itself. Learn what to expect during your recovery journey and how to maximize outcomes.',
    category: 'Rehabilitation',
    date: '2024-09-28',
    readTime: '7 min read',
    emoji: '🏥',
  },
  {
    slug: 'common-causes-neck-pain',
    title: 'Common Causes of Neck Pain & How to Fix Them',
    excerpt: 'From poor posture to tech neck, cervical spondylosis to muscle tension — we explain the most common causes of neck pain and the most effective treatments.',
    category: 'Neck Pain',
    date: '2024-09-20',
    readTime: '5 min read',
    emoji: '🔝',
  },
  {
    slug: 'benefits-manual-therapy',
    title: 'Benefits of Manual Therapy in Physiotherapy',
    excerpt: 'Manual therapy — hands-on treatment by a skilled physiotherapist — can dramatically reduce pain and restore mobility. Learn about the science and techniques.',
    category: 'Manual Therapy',
    date: '2024-09-15',
    readTime: '4 min read',
    emoji: '🤲',
  },
  {
    slug: 'physiotherapy-senior-citizens',
    title: 'Physiotherapy for Senior Citizens: A Complete Guide',
    excerpt: 'As we age, maintaining mobility and independence becomes crucial. Learn how physiotherapy helps seniors stay active, prevent falls, and manage chronic conditions.',
    category: 'Senior Care',
    date: '2024-09-08',
    readTime: '6 min read',
    emoji: '👴',
  },
]

const categories = ['All', 'Back Pain', 'Sports Rehab', 'Knee Pain', 'Rehabilitation', 'Neck Pain', 'Manual Therapy', 'Senior Care']

export default function BlogPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Health Blog</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Physiotherapy Insights & Health Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Expert articles from Dr. Satya Mohanty on physiotherapy, rehabilitation, and living pain-free.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-primary-900 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-primary-900 hover:text-primary-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <div className="mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="gradient-bg p-10 flex items-center justify-center text-center text-white min-h-64">
                <div>
                  <span className="text-6xl mb-4 block">{posts[0].emoji}</span>
                  <span className="badge bg-white/20 text-white">{posts[0].category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="badge bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
                  Featured Article
                </span>
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4 leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(posts[0].date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {posts[0].readTime}
                  </span>
                </div>
                <Link
                  href="/contact/"
                  className="btn-primary inline-flex items-center gap-2 self-start"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map(({ slug, title, excerpt, category, date, readTime, emoji }) => (
            <article
              key={slug}
              className="card bg-white dark:bg-gray-800 overflow-hidden group"
            >
              <div className="gradient-bg-light dark:bg-gray-700 p-8 text-center">
                <span className="text-4xl">{emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 text-xs">
                    {category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-3 leading-snug group-hover:text-primary-900 dark:group-hover:text-primary-300 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 gradient-bg rounded-3xl p-10 text-white text-center">
          <h2 className="font-display font-bold text-2xl mb-3">
            Want More Health Tips?
          </h2>
          <p className="text-white/80 mb-6">
            Book a consultation and get personalized advice for your specific condition.
          </p>
          <Link href="/appointment/" className="btn-accent inline-block">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
