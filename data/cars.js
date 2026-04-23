const britishCars = [
  // 1. AC Cars — AC Cobra
  {
    manufacturer: "AC Cars",
    slug: "ac-cars",
    brand_group: "Niche Performance",
    brand_url: "https://www.accars.eu",
    model: "AC Cobra",
    model_slug: "ac-cobra",
    model_summary: "A brutal Anglo-American sports car combining a lightweight British chassis with big American V8 power.",
    years_produced: "1962–1967",
    engine: "4.7L–7.0L Ford V8",
    horsepower: 271,
    top_speed_mph: 150,
    body_style: "2-door roadster",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 2,
    production_location: "Thames Ditton, England",
    designer: "John Tojeiro (chassis), Carroll Shelby (concept integration)",
    price_when_new: "≈£2,700 (mid-1960s, depending on spec)",
    current_value_range: "£500,000–£2,000,000+ (original cars)",
    model_type: "sports car",
    tags: [
      "classic",
      "v8",
      "rwd",
      "roadster",
      "motorsport",
      "iconic",
      "anglo-american"
    ],
    notable_details: [
      "Based on the AC Ace chassis, re-engineered to accept Ford V8 engines.",
      "One of the most feared and charismatic sports cars of the 1960s.",
      "Spawned countless replicas and continuation models."
    ],
    fun_facts: [
      "The 427 Cobra was so fast that period testers struggled to get clean performance figures.",
      "Carroll Shelby famously shoehorned the Ford V8 into the AC chassis in a very short development window."
    ],
    notable_achievements: [
      "Competed successfully in international GT racing in the 1960s.",
      "Helped establish Shelby’s reputation and paved the way for the Shelby Mustang."
    ],
    variants: [
      { name: "260", years: "1962–1963", engine: "4.3L Ford V8" },
      { name: "289", years: "1963–1965", engine: "4.7L Ford V8" },
      { name: "427", years: "1965–1967", engine: "7.0L Ford V8" }
    ],
    hero_image: "images/cars/ac-cars/ac-cobra/hero.jpg",
    image_gallery: [
      "images/cars/ac-cars/ac-cobra/1.jpg",
      "images/cars/ac-cars/ac-cobra/2.jpg",
      "images/cars/ac-cars/ac-cobra/3.jpg"
    ]
  },

  // 2. Aston Martin — DB5
  {
    manufacturer: "Aston Martin",
    slug: "aston-martin",
    brand_group: "Luxury Grand Tourer",
    brand_url: "https://www.astonmartin.com",
    model: "DB5",
    model_slug: "db5",
    model_summary: "The quintessential Aston Martin grand tourer, immortalised by its role as James Bond’s car.",
    years_produced: "1963–1965",
    engine: "4.0L inline-6",
    horsepower: 282,
    top_speed_mph: 145,
    body_style: "2-door coupé",
    drivetrain: "RWD",
    transmission: "5-speed manual",
    seating: 4,
    production_location: "Newport Pagnell, England",
    designer: "Carrozzeria Touring (Superleggera body)",
    price_when_new: "≈£4,175 (1960s)",
    current_value_range: "£600,000–£1,500,000+",
    model_type: "grand tourer",
    tags: [
      "classic",
      "grand-tourer",
      "luxury",
      "inline-6",
      "rwd",
      "bond-car",
      "iconic"
    ],
    notable_details: [
      "Evolution of the DB4 with a larger 4.0L engine and more refinement.",
      "Hand-built with Aston Martin’s traditional craftsmanship.",
      "Offered in coupé, convertible, and very rare shooting brake forms."
    ],
    fun_facts: [
      "Became world-famous as James Bond’s car in Goldfinger and Thunderball.",
      "Replica and continuation DB5s have been built with working Bond-style gadgets."
    ],
    notable_achievements: [
      "Widely regarded as one of the most beautiful GT cars ever made.",
      "Helped cement Aston Martin’s image as the ultimate British gentleman’s express."
    ],
    variants: [
      { name: "DB5 Coupé", years: "1963–1965", engine: "4.0L I6" },
      { name: "DB5 Convertible", years: "1963–1965", engine: "4.0L I6" },
      { name: "DB5 Vantage", years: "1964–1965", engine: "4.0L I6 (higher output)" }
    ],
    hero_image: "images/cars/aston-martin/db5/hero.jpg",
    image_gallery: [
      "images/cars/aston-martin/db5/1.jpg",
      "images/cars/aston-martin/db5/2.jpg",
      "images/cars/aston-martin/db5/3.jpg"
    ]
  },

  // 3. Austin — Austin-Healey 3000 (as Austin’s representative)
  {
    manufacturer: "Austin",
    slug: "austin",
    brand_group: "British Leyland / Classic Heritage",
    brand_url: "https://www.britishmotormuseum.co.uk",
    model: "Austin-Healey 3000",
    model_slug: "austin-healey-3000",
    model_summary: "A classic British big-engined roadster that blended Austin engineering with Healey sports car flair.",
    years_produced: "1959–1967",
    engine: "2.9L inline-6",
    horsepower: 124,
    top_speed_mph: 120,
    body_style: "2-door roadster",
    drivetrain: "RWD",
    transmission: "4-speed manual (with overdrive on many cars)",
    seating: 2,
    production_location: "Abingdon, England",
    designer: "Gerry Coker (original Healey shape evolution)",
    price_when_new: "≈£1,000–£1,200 (1960s, depending on spec)",
    current_value_range: "£40,000–£120,000",
    model_type: "sports car",
    tags: [
      "classic",
      "roadster",
      "inline-6",
      "rwd",
      "british-leyland",
      "sports-car"
    ],
    notable_details: [
      "Marketed as the ‘Big Healey’ due to its larger engine compared to the Sprite.",
      "Popular in both road use and rally competition.",
      "Known for its torquey engine and charismatic exhaust note."
    ],
    fun_facts: [
      "The Austin-Healey 3000 was particularly successful in European rallying.",
      "Its combination of comfort and performance made it a favourite export to North America."
    ],
    notable_achievements: [
      "Strong results in events like the Monte Carlo Rally and other international rallies.",
      "Helped establish the reputation of British sports cars in the US market."
    ],
    variants: [
      { name: "3000 Mk I", years: "1959–1961", engine: "2.9L I6" },
      { name: "3000 Mk II", years: "1961–1963", engine: "2.9L I6 (triple carb early, twin carb later)" },
      { name: "3000 Mk III", years: "1963–1967", engine: "2.9L I6 (more luxurious interior)" }
    ],
    hero_image: "images/cars/austin/austin-healey-3000/hero.jpg",
    image_gallery: [
      "images/cars/austin/austin-healey-3000/1.jpg",
      "images/cars/austin/austin-healey-3000/2.jpg",
      "images/cars/austin/austin-healey-3000/3.jpg"
    ]
  },

  // 4. Austin-Healey — 3000 MkIII
  {
    manufacturer: "Austin-Healey",
    slug: "austin-healey",
    brand_group: "Classic Sports",
    brand_url: "https://www.britishmotormuseum.co.uk",
    model: "3000 MkIII",
    model_slug: "3000-mkiii",
    model_summary: "The final and most refined evolution of the ‘Big Healey’ sports car line.",
    years_produced: "1963–1967",
    engine: "2.9L inline-6",
    horsepower: 148,
    top_speed_mph: 121,
    body_style: "2-door roadster / convertible",
    drivetrain: "RWD",
    transmission: "4-speed manual with overdrive",
    seating: 2,
    production_location: "Abingdon, England",
    designer: "Gerry Coker (evolved Healey design)",
    price_when_new: "≈£1,100–£1,300 (mid-1960s)",
    current_value_range: "£50,000–£130,000",
    model_type: "sports car",
    tags: [
      "classic",
      "roadster",
      "inline-6",
      "rwd",
      "sports-car",
      "big-healey"
    ],
    notable_details: [
      "Featured a more luxurious interior than earlier 3000s, with a wooden dashboard.",
      "Often considered the most desirable of the Big Healeys.",
      "Improved braking and refinement over earlier versions."
    ],
    fun_facts: [
      "The 3000 MkIII is a favourite at classic car shows and rallies worldwide.",
      "Its blend of torque, sound, and style makes it a quintessential British roadster."
    ],
    notable_achievements: [
      "Continued the competition legacy of earlier 3000s in club and historic events.",
      "Remains one of the most collectible British sports cars of the 1960s."
    ],
    variants: [
      { name: "Phase I", years: "1963–1964", engine: "2.9L I6" },
      { name: "Phase II", years: "1964–1967", engine: "2.9L I6 (revised rear suspension)" }
    ],
    hero_image: "images/cars/austin-healey/3000-mkiii/hero.jpg",
    image_gallery: [
      "images/cars/austin-healey/3000-mkiii/1.jpg",
      "images/cars/austin-healey/3000-mkiii/2.jpg",
      "images/cars/austin-healey/3000-mkiii/3.jpg"
    ]
  },

  // 5. Bentley — Continental GT
  {
    manufacturer: "Bentley",
    slug: "bentley",
    brand_group: "Luxury Grand Tourer",
    brand_url: "https://www.bentleymotors.com",
    model: "Continental GT",
    model_slug: "continental-gt",
    model_summary: "A modern British luxury grand tourer combining immense power with handcrafted refinement.",
    years_produced: "2003–present",
    engine: "6.0L twin-turbo W12 (early), later V8 options",
    horsepower: 552,
    top_speed_mph: 198,
    body_style: "2-door coupé",
    drivetrain: "AWD (most variants)",
    transmission: "6-speed automatic (early), later dual-clutch units",
    seating: 4,
    production_location: "Crewe, England",
    designer: "Dirk van Braeckel and team",
    price_when_new: "≈£110,000+ (early models)",
    current_value_range: "£20,000–£200,000+ (depending on generation and spec)",
    model_type: "grand tourer",
    tags: [
      "modern",
      "luxury",
      "grand-tourer",
      "w12",
      "v8",
      "awd",
      "high-performance"
    ],
    notable_details: [
      "Marked Bentley’s major revival under Volkswagen Group ownership.",
      "Blends supercar performance with luxury car comfort.",
      "Spawned multiple generations and performance variants."
    ],
    fun_facts: [
      "Early Continental GTs were among the fastest four-seat coupés in the world.",
      "Frequently seen in music videos and celebrity garages as a symbol of success."
    ],
    notable_achievements: [
      "Helped re-establish Bentley as a modern performance-luxury brand.",
      "Formed the basis for successful GT3 racing versions."
    ],
    variants: [
      { name: "Continental GT (Gen 1)", years: "2003–2011", engine: "6.0L twin-turbo W12" },
      { name: "Continental GT Speed", years: "2007–2011", engine: "6.0L twin-turbo W12 (higher output)" },
      { name: "Continental GT (Gen 2 & 3)", years: "2011–present", engine: "W12 and 4.0L twin-turbo V8 options" }
    ],
    hero_image: "images/cars/bentley/continental-gt/hero.jpg",
    image_gallery: [
      "images/cars/bentley/continental-gt/1.jpg",
      "images/cars/bentley/continental-gt/2.jpg",
      "images/cars/bentley/continental-gt/3.jpg"
    ]
  },

  // 6. Bristol — 411
  {
    manufacturer: "Bristol",
    slug: "bristol",
    brand_group: "Luxury / Coachbuilt",
    brand_url: "https://www.bristolcars.com",
    model: "411",
    model_slug: "411",
    model_summary: "A hand-built British luxury GT known for its understated styling and powerful Chrysler V8 engines.",
    years_produced: "1969–1976",
    engine: "5.2L–6.3L Chrysler V8",
    horsepower: 335,
    top_speed_mph: 143,
    body_style: "2-door coupé",
    drivetrain: "RWD",
    transmission: "3-speed automatic",
    seating: 4,
    production_location: "Filton, Bristol, England",
    designer: "Bristol Cars engineering team",
    price_when_new: "≈£6,500 (early 1970s)",
    current_value_range: "£40,000–£120,000",
    model_type: "grand tourer",
    tags: [
      "luxury",
      "v8",
      "coachbuilt",
      "grand-tourer",
      "rwd",
      "classic"
    ],
    notable_details: [
      "Bristol cars were sold only through a single London showroom for decades.",
      "The 411 was known for its exceptional refinement and long-distance comfort."
    ],
    fun_facts: [
      "Bristol Cars famously refused to lend cars to journalists for road tests.",
      "The company originated from the Bristol Aeroplane Company."
    ],
    notable_achievements: [
      "Regarded as one of the fastest four-seat cars of its era.",
      "Praised for its engineering integrity and exclusivity."
    ],
    variants: [
      { name: "Series 1", years: "1969–1970", engine: "5.2L V8" },
      { name: "Series 2–5", years: "1970–1976", engine: "6.3L V8" }
    ],
    hero_image: "images/cars/bristol/411/hero.jpg",
    image_gallery: [
      "images/cars/bristol/411/1.jpg",
      "images/cars/bristol/411/2.jpg",
      "images/cars/bristol/411/3.jpg"
    ]
  },

  // 7. Caterham — Seven 420
  {
    manufacturer: "Caterham",
    slug: "caterham",
    brand_group: "Niche Performance",
    brand_url: "https://www.caterhamcars.com",
    model: "Seven 420",
    model_slug: "seven-420",
    model_summary: "A lightweight, minimalist track-focused sports car descended from the legendary Lotus Seven.",
    years_produced: "2015–present",
    engine: "2.0L Ford Duratec",
    horsepower: 210,
    top_speed_mph: 136,
    body_style: "open two-seater",
    drivetrain: "RWD",
    transmission: "5-speed or 6-speed manual",
    seating: 2,
    production_location: "Dartford, England",
    designer: "Caterham engineering team (based on Colin Chapman’s original concept)",
    price_when_new: "≈£35,000–£45,000",
    current_value_range: "£25,000–£50,000",
    model_type: "sports car",
    tags: [
      "lightweight",
      "track-car",
      "rwd",
      "manual",
      "modern",
      "performance"
    ],
    notable_details: [
      "Weighs around 560 kg, giving it an incredible power-to-weight ratio.",
      "One of the purest driving experiences available today."
    ],
    fun_facts: [
      "The Seven has been in continuous production (via Lotus then Caterham) since 1957.",
      "Often used in one-make racing series."
    ],
    notable_achievements: [
      "Dominates amateur track-day events due to its agility.",
      "A benchmark for lightweight sports car handling."
    ],
    variants: [
      { name: "Seven 420", years: "2015–present", engine: "2.0L I4" },
      { name: "Seven 420R", years: "2015–present", engine: "2.0L I4 (track-focused)" }
    ],
    hero_image: "images/cars/caterham/seven-420/hero.jpg",
    image_gallery: [
      "images/cars/caterham/seven-420/1.jpg",
      "images/cars/caterham/seven-420/2.jpg",
      "images/cars/caterham/seven-420/3.jpg"
    ]
  },

  // 8. Hillman — Imp
  {
    manufacturer: "Hillman",
    slug: "hillman",
    brand_group: "British Leyland / Classic Heritage",
    brand_url: "https://www.rootesarchive.org",
    model: "Imp",
    model_slug: "imp",
    model_summary: "A rear-engined compact car known for its innovative engineering and rally success.",
    years_produced: "1963–1976",
    engine: "0.9L inline-4 (alloy engine)",
    horsepower: 39,
    top_speed_mph: 80,
    body_style: "2-door saloon / coupé",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 4,
    production_location: "Linwood, Scotland",
    designer: "Rootes Group engineering team",
    price_when_new: "≈£500–£600",
    current_value_range: "£3,000–£12,000",
    model_type: "compact car",
    tags: [
      "classic",
      "compact",
      "rwd",
      "rear-engined",
      "rally",
      "economy-car"
    ],
    notable_details: [
      "Featured an advanced all-aluminum engine derived from a Coventry Climax design.",
      "Rear-engine layout gave it excellent traction."
    ],
    fun_facts: [
      "The Imp was built in a purpose-built factory in Scotland to boost local employment.",
      "Its engine design was originally intended for fire pumps."
    ],
    notable_achievements: [
      "Successful in rallying, especially in the hands of privateers.",
      "Praised for its handling and rev-happy engine."
    ],
    variants: [
      { name: "Imp", years: "1963–1976", engine: "0.9L I4" },
      { name: "Imp Sport", years: "1967–1970", engine: "0.9L I4 (higher output)" }
    ],
    hero_image: "images/cars/hillman/imp/hero.jpg",
    image_gallery: [
      "images/cars/hillman/imp/1.jpg",
      "images/cars/hillman/imp/2.jpg",
      "images/cars/hillman/imp/3.jpg"
    ]
  },

  // 9. Jaguar — E-Type
  {
    manufacturer: "Jaguar",
    slug: "jaguar",
    brand_group: "Luxury / Sports",
    brand_url: "https://www.jaguar.com",
    model: "E-Type",
    model_slug: "e-type",
    model_summary: "A legendary British sports car celebrated for its beauty, performance, and motorsport heritage.",
    years_produced: "1961–1974",
    engine: "3.8L / 4.2L I6, later 5.3L V12",
    horsepower: 265,
    top_speed_mph: 150,
    body_style: "2-door coupé / roadster",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 2,
    production_location: "Coventry, England",
    designer: "Malcolm Sayer",
    price_when_new: "≈£2,097 (1961)",
    current_value_range: "£70,000–£300,000+",
    model_type: "sports car",
    tags: [
      "classic",
      "sports-car",
      "inline-6",
      "v12",
      "rwd",
      "iconic"
    ],
    notable_details: [
      "Introduced disc brakes, monocoque construction, and advanced aerodynamics for its time.",
      "Series 3 introduced Jaguar’s first production V12 engine."
    ],
    fun_facts: [
      "Enzo Ferrari called it 'the most beautiful car ever made'.",
      "Featured in films like Austin Powers and Mad Men."
    ],
    notable_achievements: [
      "Won multiple SCCA championships.",
      "A design icon displayed in the Museum of Modern Art."
    ],
    variants: [
      { name: "Series 1", years: "1961–1967", engine: "3.8L / 4.2L I6" },
      { name: "Series 2", years: "1968–1971", engine: "4.2L I6" },
      { name: "Series 3", years: "1971–1974", engine: "5.3L V12" }
    ],
    hero_image: "images/cars/jaguar/e-type/hero.jpg",
    image_gallery: [
      "images/cars/jaguar/e-type/1.jpg",
      "images/cars/jaguar/e-type/2.jpg",
      "images/cars/jaguar/e-type/3.jpg"
    ]
  },

  // 10. Jensen — Interceptor
  {
    manufacturer: "Jensen",
    slug: "jensen",
    brand_group: "Luxury / GT",
    brand_url: "https://www.jensenmuseum.org",
    model: "Interceptor",
    model_slug: "interceptor",
    model_summary: "A stylish grand tourer with Italian design, British craftsmanship, and American V8 power.",
    years_produced: "1966–1976",
    engine: "6.3L–7.2L Chrysler V8",
    horsepower: 280,
    top_speed_mph: 135,
    body_style: "2-door coupé",
    drivetrain: "RWD (FF version AWD)",
    transmission: "3-speed automatic",
    seating: 4,
    production_location: "West Bromwich, England",
    designer: "Carrozzeria Touring",
    price_when_new: "≈£3,700 (late 1960s)",
    current_value_range: "£20,000–£80,000",
    model_type: "grand tourer",
    tags: [
      "classic",
      "grand-tourer",
      "v8",
      "luxury",
      "rwd",
      "italian-design"
    ],
    notable_details: [
      "The Interceptor FF was the world’s first production car with full-time AWD and ABS.",
      "Distinctive wraparound rear window became its signature feature."
    ],
    fun_facts: [
      "The FF version was years ahead of Audi Quattro and Subaru AWD tech.",
      "Celebrity owners included Frank Sinatra and Cher."
    ],
    notable_achievements: [
      "Pioneered modern AWD technology in a GT car.",
      "A cult classic among collectors today."
    ],
    variants: [
      { name: "Interceptor Mk I", years: "1966–1969", engine: "6.3L V8" },
      { name: "Interceptor Mk II", years: "1969–1971", engine: "6.3L V8" },
      { name: "Interceptor Mk III", years: "1971–1976", engine: "7.2L V8" }
    ],
    hero_image: "images/cars/jensen/interceptor/hero.jpg",
    image_gallery: [
      "images/cars/jensen/interceptor/1.jpg",
      "images/cars/jensen/interceptor/2.jpg",
      "images/cars/jensen/interceptor/3.jpg"
    ]
  },
  // 11. Land Rover — Defender 90
  {
    manufacturer: "Land Rover",
    slug: "land-rover",
    brand_group: "Utility / Off-Road",
    brand_url: "https://www.landrover.com",
    model: "Defender 90",
    model_slug: "defender-90",
    model_summary: "A rugged British off-roader renowned for its durability, versatility, and expedition heritage.",
    years_produced: "1983–2016 (original), 2020–present (new generation)",
    engine: "2.5L diesel / 3.5L V8 (classic), various modern engines",
    horsepower: 83,
    top_speed_mph: 85,
    body_style: "2-door off-road utility",
    drivetrain: "4WD",
    transmission: "5-speed manual (classic), modern automatics available",
    seating: 2,
    production_location: "Solihull, England",
    designer: "Land Rover engineering team",
    price_when_new: "≈£11,000 (1990s)",
    current_value_range: "£15,000–£80,000+ (classic models)",
    model_type: "off-road vehicle",
    tags: [
      "4x4",
      "off-road",
      "utility",
      "classic",
      "expedition",
      "rugged"
    ],
    notable_details: [
      "Known for its boxy design and ladder-frame chassis.",
      "Used by military, farmers, explorers, and NGOs worldwide."
    ],
    fun_facts: [
      "The Defender has appeared in multiple James Bond films.",
      "Early Land Rovers used surplus aircraft paint after WWII."
    ],
    notable_achievements: [
      "One of the most capable off-road vehicles ever built.",
      "Used in global expeditions including Camel Trophy events."
    ],
    variants: [
      { name: "Defender 90", years: "1983–2016", engine: "various I4/I5 diesels, 3.5L V8" },
      { name: "Defender 90 (New Gen)", years: "2020–present", engine: "I4, I6, V8 options" }
    ],
    hero_image: "images/cars/land-rover/defender-90/hero.jpg",
    image_gallery: [
      "images/cars/land-rover/defender-90/1.jpg",
      "images/cars/land-rover/defender-90/2.jpg",
      "images/cars/land-rover/defender-90/3.jpg"
    ]
  },

// 12. Lotus — Emira
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Sports / Performance",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Emira",
  model_slug: "emira",
  model_summary: "Lotus’s final petrol-powered sports car, blending modern refinement with classic lightweight handling.",
  years_produced: "2021–present",
  engine: "3.5L supercharged V6",
  horsepower: 400,
  top_speed_mph: 180,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual or automatic",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£60,000–£75,000",
  current_value_range: "£60,000–£90,000",
  model_type: "sports car",
  tags: ["modern", "sports-car", "lightweight", "rwd", "manual", "performance"],
  notable_details: [
    "Represents the end of Lotus’s internal combustion era.",
    "More refined and luxurious than previous Lotus models."
  ],
  fun_facts: [
    "Shares some development DNA with AMG for the I4 engine.",
    "Designed to appeal to both purists and newcomers to the brand."
  ],
  notable_achievements: [
    "Praised for its handling balance and steering feel.",
    "Considered a return to form for Lotus in the modern era."
  ],
  variants: [
    { name: "Emira V6", years: "2021–present", engine: "3.5L supercharged V6" },
    { name: "Emira I4", years: "2023–present", engine: "2.0L turbo I4" }
  ],
  hero_image: "images/cars/lotus/emira/hero.jpg",
  image_gallery: [
    "images/cars/lotus/emira/1.jpg",
    "images/cars/lotus/emira/2.jpg",
    "images/cars/lotus/emira/3.jpg"
  ]
},

