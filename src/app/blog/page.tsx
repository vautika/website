'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, ArrowRight, PenLine, CheckCircle, XCircle, EyeOff, Send, Lock, Trash2, Shield } from 'lucide-react'
import Link from 'next/link'
import { db } from '@/lib/firebase'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore'

type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  emoji: string
  author: string
  status: 'approved' | 'pending' | 'rejected'
  isStaff?: boolean
}

const initialPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-exercises-back-pain',
    title: 'Best Exercises for Back Pain Relief at Home',
    excerpt: 'Chronic lower back pain affects millions of people. Here are clinically proven exercises you can do at home to reduce pain and strengthen your back.',
    category: 'Back Pain',
    date: '2024-10-15',
    readTime: '6 min read',
    emoji: '🔙',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
  {
    id: '2',
    slug: 'physiotherapy-sports-injuries',
    title: 'How Physiotherapy Helps Sports Injuries Heal Faster',
    excerpt: 'Sports injuries can sideline athletes for weeks or months. Discover how evidence-based physiotherapy accelerates recovery and helps you return stronger.',
    category: 'Sports Rehab',
    date: '2024-10-10',
    readTime: '5 min read',
    emoji: '⚽',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
  {
    id: '3',
    slug: 'knee-pain-treatment-guide',
    title: 'Knee Pain: Causes, Treatment & Prevention Guide',
    excerpt: 'Knee pain is one of the most common musculoskeletal complaints. This comprehensive guide covers all causes, physiotherapy treatments, and prevention strategies.',
    category: 'Knee Pain',
    date: '2024-10-05',
    readTime: '8 min read',
    emoji: '🦵',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
  {
    id: '4',
    slug: 'post-surgery-rehabilitation',
    title: 'Post-Surgery Rehabilitation: What to Expect',
    excerpt: 'After orthopedic surgery, rehabilitation is as important as the operation itself. Learn what to expect during your recovery journey.',
    category: 'Rehabilitation',
    date: '2024-09-28',
    readTime: '7 min read',
    emoji: '🏥',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
  {
    id: '5',
    slug: 'common-causes-neck-pain',
    title: 'Common Causes of Neck Pain & How to Fix Them',
    excerpt: 'From poor posture to tech neck, cervical spondylosis to muscle tension — we explain the most common causes of neck pain and the most effective treatments.',
    category: 'Neck Pain',
    date: '2024-09-20',
    readTime: '5 min read',
    emoji: '🔝',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
  {
    id: '6',
    slug: 'benefits-manual-therapy',
    title: 'Benefits of Manual Therapy in Physiotherapy',
    excerpt: 'Manual therapy — hands-on treatment by a skilled physiotherapist — can dramatically reduce pain and restore mobility.',
    category: 'Manual Therapy',
    date: '2024-09-15',
    readTime: '4 min read',
    emoji: '🤲',
    author: 'Dr. Satya Mohanty',
    status: 'approved',
    isStaff: true,
  },
]

const CATEGORIES = ['All', 'Back Pain', 'Sports Rehab', 'Knee Pain', 'Rehabilitation', 'Neck Pain', 'Manual Therapy', 'Senior Care', 'General Health', 'Online Physiotherapy']
const ADMIN_PASSWORD = 'vautika2024'

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return dateStr
  }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [adminMode, setAdminMode] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [adminError, setAdminError] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    category: 'General Health',
    author: '',
    emoji: '✍️',
    content: '',
  })

  // Load from Firebase
  useEffect(() => {
    async function loadPosts() {
      try {
        const qSnap = await getDocs(query(collection(db, 'blog_posts'), orderBy('date', 'desc')))
        const dbPosts: BlogPost[] = []
        qSnap.forEach((doc) => {
          const data = doc.data()
          dbPosts.push({
            id: doc.id,
            slug: data.slug || '',
            title: data.title || '',
            excerpt: data.excerpt || '',
            category: data.category || '',
            date: data.date || '',
            readTime: data.readTime || '',
            emoji: data.emoji || '',
            author: data.author || '',
            status: data.status || 'pending',
            isStaff: false,
          })
        })
        // Staff/Initial posts are hardcoded and loaded first, then firebase user-submitted posts
        setPosts([...initialPosts, ...dbPosts])
      } catch (err) {
        console.error('Firebase load error: ', err)
      }
    }
    loadPosts()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim() || !form.excerpt.trim() || !form.author.trim()) return

    const newPostData = {
      slug: form.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      title: form.title,
      excerpt: form.excerpt,
      category: form.category,
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.max(3, Math.ceil(form.content.length / 1000))} min read`,
      emoji: form.emoji,
      author: form.author,
      status: 'pending',
    }

    try {
      // Add document to Firebase Firestore
      const docRef = await addDoc(collection(db, 'blog_posts'), newPostData)
      const newPost: BlogPost = {
        id: docRef.id,
        ...newPostData,
        status: 'pending',
        isStaff: false,
      }
      setPosts(prev => [...prev, newPost])
      setForm({ title: '', excerpt: '', category: 'General Health', author: '', emoji: '✍️', content: '' })
      setShowForm(false)
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (err) {
      console.error('Error adding post to Firebase: ', err)
    }
  }

  const handleApprove = async (id: string) => {
    try {
      const docRef = doc(db, 'blog_posts', id)
      await updateDoc(docRef, { status: 'approved' })
      setPosts(prev => prev.map(p => p.id === id ? { ...p, status: 'approved' as const } : p))
    } catch (err) {
      console.error('Error approving document: ', err)
    }
  }

  const handleReject = async (id: string) => {
    try {
      const docRef = doc(db, 'blog_posts', id)
      await updateDoc(docRef, { status: 'rejected' })
      setPosts(prev => prev.map(p => p.id === id ? { ...p, status: 'rejected' as const } : p))
    } catch (err) {
      console.error('Error rejecting document: ', err)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const docRef = doc(db, 'blog_posts', id)
      await deleteDoc(docRef)
      setPosts(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      console.error('Error deleting document: ', err)
    }
  }

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setAdminMode(true)
      setShowAdminLogin(false)
      setAdminPassword('')
      setAdminError(false)
    } else {
      setAdminError(true)
    }
  }

  const approvedPosts = posts.filter(p => p.status === 'approved')
  const pendingPosts = posts.filter(p => p.status === 'pending')
  const filteredPosts = approvedPosts.filter(
    p => activeCategory === 'All' || p.category === activeCategory
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="gradient-bg py-20 md:py-24">
        <div className="container-custom text-white text-center">
          <span className="badge bg-white/20 text-white mb-4">Health Blog</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Physiotherapy Insights & Health Tips
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Expert articles from Dr. Satya Mohanty and the Vautika community on physiotherapy, rehabilitation, and living pain-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 text-primary-900 rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-accent-400 transition-all hover:-translate-y-0.5"
            >
              <PenLine className="w-4 h-4" />
              Write a Blog
            </button>
            <button
              onClick={() => setShowAdminLogin(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-white/20 transition-all"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">

        {/* Success message */}
        {submitSuccess && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-4">
            <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
            <div>
              <p className="font-bold text-emerald-800">Blog Submitted Successfully!</p>
              <p className="text-sm text-emerald-700">Your article is pending review. It will appear publicly once approved by our team. Thank you!</p>
            </div>
          </div>
        )}

        {/* Admin Login Modal */}
        {showAdminLogin && !adminMode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display font-bold text-xl text-primary-900">Admin Access</h2>
                <p className="text-sm text-slate-500 mt-1">Enter admin password to manage blog posts</p>
              </div>
              <input
                type="password"
                placeholder="Admin password"
                value={adminPassword}
                onChange={e => setAdminPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAdminLogin()}
                className={`w-full px-4 py-3 rounded-xl border text-sm mb-3 outline-none focus:ring-2 focus:ring-primary-900 ${adminError ? 'border-red-400 bg-red-50' : 'border-stone-200'}`}
              />
              {adminError && <p className="text-xs text-red-600 mb-3">Incorrect password. Please try again.</p>}
              <div className="flex gap-3">
                <button onClick={() => { setShowAdminLogin(false); setAdminError(false); setAdminPassword('') }} className="flex-1 py-3 border border-stone-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
                <button onClick={handleAdminLogin} className="flex-1 py-3 bg-primary-900 text-white rounded-xl text-sm font-bold hover:bg-primary-800 transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Admin Panel */}
        {adminMode && (
          <div className="mb-10 bg-white rounded-3xl border border-stone-200 shadow-card overflow-hidden">
            <div className="bg-primary-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent-400" />
                <h2 className="font-bold text-white text-sm">Admin Panel — Blog Management</h2>
                {pendingPosts.length > 0 && (
                  <span className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    {pendingPosts.length} Pending
                  </span>
                )}
              </div>
              <button
                onClick={() => setAdminMode(false)}
                className="text-white/60 hover:text-white text-xs font-bold flex items-center gap-1"
              >
                <EyeOff className="w-3.5 h-3.5" />
                Exit Admin
              </button>
            </div>
            <div className="p-6">
              {posts.filter(p => !p.isStaff).length === 0 ? (
                <p className="text-slate-500 text-sm text-center py-8">No user-submitted posts yet.</p>
              ) : (
                <div className="space-y-4">
                  {posts.filter(p => !p.isStaff).map((post) => (
                    <div key={post.id} className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border ${
                      post.status === 'pending' ? 'bg-amber-50 border-amber-200'
                      : post.status === 'approved' ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            post.status === 'pending' ? 'bg-amber-200 text-amber-800'
                            : post.status === 'approved' ? 'bg-emerald-200 text-emerald-800'
                            : 'bg-red-200 text-red-800'
                          }`}>
                            {post.status}
                          </span>
                          <span className="text-xs text-slate-400">{post.category}</span>
                        </div>
                        <p className="font-semibold text-sm text-primary-900 truncate">{post.title}</p>
                        <p className="text-xs text-slate-500">By {post.author} • {formatDate(post.date)}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {post.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(post.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition-colors"
                            >
                              <CheckCircle className="w-3.5 h-3.5" /> Approve
                            </button>
                            <button
                              onClick={() => handleReject(post.id)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors"
                            >
                              <XCircle className="w-3.5 h-3.5" /> Reject
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-slate-600 text-white text-xs font-bold rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Write Blog Form */}
        {showForm && (
          <div className="mb-12 bg-white rounded-3xl border border-stone-200 shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-primary-900 to-secondary-700 px-6 py-4">
              <h2 className="font-bold text-white flex items-center gap-2">
                <PenLine className="w-5 h-5 text-accent-400" />
                Write & Submit a Blog Article
              </h2>
              <p className="text-white/60 text-xs mt-0.5">Articles are reviewed before being published publicly.</p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Article Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. My Recovery Journey After Knee Surgery"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.author}
                    onChange={e => setForm({ ...form, author: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Category</label>
                  <select
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 bg-white"
                  >
                    {CATEGORIES.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Article Emoji</label>
                  <input
                    type="text"
                    placeholder="e.g. 💪 🏃 🩺"
                    value={form.emoji}
                    onChange={e => setForm({ ...form, emoji: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900"
                    maxLength={4}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Short Summary / Excerpt *</label>
                <textarea
                  placeholder="A 2-3 sentence summary of your article..."
                  value={form.excerpt}
                  onChange={e => setForm({ ...form, excerpt: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Full Article Content</label>
                <textarea
                  placeholder="Write your full article here. Share your experience, tips, or health information..."
                  value={form.content}
                  onChange={e => setForm({ ...form, content: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-primary-900 resize-y"
                />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-900 text-white rounded-xl font-bold text-sm font-sans tracking-wider uppercase hover:bg-primary-800 transition-all hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Submit for Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-7 py-3.5 border border-stone-200 text-slate-600 rounded-xl font-bold text-sm font-sans uppercase hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 rounded-full font-bold font-sans transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-stone-200 hover:border-primary-900 hover:text-primary-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {filteredPosts.length > 0 && (
          <div className="mb-10">
            <div className="bg-white rounded-3xl shadow-card overflow-hidden border border-stone-200">
              <div className="grid md:grid-cols-2">
                <div className="gradient-bg p-10 flex items-center justify-center text-center text-white min-h-64">
                  <div>
                    <span className="text-7xl mb-4 block">{filteredPosts[0].emoji}</span>
                    <span className="badge bg-white/20 text-white">{filteredPosts[0].category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="badge bg-accent-50 text-accent-600 mb-4">
                    ✨ Featured Article
                  </span>
                  <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 leading-tight">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(filteredPosts[0].date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {filteredPosts[0].readTime}
                    </span>
                    <span className="font-medium text-primary-900">By {filteredPosts[0].author}</span>
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
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 1 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(({ id, title, excerpt, category, date, readTime, emoji, author }) => (
              <article
                key={id}
                className="bg-white rounded-2xl shadow-card overflow-hidden group border border-stone-200/60 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="gradient-bg-light p-8 text-center">
                  <span className="text-4xl">{emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge bg-primary-50 text-primary-900 text-xs">
                      {category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-base mb-3 leading-snug group-hover:text-primary-900 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {readTime}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">By {author}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">📝</p>
            <p className="font-display font-bold text-xl text-primary-900 mb-2">No articles in this category yet</p>
            <p className="text-slate-500 text-sm mb-6">Be the first to write about this topic!</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-xl font-bold text-sm font-sans uppercase hover:bg-primary-800 transition-all"
            >
              <PenLine className="w-4 h-4" />
              Write an Article
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 gradient-bg rounded-3xl p-10 text-white text-center">
          <h2 className="font-display font-bold text-2xl mb-3">
            Share Your Recovery Story!
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Recovered from an injury? Have health tips to share? Write a blog and inspire others on their healing journey. All submissions are reviewed before publishing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-500 text-primary-900 rounded-xl font-bold text-sm font-sans uppercase hover:bg-accent-400 transition-all hover:-translate-y-0.5"
            >
              <PenLine className="w-4 h-4" />
              Write a Blog
            </button>
            <Link href="/appointment/" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/20 border border-white/30 text-white rounded-xl font-bold text-sm font-sans uppercase hover:bg-white/30 transition-all hover:-translate-y-0.5">
              Book Consultation
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
