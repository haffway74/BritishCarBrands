const britishCars = [
  /* ============================
     LOTUS
  ============================ */
  {
    manufacturer: "Lotus",
    model: "Emira",
    generation: "Type 131",
    engine: "3.5L V6 Supercharged",
    engine_capacity_litres: 3.5,
    years_produced: "2022–present",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["6-speed manual", "6-speed automatic"],
    seating: "2",
    notable_details: [
      "Last ICE-only Lotus sports car",
      "Available with manual transmission",
      "Balanced chassis with touring comfort"
    ],
    tags: ["lotus", "modern", "sports", "v6"],
    image_gallery: [
      "images/lotus/lotus-emira-type-131/1.jpg",
      "images/lotus/lotus-emira-type-131/2.jpg",
      "images/lotus/lotus-emira-type-131/3.jpg"
    ]
  },

  {
    manufacturer: "Lotus",
    model: "Evora GT",
    engine: "3.5L V6 Supercharged",
    engine_capacity_litres: 3.5,
    years_produced: "2010–2021",
    body_style: "2+2 coupe",
    drivetrain: "RWD",
    transmission: ["6-speed manual", "6-speed automatic"],
    seating: "2+2",
    notable_details: [
      "Grand touring focus",
      "Lightweight bonded aluminum chassis"
    ],
    tags: ["lotus", "modern", "gt", "v6"],
    image_gallery: [
      "images/lotus/lotus-evora-gt/1.jpg",
      "images/lotus/lotus-evora-gt/2.jpg"
    ]
  },

  {
    manufacturer: "Lotus",
    model: "Esprit V8",
    generation: "Series 4",
    engine: "3.5L Twin-Turbo V8",
    engine_capacity_litres: 3.5,
    years_produced: "1996–2004",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["5-speed manual"],
    seating: "2",
    notable_details: [
      "Iconic wedge design",
      "Bond film appearances",
      "Hand-built British supercar"
    ],
    tags: ["lotus", "classic", "supercar", "legacy", "v8"],
    image_gallery: [
      "images/lotus/lotus-esprit-v8-series-4/1.jpg",
      "images/lotus/lotus-esprit-v8-series-4/2.jpg"
    ]
  },

  /* ============================
     MCLAREN
  ============================ */
  {
    manufacturer: "McLaren",
    model: "720S",
    generation: "Super Series",
    engine: "4.0L Twin-Turbo V8",
    engine_capacity_litres: 4.0,
    years_produced: "2017–2023",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["7-speed dual-clutch"],
    seating: "2",
    notable_details: [
      "Carbon fibre monocoque",
      "Active aerodynamics",
      "One of the best-handling modern supercars"
    ],
    tags: ["mclaren", "modern", "supercar", "v8"],
    image_gallery: [
      "images/mclaren/mclaren-720s-super-series/1.jpg",
      "images/mclaren/mclaren-720s-super-series/2.jpg"
    ]
  },

  {
    manufacturer: "McLaren",
    model: "570S",
    generation: "Sports Series",
    engine: "3.8L Twin-Turbo V8",
    engine_capacity_litres: 3.8,
    years_produced: "2015–2021",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["7-speed dual-clutch"],
    seating: "2",
    notable_details: [
      "Entry-level McLaren",
      "Lightweight carbon chassis",
      "Daily-drivable supercar"
    ],
    tags: ["mclaren", "modern", "sports", "v8"],
    image_gallery: [
      "images/mclaren/mclaren-570s-sports-series/1.jpg",
      "images/mclaren/mclaren-570s-sports-series/2.jpg"
    ]
  },

  {
    manufacturer: "McLaren",
    model: "F1",
    engine: "6.1L BMW V12",
    engine_capacity_litres: 6.1,
    years_produced: "1992–1998",
    body_style: "3-seat coupe",
    drivetrain: "RWD",
    transmission: ["6-speed manual"],
    seating: "3",
    notable_details: [
      "Central driving position",
      "Naturally aspirated V12",
      "One of the greatest cars ever built"
    ],
    tags: ["mclaren", "classic", "supercar", "legacy", "v12"],
    image_gallery: [
      "images/mclaren/mclaren-f1/1.jpg",
      "images/mclaren/mclaren-f1/2.jpg"
    ]
  },

  /* ============================
     ASTON MARTIN
  ============================ */
  {
    manufacturer: "Aston Martin",
    model: "DB11",
    generation: "DB Series",
    engine: "4.0L Twin-Turbo V8",
    engine_capacity_litres: 4.0,
    years_produced: "2016–present",
    body_style: "2+2 coupe",
    drivetrain: "RWD",
    transmission: ["8-speed automatic"],
    seating: "2+2",
    notable_details: [
      "Grand touring flagship",
      "Hand-built craftsmanship",
      "Mercedes-AMG sourced V8"
    ],
    tags: ["aston martin", "modern", "gt", "v8"],
    image_gallery: [
      "images/aston-martin/aston-martin-db11-db-series/1.jpg",
      "images/aston-martin/aston-martin-db11-db-series/2.jpg"
    ]
  },

  {
    manufacturer: "Aston Martin",
    model: "Vantage",
    generation: "AM6",
    engine: "4.0L Twin-Turbo V8",
    engine_capacity_litres: 4.0,
    years_produced: "2018–present",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["7-speed manual", "8-speed automatic"],
    seating: "2",
    notable_details: [
      "Compact British sports car",
      "Aggressive styling",
      "Track-capable yet comfortable"
    ],
    tags: ["aston martin", "modern", "sports", "v8"],
    image_gallery: [
      "images/aston-martin/aston-martin-vantage-am6/1.jpg",
      "images/aston-martin/aston-martin-vantage-am6/2.jpg"
    ]
  },

  {
    manufacturer: "Aston Martin",
    model: "DB5",
    generation: "DB Series",
    engine: "4.0L Inline-6",
    engine_capacity_litres: 4.0,
    years_produced: "1963–1965",
    body_style: "2-door coupe",
    drivetrain: "RWD",
    transmission: ["5-speed manual"],
    seating: "2+2",
    notable_details: [
      "James Bond icon",
      "Hand-built aluminum body",
      "One of the most famous British cars ever"
    ],
    tags: ["aston martin", "classic", "legacy", "inline-6"],
    image_gallery: [
      "images/aston-martin/aston-martin-db5-db-series/1.jpg",
      "images/aston-martin/aston-martin-db5-db-series/2.jpg"
    ]
  },

  /* ============================
     JAGUAR
  ============================ */
  {
    manufacturer: "Jaguar",
    model: "E-Type Series 1",
    generation: "Series 1",
    engine: "3.8L / 4.2L Inline-6",
    engine_capacity_litres: 4.2,
    years_produced: "1961–1967",
    body_style: "2-door coupe / roadster",
    drivetrain: "RWD",
    transmission: ["4-speed manual"],
    seating: "2",
    notable_details: [
      "Often called one of the most beautiful cars ever made",
      "Disc brakes all around in the early 1960s",
      "Iconic long bonnet and covered headlights"
    ],
    tags: ["jaguar", "classic", "legacy", "inline-6"],
    image_gallery: [
      "images/jaguar/jaguar-e-type-series-1/1.jpg",
      "images/jaguar/jaguar-e-type-series-1/2.jpg"
    ]
  },

  {
    manufacturer: "Jaguar",
    model: "E-Type",
    generation: "Series 3",
    engine: "V12",
    engine_capacity_litres: 5.3,
    years_produced: "1971–1974",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "2+2",
    notable_details: [
      "First Jaguar road car with a V12 engine",
      "Improved cooling and brakes",
      "Longer wheelbase"
    ],
    tags: ["classic", "legacy", "v12", "grand-tourer"],
    image_gallery: [
      "images/jaguar/jaguar-e-type-series-3/1.jpg",
      "images/jaguar/jaguar-e-type-series-3/2.jpg",
      "images/jaguar/jaguar-e-type-series-3/3.jpg"
    ]
  },

  {
    manufacturer: "Jaguar",
    model: "XJ220",
    engine: "Twin-Turbo V6",
    engine_capacity_litres: 3.5,
    years_produced: "1992–1994",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Fastest production car in the world in 1992",
      "Originally planned with a V12 and AWD",
      "Aluminum honeycomb chassis"
    ],
    tags: ["supercar", "legacy", "twin-turbo", "v6"],
    image_gallery: [
      "images/jaguar/jaguar-xj220/1.jpg",
      "images/jaguar/jaguar-xj220/2.jpg",
      "images/jaguar/jaguar-xj220/3.jpg"
    ]
  },

  {
    manufacturer: "Jaguar",
    model: "F-Type",
    engine: "V6",
    engine_capacity_litres: 3.0,
    years_produced: "2013–2023",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "2",
    notable_details: [
      "Spiritual successor to the E-Type",
      "Active exhaust system",
      "Aluminum-intensive construction"
    ],
    tags: ["modern", "sports", "v6"],
    image_gallery: [
      "images/jaguar/jaguar-f-type/1.jpg",
      "images/jaguar/jaguar-f-type/2.jpg",
      "images/jaguar/jaguar-f-type/3.jpg"
    ]
  },

  {
    manufacturer: "Jaguar",
    model: "F-Type R",
    engine: "Supercharged V8",
    engine_capacity_litres: 5.0,
    years_produced: "2014–2023",
    body_style: "Coupe",
    drivetrain: "AWD",
    transmission: ["Automatic"],
    seating: "2",
    notable_details: [
      "One of the best-sounding V8s ever made",
      "AWD for improved traction",
      "High-performance brakes and suspension"
    ],
    tags: ["modern", "sports", "v8", "supercharged"],
    image_gallery: [
      "images/jaguar/jaguar-f-type-r/1.jpg",
      "images/jaguar/jaguar-f-type-r/2.jpg",
      "images/jaguar/jaguar-f-type-r/3.jpg"
    ]
  },

  /* ============================
     MINI
  ============================ */
  {
    manufacturer: "Mini",
    model: "Mini Cooper S",
    generation: "Classic Mini",
    engine: "1.3L Inline-4",
    engine_capacity_litres: 1.3,
    years_produced: "1963–1971",
    body_style: "2-door saloon",
    drivetrain: "FWD",
    transmission: ["4-speed manual", "4-speed automatic"],
    seating: "4",
    notable_details: [
      "Rally legend, especially at Monte Carlo",
      "Transverse engine, space-efficient design",
      "Icon of 1960s British motoring"
    ],
    tags: ["mini", "classic", "legacy", "inline-4"],
    image_gallery: [
      "images/mini/mini-cooper-s-classic-mini/1.jpg",
      "images/mini/mini-cooper-s-classic-mini/2.jpg"
    ]
  },

  /* ============================
     MG
  ============================ */
  {
    manufacturer: "MG",
    model: "MGB",
    generation: "Mk I–III",
    engine: "1.8L Inline-4",
    engine_capacity_litres: 1.8,
    years_produced: "1962–1980",
    body_style: "2-door roadster / GT",
    drivetrain: "RWD",
    transmission: ["4-speed manual", "4-speed manual with overdrive"],
    seating: "2",
    notable_details: [
      "One of the best-selling sports cars of its era",
      "Simple mechanicals, popular with enthusiasts",
      "Strong aftermarket and club support"
    ],
    tags: ["mg", "classic", "legacy", "inline-4"],
    image_gallery: [
      "images/mg/mg-mgb-mk-i-iii/1.jpg",
      "images/mg/mg-mgb-mk-i-iii/2.jpg"
    ]
  },

  /* ============================
     TVR
  ============================ */
  {
    manufacturer: "TVR",
    model: "Sagaris",
    engine: "Inline-6",
    engine_capacity_litres: 4.0,
    years_produced: "2005–2006",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Designed for endurance racing but sold as a road car",
      "No electronic driver aids",
      "Aggressive aero vents and side-exit exhausts"
    ],
    tags: ["sports", "modern", "inline-6", "lightweight"],
    image_gallery: [
      "images/tvr/tvr-sagaris/1.jpg",
      "images/tvr/tvr-sagaris/2.jpg",
      "images/tvr/tvr-sagaris/3.jpg"
    ]
  },

  {
    manufacturer: "TVR",
    model: "Griffith",
    generation: "500",
    engine: "V8",
    engine_capacity_litres: 5.0,
    years_produced: "1993–2002",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Rover-derived V8 engine",
      "Extremely lightweight",
      "Raw driving experience"
    ],
    tags: ["classic", "sports", "v8", "roadster"],
    image_gallery: [
      "images/tvr/tvr-griffith-500/1.jpg",
      "images/tvr/tvr-griffith-500/2.jpg",
      "images/tvr/tvr-griffith-500/3.jpg"
    ]
  },

  {
    manufacturer: "TVR",
    model: "Cerbera",
    generation: "Speed Six",
    engine: "Inline-6",
    engine_capacity_litres: 4.0,
    years_produced: "1996–2006",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2+2",
    notable_details: [
      "TVR’s own in-house engine design",
      "Famously unpredictable handling",
      "Minimal driver assistance"
    ],
    tags: ["sports", "classic", "inline-6"],
    image_gallery: [
      "images/tvr/tvr-cerbera-speed-six/1.jpg",
      "images/tvr/tvr-cerbera-speed-six/2.jpg",
      "images/tvr/tvr-cerbera-speed-six/3.jpg"
    ]
  },

  {
    manufacturer: "TVR",
    model: "Tuscan",
    generation: "Speed Six",
    engine: "Inline-6",
    engine_capacity_litres: 4.0,
    years_produced: "1999–2006",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Featured in the movie 'Swordfish'",
      "Wild styling with removable roof panel",
      "Known for its explosive performance"
    ],
    tags: ["sports", "modern", "inline-6"],
    image_gallery:[
            "images/tvr/tvr-t350-base/1.jpg",
      "images/tvr/tvr-t350-base/2.jpg",
      "images/tvr/tvr-t350-base/3.jpg"
    ]
  }
];

// END OF FILE