// Lotus — Emira AMG I4
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Modern Sports Car",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Emira AMG I4",
  model_slug: "emira-i4",
  model_summary: "The AMG-powered variant of the Emira, featuring a turbocharged four-cylinder engine co-developed with Mercedes-AMG for sharper response and reduced weight.",
  years_produced: "2023–present",
  engine: "2.0L turbocharged I4",
  horsepower: "360–365",
  top_speed_mph: 171,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "8-speed DCT",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£72,000–£80,000",
  current_value_range: "£70,000–£85,000",
  model_type: "sports car",
  tags: ["modern", "turbo", "amg", "lightweight"],
  notable_details: [
    "Uses the same M139 engine found in AMG’s top performance models.",
    "Offers quicker shifts and sharper throttle response than the V6 Emira."
  ],
  fun_facts: [
    "The most fuel-efficient Emira variant.",
    "Lotus tuned the AMG engine to deliver a more linear powerband."
  ],
  notable_achievements: [
    "Praised for its balance of performance and efficiency.",
    "Considered the more 'modern' interpretation of the Emira."
  ],
  variants: [
    { name: "Emira AMG I4", years: "2023–present", engine: "2.0L turbo I4" }
  ],
  hero_image: "images/cars/lotus/emira-i4/hero.jpg",
  image_gallery: [
    "images/cars/lotus/emira-i4/1.jpg",
    "images/cars/lotus/emira-i4/2.jpg",
    "images/cars/lotus/emira-i4/3.jpg"
  ]
},

