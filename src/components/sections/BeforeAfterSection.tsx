const recoveries = [
  {
    condition: 'Back Pain Recovery',
    emoji: '🔙',
    before: {
      title: 'Before Treatment',
      points: ['Constant lower back pain', 'Unable to sit/stand for long', 'Disturbed sleep', 'Limited mobility'],
      color: 'bg-red-50/40 border-red-100',
      label: 'text-red-700',
    },
    timeline: [
      { week: 'Week 1–2', action: 'Assessment & pain management' },
      { week: 'Week 3–4', action: 'Manual therapy & electrotherapy' },
      { week: 'Week 5–8', action: 'Core strengthening exercises' },
      { week: 'Week 8+', action: 'Return to full activity' },
    ],
    after: {
      title: 'After Treatment',
      points: ['Pain-free daily activities', 'Full range of motion', 'Quality sleep restored', 'Back to work & sport'],
      color: 'bg-emerald-50/40 border-emerald-100',
      label: 'text-emerald-700',
    },
  },
  {
    condition: 'Sports Injury Recovery',
    emoji: '⚽',
    before: {
      title: 'Before Treatment',
      points: ['Ligament/muscle tear', 'Severe pain & swelling', 'Cannot play sport', 'Fear of re-injury'],
      color: 'bg-red-50/40 border-red-100',
      label: 'text-red-700',
    },
    timeline: [
      { week: 'Day 1–7', action: 'RICE protocol & acute management' },
      { week: 'Week 2–4', action: 'Swelling reduction & gentle ROM' },
      { week: 'Week 4–8', action: 'Strength & stability training' },
      { week: 'Week 8+', action: 'Sport-specific return program' },
    ],
    after: {
      title: 'After Treatment',
      points: ['Full athletic performance', 'Stronger than before', 'Injury prevention skills', 'Confident return to sport'],
      color: 'bg-emerald-50/40 border-emerald-100',
      label: 'text-emerald-700',
    },
  },
  {
    condition: 'Knee Rehabilitation',
    emoji: '🦵',
    before: {
      title: 'Before Treatment',
      points: ['Knee pain while walking', 'Difficulty climbing stairs', 'Swelling & stiffness', 'Afraid of surgery'],
      color: 'bg-red-50/40 border-red-100',
      label: 'text-red-700',
    },
    timeline: [
      { week: 'Week 1–2', action: 'Pain & swelling management' },
      { week: 'Week 2–4', action: 'Gentle mobilization & laser therapy' },
      { week: 'Week 4–6', action: 'Quad/hamstring strengthening' },
      { week: 'Week 6+', action: 'Functional training & discharge' },
    ],
    after: {
      title: 'After Treatment',
      points: ['Pain-free walking & stairs', 'Normal knee function', 'Avoided surgery', 'Independent & active life'],
      color: 'bg-emerald-50/40 border-emerald-100',
      label: 'text-emerald-700',
    },
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="badge mb-4">Recovery Stories</span>
          <h2 className="section-title mb-4">
            Real Recovery <span className="font-medium italic text-secondary-700">Transformations</span>
          </h2>
          <p className="section-subtitle">
            See how our structured rehabilitation programs help patients restore mobility and regain their quality of life.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {recoveries.map(({ condition, emoji, before, timeline, after }) => (
            <div key={condition} className="bg-[#FAFAF9] rounded-3xl border border-stone-200/50 shadow-elegant overflow-hidden">
              
              {/* Title bar */}
              <div className="bg-primary-900 px-8 py-5 flex items-center gap-3">
                <span className="text-2xl">{emoji}</span>
                <h3 className="font-display font-bold text-white text-lg">{condition}</h3>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  
                  {/* Before card */}
                  <div className={`border rounded-2xl p-5 ${before.color}`}>
                    <h4 className={`font-sans font-bold text-xs uppercase tracking-widest mb-4 ${before.label}`}>
                      {before.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {before.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <span className="text-red-500 font-bold mt-0.5">✗</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Journey timeline */}
                  <div className="relative px-2">
                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 mb-6 text-center">
                      Treatment Journey
                    </h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-stone-200" />
                      <div className="space-y-5">
                        {timeline.map(({ week, action }, idx) => (
                          <div key={week} className="flex items-start gap-4 relative">
                            <div className="w-8 h-8 rounded-full bg-secondary-700 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                              {idx + 1}
                            </div>
                            <div className="pt-0.5">
                              <p className="font-bold text-xs text-primary-900">{week}</p>
                              <p className="text-xs text-slate-500 font-medium mt-0.5">{action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* After card */}
                  <div className={`border rounded-2xl p-5 ${after.color}`}>
                    <h4 className={`font-sans font-bold text-xs uppercase tracking-widest mb-4 ${after.label}`}>
                      {after.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {after.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
