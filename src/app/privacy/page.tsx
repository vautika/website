import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vautika Physiotherapy Bhubaneswar',
  description: 'Privacy Policy for Vautika Physiotherapy & Rehabilitation Centre. Learn how we protect your personal and medical data.',
  alternates: { canonical: 'https://vautika.in/privacy/' },
}

export default function PrivacyPage() {
  const date = 'January 1, 2024'
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="gradient-bg py-20">
        <div className="container-custom text-white text-center">
          <h1 className="font-display font-bold text-4xl mb-3">Privacy Policy</h1>
          <p className="text-white/70">Last updated: {date}</p>
        </div>
      </div>

      <div className="container-custom py-16 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-10">
          {[
            {
              title: '1. Introduction',
              content: `Vautika Physiotherapy & Rehabilitation Centre ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By using our website or services, you agree to the terms of this Privacy Policy.`,
            },
            {
              title: '2. Information We Collect',
              content: `We may collect the following types of information:\n\n**Personal Identification Information:** Name, email address, phone number, age, gender, and other details you provide when booking an appointment or contacting us.\n\n**Medical Information:** Problem descriptions, medical history, and treatment details shared with us for the purpose of physiotherapy consultation and treatment. This information is treated with the highest confidentiality in accordance with medical ethics.\n\n**Usage Data:** Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.\n\n**Communication Data:** Records of communications you send us via email, phone, or WhatsApp.`,
            },
            {
              title: '3. How We Use Your Information',
              content: `We use the information we collect for the following purposes:\n\n• To schedule and manage your physiotherapy appointments\n• To provide personalized physiotherapy treatment and care\n• To communicate with you about your appointments and treatment\n• To send you health tips and relevant information (with your consent)\n• To improve our website and services\n• To comply with legal and regulatory requirements\n• To respond to your inquiries and support requests\n\nWe will never sell, rent, or trade your personal information to third parties for marketing purposes.`,
            },
            {
              title: '4. Patient Data Protection',
              content: `As a healthcare provider, we take the protection of your medical and health information extremely seriously:\n\n• All patient medical records are stored securely and accessed only by authorized clinical staff\n• We comply with applicable Indian healthcare data protection laws\n• Medical information is never shared with third parties without your explicit consent, except as required by law\n• We maintain strict confidentiality of all patient-therapist communications\n• Patient data is retained only as long as necessary for treatment and legal requirements`,
            },
            {
              title: '5. Cookies and Tracking',
              content: `Our website may use cookies and similar tracking technologies to improve your browsing experience. Cookies are small data files stored on your device. We use:\n\n• **Essential Cookies:** Required for the website to function properly\n• **Analytics Cookies:** Help us understand how visitors interact with our website (e.g., Google Analytics)\n• **Preference Cookies:** Remember your settings and preferences\n\nYou can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.`,
            },
            {
              title: '6. Third-Party Services',
              content: `Our website may contain links to third-party services such as Google Maps and WhatsApp. These services have their own privacy policies, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you use through our website.`,
            },
            {
              title: '7. Data Security',
              content: `We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: '8. Your Rights',
              content: `You have the following rights regarding your personal information:\n\n• **Access:** Request a copy of the personal information we hold about you\n• **Correction:** Request correction of inaccurate or incomplete information\n• **Deletion:** Request deletion of your personal information (subject to legal requirements)\n• **Portability:** Request transfer of your data in a structured, readable format\n• **Withdraw Consent:** Withdraw consent for marketing communications at any time\n\nTo exercise any of these rights, please contact us at vautika.info@gmail.com`,
            },
            {
              title: '9. Children\'s Privacy',
              content: `We provide pediatric physiotherapy services, and in such cases, we collect information about minors with the explicit consent of parents or legal guardians. We do not knowingly collect personal information from children under 18 without parental consent. Parents may contact us to review, update, or delete their child's information.`,
            },
            {
              title: '10. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page with an updated date. We encourage you to review this policy periodically.`,
            },
            {
              title: '11. Contact Us',
              content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:\n\n**Vautika Physiotherapy & Rehabilitation Centre**\nPlot No - N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar, Odisha\n\nEmail: vautika.info@gmail.com\nPhone: 7381455744`,
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                {title}
              </h2>
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-sm">
                {content.split('\n').map((line, i) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold text-gray-900 dark:text-white mt-3">{line.replace(/\*\*/g, '')}</p>
                  }
                  if (line.startsWith('• ') || line.startsWith('* ')) {
                    return <p key={i} className="ml-4 mt-1">• {line.slice(2)}</p>
                  }
                  if (line === '') return <br key={i} />
                  // Handle inline bold **text**
                  const parts = line.split(/\*\*(.*?)\*\*/)
                  if (parts.length > 1) {
                    return (
                      <p key={i} className="mt-2">
                        {parts.map((part, j) =>
                          j % 2 === 1 ? <strong key={j} className="text-gray-900 dark:text-white">{part}</strong> : part
                        )}
                      </p>
                    )
                  }
                  return <p key={i} className="mt-2">{line}</p>
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