// Lotus — Evora GT
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Grand Touring Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Evora GT",
  model_slug: "evora-gt",
  model_summary: "The final and most powerful evolution of the Evora line, blending touring comfort with Lotus’s signature lightweight handling.",
  years_produced: "2020–2021",
  engine: "3.5L supercharged V6",
  horsepower: "416–430",
  top_speed_mph: 188,
  body_style: "2+2 coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual or automatic",
  seating: "2 or 2+2",
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£90,000–£110,000",
  current_value_range: "£80,000–£120,000",
  model_type: "grand touring sports car",
  tags: ["gt", "supercharged", "modern"],
  notable_details: [
    "Final ICE Lotus sold in North America.",
    "Optional carbon packs significantly reduced weight."
  ],
  fun_facts: [
    "One of the last analog-feeling sports cars of the 2020s.",
    "Praised for its steering feel and chassis balance."
  ],
  notable_achievements: [
    "Regarded as the best long-distance Lotus ever built.",
    "A favorite among purist drivers."
  ],
  variants: [
    { name: "Evora GT Manual", years: "2020–2021", engine: "416 hp V6" },
    { name: "Evora GT Automatic", years: "2020–2021", engine: "416 hp V6" }
  ],
  hero_image: "images/cars/lotus/evora-gt/hero.jpg",
  image_gallery: [
    "images/cars/lotus/evora-gt/1.jpg",
    "images/cars/lotus/evora-gt/2.jpg",
    "images/cars/lotus/evora-gt/3.jpg"
  ]
},

// Lotus — Evora 400
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Grand Touring Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Evora 400",
  model_slug: "evora-400",
  model_summary: "A major performance leap for the Evora line, offering 400 horsepower and improved refinement while retaining Lotus’s lightweight ethos.",
  years_produced: "2015–2020",
  engine: "3.5L supercharged V6",
  horsepower: "394–400",
  top_speed_mph: 186,
  body_style: "2+2 coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual or automatic",
  seating: "2 or 2+2",
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£72,000–£82,000",
  current_value_range: "£50,000–£70,000",
  model_type: "grand touring sports car",
  tags: ["gt", "supercharged"],
  fun_facts: [
    "The Evora 400 was 22 kg lighter than the Evora S.",
    "Featured a completely redesigned interior."
  ],
  notable_achievements: [
    "Marked Lotus’s return to higher-performance GT cars.",
    "Received praise for its improved usability."
  ],
  variants: [
    { name: "Evora 400", years: "2015–2020", engine: "400 hp V6" }
  ],
  hero_image: "images/cars/lotus/evora-400/hero.jpg",
  image_gallery: [
    "images/cars/lotus/evora-400/1.jpg",
    "images/cars/lotus/evora-400/2.jpg",
    "images/cars/lotus/evora-400/3.jpg"
  ]
},

// Lotus — Exige Sport 410
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Track / Performance",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Exige Sport 410",
  model_slug: "exige-sport-410",
  model_summary: "A track-focused evolution of the Exige platform, combining a supercharged V6 with extreme aerodynamics and Lotus’s signature lightweight chassis.",
  years_produced: "2018–2021",
  engine: "3.5L supercharged V6",
  horsepower: "405–410",
  top_speed_mph: 180,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£85,000–£100,000",
  current_value_range: "£75,000–£110,000",
  model_type: "track-focused sports car",
  tags: ["track", "lightweight", "supercharged"],
  fun_facts: [
    "Generates over 150 kg of downforce at top speed.",
    "Weighs under 2,500 lbs."
  ],
  notable_achievements: [
    "One of the most extreme road-legal Lotus models ever built."
  ],
  variants: [
    { name: "Sport 410", years: "2018–2021", engine: "410 hp V6" }
  ],
  hero_image: "images/cars/lotus/exige-sport-410/hero.jpg",
  image_gallery: [
    "images/cars/lotus/exige-sport-410/1.jpg",
    "images/cars/lotus/exige-sport-410/2.jpg",
    "images/cars/lotus/exige-sport-410/3.jpg"
  ]
},

// Lotus — Exige Cup 430
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Track / Performance",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Exige Cup 430",
  model_slug: "exige-cup-430",
  model_summary: "The most extreme Exige ever built, combining a 430 hp supercharged V6 with aggressive aero and race-ready components.",
  years_produced: "2017–2021",
  engine: "3.5L supercharged V6",
  horsepower: "424–430",
  top_speed_mph: 180,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£100,000–£120,000",
  current_value_range: "£90,000–£140,000",
  model_type: "track-focused sports car",
  tags: ["track", "supercharged", "limited"],
  notable_details: [
    "Features Öhlins dampers and AP Racing brakes as standard.",
    "One of the highest power-to-weight ratios of any Lotus."
  ],
  fun_facts: [
    "Nicknamed the 'Lotus GT3 car for the road'."
  ],
  notable_achievements: [
    "Fastest road-legal Lotus around Hethel at launch."
  ],
  variants: [
    { name: "Cup 430", years: "2017–2021", engine: "430 hp V6" }
  ],
  hero_image: "images/cars/lotus/exige-cup-430/hero.jpg",
  image_gallery: [
    "images/cars/lotus/exige-cup-430/1.jpg",
    "images/cars/lotus/exige-cup-430/2.jpg",
    "images/cars/lotus/exige-cup-430/3.jpg"
  ]
},

// Lotus — Elise Cup 250
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Lightweight Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Elise Cup 250",
  model_slug: "elise-cup-250",
  model_summary: "A lightweight, track-ready evolution of the Elise, offering razor-sharp handling and a supercharged four-cylinder engine.",
  years_produced: "2016–2021",
  engine: "1.8L supercharged I4",
  horsepower: "243–250",
  top_speed_mph: 154,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Julian Thomson",
  price_when_new: "≈£45,000–£55,000",
  current_value_range: "£40,000–£65,000",
  model_type: "lightweight sports car",
  tags: ["lightweight", "supercharged"],
  fun_facts: [
    "Weighs under 900 kg.",
    "Carbon aero pieces were optional to reduce weight further."
  ],
  notable_achievements: [
    "One of the last Elise models before production ended in 2021."
  ],
  variants: [
    { name: "Cup 250", years: "2016–2021", engine: "243–250 hp I4" }
  ],
  hero_image: "images/cars/lotus/elise-cup-250/hero.jpg",
  image_gallery: [
    "images/cars/lotus/elise-cup-250/1.jpg",
    "images/cars/lotus/elise-cup-250/2.jpg",
    "images/cars/lotus/elise-cup-250/3.jpg"
  ]
},

// Lotus — Elise Sport 240 Final Edition
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Lightweight Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Elise Sport 240 Final Edition",
  model_slug: "elise-sport-240",
  model_summary: "The final evolution of the Elise platform, offering improved power, reduced weight, and special-edition features to celebrate the end of production.",
  years_produced: "2021",
  engine: "1.8L supercharged I4",
  horsepower: "240–243",
  top_speed_mph: 151,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Julian Thomson",
  price_when_new: "≈£45,000–£52,000",
  current_value_range: "£50,000–£70,000",
  model_type: "lightweight sports car",
  tags: ["final-edition", "lightweight"],
  notable_details: [
    "Features a redesigned digital dash and lightweight forged wheels."
  ],
  fun_facts: [
    "One of the last ICE Lotus models ever produced."
  ],
  notable_achievements: [
    "A collector favorite due to its 'Final Edition' status."
  ],
  variants: [
    { name: "Sport 240 Final Edition", years: "2021", engine: "240 hp I4" }
  ],
  hero_image: "images/cars/lotus/elise-sport-240/hero.jpg",
  image_gallery: [
    "images/cars/lotus/elise-sport-240/1.jpg",
    "images/cars/lotus/elise-sport-240/2.jpg",
    "images/cars/lotus/elise-sport-240/3.jpg"
  ]
},

