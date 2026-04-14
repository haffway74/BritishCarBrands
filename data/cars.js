// C:\BCV2-db\data\cars.js

const britishCars = [
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
      "images/lotus-emira/1.jpg",
      "images/lotus-emira/2.jpg",
      "images/lotus-emira/3.jpg"
    ]
  },

  {
    manufacturer: "Lotus",
    model: "Evora GT",
    generation: "Evora Series",
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
      "images/lotus-evora/1.jpg",
      "images/lotus-evora/2.jpg"
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
      "images/lotus-esprit/1.jpg",
      "images/lotus-esprit/2.jpg"
    ]
  },

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
      "images/mclaren-720s/1.jpg",
      "images/mclaren-720s/2.jpg"
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
      "images/mclaren-570s/1.jpg",
      "images/mclaren-570s/2.jpg"
    ]
  },

  {
    manufacturer: "McLaren",
    model: "F1",
    generation: "F1 Series",
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
      "images/mclaren-f1/1.jpg",
      "images/mclaren-f1/2.jpg"
    ]
  },

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
      "images/aston-db11/1.jpg",
      "images/aston-db11/2.jpg"
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
      "images/aston-vantage/1.jpg",
      "images/aston-vantage/2.jpg"
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
      "images/aston-db5/1.jpg",
      "images/aston-db5/2.jpg"
    ]
  },

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
      "images/jaguar-etype/1.jpg",
      "images/jaguar-etype/2.jpg"
    ]
  },

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
      "images/mini-cooper-s/1.jpg",
      "images/mini-cooper-s/2.jpg"
    ]
  },

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
      "images/mg-mgb/1.jpg",
      "images/mg-mgb/2.jpg"
    ]
  },

  {
    manufacturer: "Jaguar",
    model: "E-Type",
    generation: "Series 1",
    engine: "Inline-6",
    engine_capacity_litres: 3.8,
    years_produced: "1961–1968",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Often called the most beautiful car ever made",
      "Monocoque construction with tubular front subframe",
      "Disc brakes all around"
    ],
    tags: ["classic", "legacy", "sports", "inline-6"],
    image_gallery: [
      "images/jaguar-e-type/1.jpg",
      "images/jaguar-e-type/2.jpg",
      "images/jaguar-e-type/3.jpg"
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
      "images/jaguar-e-type-s3/1.jpg",
      "images/jaguar-e-type-s3/2.jpg",
      "images/jaguar-e-type-s3/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XJ220",
    generation: "Base",
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
      "images/jaguar-xj220/1.jpg",
      "images/jaguar-xj220/2.jpg",
      "images/jaguar-xj220/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "F-Type",
    generation: "Base",
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
      "images/jaguar-f-type/1.jpg",
      "images/jaguar-f-type/2.jpg",
      "images/jaguar-f-type/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "F-Type R",
    generation: "Base",
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
      "images/jaguar-f-type-r/1.jpg",
      "images/jaguar-f-type-r/2.jpg",
      "images/jaguar-f-type-r/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XK120",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.4,
    years_produced: "1948–1954",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Fastest production car in the world at launch",
      "Hand-built aluminum body (early models)",
      "Racing pedigree"
    ],
    tags: ["classic", "legacy", "inline-6", "roadster"],
    image_gallery: [
      "images/jaguar-xk120/1.jpg",
      "images/jaguar-xk120/2.jpg",
      "images/jaguar-xk120/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XK140",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.4,
    years_produced: "1954–1957",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Improved handling over XK120",
      "Optional C-Type cylinder head",
      "More interior space"
    ],
    tags: ["classic", "legacy", "inline-6"],
    image_gallery: [
      "images/jaguar-xk140/1.jpg",
      "images/jaguar-xk140/2.jpg",
      "images/jaguar-xk140/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XK150",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.8,
    years_produced: "1957–1961",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Disc brakes standard",
      "More modern styling",
      "Higher performance than XK140"
    ],
    tags: ["classic", "legacy", "inline-6"],
    image_gallery: [
      "images/jaguar-xk150/1.jpg",
      "images/jaguar-xk150/2.jpg",
      "images/jaguar-xk150/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "Mark 2",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.8,
    years_produced: "1959–1967",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "5",
    notable_details: [
      "Popular with British police and criminals alike",
      "Sporty handling for a sedan",
      "Classic British luxury interior"
    ],
    tags: ["classic", "legacy", "sedan"],
    image_gallery: [
      "images/jaguar-mark2/1.jpg",
      "images/jaguar-mark2/2.jpg",
      "images/jaguar-mark2/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XJR",
    generation: "X308",
    engine: "Supercharged V8",
    engine_capacity_litres: 4.0,
    years_produced: "1997–2003",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Supercharged performance luxury sedan",
      "Aluminum components for reduced weight",
      "Iconic British executive car"
    ],
    tags: ["modern", "sedan", "v8", "supercharged"],
    image_gallery: [
      "images/jaguar-xjr/1.jpg",
      "images/jaguar-xjr/2.jpg",
      "images/jaguar-xjr/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XK",
    generation: "X150",
    engine: "V8",
    engine_capacity_litres: 5.0,
    years_produced: "2006–2014",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "2+2",
    notable_details: [
      "Aluminum chassis",
      "Grand touring focus",
      "Available in high-performance XKR trim"
    ],
    tags: ["modern", "grand-tourer", "v8"],
    image_gallery: [
      "images/jaguar-xk/1.jpg",
      "images/jaguar-xk/2.jpg",
      "images/jaguar-xk/3.jpg"
    ]
  },
  {
    manufacturer: "Jaguar",
    model: "XKR-S",
    generation: "X150",
    engine: "Supercharged V8",
    engine_capacity_litres: 5.0,
    years_produced: "2011–2014",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "2+2",
    notable_details: [
      "Most powerful XK ever made",
      "Aggressive aero package",
      "Track-focused suspension"
    ],
    tags: ["modern", "sports", "v8", "supercharged"],
    image_gallery: [
      "images/jaguar-xkr-s/1.jpg",
      "images/jaguar-xkr-s/2.jpg",
      "images/jaguar-xkr-s/3.jpg"
    ]
  },

  {
    manufacturer: "Bentley",
    model: "Continental GT",
    generation: "1st Gen",
    engine: "Twin-Turbo W12",
    engine_capacity_litres: 6.0,
    years_produced: "2003–2011",
    body_style: "Coupe",
    drivetrain: "AWD",
    transmission: ["Automatic"],
    seating: "4",
    notable_details: [
      "First mass-produced Bentley under VW ownership",
      "W12 engine layout",
      "High-speed grand tourer"
    ],
    tags: ["modern", "grand-tourer", "w12", "luxury"],
    image_gallery: [
      "images/bentley-continental-gt-1/1.jpg",
      "images/bentley-continental-gt-1/2.jpg",
      "images/bentley-continental-gt-1/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Continental GT",
    generation: "2nd Gen",
    engine: "Twin-Turbo W12",
    engine_capacity_litres: 6.0,
    years_produced: "2011–2018",
    body_style: "Coupe",
    drivetrain: "AWD",
    transmission: ["Automatic"],
    seating: "4",
    notable_details: [
      "Improved chassis and interior",
      "More refined W12 engine",
      "Available V8 option"
    ],
    tags: ["modern", "grand-tourer", "w12", "luxury"],
    image_gallery: [
      "images/bentley-continental-gt-2/1.jpg",
      "images/bentley-continental-gt-2/2.jpg",
      "images/bentley-continental-gt-2/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Continental GT",
    generation: "3rd Gen",
    engine: "Twin-Turbo W12",
    engine_capacity_litres: 6.0,
    years_produced: "2018–Present",
    body_style: "Coupe",
    drivetrain: "AWD",
    transmission: ["Automatic"],
    seating: "4",
    notable_details: [
      "MSB platform shared with Porsche Panamera",
      "Rotating display dashboard",
      "One of the most luxurious GTs in the world"
    ],
    tags: ["modern", "grand-tourer", "w12", "luxury"],
    image_gallery: [
      "images/bentley-continental-gt-3/1.jpg",
      "images/bentley-continental-gt-3/2.jpg",
      "images/bentley-continental-gt-3/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Arnage",
    generation: "Red Label",
    engine: "Turbocharged V8",
    engine_capacity_litres: 6.75,
    years_produced: "1999–2009",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Hand-built British luxury sedan",
      "Iconic 6.75L V8",
      "Old-school craftsmanship"
    ],
    tags: ["legacy", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/bentley-arnage/1.jpg",
      "images/bentley-arnage/2.jpg",
      "images/bentley-arnage/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Mulsanne",
    generation: "Base",
    engine: "Turbocharged V8",
    engine_capacity_litres: 6.75,
    years_produced: "2010–2020",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Flagship Bentley sedan",
      "Hand-built in Crewe",
      "One of the last cars with the L-series V8"
    ],
    tags: ["modern", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/bentley-mulsanne/1.jpg",
      "images/bentley-mulsanne/2.jpg",
      "images/bentley-mulsanne/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Turbo R",
    generation: "Base",
    engine: "Turbocharged V8",
    engine_capacity_litres: 6.75,
    years_produced: "1985–1999",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "First Bentley to emphasize performance again",
      "Sportier suspension tuning",
      "Considered a modern classic"
    ],
    tags: ["classic", "legacy", "v8", "sedan"],
    image_gallery: [
      "images/bentley-turbor/1.jpg",
      "images/bentley-turbor/2.jpg",
      "images/bentley-turbor/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Brooklands",
    generation: "Coupe",
    engine: "Turbocharged V8",
    engine_capacity_litres: 6.75,
    years_produced: "2008–2011",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "4",
    notable_details: [
      "Limited production luxury coupe",
      "Hand-built",
      "One of the most powerful Bentleys of its era"
    ],
    tags: ["modern", "luxury", "v8", "grand-tourer"],
    image_gallery: [
      "images/bentley-brooklands/1.jpg",
      "images/bentley-brooklands/2.jpg",
      "images/bentley-brooklands/3.jpg"
    ]
  },
  {
    manufacturer: "Bentley",
    model: "Flying Spur",
    generation: "W12",
    engine: "Twin-Turbo W12",
    engine_capacity_litres: 6.0,
    years_produced: "2005–2013",
    body_style: "Sedan",
    drivetrain: "AWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "High-performance luxury sedan",
      "Shares platform with Continental GT",
      "AWD stability"
    ],
    tags: ["modern", "luxury", "w12", "sedan"],
    image_gallery: [
      "images/bentley-flying-spur/1.jpg",
      "images/bentley-flying-spur/2.jpg",
      "images/bentley-flying-spur/3.jpg"
    ]
  },

  {
    manufacturer: "Rolls-Royce",
    model: "Silver Ghost",
    generation: "40/50 HP",
    engine: "Inline-6",
    engine_capacity_litres: 7.4,
    years_produced: "1906–1926",
    body_style: "Tourer",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Known as 'The Best Car in the World'",
      "Exceptional reliability for its era",
      "Hand-built coachwork"
    ],
    tags: ["legacy", "veteran", "inline-6", "tourer"],
    image_gallery: [
      "images/rolls-silver-ghost/1.jpg",
      "images/rolls-silver-ghost/2.jpg",
      "images/rolls-silver-ghost/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Silver Shadow",
    generation: "Series I",
    engine: "V8",
    engine_capacity_litres: 6.75,
    years_produced: "1965–1977",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "First Rolls-Royce with monocoque construction",
      "Hydropneumatic suspension licensed from Citroën",
      "One of the brand’s most iconic models"
    ],
    tags: ["classic", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/rolls-silver-shadow/1.jpg",
      "images/rolls-silver-shadow/2.jpg",
      "images/rolls-silver-shadow/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Silver Shadow",
    generation: "Series II",
    engine: "V8",
    engine_capacity_litres: 6.75,
    years_produced: "1977–1980",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Rack-and-pinion steering added",
      "Improved suspension",
      "Refined interior updates"
    ],
    tags: ["classic", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/rolls-silver-shadow-2/1.jpg",
      "images/rolls-silver-shadow-2/2.jpg",
      "images/rolls-silver-shadow-2/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Corniche",
    generation: "Series I",
    engine: "V8",
    engine_capacity_litres: 6.75,
    years_produced: "1971–1987",
    body_style: "Convertible",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "4",
    notable_details: [
      "Luxury convertible based on the Silver Shadow",
      "Hand-built craftsmanship",
      "Popular among celebrities"
    ],
    tags: ["classic", "luxury", "v8", "convertible"],
    image_gallery: [
      "images/rolls-corniche/1.jpg",
      "images/rolls-corniche/2.jpg",
      "images/rolls-corniche/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Phantom VII",
    generation: "BMW Era",
    engine: "V12",
    engine_capacity_litres: 6.75,
    years_produced: "2003–2017",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "First Rolls-Royce developed under BMW ownership",
      "Aluminum spaceframe chassis",
      "Iconic 'starlight headliner'"
    ],
    tags: ["modern", "luxury", "v12", "sedan"],
    image_gallery: [
      "images/rolls-phantom-7/1.jpg",
      "images/rolls-phantom-7/2.jpg",
      "images/rolls-phantom-7/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Phantom VIII",
    generation: "Current",
    engine: "Twin-Turbo V12",
    engine_capacity_litres: 6.75,
    years_produced: "2017–Present",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "New aluminum 'Architecture of Luxury' platform",
      "Ultra-quiet cabin",
      "Gallery dashboard artwork"
    ],
    tags: ["modern", "luxury", "v12", "sedan"],
    image_gallery: [
      "images/rolls-phantom-8/1.jpg",
      "images/rolls-phantom-8/2.jpg",
      "images/rolls-phantom-8/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Silver Spirit",
    generation: "Series I",
    engine: "V8",
    engine_capacity_litres: 6.75,
    years_produced: "1980–1989",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Successor to the Silver Shadow",
      "More modern styling",
      "Hydropneumatic rear suspension"
    ],
    tags: ["classic", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/rolls-silver-spirit/1.jpg",
      "images/rolls-silver-spirit/2.jpg",
      "images/rolls-silver-spirit/3.jpg"
    ]
  },
  {
    manufacturer: "Rolls-Royce",
    model: "Silver Seraph",
    generation: "BMW Era",
    engine: "V12",
    engine_capacity_litres: 5.4,
    years_produced: "1998–2002",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "First Rolls-Royce with a V12 since the 1930s",
      "Shared engine with BMW 7-Series",
      "Short production run"
    ],
    tags: ["modern", "luxury", "v12", "sedan"],
    image_gallery: [
      "images/rolls-silver-seraph/1.jpg",
      "images/rolls-silver-seraph/2.jpg",
      "images/rolls-silver-seraph/3.jpg"
    ]
  },

  {
    manufacturer: "TVR",
    model: "Sagaris",
    generation: "Base",
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
      "images/tvr-sagaris/1.jpg",
      "images/tvr-sagaris/2.jpg",
      "images/tvr-sagaris/3.jpg"
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
      "images/tvr-griffith/1.jpg",
      "images/tvr-griffith/2.jpg",
      "images/tvr-griffith/3.jpg"
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
      "images/tvr-cerbera/1.jpg",
      "images/tvr-cerbera/2.jpg",
      "images/tvr-cerbera/3.jpg"
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
    image_gallery: [
      "images/tvr-tuscan/1.jpg",
      "images/tvr-tuscan/2.jpg",
      "images/tvr-tuscan/3.jpg"
    ]
  },
  {
    manufacturer: "TVR",
    model: "Chimaera",
    generation: "Base",
    engine: "V8",
    engine_capacity_litres: 4.0,
    years_produced: "1992–2003",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "More comfortable alternative to the Griffith",
      "Fiberglass body",
      "Rover V8 power"
    ],
    tags: ["classic", "roadster", "v8"],
    image_gallery: [
      "images/tvr-chimaera/1.jpg",
      "images/tvr-chimaera/2.jpg",
      "images/tvr-chimaera/3.jpg"
    ]
  },
  {
    manufacturer: "TVR",
    model: "Tamora",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.6,
    years_produced: "2002–2006",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Entry-level TVR sports car",
      "Lightweight and agile",
      "Distinctive styling"
    ],
    tags: ["sports", "roadster", "inline-6"],
    image_gallery: [
      "images/tvr-tamora/1.jpg",
      "images/tvr-tamora/2.jpg",
      "images/tvr-tamora/3.jpg"
    ]
  },
  {
    manufacturer: "TVR",
    model: "T350",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 3.6,
    years_produced: "2002–2006",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Track-focused coupe",
      "Shares platform with Tamora",
      "Distinctive fastback design"
    ],
    tags: ["sports", "modern", "inline-6"],
    image_gallery: [
      "images/tvr-t350/1.jpg",
      "images/tvr-t350/2.jpg",
      "images/tvr-t350/3.jpg"
    ]
  },
  {
    manufacturer: "TVR",
    model: "Speed 12",
    generation: "Prototype",
    engine: "V12",
    engine_capacity_litres: 7.7,
    years_produced: "1996–2000",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "One of the most powerful naturally aspirated engines ever built",
      "Cancelled for being 'too powerful for the road'",
      "Extremely rare"
    ],
    tags: ["supercar", "prototype", "v12", "legendary"],
    image_gallery: [
      "images/tvr-speed12/1.jpg",
      "images/tvr-speed12/2.jpg",
      "images/tvr-speed12/3.jpg"
    ]
  },

  {
    manufacturer: "Morgan",
    model: "Plus Four",
    generation: "CX-Generation",
    engine: "Turbocharged Inline-4",
    engine_capacity_litres: 2.0,
    years_produced: "2020–Present",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "2",
    notable_details: [
      "Uses BMW’s 2.0L turbo engine",
      "CX bonded aluminum platform",
      "Classic styling with modern performance"
    ],
    tags: ["modern", "roadster", "inline-4", "lightweight"],
    image_gallery: [
      "images/morgan-plus-four/1.jpg",
      "images/morgan-plus-four/2.jpg",
      "images/morgan-plus-four/3.jpg"
    ]
  },
  {
    manufacturer: "Morgan",
    model: "Plus Eight",
    generation: "Classic",
    engine: "V8",
    engine_capacity_litres: 4.0,
    years_produced: "1968–2004",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Rover V8 power in a lightweight body",
      "One of Morgan’s most iconic models",
      "Wooden ash frame construction"
    ],
    tags: ["classic", "roadster", "v8", "lightweight"],
    image_gallery: [
      "images/morgan-plus-eight/1.jpg",
      "images/morgan-plus-eight/2.jpg",
      "images/morgan-plus-eight/3.jpg"
    ]
  },
  {
    manufacturer: "Morgan",
    model: "Aero 8",
    generation: "Series I",
    engine: "V8",
    engine_capacity_litres: 4.4,
    years_produced: "2000–2004",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Morgan’s first all-new design in decades",
      "BMW V8 engine",
      "Controversial 'cross-eyed' headlights"
    ],
    tags: ["modern", "sports", "v8"],
    image_gallery: [
      "images/morgan-aero8/1.jpg",
      "images/morgan-aero8/2.jpg",
      "images/morgan-aero8/3.jpg"
    ]
  },
  {
    manufacturer: "Morgan",
    model: "Aero 8",
    generation: "Series V",
    engine: "V8",
    engine_capacity_litres: 4.8,
    years_produced: "2015–2018",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "2",
    notable_details: [
      "Final evolution of the Aero platform",
      "Improved aerodynamics and chassis",
      "Hand-built luxury sports car"
    ],
    tags: ["modern", "sports", "v8", "luxury"],
    image_gallery: [
      "images/morgan-aero8-s5/1.jpg",
      "images/morgan-aero8-s5/2.jpg",
      "images/morgan-aero8-s5/3.jpg"
    ]
  },
  {
    manufacturer: "Morgan",
    model: "3-Wheeler",
    generation: "Modern",
    engine: "V-Twin",
    engine_capacity_litres: 2.0,
    years_produced: "2012–2021",
    body_style: "3-Wheeler",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Motorcycle engine mounted at the front",
      "Extremely lightweight",
      "Retro aviation-inspired design"
    ],
    tags: ["quirky", "lightweight", "v-twin", "3-wheeler"],
    image_gallery: [
      "images/morgan-3-wheeler/1.jpg",
      "images/morgan-3-wheeler/2.jpg",
      "images/morgan-3-wheeler/3.jpg"
    ]
  },
  {
    manufacturer: "Morgan",
    model: "Super 3",
    generation: "Next Gen",
    engine: "Inline-3",
    engine_capacity_litres: 1.5,
    years_produced: "2022–Present",
    body_style: "3-Wheeler",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Ford 1.5L three-cylinder engine",
      "New aluminum monocoque",
      "More refined than the previous 3-Wheeler"
    ],
    tags: ["modern", "3-wheeler", "lightweight", "quirky"],
    image_gallery: [
      "images/morgan-super3/1.jpg",
      "images/morgan-super3/2.jpg",
      "images/morgan-super3/3.jpg"
    ]
  },


  {
    manufacturer: "Land Rover",
    model: "Series I",
    generation: "80-inch",
    engine: "Inline-4",
    engine_capacity_litres: 1.6,
    years_produced: "1948–1953",
    body_style: "Utility",
    drivetrain: "4WD",
    transmission: ["Manual"],
    seating: "2–7",
    notable_details: [
      "The original Land Rover",
      "Inspired by the WWII Jeep",
      "Aluminum body due to post-war steel shortages"
    ],
    tags: ["legacy", "off-road", "utility", "inline-4"],
    image_gallery: [
      "images/landrover-series1/1.jpg",
      "images/landrover-series1/2.jpg",
      "images/landrover-series1/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Series II",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 2.25,
    years_produced: "1958–1961",
    body_style: "Utility",
    drivetrain: "4WD",
    transmission: ["Manual"],
    seating: "2–7",
    notable_details: [
      "More refined than Series I",
      "Iconic rounded shoulder styling",
      "Improved engines and axles"
    ],
    tags: ["legacy", "off-road", "utility"],
    image_gallery: [
      "images/landrover-series2/1.jpg",
      "images/landrover-series2/2.jpg",
      "images/landrover-series2/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Series III",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 2.25,
    years_produced: "1971–1985",
    body_style: "Utility",
    drivetrain: "4WD",
    transmission: ["Manual"],
    seating: "2–7",
    notable_details: [
      "Most common classic Land Rover",
      "Full synchromesh gearbox",
      "Military and civilian use worldwide"
    ],
    tags: ["legacy", "off-road", "utility"],
    image_gallery: [
      "images/landrover-series3/1.jpg",
      "images/landrover-series3/2.jpg",
      "images/landrover-series3/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Defender 90",
    generation: "Classic",
    engine: "Inline-4 / Inline-5 / V8",
    engine_capacity_litres: 2.5,
    years_produced: "1983–2016",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Manual", "Automatic"],
    seating: "2–6",
    notable_details: [
      "Iconic British off-roader",
      "Aluminum body panels",
      "Used by militaries and explorers worldwide"
    ],
    tags: ["classic", "off-road", "utility", "icon"],
    image_gallery: [
      "images/landrover-defender90/1.jpg",
      "images/landrover-defender90/2.jpg",
      "images/landrover-defender90/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Defender 110",
    generation: "Classic",
    engine: "Inline-4 / Inline-5 / V8",
    engine_capacity_litres: 2.5,
    years_produced: "1983–2016",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Manual", "Automatic"],
    seating: "5–9",
    notable_details: [
      "Long-wheelbase Defender",
      "Expedition favorite",
      "Highly customizable"
    ],
    tags: ["classic", "off-road", "utility"],
    image_gallery: [
      "images/landrover-defender110/1.jpg",
      "images/landrover-defender110/2.jpg",
      "images/landrover-defender110/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Range Rover Classic",
    generation: "2-Door / 4-Door",
    engine: "V8",
    engine_capacity_litres: 3.5,
    years_produced: "1970–1996",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Manual", "Automatic"],
    seating: "5",
    notable_details: [
      "Invented the luxury SUV segment",
      "Coil-spring suspension",
      "Aluminum body panels"
    ],
    tags: ["classic", "luxury", "off-road", "v8"],
    image_gallery: [
      "images/range-rover-classic/1.jpg",
      "images/range-rover-classic/2.jpg",
      "images/range-rover-classic/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Range Rover P38",
    generation: "2nd Gen",
    engine: "V8",
    engine_capacity_litres: 4.0,
    years_produced: "1994–2002",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Air suspension",
      "More luxury-focused than the Classic",
      "Known for electrical quirks"
    ],
    tags: ["modern", "luxury", "off-road", "v8"],
    image_gallery: [
      "images/range-rover-p38/1.jpg",
      "images/range-rover-p38/2.jpg",
      "images/range-rover-p38/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Range Rover L322",
    generation: "3rd Gen",
    engine: "V8",
    engine_capacity_litres: 4.4,
    years_produced: "2002–2012",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Developed under BMW ownership",
      "Major leap in refinement",
      "Considered a modern classic"
    ],
    tags: ["modern", "luxury", "off-road", "v8"],
    image_gallery: [
      "images/range-rover-l322/1.jpg",
      "images/range-rover-l322/2.jpg",
      "images/range-rover-l322/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Discovery I",
    generation: "Series I",
    engine: "V8 / Inline-4 / Inline-5",
    engine_capacity_litres: 3.9,
    years_produced: "1989–1998",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Manual", "Automatic"],
    seating: "5–7",
    notable_details: [
      "Affordable family 4x4",
      "Safari windows",
      "Shares components with Range Rover Classic"
    ],
    tags: ["classic", "off-road", "family"],
    image_gallery: [
      "images/landrover-discovery1/1.jpg",
      "images/landrover-discovery1/2.jpg",
      "images/landrover-discovery1/3.jpg"
    ]
  },
  {
    manufacturer: "Land Rover",
    model: "Discovery II",
    generation: "Series II",
    engine: "V8 / Inline-5",
    engine_capacity_litres: 4.0,
    years_produced: "1998–2004",
    body_style: "SUV",
    drivetrain: "4WD",
    transmission: ["Automatic"],
    seating: "5–7",
    notable_details: [
      "Improved refinement over Discovery I",
      "ACE active cornering system",
      "Popular with overlanding enthusiasts"
    ],
    tags: ["modern", "off-road", "family"],
    image_gallery: [
      "images/landrover-discovery2/1.jpg",
      "images/landrover-discovery2/2.jpg",
      "images/landrover-discovery2/3.jpg"
    ]
  },


  {
    manufacturer: "Triumph",
    model: "TR2",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 2.0,
    years_produced: "1953–1955",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Affordable British sports car",
      "Early success in motorsport",
      "Lightweight and simple construction"
    ],
    tags: ["classic", "roadster", "inline-4", "legacy"],
    image_gallery: [
      "images/triumph-tr2/1.jpg",
      "images/triumph-tr2/2.jpg",
      "images/triumph-tr2/3.jpg"
    ]
  },
  {
    manufacturer: "Triumph",
    model: "TR3",
    generation: "A/B",
    engine: "Inline-4",
    engine_capacity_litres: 2.0,
    years_produced: "1955–1962",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "First British production car with front disc brakes",
      "Popular in rallying",
      "Classic cut‑down doors"
    ],
    tags: ["classic", "roadster", "inline-4"],
    image_gallery: [
      "images/triumph-tr3/1.jpg",
      "images/triumph-tr3/2.jpg",
      "images/triumph-tr3/3.jpg"
    ]
  },
  {
    manufacturer: "Triumph",
    model: "TR6",
    generation: "Base",
    engine: "Inline-6",
    engine_capacity_litres: 2.5,
    years_produced: "1968–1976",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Fuel‑injected version offered in Europe",
      "One of Triumph’s most iconic models",
      "German‑designed Karmann bodywork"
    ],
    tags: ["classic", "roadster", "inline-6", "icon"],
    image_gallery: [
      "images/triumph-tr6/1.jpg",
      "images/triumph-tr6/2.jpg",
      "images/triumph-tr6/3.jpg"
    ]
  },
  {
    manufacturer: "Triumph",
    model: "Spitfire",
    generation: "Mk I–IV",
    engine: "Inline-4",
    engine_capacity_litres: 1.3,
    years_produced: "1962–1980",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Designed by Giovanni Michelotti",
      "Lightweight and affordable",
      "Swing‑axle rear suspension (early models)"
    ],
    tags: ["classic", "roadster", "inline-4"],
    image_gallery: [
      "images/triumph-spitfire/1.jpg",
      "images/triumph-spitfire/2.jpg",
      "images/triumph-spitfire/3.jpg"
    ]
  },
  {
    manufacturer: "Triumph",
    model: "Stag",
    generation: "Base",
    engine: "V8",
    engine_capacity_litres: 3.0,
    years_produced: "1970–1978",
    body_style: "Convertible",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "4",
    notable_details: [
      "Unique Triumph‑designed V8 engine",
      "T‑bar rollover hoop",
      "Grand touring convertible"
    ],
    tags: ["classic", "convertible", "v8", "grand-tourer"],
    image_gallery: [
      "images/triumph-stag/1.jpg",
      "images/triumph-stag/2.jpg",
      "images/triumph-stag/3.jpg"
    ]
  },
  {
    manufacturer: "Triumph",
    model: "Herald",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 1.0,
    years_produced: "1959–1971",
    body_style: "Sedan / Coupe / Convertible",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Body‑on‑frame construction",
      "Easy to repair and customize",
      "Michelotti styling"
    ],
    tags: ["classic", "family", "inline-4"],
    image_gallery: [
      "images/triumph-herald/1.jpg",
      "images/triumph-herald/2.jpg",
      "images/triumph-herald/3.jpg"
    ]
  },

  {
    manufacturer: "Rover",
    model: "P4",
    generation: "Base",
    engine: "Inline-4 / Inline-6",
    engine_capacity_litres: 2.0,
    years_produced: "1949–1964",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "Known as the 'Auntie Rover' for its conservative styling",
      "High build quality for its era",
      "Popular with professionals and government officials"
    ],
    tags: ["classic", "sedan", "legacy"],
    image_gallery: [
      "images/rover-p4/1.jpg",
      "images/rover-p4/2.jpg",
      "images/rover-p4/3.jpg"
    ]
  },
  {
    manufacturer: "Rover",
    model: "P5",
    generation: "P5B",
    engine: "V8",
    engine_capacity_litres: 3.5,
    years_produced: "1967–1973",
    body_style: "Sedan / Coupe",
    drivetrain: "RWD",
    transmission: ["Automatic"],
    seating: "5",
    notable_details: [
      "Powered by the Rover‑Buick V8",
      "Used by British government ministers",
      "Elegant coupe variant with four doors"
    ],
    tags: ["classic", "luxury", "v8", "sedan"],
    image_gallery: [
      "images/rover-p5/1.jpg",
      "images/rover-p5/2.jpg",
      "images/rover-p5/3.jpg"
    ]
  },
  {
    manufacturer: "Rover",
    model: "P6",
    generation: "2000 / 3500",
    engine: "Inline-4 / V8",
    engine_capacity_litres: 2.0,
    years_produced: "1963–1977",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "5",
    notable_details: [
      "European Car of the Year 1964",
      "Innovative de Dion rear suspension",
      "Police forces used the V8 version extensively"
    ],
    tags: ["classic", "sedan", "v8", "inline-4"],
    image_gallery: [
      "images/rover-p6/1.jpg",
      "images/rover-p6/2.jpg",
      "images/rover-p6/3.jpg"
    ]
  },
  {
    manufacturer: "Rover",
    model: "SD1",
    generation: "Series I",
    engine: "Inline-6 / V8",
    engine_capacity_litres: 3.5,
    years_produced: "1976–1986",
    body_style: "Hatchback",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "5",
    notable_details: [
      "European Car of the Year 1977",
      "Ferrari Daytona‑inspired styling",
      "Used by UK police and government fleets"
    ],
    tags: ["classic", "hatchback", "v8", "inline-6"],
    image_gallery: [
      "images/rover-sd1/1.jpg",
      "images/rover-sd1/2.jpg",
      "images/rover-sd1/3.jpg"
    ]
  },
  {
    manufacturer: "Rover",
    model: "Mini",
    generation: "Classic",
    engine: "Inline-4",
    engine_capacity_litres: 1.0,
    years_produced: "1959–2000",
    body_style: "Hatchback",
    drivetrain: "FWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "One of the most influential cars of the 20th century",
      "Transverse engine + FWD layout revolutionized small cars",
      "Raced successfully in Monte Carlo Rally"
    ],
    tags: ["icon", "compact", "inline-4", "fwd"],
    image_gallery: [
      "images/rover-mini/1.jpg",
      "images/rover-mini/2.jpg",
      "images/rover-mini/3.jpg"
    ]
  },
  {
    manufacturer: "Rover",
    model: "200 (R8)",
    generation: "R8",
    engine: "Inline-4",
    engine_capacity_litres: 1.4,
    years_produced: "1989–1995",
    body_style: "Hatchback / Sedan / Coupe",
    drivetrain: "FWD",
    transmission: ["Manual", "Automatic"],
    seating: "5",
    notable_details: [
      "Joint development with Honda",
      "Known for good handling",
      "Popular compact car in the UK"
    ],
    tags: ["modern", "compact", "inline-4"],
    image_gallery: [
      "images/rover-200/1.jpg",
      "images/rover-200/2.jpg",
      "images/rover-200/3.jpg"
    ]
  },


  {
    manufacturer: "Austin-Healey",
    model: "3000",
    generation: "Mk III",
    engine: "Inline-6",
    engine_capacity_litres: 2.9,
    years_produced: "1963–1967",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2+2",
    notable_details: [
      "Known as the 'Big Healey'",
      "Successful in international rallying",
      "One of the most collectible British sports cars"
    ],
    tags: ["classic", "roadster", "inline-6", "icon"],
    image_gallery: [
      "images/austinhealey-3000/1.jpg",
      "images/austinhealey-3000/2.jpg",
      "images/austinhealey-3000/3.jpg"
    ]
  },
  {
    manufacturer: "Austin-Healey",
    model: "Sprite",
    generation: "Mk I (Frogeye)",
    engine: "Inline-4",
    engine_capacity_litres: 0.9,
    years_produced: "1958–1961",
    body_style: "Roadster",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Nicknamed the 'Frogeye' for its distinctive headlights",
      "Affordable lightweight sports car",
      "Simple and easy to maintain"
    ],
    tags: ["classic", "roadster", "inline-4", "quirky"],
    image_gallery: [
      "images/austinhealey-sprite/1.jpg",
      "images/austinhealey-sprite/2.jpg",
      "images/austinhealey-sprite/3.jpg"
    ]
  },
  {
    manufacturer: "Austin",
    model: "A30",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 0.8,
    years_produced: "1952–1956",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Early compact British family car",
      "Monocoque construction",
      "Predecessor to the A35 and later small Austins"
    ],
    tags: ["classic", "compact", "inline-4"],
    image_gallery: [
      "images/austin-a30/1.jpg",
      "images/austin-a30/2.jpg",
      "images/austin-a30/3.jpg"
    ]
  },
  {
    manufacturer: "Austin",
    model: "A40 Farina",
    generation: "Mk I",
    engine: "Inline-4",
    engine_capacity_litres: 1.2,
    years_produced: "1958–1967",
    body_style: "Sedan / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4–5",
    notable_details: [
      "Styled by Pininfarina",
      "One of the first hatchback‑like designs",
      "Popular family car in the UK"
    ],
    tags: ["classic", "family", "inline-4"],
    image_gallery: [
      "images/austin-a40/1.jpg",
      "images/austin-a40/2.jpg",
      "images/austin-a40/3.jpg"
    ]
  },
  {
    manufacturer: "Austin",
    model: "A90 Atlantic",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 2.7,
    years_produced: "1949–1952",
    body_style: "Convertible / Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Designed to appeal to the American market",
      "Art‑deco styling",
      "Rare and collectible today"
    ],
    tags: ["classic", "convertible", "inline-4", "rare"],
    image_gallery: [
      "images/austin-a90/1.jpg",
      "images/austin-a90/2.jpg",
      "images/austin-a90/3.jpg"
    ]
  },
  {
    manufacturer: "Austin",
    model: "1100",
    generation: "ADO16",
    engine: "Inline-4",
    engine_capacity_litres: 1.1,
    years_produced: "1962–1974",
    body_style: "Sedan / Estate",
    drivetrain: "FWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "Best‑selling car in Britain for several years",
      "Hydrolastic suspension",
      "Designed by Alec Issigonis (creator of the Mini)"
    ],
    tags: ["classic", "compact", "fwd", "inline-4"],
    image_gallery: [
      "images/austin-1100/1.jpg",
      "images/austin-1100/2.jpg",
      "images/austin-1100/3.jpg"
    ]
  },

  {
    manufacturer: "Hillman",
    model: "Imp",
    generation: "Base",
    engine: "Inline-4 (rear-mounted)",
    engine_capacity_litres: 0.9,
    years_produced: "1963–1976",
    body_style: "Compact Hatchback",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Rear-mounted all-aluminum engine",
      "Designed to compete with the Mini",
      "Known for lively handling"
    ],
    tags: ["classic", "compact", "rear-engine", "inline-4"],
    image_gallery: [
      "images/hillman-imp/1.jpg",
      "images/hillman-imp/2.jpg",
      "images/hillman-imp/3.jpg"
    ]
  },
  {
    manufacturer: "Hillman",
    model: "Minx",
    generation: "Series I–VII",
    engine: "Inline-4",
    engine_capacity_litres: 1.5,
    years_produced: "1956–1967",
    body_style: "Sedan / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "Popular British family car",
      "Part of the Rootes Group lineup",
      "Known for reliability and simplicity"
    ],
    tags: ["classic", "family", "inline-4"],
    image_gallery: [
      "images/hillman-minx/1.jpg",
      "images/hillman-minx/2.jpg",
      "images/hillman-minx/3.jpg"
    ]
  },
  {
    manufacturer: "Hillman",
    model: "Hunter",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 1.7,
    years_produced: "1966–1979",
    body_style: "Sedan / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "Winner of the 1968 London–Sydney Marathon",
      "Sold globally under various Rootes/Chrysler brands",
      "Durable and popular with taxi fleets"
    ],
    tags: ["classic", "family", "inline-4", "motorsport"],
    image_gallery: [
      "images/hillman-hunter/1.jpg",
      "images/hillman-hunter/2.jpg",
      "images/hillman-hunter/3.jpg"
    ]
  },
  {
    manufacturer: "Hillman",
    model: "Avenger",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 1.6,
    years_produced: "1970–1981",
    body_style: "Sedan / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "Known for good handling",
      "Later sold as the Chrysler/Talbot Avenger",
      "Popular rally platform in period"
    ],
    tags: ["classic", "family", "inline-4"],
    image_gallery: [
      "images/hillman-avenger/1.jpg",
      "images/hillman-avenger/2.jpg",
      "images/hillman-avenger/3.jpg"
    ]
  },

  {
    manufacturer: "Vauxhall",
    model: "Victor",
    generation: "F-Series",
    engine: "Inline-4",
    engine_capacity_litres: 1.5,
    years_produced: "1957–1961",
    body_style: "Sedan / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "5",
    notable_details: [
      "American-inspired styling",
      "Popular British family car",
      "Exported globally under GM brands"
    ],
    tags: ["classic", "family", "inline-4"],
    image_gallery: [
      "images/vauxhall-victor/1.jpg",
      "images/vauxhall-victor/2.jpg",
      "images/vauxhall-victor/3.jpg"
    ]
  },
  {
    manufacturer: "Vauxhall",
    model: "Cresta",
    generation: "PA",
    engine: "Inline-6",
    engine_capacity_litres: 2.3,
    years_produced: "1957–1962",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "5–6",
    notable_details: [
      "Distinctive American-style tailfins",
      "One of the most luxurious Vauxhalls of its era",
      "Smooth inline‑6 engine"
    ],
    tags: ["classic", "luxury", "inline-6"],
    image_gallery: [
      "images/vauxhall-cresta/1.jpg",
      "images/vauxhall-cresta/2.jpg",
      "images/vauxhall-cresta/3.jpg"
    ]
  },
  {
    manufacturer: "Vauxhall",
    model: "Viva",
    generation: "HA",
    engine: "Inline-4",
    engine_capacity_litres: 1.0,
    years_produced: "1963–1966",
    body_style: "Sedan",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Compact economy car",
      "Lightweight and simple to maintain",
      "Popular with young families"
    ],
    tags: ["classic", "compact", "inline-4"],
    image_gallery: [
      "images/vauxhall-viva/1.jpg",
      "images/vauxhall-viva/2.jpg",
      "images/vauxhall-viva/3.jpg"
    ]
  },
  {
    manufacturer: "Vauxhall",
    model: "Firenza",
    generation: "Droopsnoot",
    engine: "Inline-4",
    engine_capacity_litres: 2.3,
    years_produced: "1973–1975",
    body_style: "Coupe",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Iconic aerodynamic 'droopsnoot' nose",
      "Rare and collectible",
      "Performance‑oriented variant of the Viva platform"
    ],
    tags: ["classic", "sports", "inline-4", "rare"],
    image_gallery: [
      "images/vauxhall-firenza/1.jpg",
      "images/vauxhall-firenza/2.jpg",
      "images/vauxhall-firenza/3.jpg"
    ]
  },

  {
    manufacturer: "Reliant",
    model: "Robin",
    generation: "Mk I",
    engine: "Inline-4",
    engine_capacity_litres: 0.75,
    years_produced: "1973–1981",
    body_style: "3-Wheeler",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Famous three-wheeled British microcar",
      "Extremely lightweight fiberglass body",
      "Cult status thanks to TV shows like 'Only Fools and Horses'"
    ],
    tags: ["quirky", "3-wheeler", "classic", "lightweight"],
    image_gallery: [
      "images/reliant-robin/1.jpg",
      "images/reliant-robin/2.jpg",
      "images/reliant-robin/3.jpg"
    ]
  },
  {
    manufacturer: "Reliant",
    model: "Regal",
    generation: "Supervan III",
    engine: "Inline-4",
    engine_capacity_litres: 0.7,
    years_produced: "1962–1973",
    body_style: "3-Wheeler Van",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "2",
    notable_details: [
      "Predecessor to the Robin",
      "Fiberglass body kept weight extremely low",
      "Often converted into delivery vans"
    ],
    tags: ["classic", "3-wheeler", "utility", "lightweight"],
    image_gallery: [
      "images/reliant-regal/1.jpg",
      "images/reliant-regal/2.jpg",
      "images/reliant-regal/3.jpg"
    ]
  },
  {
    manufacturer: "Reliant",
    model: "Scimitar GTE",
    generation: "SE5",
    engine: "V6",
    engine_capacity_litres: 3.0,
    years_produced: "1968–1975",
    body_style: "Shooting Brake",
    drivetrain: "RWD",
    transmission: ["Manual", "Automatic"],
    seating: "4",
    notable_details: [
      "Fiberglass-bodied sports estate",
      "Princess Anne famously owned several",
      "Practical performance car ahead of its time"
    ],
    tags: ["classic", "sports", "shooting-brake", "v6"],
    image_gallery: [
      "images/reliant-scimitar/1.jpg",
      "images/reliant-scimitar/2.jpg",
      "images/reliant-scimitar/3.jpg"
    ]
  },
  {
    manufacturer: "Reliant",
    model: "Kitten",
    generation: "Base",
    engine: "Inline-4",
    engine_capacity_litres: 0.85,
    years_produced: "1975–1982",
    body_style: "Compact Hatchback / Estate",
    drivetrain: "RWD",
    transmission: ["Manual"],
    seating: "4",
    notable_details: [
      "Four-wheeled alternative to the Robin",
      "Fiberglass body for low weight",
      "Surprisingly good handling"
    ],
    tags: ["compact", "classic", "lightweight", "inline-4"],
    image_gallery: [
      "images/reliant-kitten/1.jpg",
      "images/reliant-kitten/2.jpg",
      "images/reliant-kitten/3.jpg"
    ]
  }

  
];
