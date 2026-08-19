/* =====================================================
   Whirl & Wonder — Services Data
   Used by services.html and service-details.html
   ===================================================== */

var SERVICES_DATA = [
  {
    id: 'open-play',
    title: 'Open Play Sessions',
    short: 'Drop in anytime during our open hours. Kids explore age-appropriate zones at their own pace.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    image: '../../assets/img7.jpg',
    description: 'Our Open Play sessions give your little ones the freedom to explore all four of our carefully designed play zones at their own pace. Each zone is tailored to specific age groups, ensuring every child finds activities that match their developmental stage. From the gentle sensory walls of The Cocoon for babies to the thrilling climbing wall of The Workshop for older kids, open play is where spontaneous discovery happens.',
    features: [
      'Access to all four age-graded play zones',
      'Supervised by CPR-certified floor hosts',
      'Sock-only policy for hygiene',
      'Hourly sanitization of all surfaces',
      'Parent seating with clear sightlines',
      'Nursing nook available in The Cocoon zone'
    ],
    faqs: [
      { q: 'What ages are welcome?', a: 'We welcome children from 0 to 12 years. Each zone is designed for a specific age range: The Cocoon (0-2), The Meadow (2-4), The Skyfort (4-8), and The Workshop (8-12).' },
      { q: 'Can my child move between zones?', a: 'Yes! Siblings can hop between rooms together. Kids can also move freely if they fall in overlapping age ranges.' },
      { q: 'Do I need to book in advance?', a: 'Walk-ins are welcome subject to capacity. Members get 14-day advance booking priority. Same-day reservations close 1 hour before slot start.' },
      { q: 'What should my child wear?', a: 'Comfortable play clothes and grip socks (we provide socks if you forget). No shoes inside the play areas.' }
    ],
    pricing: [
      { tier: 'Single visit', price: '$14', per: 'per child', note: 'Free under 12 months', featured: false },
      { tier: '3-Visit Pass', price: '$36', per: 'per child', note: 'Save $6 total', featured: false },
      { tier: '10-Visit Pass', price: '$110', per: 'per child', note: 'Save $30 total', featured: true }
    ]
  },
  {
    id: 'birthday-parties',
    title: 'Birthday Party Packages',
    short: 'Stress-free celebrations with private studio hire, themed setup, and dedicated hosts.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    image: '../../assets/birthday-decor.jpg',
    description: 'Birthdays that do the planning for you. Our party packages include private studio hire, a dedicated party host, themed tableware and decorations, cake cutting, and a tidy exit. Choose from three curated party themes or let us build a custom experience. We run the show — you show up and make a wish.',
    features: [
      'Private hire of selected play zones',
      'Dedicated party host(s) for the event',
      'Themed tableware, balloons & decorations',
      'Cake cutting with candle moment',
      'Goody bags (no plastic, ever)',
      'Digital photo album within 48 hours'
    ],
    faqs: [
      { q: 'How many kids can attend?', a: 'Sunbeam (10 kids), Wildfire (16 kids), Constellation (up to 24 kids). Custom guest lists available.' },
      { q: 'Can we bring our own cake?', a: 'Absolutely! We provide plates, napkins, and cutting service. Allergy-aware options available from our catering partners.' },
      { q: 'What if we need to reschedule?', a: 'Free reschedule up to 7 days before the event. 50% refund for cancellations within 7 days.' },
      { q: 'Is there parking nearby?', a: 'Street parking on Vanderbilt Ave. There is also a municipal lot on Dean Street, a 3-minute walk away.' }
    ],
    pricing: [
      { tier: 'Sunbeam', price: '$385', per: '/ 2 hours', note: 'Ages 3-6, 10 kids', featured: false },
      { tier: 'Wildfire', price: '$545', per: '/ 2.5 hours', note: 'Ages 5-10, 16 kids + photo album', featured: true },
      { tier: 'Constellation', price: '$895', per: '/ 3 hours', note: 'Ages 7-12, up to 24 kids + activities', featured: false }
    ]
  },
  {
    id: 'membership',
    title: 'Monthly Memberships',
    short: 'Unlimited open play, priority booking, guest passes, and party discounts.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    image: '../../assets/reception.jpg',
    description: 'A home key for our regulars. Our monthly memberships include unlimited open play, 15% off party add-ons, guest passes each month, and early booking on weekends. Pause anytime. No contracts, no commitments.',
    features: [
      'Unlimited open play sessions',
      '14-day advance booking priority',
      '15% off all party add-ons',
      'Monthly guest passes included',
      'Early weekend booking access',
      'Pause or cancel anytime'
    ],
    faqs: [
      { q: 'Can I pause my membership?', a: 'Yes! You can pause for up to 2 months per year. Your priority booking is maintained during the pause.' },
      { q: 'Are guest passes transferable?', a: 'Yes, give your monthly guest passes to any family. They must be used within the same calendar month.' },
      { q: 'What if I want to upgrade my plan?', a: 'Upgrade anytime — we prorate the difference for the remaining days in your billing cycle.' },
      { q: 'Is there a contract?', a: 'No contracts. Cancel anytime with 30 days notice. Your membership runs until the end of the current billing period.' }
    ],
    pricing: [
      { tier: 'Nanny Pass', price: '$89', per: '/mo', note: '1 caregiver, all households', featured: false },
      { tier: 'Sibling Plan', price: '$129', per: '/mo', note: '2 kids in one household', featured: false },
      { tier: 'Family Plan', price: '$179', per: '/mo', note: 'Up to 4 kids + 2 guest passes/mo', featured: true }
    ]
  },
  {
    id: 'sensory-play',
    title: 'Sensory Play Program',
    short: 'Structured sensory sessions for toddlers with texture boards, sound walls, and more.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    description: 'Our Sensory Play Program is designed for children aged 6 months to 4 years, offering structured sessions that stimulate touch, sight, sound, and proprioception. Led by trained early childhood facilitators, each session includes texture boards, water tables, sound walls, and guided movement activities.',
    features: [
      'Led by trained early childhood facilitators',
      'Structured 45-minute sessions',
      'Age-appropriate sensory materials',
      'Parent participation encouraged',
      'Small groups (max 8 children)',
      'Seasonal themes refreshed monthly'
    ],
    faqs: [
      { q: 'What ages is this for?', a: 'Sensory Play is designed for children aged 6 months to 4 years. Sessions are divided into Baby (6-18 months) and Toddler (18-4 years) groups.' },
      { q: 'Do parents participate?', a: 'Yes! This is a parent-and-child session. Youll join your child in the activities while our facilitators guide the experience.' },
      { q: 'How often are sessions?', a: 'We offer 3 sessions per week: Tuesday, Thursday, and Saturday mornings. Booking opens 7 days in advance for members.' },
      { q: 'What materials are used?', a: 'We use non-toxic, hypoallergenic materials including organic cotton, food-grade silicone, natural wood, and water-based paints.' }
    ],
    pricing: [
      { tier: 'Single session', price: '$18', per: 'per pair', note: 'Parent + child', featured: false },
      { tier: '4-Session Pack', price: '$60', per: 'per pair', note: 'Save $12', featured: false },
      { tier: '8-Session Pack', price: '$105', per: 'per pair', note: 'Save $39 + priority booking', featured: true }
    ]
  },
  {
    id: 'camps',
    title: 'Holiday Camps',
    short: 'Full-day themed camps during school breaks with activities, lunch, and creative projects.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    description: 'School is out, adventure is in. Our Holiday Camps run full-day programs during winter break, spring break, and summer recess. Each camp week has a unique theme — from "Space Explorers" to "Rainforest Adventure" — with guided activities, creative projects, outdoor time, and lunch included.',
    features: [
      'Full-day care (8:30 AM – 4:00 PM)',
      'Weekly themed activities',
      'Lunch and two snacks included',
      'Creative art and STEM projects',
      'Supervised outdoor time',
      'Extended care available until 6 PM'
    ],
    faqs: [
      { q: 'What ages can attend?', a: 'Holiday Camps are for children aged 4-10. Groups are divided by age: Explorers (4-6) and Adventurers (7-10).' },
      { q: 'What should my child bring?', a: 'A water bottle, sunscreen, and a change of clothes. We provide everything else including all activity materials and meals.' },
      { q: 'Is there a sibling discount?', a: 'Yes! 10% off for the second child, 15% off for the third child from the same household.' },
      { q: 'Can I book individual days?', a: 'Camp runs Monday through Friday. We offer 3-day and 5-day options. Individual days available if space permits closer to the date.' }
    ],
    pricing: [
      { tier: '3-Day Camp', price: '$195', per: 'per child', note: 'Wed-Fri option', featured: false },
      { tier: '5-Day Camp', price: '$295', per: 'per child', note: 'Full week, save $55', featured: true },
      { tier: 'Extended Day', price: '+$45', per: '/week add-on', note: 'Stay until 6 PM daily', featured: false }
    ]
  },
  {
    id: 'private-events',
    title: 'Private Venue Hire',
    short: 'Rent the full studio for corporate events, playdates, or family gatherings.',
    icon: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    image: '../../assets/img2.jpg',
    description: 'Need the whole studio? Private Venue Hire gives you exclusive access to all four play zones, the party room, and our maker space. Perfect for corporate family days, community gatherings, school field trips, or intimate celebrations. Our events team handles setup, staffing, and teardown.',
    features: [
      'Exclusive access to all play zones',
      'Custom layout and theming',
      'Dedicated events coordinator',
      'Full staffing and supervision',
      'Kitchen and catering setup',
      'Setup and teardown included'
    ],
    faqs: [
      { q: 'How far in advance should I book?', a: 'We recommend booking at least 6 weeks in advance for weekend dates. Weekday availability is more flexible — 2 weeks notice is usually sufficient.' },
      { q: 'What is the maximum capacity?', a: 'Up to 60 children with accompanying adults. For adult-only events, capacity is 80 guests.' },
      { q: 'Can we arrange catering?', a: 'Yes! We work with several allergy-aware catering partners. Or you may bring your own food — our kitchen has warming and refrigeration facilities.' },
      { q: 'Is there an event minimum?', a: 'Private hire starts at $450 for a 2-hour block. Full-day bookings (8 hours) start at $1,200.' }
    ],
    pricing: [
      { tier: '2-Hour Block', price: '$450', per: 'minimum', note: 'Up to 30 kids', featured: false },
      { tier: 'Half Day', price: '$750', per: '4 hours', note: 'Up to 50 kids', featured: false },
      { tier: 'Full Day', price: '$1,200', per: '8 hours', note: 'Up to 60 kids + full staffing', featured: true }
    ]
  }
];