// Lotus — Evija
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Electric Hypercar",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Evija",
  model_slug: "evija",
  model_summary: "Lotus’s first fully electric hypercar, delivering extreme power, advanced aerodynamics, and a design inspired by Le Mans prototypes.",
  years_produced: "2020–present",
  engine: "Quad electric motors",
  horsepower: "1970–2000",
  top_speed_mph: 200,
  body_style: "2-door coupé",
  drivetrain: "AWD",
  transmission: "Single-speed",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Russell Carr",
  price_when_new: "≈£2,000,000",
  current_value_range: "£2,000,000+",
  model_type: "electric hypercar",
  tags: ["electric", "hypercar", "awd", "limited-production"],
  notable_details: [
    "Limited to just 130 units worldwide.",
    "Features a Venturi tunnel aerodynamic design inspired by endurance racing."
  ],
  fun_facts: [
    "One of the most powerful production cars ever built.",
    "Name means 'the first in existence'."
  ],
  notable_achievements: [
    "Lotus’s first fully electric vehicle.",
    "Set new benchmarks for power-to-weight ratio in EV hypercars."
  ],
  variants: [
    { name: "Evija", years: "2020–present", engine: "Quad-motor EV" }
  ],
  hero_image: "images/cars/lotus/evija/hero.jpg",
  image_gallery: [
    "images/cars/lotus/evija/1.jpg",
    "images/cars/lotus/evija/2.jpg",
    "images/cars/lotus/evija/3.jpg"
  ]
},

// Lotus — Eletre
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Electric SUV",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Eletre",
  model_slug: "eletre",
  model_summary: "Lotus’s first electric hyper-SUV, blending performance, practicality, and advanced technology in a bold new direction for the brand.",
  years_produced: "2023–present",
  engine: "Dual or triple electric motors",
  horsepower: "603–905",
  top_speed_mph: 165,
  body_style: "5-door SUV",
  drivetrain: "AWD",
  transmission: "Single-speed",
  seating: "4 or 5",
  production_location: "Wuhan, China",
  designer: "Ben Payne",
  price_when_new: "≈£90,000–£120,000",
  current_value_range: "£85,000–£115,000",
  model_type: "electric SUV",
  tags: ["electric", "suv", "awd"],
  notable_details: [
    "Features LIDAR-based autonomous driving hardware.",
    "Represents Lotus’s first mass-market EV."
  ],
  fun_facts: [
    "The fastest-accelerating Lotus SUV ever made.",
    "Interior design inspired by modern architecture."
  ],
  notable_achievements: [
    "Expanded Lotus into the global luxury EV market.",
    "Praised for combining practicality with Lotus handling DNA."
  ],
  variants: [
    { name: "Eletre S", years: "2023–present", engine: "603 hp dual-motor" },
    { name: "Eletre R", years: "2023–present", engine: "905 hp tri-motor" }
  ],
  hero_image: "images/cars/lotus/eletre/hero.jpg",
  image_gallery: [
    "images/cars/lotus/eletre/1.jpg",
    "images/cars/lotus/eletre/2.jpg",
    "images/cars/lotus/eletre/3.jpg"
  ]
},

// Lotus — Emeya
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Electric Grand Tourer",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "modern",
  model: "Emeya",
  model_slug: "emeya",
  model_summary: "A high-performance electric grand tourer combining luxury, speed, and advanced aerodynamics, positioned as Lotus’s electric flagship sedan.",
  years_produced: "2024–present",
  engine: "Dual or triple electric motors",
  horsepower: "603–905",
  top_speed_mph: 159,
  body_style: "4-door GT sedan",
  drivetrain: "AWD",
  transmission: "Single-speed",
  seating: 5,
  production_location: "Wuhan, China",
  designer: "Ben Payne",
  price_when_new: "≈£95,000–£130,000",
  current_value_range: "£90,000–£125,000",
  model_type: "electric grand tourer",
  tags: ["electric", "gt", "luxury"],
  notable_details: [
    "Features an active rear diffuser and active aero surfaces.",
    "Interior uses sustainable materials including recycled fibers."
  ],
  fun_facts: [
    "Shares its platform with the Eletre SUV.",
    "Designed to compete with high-end electric GTs."
  ],
  notable_achievements: [
    "Praised for its blend of comfort and performance.",
    "One of the quickest electric sedans in its class."
  ],
  variants: [
    { name: "Emeya S", years: "2024–present", engine: "603 hp dual-motor" },
    { name: "Emeya R", years: "2024–present", engine: "905 hp tri-motor" }
  ],
  hero_image: "images/cars/lotus/emeya/hero.jpg",
  image_gallery: [
    "images/cars/lotus/emeya/1.jpg",
    "images/cars/lotus/emeya/2.jpg",
    "images/cars/lotus/emeya/3.jpg"
  ]
},
// Lotus — Esprit V8
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Supercar",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Esprit V8",
  model_slug: "esprit-v8",
  model_summary: "The final and most powerful evolution of the Esprit line, featuring a twin‑turbocharged V8 and exotic wedge styling.",
  years_produced: "1996–2004",
  engine: "3.5L twin‑turbo V8",
  horsepower: "350–360",
  top_speed_mph: 175,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Peter Stevens",
  price_when_new: "≈£60,000–£75,000",
  current_value_range: "£45,000–£75,000",
  model_type: "supercar",
  tags: ["classic", "supercar", "turbo"],
  notable_details: [
    "Lotus designed the V8 engine entirely in-house.",
    "One of the most recognizable British supercars of the 1990s."
  ],
  fun_facts: [
    "James Bond famously drove an Esprit in multiple films.",
    "The V8 was originally engineered to handle far more power."
  ],
  notable_achievements: [
    "A cult classic among 90s supercar enthusiasts."
  ],
  variants: [
    { name: "Esprit V8", years: "1996–2004", engine: "350 hp V8" }
  ],
  hero_image: "images/cars/lotus/esprit-v8/hero.jpg",
  image_gallery: [
    "images/cars/lotus/esprit-v8/1.jpg",
    "images/cars/lotus/esprit-v8/2.jpg",
    "images/cars/lotus/esprit-v8/3.jpg"
  ]
},

// Lotus — Esprit Turbo HC
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Esprit Turbo HC",
  model_slug: "esprit-turbo-hc",
  model_summary: "A high-compression turbocharged version of the Esprit, offering improved performance and sharper throttle response.",
  years_produced: "1986–1987",
  engine: "2.2L turbocharged I4",
  horsepower: "215–220",
  top_speed_mph: 152,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Peter Stevens",
  price_when_new: "≈£25,000",
  current_value_range: "£20,000–£35,000",
  model_type: "sports car",
  tags: ["turbo", "classic"],
  fun_facts: [
    "HC stands for 'High Compression'.",
    "One of the rarest Esprit variants."
  ],
  notable_achievements: [
    "Praised for improved mid-range torque over earlier Esprit Turbos."
  ],
  variants: [
    { name: "Esprit Turbo HC", years: "1986–1987", engine: "215 hp I4" }
  ],
  hero_image: "images/cars/lotus/esprit-turbo-hc/hero.jpg",
  image_gallery: [
    "images/cars/lotus/esprit-turbo-hc/1.jpg",
    "images/cars/lotus/esprit-turbo-hc/2.jpg",
    "images/cars/lotus/esprit-turbo-hc/3.jpg"
  ]
},

// Lotus — Esprit S1
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Esprit S1",
  model_slug: "esprit-s1",
  model_summary: "The original Esprit, famous for its wedge design and its appearance as a submarine in the James Bond film 'The Spy Who Loved Me'.",
  years_produced: "1976–1978",
  engine: "2.0L I4",
  horsepower: "160–165",
  top_speed_mph: 133,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Giorgetto Giugiaro",
  price_when_new: "≈£8,000",
  current_value_range: "£35,000–£70,000",
  model_type: "sports car",
  tags: ["classic", "giugiaro", "bond-car"],
  notable_details: [
    "One of Giugiaro’s most iconic wedge designs."
  ],
  fun_facts: [
    "The Bond submarine car was a modified Esprit S1 shell.",
    "Early models were extremely lightweight."
  ],
  notable_achievements: [
    "Became a pop culture icon thanks to James Bond."
  ],
  variants: [
    { name: "Esprit S1", years: "1976–1978", engine: "160 hp I4" }
  ],
  hero_image: "images/cars/lotus/esprit-s1/hero.jpg",
  image_gallery: [
    "images/cars/lotus/esprit-s1/1.jpg",
    "images/cars/lotus/esprit-s1/2.jpg",
    "images/cars/lotus/esprit-s1/3.jpg"
  ]
},

// Lotus — Elan S1
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Lightweight",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Elan S1",
  model_slug: "elan-s1",
  model_summary: "A lightweight roadster that set new standards for handling and became one of Lotus’s most influential designs.",
  years_produced: "1962–1964",
  engine: "1.6L I4",
  horsepower: "90–105",
  top_speed_mph: 118,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Cheshunt, England",
  designer: "Ron Hickman",
  price_when_new: "≈£1,500",
  current_value_range: "£25,000–£45,000",
  model_type: "lightweight sports car",
  tags: ["classic", "lightweight"],
  fun_facts: [
    "The Elan’s handling inspired the original Mazda MX‑5.",
    "Used a steel backbone chassis with a fiberglass body."
  ],
  notable_achievements: [
    "Considered one of the best-handling cars of the 1960s."
  ],
  variants: [
    { name: "Elan S1", years: "1962–1964", engine: "90–105 hp I4" }
  ],
  hero_image: "images/cars/lotus/elan-s1/hero.jpg",
  image_gallery: [
    "images/cars/lotus/elan-s1/1.jpg",
    "images/cars/lotus/elan-s1/2.jpg",
    "images/cars/lotus/elan-s1/3.jpg"
  ]
},

// Lotus — Elan Sprint
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Lightweight",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Elan Sprint",
  model_slug: "elan-sprint",
  model_summary: "The final and most powerful version of the classic Elan, featuring a twin-cam engine and distinctive two-tone paint.",
  years_produced: "1971–1973",
  engine: "1.6L twin-cam I4",
  horsepower: "126–130",
  top_speed_mph: 121,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Ron Hickman",
  price_when_new: "≈£2,000",
  current_value_range: "£35,000–£55,000",
  model_type: "lightweight sports car",
  tags: ["classic", "lightweight", "twin-cam"],
  fun_facts: [
    "Two-tone paint became a signature of the Sprint.",
    "One of the quickest small sports cars of its era."
  ],
  notable_achievements: [
    "Highly sought after by collectors."
  ],
  variants: [
    { name: "Elan Sprint", years: "1971–1973", engine: "126–130 hp I4" }
  ],
  hero_image: "images/cars/lotus/elan-sprint/hero.jpg",
  image_gallery: [
    "images/cars/lotus/elan-sprint/1.jpg",
    "images/cars/lotus/elan-sprint/2.jpg",
    "images/cars/lotus/elan-sprint/3.jpg"
  ]
},

// Lotus — Europa Special
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Sports",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Europa Special",
  model_slug: "europa-special",
  model_summary: "The most powerful and refined version of the Europa, featuring a lightweight chassis and mid-engine layout.",
  years_produced: "1972–1975",
  engine: "1.6L I4",
  horsepower: "105–126",
  top_speed_mph: 123,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Ron Hickman",
  price_when_new: "≈£2,200",
  current_value_range: "£20,000–£40,000",
  model_type: "sports car",
  tags: ["classic", "mid-engine"],
  fun_facts: [
    "One of the earliest affordable mid-engine sports cars.",
    "The Special edition celebrated Lotus’s F1 success."
  ],
  notable_achievements: [
    "Praised for its handling and lightweight design."
  ],
  variants: [
    { name: "Europa Special", years: "1972–1975", engine: "105–126 hp I4" }
  ],
  hero_image: "images/cars/lotus/europa-special/hero.jpg",
  image_gallery: [
    "images/cars/lotus/europa-special/1.jpg",
    "images/cars/lotus/europa-special/2.jpg",
    "images/cars/lotus/europa-special/3.jpg"
  ]
},

