const recoveries = [
  {
    condition: 'Back Pain Recovery',
    emoji: '🔙',
    before: {
      title: 'Before Treatment',
      points: ['Constant lower back pain', 'Unable to sit/stand for long', 'Disturbed sleep', 'Limited mobility'],
      color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      label: 'text-red-600 dark:text-red-400',
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
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      label: 'text-green-600 dark:text-green-400',
    },
  },
  {
    condition: 'Sports Injury Recovery',
    emoji: '⚽',
    before: {
      title: 'Before Treatment',
      points: ['Ligament/muscle tear', 'Severe pain & swelling', 'Cannot play sport', 'Fear of re-injury'],
      color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      label: 'text-red-600 dark:text-red-400',
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
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      label: 'text-green-600 dark:text-green-400',
    },
  },
  {
    condition: 'Knee Rehabilitation',
    emoji: '🦵',
    before: {
      title: 'Before Treatment',
      points: ['Knee pain while walking', 'Difficulty climbing stairs', 'Swelling & stiffness', 'Afraid of surgery'],
      color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      label: 'text-red-600 dark:text-red-400',
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
      color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      label: 'text-green-600 dark:text-green-400',
    },
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="section-padding gradient-bg-light dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-300 mb-4">
            Recovery Stories
          </span>
          <h2 className="section-title mb-4">
            Real Recovery{' '}
            <span className="gradient-text">Transformations</span>
          </h2>
          <p className="section-subtitle">
            See how our patients' lives improved with our structured rehabilitation programs.
          </p>
        </div>

        <div className="space-y-12">
          {recoveries.map(({ condition, emoji, before, timeline, after }) => (
            <div key={condition} className="bg-white dark:bg-gray-800 rounded-3xl shadow-card overflow-hidden">
              {/* Title bar */}
              <div className="gradient-bg px-8 py-5 flex items-center gap-3">
                <span className="text-3xl">{emoji}</span>
                <h3 className="font-display font-bold text-white text-xl">{condition}</h3>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Before */}
                  <div className={`border rounded-2xl p-5 ${before.color}`}>
                    <h4 className={`font-display font-bold text-sm uppercase tracking-wider mb-4 ${before.label}`}>
                      {before.title}
                    </h4>
                    <ul className="space-y-2">
                      {before.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-red-500 mt-0.5">✗</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 text-center">
                      Treatment Journey
                    </h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
                      <div className="space-y-4">
                        {timeline.map(({ week, action }, idx) => (
                          <div key={week} className="flex items-start gap-4 relative">
                            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold shrink-0 z-10">
                              {idx + 1}
                            </div>
                            <div className="pt-1">
                              <p className="font-semibold text-xs text-primary-900 dark:text-primary-300">{week}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className={`border rounded-2xl p-5 ${after.color}`}>
                    <h4 className={`font-display font-bold text-sm uppercase tracking-wider mb-4 ${after.label}`}>
                      {after.title}
                    </h4>
                    <ul className="space-y-2">
                      {after.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-green-500 mt-0.5">✓</span>
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
