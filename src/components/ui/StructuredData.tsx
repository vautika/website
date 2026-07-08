export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalBusiness', 'LocalBusiness', 'MedicalClinic'],
        '@id': 'https://vautika.in/#organization',
        name: 'Vautika Physiotherapy & Rehabilitation Centre',
        alternateName: 'Vautika Physio',
        url: 'https://vautika.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://vautika.in/images/logo.svg',
        },
        description:
          'Expert physiotherapy, sports rehabilitation, pain management, neuro rehabilitation and advanced therapy solutions in Bhubaneswar, Odisha.',
        telephone: '+917381455744',
        email: 'vautika.info@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No - N2/19, Simpleekare, IRC Village, Nayapalli',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          postalCode: '751015',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '20.2916746',
          longitude: '85.8085293',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '21:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '08:00',
            closes: '13:00',
          },
        ],
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Card',
        areaServed: ['Bhubaneswar', 'Nayapalli', 'IRC Village', 'Odisha'],
        medicalSpecialty: [
          'Orthopedic Rehabilitation',
          'Neuro Rehabilitation',
          'Sports Medicine',
          'Home Based Physiotherapy',
          'Online Virtual Rehabilitation',
          'Pain Management',
        ],
        hasMap: 'https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8',
        sameAs: [
          'https://maps.app.goo.gl/2i7MhmxYRLUcJ6rF8',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '50',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'Physician',
        '@id': 'https://vautika.in/#physician',
        name: 'Dr. Satya Mohanty',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'PT, MPT (MSK)',
        jobTitle: 'Physiotherapist & Sports Medicine Specialist',
        description:
          'MPT in Musculoskeletal Physiotherapy with FIFA Diploma in Sports Medicine. Expert in orthopedic, sports, and neuro rehabilitation.',
        worksFor: {
          '@id': 'https://vautika.in/#organization',
        },
        medicalSpecialty: 'Physical Therapy',
        telephone: '+917381455744',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://vautika.in/#website',
        url: 'https://vautika.in',
        name: 'Vautika Physiotherapy & Rehabilitation Centre',
        description: 'Best Physiotherapy Clinic in Bhubaneswar',
        publisher: {
          '@id': 'https://vautika.in/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://vautika.in/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the clinic timings at Vautika Physiotherapy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vautika Physiotherapy is open Monday to Saturday from 9:00 AM to 9:00 PM, and Sunday from 8:00 AM to 1:00 PM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is Vautika Physiotherapy located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are located at Plot No - N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar, Odisha.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who is the physiotherapist at Vautika?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dr. Satya Mohanty (PT) is our lead physiotherapist with MPT in Musculoskeletal Physiotherapy and Diploma in Sports Medicine from FIFA.',
            },
          },
          {
            '@type': 'Question',
            name: 'What services are offered at Vautika Physiotherapy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer Orthopedic Rehabilitation, Neuro Rehabilitation, Sports Rehabilitation, Home Based Physiotherapy, Online Virtual Rehabilitation, Pain Management, Manual Therapy, Electro Therapy, Laser Therapy, Cupping Therapy, Needling Therapy, and Sports Specific Training.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I book an appointment at Vautika Physiotherapy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can book an appointment by calling us at 7381455744, sending a WhatsApp message, or filling the online appointment form on our website.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  )
}