// Lotus — Elite (Type 14)
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic GT",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Elite (Type 14)",
  model_slug: "elite-type-14",
  model_summary: "A pioneering lightweight GT car featuring a fiberglass monocoque body and elegant aerodynamic design.",
  years_produced: "1957–1963",
  engine: "1.2L I4",
  horsepower: "75–85",
  top_speed_mph: 112,
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Cheshunt, England",
  designer: "Peter Kirwan-Taylor",
  price_when_new: "≈£1,900",
  current_value_range: "£50,000–£90,000",
  model_type: "grand tourer",
  tags: ["classic", "lightweight", "fiberglass"],
  fun_facts: [
    "One of the first production cars with a fiberglass monocoque.",
    "Won its class at Le Mans multiple times."
  ],
  notable_achievements: [
    "A landmark in lightweight engineering."
  ],
  variants: [
    { name: "Elite Type 14", years: "1957–1963", engine: "75–85 hp I4" }
  ],
  hero_image: "images/cars/lotus/elite-type-14/hero.jpg",
  image_gallery: [
    "images/cars/lotus/elite-type-14/1.jpg",
    "images/cars/lotus/elite-type-14/2.jpg",
    "images/cars/lotus/elite-type-14/3.jpg"
  ]
},

// Lotus — Eleven
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Motorsport",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Eleven",
  model_slug: "eleven",
  model_summary: "A lightweight racing car designed for endurance competition, known for its aerodynamic body and impressive performance.",
  years_produced: "1956–1958",
  engine: "1.1L–1.5L I4",
  horsepower: "75–100",
  top_speed_mph: 140,
  body_style: "open-top race car",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 1,
  production_location: "Hornsey, England",
  designer: "Frank Costin",
  price_when_new: "≈£1,200",
  current_value_range: "£120,000–£250,000",
  model_type: "race car",
  tags: ["motorsport", "lightweight"],
  fun_facts: [
    "Used advanced aerodynamics for its time.",
    "Won its class at Le Mans."
  ],
  notable_achievements: [
    "Dominated small-displacement racing categories."
  ],
  variants: [
    { name: "Eleven Le Mans", years: "1956–1958", engine: "75–100 hp I4" }
  ],
  hero_image: "images/cars/lotus/eleven/hero.jpg",
  image_gallery: [
    "images/cars/lotus/eleven/1.jpg",
    "images/cars/lotus/eleven/2.jpg",
    "images/cars/lotus/eleven/3.jpg"
  ]
},

// Lotus — Seven Series 2
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Classic Lightweight",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "classic",
  model: "Seven Series 2",
  model_slug: "seven-series-2",
  model_summary: "A minimalist lightweight sports car that became the foundation for the modern Caterham Seven.",
  years_produced: "1960–1968",
  engine: "1.0L–1.6L I4",
  horsepower: "40–85",
  top_speed_mph: 100,
  body_style: "open-top roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Cheshunt, England",
  designer: "Colin Chapman",
  price_when_new: "≈£600",
  current_value_range: "£20,000–£40,000",
  model_type: "lightweight sports car",
  tags: ["lightweight", "minimalist"],
  fun_facts: [
    "The Seven’s design philosophy still lives on in Caterham models.",
    "One of the purest expressions of Colin Chapman’s 'simplify, then add lightness' philosophy."
  ],
  notable_achievements: [
    "A motorsport favorite for decades."
  ],
  variants: [
    { name: "Seven S2", years: "1960–1968", engine: "40–85 hp I4" }
  ],
  hero_image: "images/cars/lotus/seven-series-2/hero.jpg",
  image_gallery: [
    "images/cars/lotus/seven-series-2/1.jpg",
    "images/cars/lotus/seven-series-2/2.jpg",
    "images/cars/lotus/seven-series-2/3.jpg"
  ]
},
// Lotus — Carlton
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "High-Performance Sedan",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "special",
  model: "Carlton",
  model_slug: "carlton",
  model_summary: "A legendary high-performance sedan developed by Lotus for Vauxhall/Opel, famous for its supercar-level speed and controversy in the early 1990s.",
  years_produced: "1990–1992",
  engine: "3.6L twin-turbocharged I6",
  horsepower: "377–382",
  top_speed_mph: 176,
  body_style: "4-door sedan",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 5,
  production_location: "Hethel, England",
  designer: "Lotus Engineering",
  price_when_new: "≈£48,000",
  current_value_range: "£60,000–£120,000",
  model_type: "super-sedan",
  tags: ["twin-turbo", "super-sedan", "classic"],
  notable_details: [
    "Once the fastest four-door production car in the world.",
    "Its top speed caused political controversy in the UK."
  ],
  fun_facts: [
    "Police forces complained it was too fast to catch.",
    "Developed jointly with Opel and Vauxhall."
  ],
  notable_achievements: [
    "A cult icon among performance sedan enthusiasts."
  ],
  variants: [
    { name: "Lotus Carlton", years: "1990–1992", engine: "377–382 hp I6" }
  ],
  hero_image: "images/cars/lotus/carlton/hero.jpg",
  image_gallery: [
    "images/cars/lotus/carlton/1.jpg",
    "images/cars/lotus/carlton/2.jpg",
    "images/cars/lotus/carlton/3.jpg"
  ]
},

// Lotus — 340R
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Special Edition Lightweight",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "special",
  model: "340R",
  model_slug: "340r",
  model_summary: "A radical, doorless, roofless track-focused special edition based on the Elise, limited to just 340 units.",
  years_produced: "2000",
  engine: "1.8L naturally aspirated I4",
  horsepower: "177–190",
  top_speed_mph: 133,
  body_style: "open-body track car",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Hethel, England",
  designer: "Julian Thomson",
  price_when_new: "≈£35,000",
  current_value_range: "£45,000–£70,000",
  model_type: "track car",
  tags: ["lightweight", "limited-edition", "track"],
  notable_details: [
    "No roof, no doors, no windshield — pure Lotus minimalism.",
    "Limited to exactly 340 units, matching its name."
  ],
  fun_facts: [
    "One of the most extreme road-legal Lotus cars ever built.",
    "Its bodywork was designed to channel airflow around the driver."
  ],
  notable_achievements: [
    "A collector favorite due to its rarity and radical design."
  ],
  variants: [
    { name: "340R", years: "2000", engine: "177–190 hp I4" }
  ],
  hero_image: "images/cars/lotus/340r/hero.jpg",
  image_gallery: [
    "images/cars/lotus/340r/1.jpg",
    "images/cars/lotus/340r/2.jpg",
    "images/cars/lotus/340r/3.jpg"
  ]
},

// Sunbeam Lotus
{
  manufacturer: "Lotus",
  slug: "lotus",
  brand_group: "Rally Performance",
  brand_url: "https://www.lotuscars.com",
  heritage_group: "special",
  model: "Sunbeam Lotus",
  model_slug: "sunbeam-lotus",
  model_summary: "A rally-bred hot hatch developed by Lotus for Talbot, known for its Group 2 rally success and lightweight rear-wheel-drive layout.",
  years_produced: "1979–1981",
  engine: "2.2L I4",
  horsepower: "150–155",
  top_speed_mph: 122,
  body_style: "3-door hatchback",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 5,
  production_location: "Linwood, Scotland / Hethel, England",
  designer: "Lotus Engineering",
  price_when_new: "≈£7,000",
  current_value_range: "£20,000–£40,000",
  model_type: "rally car",
  tags: ["rally", "classic", "rwd"],
  notable_details: [
    "Built to compete in Group 2 rallying.",
    "Lotus tuned the engine and suspension for competition use."
  ],
  fun_facts: [
    "Won the 1981 World Rally Championship manufacturers’ title.",
    "One of the few RWD hot hatches ever made."
  ],
  notable_achievements: [
    "A rally legend and one of Lotus’s most successful motorsport collaborations."
  ],
  variants: [
    { name: "Sunbeam Lotus", years: "1979–1981", engine: "150–155 hp I4" }
  ],
  hero_image: "images/cars/lotus/sunbeam-lotus/hero.jpg",
  image_gallery: [
    "images/cars/lotus/sunbeam-lotus/1.jpg",
    "images/cars/lotus/sunbeam-lotus/2.jpg",
    "images/cars/lotus/sunbeam-lotus/3.jpg"
  ]
},


  // 13. McLaren — 720S
  {
    manufacturer: "McLaren",
    slug: "mclaren",
    brand_group: "Supercar / Hypercar",
    brand_url: "https://cars.mclaren.com",
    model: "720S",
    model_slug: "720s",
    model_summary: "A cutting-edge British supercar known for its extreme performance, aerodynamics, and carbon-fibre construction.",
    years_produced: "2017–2023",
    engine: "4.0L twin-turbo V8",
    horsepower: 710,
    top_speed_mph: 212,
    body_style: "2-door coupé",
    drivetrain: "RWD",
    transmission: "7-speed dual-clutch",
    seating: 2,
    production_location: "Woking, England",
    designer: "Rob Melville",
    price_when_new: "≈£208,000",
    current_value_range: "£150,000–£250,000",
    model_type: "supercar",
    tags: [
      "supercar",
      "v8",
      "carbon-fibre",
      "rwd",
      "twin-turbo",
      "modern"
    ],
    notable_details: [
      "Built on McLaren’s Monocage II carbon-fibre chassis.",
      "Features active aerodynamics for extreme downforce."
    ],
    fun_facts: [
      "The 720S can hit 0–60 mph in under 2.8 seconds.",
      "Its headlights double as air intakes for cooling."
    ],
    notable_achievements: [
      "Dominated supercar comparison tests worldwide.",
      "Regarded as one of the best-driving McLarens ever made."
    ],
    variants: [
      { name: "720S Coupé", years: "2017–2023", engine: "4.0L twin-turbo V8" },
      { name: "720S Spider", years: "2019–2023", engine: "4.0L twin-turbo V8" }
    ],
    hero_image: "images/cars/mclaren/720s/hero.jpg",
    image_gallery: [
      "images/cars/mclaren/720s/1.jpg",
      "images/cars/mclaren/720s/2.jpg",
      "images/cars/mclaren/720s/3.jpg"
    ]
  },

  // 14. MG — MGB
  {
    manufacturer: "MG",
    slug: "mg",
    brand_group: "Classic Sports",
    brand_url: "https://mg.co.uk",
    model: "MGB",
    model_slug: "mgb",
    model_summary: "One of the world’s best-selling classic British sports cars, beloved for its simplicity and charm.",
    years_produced: "1962–1980",
    engine: "1.8L inline-4",
    horsepower: 95,
    top_speed_mph: 105,
    body_style: "2-door roadster / GT",
    drivetrain: "RWD",
    transmission: "4-speed manual (optional overdrive)",
    seating: 2,
    production_location: "Abingdon, England",
    designer: "Syd Enever",
    price_when_new: "≈£690 (1960s)",
    current_value_range: "£4,000–£20,000",
    model_type: "sports car",
    tags: [
      "classic",
      "roadster",
      "rwd",
      "inline-4",
      "british-sports-car"
    ],
    notable_details: [
      "One of the first cars to use a monocoque body structure.",
      "Available as both a roadster and a Pininfarina-styled GT."
    ],
    fun_facts: [
      "Over 500,000 MGBs were produced.",
      "A favourite among classic car clubs and restorers."
    ],
    notable_achievements: [
      "Huge success in club racing and rallying.",
      "One of the most iconic British sports cars ever built."
    ],
    variants: [
      { name: "MGB Roadster", years: "1962–1980", engine: "1.8L I4" },
      { name: "MGB GT", years: "1965–1980", engine: "1.8L I4" }
    ],
    hero_image: "images/cars/mg/mgb/hero.jpg",
    image_gallery: [
      "images/cars/mg/mgb/1.jpg",
      "images/cars/mg/mgb/2.jpg",
      "images/cars/mg/mgb/3.jpg"
    ]
  },

  // 15. Mini — Classic Cooper S
  {
    manufacturer: "Mini",
    slug: "mini",
    brand_group: "Compact / Iconic",
    brand_url: "https://www.mini.co.uk",
    model: "Classic Cooper S",
    model_slug: "cooper-s",
    model_summary: "A motorsport legend and cultural icon, famous for its agility and giant-killing rally victories.",
    years_produced: "1963–1971",
    engine: "1.0L–1.3L inline-4",
    horsepower: 76,
    top_speed_mph: 97,
    body_style: "2-door hatchback",
    drivetrain: "FWD",
    transmission: "4-speed manual",
    seating: 4,
    production_location: "Longbridge, England",
    designer: "Alec Issigonis",
    price_when_new: "≈£600 (1960s)",
    current_value_range: "£15,000–£60,000",
    model_type: "compact car",
    tags: [
      "classic",
      "fwd",
      "rally",
      "compact",
      "iconic",
      "british"
    ],
    notable_details: [
      "Revolutionary transverse engine layout maximized interior space.",
      "The Cooper S was the high-performance homologation model."
    ],
    fun_facts: [
      "Won the Monte Carlo Rally three times (1964, 1965, 1967).",
      "Featured in The Italian Job (1969)."
    ],
    notable_achievements: [
      "Dominated international rallying in the 1960s.",
      "One of the most influential car designs of the 20th century."
    ],
    variants: [
      { name: "Cooper S 970", years: "1963–1964", engine: "1.0L I4" },
      { name: "Cooper S 1071", years: "1963–1964", engine: "1.1L I4" },
      { name: "Cooper S 1275", years: "1964–1971", engine: "1.3L I4" }
    ],
    hero_image: "images/cars/mini/cooper-s/hero.jpg",
    image_gallery: [
      "images/cars/mini/cooper-s/1.jpg",
      "images/cars/mini/cooper-s/2.jpg",
      "images/cars/mini/cooper-s/3.jpg"
    ]
  },
  // 16. Morgan — Plus Four
  {
    manufacturer: "Morgan",
    slug: "morgan",
    brand_group: "Classic / Handcrafted",
    brand_url: "https://www.morgan-motor.com",
    model: "Plus Four",
    model_slug: "plus-four",
    model_summary: "A lightweight, hand-built British sports car blending vintage style with modern engineering.",
    years_produced: "1950–1969 (classic), 2020–present (modern)",
    engine: "2.0L BMW turbo I4 (modern), various Triumph engines (classic)",
    horsepower: 255,
    top_speed_mph: 149,
    body_style: "2-door roadster",
    drivetrain: "RWD",
    transmission: "6-speed manual or 8-speed automatic",
    seating: 2,
    production_location: "Malvern, England",
    designer: "Morgan Motor Company",
    price_when_new: "≈£62,000 (modern)",
    current_value_range: "£20,000–£70,000+",
    model_type: "sports car",
    tags: [
      "handcrafted",
      "lightweight",
      "rwd",
      "classic-style",
      "modern",
      "roadster"
    ],
    notable_details: [
      "Built using Morgan’s traditional ash-wood frame construction.",
      "The modern Plus Four uses a bonded aluminum chassis."
    ],
    fun_facts: [
      "Morgan is one of the oldest family-owned car companies in the world.",
      "The Plus Four retains its vintage looks despite modern underpinnings."
    ],
    notable_achievements: [
      "A favorite among purist drivers for its analog feel.",
      "Morgan cars have been hand-built in the same factory for over a century."
    ],
    variants: [
      { name: "Plus 4 (classic)", years: "1950–1969", engine: "Triumph I4/I6" },
      { name: "Plus Four (modern)", years: "2020–present", engine: "2.0L BMW turbo I4" }
    ],
    hero_image: "images/cars/morgan/plus-four/hero.jpg",
    image_gallery: [
      "images/cars/morgan/plus-four/1.jpg",
      "images/cars/morgan/plus-four/2.jpg",
      "images/cars/morgan/plus-four/3.jpg"
    ]
  },

  // 17. Morris — Minor
  {
    manufacturer: "Morris",
    slug: "morris",
    brand_group: "British Leyland / Classic Heritage",
    brand_url: "https://www.britishmotormuseum.co.uk",
    model: "Minor",
    model_slug: "minor",
    model_summary: "A beloved British family car known for its charm, practicality, and huge production numbers.",
    years_produced: "1948–1971",
    engine: "0.8L–1.1L inline-4",
    horsepower: 48,
    top_speed_mph: 75,
    body_style: "2-door / 4-door saloon, convertible, Traveller estate",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 4,
    production_location: "Cowley, Oxford, England",
    designer: "Alec Issigonis",
    price_when_new: "≈£358 (1950s)",
    current_value_range: "£3,000–£15,000",
    model_type: "family car",
    tags: [
      "classic",
      "family-car",
      "rwd",
      "economy",
      "british-leyland"
    ],
    notable_details: [
      "Over 1.6 million Morris Minors were produced.",
      "The Traveller version featured a distinctive ash-wood rear frame."
    ],
    fun_facts: [
      "Designed by Alec Issigonis, who later created the Mini.",
      "One of the first British cars to sell over a million units."
    ],
    notable_achievements: [
      "A staple of British motoring for decades.",
      "Still popular in classic car clubs and restoration circles."
    ],
    variants: [
      { name: "Minor MM", years: "1948–1953", engine: "0.9L I4" },
      { name: "Minor 1000", years: "1956–1971", engine: "1.1L I4" }
    ],
    hero_image: "images/cars/morris/minor/hero.jpg",
    image_gallery: [
      "images/cars/morris/minor/1.jpg",
      "images/cars/morris/minor/2.jpg",
      "images/cars/morris/minor/3.jpg"
    ]
  },

  // 18. Reliant — Scimitar GTE
  {
    manufacturer: "Reliant",
    slug: "reliant",
    brand_group: "Niche / Classic",
    brand_url: "https://www.reliantownersclub.co.uk",
    model: "Scimitar GTE",
    model_slug: "scimitar-gte",
    model_summary: "A practical British sports estate famous for its fiberglass body and Princess Anne’s long-term ownership.",
    years_produced: "1968–1986",
    engine: "3.0L Ford Essex V6",
    horsepower: 138,
    top_speed_mph: 120,
    body_style: "3-door shooting brake",
    drivetrain: "RWD",
    transmission: "4-speed manual or automatic",
    seating: 4,
    production_location: "Tamworth, England",
    designer: "Ogle Design",
    price_when_new: "≈£1,500 (1970s)",
    current_value_range: "£4,000–£15,000",
    model_type: "shooting brake",
    tags: [
      "classic",
      "fiberglass",
      "shooting-brake",
      "v6",
      "rwd"
    ],
    notable_details: [
      "Fiberglass body kept weight low and resisted rust.",
      "One of the earliest successful shooting brake sports cars."
    ],
    fun_facts: [
      "Princess Anne owned several Scimitar GTEs and drove them regularly.",
      "Reliant is also known for the three-wheeled Robin."
    ],
    notable_achievements: [
      "Praised for combining practicality with sports car performance.",
      "A cult classic among enthusiasts of unusual British cars."
    ],
    variants: [
      { name: "SE5", years: "1968–1975", engine: "3.0L V6" },
      { name: "SE6", years: "1975–1986", engine: "3.0L V6" }
    ],
    hero_image: "images/cars/reliant/scimitar-gte/hero.jpg",
    image_gallery: [
      "images/cars/reliant/scimitar-gte/1.jpg",
      "images/cars/reliant/scimitar-gte/2.jpg",
      "images/cars/reliant/scimitar-gte/3.jpg"
    ]
  },

  // 19. Riley — RM Series
  {
    manufacturer: "Riley",
    slug: "riley",
    brand_group: "Classic Heritage",
    brand_url: "https://www.rileymotorclub.org",
    model: "RM Series",
    model_slug: "rm-series",
    model_summary: "A post-war British saloon and drophead series known for its engineering quality and sporting character.",
    years_produced: "1945–1955",
    engine: "1.5L–2.5L inline-4",
    horsepower: 100,
    top_speed_mph: 90,
    body_style: "saloon / drophead coupé",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 4,
    production_location: "Coventry, England",
    designer: "Riley engineering team",
    price_when_new: "≈£850 (1950s)",
    current_value_range: "£8,000–£25,000",
    model_type: "saloon",
    tags: [
      "classic",
      "saloon",
      "rwd",
      "post-war",
      "heritage"
    ],
    notable_details: [
      "Featured advanced suspension and high-quality interiors.",
      "One of the last true Riley-designed cars before BMC absorption."
    ],
    fun_facts: [
      "Riley was once known for its slogan: 'As old as the industry, as modern as the hour.'",
      "The RM Series was popular among sporting drivers."
    ],
    notable_achievements: [
      "Strong rally performances in the late 1940s and early 1950s.",
      "Helped Riley maintain its reputation for engineering excellence."
    ],
    variants: [
      { name: "RMA", years: "1945–1952", engine: "1.5L I4" },
      { name: "RMB", years: "1946–1952", engine: "2.5L I4" },
      { name: "RMC/RMD", years: "1948–1951", engine: "2.5L I4 (open models)" }
    ],
    hero_image: "images/cars/riley/rm-series/hero.jpg",
    image_gallery: [
      "images/cars/riley/rm-series/1.jpg",
      "images/cars/riley/rm-series/2.jpg",
      "images/cars/riley/rm-series/3.jpg"
    ]
  },

  // 20. Rolls-Royce — Phantom
  {
    manufacturer: "Rolls-Royce",
    slug: "rolls-royce",
    brand_group: "Ultra Luxury",
    brand_url: "https://www.rolls-roycemotorcars.com",
    model: "Phantom",
    model_slug: "phantom",
    model_summary: "The pinnacle of British luxury motoring, renowned for its refinement, craftsmanship, and presence.",
    years_produced: "1925–present (various generations)",
    engine: "6.75L V12 (modern)",
    horsepower: 563,
    top_speed_mph: 155,
    body_style: "4-door luxury saloon",
    drivetrain: "RWD",
    transmission: "8-speed automatic",
    seating: 4,
    production_location: "Goodwood, England",
    designer: "Rolls-Royce design team",
    price_when_new: "≈£350,000+",
    current_value_range: "£80,000–£400,000+",
    model_type: "luxury saloon",
    tags: [
      "luxury",
      "v12",
      "saloon",
      "handcrafted",
      "modern",
      "iconic"
    ],
    notable_details: [
      "Features the famous 'Magic Carpet Ride' suspension.",
      "Interior materials include lambswool carpets and bespoke wood veneers."
    ],
    fun_facts: [
      "The Spirit of Ecstasy mascot has been used since 1911.",
      "Phantoms are often customized extensively for each buyer."
    ],
    notable_achievements: [
      "Considered one of the finest luxury cars in the world.",
      "A symbol of prestige for nearly a century."
    ],
    variants: [
      { name: "Phantom VII", years: "2003–2017", engine: "6.75L V12" },
      { name: "Phantom VIII", years: "2017–present", engine: "6.75L V12" }
    ],
    hero_image: "images/cars/rolls-royce/phantom/hero.jpg",
    image_gallery: [
      "images/cars/rolls-royce/phantom/1.jpg",
      "images/cars/rolls-royce/phantom/2.jpg",
      "images/cars/rolls-royce/phantom/3.jpg"
    ]
  },
  // 21. Rover — P6
  {
    manufacturer: "Rover",
    slug: "rover",
    brand_group: "British Leyland / Executive",
    brand_url: "https://www.britishmotormuseum.co.uk",
    model: "P6",
    model_slug: "p6",
    model_summary: "A technologically advanced executive saloon known for its safety innovations and smooth V8 power.",
    years_produced: "1963–1977",
    engine: "2.0L–2.2L I4, later 3.5L V8",
    horsepower: 150,
    top_speed_mph: 120,
    body_style: "4-door saloon",
    drivetrain: "RWD",
    transmission: "4-speed manual or automatic",
    seating: 5,
    production_location: "Solihull, England",
    designer: "David Bache",
    price_when_new: "≈£1,200 (1960s)",
    current_value_range: "£3,000–£15,000",
    model_type: "executive saloon",
    tags: [
      "classic",
      "executive",
      "v8",
      "rwd",
      "british-leyland"
    ],
    notable_details: [
      "Featured a De Dion rear suspension and safety-focused body structure.",
      "The V8 P6B became a favourite among police forces."
    ],
    fun_facts: [
      "Won the first-ever European Car of the Year award in 1964.",
      "The P6’s bonnet and wings were bolt-on panels for easy repair."
    ],
    notable_achievements: [
      "Praised for its ride comfort and engineering sophistication.",
      "A landmark model in Rover’s history."
    ],
    variants: [
      { name: "2000", years: "1963–1973", engine: "2.0L I4" },
      { name: "2200", years: "1973–1977", engine: "2.2L I4" },
      { name: "3500 (P6B)", years: "1968–1977", engine: "3.5L V8" }
    ],
    hero_image: "images/cars/rover/p6/hero.jpg",
    image_gallery: [
      "images/cars/rover/p6/1.jpg",
      "images/cars/rover/p6/2.jpg",
      "images/cars/rover/p6/3.jpg"
    ]
  },

  // 22. Sunbeam — Tiger
  {
    manufacturer: "Sunbeam",
    slug: "sunbeam",
    brand_group: "Rootes Group / Performance",
    brand_url: "https://www.rootesarchive.org",
    model: "Tiger",
    model_slug: "tiger",
    model_summary: "A compact British roadster with American V8 power, developed with input from Carroll Shelby.",
    years_produced: "1964–1967",
    engine: "4.3L Ford V8",
    horsepower: 164,
    top_speed_mph: 120,
    body_style: "2-door roadster",
    drivetrain: "RWD",
    transmission: "4-speed manual",
    seating: 2,
    production_location: "West Bromwich, England",
    designer: "Rootes Group with Carroll Shelby",
    price_when_new: "≈£1,000 (1960s)",
    current_value_range: "£25,000–£60,000",
    model_type: "sports car",
    tags: [
      "classic",
      "v8",
      "roadster",
      "rwd",
      "shelby"
    ],
    notable_details: [
      "Essentially a V8-powered Sunbeam Alpine.",
      "Shelby helped engineer the prototype before Ford’s involvement ended."
    ],
    fun_facts: [
      "Featured in the TV series 'Get Smart' as Maxwell Smart’s car.",
      "A rival to the AC Cobra in concept, but smaller and more affordable."
    ],
    notable_achievements: [
      "A cult classic among Anglo-American sports car fans.",
      "Strong performance for its size and era."
    ],
    variants: [
      { name: "Tiger Mk I", years: "1964–1966", engine: "4.3L V8" },
      { name: "Tiger Mk II", years: "1967", engine: "4.7L V8" }
    ],
    hero_image: "images/cars/sunbeam/tiger/hero.jpg",
    image_gallery: [
      "images/cars/sunbeam/tiger/1.jpg",
      "images/cars/sunbeam/tiger/2.jpg",
      "images/cars/sunbeam/tiger/3.jpg"
    ]
  },

  // 23. Triumph — TR6
  {
    manufacturer: "Triumph",
    slug: "triumph",
    brand_group: "British Leyland / Sports",
    brand_url: "https://www.tr-register.co.uk",
    model: "TR6",
    model_slug: "tr6",
    model_summary: "A muscular British roadster with a torquey straight-six and classic open-top driving feel.",
    years_produced: "1968–1976",
    engine: "2.5L inline-6",
    horsepower: 150,
    top_speed_mph: 120,
    body_style: "2-door roadster",
    drivetrain: "RWD",
    transmission: "4-speed manual (optional overdrive)",
    seating: 2,
    production_location: "Coventry, England",
    designer: "Karmann (restyle of TR5)",
    price_when_new: "≈£1,000 (1970s)",
    current_value_range: "£8,000–£25,000",
    model_type: "sports car",
    tags: [
      "classic",
      "roadster",
      "inline-6",
      "rwd",
      "british-leyland"
    ],
    notable_details: [
      "Fuel-injected versions (PI) were more powerful than carbureted export models.",
      "One of Triumph’s most successful sports cars."
    ],
    fun_facts: [
      "The TR6’s squared-off styling was done by Karmann in Germany.",
      "A favourite among British sports car enthusiasts."
    ],
    notable_achievements: [
      "Strong sales in the US and Europe.",
      "A staple of classic roadster culture."
    ],
    variants: [
      { name: "TR6 PI", years: "1968–1976", engine: "2.5L I6 (fuel injected)" },
      { name: "TR6 Carb", years: "1968–1976", engine: "2.5L I6 (carbureted)" }
    ],
    hero_image: "images/cars/triumph/tr6/hero.jpg",
    image_gallery: [
      "images/cars/triumph/tr6/1.jpg",
      "images/cars/triumph/tr6/2.jpg",
      "images/cars/triumph/tr6/3.jpg"
    ]
  },

  // 24. TVR — Sagaris
  {
    manufacturer: "TVR",
    slug: "tvr",
    brand_group: "Niche Performance",
    brand_url: "https://www.tvr.co.uk",
    model: "Sagaris",
    model_slug: "sagaris",
    model_summary: "A wild, lightweight British sports car known for its extreme styling and raw driving experience.",
    years_produced: "2005–2006",
    engine: "4.0L TVR Speed Six",
    horsepower: 406,
    top_speed_mph: 185,
    body_style: "2-door coupé",
    drivetrain: "RWD",
    transmission: "5-speed manual",
    seating: 2,
    production_location: "Blackpool, England",
    designer: "Graham Browne",
    price_when_new: "≈£50,000",
    current_value_range: "£60,000–£120,000",
    model_type: "sports car",
    tags: [
      "lightweight",
      "rwd",
      "manual",
      "speed-six",
      "extreme",
      "niche"
    ],
    notable_details: [
      "No ABS, no traction control — pure analog performance.",
      "Body vents and slashes were functional for endurance racing."
    ],
    fun_facts: [
      "TVR claimed the Sagaris was designed to need no modification for racing.",
      "One of the most aggressive-looking road cars ever built."
    ],
    notable_achievements: [
      "A cult icon among hardcore drivers.",
      "Praised for its handling and outrageous character."
    ],
    variants: [
      { name: "Sagaris", years: "2005–2006", engine: "4.0L Speed Six" }
    ],
    hero_image: "images/cars/tvr/sagaris/hero.jpg",
    image_gallery: [
      "images/cars/tvr/sagaris/1.jpg",
      "images/cars/tvr/sagaris/2.jpg",
      "images/cars/tvr/sagaris/3.jpg"
    ]
  },

  // 25. Wolseley — Hornet
  {
    manufacturer: "Wolseley",
    slug: "wolseley",
    brand_group: "Classic Heritage",
    brand_url: "https://www.britishmotormuseum.co.uk",
    model: "Hornet",
    model_slug: "hornet",
    model_summary: "A luxury-styled variant of the Mini with an extended boot and upscale interior.",
    years_produced: "1961–1969",
    engine: "0.8L–1.0L inline-4",
    horsepower: 55,
    top_speed_mph: 80,
    body_style: "2-door saloon",
    drivetrain: "FWD",
    transmission: "4-speed manual",
    seating: 4,
    production_location: "Longbridge, England",
    designer: "Alec Issigonis (base Mini design)",
    price_when_new: "≈£650",
    current_value_range: "£5,000–£15,000",
    model_type: "compact saloon",
    tags: [
      "classic",
      "fwd",
      "compact",
      "luxury-trim",
      "british-leyland"
    ],
    notable_details: [
      "Featured a wood-trimmed dashboard and more chrome than the standard Mini.",
      "Extended boot improved luggage space."
    ],
    fun_facts: [
      "The Hornet and Riley Elf were badge-engineered luxury Minis.",
      "Popular with buyers wanting Mini agility with more refinement."
    ],
    notable_achievements: [
      "A charming and collectible variant of the classic Mini.",
      "Represents the peak of 1960s British badge engineering."
    ],
    variants: [
      { name: "Hornet Mk I", years: "1961–1963", engine: "0.8L I4" },
      { name: "Hornet Mk II", years: "1963–1966", engine: "1.0L I4" },
      { name: "Hornet Mk III", years: "1966–1969", engine: "1.0L I4" }
    ],
    hero_image: "images/cars/wolseley/hornet/hero.jpg",
    image_gallery: [
      "images/cars/wolseley/hornet/1.jpg",
      "images/cars/wolseley/hornet/2.jpg",
      "images/cars/wolseley/hornet/3.jpg"
    ]
  }
];
// =========================
// BRAND THEMES (UI COLORS)
// =========================
const brandThemes = {
  "ac-cars": "#1E1E1E",
  "aston-martin": "#004225",
  "austin": "#2E5984",
  "austin-healey": "#8B0000",
  "bentley": "#0A3B2E",
  "bristol": "#3A3A3A",
  "caterham": "#005F2F",
  "hillman": "#3C6E71",
  "jaguar": "#0B3C49",
  "jensen": "#5A2A27",
  "land-rover": "#123524",
  "lotus": "#FFCC00",
  "mclaren": "#FF6A00",
  "mg": "#7A1E1E",
  "mini": "#000000",
  "morgan": "#4A4A4A",
  "morris": "#1A4D8F",
  "reliant": "#6A4C93",
  "riley": "#003366",
  "rolls-royce": "#2C2C2C",
  "rover": "#5B1A1A",
  "sunbeam": "#1E3A5F",
  "triumph": "#002F6C",
  "tvr": "#550088",
  "wolseley": "#003049"
};

// =========================
// BRAND HISTORY (EXPANDED)
// =========================
const brandHistory = {
  "ac-cars": `
AC Cars, founded in 1901, is one of Britain’s oldest manufacturers. 
Originally known for lightweight sports cars, AC gained global fame with the AC Ace, 
which later became the foundation for the legendary AC Cobra. 
The company’s Anglo-American collaboration with Carroll Shelby created one of the most iconic 
performance cars of the 20th century. AC continues to produce continuation and modernized versions 
of its classics today.
`,

  "aston-martin": `
Founded in 1913 by Lionel Martin and Robert Bamford, Aston Martin built its reputation on 
handcrafted grand tourers and motorsport ambition. The brand became synonymous with British luxury 
and performance, especially after its long association with the James Bond franchise. 
Despite financial ups and downs, Aston Martin remains a symbol of elegance, engineering, 
and cinematic cool.
`,

  "austin": `
Austin was a cornerstone of the British motor industry, producing everything from economy cars 
to sports models. As part of the British Motor Corporation and later British Leyland, 
Austin played a major role in post-war mobility. The Austin-Healey partnership produced some of 
Britain’s most beloved sports cars, including the 3000.
`,

  "austin-healey": `
Austin-Healey was formed in 1952 as a joint venture between Austin and the Donald Healey Motor Company. 
The brand became famous for its charismatic sports cars, especially the ‘Big Healey’ 3000 series. 
Known for their rally success and timeless styling, Austin-Healeys remain icons of 1950s–60s British motoring.
`,

  "bentley": `
Founded in 1919 by W.O. Bentley, the company quickly became known for engineering excellence and 
motorsport success, including multiple Le Mans victories in the 1920s. After decades under Rolls-Royce, 
Bentley was revitalized under Volkswagen Group ownership, emerging as a global leader in luxury performance 
with models like the Continental GT.
`,

  "bristol": `
Bristol Cars emerged from the Bristol Aeroplane Company after WWII, bringing aerospace engineering 
precision to luxury automobiles. Known for exclusivity, understated styling, and powerful Chrysler V8s, 
Bristol maintained a cult following. The brand operated with a famously secretive, boutique approach 
for decades.
`,

  "caterham": `
Caterham began by producing the Lotus Seven under license and eventually acquired full rights to the design. 
The company has carried Colin Chapman’s lightweight philosophy into the modern era, offering some of the 
purest driver’s cars available. Caterham remains a favorite among track-day enthusiasts.
`,

  "hillman": `
Hillman was a key member of the Rootes Group, producing practical and affordable cars for British families. 
The Hillman Imp, its most famous model, introduced innovative engineering including an all-aluminum engine 
and rear-mounted powertrain. Hillman played a major role in post-war British motoring.
`,

  "jaguar": `
Jaguar began as SS Cars Ltd before adopting its current name in 1945. Known for elegant styling, 
advanced engineering, and motorsport success, Jaguar produced icons like the XK120, C-Type, D-Type, 
and E-Type. The brand later became part of British Leyland, then Ford, and now operates under 
Jaguar Land Rover.
`,

  "jensen": `
Jensen Motors specialized in stylish grand tourers with Italian design and American V8 power. 
The Interceptor became its signature model, while the Jensen FF pioneered AWD and ABS years ahead 
of its time. Jensen remains a cult favorite among enthusiasts of classic GT cars.
`,

  "land-rover": `
Land Rover originated from the post-war need for a rugged utility vehicle, inspired by the Jeep. 
The Series I launched in 1948 and evolved into the Defender, becoming a global symbol of durability 
and off-road capability. Land Rover expanded into luxury SUVs with the Range Rover, creating a new segment.
`,

  "lotus": `
Founded by Colin Chapman in 1952, Lotus built its reputation on lightweight engineering and motorsport success. 
Chapman’s philosophy of “simplify, then add lightness” shaped cars like the Seven, Elan, and Esprit. 
Lotus continues to innovate with modern models like the Emira and electric future plans.
`,

  "mclaren": `
McLaren Automotive grew from the legendary McLaren Formula 1 team. Known for cutting-edge engineering, 
carbon-fibre construction, and extreme performance, McLaren produces some of the world’s most advanced 
supercars. The 720S and P1 exemplify the brand’s technological leadership.
`,

  "mg": `
MG (Morris Garages) became famous for affordable, fun-to-drive sports cars. From the T-series to the MGB, 
MG helped popularize British roadsters worldwide. The brand has evolved through multiple ownerships and 
continues today with modern models.
`,

  "mini": `
The original Mini, designed by Alec Issigonis in 1959, revolutionized small-car design with its transverse 
engine and space-efficient layout. It became a cultural icon, motorsport champion, and symbol of 1960s Britain. 
The modern MINI brand continues the legacy with contemporary models.
`,

  "morgan": `
Morgan Motor Company, founded in 1909, is known for hand-built sports cars with vintage styling and 
traditional craftsmanship. The company famously uses ash wood in its body frames and maintains 
a unique blend of old-world charm and modern engineering.
`,

  "morris": `
Morris Motors was one of Britain’s largest carmakers, producing practical and affordable vehicles. 
The Morris Minor became one of the first British cars to exceed one million units sold. Morris played 
a major role in shaping everyday British motoring.
`,

  "reliant": `
Reliant became known for lightweight fiberglass-bodied vehicles, including the three-wheeled Robin. 
The Scimitar GTE, however, stands out as a stylish and practical sports estate with a strong enthusiast following.
`,

  "riley": `
Riley was a respected pre- and post-war manufacturer known for engineering quality and sporting character. 
The RM Series represented the brand’s final independent designs before absorption into larger automotive groups.
`,

  "rolls-royce": `
Founded in 1906, Rolls-Royce quickly became synonymous with ultimate luxury and engineering excellence. 
The Phantom series represents the pinnacle of handcrafted automotive refinement. Today, Rolls-Royce continues 
to set global standards for bespoke luxury.
`,

  "rover": `
Rover produced refined, well-engineered cars for decades, including the advanced P6 and iconic SD1. 
The brand was known for innovation, comfort, and understated British style before its eventual discontinuation.
`,

  "sunbeam": `
Sunbeam was part of the Rootes Group and produced a wide range of vehicles, from economy cars to performance models. 
The Sunbeam Tiger, developed with Carroll Shelby, remains its most famous creation.
`,

  "triumph": `
Triumph produced some of Britain’s most beloved sports cars, including the TR series. Known for spirited driving 
and distinctive styling, Triumph remains a favorite among classic car enthusiasts.
`,

  "tvr": `
TVR specialized in wild, lightweight sports cars with extreme styling and raw performance. Known for its 
no-electronics philosophy, TVR produced some of the most visceral driving machines of the modern era.
`,

  "wolseley": `
Wolseley was a historic British marque known for refined, well-appointed cars. The Wolseley Hornet offered 
a luxury twist on the classic Mini formula, with added chrome, wood trim, and extended bodywork.
`
};

// =========================
// BRAND CATEGORIES
// =========================
const brandCategories = {
  "ac-cars": "classic",
  "aston-martin": "modern",
  "austin": "classic",
  "austin-healey": "classic",
  "bentley": "modern",
  "bristol": "classic",
  "caterham": "modern",
  "hillman": "classic",
  "jaguar": "modern",
  "jensen": "classic",
  "land-rover": "modern",
  "lotus": "modern",
  "mclaren": "modern",
  "mg": "modern",
  "mini": "modern",
  "morgan": "modern",
  "morris": "classic",
  "reliant": "classic",
  "riley": "classic",
  "rolls-royce": "modern",
  "rover": "classic",
  "sunbeam": "classic",
  "triumph": "classic",
  "tvr": "modern",
  "wolseley": "classic"
};


// =========================
// BRAND LOGOS
// =========================
const brandLogos = {
  "ac-cars": "images/brand-logos/ac-cars.png",
  "aston-martin": "images/brand-logos/aston-martin.png",
  "austin": "images/brand-logos/austin.png",
  "austin-healey": "images/brand-logos/austin-healey.png",
  "bentley": "images/brand-logos/bentley.png",
  "bristol": "images/brand-logos/bristol.png",
  "caterham": "images/brand-logos/caterham.png",
  "hillman": "images/brand-logos/hillman.png",
  "jaguar": "images/brand-logos/jaguar.png",
  "jensen": "images/brand-logos/jensen.png",
  "land-rover": "images/brand-logos/land-rover.png",
  "lotus": "images/brand-logos/lotus.png",
  "mclaren": "images/brand-logos/mclaren.png",
  "mg": "images/brand-logos/mg.png",
  "mini": "images/brand-logos/mini.png",
  "morgan": "images/brand-logos/morgan.png",
  "morris": "images/brand-logos/morris.png",
  "reliant": "images/brand-logos/reliant.png",
  "riley": "images/brand-logos/riley.png",
  "rolls-royce": "images/brand-logos/rolls-royce.png",
  "rover": "images/brand-logos/rover.png",
  "sunbeam": "images/brand-logos/sunbeam.png",
  "triumph": "images/brand-logos/triumph.png",
  "tvr": "images/brand-logos/tvr.png",
  "wolseley": "images/brand-logos/wolseley.png"
};

// =========================
// BRAND FOUNDING INFO
// =========================
const brand_founded = {
  "ac-cars": 1901,
  "aston-martin": 1913,
  "austin": 1905,
  "austin-healey": 1952,
  "bentley": 1919,
  "bristol": 1945,
  "caterham": 1973,
  "hillman": 1907,
  "jaguar": 1935,
  "jensen": 1934,
  "land-rover": 1948,
  "lotus": 1952,
  "mclaren": 1985,
  "mg": 1924,
  "mini": 1959,
  "morgan": 1909,
  "morris": 1912,
  "reliant": 1935,
  "riley": 1896,
  "rolls-royce": 1906,
  "rover": 1878,
  "sunbeam": 1901,
  "triumph": 1885,
  "tvr": 1947,
  "wolseley": 1901
};

// =========================
// BRAND HEADQUARTERS
// =========================
const brand_headquarters = {
  "ac-cars": "Thames Ditton, England",
  "aston-martin": "Gaydon, Warwickshire",
  "austin": "Longbridge, Birmingham",
  "austin-healey": "Abingdon, Oxfordshire",
  "bentley": "Crewe, England",
  "bristol": "Filton, Bristol",
  "caterham": "Dartford, Kent",
  "hillman": "Ryton-on-Dunsmore, Coventry",
  "jaguar": "Coventry, England",
  "jensen": "West Bromwich, England",
  "land-rover": "Solihull, England",
  "lotus": "Hethel, Norfolk",
  "mclaren": "Woking, Surrey",
  "mg": "Longbridge, Birmingham",
  "mini": "Oxford, England",
  "morgan": "Malvern, Worcestershire",
  "morris": "Cowley, Oxford",
  "reliant": "Tamworth, Staffordshire",
  "riley": "Coventry, England",
  "rolls-royce": "Goodwood, West Sussex",
  "rover": "Solihull, England",
  "sunbeam": "Coventry, England",
  "triumph": "Coventry, England",
  "tvr": "Blackpool, Lancashire",
  "wolseley": "Birmingham, England"
};
