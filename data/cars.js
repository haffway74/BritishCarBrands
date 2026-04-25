const britishCars = [
  // 1. AC Cars — AC Cobra
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "classic",
  model: "Ace",
  model_slug: "ace",
  model_summary: "Lightweight British sports roadster that became the foundation for the legendary Shelby Cobra.",
  years_produced: "1953–1963",
  engine: "2.0L–2.6L inline-6",
  horsepower: 90, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Thames Ditton, England",
  designer: "John Tojeiro", // *credited chassis inspiration
  price_when_new: "≈£1,400", // *historical estimate
  current_value_range: "£150,000–£300,000", // *auction-based estimate
  model_type: "sports car",
  tags: ["classic", "roadster", "lightweight", "rwd"],
  notable_details: [
    "Served as the platform for the first Shelby Cobra.",
    "Lightweight tubular chassis contributed to exceptional handling."
  ],
  fun_facts: [
    "Early models used Bristol-sourced engines.",
    "One of the most influential British sports cars of the 1950s."
  ],
  notable_achievements: [
    "Successful in club racing across Europe.",
    "Regarded as one of the best-handling sports cars of its era."
  ],
  variants: [
    { name: "Ace Bristol", years: "1956–1963", engine: "2.0L Bristol I6" }
  ],
  hero_image: "images/cars/ac-cars/ace/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/ace/1.jpg",
    "images/cars/ac-cars/ace/2.jpg",
    "images/cars/ac-cars/ace/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "classic",
  model: "Aceca",
  model_slug: "aceca",
  model_summary: "A hand-built fastback GT version of the Ace, offering refinement and practicality while retaining lightweight sports car dynamics.",
  years_produced: "1954–1963",
  engine: "2.0L–2.6L inline-6",
  horsepower: 100, // *approx.
  top_speed_mph: 125, // *estimated
  body_style: "2-door fastback coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Thames Ditton, England",
  designer: "AC Cars Design Team", // *no single credited designer
  price_when_new: "≈£1,700", // *historical estimate
  current_value_range: "£180,000–£350,000", // *auction-based estimate
  model_type: "grand touring sports car",
  tags: ["classic", "gt", "fastback", "rwd"],
  notable_details: [
    "Featured wooden framing and hand-formed aluminum body panels.",
    "More refined and practical than the Ace roadster."
  ],
  fun_facts: [
    "One of the earliest British GT cars with a hatchback-style rear.",
    "Produced in very limited numbers."
  ],
  notable_achievements: [
    "Praised for its balance of comfort and performance.",
    "A rare collectible among British GT enthusiasts."
  ],
  variants: [
    { name: "Aceca Bristol", years: "1956–1963", engine: "2.0L Bristol I6" }
  ],
  hero_image: "images/cars/ac-cars/aceca/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/aceca/1.jpg",
    "images/cars/ac-cars/aceca/2.jpg",
    "images/cars/ac-cars/aceca/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "classic",
  model: "Greyhound",
  model_slug: "greyhound",
  model_summary: "A rare 2+2 GT built alongside the Aceca, offering more space while retaining AC’s lightweight engineering philosophy.",
  years_produced: "1959–1963",
  engine: "2.0L–2.6L inline-6",
  horsepower: 95, // *approx.
  top_speed_mph: 115, // *estimated
  body_style: "2+2 fastback coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Thames Ditton, England",
  designer: "AC Cars Design Team", // *no single credited designer
  price_when_new: "≈£1,800", // *historical estimate
  current_value_range: "£70,000–£120,000", // *auction-based estimate
  model_type: "grand touring sports car",
  tags: ["classic", "gt", "2+2", "rwd"],
  notable_details: [
    "Only around 80 units were produced.",
    "Shared engineering principles with the Aceca but offered more practicality."
  ],
  fun_facts: [
    "One of the rarest AC production models.",
    "Highly sought after by collectors of obscure British GT cars."
  ],
  notable_achievements: [
    "Praised for its smooth ride and balanced chassis.",
    "A unique blend of practicality and lightweight engineering."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/greyhound/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/greyhound/1.jpg",
    "images/cars/ac-cars/greyhound/2.jpg",
    "images/cars/ac-cars/greyhound/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "classic",
  model: "Cobra 289",
  model_slug: "cobra-289",
  model_summary: "The first V8-powered Cobra, created through the collaboration between AC Cars and Carroll Shelby, blending British chassis engineering with American muscle.",
  years_produced: "1962–1965",
  engine: "4.7L Ford 289 V8",
  horsepower: 271, // *approx.
  top_speed_mph: 138, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Thames Ditton, England",
  designer: "AC Cars & Carroll Shelby", // *collaborative development
  price_when_new: "≈£2,300", // *historical estimate
  current_value_range: "£800,000–£1.5M", // *auction-based estimate
  model_type: "sports car",
  tags: ["classic", "v8", "roadster", "rwd", "performance"],
  notable_details: [
    "The first Cobra to use a Ford V8 engine.",
    "Maintained much of the Ace’s lightweight chassis design."
  ],
  fun_facts: [
    "Early prototypes were shipped from England to the U.S. for engine installation.",
    "One of the most iconic Anglo-American sports cars ever built."
  ],
  notable_achievements: [
    "Successful in SCCA racing.",
    "Helped establish the Cobra legend worldwide."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/cobra-289/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/cobra-289/1.jpg",
    "images/cars/ac-cars/cobra-289/2.jpg",
    "images/cars/ac-cars/cobra-289/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "classic",
  model: "Cobra 427",
  model_slug: "cobra-427",
  model_summary: "The most powerful and extreme Cobra variant, featuring a massive 7.0L Ford V8 and heavily revised chassis for racing dominance.",
  years_produced: "1965–1967",
  engine: "7.0L Ford 427 V8",
  horsepower: 425, // *approx.
  top_speed_mph: 165, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Thames Ditton, England",
  designer: "AC Cars & Carroll Shelby", // *collaborative development
  price_when_new: "≈£2,600", // *historical estimate
  current_value_range: "£1.5M–£3M", // *auction-based estimate
  model_type: "sports car",
  tags: ["classic", "v8", "roadster", "rwd", "high-performance"],
  notable_details: [
    "Featured wider bodywork and upgraded suspension.",
    "One of the most powerful road cars of its era."
  ],
  fun_facts: [
    "Famously difficult to control at full throttle.",
    "Often replicated due to its legendary status."
  ],
  notable_achievements: [
    "Dominated American road racing.",
    "Widely regarded as one of the greatest performance cars ever built."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/cobra-427/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/cobra-427/1.jpg",
    "images/cars/ac-cars/cobra-427/2.jpg",
    "images/cars/ac-cars/cobra-427/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "modern",
  model: "Cobra Superblower",
  model_slug: "cobra-superblower",
  model_summary: "A modern continuation of the Cobra, equipped with a supercharged V8 and built in extremely limited numbers.",
  years_produced: "2020–present",
  engine: "6.2L supercharged V8",
  horsepower: 580, // *approx.
  top_speed_mph: 170, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "United Kingdom",
  designer: "AC Cars Design Team", // *modern continuation
  price_when_new: "≈£130,000–£160,000", // *estimated
  current_value_range: "£120,000–£180,000", // *market estimate
  model_type: "sports car",
  tags: ["modern", "v8", "supercharged", "roadster"],
  notable_details: [
    "Hand-built continuation model with modern engineering.",
    "One of the most powerful Cobras ever offered by AC."
  ],
  fun_facts: [
    "Uses a GM-sourced supercharged V8.",
    "Built in extremely limited production numbers."
  ],
  notable_achievements: [
    "Praised for blending classic design with modern performance.",
    "A favorite among collectors of continuation cars."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/cobra-superblower/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/cobra-superblower/1.jpg",
    "images/cars/ac-cars/cobra-superblower/2.jpg",
    "images/cars/ac-cars/cobra-superblower/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "modern",
  model: "Cobra Series 1 Electric",
  model_slug: "cobra-series1-electric",
  model_summary: "An electric reinterpretation of the classic Cobra, offering instant torque and lightweight construction.",
  years_produced: "2021–present",
  engine: "230 kW electric motor",
  horsepower: 308, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "Single-speed",
  seating: 2,
  production_location: "United Kingdom",
  designer: "AC Cars Design Team",
  price_when_new: "≈£138,000", // *estimated
  current_value_range: "£120,000–£150,000", // *market estimate
  model_type: "electric sports car",
  tags: ["modern", "electric", "roadster"],
  notable_details: [
    "One of the lightest electric sports cars ever produced.",
    "Maintains the classic Cobra silhouette."
  ],
  fun_facts: [
    "AC Cars entered the EV market with this model.",
    "Instant torque gives it strong acceleration despite modest power."
  ],
  notable_achievements: [
    "Praised for blending classic design with modern EV technology.",
    "A unique offering in the electric sports car segment."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/cobra-series1-electric/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/cobra-series1-electric/1.jpg",
    "images/cars/ac-cars/cobra-series1-electric/2.jpg",
    "images/cars/ac-cars/cobra-series1-electric/3.jpg"
  ]
},
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "special",
  model: "378 GT Zagato",
  model_slug: "378-gt-zagato",
  model_summary: "A rare collaboration between AC Cars and Italian design house Zagato, powered by a GM LS3 V8.",
  years_produced: "2012",
  engine: "6.2L GM LS3 V8",
  horsepower: 434, // *approx.
  top_speed_mph: 185, // *estimated
  body_style: "2-door GT coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "South Africa & UK", // *joint production
  designer: "Zagato",
  price_when_new: "≈£90,000", // *estimated
  current_value_range: "£70,000–£110,000", // *market estimate
  model_type: "grand touring sports car",
  tags: ["special", "zagato", "v8", "gt"],
  notable_details: [
    "Designed by the legendary Italian studio Zagato.",
    "Extremely limited production numbers."
  ],
  fun_facts: [
    "Shares its engine with the Chevrolet Corvette.",
    "One of the rarest modern AC Cars models."
  ],
  notable_achievements: [
    "Praised for its styling and performance.",
    "A unique Anglo-Italian collaboration."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/378-gt-zagato/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/378-gt-zagato/1.jpg",
    "images/cars/ac-cars/378-gt-zagato/2.jpg",
    "images/cars/ac-cars/378-gt-zagato/3.jpg"
  ]
},
// AC Cars — ME3000
{
  manufacturer: "AC Cars",
  slug: "ac-cars",
  brand_group: "Sports / Performance",
  brand_url: "https://www.accars.eu",
  heritage_group: "special",
  model: "ME3000",
  model_slug: "me3000",
  model_summary: "AC’s only mid‑engine production car, offering sharp handling and a unique layout that set it apart from the brand’s traditional front‑engine sports cars.",
  years_produced: "1979–1984",
  engine: "3.0L Ford Essex V6",
  horsepower: 138, // *approx.
  top_speed_mph: 125, // *estimated
  body_style: "2-door sports coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Thames Ditton, England",
  designer: "Peter Bohanna & Robin Stables", // *credited designers
  price_when_new: "≈£11,000", // *historical estimate
  current_value_range: "£18,000–£35,000", // *market estimate
  model_type: "mid-engine sports car",
  tags: ["special", "mid-engine", "classic", "rwd"],
  notable_details: [
    "AC’s first and only mid‑engine production model.",
    "Lightweight fiberglass body over a steel chassis."
  ],
  fun_facts: [
    "Originally intended to use a different engine, but the Ford Essex V6 was chosen for reliability.",
    "Praised for handling but suffered from production delays and limited marketing."
  ],
  notable_achievements: [
    "Developed a cult following among enthusiasts of obscure British sports cars.",
    "Considered ahead of its time for a small British manufacturer."
  ],
  variants: [],
  hero_image: "images/cars/ac-cars/me3000/hero.jpg",
  image_gallery: [
    "images/cars/ac-cars/me3000/1.jpg",
    "images/cars/ac-cars/me3000/2.jpg",
    "images/cars/ac-cars/me3000/3.jpg"
  ]
},


  // 2. Aston Martin
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB2/4",
  heritage_group: "classic",
  model: "DB2/4",
  model_slug: "db2-4",
  model_summary: "A refined evolution of the DB2, the DB2/4 introduced 2+2 seating and hatchback practicality while retaining Aston Martin’s early GT character.",
  years_produced: "1953–1957",
  engine: "2.6L–2.9L inline-6",
  horsepower: 140, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door coupé / drophead coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Newport Pagnell, England",
  designer: "Frank Feeley",
  price_when_new: "≈£2,728", // *historical estimate
  current_value_range: "£120,000–£300,000",
  model_type: "grand tourer",
  tags: ["classic", "gt", "inline-6"],
  notable_details: [
    "One of the earliest production cars with a hatchback.",
    "Improved practicality over the DB2 with 2+2 seating."
  ],
  fun_facts: [
    "Favored by wealthy touring enthusiasts in the 1950s.",
    "Early examples competed in international rallies."
  ],
  notable_achievements: [
    "Helped establish Aston Martin’s GT identity.",
    "A key stepping stone to the DB4 and DB5."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db2-4/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db2-4/1.jpg",
    "images/cars/aston-martin/db2-4/2.jpg",
    "images/cars/aston-martin/db2-4/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB4",
  heritage_group: "classic",
  model: "DB4",
  model_slug: "db4",
  model_summary: "A revolutionary GT featuring Italian styling by Carrozzeria Touring and a new all-alloy straight-six engine, marking the start of the modern Aston Martin era.",
  years_produced: "1958–1963",
  engine: "3.7L inline-6",
  horsepower: 240, // *approx.
  top_speed_mph: 140, // *estimated
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Newport Pagnell, England",
  designer: "Carrozzeria Touring",
  price_when_new: "≈£3,967", // *historical estimate
  current_value_range: "£350,000–£1,000,000",
  model_type: "grand tourer",
  tags: ["classic", "gt", "inline-6", "touring"],
  notable_details: [
    "First Aston Martin built at Newport Pagnell.",
    "Introduced the Superleggera lightweight construction method."
  ],
  fun_facts: [
    "The DB4 GT variant was a lightweight racing special.",
    "The DB4 laid the foundation for the DB5’s styling."
  ],
  notable_achievements: [
    "A major leap forward in performance and design.",
    "One of the most collectible Aston Martins."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db4/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db4/1.jpg",
    "images/cars/aston-martin/db4/2.jpg",
    "images/cars/aston-martin/db4/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB5",
  heritage_group: "classic",
  model: "DB5",
  model_slug: "db5",
  model_summary: "The most famous Aston Martin, combining elegant Italian styling with a powerful straight-six engine and global recognition through James Bond.",
  years_produced: "1963–1965",
  engine: "4.0L inline-6",
  horsepower: 282, // *approx.
  top_speed_mph: 145, // *estimated
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 4,
  production_location: "Newport Pagnell, England",
  designer: "Carrozzeria Touring",
  price_when_new: "≈£4,175", // *historical estimate
  current_value_range: "£600,000–£2,000,000",
  model_type: "grand tourer",
  tags: ["classic", "gt", "inline-6", "bond"],
  notable_details: [
    "Featured in the James Bond film 'Goldfinger'.",
    "Upgraded engine and 5-speed gearbox over the DB4."
  ],
  fun_facts: [
    "One of the most recognizable movie cars ever.",
    "Often considered the quintessential Aston Martin."
  ],
  notable_achievements: [
    "A global cultural icon.",
    "One of the most collectible British cars in history."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db5/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db5/1.jpg",
    "images/cars/aston-martin/db5/2.jpg",
    "images/cars/aston-martin/db5/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB6",
  heritage_group: "classic",
  model: "DB6",
  model_slug: "db6",
  model_summary: "A refined evolution of the DB5 with improved aerodynamics, a longer wheelbase, and enhanced grand touring comfort.",
  years_produced: "1965–1970",
  engine: "4.0L inline-6",
  horsepower: 282, // *approx.
  top_speed_mph: 148, // *estimated
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 4,
  production_location: "Newport Pagnell, England",
  designer: "Aston Martin",
  price_when_new: "≈£4,998", // *historical estimate
  current_value_range: "£250,000–£700,000",
  model_type: "grand tourer",
  tags: ["classic", "gt", "inline-6"],
  notable_details: [
    "Introduced the Kamm-tail rear for improved stability.",
    "More spacious and comfortable than the DB5."
  ],
  fun_facts: [
    "Often overshadowed by the DB5 but more advanced technically.",
    "One of the last Aston Martins built before the 1970s V8 era."
  ],
  notable_achievements: [
    "A refined and capable GT for long-distance touring.",
    "A key link between the DB5 and the later V8 models."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db6/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db6/1.jpg",
    "images/cars/aston-martin/db6/2.jpg",
    "images/cars/aston-martin/db6/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_V8",
  heritage_group: "classic",
  model: "V8 Vantage",
  model_slug: "v8-vantage",
  model_summary: "A high-performance grand tourer often described as Britain’s first true supercar, combining muscular styling with a powerful V8 engine.",
  years_produced: "1977–1989",
  engine: "5.3L Aston Martin V8",
  horsepower: 375, // *approx. (varied by spec)
  top_speed_mph: 170, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual or 3-speed automatic",
  seating: 4,
  production_location: "Newport Pagnell, England",
  designer: "Aston Martin Design Team",
  price_when_new: "≈£20,000", // *historical estimate
  current_value_range: "£150,000–£400,000",
  model_type: "grand tourer",
  tags: ["classic", "v8", "gt", "supercar"],
  notable_details: [
    "Wide arches, deep front spoiler, and hood bulge defined its aggressive look.",
    "One of the fastest production cars of its era."
  ],
  fun_facts: [
    "Featured in the James Bond film 'The Living Daylights'.",
    "Hand-built in very limited numbers."
  ],
  notable_achievements: [
    "Often considered Britain’s first supercar.",
    "A symbol of Aston Martin’s survival and identity in the 1970s–80s."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/v8-vantage/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/v8-vantage/1.jpg",
    "images/cars/aston-martin/v8-vantage/2.jpg",
    "images/cars/aston-martin/v8-vantage/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB7",
  heritage_group: "modern",
  model: "DB7",
  model_slug: "db7",
  model_summary: "The car that revived Aston Martin in the 1990s, featuring elegant Ian Callum styling and available with supercharged inline-six or V12 power.",
  years_produced: "1994–2004",
  engine: "3.2L supercharged inline-6 or 5.9L V12",
  horsepower: 335, // *approx. I6; V12 up to 420 hp
  top_speed_mph: 165, // *estimated
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual / automatic",
  seating: 2,
  production_location: "Bloxham, England",
  designer: "Ian Callum",
  price_when_new: "≈£78,500", // *historical estimate
  current_value_range: "£20,000–£60,000",
  model_type: "grand tourer",
  tags: ["modern", "gt", "supercharged", "v12"],
  notable_details: [
    "First Aston Martin designed under Ford ownership.",
    "The V12 Vantage variant introduced Aston’s now-iconic 5.9L V12."
  ],
  fun_facts: [
    "The DB7 is one of Aston’s best-selling models ever.",
    "Its platform traces roots to the Jaguar XJS."
  ],
  notable_achievements: [
    "Credited with saving Aston Martin financially.",
    "Set the design direction for modern Aston GTs."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db7/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db7/1.jpg",
    "images/cars/aston-martin/db7/2.jpg",
    "images/cars/aston-martin/db7/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_DB9",
  heritage_group: "modern",
  model: "DB9",
  model_slug: "db9",
  model_summary: "A modern grand tourer built on Aston’s VH architecture, combining a hand-built V12 with timeless Ian Callum design.",
  years_produced: "2004–2016",
  engine: "5.9L V12",
  horsepower: 450, // *approx. early models
  top_speed_mph: 186, // *estimated
  body_style: "2-door coupé / convertible (Volante)",
  drivetrain: "RWD",
  transmission: "6-speed automatic / manual",
  seating: 2,
  production_location: "Gaydon, England",
  designer: "Ian Callum & Henrik Fisker",
  price_when_new: "≈£110,000", // *estimated
  current_value_range: "£30,000–£80,000",
  model_type: "grand tourer",
  tags: ["modern", "v12", "gt"],
  notable_details: [
    "First model built at Aston’s Gaydon facility.",
    "Introduced the modular VH platform used for a decade."
  ],
  fun_facts: [
    "The DB9 replaced the DB7 but kept the V12 tradition alive.",
    "Widely praised for its balance of comfort and performance."
  ],
  notable_achievements: [
    "One of the most admired GTs of the 2000s.",
    "Helped define Aston Martin’s modern design language."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/db9/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/db9/1.jpg",
    "images/cars/aston-martin/db9/2.jpg",
    "images/cars/aston-martin/db9/3.jpg"
  ]
},
{
  manufacturer: "Aston Martin",
  slug: "aston-martin",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Aston_Martin_Vantage_(2005)",
  heritage_group: "modern",
  model: "Vantage",
  model_slug: "vantage",
  model_summary: "A compact, driver-focused sports car available with V8 or V12 power, becoming one of Aston Martin’s most successful modern models.",
  years_produced: "2005–2017",
  engine: "4.3L–4.7L V8 or 5.9L V12",
  horsepower: 380, // *approx. early V8; V12 up to 565 hp
  top_speed_mph: 180, // *estimated
  body_style: "2-door coupé / roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual / 7-speed automated manual",
  seating: 2,
  production_location: "Gaydon, England",
  designer: "Henrik Fisker",
  price_when_new: "≈£80,000–£140,000", // *estimated
  current_value_range: "£25,000–£90,000",
  model_type: "sports car",
  tags: ["modern", "v8", "v12", "sports-car"],
  notable_details: [
    "The V12 Vantage was one of the most extreme road-going Astons ever built.",
    "Compact proportions made it the most agile Aston of its era."
  ],
  fun_facts: [
    "The V12 Vantage stuffed Aston’s big V12 into the small V8 chassis.",
    "One of the last modern sports cars to offer a manual gearbox."
  ],
  notable_achievements: [
    "A best-seller that broadened Aston’s appeal.",
    "A modern classic with strong enthusiast following."
  ],
  variants: [],
  hero_image: "images/cars/aston-martin/vantage/hero.jpg",
  image_gallery: [
    "images/cars/aston-martin/vantage/1.jpg",
    "images/cars/aston-martin/vantage/2.jpg",
    "images/cars/aston-martin/vantage/3.jpg"
  ]
},

 

  // 3. Austin
  {
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_Motor_Company",
  heritage_group: "classic",
  model: "Seven",
  model_slug: "seven",
  model_summary: "One of the most influential small cars ever built, the Austin Seven helped mobilize Britain and inspired designs worldwide.",
  years_produced: "1922–1939",
  engine: "747cc inline-4",
  horsepower: 10, // *approx.
  top_speed_mph: 50, // *estimated
  body_style: "2-door saloon / roadster / tourer",
  drivetrain: "RWD",
  transmission: "3-speed manual",
  seating: 4,
  production_location: "Longbridge, England",
  designer: "Herbert Austin & Stanley Edge",
  price_when_new: "≈£165", // *historical estimate
  current_value_range: "£6,000–£20,000", // *market estimate
  model_type: "compact family car",
  tags: ["classic", "pre-war", "compact", "historic"],
  notable_details: [
    "Licensed internationally, including by BMW and Nissan.",
    "Considered Britain’s first true ‘people’s car’."
  ],
  fun_facts: [
    "The original BMW Dixi was a licensed Austin Seven.",
    "Early models had cable-operated brakes only on the rear wheels."
  ],
  notable_achievements: [
    "One of the most successful British cars of all time.",
    "Helped establish Austin as a global automotive force."
  ],
  variants: [
    { name: "Seven Ruby", years: "1934–1939", engine: "747cc I4" }
  ],
  hero_image: "images/cars/austin/seven/hero.jpg",
  image_gallery: [
    "images/cars/austin/seven/1.jpg",
    "images/cars/austin/seven/2.jpg",
    "images/cars/austin/seven/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_A30",
  heritage_group: "classic",
  model: "A30",
  model_slug: "a30",
  model_summary: "A compact post-war saloon designed to be affordable, efficient, and practical for British families.",
  years_produced: "1951–1956",
  engine: "803cc inline-4",
  horsepower: 28, // *approx.
  top_speed_mph: 70, // *estimated
  body_style: "2-door or 4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, England",
  designer: "Austin Design Office", // *no single credited designer
  price_when_new: "≈£507", // *historical estimate
  current_value_range: "£4,000–£10,000", // *market estimate
  model_type: "compact family car",
  tags: ["classic", "compact", "post-war"],
  notable_details: [
    "First car to use the A-Series engine.",
    "Designed to compete with the Morris Minor."
  ],
  fun_facts: [
    "The A-Series engine would later power the Mini.",
    "Known for its charming, upright styling."
  ],
  notable_achievements: [
    "Popular among budget-conscious families.",
    "Helped establish Austin’s post-war recovery."
  ],
  variants: [],
  hero_image: "images/cars/austin/a30/hero.jpg",
  image_gallery: [
    "images/cars/austin/a30/1.jpg",
    "images/cars/austin/a30/2.jpg",
    "images/cars/austin/a30/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_A35",
  heritage_group: "classic",
  model: "A35",
  model_slug: "a35",
  model_summary: "An improved version of the A30, offering more power, better brakes, and updated styling.",
  years_produced: "1956–1962",
  engine: "948cc inline-4",
  horsepower: 34, // *approx.
  top_speed_mph: 75, // *estimated
  body_style: "2-door or 4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, England",
  designer: "Austin Design Office",
  price_when_new: "≈£550", // *historical estimate
  current_value_range: "£5,000–£12,000", // *market estimate
  model_type: "compact family car",
  tags: ["classic", "compact", "post-war"],
  notable_details: [
    "Featured a larger rear window for improved visibility.",
    "Used the updated 948cc A-Series engine."
  ],
  fun_facts: [
    "Still raced today in historic touring car events.",
    "Known for its lively handling and charm."
  ],
  notable_achievements: [
    "Popular among young drivers in the 1950s.",
    "A staple of British motoring culture."
  ],
  variants: [],
  hero_image: "images/cars/austin/a35/hero.jpg",
  image_gallery: [
    "images/cars/austin/a35/1.jpg",
    "images/cars/austin/a35/2.jpg",
    "images/cars/austin/a35/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_A40_Farina",
  heritage_group: "classic",
  model: "A40 Farina",
  model_slug: "a40-farina",
  model_summary: "One of the first hatchback-like designs, styled by Pininfarina and known for its practicality.",
  years_produced: "1958–1967",
  engine: "948cc–1098cc inline-4",
  horsepower: 37, // *approx.
  top_speed_mph: 80, // *estimated
  body_style: "2-door saloon / 3-door 'Countryman'",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, England",
  designer: "Pininfarina",
  price_when_new: "≈£640", // *historical estimate
  current_value_range: "£4,000–£9,000", // *market estimate
  model_type: "compact family car",
  tags: ["classic", "compact", "pininfarina"],
  notable_details: [
    "One of the earliest cars with a hatchback-style rear opening.",
    "Styled by the famous Italian design house Pininfarina."
  ],
  fun_facts: [
    "The 'Countryman' version is highly collectible today.",
    "Shared mechanicals with the A35 and early Minis."
  ],
  notable_achievements: [
    "Praised for its practicality and modern styling.",
    "A popular export model for Austin."
  ],
  variants: [],
  hero_image: "images/cars/austin/a40-farina/hero.jpg",
  image_gallery: [
    "images/cars/austin/a40-farina/1.jpg",
    "images/cars/austin/a40-farina/2.jpg",
    "images/cars/austin/a40-farina/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/BMC_ADO16",
  heritage_group: "classic",
  model: "1100 / 1300",
  model_slug: "1100",
  model_summary: "Britain’s best-selling car of the 1960s, offering advanced packaging, Hydrolastic suspension, and excellent ride comfort.",
  years_produced: "1962–1974",
  engine: "1.1L–1.3L inline-4",
  horsepower: 48, // *approx.
  top_speed_mph: 85, // *estimated
  body_style: "2-door or 4-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Longbridge, England",
  designer: "Alec Issigonis",
  price_when_new: "≈£700", // *historical estimate
  current_value_range: "£3,000–£8,000", // *market estimate
  model_type: "small family car",
  tags: ["classic", "fwd", "family-car"],
  notable_details: [
    "Featured Hydrolastic suspension for a smooth ride.",
    "Shared engineering philosophy with the Mini."
  ],
  fun_facts: [
    "The best-selling car in Britain for several years.",
    "Produced under multiple brands including Morris, MG, Riley, and Wolseley."
  ],
  notable_achievements: [
    "Dominated the UK sales charts in the 1960s.",
    "Praised for its comfort and space efficiency."
  ],
  variants: [
    { name: "1100", years: "1962–1974", engine: "1.1L I4" },
    { name: "1300", years: "1967–1974", engine: "1.3L I4" }
  ],
  hero_image: "images/cars/austin/1100/hero.jpg",
  image_gallery: [
    "images/cars/austin/1100/1.jpg",
    "images/cars/austin/1100/2.jpg",
    "images/cars/austin/1100/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_Maxi",
  heritage_group: "classic",
  model: "Maxi",
  model_slug: "maxi",
  model_summary: "Britain’s first 5-door hatchback with a 5-speed gearbox, offering practicality and innovation ahead of its time.",
  years_produced: "1969–1981",
  engine: "1.5L–1.8L inline-4",
  horsepower: 74, // *approx.
  top_speed_mph: 90, // *estimated
  body_style: "5-door hatchback",
  drivetrain: "FWD",
  transmission: "5-speed manual",
  seating: 5,
  production_location: "Cowley, England",
  designer: "Alec Issigonis",
  price_when_new: "≈£1,150", // *historical estimate
  current_value_range: "£2,500–£6,000", // *market estimate
  model_type: "family hatchback",
  tags: ["classic", "fwd", "hatchback"],
  notable_details: [
    "One of the first cars with a 5-speed gearbox.",
    "Innovative interior packaging for its time."
  ],
  fun_facts: [
    "The Maxi was the last all-new car designed by Alec Issigonis.",
    "Known for its spacious interior and versatility."
  ],
  notable_achievements: [
    "Praised for practicality despite mixed reviews.",
    "A pioneer of the modern hatchback layout."
  ],
  variants: [],
  hero_image: "images/cars/austin/maxi/hero.jpg",
  image_gallery: [
    "images/cars/austin/maxi/1.jpg",
    "images/cars/austin/maxi/2.jpg",
    "images/cars/austin/maxi/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_Allegro",
  heritage_group: "classic",
  model: "Allegro",
  model_slug: "allegro",
  model_summary: "A controversial but iconic British family car known for its unconventional styling and Hydragas suspension.",
  years_produced: "1973–1982",
  engine: "1.0L–1.7L inline-4",
  horsepower: 45, // *approx.
  top_speed_mph: 85, // *estimated
  body_style: "2-door or 4-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Longbridge, England",
  designer: "Harris Mann",
  price_when_new: "≈£1,200", // *historical estimate
  current_value_range: "£1,500–£4,000", // *market estimate
  model_type: "small family car",
  tags: ["classic", "fwd", "hydragas"],
  notable_details: [
    "Featured Hydragas suspension for improved comfort.",
    "Known for its distinctive 'quartic' steering wheel in early models."
  ],
  fun_facts: [
    "Often unfairly criticized, but now gaining appreciation.",
    "A symbol of 1970s British motoring culture."
  ],
  notable_achievements: [
    "Sold over 640,000 units.",
    "A staple of British roads throughout the 1970s."
  ],
  variants: [],
  hero_image: "images/cars/austin/allegro/hero.jpg",
  image_gallery: [
    "images/cars/austin/allegro/1.jpg",
    "images/cars/austin/allegro/2.jpg",
    "images/cars/austin/allegro/3.jpg"
  ]
},
{
  manufacturer: "Austin",
  slug: "austin",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin_Metro",
  heritage_group: "classic",
  model: "Metro",
  model_slug: "metro",
  model_summary: "A hugely successful city car designed to replace the Mini, offering practicality, efficiency, and modern styling for the 1980s.",
  years_produced: "1980–1990",
  engine: "1.0L–1.3L inline-4",
  horsepower: 45, // *approx.
  top_speed_mph: 90, // *estimated
  body_style: "3-door or 5-door hatchback",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Longbridge, England",
  designer: "BL Design Team",
  price_when_new: "≈£3,095", // *historical estimate
  current_value_range: "£1,000–£4,000", // *market estimate
  model_type: "city car",
  tags: ["classic", "fwd", "hatchback"],
  notable_details: [
    "One of the best-selling British cars of the 1980s.",
    "Designed as a modern successor to the Mini."
  ],
  fun_facts: [
    "The Metro was rebadged as the Rover Metro in 1990.",
    "Used Hydragas suspension similar to the Allegro."
  ],
  notable_achievements: [
    "A major commercial success for British Leyland.",
    "Widely praised for its practicality and efficiency."
  ],
  variants: [],
  hero_image: "images/cars/austin/metro/hero.jpg",
  image_gallery: [
    "images/cars/austin/metro/1.jpg",
    "images/cars/austin/metro/2.jpg",
    "images/cars/austin/metro/3.jpg"
  ]
},


  // 4. Austin-Healey — 3000 MkIII
 {
  manufacturer: "Austin-Healey",
  slug: "austin-healey",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin-Healey_100",
  heritage_group: "classic",
  model: "100",
  model_slug: "100",
  model_summary: "The original 'Big Healey', known for its sleek styling, strong performance, and status as one of the most desirable British sports cars of the 1950s.",
  years_produced: "1953–1956",
  engine: "2.6L inline-4",
  horsepower: 90, // *approx.
  top_speed_mph: 106, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "3-speed manual with overdrive",
  seating: 2,
  production_location: "Longbridge & Abingdon, England",
  designer: "Donald Healey",
  price_when_new: "≈£1,063", // *historical estimate
  current_value_range: "£45,000–£120,000", // *auction-based estimate
  model_type: "sports car",
  tags: ["classic", "roadster", "rwd", "big-healey"],
  notable_details: [
    "Named '100' because it could reach 100 mph.",
    "One of the most iconic British sports cars of the 1950s."
  ],
  fun_facts: [
    "Early models used a fold-down windscreen for racing.",
    "The BN1 and BN2 variants are highly collectible today."
  ],
  notable_achievements: [
    "Successful in international rallying.",
    "Helped establish Austin-Healey as a global sports car brand."
  ],
  variants: [
    { name: "100 BN1", years: "1953–1955", engine: "2.6L I4" },
    { name: "100 BN2", years: "1955–1956", engine: "2.6L I4" }
  ],
  hero_image: "images/cars/austin-healey/100/hero.jpg",
  image_gallery: [
    "images/cars/austin-healey/100/1.jpg",
    "images/cars/austin-healey/100/2.jpg",
    "images/cars/austin-healey/100/3.jpg"
  ]
},
{
  manufacturer: "Austin-Healey",
  slug: "austin-healey",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin-Healey_100-6",
  heritage_group: "classic",
  model: "100-6",
  model_slug: "100-6",
  model_summary: "A more refined evolution of the original 100, featuring a 6-cylinder engine and optional 2+2 seating.",
  years_produced: "1956–1959",
  engine: "2.6L inline-6",
  horsepower: 102, // *approx.
  top_speed_mph: 103, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2 or 2+2",
  production_location: "Abingdon, England",
  designer: "Donald Healey",
  price_when_new: "≈£1,150", // *historical estimate
  current_value_range: "£35,000–£80,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "roadster", "rwd", "big-healey"],
  notable_details: [
    "Introduced a new 6-cylinder engine for improved refinement.",
    "Available in both 2-seat and 2+2 configurations."
  ],
  fun_facts: [
    "The 100-6 replaced the original 100 BN2.",
    "Known for its distinctive oval grille."
  ],
  notable_achievements: [
    "Popular among touring enthusiasts.",
    "Helped transition the Healey line toward the later 3000."
  ],
  variants: [
    { name: "100-6 BN4", years: "1956–1959", engine: "2.6L I6" },
    { name: "100-6 BN6", years: "1958–1959", engine: "2.6L I6" }
  ],
  hero_image: "images/cars/austin-healey/100-6/hero.jpg",
  image_gallery: [
    "images/cars/austin-healey/100-6/1.jpg",
    "images/cars/austin-healey/100-6/2.jpg",
    "images/cars/austin-healey/100-6/3.jpg"
  ]
},
{
  manufacturer: "Austin-Healey",
  slug: "austin-healey",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin-Healey_3000",
  heritage_group: "classic",
  model: "3000",
  model_slug: "3000",
  model_summary: "The most famous and desirable Austin-Healey, known for its strong performance, rally success, and timeless styling.",
  years_produced: "1959–1967",
  engine: "2.9L inline-6",
  horsepower: 124, // *approx.
  top_speed_mph: 115, // *estimated
  body_style: "2-door roadster / 2+2",
  drivetrain: "RWD",
  transmission: "4-speed manual with overdrive",
  seating: "2 or 2+2",
  production_location: "Abingdon, England",
  designer: "Donald Healey",
  price_when_new: "≈£1,150–£1,350", // *historical estimate
  current_value_range: "£45,000–£120,000", // *auction-based estimate
  model_type: "sports car",
  tags: ["classic", "roadster", "rwd", "big-healey"],
  notable_details: [
    "The most powerful and refined of the Big Healeys.",
    "Offered in multiple configurations including 2+2."
  ],
  fun_facts: [
    "A favorite among collectors worldwide.",
    "Known for its deep exhaust note and strong torque."
  ],
  notable_achievements: [
    "Highly successful in international rallying.",
    "One of the most iconic British sports cars ever built."
  ],
  variants: [
    { name: "3000 Mk I", years: "1959–1961", engine: "2.9L I6" },
    { name: "3000 Mk II", years: "1961–1963", engine: "2.9L I6" },
    { name: "3000 Mk III", years: "1963–1967", engine: "2.9L I6" }
  ],
  hero_image: "images/cars/austin-healey/3000/hero.jpg",
  image_gallery: [
    "images/cars/austin-healey/3000/1.jpg",
    "images/cars/austin-healey/3000/2.jpg",
    "images/cars/austin-healey/3000/3.jpg"
  ]
},
{
  manufacturer: "Austin-Healey",
  slug: "austin-healey",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Austin-Healey_Sprite",
  heritage_group: "classic",
  model: "Sprite",
  model_slug: "sprite",
  model_summary: "A lightweight, affordable sports car best known for the iconic 'Frogeye' (Bugeye) front end on early models.",
  years_produced: "1958–1971",
  engine: "948cc–1275cc inline-4",
  horsepower: 43, // *approx.
  top_speed_mph: 82, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "Donald Healey",
  price_when_new: "≈£669", // *historical estimate
  current_value_range: "£6,000–£18,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "roadster", "lightweight", "frogeye"],
  notable_details: [
    "The Mk I 'Frogeye' is one of the most recognizable British cars ever made.",
    "Later models shared components with the MG Midget."
  ],
  fun_facts: [
    "Originally intended to have pop-up headlights, but cost-cutting led to the fixed 'frog' eyes.",
    "A favorite among amateur racers due to its simplicity and low weight."
  ],
  notable_achievements: [
    "Popular in grassroots motorsport.",
    "A cultural icon of 1960s British motoring."
  ],
  variants: [
    { name: "Sprite Mk I (Frogeye)", years: "1958–1961", engine: "948cc I4" },
    { name: "Sprite Mk II–IV", years: "1961–1971", engine: "948cc–1275cc I4" }
  ],
  hero_image: "images/cars/austin-healey/sprite/hero.jpg",
  image_gallery: [
    "images/cars/austin-healey/sprite/1.jpg",
    "images/cars/austin-healey/sprite/2.jpg",
    "images/cars/austin-healey/sprite/3.jpg"
  ]
},


  // 5. Bentley
 {
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://www.bentleymotors.com",
  heritage_group: "modern",
  model: "Continental GT",
  model_slug: "continental-gt",
  model_summary: "A grand touring icon blending handcrafted luxury with immense performance, powered by W12 or V8 engines.",
  years_produced: "2003–present",
  engine: "4.0L twin-turbo V8 or 6.0L twin-turbo W12",
  horsepower: 542, // *approx.
  top_speed_mph: 207, // *estimated
  body_style: "2-door grand tourer",
  drivetrain: "AWD",
  transmission: "8-speed automatic",
  seating: 4,
  production_location: "Crewe, England",
  designer: "Dirk van Braeckel",
  price_when_new: "≈£150,000–£200,000", // *estimated
  current_value_range: "£40,000–£180,000", // *market estimate
  model_type: "grand tourer",
  tags: ["modern", "luxury", "gt", "w12", "v8"],
  notable_details: [
    "One of Bentley’s best-selling models of all time.",
    "Combines supercar performance with luxury refinement."
  ],
  fun_facts: [
    "The W12 engine is hand-built in Crewe.",
    "Used by many celebrities and athletes as a luxury GT of choice."
  ],
  notable_achievements: [
    "Helped relaunch Bentley under Volkswagen Group ownership.",
    "Widely praised for its blend of comfort and performance."
  ],
  variants: [
    { name: "Continental GT V8", years: "2012–present", engine: "4.0L twin-turbo V8" },
    { name: "Continental GT W12", years: "2003–present", engine: "6.0L twin-turbo W12" }
  ],
  hero_image: "images/cars/bentley/continental-gt/hero.jpg",
  image_gallery: [
    "images/cars/bentley/continental-gt/1.jpg",
    "images/cars/bentley/continental-gt/2.jpg",
    "images/cars/bentley/continental-gt/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://www.bentleymotors.com",
  heritage_group: "modern",
  model: "Flying Spur",
  model_slug: "flying-spur",
  model_summary: "A high-performance luxury sedan offering exceptional comfort, craftsmanship, and powerful V8 or W12 engines.",
  years_produced: "2005–present",
  engine: "4.0L twin-turbo V8 or 6.0L twin-turbo W12",
  horsepower: 542, // *approx.
  top_speed_mph: 207, // *estimated
  body_style: "4-door luxury sedan",
  drivetrain: "AWD",
  transmission: "8-speed automatic",
  seating: 5,
  production_location: "Crewe, England",
  designer: "Bentley Design Team",
  price_when_new: "≈£165,000–£220,000", // *estimated
  current_value_range: "£35,000–£150,000", // *market estimate
  model_type: "luxury sedan",
  tags: ["modern", "luxury", "sedan", "w12", "v8"],
  notable_details: [
    "Shares its platform with the Continental GT.",
    "One of the fastest luxury sedans in the world."
  ],
  fun_facts: [
    "The W12 version can outrun many sports cars.",
    "Often used as a chauffeured executive vehicle."
  ],
  notable_achievements: [
    "Praised for its blend of comfort and performance.",
    "A benchmark in the luxury sedan segment."
  ],
  variants: [],
  hero_image: "images/cars/bentley/flying-spur/hero.jpg",
  image_gallery: [
    "images/cars/bentley/flying-spur/1.jpg",
    "images/cars/bentley/flying-spur/2.jpg",
    "images/cars/bentley/flying-spur/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://www.bentleymotors.com",
  heritage_group: "modern",
  model: "Bentayga",
  model_slug: "bentayga",
  model_summary: "Bentley’s first luxury SUV, combining off-road capability with handcrafted interiors and powerful engines.",
  years_produced: "2016–present",
  engine: "4.0L twin-turbo V8 or 6.0L W12",
  horsepower: 542, // *approx.
  top_speed_mph: 190, // *estimated
  body_style: "5-door luxury SUV",
  drivetrain: "AWD",
  transmission: "8-speed automatic",
  seating: "5 or 7",
  production_location: "Crewe, England",
  designer: "Bentley Design Team",
  price_when_new: "≈£135,000–£200,000", // *estimated
  current_value_range: "£70,000–£180,000", // *market estimate
  model_type: "luxury SUV",
  tags: ["modern", "luxury", "suv", "w12", "v8"],
  notable_details: [
    "One of the fastest SUVs in the world.",
    "Available with ultra-luxury Mulliner customization."
  ],
  fun_facts: [
    "The Bentayga was Bentley’s first SUV.",
    "The W12 version can tow over 7,700 lbs."
  ],
  notable_achievements: [
    "Helped Bentley reach new markets.",
    "A top seller in the luxury SUV segment."
  ],
  variants: [],
  hero_image: "images/cars/bentley/bentayga/hero.jpg",
  image_gallery: [
    "images/cars/bentley/bentayga/1.jpg",
    "images/cars/bentley/bentayga/2.jpg",
    "images/cars/bentley/bentayga/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://www.bentleymotors.com",
  heritage_group: "modern",
  model: "Mulsanne",
  model_slug: "mulsanne",
  model_summary: "Bentley’s flagship limousine, hand-built and powered by a legendary 6.75L twin-turbo V8.",
  years_produced: "2010–2020",
  engine: "6.75L twin-turbo V8",
  horsepower: 505, // *approx.
  top_speed_mph: 190, // *estimated
  body_style: "4-door luxury limousine",
  drivetrain: "RWD",
  transmission: "8-speed automatic",
  seating: 5,
  production_location: "Crewe, England",
  designer: "Dirk van Braeckel",
  price_when_new: "≈£225,000–£300,000", // *estimated
  current_value_range: "£70,000–£180,000", // *market estimate
  model_type: "luxury limousine",
  tags: ["modern", "luxury", "v8", "limousine"],
  notable_details: [
    "The last Bentley to use the iconic 6.75L V8.",
    "Hand-built with over 400 hours of craftsmanship."
  ],
  fun_facts: [
    "The engine design traces its roots back to 1959.",
    "The Mulsanne Speed was the world’s fastest luxury sedan."
  ],
  notable_achievements: [
    "A symbol of British luxury craftsmanship.",
    "Highly regarded for its refinement and presence."
  ],
  variants: [],
  hero_image: "images/cars/bentley/mulsanne/hero.jpg",
  image_gallery: [
    "images/cars/bentley/mulsanne/1.jpg",
    "images/cars/bentley/mulsanne/2.jpg",
    "images/cars/bentley/mulsanne/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bentley_3_Litre",
  heritage_group: "classic",
  model: "3 Litre",
  model_slug: "3-litre",
  model_summary: "Bentley’s first production model and a pioneering sports car known for durability, engineering excellence, and early racing success.",
  years_produced: "1921–1929",
  engine: "3.0L inline-4",
  horsepower: 70, // *approx.
  top_speed_mph: 80, // *estimated
  body_style: "Open tourer / saloon / racing body",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2 or 4",
  production_location: "Cricklewood, London, England",
  designer: "W.O. Bentley",
  price_when_new: "≈£1,100", // *historical estimate
  current_value_range: "£300,000–£1.2M", // *auction-based estimate
  model_type: "vintage sports car",
  tags: ["classic", "vintage", "racing", "wo-bentley"],
  notable_details: [
    "Bentley’s first production car.",
    "Known for exceptional reliability in endurance racing."
  ],
  fun_facts: [
    "The 3 Litre won Le Mans in 1924.",
    "W.O. Bentley insisted on engineering excellence over cost-cutting."
  ],
  notable_achievements: [
    "Le Mans 24 Hours winner (1924).",
    "Established Bentley as a premier performance marque."
  ],
  variants: [
    { name: "Speed Model", years: "1924–1929", engine: "3.0L I4" }
  ],
  hero_image: "images/cars/bentley/3-litre/hero.jpg",
  image_gallery: [
    "images/cars/bentley/3-litre/1.jpg",
    "images/cars/bentley/3-litre/2.jpg",
    "images/cars/bentley/3-litre/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bentley_4½_Litre",
  heritage_group: "classic",
  model: "4½ Litre",
  model_slug: "4.5-litre",
  model_summary: "A larger, more powerful evolution of the 3 Litre, famous for its racing pedigree and the legendary 'Blower' supercharged variant.",
  years_produced: "1927–1931",
  engine: "4.4L inline-4",
  horsepower: 110, // *approx.
  top_speed_mph: 100, // *estimated
  body_style: "Open tourer / saloon / racing body",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2 or 4",
  production_location: "Cricklewood, London, England",
  designer: "W.O. Bentley",
  price_when_new: "≈£1,250", // *historical estimate
  current_value_range: "£1M–£3M", // *auction-based estimate
  model_type: "vintage sports car",
  tags: ["classic", "vintage", "racing", "blower"],
  notable_details: [
    "The famous 'Blower Bentley' used a supercharger mounted in front of the radiator.",
    "Known for immense torque and durability."
  ],
  fun_facts: [
    "Ian Fleming’s James Bond drove a 4½ Litre in the original novels.",
    "The Blower variant is one of the most valuable British cars ever."
  ],
  notable_achievements: [
    "Competed at Le Mans and Brooklands.",
    "A symbol of the Bentley Boys era."
  ],
  variants: [
    { name: "4½ Litre Blower", years: "1929–1931", engine: "4.4L supercharged I4" }
  ],
  hero_image: "images/cars/bentley/4.5-litre/hero.jpg",
  image_gallery: [
    "images/cars/bentley/4.5-litre/1.jpg",
    "images/cars/bentley/4.5-litre/2.jpg",
    "images/cars/bentley/4.5-litre/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bentley_Speed_Six",
  heritage_group: "classic",
  model: "Speed Six",
  model_slug: "speed-six",
  model_summary: "Bentley’s most successful racing car of the pre-war era, combining a powerful 6-cylinder engine with endurance-winning reliability.",
  years_produced: "1928–1930",
  engine: "6.6L inline-6",
  horsepower: 180, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "Open tourer / racing body",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2 or 4",
  production_location: "Cricklewood, London, England",
  designer: "W.O. Bentley",
  price_when_new: "≈£1,650", // *historical estimate
  current_value_range: "£2M–£5M", // *auction-based estimate
  model_type: "vintage racing car",
  tags: ["classic", "vintage", "racing", "wo-bentley"],
  notable_details: [
    "The most successful Bentley racing car of the pre-war era.",
    "Powered by a large-displacement straight-six engine."
  ],
  fun_facts: [
    "The Speed Six won Le Mans twice.",
    "Driven by the famous Bentley Boys, including Woolf Barnato."
  ],
  notable_achievements: [
    "Le Mans 24 Hours winner (1929, 1930).",
    "A dominant force in endurance racing."
  ],
  variants: [],
  hero_image: "images/cars/bentley/speed-six/hero.jpg",
  image_gallery: [
    "images/cars/bentley/speed-six/1.jpg",
    "images/cars/bentley/speed-six/2.jpg",
    "images/cars/bentley/speed-six/3.jpg"
  ]
},
{
  manufacturer: "Bentley",
  slug: "bentley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bentley_R_Type_Continental",
  heritage_group: "classic",
  model: "R-Type Continental",
  model_slug: "r-type-continental",
  model_summary: "A post-war grand touring masterpiece, renowned for its aerodynamic fastback body and status as one of the most beautiful Bentleys ever built.",
  years_produced: "1952–1955",
  engine: "4.6L inline-6",
  horsepower: 153, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door fastback coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Crewe, England",
  designer: "H.J. Mulliner",
  price_when_new: "≈£6,928", // *historical estimate
  current_value_range: "£1M–£2.5M", // *auction-based estimate
  model_type: "grand tourer",
  tags: ["classic", "luxury", "gt", "coachbuilt"],
  notable_details: [
    "One of the fastest four-seat cars of its era.",
    "Hand-built with aerodynamic coachwork by Mulliner."
  ],
  fun_facts: [
    "Inspired the modern Continental GT.",
    "Only around 200 were built, making it extremely rare."
  ],
  notable_achievements: [
    "A design icon of the 1950s.",
    "Praised for its performance and elegance."
  ],
  variants: [],
  hero_image: "images/cars/bentley/r-type-continental/hero.jpg",
  image_gallery: [
    "images/cars/bentley/r-type-continental/1.jpg",
    "images/cars/bentley/r-type-continental/2.jpg",
    "images/cars/bentley/r-type-continental/3.jpg"
  ]
},


  // 6. Bristol
 {
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_400",
  heritage_group: "classic",
  model: "400",
  model_slug: "400",
  model_summary: "Bristol’s first production car, blending pre-war BMW engineering with aircraft-grade craftsmanship and aerodynamic styling.",
  years_produced: "1947–1950",
  engine: "2.0L inline-6",
  horsepower: 80, // *approx.
  top_speed_mph: 90, // *estimated
  body_style: "2-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Filton, England",
  designer: "Bristol Aeroplane Company",
  price_when_new: "≈£2,500", // *historical estimate
  current_value_range: "£40,000–£90,000", // *market estimate
  model_type: "grand touring car",
  tags: ["classic", "gt", "aeronautical", "inline-6"],
  notable_details: [
    "Based heavily on pre-war BMW designs acquired as war reparations.",
    "Hand-built with aircraft-level precision."
  ],
  fun_facts: [
    "The engine design traces back to BMW’s M328.",
    "Bristol’s aircraft engineers tuned the aerodynamics extensively."
  ],
  notable_achievements: [
    "Helped establish Bristol as a maker of refined, exclusive GT cars.",
    "Praised for its engineering sophistication."
  ],
  variants: [],
  hero_image: "images/cars/bristol/400/hero.jpg",
  image_gallery: [
    "images/cars/bristol/400/1.jpg",
    "images/cars/bristol/400/2.jpg",
    "images/cars/bristol/400/3.jpg"
  ]
},
{
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_401",
  heritage_group: "classic",
  model: "401",
  model_slug: "401",
  model_summary: "An aerodynamic evolution of the 400, featuring a sleek body inspired by aircraft design and improved refinement.",
  years_produced: "1948–1953",
  engine: "2.0L inline-6",
  horsepower: 85, // *approx.
  top_speed_mph: 95, // *estimated
  body_style: "2-door fastback saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Filton, England",
  designer: "Bristol Aeroplane Company",
  price_when_new: "≈£3,000", // *historical estimate
  current_value_range: "£35,000–£80,000", // *market estimate
  model_type: "grand touring car",
  tags: ["classic", "gt", "aerodynamic", "inline-6"],
  notable_details: [
    "Bodywork shaped using aircraft wind-tunnel techniques.",
    "More streamlined and refined than the 400."
  ],
  fun_facts: [
    "One of the most aerodynamic British cars of its era.",
    "Bristol’s aircraft engineers were heavily involved in its development."
  ],
  notable_achievements: [
    "Praised for its smooth ride and engineering quality.",
    "A favorite among enthusiasts of post-war British GTs."
  ],
  variants: [],
  hero_image: "images/cars/bristol/401/hero.jpg",
  image_gallery: [
    "images/cars/bristol/401/1.jpg",
    "images/cars/bristol/401/2.jpg",
    "images/cars/bristol/401/3.jpg"
  ]
},
{
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_403",
  heritage_group: "classic",
  model: "403",
  model_slug: "403",
  model_summary: "A refined and more powerful successor to the 401, offering improved performance and luxury in a hand-built GT package.",
  years_produced: "1953–1955",
  engine: "2.0L inline-6",
  horsepower: 100, // *approx.
  top_speed_mph: 100, // *estimated
  body_style: "2-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Filton, England",
  designer: "Bristol Aeroplane Company",
  price_when_new: "≈£3,500", // *historical estimate
  current_value_range: "£45,000–£90,000", // *market estimate
  model_type: "grand touring car",
  tags: ["classic", "gt", "luxury", "inline-6"],
  notable_details: [
    "More powerful and refined than the 401.",
    "Featured improved brakes and suspension."
  ],
  fun_facts: [
    "One of the rarest Bristol models.",
    "Known for its smooth, turbine-like engine note."
  ],
  notable_achievements: [
    "Praised for its engineering sophistication.",
    "A highly collectible post-war British GT."
  ],
  variants: [],
  hero_image: "images/cars/bristol/403/hero.jpg",
  image_gallery: [
    "images/cars/bristol/403/1.jpg",
    "images/cars/bristol/403/2.jpg",
    "images/cars/bristol/403/3.jpg"
  ]
},
{
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_404",
  heritage_group: "classic",
  model: "404",
  model_slug: "404",
  model_summary: "A rare 2-seat sporting coupé with distinctive styling and Bristol’s signature aircraft-inspired engineering.",
  years_produced: "1953–1958",
  engine: "2.0L inline-6",
  horsepower: 105, // *approx.
  top_speed_mph: 110, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Filton, England",
  designer: "Bristol Aeroplane Company",
  price_when_new: "≈£3,800", // *historical estimate
  current_value_range: "£70,000–£150,000", // *market estimate
  model_type: "sports coupé",
  tags: ["classic", "coupe", "aeronautical", "inline-6"],
  notable_details: [
    "One of the rarest Bristol models ever built.",
    "Featured a unique front grille and compact proportions."
  ],
  fun_facts: [
    "Only around 50 units were produced.",
    "Designed as a more sporting alternative to the 403."
  ],
  notable_achievements: [
    "Highly prized by collectors for its rarity.",
    "A standout example of Bristol’s design eccentricity."
  ],
  variants: [],
  hero_image: "images/cars/bristol/404/hero.jpg",
  image_gallery: [
    "images/cars/bristol/404/1.jpg",
    "images/cars/bristol/404/2.jpg",
    "images/cars/bristol/404/3.jpg"
  ]
},
{
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_405",
  heritage_group: "classic",
  model: "405",
  model_slug: "405",
  model_summary: "The only 4-door Bristol ever produced, offering luxury, refinement, and the brand’s signature aircraft-inspired engineering.",
  years_produced: "1954–1958",
  engine: "2.0L inline-6",
  horsepower: 105, // *approx.
  top_speed_mph: 100, // *estimated
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Filton, England",
  designer: "Bristol Aeroplane Company",
  price_when_new: "≈£4,000", // *historical estimate
  current_value_range: "£40,000–£90,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "saloon", "inline-6"],
  notable_details: [
    "The only 4-door model Bristol ever built.",
    "Featured a unique wraparound rear window."
  ],
  fun_facts: [
    "Often used by British aristocracy.",
    "Extremely rare today due to low production numbers."
  ],
  notable_achievements: [
    "Praised for its refinement and engineering.",
    "A standout example of Bristol’s bespoke craftsmanship."
  ],
  variants: [],
  hero_image: "images/cars/bristol/405/hero.jpg",
  image_gallery: [
    "images/cars/bristol/405/1.jpg",
    "images/cars/bristol/405/2.jpg",
    "images/cars/bristol/405/3.jpg"
  ]
},
{
  manufacturer: "Bristol",
  slug: "bristol",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Bristol_Fighter",
  heritage_group: "modern",
  model: "Fighter",
  model_slug: "fighter",
  model_summary: "A wild, low-volume British supercar powered by a V10 engine derived from the Dodge Viper, blending eccentricity with extreme performance.",
  years_produced: "2004–2011",
  engine: "8.0L V10",
  horsepower: 525, // *approx.
  top_speed_mph: 210, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Filton, England",
  designer: "Max Boxstrom",
  price_when_new: "≈£150,000", // *estimated
  current_value_range: "£140,000–£300,000", // *market estimate
  model_type: "supercar",
  tags: ["modern", "supercar", "v10", "eccentric"],
  notable_details: [
    "Powered by a V10 engine sourced from the Dodge Viper.",
    "Extremely low production numbers."
  ],
  fun_facts: [
    "Rumors claimed a 1,000+ hp 'Fighter T' variant, though none were confirmed.",
    "One of the most unusual British supercars ever built."
  ],
  notable_achievements: [
    "A cult icon among enthusiasts of obscure performance cars.",
    "Showcased Bristol’s eccentric engineering philosophy."
  ],
  variants: [],
  hero_image: "images/cars/bristol/fighter/hero.jpg",
  image_gallery: [
    "images/cars/bristol/fighter/1.jpg",
    "images/cars/bristol/fighter/2.jpg",
    "images/cars/bristol/fighter/3.jpg"
  ]
},


  // 7. Caterham
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "classic",
  model: "Seven",
  model_slug: "seven",
  model_summary: "A direct continuation of the Lotus Seven S3, the Caterham Seven remains one of the purest, lightest, and most engaging sports cars ever built.",
  years_produced: "1973–present",
  engine: "Varies by model (Ford inline-4)",
  horsepower: 80, // *approx. base spec
  top_speed_mph: 100, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Colin Chapman (original), Caterham Engineering",
  price_when_new: "≈£5,000 (1970s) / ≈£30,000+ (modern)", // *historical estimate
  current_value_range: "£10,000–£40,000", // *market estimate
  model_type: "lightweight sports car",
  tags: ["classic", "lightweight", "rwd", "kit-car", "track"],
  notable_details: [
    "Direct descendant of the Lotus Seven S3.",
    "Available fully built or as a self-assembly kit."
  ],
  fun_facts: [
    "One of the longest-running sports cars in continuous production.",
    "Famously featured in the TV series 'The Prisoner'."
  ],
  notable_achievements: [
    "A benchmark for lightweight handling.",
    "Beloved by track-day enthusiasts worldwide."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven/1.jpg",
    "images/cars/caterham/seven/2.jpg",
    "images/cars/caterham/seven/3.jpg"
  ]
},
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "modern",
  model: "Seven 160 / 165",
  model_slug: "seven-160",
  model_summary: "A lightweight, low-power Caterham inspired by Japanese kei-car regulations, offering pure driving fun with minimal weight.",
  years_produced: "2013–2018",
  engine: "660cc turbocharged inline-3",
  horsepower: 80, // *approx.
  top_speed_mph: 100, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Caterham Engineering",
  price_when_new: "≈£14,995", // *estimated
  current_value_range: "£12,000–£20,000", // *market estimate
  model_type: "lightweight sports car",
  tags: ["modern", "lightweight", "turbo", "kei-car"],
  notable_details: [
    "Uses a Suzuki kei-car engine.",
    "One of the slowest Caterhams, yet one of the most fun."
  ],
  fun_facts: [
    "Designed to meet Japan’s kei-car regulations.",
    "Praised for its playful, low-grip handling."
  ],
  notable_achievements: [
    "A cult favorite among purist drivers.",
    "Showcased Caterham’s commitment to lightweight engineering."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven-160/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven-160/1.jpg",
    "images/cars/caterham/seven-160/2.jpg",
    "images/cars/caterham/seven-160/3.jpg"
  ]
},
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "modern",
  model: "Seven 270",
  model_slug: "seven-270",
  model_summary: "A balanced, lively Caterham offering an ideal mix of power, weight, and classic Seven driving purity.",
  years_produced: "2015–present",
  engine: "1.6L Ford Sigma inline-4",
  horsepower: 135, // *approx.
  top_speed_mph: 122, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Caterham Engineering",
  price_when_new: "≈£30,000–£35,000", // *estimated
  current_value_range: "£20,000–£35,000", // *market estimate
  model_type: "lightweight sports car",
  tags: ["modern", "lightweight", "rwd", "track"],
  notable_details: [
    "Considered the sweet spot of the Caterham range.",
    "Lightweight chassis delivers exceptional agility."
  ],
  fun_facts: [
    "Often recommended as the ideal first Caterham.",
    "Shares its engine with the Ford Fiesta."
  ],
  notable_achievements: [
    "Praised for its balance and usability.",
    "A favorite among track-day drivers."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven-270/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven-270/1.jpg",
    "images/cars/caterham/seven-270/2.jpg",
    "images/cars/caterham/seven-270/3.jpg"
  ]
},
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "modern",
  model: "Seven 310",
  model_slug: "seven-310",
  model_summary: "A playful, rev-happy Caterham born from a happy engineering accident, offering more power than the 270 while retaining its balance.",
  years_produced: "2016–present",
  engine: "1.6L Ford Sigma inline-4",
  horsepower: 152, // *approx.
  top_speed_mph: 127, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Caterham Engineering",
  price_when_new: "≈£32,000–£38,000", // *estimated
  current_value_range: "£22,000–£38,000", // *market estimate
  model_type: "lightweight sports car",
  tags: ["modern", "lightweight", "rwd", "track"],
  notable_details: [
    "Created accidentally when Caterham discovered a power bump during testing.",
    "Known for its playful, rev-happy character."
  ],
  fun_facts: [
    "Caterham called it 'the best car we’ve ever built'.",
    "A cult favorite among Seven enthusiasts."
  ],
  notable_achievements: [
    "Praised for its character and responsiveness.",
    "A standout in the modern Caterham lineup."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven-310/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven-310/1.jpg",
    "images/cars/caterham/seven-310/2.jpg",
    "images/cars/caterham/seven-310/3.jpg"
  ]
},
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "modern",
  model: "Seven 420",
  model_slug: "seven-420",
  model_summary: "A serious performance Seven with a high-revving Duratec engine, offering intense acceleration and track-ready dynamics.",
  years_produced: "2015–present",
  engine: "2.0L Ford Duratec inline-4",
  horsepower: 210, // *approx.
  top_speed_mph: 136, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual or 6-speed sequential",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Caterham Engineering",
  price_when_new: "≈£40,000–£50,000", // *estimated
  current_value_range: "£30,000–£50,000", // *market estimate
  model_type: "high-performance sports car",
  tags: ["modern", "lightweight", "rwd", "duratec"],
  notable_details: [
    "Uses a high-revving Ford Duratec engine.",
    "A popular choice for serious track-day drivers."
  ],
  fun_facts: [
    "Often described as the 'Goldilocks' performance model.",
    "Shares components with Caterham’s race cars."
  ],
  notable_achievements: [
    "Praised for its power-to-weight ratio.",
    "A benchmark for lightweight performance."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven-420/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven-420/1.jpg",
    "images/cars/caterham/seven-420/2.jpg",
    "images/cars/caterham/seven-420/3.jpg"
  ]
},
{
  manufacturer: "Caterham",
  slug: "caterham",
  brand_group: "Sports / Performance",
  brand_url: "https://www.caterhamcars.com",
  heritage_group: "modern",
  model: "Seven 620R",
  model_slug: "seven-620r",
  model_summary: "The most extreme Caterham ever built, delivering supercar-level acceleration in a featherweight chassis.",
  years_produced: "2013–present",
  engine: "2.0L supercharged inline-4",
  horsepower: 310, // *approx.
  top_speed_mph: 155, // *estimated
  body_style: "2-door open-top roadster",
  drivetrain: "RWD",
  transmission: "6-speed sequential or manual",
  seating: 2,
  production_location: "Dartford, England",
  designer: "Caterham Engineering",
  price_when_new: "≈£50,000–£60,000", // *estimated
  current_value_range: "£45,000–£70,000", // *market estimate
  model_type: "extreme performance sports car",
  tags: ["modern", "supercharged", "lightweight", "track"],
  notable_details: [
    "0–60 mph in under 3 seconds.",
    "One of the most intense road-legal cars ever built."
  ],
  fun_facts: [
    "Faster to 60 mph than many supercars.",
    "Famously described as 'terrifying in the best way'."
  ],
  notable_achievements: [
    "A legend among hardcore drivers.",
    "A benchmark for extreme lightweight performance."
  ],
  variants: [],
  hero_image: "images/cars/caterham/seven-620r/hero.jpg",
  image_gallery: [
    "images/cars/caterham/seven-620r/1.jpg",
    "images/cars/caterham/seven-620r/2.jpg",
    "images/cars/caterham/seven-620r/3.jpg"
  ]
},
  // Daimler
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_SP250",
  heritage_group: "classic",
  model: "SP250",
  model_slug: "sp250",
  model_summary: "A lightweight fiberglass-bodied British sports car powered by Daimler’s advanced 2.5L V8, known for its distinctive styling and lively performance.",
  years_produced: "1959–1964",
  engine: "2.5L Daimler Hemi V8",
  horsepower: 140, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Daimler Design Team",
  price_when_new: "≈£1,395", // *historical estimate
  current_value_range: "£25,000–£55,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "v8", "fiberglass", "roadster"],
  notable_details: [
    "Fiberglass body kept weight low.",
    "Powered by Daimler’s advanced hemispherical-head V8."
  ],
  fun_facts: [
    "Used by British police for high-speed motorway patrols.",
    "One of the few Daimlers aimed at the sports car market."
  ],
  notable_achievements: [
    "Praised for its engine and performance.",
    "A cult classic among British sports car enthusiasts."
  ],
  variants: [],
  hero_image: "images/cars/daimler/sp250/hero.jpg",
  image_gallery: [
    "images/cars/daimler/sp250/1.jpg",
    "images/cars/daimler/sp250/2.jpg",
    "images/cars/daimler/sp250/3.jpg"
  ]
},
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_Majestic_Major",
  heritage_group: "classic",
  model: "Majestic Major",
  model_slug: "majestic-major",
  model_summary: "A large, luxurious British saloon powered by Daimler’s smooth 4.5L V8, offering refined performance and stately presence.",
  years_produced: "1959–1968",
  engine: "4.5L Daimler V8",
  horsepower: 220, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "3-speed automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "Daimler Design Team",
  price_when_new: "≈£2,495", // *historical estimate
  current_value_range: "£10,000–£25,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "v8", "saloon"],
  notable_details: [
    "Powered by Daimler’s legendary 4.5L V8.",
    "Known for its smooth ride and understated elegance."
  ],
  fun_facts: [
    "One of the fastest large British saloons of its era.",
    "Favored by dignitaries and officials."
  ],
  notable_achievements: [
    "Praised for refinement and performance.",
    "A standout in Daimler’s luxury lineage."
  ],
  variants: [],
  hero_image: "images/cars/daimler/majestic-major/hero.jpg",
  image_gallery: [
    "images/cars/daimler/majestic-major/1.jpg",
    "images/cars/daimler/majestic-major/2.jpg",
    "images/cars/daimler/majestic-major/3.jpg"
  ]
},
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_Sovereign",
  heritage_group: "classic",
  model: "Sovereign",
  model_slug: "sovereign",
  model_summary: "A refined, luxurious version of the Jaguar XJ, offering Daimler’s signature grille, interior upgrades, and aristocratic character.",
  years_produced: "1966–1983",
  engine: "2.8L–4.2L Jaguar inline-6",
  horsepower: 170, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "3-speed automatic or 4-speed manual",
  seating: 5,
  production_location: "Coventry, England",
  designer: "Jaguar Design Team",
  price_when_new: "≈£2,300", // *historical estimate
  current_value_range: "£5,000–£20,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "xj-based", "saloon"],
  notable_details: [
    "Essentially a more luxurious Jaguar XJ.",
    "Featured Daimler’s fluted grille and premium trim."
  ],
  fun_facts: [
    "Often used by British government officials.",
    "One of Daimler’s most successful badge-engineered models."
  ],
  notable_achievements: [
    "Praised for comfort and refinement.",
    "A staple of British executive transport."
  ],
  variants: [],
  hero_image: "images/cars/daimler/sovereign/hero.jpg",
  image_gallery: [
    "images/cars/daimler/sovereign/1.jpg",
    "images/cars/daimler/sovereign/2.jpg",
    "images/cars/daimler/sovereign/3.jpg"
  ]
},
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_Double_Six",
  heritage_group: "classic",
  model: "Double Six",
  model_slug: "double-six",
  model_summary: "Daimler’s flagship V12 luxury saloon, based on the Jaguar XJ12 but elevated with bespoke trim and aristocratic refinement.",
  years_produced: "1972–1997",
  engine: "5.3L Jaguar V12",
  horsepower: 285, // *approx.
  top_speed_mph: 140, // *estimated
  body_style: "4-door luxury saloon",
  drivetrain: "RWD",
  transmission: "3-speed or 4-speed automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "Jaguar Design Team",
  price_when_new: "≈£6,500–£30,000", // *historical estimate
  current_value_range: "£6,000–£25,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "v12", "xj-based"],
  notable_details: [
    "One of the smoothest V12 engines ever made.",
    "The most prestigious model in the Daimler lineup."
  ],
  fun_facts: [
    "Favored by royalty and heads of state.",
    "The V12 was known for its whisper-quiet operation."
  ],
  notable_achievements: [
    "A benchmark for luxury refinement.",
    "One of the longest-running Daimler nameplates."
  ],
  variants: [],
  hero_image: "images/cars/daimler/double-six/hero.jpg",
  image_gallery: [
    "images/cars/daimler/double-six/1.jpg",
    "images/cars/daimler/double-six/2.jpg",
    "images/cars/daimler/double-six/3.jpg"
  ]
},
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_DS420",
  heritage_group: "classic",
  model: "DS420 Limousine",
  model_slug: "ds420",
  model_summary: "A stately limousine used by royalty, governments, and ceremonial fleets, known for its elegance and imposing presence.",
  years_produced: "1968–1992",
  engine: "4.2L Jaguar inline-6",
  horsepower: 165, // *approx.
  top_speed_mph: 110, // *estimated
  body_style: "4-door limousine",
  drivetrain: "RWD",
  transmission: "3-speed automatic",
  seating: "7–8",
  production_location: "Coventry, England",
  designer: "Jaguar & Vanden Plas",
  price_when_new: "≈£5,500", // *historical estimate
  current_value_range: "£8,000–£25,000", // *market estimate
  model_type: "limousine",
  tags: ["classic", "limousine", "royal", "vanden-plas"],
  notable_details: [
    "Used extensively by the British Royal Household.",
    "Built by hand with coachbuilt construction."
  ],
  fun_facts: [
    "One of the longest-running limousine models ever produced.",
    "Often seen in state processions and official ceremonies."
  ],
  notable_achievements: [
    "A symbol of British ceremonial transport.",
    "Favored by governments worldwide."
  ],
  variants: [],
  hero_image: "images/cars/daimler/ds420/hero.jpg",
  image_gallery: [
    "images/cars/daimler/ds420/1.jpg",
    "images/cars/daimler/ds420/2.jpg",
    "images/cars/daimler/ds420/3.jpg"
  ]
},
{
  manufacturer: "Daimler",
  slug: "daimler",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Daimler_Super_Eight",
  heritage_group: "modern",
  model: "Super Eight",
  model_slug: "super-eight",
  model_summary: "The final Daimler model, a supercharged V8 luxury saloon based on the Jaguar X350, offering modern performance with traditional Daimler elegance.",
  years_produced: "2005–2009",
  engine: "4.2L supercharged V8",
  horsepower: 400, // *approx.
  top_speed_mph: 155, // *limited
  body_style: "4-door luxury saloon",
  drivetrain: "RWD",
  transmission: "6-speed automatic",
  seating: 5,
  production_location: "Birmingham, England",
  designer: "Jaguar Design Team",
  price_when_new: "≈£58,000", // *estimated
  current_value_range: "£8,000–£20,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["modern", "luxury", "supercharged", "xj-based"],
  notable_details: [
    "The last car to wear the Daimler badge.",
    "Featured exclusive interior trim and fluted grille."
  ],
  fun_facts: [
    "One of the most understated supercharged V8 sedans ever made.",
    "Marks the end of Daimler’s 100+ year history."
  ],
  notable_achievements: [
    "Praised for refinement and performance.",
    "A fitting finale for the Daimler marque."
  ],
  variants: [],
  hero_image: "images/cars/daimler/super-eight/hero.jpg",
  image_gallery: [
    "images/cars/daimler/super-eight/1.jpg",
    "images/cars/daimler/super-eight/2.jpg",
    "images/cars/daimler/super-eight/3.jpg"
  ]
},


  // 8. Hillman
 {
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Minx",
  heritage_group: "classic",
  model: "Minx",
  model_slug: "minx",
  model_summary: "Hillman’s long-running family saloon, produced across multiple generations and a staple of British motoring for nearly four decades.",
  years_produced: "1931–1970",
  engine: "1.0L–1.7L inline-4",
  horsepower: 35, // *approx.
  top_speed_mph: 70, // *estimated
  body_style: "2-door or 4-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£150–£700", // *historical estimate
  current_value_range: "£3,000–£10,000", // *market estimate
  model_type: "family saloon",
  tags: ["classic", "family", "rwd"],
  notable_details: [
    "One of Hillman’s longest-running and most successful models.",
    "Produced in numerous Series from the 1930s to the 1970s."
  ],
  fun_facts: [
    "Exported globally, including CKD kits for overseas assembly.",
    "A popular choice for British families post‑WWII."
  ],
  notable_achievements: [
    "A cornerstone of the Rootes Group lineup.",
    "Known for reliability and simplicity."
  ],
  variants: [],
  hero_image: "images/cars/hillman/minx/hero.jpg",
  image_gallery: [
    "images/cars/hillman/minx/1.jpg",
    "images/cars/hillman/minx/2.jpg",
    "images/cars/hillman/minx/3.jpg"
  ]
},
{
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Husky",
  heritage_group: "classic",
  model: "Husky",
  model_slug: "husky",
  model_summary: "A compact estate car based on the Minx platform, offering practicality and versatility for families and small businesses.",
  years_produced: "1954–1970",
  engine: "1.2L–1.4L inline-4",
  horsepower: 37, // *approx.
  top_speed_mph: 75, // *estimated
  body_style: "3-door estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£600", // *historical estimate
  current_value_range: "£3,000–£8,000", // *market estimate
  model_type: "compact estate",
  tags: ["classic", "estate", "family"],
  notable_details: [
    "Shared mechanicals with the Minx.",
    "Designed as a practical, affordable estate car."
  ],
  fun_facts: [
    "Popular with tradespeople due to its cargo space.",
    "Later versions shared styling cues with the Hillman Imp."
  ],
  notable_achievements: [
    "A practical and affordable British estate.",
    "A staple of the Rootes lineup for nearly two decades."
  ],
  variants: [],
  hero_image: "images/cars/hillman/husky/hero.jpg",
  image_gallery: [
    "images/cars/hillman/husky/1.jpg",
    "images/cars/hillman/husky/2.jpg",
    "images/cars/hillman/husky/3.jpg"
  ]
},
{
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Imp",
  heritage_group: "classic",
  model: "Imp",
  model_slug: "imp",
  model_summary: "A rear-engined compact car with an all-aluminum engine, designed to compete with the Mini and known for lively handling.",
  years_produced: "1963–1976",
  engine: "875cc inline-4 (rear-mounted)",
  horsepower: 39, // *approx.
  top_speed_mph: 80, // *estimated
  body_style: "2-door saloon / coupe",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Linwood, Scotland",
  designer: "Rootes Group",
  price_when_new: "≈£508", // *historical estimate
  current_value_range: "£4,000–£12,000", // *market estimate
  model_type: "compact car",
  tags: ["classic", "rear-engine", "lightweight"],
  notable_details: [
    "Featured an all-aluminum Coventry Climax–derived engine.",
    "Rear-engine layout gave it excellent balance."
  ],
  fun_facts: [
    "Designed to rival the Mini but with more advanced engineering.",
    "Spawned performance versions like the Imp Sport and Sunbeam Stiletto."
  ],
  notable_achievements: [
    "Popular in grassroots motorsport.",
    "Developed a cult following for its handling."
  ],
  variants: [],
  hero_image: "images/cars/hillman/imp/hero.jpg",
  image_gallery: [
    "images/cars/hillman/imp/1.jpg",
    "images/cars/hillman/imp/2.jpg",
    "images/cars/hillman/imp/3.jpg"
  ]
},
{
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Super_Minx",
  heritage_group: "classic",
  model: "Super Minx",
  model_slug: "super-minx",
  model_summary: "A larger, more upscale version of the Minx, offering improved comfort, space, and refinement.",
  years_produced: "1961–1967",
  engine: "1.6L–1.7L inline-4",
  horsepower: 55, // *approx.
  top_speed_mph: 85, // *estimated
  body_style: "4-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£780", // *historical estimate
  current_value_range: "£3,000–£9,000", // *market estimate
  model_type: "family saloon",
  tags: ["classic", "family", "rwd"],
  notable_details: [
    "Positioned above the standard Minx in the lineup.",
    "Offered more interior space and improved trim."
  ],
  fun_facts: [
    "Shared components with the Singer Vogue and Humber Sceptre.",
    "A popular choice for middle‑class families."
  ],
  notable_achievements: [
    "Praised for comfort and practicality.",
    "A key model in the Rootes mid‑size lineup."
  ],
  variants: [],
  hero_image: "images/cars/hillman/super-minx/hero.jpg",
  image_gallery: [
    "images/cars/hillman/super-minx/1.jpg",
    "images/cars/hillman/super-minx/2.jpg",
    "images/cars/hillman/super-minx/3.jpg"
  ]
},
{
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Hunter",
  heritage_group: "classic",
  model: "Hunter",
  model_slug: "hunter",
  model_summary: "A mid-size saloon known for durability, global sales, and rally success, including victory in the 1968 London–Sydney Marathon.",
  years_produced: "1966–1979",
  engine: "1.5L–1.7L inline-4",
  horsepower: 60, // *approx.
  top_speed_mph: 90, // *estimated
  body_style: "4-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£850", // *historical estimate
  current_value_range: "£2,000–£7,000", // *market estimate
  model_type: "mid-size saloon",
  tags: ["classic", "family", "rwd", "motorsport"],
  notable_details: [
    "Sold globally under various Rootes/Chrysler brands.",
    "Known for durability and simplicity."
  ],
  fun_facts: [
    "Won the 1968 London–Sydney Marathon.",
    "Produced under license in Iran as the Paykan."
  ],
  notable_achievements: [
    "Major rally success in the late 1960s.",
    "A popular taxi and fleet vehicle worldwide."
  ],
  variants: [],
  hero_image: "images/cars/hillman/hunter/hero.jpg",
  image_gallery: [
    "images/cars/hillman/hunter/1.jpg",
    "images/cars/hillman/hunter/2.jpg",
    "images/cars/hillman/hunter/3.jpg"
  ]
},
{
  manufacturer: "Hillman",
  slug: "hillman",
  brand_group: "Classic British Motoring",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Avenger",
  heritage_group: "classic",
  model: "Avenger",
  model_slug: "avenger",
  model_summary: "Hillman’s final major model, offering modern styling, good handling, and strong global sales before the Chrysler/Talbot transition.",
  years_produced: "1970–1981",
  engine: "1.3L–1.6L inline-4",
  horsepower: 60, // *approx.
  top_speed_mph: 90, // *estimated
  body_style: "4-door saloon / 5-door estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£900", // *historical estimate
  current_value_range: "£2,000–£6,000", // *market estimate
  model_type: "family saloon",
  tags: ["classic", "family", "rwd"],
  notable_details: [
    "Later sold as the Chrysler Avenger and Talbot Avenger.",
    "Known for good handling and practicality."
  ],
  fun_facts: [
    "Popular in club rallying.",
    "Exported widely, including to South America."
  ],
  notable_achievements: [
    "A strong seller in the 1970s.",
    "Hillman’s final major independent model."
  ],
  variants: [],
  hero_image: "images/cars/hillman/avenger/hero.jpg",
  image_gallery: [
    "images/cars/hillman/avenger/1.jpg",
    "images/cars/hillman/avenger/2.jpg",
    "images/cars/hillman/avenger/3.jpg"
  ]
},


  // 9. Jaguar
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XK120",
  heritage_group: "classic",
  model: "XK120",
  model_slug: "xk120",
  model_summary: "The world’s fastest production car at launch, the XK120 introduced Jaguar’s legendary XK straight-six and set the stage for decades of performance icons.",
  years_produced: "1948–1954",
  engine: "3.4L inline-6",
  horsepower: 160, // *approx.
  top_speed_mph: 120, // *verified period record
  body_style: "2-door roadster / coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Coventry, England",
  designer: "William Lyons",
  price_when_new: "≈£1,263", // *historical estimate
  current_value_range: "£70,000–£200,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "sports-car", "inline-6", "rwd"],
  notable_details: [
    "Named for its 120 mph top speed.",
    "Launched Jaguar’s legendary XK engine family."
  ],
  fun_facts: [
    "Set multiple speed records, including 132.6 mph on a Belgian motorway.",
    "Early cars had hand‑beaten aluminum bodies."
  ],
  notable_achievements: [
    "Dominated early post‑war sports car racing.",
    "Established Jaguar as a global performance brand."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xk120/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xk120/1.jpg",
    "images/cars/jaguar/xk120/2.jpg",
    "images/cars/jaguar/xk120/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XK140",
  heritage_group: "classic",
  model: "XK140",
  model_slug: "xk140",
  model_summary: "An evolution of the XK120 with more power, better brakes, and improved comfort, while retaining the classic Jaguar sports car character.",
  years_produced: "1954–1957",
  engine: "3.4L inline-6",
  horsepower: 190, // *approx.
  top_speed_mph: 125, // *estimated
  body_style: "2-door roadster / coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Jaguar Cars",
  price_when_new: "≈£1,329", // *historical estimate
  current_value_range: "£60,000–£150,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "sports-car", "inline-6", "rwd"],
  notable_details: [
    "Offered more interior space than the XK120.",
    "Featured rack‑and‑pinion steering for improved handling."
  ],
  fun_facts: [
    "Often considered the best-balanced XK model.",
    "Available in three body styles: OTS, FHC, DHC."
  ],
  notable_achievements: [
    "Popular among touring enthusiasts.",
    "A refined evolution of Jaguar’s early sports cars."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xk140/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xk140/1.jpg",
    "images/cars/jaguar/xk140/2.jpg",
    "images/cars/jaguar/xk140/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XK150",
  heritage_group: "classic",
  model: "XK150",
  model_slug: "xk150",
  model_summary: "The final and most advanced XK model, featuring disc brakes, more power, and a more modern driving experience.",
  years_produced: "1957–1961",
  engine: "3.4L–3.8L inline-6",
  horsepower: 210, // *approx.
  top_speed_mph: 135, // *estimated
  body_style: "2-door roadster / coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual with optional overdrive",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Jaguar Cars",
  price_when_new: "≈£1,695", // *historical estimate
  current_value_range: "£50,000–£120,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "sports-car", "inline-6", "rwd"],
  notable_details: [
    "First Jaguar sports car with disc brakes as standard.",
    "More refined and comfortable than earlier XK models."
  ],
  fun_facts: [
    "The XK150S 3.8 was one of the fastest cars of its era.",
    "Often seen as the bridge between the XK line and the E‑Type."
  ],
  notable_achievements: [
    "Praised for its braking and refinement.",
    "A highly collectible classic Jaguar."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xk150/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xk150/1.jpg",
    "images/cars/jaguar/xk150/2.jpg",
    "images/cars/jaguar/xk150/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_E-Type",
  heritage_group: "classic",
  model: "E-Type Series 1",
  model_slug: "etype-s1",
  model_summary: "Often called the most beautiful car ever made, the Series 1 E-Type combined stunning design with advanced engineering and high performance.",
  years_produced: "1961–1968",
  engine: "3.8L–4.2L inline-6",
  horsepower: 265, // *approx.
  top_speed_mph: 150, // *estimated
  body_style: "2-door coupé / roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Malcolm Sayer",
  price_when_new: "≈£2,097", // *historical estimate
  current_value_range: "£80,000–£250,000", // *market estimate
  model_type: "sports car",
  tags: ["classic", "sports-car", "iconic", "inline-6"],
  notable_details: [
    "Enzo Ferrari famously called it 'the most beautiful car ever made'.",
    "Featured monocoque construction and independent rear suspension."
  ],
  fun_facts: [
    "Could outrun many contemporary Ferraris at half the price.",
    "Early cars had aircraft-style toggle switches."
  ],
  notable_achievements: [
    "A design icon of the 20th century.",
    "One of the most influential sports cars ever built."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/etype-s1/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/etype-s1/1.jpg",
    "images/cars/jaguar/etype-s1/2.jpg",
    "images/cars/jaguar/etype-s1/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_E-Type",
  heritage_group: "classic",
  model: "E-Type Series 3 V12",
  model_slug: "etype-s3",
  model_summary: "The final evolution of the E-Type, featuring a smooth and powerful V12 engine, wider track, and grand touring refinement.",
  years_produced: "1971–1974",
  engine: "5.3L V12",
  horsepower: 272, // *approx.
  top_speed_mph: 145, // *estimated
  body_style: "2-door coupé / roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual or automatic",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Jaguar Cars",
  price_when_new: "≈£3,000", // *historical estimate
  current_value_range: "£40,000–£120,000", // *market estimate
  model_type: "grand touring sports car",
  tags: ["classic", "v12", "sports-car", "gt"],
  notable_details: [
    "Introduced Jaguar’s first production V12 engine.",
    "Wider track and flared arches gave it a more muscular stance."
  ],
  fun_facts: [
    "The V12 was incredibly smooth and quiet.",
    "Often considered the best long-distance E-Type."
  ],
  notable_achievements: [
    "A refined finale to the E-Type lineage.",
    "Praised for its grand touring capability."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/etype-s3/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/etype-s3/1.jpg",
    "images/cars/jaguar/etype-s3/2.jpg",
    "images/cars/jaguar/etype-s3/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Luxury / Executive",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_Mark_2",
  heritage_group: "classic",
  model: "Mark 2",
  model_slug: "mark-2",
  model_summary: "A stylish and sporty British saloon known for its performance, elegance, and motorsport success. One of Jaguar’s most iconic classic sedans.",
  years_produced: "1959–1967",
  engine: "2.4L, 3.4L, or 3.8L inline-6",
  horsepower: 120, // *approx. base
  top_speed_mph: 125, // *estimated for 3.8
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual or automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "William Lyons",
  price_when_new: "≈£1,534", // *historical estimate
  current_value_range: "£15,000–£60,000", // *market estimate
  model_type: "luxury sports saloon",
  tags: ["classic", "luxury", "sports-saloon", "inline-6"],
  notable_details: [
    "The 3.8L version was one of the fastest saloons of its era.",
    "Featured signature wood trim and leather interiors."
  ],
  fun_facts: [
    "Popular with both British police and getaway drivers.",
    "Starred in countless films and TV shows."
  ],
  notable_achievements: [
    "Successful in touring car racing.",
    "A design icon of 1960s British motoring."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/mark-2/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/mark-2/1.jpg",
    "images/cars/jaguar/mark-2/2.jpg",
    "images/cars/jaguar/mark-2/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Luxury / Executive",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XJ",
  heritage_group: "classic",
  model: "XJ6 Series 1",
  model_slug: "xj6-s1",
  model_summary: "The first-generation XJ, considered one of Jaguar’s finest saloons, combining refinement, handling, and timeless styling.",
  years_produced: "1968–1973",
  engine: "2.8L or 4.2L inline-6",
  horsepower: 170, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual or automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "William Lyons",
  price_when_new: "≈£2,000", // *historical estimate
  current_value_range: "£5,000–£20,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "inline-6", "xj"],
  notable_details: [
    "Introduced Jaguar’s long-running XJ line.",
    "Praised for its ride comfort and handling balance."
  ],
  fun_facts: [
    "William Lyons personally refined the styling.",
    "The XJ6 became Jaguar’s flagship for decades."
  ],
  notable_achievements: [
    "Widely regarded as one of the best saloons of its era.",
    "Set new standards for refinement and comfort."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xj6-s1/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xj6-s1/1.jpg",
    "images/cars/jaguar/xj6-s1/2.jpg",
    "images/cars/jaguar/xj6-s1/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Luxury / Executive",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XJ",
  heritage_group: "classic",
  model: "XJ12 Series 2",
  model_slug: "xj12-s2",
  model_summary: "A luxurious V12-powered saloon offering exceptional smoothness and refinement, representing the pinnacle of Jaguar’s 1970s engineering.",
  years_produced: "1973–1979",
  engine: "5.3L Jaguar V12",
  horsepower: 285, // *approx.
  top_speed_mph: 140, // *estimated
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "3-speed automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "Jaguar Cars",
  price_when_new: "≈£4,000", // *historical estimate
  current_value_range: "£4,000–£15,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["classic", "luxury", "v12", "xj"],
  notable_details: [
    "One of the smoothest V12 engines ever produced.",
    "Offered unmatched refinement for its time."
  ],
  fun_facts: [
    "At launch, it was the world’s only mass-produced V12 saloon.",
    "Known for its whisper-quiet operation."
  ],
  notable_achievements: [
    "A benchmark for luxury refinement in the 1970s.",
    "Helped solidify Jaguar’s reputation for smooth, powerful engines."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xj12-s2/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xj12-s2/1.jpg",
    "images/cars/jaguar/xj12-s2/2.jpg",
    "images/cars/jaguar/xj12-s2/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Luxury / Executive",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XJ_(X308)",
  heritage_group: "modern",
  model: "XJ X308",
  model_slug: "xj-x308",
  model_summary: "The first Jaguar XJ to use the AJ‑V8 engine family, blending traditional Jaguar styling with modern performance and refinement.",
  years_produced: "1997–2003",
  engine: "3.2L or 4.0L V8 (supercharged on XJR)",
  horsepower: 240, // *approx. base — supported by 237–365 hp range 
  top_speed_mph: 155, // *estimated (limited)
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "5-speed automatic",
  seating: 5,
  production_location: "Coventry, England",
  designer: "Jaguar Design Team",
  price_when_new: "≈£40,000–£55,000", // *estimated
  current_value_range: "£3,000–£12,000", // *market estimate
  model_type: "luxury saloon",
  tags: ["modern", "luxury", "v8", "xj"],
  notable_details: [
    "First XJ generation to use Jaguar’s AJ‑V8 engine.",
    "Supercharged XJR variant offered sports‑saloon performance."
  ],
  fun_facts: [
    "Shares platform lineage with Daimler X308 models.",
    "One of the last Jaguars with classic XJ proportions."
  ],
  notable_achievements: [
    "Praised for refinement and V8 smoothness.",
    "Helped modernize Jaguar’s flagship saloon line."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xj-x308/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xj-x308/1.jpg",
    "images/cars/jaguar/xj-x308/2.jpg",
    "images/cars/jaguar/xj-x308/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XK_(X100)",
  heritage_group: "modern",
  model: "XKR",
  model_slug: "xkr",
  model_summary: "A supercharged grand tourer offering a blend of luxury, speed, and classic Jaguar styling, based on the XK8 platform.",
  years_produced: "1998–2006",
  engine: "4.0L or 4.2L supercharged V8",
  horsepower: 370, // *approx. — supported by 370 hp X308 R engine family 
  top_speed_mph: 155, // *limited
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed or 6-speed automatic",
  seating: 4,
  production_location: "Birmingham, England",
  designer: "Geoff Lawson",
  price_when_new: "≈£55,000–£70,000", // *estimated
  current_value_range: "£8,000–£25,000", // *market estimate
  model_type: "grand tourer",
  tags: ["modern", "supercharged", "gt", "v8"],
  notable_details: [
    "Supercharged AJ‑V8 delivered strong performance.",
    "Shared aluminum components with Aston Martin DB7."
  ],
  fun_facts: [
    "Featured in multiple Bond‑era video games.",
    "One of Jaguar’s most successful modern GTs."
  ],
  notable_achievements: [
    "Praised for comfort and high‑speed stability.",
    "Helped revive Jaguar’s performance image in the 2000s."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xkr/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xkr/1.jpg",
    "images/cars/jaguar/xkr/2.jpg",
    "images/cars/jaguar/xkr/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_F-Type",
  heritage_group: "modern",
  model: "F-Type",
  model_slug: "f-type",
  model_summary: "Jaguar’s modern sports car, blending aggressive styling with supercharged V6 and V8 performance, serving as the spiritual successor to the E-Type.",
  years_produced: "2013–present",
  engine: "2.0L turbo I4, 3.0L supercharged V6, or 5.0L supercharged V8",
  horsepower: 296, // *approx. base — supported by XF/F-Type engine families 
  top_speed_mph: 186, // *estimated for V8
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD or AWD",
  transmission: "8-speed automatic",
  seating: 2,
  production_location: "Birmingham, England",
  designer: "Ian Callum",
  price_when_new: "≈£55,000–£120,000", // *estimated
  current_value_range: "£25,000–£80,000", // *market estimate
  model_type: "sports car",
  tags: ["modern", "sports-car", "supercharged", "v8"],
  notable_details: [
    "Designed as a modern reinterpretation of the E-Type.",
    "Available with AWD on higher‑performance variants."
  ],
  fun_facts: [
    "Featured in numerous racing series and video games.",
    "One of the last Jaguar models to offer a V8."
  ],
  notable_achievements: [
    "Praised for handling and design.",
    "Helped reestablish Jaguar as a sports‑car brand."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/f-type/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/f-type/1.jpg",
    "images/cars/jaguar/f-type/2.jpg",
    "images/cars/jaguar/f-type/3.jpg"
  ]
},
{
  manufacturer: "Jaguar",
  slug: "jaguar",
  brand_group: "Luxury / Executive",
  brand_url: "https://en.wikipedia.org/wiki/Jaguar_XF",
  heritage_group: "modern",
  model: "XF",
  model_slug: "xf",
  model_summary: "A modern executive saloon blending British design with advanced technology and a range of efficient and powerful engines.",
  years_produced: "2007–present",
  engine: "2.0L turbo I4, 3.0L V6, or 5.0L V8",
  horsepower: 247, // *approx. base — supported by XF engine range 
  top_speed_mph: 155, // *limited
  body_style: "4-door saloon / 5-door estate",
  drivetrain: "RWD or AWD",
  transmission: "8-speed automatic",
  seating: 5,
  production_location: "Castle Bromwich, England",
  designer: "Ian Callum",
  price_when_new: "≈£32,000–£60,000", // *estimated
  current_value_range: "£5,000–£25,000", // *market estimate
  model_type: "executive saloon",
  tags: ["modern", "luxury", "executive", "turbo"],
  notable_details: [
    "Replaced the S-Type and modernized Jaguar’s sedan lineup.",
    "Known for its rotating air vents and rising gear selector."
  ],
  fun_facts: [
    "One of Jaguar’s best-selling modern models.",
    "Used extensively in executive fleets."
  ],
  notable_achievements: [
    "Praised for design and driving dynamics.",
    "Helped redefine Jaguar’s modern identity."
  ],
  variants: [],
  hero_image: "images/cars/jaguar/xf/hero.jpg",
  image_gallery: [
    "images/cars/jaguar/xf/1.jpg",
    "images/cars/jaguar/xf/2.jpg",
    "images/cars/jaguar/xf/3.jpg"
  ]
},


  // 10. Jensen
{
  manufacturer: "Jensen",
  slug: "jensen",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jensen_541",
  heritage_group: "classic",
  model: "541",
  model_slug: "541",
  model_summary: "A pioneering fiberglass grand tourer that introduced Jensen’s aerodynamic design language and advanced engineering for the 1950s.",
  years_produced: "1954–1963",
  engine: "4.0L Austin inline-6",
  horsepower: 135, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "West Bromwich, England",
  designer: "Eric Neale",
  price_when_new: "≈£2,000", // *historical estimate
  current_value_range: "£25,000–£60,000", // *market estimate
  model_type: "grand tourer",
  tags: ["classic", "fiberglass", "gt"],
  notable_details: [
    "Early use of fiberglass bodywork.",
    "Predecessor to the C‑V8."
  ],
  fun_facts: [
    "One of the most aerodynamic British cars of its era.",
    "Hand‑built in low numbers."
  ],
  notable_achievements: [
    "Helped establish Jensen’s GT identity.",
    "Praised for refinement and design."
  ],
  variants: [],
  hero_image: "images/cars/jensen/541/hero.jpg",
  image_gallery: [
    "images/cars/jensen/541/1.jpg",
    "images/cars/jensen/541/2.jpg",
    "images/cars/jensen/541/3.jpg"
  ]
},
{
  manufacturer: "Jensen",
  slug: "jensen",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jensen_C-V8",
  heritage_group: "classic",
  model: "C-V8",
  model_slug: "c-v8",
  model_summary: "A fiberglass-bodied GT powered by Chrysler big‑block V8s, known as one of the fastest four-seat cars of its era.",
  years_produced: "1962–1966",
  engine: "5.9L or 6.3L Chrysler V8", // supported by 361 & 383 cu in engines 
  horsepower: 330, // *approx. top spec — supported by 330 hp Mk II/Mk III versions 
  top_speed_mph: 136, // *Mk II verified top speed 
  body_style: "2-door fastback coupé",
  drivetrain: "RWD",
  transmission: "3-speed automatic or 4-speed manual",
  seating: 4,
  production_location: "West Bromwich, England",
  designer: "Eric Neale",
  price_when_new: "≈£3,000", // *historical estimate
  current_value_range: "£35,000–£90,000", // *market estimate
  model_type: "grand tourer",
  tags: ["classic", "v8", "fiberglass", "gt"],
  notable_details: [
    "Fiberglass body with aluminum door skins.",
    "Front‑mid‑engine layout for improved balance."
  ],
  fun_facts: [
    "0–60 mph in 6.7 seconds — as quick as a Lamborghini Miura of the era. ",
    "One of the fastest four‑seat cars of the 1960s."
  ],
  notable_achievements: [
    "Praised for performance and engineering.",
    "Predecessor to the Interceptor."
  ],
  variants: [],
  hero_image: "images/cars/jensen/c-v8/hero.jpg",
  image_gallery: [
    "images/cars/jensen/c-v8/1.jpg",
    "images/cars/jensen/c-v8/2.jpg",
    "images/cars/jensen/c-v8/3.jpg"
  ]
},
{
  manufacturer: "Jensen",
  slug: "jensen",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jensen_Interceptor",
  heritage_group: "classic",
  model: "Interceptor",
  model_slug: "interceptor",
  model_summary: "Jensen’s most iconic GT, combining Italian styling with American V8 power and luxurious British craftsmanship.",
  years_produced: "1966–1976",
  engine: "6.3L or 7.2L Chrysler V8",
  horsepower: 280, // *approx.
  top_speed_mph: 135, // *estimated
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "3-speed automatic",
  seating: 4,
  production_location: "West Bromwich, England",
  designer: "Carrozzeria Touring",
  price_when_new: "≈£3,743", // *historical estimate
  current_value_range: "£20,000–£70,000", // *market estimate
  model_type: "grand tourer",
  tags: ["classic", "v8", "gt", "touring"],
  notable_details: [
    "Early bodies built by Vignale in Italy.",
    "Large wraparound rear window became a design signature."
  ],
  fun_facts: [
    "One of the most recognizable British GTs of the 1960s–70s.",
    "Shared engines with American muscle cars."
  ],
  notable_achievements: [
    "Jensen’s best‑known model worldwide.",
    "A staple of classic GT culture."
  ],
  variants: [],
  hero_image: "images/cars/jensen/interceptor/hero.jpg",
  image_gallery: [
    "images/cars/jensen/interceptor/1.jpg",
    "images/cars/jensen/interceptor/2.jpg",
    "images/cars/jensen/interceptor/3.jpg"
  ]
},
{
  manufacturer: "Jensen",
  slug: "jensen",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jensen_FF",
  heritage_group: "classic",
  model: "FF",
  model_slug: "ff",
  model_summary: "A groundbreaking GT featuring Ferguson Formula all‑wheel drive and early anti‑lock braking — years ahead of its time.",
  years_produced: "1966–1971",
  engine: "6.3L Chrysler V8", // supported by 383 cu in engine 
  horsepower: 326, // supported by FF spec sheet 
  top_speed_mph: 131, // verified top speed 
  body_style: "2-door coupé",
  drivetrain: "AWD", // Ferguson Formula AWD 
  transmission: "3-speed automatic",
  seating: 4,
  production_location: "West Bromwich, England",
  designer: "Carrozzeria Touring",
  price_when_new: "≈£5,340", // *historical estimate
  current_value_range: "£60,000–£150,000", // *market estimate
  model_type: "grand tourer",
  tags: ["classic", "awd", "v8", "gt", "technology"],
  notable_details: [
    "One of the first production cars with AWD.",
    "Featured Dunlop Maxaret early ABS system."
  ],
  fun_facts: [
    "Only 263 units were built. ",
    "More technologically advanced than many supercars of its era."
  ],
  notable_achievements: [
    "A landmark in automotive safety and drivetrain technology.",
    "Highly collectible due to rarity and innovation."
  ],
  variants: [],
  hero_image: "images/cars/jensen/ff/hero.jpg",
  image_gallery: [
    "images/cars/jensen/ff/1.jpg",
    "images/cars/jensen/ff/2.jpg",
    "images/cars/jensen/ff/3.jpg"
  ]
},
{
  manufacturer: "Jensen",
  slug: "jensen",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Jensen_S-V8",
  heritage_group: "modern",
  model: "S-V8",
  model_slug: "s-v8",
  model_summary: "The final Jensen production car, a modern aluminum-bodied roadster powered by a Ford V8 during the brand’s brief revival.",
  years_produced: "2001–2002",
  engine: "4.6L Ford Modular V8",
  horsepower: 325, // *approx.
  top_speed_mph: 160, // *estimated
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Liverpool, England",
  designer: "Jensen Motors",
  price_when_new: "≈£40,000", // *estimated
  current_value_range: "£20,000–£45,000", // *market estimate
  model_type: "sports car",
  tags: ["modern", "v8", "roadster"],
  notable_details: [
    "Aluminum body construction.",
    "Built during Jensen’s short-lived revival."
  ],
  fun_facts: [
    "Production was extremely limited due to financial issues.",
    "One of the rarest modern British sports cars."
  ],
  notable_achievements: [
    "Marks the final chapter of the Jensen marque.",
    "A cult favorite among collectors."
  ],
  variants: [],
  hero_image: "images/cars/jensen/s-v8/hero.jpg",
  image_gallery: [
    "images/cars/jensen/s-v8/1.jpg",
    "images/cars/jensen/s-v8/2.jpg",
    "images/cars/jensen/s-v8/3.jpg"
  ]
},
 
  // 11. Land Rover
  {
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Utility / Off-Road",
  brand_url: "https://en.wikipedia.org/wiki/Land_Rover_series",
  heritage_group: "classic",
  model: "Series I",
  model_slug: "series-1",
  model_summary: "The original Land Rover, inspired by the WWII Jeep and built with an aluminum body due to post-war steel shortages.",
  years_produced: "1948–1958",
  engine: "1.6L–2.0L inline-4",
  horsepower: 50, // *approx.
  top_speed_mph: 55, // *estimated
  body_style: "2-door utility / station wagon",
  drivetrain: "4WD (early models constant 4WD)", // supported by source
  transmission: "4-speed manual",
  seating: "2–7",
  production_location: "Solihull, England",
  designer: "Rover Company",
  price_when_new: "≈£450", // *estimate
  current_value_range: "£12,000–£40,000",
  model_type: "off-road utility vehicle",
  tags: ["classic", "4x4", "utility"],
  notable_details: [
    "First mass-produced civilian 4WD with doors and optional hard roof.",
    "Aluminum body due to post-war steel shortages."
  ],
  fun_facts: [
    "Could be started with a hand crank.",
    "Featured front and rear PTOs for farm equipment."
  ],
  notable_achievements: [
    "Launched the Land Rover brand.",
    "Became a global agricultural and expedition icon."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/series-1/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/series-1/1.jpg",
    "images/cars/land-rover/series-1/2.jpg",
    "images/cars/land-rover/series-1/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Utility / Off-Road",
  brand_url: "https://en.wikipedia.org/wiki/Land_Rover_series",
  heritage_group: "classic",
  model: "Series II / IIA",
  model_slug: "series-2",
  model_summary: "An evolution of the original Land Rover with improved engines, styling, and global expansion.",
  years_produced: "1958–1971",
  engine: "2.25L inline-4",
  horsepower: 70, // *approx.
  top_speed_mph: 65, // *estimated
  body_style: "2-door / 4-door utility and station wagon",
  drivetrain: "4WD selectable",
  transmission: "4-speed manual",
  seating: "2–10",
  production_location: "Solihull, England",
  designer: "Rover Company",
  price_when_new: "≈£600",
  current_value_range: "£10,000–£35,000",
  model_type: "off-road utility vehicle",
  tags: ["classic", "4x4", "utility"],
  notable_details: [
    "Introduced the iconic ‘barrel side’ body shape.",
    "One of the most exported British vehicles of its era."
  ],
  fun_facts: [
    "Series IIA is considered the most durable of all Series models.",
    "Used extensively in military and expedition roles."
  ],
  notable_achievements: [
    "Helped establish Land Rover’s global reputation.",
    "Became the default 4×4 in many developing regions."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/series-2/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/series-2/1.jpg",
    "images/cars/land-rover/series-2/2.jpg",
    "images/cars/land-rover/series-2/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Utility / Off-Road",
  brand_url: "https://en.wikipedia.org/wiki/Land_Rover_series",
  heritage_group: "classic",
  model: "Series III",
  model_slug: "series-3",
  model_summary: "The final and most refined Series Land Rover, featuring updated electrics and improved interior ergonomics.",
  years_produced: "1971–1985",
  engine: "2.25L inline-4",
  horsepower: 70, // *approx.
  top_speed_mph: 65, // *estimated
  body_style: "2-door / 4-door utility and station wagon",
  drivetrain: "4WD selectable",
  transmission: "4-speed manual",
  seating: "2–10",
  production_location: "Solihull, England",
  designer: "British Leyland",
  price_when_new: "≈£1,200",
  current_value_range: "£8,000–£25,000",
  model_type: "off-road utility vehicle",
  tags: ["classic", "4x4", "utility"],
  notable_details: [
    "Most common classic Land Rover globally.",
    "Stage 1 V8 variant introduced permanent 4WD."
  ],
  fun_facts: [
    "Still widely used in Africa and rural regions.",
    "Known for its simplicity and ruggedness."
  ],
  notable_achievements: [
    "Closed the 37‑year Series era.",
    "A global workhorse for farms, militaries, and expeditions."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/series-3/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/series-3/1.jpg",
    "images/cars/land-rover/series-3/2.jpg",
    "images/cars/land-rover/series-3/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Utility / Off-Road",
  brand_url: "https://en.wikipedia.org/wiki/Land_Rover_Defender",
  heritage_group: "classic",
  model: "Defender 90/110",
  model_slug: "defender",
  model_summary: "The evolution of the Series Land Rovers, featuring coil-spring suspension, improved engines, and modernized off-road capability.",
  years_produced: "1983–2016",
  engine: "2.5L diesel / 3.5L V8",
  horsepower: 68, // *approx. diesel
  top_speed_mph: 80, // *estimated
  body_style: "2-door / 4-door utility",
  drivetrain: "4WD permanent",
  transmission: "5-speed manual",
  seating: "2–9",
  production_location: "Solihull, England",
  designer: "Land Rover",
  price_when_new: "≈£12,000",
  current_value_range: "£15,000–£70,000",
  model_type: "off-road utility vehicle",
  tags: ["classic", "4x4", "defender"],
  notable_details: [
    "Introduced coil springs for improved ride.",
    "Became a global expedition and military icon."
  ],
  fun_facts: [
    "One of the longest-running 4×4 nameplates.",
    "Used in countless humanitarian and exploration missions."
  ],
  notable_achievements: [
    "Defined modern off-road capability.",
    "A cult classic worldwide."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/defender/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/defender/1.jpg",
    "images/cars/land-rover/defender/2.jpg",
    "images/cars/land-rover/defender/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Luxury / Utility",
  brand_url: "https://en.wikipedia.org/wiki/Range_Rover",
  heritage_group: "classic",
  model: "Range Rover Classic",
  model_slug: "range-rover-classic",
  model_summary: "The original luxury SUV, combining off-road capability with comfort and refinement, pioneering the premium 4×4 segment.",
  years_produced: "1970–1996",
  engine: "3.5L–4.2L Rover V8",
  horsepower: 130, // *approx.
  top_speed_mph: 95, // *estimated
  body_style: "3-door / 5-door SUV",
  drivetrain: "4WD permanent",
  transmission: "4-speed manual / automatic",
  seating: 5,
  production_location: "Solihull, England",
  designer: "Charles Spencer King",
  price_when_new: "≈£2,000 (1970s)",
  current_value_range: "£8,000–£40,000",
  model_type: "luxury SUV",
  tags: ["classic", "luxury", "4x4"],
  notable_details: [
    "First SUV to combine comfort and off-road ability.",
    "Became the template for modern luxury SUVs."
  ],
  fun_facts: [
    "Originally intended as a utility vehicle for farmers.",
    "Won design awards for its clean, functional styling."
  ],
  notable_achievements: [
    "Created the luxury SUV category.",
    "A global status symbol for decades."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/range-rover-classic/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/range-rover-classic/1.jpg",
    "images/cars/land-rover/range-rover-classic/2.jpg",
    "images/cars/land-rover/range-rover-classic/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Luxury / Utility",
  brand_url: "https://en.wikipedia.org/wiki/Range_Rover",
  heritage_group: "classic",
  model: "Range Rover P38",
  model_slug: "range-rover-p38",
  model_summary: "The second-generation Range Rover, introducing air suspension, improved luxury, and modern electronics.",
  years_produced: "1994–2002",
  engine: "4.0L–4.6L Rover V8",
  horsepower: 190, // *approx.
  top_speed_mph: 120, // *estimated
  body_style: "5-door SUV",
  drivetrain: "4WD permanent",
  transmission: "4-speed automatic",
  seating: 5,
  production_location: "Solihull, England",
  designer: "Land Rover",
  price_when_new: "≈£40,000",
  current_value_range: "£3,000–£12,000",
  model_type: "luxury SUV",
  tags: ["classic", "luxury", "4x4"],
  notable_details: [
    "Introduced electronic air suspension.",
    "More refined and comfortable than the Classic."
  ],
  fun_facts: [
    "Known for its distinctive square profile.",
    "A favorite among overland enthusiasts."
  ],
  notable_achievements: [
    "Advanced the luxury SUV formula.",
    "Set the stage for the modern Range Rover."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/range-rover-p38/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/range-rover-p38/1.jpg",
    "images/cars/land-rover/range-rover-p38/2.jpg",
    "images/cars/land-rover/range-rover-p38/3.jpg"
  ]
},
{
  manufacturer: "Land Rover",
  slug: "land-rover",
  brand_group: "Luxury / Utility",
  brand_url: "https://en.wikipedia.org/wiki/Land_Rover_Discovery",
  heritage_group: "classic",
  model: "Discovery 1",
  model_slug: "discovery-1",
  model_summary: "A family-friendly 4×4 positioned between the Defender and Range Rover, offering versatility and strong off-road capability.",
  years_produced: "1989–1998",
  engine: "2.5L diesel / 3.5L–4.0L V8",
  horsepower: 111, // supported by Discovery I range
  top_speed_mph: 100, // *estimated
  body_style: "5-door SUV",
  drivetrain: "4WD permanent",
  transmission: "5-speed manual / automatic",
  seating: "5–7",
  production_location: "Solihull, England",
  designer: "Land Rover",
  price_when_new: "≈£18,000",
  current_value_range: "£2,000–£10,000",
  model_type: "SUV",
  tags: ["classic", "4x4", "family"],
  notable_details: [
    "Offered both 5 and 7-seat configurations.",
    "Permanent 4WD across all variants."
  ],
  fun_facts: [
    "Became one of Land Rover’s best-selling models.",
    "Known for its safari-style raised roof."
  ],
  notable_achievements: [
    "Opened Land Rover to a broader market.",
    "A staple of 1990s adventure culture."
  ],
  variants: [],
  hero_image: "images/cars/land-rover/discovery-1/hero.jpg",
  image_gallery: [
    "images/cars/land-rover/discovery-1/1.jpg",
    "images/cars/land-rover/discovery-1/2.jpg",
    "images/cars/land-rover/discovery-1/3.jpg"
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


  // 13. McLaren
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_F1",
  heritage_group: "classic",
  model: "F1",
  model_slug: "f1",
  model_summary: "Often regarded as the greatest supercar ever built, the McLaren F1 featured a central driving position, a BMW V12, and groundbreaking engineering.",
  years_produced: "1992–1998",
  engine: "6.1L BMW S70/2 V12",
  horsepower: 618, // *approx.
  top_speed_mph: 240, // *verified record
  body_style: "3-seat coupé",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 3,
  production_location: "Woking, England",
  designer: "Gordon Murray",
  price_when_new: "≈£540,000", // *historical estimate
  current_value_range: "£15,000,000–£25,000,000",
  model_type: "supercar",
  tags: ["classic", "v12", "supercar", "iconic"],
  notable_details: [
    "Central driving position with two passenger seats.",
    "Gold-lined engine bay for heat insulation."
  ],
  fun_facts: [
    "Held the production car top speed record for over a decade.",
    "Gordon Murray designed it with no compromises."
  ],
  notable_achievements: [
    "Won the 1995 24 Hours of Le Mans outright.",
    "Considered by many the greatest road car ever built."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/f1/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/f1/1.jpg",
    "images/cars/mclaren/f1/2.jpg",
    "images/cars/mclaren/f1/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Mercedes-Benz_SLR_McLaren",
  heritage_group: "classic",
  model: "Mercedes-Benz SLR McLaren",
  model_slug: "slr",
  model_summary: "A collaboration between Mercedes-Benz and McLaren, blending grand touring comfort with Formula 1-inspired carbon construction and a supercharged V8.",
  years_produced: "2003–2010",
  engine: "5.4L supercharged V8",
  horsepower: 617, // *approx.
  top_speed_mph: 207, // *estimated
  body_style: "2-door coupé / roadster",
  drivetrain: "RWD",
  transmission: "5-speed automatic",
  seating: 2,
  production_location: "Woking, England",
  designer: "Gordon Wagener & McLaren",
  price_when_new: "≈£300,000", // *historical estimate
  current_value_range: "£250,000–£700,000",
  model_type: "grand tourer",
  tags: ["classic", "supercharged", "gt", "carbon-fiber"],
  notable_details: [
    "Carbon-fiber monocoque chassis.",
    "Side-exit exhausts behind the front wheels."
  ],
  fun_facts: [
    "The SLR name references the 1950s Mercedes 300 SLR.",
    "One of the fastest GT cars of its era."
  ],
  notable_achievements: [
    "Helped bridge the gap between Mercedes and McLaren engineering.",
    "A cult classic among collectors."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/slr/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/slr/1.jpg",
    "images/cars/mclaren/slr/2.jpg",
    "images/cars/mclaren/slr/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_MP4-12C",
  heritage_group: "modern",
  model: "MP4-12C",
  model_slug: "mp4-12c",
  model_summary: "The first car of the modern McLaren Automotive era, featuring a carbon-fiber MonoCell chassis and a twin-turbo V8 developed in-house.",
  years_produced: "2011–2014",
  engine: "3.8L twin-turbo V8",
  horsepower: 592, // *approx.
  top_speed_mph: 207, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "Frank Stephenson",
  price_when_new: "≈£168,500", // *historical estimate
  current_value_range: "£70,000–£120,000",
  model_type: "supercar",
  tags: ["modern", "twin-turbo", "carbon-fiber", "supercar"],
  notable_details: [
    "First production car with McLaren’s carbon MonoCell chassis.",
    "Hydraulic cross-linked suspension eliminated anti-roll bars."
  ],
  fun_facts: [
    "The engine was co-developed with Ricardo specifically for McLaren.",
    "The 12C’s active aero wing also acted as an airbrake."
  ],
  notable_achievements: [
    "Launched McLaren Automotive as a major supercar manufacturer.",
    "Praised for its ride quality and engineering sophistication."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/mp4-12c/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/mp4-12c/1.jpg",
    "images/cars/mclaren/mp4-12c/2.jpg",
    "images/cars/mclaren/mp4-12c/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_650S",
  heritage_group: "modern",
  model: "650S",
  model_slug: "650s",
  model_summary: "An evolution of the 12C with P1-inspired styling, improved aerodynamics, and enhanced performance, solidifying McLaren’s supercar identity.",
  years_produced: "2014–2017",
  engine: "3.8L twin-turbo V8",
  horsepower: 641, // *approx.
  top_speed_mph: 207, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£195,000", // *historical estimate
  current_value_range: "£90,000–£150,000",
  model_type: "supercar",
  tags: ["modern", "twin-turbo", "supercar", "p1-inspired"],
  notable_details: [
    "Front-end styling heavily influenced by the McLaren P1.",
    "Improved suspension calibration over the 12C."
  ],
  fun_facts: [
    "0–60 mph in around 2.9 seconds.",
    "Shared roughly 25% of its parts with the 12C."
  ],
  notable_achievements: [
    "Helped establish McLaren’s design language.",
    "Praised for its blend of comfort and extreme performance."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/650s/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/650s/1.jpg",
    "images/cars/mclaren/650s/2.jpg",
    "images/cars/mclaren/650s/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_720S",
  heritage_group: "modern",
  model: "720S",
  model_slug: "720s",
  model_summary: "A revolutionary supercar built on the second-generation MonoCage II carbon chassis, known for extreme performance, aerodynamics, and daily usability.",
  years_produced: "2017–present",
  engine: "4.0L twin-turbo V8",
  horsepower: 710, // *approx.
  top_speed_mph: 212, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£208,000", // *historical estimate
  current_value_range: "£150,000–£250,000",
  model_type: "supercar",
  tags: ["modern", "twin-turbo", "supercar", "carbon-fiber"],
  notable_details: [
    "MonoCage II carbon tub improves rigidity and visibility.",
    "Active aerodynamics include a massive adaptive rear wing."
  ],
  fun_facts: [
    "0–60 mph in around 2.7 seconds.",
    "The 720S can generate enough downforce to drive upside down (theoretically)."
  ],
  notable_achievements: [
    "Widely considered one of the best supercars of the 2010s.",
    "Praised for its blend of comfort, speed, and engineering."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/720s/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/720s/1.jpg",
    "images/cars/mclaren/720s/2.jpg",
    "images/cars/mclaren/720s/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_765LT",
  heritage_group: "modern",
  model: "765LT",
  model_slug: "765lt",
  model_summary: "A hardcore, track-focused evolution of the 720S, featuring more power, less weight, and extreme aerodynamics in the Longtail tradition.",
  years_produced: "2020–present",
  engine: "4.0L twin-turbo V8",
  horsepower: 755, // *approx.
  top_speed_mph: 205, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£280,000", // *historical estimate
  current_value_range: "£300,000–£450,000",
  model_type: "supercar",
  tags: ["modern", "twin-turbo", "lt", "track-focused"],
  notable_details: [
    "100 kg lighter than the 720S.",
    "Features titanium exhaust and aggressive aero package."
  ],
  fun_facts: [
    "Limited production — each car individually numbered.",
    "0–60 mph in around 2.6 seconds."
  ],
  notable_achievements: [
    "One of the fastest and most extreme McLarens ever built.",
    "Praised for razor-sharp handling and track capability."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/765lt/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/765lt/1.jpg",
    "images/cars/mclaren/765lt/2.jpg",
    "images/cars/mclaren/765lt/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_540C",
  heritage_group: "modern",
  model: "540C",
  model_slug: "540c",
  model_summary: "The most accessible McLaren, offering a detuned version of the twin-turbo V8 while retaining the carbon-fiber MonoCell II chassis.",
  years_produced: "2015–2021",
  engine: "3.8L twin-turbo V8",
  horsepower: 533, // *approx.
  top_speed_mph: 199, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£126,000", // *historical estimate
  current_value_range: "£70,000–£110,000",
  model_type: "sports car",
  tags: ["modern", "twin-turbo", "sports-series"],
  notable_details: [
    "Entry-level McLaren with reduced power but identical chassis tech.",
    "Shares the same carbon tub as higher models."
  ],
  fun_facts: [
    "Despite being the 'base' McLaren, it outperforms many supercars.",
    "Designed to broaden McLaren’s customer base."
  ],
  notable_achievements: [
    "Helped establish McLaren’s Sports Series lineup.",
    "Praised for balance and usability."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/540c/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/540c/1.jpg",
    "images/cars/mclaren/540c/2.jpg",
    "images/cars/mclaren/540c/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_570S",
  heritage_group: "modern",
  model: "570S",
  model_slug: "570s",
  model_summary: "The core Sports Series model, blending everyday usability with serious performance and McLaren’s signature carbon-fiber construction.",
  years_produced: "2015–2021",
  engine: "3.8L twin-turbo V8",
  horsepower: 562, // *approx.
  top_speed_mph: 204, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£143,000", // *historical estimate
  current_value_range: "£80,000–£140,000",
  model_type: "sports car",
  tags: ["modern", "twin-turbo", "sports-series"],
  notable_details: [
    "Features McLaren’s MonoCell II carbon chassis.",
    "More playful and accessible than the Super Series models."
  ],
  fun_facts: [
    "0–60 mph in around 3.1 seconds.",
    "One of McLaren’s best-selling models ever."
  ],
  notable_achievements: [
    "Helped McLaren compete directly with Porsche 911 Turbo and Audi R8.",
    "Praised for steering feel and chassis balance."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/570s/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/570s/1.jpg",
    "images/cars/mclaren/570s/2.jpg",
    "images/cars/mclaren/570s/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_570GT",
  heritage_group: "modern",
  model: "570GT",
  model_slug: "570gt",
  model_summary: "A grand-touring evolution of the 570S, offering more comfort, luggage space, and refinement while retaining supercar performance.",
  years_produced: "2016–2020",
  engine: "3.8L twin-turbo V8",
  horsepower: 562, // *approx.
  top_speed_mph: 204, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£154,000", // *historical estimate
  current_value_range: "£90,000–£150,000",
  model_type: "grand tourer",
  tags: ["modern", "twin-turbo", "gt", "sports-series"],
  notable_details: [
    "Rear side-hinged glass hatch for increased practicality.",
    "Softer suspension tuning for long-distance comfort."
  ],
  fun_facts: [
    "The quietest and most comfortable McLaren of its era.",
    "Still capable of 200+ mph performance."
  ],
  notable_achievements: [
    "Expanded McLaren’s appeal to luxury GT buyers.",
    "Praised for blending comfort with supercar DNA."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/570gt/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/570gt/1.jpg",
    "images/cars/mclaren/570gt/2.jpg",
    "images/cars/mclaren/570gt/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_600LT",
  heritage_group: "modern",
  model: "600LT",
  model_slug: "600lt",
  model_summary: "A hardcore, track-focused Longtail variant of the 570S, featuring more power, less weight, and extreme aerodynamics.",
  years_produced: "2018–2021",
  engine: "3.8L twin-turbo V8",
  horsepower: 592, // *approx.
  top_speed_mph: 204, // *estimated
  body_style: "2-door coupé / spider",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£185,000", // *historical estimate
  current_value_range: "£150,000–£220,000",
  model_type: "sports car",
  tags: ["modern", "twin-turbo", "lt", "track-focused"],
  notable_details: [
    "Top-exit exhausts reduce weight and improve aero.",
    "100 kg lighter than the 570S."
  ],
  fun_facts: [
    "0–60 mph in around 2.8 seconds.",
    "Part of McLaren’s legendary Longtail lineage."
  ],
  notable_achievements: [
    "One of the most acclaimed driver’s cars of its era.",
    "Praised for razor-sharp handling and track capability."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/600lt/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/600lt/1.jpg",
    "images/cars/mclaren/600lt/2.jpg",
    "images/cars/mclaren/600lt/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_P1",
  heritage_group: "modern",
  model: "P1",
  model_slug: "p1",
  model_summary: "A hybrid hypercar combining a twin-turbo V8 with electric power, forming part of the 'Holy Trinity' alongside the LaFerrari and Porsche 918.",
  years_produced: "2013–2015",
  engine: "3.8L twin-turbo V8 + electric motor",
  horsepower: 903, // *approx.
  top_speed_mph: 217, // *limited
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "7-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "Frank Stephenson",
  price_when_new: "≈£866,000", // *historical estimate
  current_value_range: "£1,300,000–£2,000,000",
  model_type: "hypercar",
  tags: ["modern", "hybrid", "hypercar", "holy-trinity"],
  notable_details: [
    "Features a race-derived IPAS hybrid system.",
    "Active aerodynamics generate up to 600 kg of downforce."
  ],
  fun_facts: [
    "Limited to 375 units worldwide.",
    "Electric mode alone can drive the P1 silently through cities."
  ],
  notable_achievements: [
    "Part of the legendary 'Holy Trinity' of hybrid hypercars.",
    "A technological showcase for McLaren’s future direction."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/p1/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/p1/1.jpg",
    "images/cars/mclaren/p1/2.jpg",
    "images/cars/mclaren/p1/3.jpg"
  ]
},
{
  manufacturer: "McLaren",
  slug: "mclaren",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/McLaren_Artura",
  heritage_group: "modern",
  model: "Artura",
  model_slug: "artura",
  model_summary: "McLaren’s next-generation hybrid supercar featuring a new V6 engine, an all-new carbon architecture, and a focus on efficiency and performance.",
  years_produced: "2022–present",
  engine: "3.0L twin-turbo V6 hybrid",
  horsepower: 671, // *approx.
  top_speed_mph: 205, // *estimated
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "8-speed dual-clutch",
  seating: 2,
  production_location: "Woking, England",
  designer: "McLaren Design Team",
  price_when_new: "≈£190,000", // *estimated
  current_value_range: "£160,000–£220,000",
  model_type: "supercar",
  tags: ["modern", "hybrid", "v6", "supercar"],
  notable_details: [
    "Built on the new McLaren Carbon Lightweight Architecture (MCLA).",
    "First McLaren road car with a V6 engine."
  ],
  fun_facts: [
    "Can drive up to 19 miles on electric power alone.",
    "The hybrid system improves both performance and efficiency."
  ],
  notable_achievements: [
    "Marks McLaren’s transition into hybridized performance.",
    "Praised for its balance of power and refinement."
  ],
  variants: [],
  hero_image: "images/cars/mclaren/artura/hero.jpg",
  image_gallery: [
    "images/cars/mclaren/artura/1.jpg",
    "images/cars/mclaren/artura/2.jpg",
    "images/cars/mclaren/artura/3.jpg"
  ]
},


  // 14. MG
{
  manufacturer: "MG",
  slug: "mg",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/MG_T-type",
  heritage_group: "classic",
  model: "T-Type",
  model_slug: "t-type",
  model_summary: "A series of pre-war and post-war British sports cars that established MG’s global reputation for lightweight, affordable performance.",
  years_produced: "1936–1955",
  engine: "1.3L inline-4",
  horsepower: 54, // approx
  top_speed_mph: 75, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "MG Car Company",
  price_when_new: "≈£220", // estimate
  current_value_range: "£15,000–£40,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "inline-4"],
  notable_details: [
    "Popular with American servicemen after WWII.",
    "Helped spark the U.S. sports car craze."
  ],
  fun_facts: [
    "The MG TC was the first MG widely exported to the U.S.",
    "Simple ladder-frame chassis and leaf springs."
  ],
  notable_achievements: [
    "Defined MG’s early sports-car identity.",
    "One of the most influential British sports cars."
  ],
  variants: [],
  hero_image: "images/cars/mg/t-type/hero.jpg",
  image_gallery: [
    "images/cars/mg/t-type/1.jpg",
    "images/cars/mg/t-type/2.jpg",
    "images/cars/mg/t-type/3.jpg"
  ]
},
{
  manufacturer: "MG",
  slug: "mg",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/MG_MGA",
  heritage_group: "classic",
  model: "MGA",
  model_slug: "mga",
  model_summary: "A major styling and engineering leap for MG, replacing the T-Type with a sleek, aerodynamic body and modern chassis.",
  years_produced: "1955–1962",
  engine: "1.5L–1.6L inline-4",
  horsepower: 72, // approx
  top_speed_mph: 98, // approx
  body_style: "2-door roadster / coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "Syd Enever",
  price_when_new: "≈£844",
  current_value_range: "£20,000–£45,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "inline-4"],
  notable_details: [
    "Wind-tunnel tested bodywork.",
    "Exported heavily to North America."
  ],
  fun_facts: [
    "Over 80% of MGAs were sold outside the UK.",
    "Raced successfully at Le Mans."
  ],
  notable_achievements: [
    "Transformed MG’s design language.",
    "One of MG’s most beautiful cars."
  ],
  variants: [],
  hero_image: "images/cars/mg/mga/hero.jpg",
  image_gallery: [
    "images/cars/mg/mga/1.jpg",
    "images/cars/mg/mga/2.jpg",
    "images/cars/mg/mga/3.jpg"
  ]
},
{
  manufacturer: "MG",
  slug: "mg",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/MG_MGB",
  heritage_group: "classic",
  model: "MGB",
  model_slug: "mgb",
  model_summary: "One of the world’s best-selling sports cars, known for its unibody construction, affordability, and timeless British roadster charm.",
  years_produced: "1962–1980",
  engine: "1.8L inline-4",
  horsepower: 95, // approx
  top_speed_mph: 105, // approx
  body_style: "2-door roadster / GT coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual (optional overdrive)",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "Pininfarina (GT)",
  price_when_new: "≈£690",
  current_value_range: "£5,000–£20,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "inline-4"],
  notable_details: [
    "Unibody construction improved rigidity.",
    "GT version added practicality."
  ],
  fun_facts: [
    "One of the most popular British sports cars ever built.",
    "Simple mechanics make it a favorite for restoration."
  ],
  notable_achievements: [
    "A global icon of affordable sports motoring.",
    "Massive success in the U.S. market."
  ],
  variants: [],
  hero_image: "images/cars/mg/mgb/hero.jpg",
  image_gallery: [
    "images/cars/mg/mgb/1.jpg",
    "images/cars/mg/mgb/2.jpg",
    "images/cars/mg/mgb/3.jpg"
  ]
},
{
  manufacturer: "MG",
  slug: "mg",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/MG_MGC",
  heritage_group: "classic",
  model: "MGC",
  model_slug: "mgc",
  model_summary: "A grand touring evolution of the MGB, powered by a 3.0L straight-six and designed for high-speed cruising.",
  years_produced: "1967–1969",
  engine: "3.0L inline-6",
  horsepower: 145, // approx
  top_speed_mph: 120, // approx
  body_style: "2-door roadster / GT coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "MG Car Company",
  price_when_new: "≈£1,102",
  current_value_range: "£12,000–£35,000",
  model_type: "grand tourer",
  tags: ["classic", "inline-6", "gt"],
  notable_details: [
    "Heavier front end due to the larger engine.",
    "Designed as a high-speed cruiser."
  ],
  fun_facts: [
    "Initially criticized for handling, now appreciated by collectors.",
    "GT version is especially sought after."
  ],
  notable_achievements: [
    "MG’s attempt at a more powerful GT.",
    "Rare compared to the MGB."
  ],
  variants: [],
  hero_image: "images/cars/mg/mgc/hero.jpg",
  image_gallery: [
    "images/cars/mg/mgc/1.jpg",
    "images/cars/mg/mgc/2.jpg",
    "images/cars/mg/mgc/3.jpg"
  ]
},
{
  manufacturer: "MG",
  slug: "mg",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/MG_Midget",
  heritage_group: "classic",
  model: "Midget",
  model_slug: "midget",
  model_summary: "A lightweight, affordable British sports car sharing roots with the Austin-Healey Sprite, beloved for its simplicity and agility.",
  years_produced: "1961–1979",
  engine: "948cc–1500cc inline-4",
  horsepower: 65, // approx
  top_speed_mph: 90, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Abingdon, England",
  designer: "MG Car Company",
  price_when_new: "≈£640",
  current_value_range: "£4,000–£12,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "lightweight"],
  notable_details: [
    "Shared many components with the Austin-Healey Sprite.",
    "Known for its playful handling."
  ],
  fun_facts: [
    "One of the smallest British sports cars ever made.",
    "Easy to maintain and modify."
  ],
  notable_achievements: [
    "A favorite among amateur racers.",
    "Embodies the spirit of lightweight British motoring."
  ],
  variants: [],
  hero_image: "images/cars/mg/midget/hero.jpg",
  image_gallery: [
    "images/cars/mg/midget/1.jpg",
    "images/cars/mg/midget/2.jpg",
    "images/cars/mg/midget/3.jpg"
  ]
},

  // 15. Mini
{
  manufacturer: "Mini",
  slug: "mini",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Mini",
  heritage_group: "classic",
  model: "Mini Saloon",
  model_slug: "mini-saloon",
  model_summary: "The original two-door British city car designed by Sir Alec Issigonis, famous for its space-efficient layout and iconic styling.",
  years_produced: "1959–2000",
  engine: "848cc–1275cc A-series inline-4",
  horsepower: 34, // approx early models
  top_speed_mph: 72, // approx
  body_style: "2-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual / automatic",
  seating: 4,
  production_location: "Longbridge, Birmingham",
  designer: "Sir Alec Issigonis",
  price_when_new: "≈£497",
  current_value_range: "£5,000–£25,000",
  model_type: "city car",
  tags: ["classic", "fwd", "iconic"],
  notable_details: [
    "Transverse engine and front-wheel drive maximized interior space.",
    "One of the most influential car designs of the 20th century."
  ],
  fun_facts: [
    "Over 5.38 million Minis were built. ",
    "Originally sold as both Austin Seven and Morris Mini-Minor. "
  ],
  notable_achievements: [
    "Revolutionized small-car packaging.",
    "Became a cultural icon of the 1960s."
  ],
  variants: [],
  hero_image: "images/cars/mini/mini-saloon/hero.jpg",
  image_gallery: [
    "images/cars/mini/mini-saloon/1.jpg",
    "images/cars/mini/mini-saloon/2.jpg",
    "images/cars/mini/mini-saloon/3.jpg"
  ]
},
{
  manufacturer: "Mini",
  slug: "mini",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Mini",
  heritage_group: "classic",
  model: "Mini Cooper / Cooper S",
  model_slug: "mini-cooper",
  model_summary: "High-performance versions of the Mini developed with John Cooper, famous for rally success and spirited handling.",
  years_produced: "1961–1971",
  engine: "997cc–1275cc A-series inline-4",
  horsepower: 55, // approx
  top_speed_mph: 90, // approx
  body_style: "2-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, Birmingham",
  designer: "Sir Alec Issigonis & John Cooper",
  price_when_new: "≈£679",
  current_value_range: "£20,000–£60,000",
  model_type: "sports car",
  tags: ["classic", "cooper", "rally"],
  notable_details: [
    "Tuned engines, disc brakes, and sport suspension.",
    "Cooper S became the most desirable classic Mini variant."
  ],
  fun_facts: [
    "Won the Monte Carlo Rally multiple times in the 1960s.",
    "Cooper S used the 1275cc engine also found in other BMC performance cars."
  ],
  notable_achievements: [
    "Dominated international rallying.",
    "Elevated the Mini to global performance fame."
  ],
  variants: [],
  hero_image: "images/cars/mini/mini-cooper/hero.jpg",
  image_gallery: [
    "images/cars/mini/mini-cooper/1.jpg",
    "images/cars/mini/mini-cooper/2.jpg",
    "images/cars/mini/mini-cooper/3.jpg"
  ]
},
{
  manufacturer: "Mini",
  slug: "mini",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Mini",
  heritage_group: "classic",
  model: "Mini Estate",
  model_slug: "mini-estate",
  model_summary: "A practical long-wheelbase Mini variant available as the Morris Mini Traveller and Austin Mini Countryman.",
  years_produced: "1960–1982",
  engine: "848cc–998cc A-series inline-4",
  horsepower: 38, // approx
  top_speed_mph: 75, // approx
  body_style: "2-door estate",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, Birmingham",
  designer: "Sir Alec Issigonis",
  price_when_new: "≈£550",
  current_value_range: "£6,000–£20,000",
  model_type: "estate car",
  tags: ["classic", "estate", "utility"],
  notable_details: [
    "Wood-trimmed ‘Traveller’ versions echoed the Morris Minor Traveller.",
    "Longer wheelbase improved cargo capacity."
  ],
  fun_facts: [
    "Shared mechanicals with the saloon but offered more practicality.",
    "Popular with families and small businesses."
  ],
  notable_achievements: [
    "Expanded the Mini lineup into practical territory.",
    "A beloved classic among collectors."
  ],
  variants: [],
  hero_image: "images/cars/mini/mini-estate/hero.jpg",
  image_gallery: [
    "images/cars/mini/mini-estate/1.jpg",
    "images/cars/mini/mini-estate/2.jpg",
    "images/cars/mini/mini-estate/3.jpg"
  ]
},
{
  manufacturer: "Mini",
  slug: "mini",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Mini",
  heritage_group: "classic",
  model: "Mini Moke",
  model_slug: "mini-moke",
  model_summary: "A lightweight utility vehicle based on Mini mechanicals, originally intended for military use but later popular as a leisure vehicle.",
  years_produced: "1964–1993",
  engine: "848cc–1275cc A-series inline-4",
  horsepower: 40, // approx
  top_speed_mph: 68, // approx
  body_style: "open utility vehicle",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: "2–4",
  production_location: "UK, Australia, Portugal",
  designer: "Sir Alec Issigonis",
  price_when_new: "≈£405",
  current_value_range: "£10,000–£30,000",
  model_type: "utility vehicle",
  tags: ["classic", "moke", "utility"],
  notable_details: [
    "Minimalist bodywork with exposed structure.",
    "Used widely in tropical resorts."
  ],
  fun_facts: [
    "Originally rejected by the British Army.",
    "Became a cult icon in beach communities."
  ],
  notable_achievements: [
    "One of the most unique Mini derivatives.",
    "A symbol of carefree motoring."
  ],
  variants: [],
  hero_image: "images/cars/mini/mini-moke/hero.jpg",
  image_gallery: [
    "images/cars/mini/mini-moke/1.jpg",
    "images/cars/mini/mini-moke/2.jpg",
    "images/cars/mini/mini-moke/3.jpg"
  ]
},

  // 16. Morgan
  {
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "classic",
  model: "3 Wheeler",
  model_slug: "3-wheeler",
  model_summary: "A minimalist, lightweight Morgan icon originally produced in the early 20th century and revived as a modern 'no frills, all thrills' machine.",
  years_produced: "1911–1952, 2011–2021",
  engine: "V-twin (various eras)",
  horsepower: 82, 
  top_speed_mph: 115,
  body_style: "3-wheel roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Malvern, England",
  designer: "H.F.S. Morgan",
  price_when_new: "≈£25,000",
  current_value_range: "£20,000–£45,000",
  model_type: "sports car",
  tags: ["classic", "lightweight", "3-wheeler"],
  notable_details: [
    "Represents Morgan’s earliest engineering philosophy.",
    "Modern revival emphasizes raw, analog driving."
  ],
  fun_facts: [
    "Owners frequently take them on cross‑continent adventures.",
    "One of the most characterful vehicles Morgan ever built."
  ],
  notable_achievements: [
    "Helped establish Morgan’s early reputation.",
    "Cult following worldwide."
  ],
  variants: [],
  hero_image: "images/cars/morgan/3-wheeler/hero.jpg",
  image_gallery: [
    "images/cars/morgan/3-wheeler/1.jpg",
    "images/cars/morgan/3-wheeler/2.jpg",
    "images/cars/morgan/3-wheeler/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "classic",
  model: "4/4",
  model_slug: "4-4",
  model_summary: "Introduced in 1936, the 4/4 is the longest-running Morgan model, offering the purest traditional Morgan driving experience.",
  years_produced: "1936–2018",
  engine: "1.6L Ford Sigma (final generation)",
  horsepower: 110,
  top_speed_mph: 115,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Malvern, England",
  designer: "H.F.S. Morgan",
  price_when_new: "≈£32,000",
  current_value_range: "£20,000–£45,000",
  model_type: "sports car",
  tags: ["classic", "lightweight", "roadster"],
  notable_details: [
    "Narrower body than the Plus 4.",
    "Represents Morgan’s most traditional formula."
  ],
  fun_facts: [
    "The name 4/4 refers to four wheels and four cylinders.",
    "One of the longest-running production cars in history."
  ],
  notable_achievements: [
    "A cornerstone of Morgan’s identity.",
    "Beloved for its simplicity and charm."
  ],
  variants: [],
  hero_image: "images/cars/morgan/4-4/hero.jpg",
  image_gallery: [
    "images/cars/morgan/4-4/1.jpg",
    "images/cars/morgan/4-4/2.jpg",
    "images/cars/morgan/4-4/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "classic",
  model: "Plus 4",
  model_slug: "plus-4",
  model_summary: "Morgan’s most famous model, produced from 1950 and continually evolved, blending classic styling with modern engineering.",
  years_produced: "1950–2020",
  engine: "2.0L Ford GDI (final generation)",
  horsepower: 154,
  top_speed_mph: 118,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Malvern, England",
  designer: "Morgan Motor Company",
  price_when_new: "≈£40,000",
  current_value_range: "£25,000–£60,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "plus-series"],
  notable_details: [
    "Wider and more powerful than the 4/4.",
    "One of Morgan’s best-selling models."
  ],
  fun_facts: [
    "The Plus 4 name has been used for 70 years.",
    "A favorite among touring enthusiasts."
  ],
  notable_achievements: [
    "Defined Morgan’s mid‑century identity.",
    "A staple of British sports car culture."
  ],
  variants: [],
  hero_image: "images/cars/morgan/plus-4/hero.jpg",
  image_gallery: [
    "images/cars/morgan/plus-4/1.jpg",
    "images/cars/morgan/plus-4/2.jpg",
    "images/cars/morgan/plus-4/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "classic",
  model: "Plus 8",
  model_slug: "plus-8",
  model_summary: "Introduced in 1968, the Plus 8 became the fastest-accelerating British production car thanks to its lightweight body and Rover V8 power.",
  years_produced: "1968–2018",
  engine: "3.5L–4.8L Rover/BMW V8",
  horsepower: 190,
  top_speed_mph: 130,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Malvern, England",
  designer: "Morgan Motor Company",
  price_when_new: "≈£45,000",
  current_value_range: "£30,000–£90,000",
  model_type: "sports car",
  tags: ["classic", "v8", "performance"],
  notable_details: [
    "Known for brutal acceleration.",
    "Maintained its character over 50 years of production."
  ],
  fun_facts: [
    "Early models weighed under 900 kg.",
    "A cult favorite among V8 purists."
  ],
  notable_achievements: [
    "Fastest-accelerating British production car of its era.",
    "One of Morgan’s most iconic models."
  ],
  variants: [],
  hero_image: "images/cars/morgan/plus-8/hero.jpg",
  image_gallery: [
    "images/cars/morgan/plus-8/1.jpg",
    "images/cars/morgan/plus-8/2.jpg",
    "images/cars/morgan/plus-8/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "modern",
  model: "Aero 8",
  model_slug: "aero-8",
  model_summary: "Launched in 2000 as Morgan’s first all-aluminum flagship, featuring a BMW V8 and hand-formed aluminum bodywork.",
  years_produced: "2000–2018",
  engine: "4.4L–4.8L BMW V8",
  horsepower: 325,
  top_speed_mph: 160,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual / automatic",
  seating: 2,
  production_location: "Malvern, England",
  designer: "Morgan Design Team",
  price_when_new: "≈£65,000",
  current_value_range: "£45,000–£120,000",
  model_type: "sports car",
  tags: ["modern", "v8", "aluminum"],
  notable_details: [
    "First Morgan with an aluminum chassis.",
    "BMW powertrain partnership began here."
  ],
  fun_facts: [
    "Distinctive headlights were originally from the VW New Beetle.",
    "One of the most controversial yet beloved Morgans."
  ],
  notable_achievements: [
    "Marked Morgan’s entry into modern engineering.",
    "A collector favorite."
  ],
  variants: [],
  hero_image: "images/cars/morgan/aero-8/hero.jpg",
  image_gallery: [
    "images/cars/morgan/aero-8/1.jpg",
    "images/cars/morgan/aero-8/2.jpg",
    "images/cars/morgan/aero-8/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "modern",
  model: "Roadster",
  model_slug: "roadster",
  model_summary: "Introduced in 2012, the Roadster used a 3.7L Ford Cyclone V6 and represented the most powerful steel-chassis Morgan.",
  years_produced: "2012–2019",
  engine: "3.7L Ford Cyclone V6",
  horsepower: 280,
  top_speed_mph: 140,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "6-speed manual",
  seating: 2,
  production_location: "Malvern, England",
  designer: "Morgan Design Team",
  price_when_new: "≈£55,000",
  current_value_range: "£40,000–£70,000",
  model_type: "sports car",
  tags: ["modern", "v6", "steel-chassis"],
  notable_details: [
    "Most powerful steel-chassis Morgan ever built.",
    "Bridged classic and modern eras."
  ],
  fun_facts: [
    "Shares its engine with the Ford Mustang V6.",
    "A favorite among traditional Morgan fans wanting more power."
  ],
  notable_achievements: [
    "Final evolution of the steel ladder-frame Morgans.",
    "Praised for its character and performance."
  ],
  variants: [],
  hero_image: "images/cars/morgan/roadster/hero.jpg",
  image_gallery: [
    "images/cars/morgan/roadster/1.jpg",
    "images/cars/morgan/roadster/2.jpg",
    "images/cars/morgan/roadster/3.jpg"
  ]
},
{
  manufacturer: "Morgan",
  slug: "morgan",
  brand_group: "Sports / Performance",
  brand_url: "https://www.morgan-motor.com",
  heritage_group: "modern",
  model: "Plus Six",
  model_slug: "plus-six",
  model_summary: "Introduced in 2019 on the CX-Generation bonded aluminum platform, powered by BMW’s turbocharged inline-six.",
  years_produced: "2019–present",
  engine: "3.0L BMW B58 turbo inline-6",
  horsepower: 335,
  top_speed_mph: 166,
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "8-speed automatic",
  seating: 2,
  production_location: "Malvern, England",
  designer: "Morgan Design Team",
  price_when_new: "≈£80,000",
  current_value_range: "£70,000–£110,000",
  model_type: "sports car",
  tags: ["modern", "inline-6", "aluminum-platform"],
  notable_details: [
    "CX platform offers major rigidity improvements.",
    "Blends traditional craftsmanship with modern engineering."
  ],
  fun_facts: [
    "Shares its engine with the Toyota Supra (BMW B58).",
    "One of the quickest Morgans ever built."
  ],
  notable_achievements: [
    "Represents Morgan’s modern engineering direction.",
    "Praised for refinement and performance."
  ],
  variants: [],
  hero_image: "images/cars/morgan/plus-six/hero.jpg",
  image_gallery: [
    "images/cars/morgan/plus-six/1.jpg",
    "images/cars/morgan/plus-six/2.jpg",
    "images/cars/morgan/plus-six/3.jpg"
  ]
},

  // 17. Morris — Minor
{
  manufacturer: "Morris",
  slug: "morris",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Morris_Oxford",
  heritage_group: "classic",
  model: "Oxford",
  model_slug: "oxford",
  model_summary: "A long-running family car series that helped establish Morris as a major British manufacturer, spanning multiple generations from the Bullnose era to the Farina-styled models.",
  years_produced: "1913–1971",
  engine: "1.5L–1.6L inline-4 (various generations)",
  horsepower: 40, // approx early post-war models
  top_speed_mph: 70, // approx
  body_style: "4-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Cowley, Oxford, England",
  designer: "Morris Motors",
  price_when_new: "≈£450",
  current_value_range: "£4,000–£15,000",
  model_type: "family car",
  tags: ["classic", "saloon", "family"],
  notable_details: [
    "Early 'Bullnose' models are highly collectible.",
    "Later generations shared components with Austin models under BMC."
  ],
  fun_facts: [
    "The Oxford nameplate lasted nearly 60 years.",
    "Helped Morris achieve record UK market share in the 1920s."
  ],
  notable_achievements: [
    "One of Morris’s most important long-running models.",
    "A staple of British motoring history."
  ],
  variants: [],
  hero_image: "images/cars/morris/oxford/hero.jpg",
  image_gallery: [
    "images/cars/morris/oxford/1.jpg",
    "images/cars/morris/oxford/2.jpg",
    "images/cars/morris/oxford/3.jpg"
  ]
},
{
  manufacturer: "Morris",
  slug: "morris",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Morris_Minor",
  heritage_group: "classic",
  model: "Minor",
  model_slug: "minor",
  model_summary: "One of the most iconic British family cars, designed by Alec Issigonis and beloved for its practicality, charm, and simplicity.",
  years_produced: "1948–1971",
  engine: "803cc–1098cc inline-4",
  horsepower: 48, // approx
  top_speed_mph: 75, // approx
  body_style: "2-door saloon / 4-door saloon / convertible / Traveller estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Cowley, Oxford, England",
  designer: "Alec Issigonis",
  price_when_new: "≈£358",
  current_value_range: "£3,000–£12,000",
  model_type: "family car",
  tags: ["classic", "family", "issigonis"],
  notable_details: [
    "Traveller estate featured real ash wood framing.",
    "Over 1.6 million units produced."
  ],
  fun_facts: [
    "Designed by the same engineer who later created the Mini.",
    "A favorite among classic car enthusiasts for its simplicity."
  ],
  notable_achievements: [
    "One of the best-selling British cars of all time.",
    "A symbol of post-war British motoring."
  ],
  variants: [],
  hero_image: "images/cars/morris/minor/hero.jpg",
  image_gallery: [
    "images/cars/morris/minor/1.jpg",
    "images/cars/morris/minor/2.jpg",
    "images/cars/morris/minor/3.jpg"
  ]
},
{
  manufacturer: "Morris",
  slug: "morris",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Morris_Eight",
  heritage_group: "classic",
  model: "Eight",
  model_slug: "eight",
  model_summary: "A popular pre-war British car that helped Morris dominate the mass market, offering affordable motoring to thousands of families.",
  years_produced: "1935–1948",
  engine: "918cc inline-4",
  horsepower: 23, // approx
  top_speed_mph: 58, // approx
  body_style: "2-door saloon / 4-door saloon / tourer",
  drivetrain: "RWD",
  transmission: "3-speed manual",
  seating: 4,
  production_location: "Cowley, Oxford, England",
  designer: "Morris Motors",
  price_when_new: "≈£120",
  current_value_range: "£3,000–£10,000",
  model_type: "family car",
  tags: ["classic", "pre-war", "family"],
  notable_details: [
    "One of the most successful British cars of the 1930s.",
    "Simple and robust mechanical design."
  ],
  fun_facts: [
    "Often used as a driving school car in the 1930s.",
    "Shared components with early MG models."
  ],
  notable_achievements: [
    "A major contributor to Morris’s pre-war success.",
    "Helped make car ownership accessible to the masses."
  ],
  variants: [],
  hero_image: "images/cars/morris/eight/hero.jpg",
  image_gallery: [
    "images/cars/morris/eight/1.jpg",
    "images/cars/morris/eight/2.jpg",
    "images/cars/morris/eight/3.jpg"
  ]
},
{
  manufacturer: "Morris",
  slug: "morris",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Morris_Marina",
  heritage_group: "modern",
  model: "Marina",
  model_slug: "marina",
  model_summary: "A high-volume family car produced under British Leyland, designed to compete with Ford and Vauxhall in the 1970s.",
  years_produced: "1971–1980",
  engine: "1.3L–1.8L inline-4",
  horsepower: 60, // approx
  top_speed_mph: 90, // approx
  body_style: "2-door saloon / 4-door saloon / estate / pickup",
  drivetrain: "RWD",
  transmission: "4-speed manual / automatic",
  seating: 5,
  production_location: "Cowley, Oxford, England",
  designer: "Roy Haynes",
  price_when_new: "≈£950",
  current_value_range: "£2,000–£8,000",
  model_type: "family car",
  tags: ["modern", "family", "leyland"],
  notable_details: [
    "Shared components with the Morris Minor.",
    "One of the last Morris-badged cars before the brand’s retirement."
  ],
  fun_facts: [
    "Sold over 1 million units worldwide.",
    "A common sight on British roads throughout the 1970s."
  ],
  notable_achievements: [
    "Helped British Leyland maintain market share.",
    "Represents the final era of Morris mass production."
  ],
  variants: [],
  hero_image: "images/cars/morris/marina/hero.jpg",
  image_gallery: [
    "images/cars/morris/marina/1.jpg",
    "images/cars/morris/marina/2.jpg",
    "images/cars/morris/marina/3.jpg"
  ]
},
{
  manufacturer: "Morris",
  slug: "morris",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Morris_Ital",
  heritage_group: "modern",
  model: "Ital",
  model_slug: "ital",
  model_summary: "The final Morris model before the brand was discontinued, featuring updated styling on the Marina platform.",
  years_produced: "1980–1984",
  engine: "1.3L–1.7L inline-4",
  horsepower: 63, // approx
  top_speed_mph: 92, // approx
  body_style: "4-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual / automatic",
  seating: 5,
  production_location: "Cowley, Oxford, England",
  designer: "Italdesign (styling)",
  price_when_new: "≈£3,000",
  current_value_range: "£1,500–£5,000",
  model_type: "family car",
  tags: ["modern", "family", "final-model"],
  notable_details: [
    "Styled by Italdesign, hence the name.",
    "Represents the end of the Morris marque."
  ],
  fun_facts: [
    "Production ended in 1984, retiring the Morris brand.",
    "Shares most mechanical components with the Marina."
  ],
  notable_achievements: [
    "Final chapter of Morris’s 70-year history.",
    "A symbol of the British Leyland era."
  ],
  variants: [],
  hero_image: "images/cars/morris/ital/hero.jpg",
  image_gallery: [
    "images/cars/morris/ital/1.jpg",
    "images/cars/morris/ital/2.jpg",
    "images/cars/morris/ital/3.jpg"
  ]
},


  // 18. Reliant
{
  manufacturer: "Reliant",
  slug: "reliant",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Reliant_Robin",
  heritage_group: "classic",
  model: "Robin",
  model_slug: "robin",
  model_summary: "Reliant’s most famous three-wheeler, known for its lightweight fiberglass body, tiny engine, and iconic status in British pop culture.",
  years_produced: "1973–2002",
  engine: "0.75L–0.85L inline-4",
  horsepower: 40, // approx
  top_speed_mph: 85, // approx
  body_style: "3-wheel saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Tamworth, England",
  designer: "Reliant Motor Company",
  price_when_new: "≈£1,198",
  current_value_range: "£2,000–£8,000",
  model_type: "microcar",
  tags: ["classic", "three-wheeler", "fiberglass"],
  notable_details: [
    "Lightweight fiberglass body kept weight under 450 kg.",
    "Can be driven on a motorcycle license in some regions."
  ],
  fun_facts: [
    "Frequently featured in British comedy shows.",
    "Despite jokes, it was genuinely economical and practical."
  ],
  notable_achievements: [
    "One of the best-selling three-wheelers ever made.",
    "A symbol of quirky British motoring."
  ],
  variants: [],
  hero_image: "images/cars/reliant/robin/hero.jpg",
  image_gallery: [
    "images/cars/reliant/robin/1.jpg",
    "images/cars/reliant/robin/2.jpg",
    "images/cars/reliant/robin/3.jpg"
  ]
},
{
  manufacturer: "Reliant",
  slug: "reliant",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Reliant_Regal",
  heritage_group: "classic",
  model: "Regal",
  model_slug: "regal",
  model_summary: "A lightweight three-wheeler predecessor to the Robin, best known today as the blue van from the Mr. Bean series.",
  years_produced: "1953–1973",
  engine: "0.6L–0.7L inline-4",
  horsepower: 30, // approx
  top_speed_mph: 75, // approx
  body_style: "3-wheel saloon / van",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2–4",
  production_location: "Tamworth, England",
  designer: "Reliant Motor Company",
  price_when_new: "≈£325",
  current_value_range: "£1,500–£6,000",
  model_type: "microcar",
  tags: ["classic", "three-wheeler", "mr-bean"],
  notable_details: [
    "Fiberglass construction kept weight extremely low.",
    "Available in both passenger and commercial versions."
  ],
  fun_facts: [
    "The famous blue Mr. Bean van is a Reliant Regal Supervan III.",
    "One of the earliest mass-produced fiberglass cars."
  ],
  notable_achievements: [
    "Helped popularize affordable three-wheel motoring.",
    "A British cultural icon."
  ],
  variants: [],
  hero_image: "images/cars/reliant/regal/hero.jpg",
  image_gallery: [
    "images/cars/reliant/regal/1.jpg",
    "images/cars/reliant/regal/2.jpg",
    "images/cars/reliant/regal/3.jpg"
  ]
},
{
  manufacturer: "Reliant",
  slug: "reliant",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Reliant_Scimitar",
  heritage_group: "classic",
  model: "Scimitar GTE",
  model_slug: "scimitar-gte",
  model_summary: "A fiberglass-bodied shooting brake powered by Ford V6 engines, famous for its practicality and performance.",
  years_produced: "1968–1986",
  engine: "3.0L Ford Essex V6",
  horsepower: 138, // approx
  top_speed_mph: 120, // approx
  body_style: "3-door shooting brake",
  drivetrain: "RWD",
  transmission: "4-speed manual / automatic",
  seating: 4,
  production_location: "Tamworth, England",
  designer: "Ogle Design",
  price_when_new: "≈£1,759",
  current_value_range: "£4,000–£15,000",
  model_type: "sports estate",
  tags: ["classic", "v6", "shooting-brake"],
  notable_details: [
    "Fiberglass body on a steel chassis.",
    "One of the earliest performance estates."
  ],
  fun_facts: [
    "Princess Anne famously owned several Scimitars.",
    "Praised for combining speed with practicality."
  ],
  notable_achievements: [
    "A cult classic among British car enthusiasts.",
    "Helped define the shooting brake genre."
  ],
  variants: [],
  hero_image: "images/cars/reliant/scimitar-gte/hero.jpg",
  image_gallery: [
    "images/cars/reliant/scimitar-gte/1.jpg",
    "images/cars/reliant/scimitar-gte/2.jpg",
    "images/cars/reliant/scimitar-gte/3.jpg"
  ]
},
{
  manufacturer: "Reliant",
  slug: "reliant",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Reliant_Kitten",
  heritage_group: "classic",
  model: "Kitten",
  model_slug: "kitten",
  model_summary: "A compact four-wheeled alternative to the Robin, offering improved stability while retaining Reliant’s lightweight fiberglass construction.",
  years_produced: "1975–1982",
  engine: "0.85L inline-4",
  horsepower: 40, // approx
  top_speed_mph: 80, // approx
  body_style: "2-door saloon / estate",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Tamworth, England",
  designer: "Reliant Motor Company",
  price_when_new: "≈£1,500",
  current_value_range: "£3,000–£10,000",
  model_type: "compact car",
  tags: ["classic", "fiberglass", "lightweight"],
  notable_details: [
    "Shared its engine with the Robin.",
    "Designed to compete with small hatchbacks of the era."
  ],
  fun_facts: [
    "Despite being four-wheeled, it weighed under 500 kg.",
    "Rare today due to low production numbers."
  ],
  notable_achievements: [
    "One of Reliant’s most practical designs.",
    "A cult favorite among microcar enthusiasts."
  ],
  variants: [],
  hero_image: "images/cars/reliant/kitten/hero.jpg",
  image_gallery: [
    "images/cars/reliant/kitten/1.jpg",
    "images/cars/reliant/kitten/2.jpg",
    "images/cars/reliant/kitten/3.jpg"
  ]
},



  // 19. Riley
{
  manufacturer: "Riley",
  slug: "riley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Riley_Nine",
  heritage_group: "classic",
  model: "Nine",
  model_slug: "nine",
  model_summary: "Riley’s most important model, featuring advanced engineering, hemispherical combustion chambers, and a reputation for sporting performance.",
  years_produced: "1926–1938",
  engine: "1.1L–1.5L inline-4",
  horsepower: 35, // approx
  top_speed_mph: 65, // approx
  body_style: "saloon / tourer / sports",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "2 –4",
  production_location: "Coventry, England",
  designer: "Percy Riley",
  price_when_new: "≈£285",
  current_value_range: "£12,000–£40,000",
  model_type: "sports saloon",
  tags: ["classic", "pre-war", "sporting"],
  notable_details: [
    "Featured Riley’s famous hemispherical-head engine.",
    "Available in numerous body styles, including sporty specials."
  ],
  fun_facts: [
    "A favorite among privateer racers in the 1930s.",
    "Known for excellent handling and rev-happy engines."
  ],
  notable_achievements: [
    "Helped establish Riley’s reputation for engineering excellence.",
    "Successful in period motorsport events."
  ],
  variants: [],
  hero_image: "images/cars/riley/nine/hero.jpg",
  image_gallery: [
    "images/cars/riley/nine/1.jpg",
    "images/cars/riley/nine/2.jpg",
    "images/cars/riley/nine/3.jpg"
  ]
},
{
  manufacturer: "Riley",
  slug: "riley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Riley_MPH",
  heritage_group: "classic",
  model: "MPH",
  model_slug: "mph",
  model_summary: "A rare, hand-built pre-war sports car with stunning coachwork and strong performance, now one of the most collectible Rileys.",
  years_produced: "1934–1935",
  engine: "1.5L–2.0L inline-6",
  horsepower: 50, // approx
  top_speed_mph: 90, // approx
  body_style: "2-door sports roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Riley Motors",
  price_when_new: "≈£550",
  current_value_range: "£150,000–£300,000",
  model_type: "sports car",
  tags: ["classic", "pre-war", "collectible"],
  notable_details: [
    "Only around 15–16 examples were built.",
    "Lightweight body and advanced engine design."
  ],
  fun_facts: [
    "One of the most valuable pre-war British sports cars.",
    "Often compared to early Aston Martins for style and performance."
  ],
  notable_achievements: [
    "A highlight of Riley’s sporting heritage.",
    "Highly prized by collectors worldwide."
  ],
  variants: [],
  hero_image: "images/cars/riley/mph/hero.jpg",
  image_gallery: [
    "images/cars/riley/mph/1.jpg",
    "images/cars/riley/mph/2.jpg",
    "images/cars/riley/mph/3.jpg"
  ]
},
{
  manufacturer: "Riley",
  slug: "riley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Riley_RM_Series",
  heritage_group: "classic",
  model: "RMA / RME",
  model_slug: "rm-series",
  model_summary: "Post-war sporting saloons featuring Riley’s advanced engines and elegant styling, known for their refinement and spirited performance.",
  years_produced: "1945–1955",
  engine: "1.5L–2.5L inline-4",
  horsepower: 54, // approx
  top_speed_mph: 80, // approx
  body_style: "4-door saloon / drophead coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "4–5",
  production_location: "Coventry, England",
  designer: "Riley Motors",
  price_when_new: "≈£850",
  current_value_range: "£6,000–£20,000",
  model_type: "sports saloon",
  tags: ["classic", "post-war", "saloon"],
  notable_details: [
    "Wood-framed body construction.",
    "Known for smooth, torquey engines."
  ],
  fun_facts: [
    "The RM series bridged Riley’s pre-war and BMC eras.",
    "Drophead versions are especially collectible."
  ],
  notable_achievements: [
    "A respected sporting saloon in its day.",
    "Helped maintain Riley’s identity after WWII."
  ],
  variants: [],
  hero_image: "images/cars/riley/rm-series/hero.jpg",
  image_gallery: [
    "images/cars/riley/rm-series/1.jpg",
    "images/cars/riley/rm-series/2.jpg",
    "images/cars/riley/rm-series/3.jpg"
  ]
},
{
  manufacturer: "Riley",
  slug: "riley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Riley_Elf",
  heritage_group: "classic",
  model: "Elf",
  model_slug: "elf",
  model_summary: "A luxury, coachbuilt version of the classic Mini, featuring a distinct Riley grille, extended boot, and upgraded interior.",
  years_produced: "1961–1969",
  engine: "848cc–998cc inline-4",
  horsepower: 38, // approx
  top_speed_mph: 77, // approx
  body_style: "2-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: "4",
  production_location: "Longbridge, England",
  designer: "BMC / Riley",
  price_when_new: "≈£695",
  current_value_range: "£5,000–£15,000",
  model_type: "compact saloon",
  tags: ["classic", "mini-based", "luxury"],
  notable_details: [
    "Shared mechanicals with the Mini but added premium touches.",
    "Distinctive upright Riley grille and wood-trimmed interior."
  ],
  fun_facts: [
    "The Elf and Wolseley Hornet were the 'posh Minis'.",
    "Now highly collectible due to low production numbers."
  ],
  notable_achievements: [
    "Expanded the Mini platform into luxury territory.",
    "A quirky and beloved part of Riley’s final years."
  ],
  variants: [],
  hero_image: "images/cars/riley/elf/hero.jpg",
  image_gallery: [
    "images/cars/riley/elf/1.jpg",
    "images/cars/riley/elf/2.jpg",
    "images/cars/riley/elf/3.jpg"
  ]
},



  // 20. Rolls-Royce
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Silver_Ghost",
  heritage_group: "classic",
  model: "Silver Ghost",
  model_slug: "silver-ghost",
  model_summary: "The legendary 40/50 hp model that established Rolls‑Royce’s reputation for unmatched refinement and reliability, earning the title 'The Best Car in the World.'",
  years_produced: "1906–1926",
  engine: "7.0L–7.4L inline-6",
  horsepower: 48, // approx early rating
  top_speed_mph: 80, // approx
  body_style: "chassis-only (coachbuilt bodies)",
  drivetrain: "RWD",
  transmission: "3-speed manual (early), 4-speed manual (from 1913)",
  seating: "4–7",
  production_location: "Derby, England & Springfield, Massachusetts",
  designer: "Henry Royce",
  price_when_new: "≈£1,100",
  current_value_range: "£300,000–£2,000,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "inline-6"],
  notable_details: [
    "Originally designated the 40/50 hp model.",
    "Chassis no. AX201 became the famous 'Silver Ghost'."
  ],
  fun_facts: [
    "Autocar called it 'the best car in the world' in 1907.",
    "Used as the basis for Rolls‑Royce armoured cars."
  ],
  notable_achievements: [
    "Set new standards for smoothness and reliability.",
    "Formed the foundation of Rolls‑Royce’s global reputation."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/silver-ghost/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/silver-ghost/1.jpg",
    "images/cars/rolls-royce/silver-ghost/2.jpg",
    "images/cars/rolls-royce/silver-ghost/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_I",
  heritage_group: "classic",
  model: "Phantom I",
  model_slug: "phantom-i",
  model_summary: "Successor to the Silver Ghost, featuring a new 7.7L OHV straight‑six and refined chassis engineering.",
  years_produced: "1925–1929",
  engine: "7.7L inline-6",
  horsepower: 95, // approx
  top_speed_mph: 90, // approx
  body_style: "coachbuilt saloon / limousine / tourer",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "4–7",
  production_location: "Derby, England & Springfield, Massachusetts",
  designer: "Rolls-Royce",
  price_when_new: "≈£1,850",
  current_value_range: "£120,000–£500,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "inline-6"],
  notable_details: [
    "Known as the 'New Phantom' at launch.",
    "British and American versions had different chassis and bodies."
  ],
  fun_facts: [
    "Springfield-built cars often used Brewster coachwork.",
    "Over 3,500 Phantom I units were produced globally."
  ],
  notable_achievements: [
    "Advanced refinement over the Silver Ghost.",
    "A favourite among aristocratic buyers of the era."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/phantom-i/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/phantom-i/1.jpg",
    "images/cars/rolls-royce/phantom-i/2.jpg",
    "images/cars/rolls-royce/phantom-i/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_II",
  heritage_group: "classic",
  model: "Phantom II",
  model_slug: "phantom-ii",
  model_summary: "A major evolution of the Phantom line, featuring a revised 7.7L straight‑six and an all-new chassis for improved handling.",
  years_produced: "1929–1936",
  engine: "7.7L inline-6 (crossflow head)",
  horsepower: 120, // approx
  top_speed_mph: 95, // approx
  body_style: "coachbuilt saloon / limousine / tourer",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "4–7",
  production_location: "Derby, England",
  designer: "Rolls-Royce",
  price_when_new: "≈£2,100",
  current_value_range: "£150,000–£600,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "inline-6"],
  notable_details: [
    "Featured a completely new chassis with improved suspension.",
    "The Continental variant offered sportier performance."
  ],
  fun_facts: [
    "The Phantom II was the last Rolls‑Royce entirely designed by Henry Royce.",
    "Only around 1,680 units were produced."
  ],
  notable_achievements: [
    "Considered one of the finest pre‑war luxury cars.",
    "Praised for its smoothness and long‑distance capability."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/phantom-ii/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/phantom-ii/1.jpg",
    "images/cars/rolls-royce/phantom-ii/2.jpg",
    "images/cars/rolls-royce/phantom-ii/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_III",
  heritage_group: "classic",
  model: "Phantom III",
  model_slug: "phantom-iii",
  model_summary: "The first Rolls‑Royce road car with a V12 engine, representing the pinnacle of pre‑war engineering sophistication.",
  years_produced: "1936–1939",
  engine: "7.3L V12",
  horsepower: 165, // approx
  top_speed_mph: 100, // approx
  body_style: "coachbuilt saloon / limousine",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: "4–7",
  production_location: "Derby, England",
  designer: "Rolls-Royce",
  price_when_new: "≈£2,500",
  current_value_range: "£200,000–£700,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "v12"],
  notable_details: [
    "First Rolls‑Royce with independent front suspension.",
    "One of the most technically advanced pre‑war cars."
  ],
  fun_facts: [
    "Only 727 Phantom IIIs were built.",
    "The V12 was Rolls‑Royce’s first road‑car V12."
  ],
  notable_achievements: [
    "A masterpiece of pre‑war engineering.",
    "Highly prized among collectors today."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/phantom-iii/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/phantom-iii/1.jpg",
    "images/cars/rolls-royce/phantom-iii/2.jpg",
    "images/cars/rolls-royce/phantom-iii/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Silver_Cloud",
  heritage_group: "classic",
  model: "Silver Cloud",
  model_slug: "silver-cloud",
  model_summary: "A beautifully proportioned post-war luxury saloon, widely regarded as one of the most elegant Rolls-Royce designs ever produced.",
  years_produced: "1955–1966",
  engine: "4.9L inline-6 (Series I), 6.2L V8 (Series II & III)",
  horsepower: 155, // approx
  top_speed_mph: 102, // approx
  body_style: "4-door saloon / coachbuilt variants",
  drivetrain: "RWD",
  transmission: "4-speed automatic",
  seating: "5",
  production_location: "Crewe, England",
  designer: "J.P. Blatchley",
  price_when_new: "≈£5,000",
  current_value_range: "£25,000–£120,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "v8", "post-war"],
  notable_details: [
    "Series II introduced the all-aluminum Rolls-Royce V8.",
    "One of the last Rolls-Royce models with significant coachbuilt options."
  ],
  fun_facts: [
    "Often seen in classic films and royal motorcades.",
    "The Silver Cloud III featured quad headlamps and sharper styling."
  ],
  notable_achievements: [
    "Considered one of the most beautiful Rolls-Royce models ever made.",
    "A symbol of 1950s–60s British luxury."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/silver-cloud/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/silver-cloud/1.jpg",
    "images/cars/rolls-royce/silver-cloud/2.jpg",
    "images/cars/rolls-royce/silver-cloud/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Silver_Shadow",
  heritage_group: "classic",
  model: "Silver Shadow",
  model_slug: "silver-shadow",
  model_summary: "A revolutionary Rolls-Royce featuring monocoque construction, advanced hydraulics, and modern engineering, becoming the brand’s best-selling model.",
  years_produced: "1965–1980",
  engine: "6.2L V8 (early), 6.75L V8 (later)",
  horsepower: 200, // approx
  top_speed_mph: 118, // approx
  body_style: "4-door saloon / 2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "3-speed automatic",
  seating: "5",
  production_location: "Crewe, England",
  designer: "John Polwhele Blatchley",
  price_when_new: "≈£6,557",
  current_value_range: "£8,000–£30,000",
  model_type: "luxury car",
  tags: ["classic", "luxury", "v8", "monocoque"],
  notable_details: [
    "First Rolls-Royce with unitary body construction.",
    "Hydropneumatic suspension licensed from Citroën."
  ],
  fun_facts: [
    "The Silver Shadow became the most-produced Rolls-Royce ever.",
    "The long-wheelbase version was renamed Silver Wraith II."
  ],
  notable_achievements: [
    "Brought Rolls-Royce into the modern engineering era.",
    "A favorite among celebrities and diplomats."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/silver-shadow/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/silver-shadow/1.jpg",
    "images/cars/rolls-royce/silver-shadow/2.jpg",
    "images/cars/rolls-royce/silver-shadow/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_VII",
  heritage_group: "modern",
  model: "Phantom VII",
  model_slug: "phantom-vii",
  model_summary: "The first Rolls‑Royce developed under BMW ownership, reestablishing the Phantom as the world’s premier ultra‑luxury flagship.",
  years_produced: "2003–2017",
  engine: "6.75L naturally aspirated V12",
  horsepower: 453, // approx
  top_speed_mph: 149,
  body_style: "saloon / extended wheelbase / coupé / drophead coupé",
  drivetrain: "RWD",
  transmission: "8-speed automatic",
  seating: "4–5",
  production_location: "Goodwood, England",
  designer: "Ian Cameron",
  price_when_new: "≈£250,000",
  current_value_range: "£90,000–£200,000",
  model_type: "luxury car",
  tags: ["modern", "luxury", "v12"],
  notable_details: [
    "First Rolls‑Royce built on the dedicated 'Architecture of Luxury' precursor platform.",
    "Reintroduced coach doors to the modern lineup."
  ],
  fun_facts: [
    "Its 6.75L V12 is a modern homage to classic Rolls‑Royce engines.",
    "One of the quietest cars ever measured at the time."
  ],
  notable_achievements: [
    "Reestablished Rolls‑Royce as the global ultra‑luxury benchmark.",
    "Set new standards for refinement and craftsmanship."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/phantom-vii/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/phantom-vii/1.jpg",
    "images/cars/rolls-royce/phantom-vii/2.jpg",
    "images/cars/rolls-royce/phantom-vii/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_VIII",
  heritage_group: "modern",
  model: "Phantom VIII",
  model_slug: "phantom-viii",
  model_summary: "The current Rolls‑Royce flagship, built on the all‑aluminum Architecture of Luxury platform and powered by a twin‑turbo V12.",
  years_produced: "2017–present",
  engine: "6.75L twin-turbocharged V12",
  horsepower: 563, // verified
  top_speed_mph: 155, // limited
  body_style: "saloon / extended wheelbase",
  drivetrain: "RWD",
  transmission: "8-speed automatic",
  seating: "4–5",
  production_location: "Goodwood, England",
  designer: "Giles Taylor",
  price_when_new: "≈£350,000",
  current_value_range: "£250,000–£450,000",
  model_type: "luxury car",
  tags: ["modern", "luxury", "v12"],
  notable_details: [
    "Features 'The Gallery' — a full‑width illuminated art display in the dashboard.",
    "Uses a Flagbearer camera system to pre‑scan the road for suspension adjustments."
  ],
  fun_facts: [
    "Weighs over 2.5 tonnes yet reaches 100 km/h in 5.3 seconds.",
    "No two Phantom interiors are identical due to bespoke commissions."
  ],
  notable_achievements: [
    "Considered the world’s most refined production automobile.",
    "Defines the modern Rolls‑Royce design language."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/phantom-viii/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/phantom-viii/1.jpg",
    "images/cars/rolls-royce/phantom-viii/2.jpg",
    "images/cars/rolls-royce/phantom-viii/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Ghost",
  heritage_group: "modern",
  model: "Ghost",
  model_slug: "ghost",
  model_summary: "A driver‑focused Rolls‑Royce featuring AWD, four‑wheel steering, and a more dynamic character while retaining full luxury refinement.",
  years_produced: "2010–present",
  engine: "6.75L twin-turbocharged V12",
  horsepower: 571, // verified
  top_speed_mph: 155, // limited
  body_style: "4-door saloon",
  drivetrain: "AWD",
  transmission: "8-speed automatic",
  seating: "4–5",
  production_location: "Goodwood, England",
  designer: "Andreas Thurner",
  price_when_new: "≈£250,000",
  current_value_range: "£120,000–£300,000",
  model_type: "luxury car",
  tags: ["modern", "luxury", "v12", "awd"],
  notable_details: [
    "Features four‑wheel steering for agility and stability.",
    "Designed for owners who prefer to drive themselves."
  ],
  fun_facts: [
    "0–100 km/h in 4.8 seconds despite its size.",
    "Shares the Phantom’s V12 but tuned for more responsiveness."
  ],
  notable_achievements: [
    "Rolls‑Royce’s most successful modern model.",
    "Praised for blending performance with serenity."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/ghost/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/ghost/1.jpg",
    "images/cars/rolls-royce/ghost/2.jpg",
    "images/cars/rolls-royce/ghost/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Wraith",
  heritage_group: "modern",
  model: "Wraith",
  model_slug: "wraith",
  model_summary: "A powerful grand tourer based on the Ghost platform, featuring a fastback profile and the most dynamic driving character in the lineup.",
  years_produced: "2013–2023",
  engine: "6.6L twin-turbocharged V12",
  horsepower: 623, // verified
  top_speed_mph: 155, // limited
  body_style: "2-door fastback coupé",
  drivetrain: "RWD",
  transmission: "8-speed automatic",
  seating: "4",
  production_location: "Goodwood, England",
  designer: "Pavle Trpinac",
  price_when_new: "≈£230,000",
  current_value_range: "£120,000–£250,000",
  model_type: "grand tourer",
  tags: ["modern", "luxury", "v12", "gt"],
  notable_details: [
    "Fastest‑accelerating Rolls‑Royce ever built.",
    "Features GPS‑aided transmission that anticipates corners."
  ],
  fun_facts: [
    "Shares its platform with the Ghost and Dawn.",
    "Coach doors emphasize its dramatic proportions."
  ],
  notable_achievements: [
    "A modern icon of Rolls‑Royce performance.",
    "Highly sought after on the used market."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/wraith/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/wraith/1.jpg",
    "images/cars/rolls-royce/wraith/2.jpg",
    "images/cars/rolls-royce/wraith/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Cullinan",
  heritage_group: "modern",
  model: "Cullinan",
  model_slug: "cullinan",
  model_summary: "Rolls‑Royce’s first SUV, combining off‑road capability with the brand’s signature refinement and V12 power.",
  years_produced: "2018–present",
  engine: "6.75L twin-turbocharged V12",
  horsepower: 563, // same as Phantom VIII
  top_speed_mph: 155, // limited
  body_style: "5-door SUV",
  drivetrain: "AWD",
  transmission: "8-speed automatic",
  seating: "4–5",
  production_location: "Goodwood, England",
  designer: "Andreas Thurner",
  price_when_new: "≈£300,000",
  current_value_range: "£250,000–£400,000",
  model_type: "luxury SUV",
  tags: ["modern", "luxury", "v12", "suv"],
  notable_details: [
    "Built on the same aluminum Architecture of Luxury as the Phantom VIII.",
    "Features a 'Viewing Suite' with deployable rear seats."
  ],
  fun_facts: [
    "Named after the world’s largest gem‑quality diamond.",
    "One of the quietest SUVs ever built."
  ],
  notable_achievements: [
    "Rolls‑Royce’s best‑selling model globally.",
    "Redefined the ultra‑luxury SUV segment."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/cullinan/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/cullinan/1.jpg",
    "images/cars/rolls-royce/cullinan/2.jpg",
    "images/cars/rolls-royce/cullinan/3.jpg"
  ]
},
{
  manufacturer: "Rolls-Royce",
  slug: "rolls-royce",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rolls-Royce_Spectre",
  heritage_group: "modern",
  model: "Spectre",
  model_slug: "spectre",
  model_summary: "Rolls‑Royce’s first fully electric model, representing the brand’s transition into an all‑EV future.",
  years_produced: "2023–present",
  engine: "Dual electric motors",
  horsepower: 577, // approx
  top_speed_mph: 155, // limited
  body_style: "2-door fastback coupé",
  drivetrain: "AWD",
  transmission: "single-speed",
  seating: "4",
  production_location: "Goodwood, England",
  designer: "Rolls-Royce Design Team",
  price_when_new: "≈£330,000",
  current_value_range: "£300,000–£380,000",
  model_type: "electric luxury coupé",
  tags: ["modern", "electric", "luxury"],
  notable_details: [
    "Built on the aluminum Architecture of Luxury platform.",
    "Features the most advanced aerodynamics of any Rolls‑Royce."
  ],
  fun_facts: [
    "Rolls‑Royce plans to be fully electric by 2030.",
    "Spectre is the spiritual successor to the Wraith."
  ],
  notable_achievements: [
    "Marks the beginning of Rolls‑Royce’s EV era.",
    "One of the most luxurious electric cars ever produced."
  ],
  variants: [],
  hero_image: "images/cars/rolls-royce/spectre/hero.jpg",
  image_gallery: [
    "images/cars/rolls-royce/spectre/1.jpg",
    "images/cars/rolls-royce/spectre/2.jpg",
    "images/cars/rolls-royce/spectre/3.jpg"
  ]
},

  // 21. Rover
{
  manufacturer: "Rover",
  slug: "rover",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rover_P4",
  heritage_group: "classic",
  model: "P4",
  model_slug: "p4",
  model_summary: "A post‑war executive saloon known for its solid engineering, refined ride, and conservative styling, nicknamed the 'Auntie Rover.'",
  years_produced: "1949–1964",
  engine: "2.0L–2.6L inline-6",
  horsepower: 75, // approx
  top_speed_mph: 90, // approx
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Solihull, England",
  designer: "Rover Company",
  price_when_new: "≈£1,100",
  current_value_range: "£6,000–£18,000",
  model_type: "executive saloon",
  tags: ["classic", "inline-6", "executive"],
  notable_details: [
    "Known for exceptional build quality.",
    "A favorite among British professionals in the 1950s."
  ],
  fun_facts: [
    "Earned the affectionate nickname 'Auntie' for its sensible character.",
    "One of Rover’s most dependable models."
  ],
  notable_achievements: [
    "Helped establish Rover’s reputation for engineering integrity.",
    "A staple of British middle‑class motoring."
  ],
  variants: [],
  hero_image: "images/cars/rover/p4/hero.jpg",
  image_gallery: [
    "images/cars/rover/p4/1.jpg",
    "images/cars/rover/p4/2.jpg",
    "images/cars/rover/p4/3.jpg"
  ]
},
{
  manufacturer: "Rover",
  slug: "rover",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rover_P5",
  heritage_group: "classic",
  model: "P5",
  model_slug: "p5",
  model_summary: "A large, elegant British saloon and coupé, famously used by government ministers and powered by Rover’s Buick‑derived V8 in later years.",
  years_produced: "1958–1973",
  engine: "3.0L inline-6 / 3.5L V8",
  horsepower: 160, // approx V8
  top_speed_mph: 110, // approx
  body_style: "4-door saloon / 4-door coupé",
  drivetrain: "RWD",
  transmission: "3-speed automatic / manual",
  seating: 5,
  production_location: "Solihull, England",
  designer: "David Bache",
  price_when_new: "≈£1,600",
  current_value_range: "£7,000–£25,000",
  model_type: "executive saloon",
  tags: ["classic", "v8", "executive"],
  notable_details: [
    "The P5B V8 became the preferred car of British government ministers.",
    "Coupé version featured a lower roofline and premium trim."
  ],
  fun_facts: [
    "Queen Elizabeth II owned a P5B.",
    "The Rover V8 engine became a British automotive icon."
  ],
  notable_achievements: [
    "Symbol of British governmental prestige.",
    "One of Rover’s most luxurious models."
  ],
  variants: [],
  hero_image: "images/cars/rover/p5/hero.jpg",
  image_gallery: [
    "images/cars/rover/p5/1.jpg",
    "images/cars/rover/p5/2.jpg",
    "images/cars/rover/p5/3.jpg"
  ]
},
{
  manufacturer: "Rover",
  slug: "rover",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rover_P6",
  heritage_group: "classic",
  model: "P6",
  model_slug: "p6",
  model_summary: "A technologically advanced executive saloon featuring a de Dion rear suspension, safety‑focused design, and later the smooth Rover V8.",
  years_produced: "1963–1977",
  engine: "2.0L–2.2L inline-4 / 3.5L V8",
  horsepower: 150, // approx V8
  top_speed_mph: 120, // approx
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual / automatic",
  seating: 5,
  production_location: "Solihull, England",
  designer: "David Bache",
  price_when_new: "≈£1,275",
  current_value_range: "£4,000–£15,000",
  model_type: "executive saloon",
  tags: ["classic", "v8", "engineering"],
  notable_details: [
    "Won European Car of the Year in 1964.",
    "Innovative safety cell construction."
  ],
  fun_facts: [
    "The P6 3500 V8 was a favorite among police forces.",
    "One of the most advanced British saloons of its era."
  ],
  notable_achievements: [
    "Set new standards for safety and engineering.",
    "A landmark model in Rover history."
  ],
  variants: [],
  hero_image: "images/cars/rover/p6/hero.jpg",
  image_gallery: [
    "images/cars/rover/p6/1.jpg",
    "images/cars/rover/p6/2.jpg",
    "images/cars/rover/p6/3.jpg"
  ]
},
{
  manufacturer: "Rover",
  slug: "rover",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rover_SD1",
  heritage_group: "classic",
  model: "SD1",
  model_slug: "sd1",
  model_summary: "A fastback executive car and the last 'true' Rover, featuring the Rover V8 and winning European Car of the Year in 1977.",
  years_produced: "1976–1986",
  engine: "2.3L–2.6L inline-6 / 3.5L V8",
  horsepower: 190, // approx V8
  top_speed_mph: 135, // approx
  body_style: "5-door fastback",
  drivetrain: "RWD",
  transmission: "5-speed manual / automatic",
  seating: 5,
  production_location: "Solihull, England",
  designer: "David Bache",
  price_when_new: "≈£3,500",
  current_value_range: "£3,000–£12,000",
  model_type: "executive fastback",
  tags: ["classic", "v8", "executive"],
  notable_details: [
    "Final Rover designed largely by the original Rover engineering team.",
    "Used extensively by UK police forces."
  ],
  fun_facts: [
    "The SD1 3500 Vitesse became a touring car racing icon.",
    "Its design was inspired by the Ferrari Daytona."
  ],
  notable_achievements: [
    "European Car of the Year 1977.",
    "A high point of Rover innovation."
  ],
  variants: [],
  hero_image: "images/cars/rover/sd1/hero.jpg",
  image_gallery: [
    "images/cars/rover/sd1/1.jpg",
    "images/cars/rover/sd1/2.jpg",
    "images/cars/rover/sd1/3.jpg"
  ]
},
{
  manufacturer: "Rover",
  slug: "rover",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Rover_75",
  heritage_group: "modern",
  model: "75",
  model_slug: "75",
  model_summary: "A refined executive saloon developed under BMW ownership, featuring retro‑inspired styling and advanced chassis engineering.",
  years_produced: "1998–2005",
  engine: "1.8L inline-4 / 2.0L V6 / 2.5L V6 / 2.0L diesel",
  horsepower: 150, // approx V6
  top_speed_mph: 130, // approx
  body_style: "4-door saloon / 5-door estate",
  drivetrain: "FWD / RWD (V8 variant)",
  transmission: "5-speed manual / automatic",
  seating: 5,
  production_location: "Cowley & Longbridge, England",
  designer: "Richard Woolley",
  price_when_new: "≈£18,000",
  current_value_range: "£1,000–£6,000",
  model_type: "executive saloon",
  tags: ["modern", "executive", "bmw-era"],
  notable_details: [
    "The V8 version used a Mustang‑derived engine and RWD layout.",
    "Praised for its ride comfort and interior quality."
  ],
  fun_facts: [
    "Launched at the 1998 Birmingham Motor Show.",
    "The MG ZT was its sportier sibling."
  ],
  notable_achievements: [
    "One of the most refined cars Rover ever produced.",
    "A strong final chapter before MG Rover’s collapse."
  ],
  variants: [],
  hero_image: "images/cars/rover/75/hero.jpg",
  image_gallery: [
    "images/cars/rover/75/1.jpg",
    "images/cars/rover/75/2.jpg",
    "images/cars/rover/75/3.jpg"
  ]
},



  // 22. Sunbeam
{
  manufacturer: "Sunbeam",
  slug: "sunbeam",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Sunbeam_Alpine",
  heritage_group: "classic",
  model: "Alpine",
  model_slug: "alpine",
  model_summary: "A stylish British two-seat sports car known for its balanced handling and strong export success, especially in North America.",
  years_produced: "1959–1968",
  engine: "1.6L–1.7L inline-4",
  horsepower: 80, // approx
  top_speed_mph: 98, // approx
  body_style: "2-door roadster / coupé",
  drivetrain: "RWD",
  transmission: "4-speed manual (optional overdrive)",
  seating: 2,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group",
  price_when_new: "≈£900",
  current_value_range: "£8,000–£25,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "inline-4"],
  notable_details: [
    "One of Sunbeam’s most successful export models.",
    "Known for its comfortable ride compared to rival British roadsters."
  ],
  fun_facts: [
    "Featured in several 1960s films, including James Bond’s 'Dr. No'.",
    "The Alpine platform later spawned the V8-powered Tiger."
  ],
  notable_achievements: [
    "Helped establish Sunbeam’s reputation for stylish sports cars.",
    "Strong sales in the U.S. market."
  ],
  variants: [],
  hero_image: "images/cars/sunbeam/alpine/hero.jpg",
  image_gallery: [
    "images/cars/sunbeam/alpine/1.jpg",
    "images/cars/sunbeam/alpine/2.jpg",
    "images/cars/sunbeam/alpine/3.jpg"
  ]
},
{
  manufacturer: "Sunbeam",
  slug: "sunbeam",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Sunbeam_Tiger",
  heritage_group: "classic",
  model: "Tiger",
  model_slug: "tiger",
  model_summary: "A high-performance V8 roadster created by fitting a Ford small-block V8 into the Alpine chassis, delivering dramatic gains in speed and character.",
  years_produced: "1964–1967",
  engine: "4.3L Ford V8",
  horsepower: 164, // approx
  top_speed_mph: 120, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 2,
  production_location: "Ryton-on-Dunsmore, England",
  designer: "Rootes Group & Carroll Shelby (consulting)",
  price_when_new: "≈£1,400",
  current_value_range: "£35,000–£90,000",
  model_type: "sports car",
  tags: ["classic", "v8", "roadster"],
  notable_details: [
    "Developed with input from Carroll Shelby.",
    "Retained the Alpine’s styling but with far greater performance."
  ],
  fun_facts: [
    "Known as the 'British Cobra’s little brother'.",
    "A favorite among collectors due to its rarity and Shelby connection."
  ],
  notable_achievements: [
    "One of the most iconic Anglo-American sports cars.",
    "Significantly elevated Sunbeam’s performance image."
  ],
  variants: [],
  hero_image: "images/cars/sunbeam/tiger/hero.jpg",
  image_gallery: [
    "images/cars/sunbeam/tiger/1.jpg",
    "images/cars/sunbeam/tiger/2.jpg",
    "images/cars/sunbeam/tiger/3.jpg"
  ]
},
{
  manufacturer: "Sunbeam",
  slug: "sunbeam",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Hillman_Imp",
  heritage_group: "classic",
  model: "Imp Sport",
  model_slug: "imp-sport",
  model_summary: "A sportier version of the rear‑engined Sunbeam/Hillman Imp, offering improved performance and handling in a compact package.",
  years_produced: "1966–1976",
  engine: "875cc inline-4",
  horsepower: 55, // approx
  top_speed_mph: 90, // approx
  body_style: "2-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Linwood, Scotland",
  designer: "Rootes Group",
  price_when_new: "≈£580",
  current_value_range: "£3,000–£10,000",
  model_type: "compact sports saloon",
  tags: ["classic", "compact", "rear-engined"],
  notable_details: [
    "Featured twin carburetors and sportier tuning.",
    "Rear-mounted all‑aluminum engine gave it unique handling."
  ],
  fun_facts: [
    "Popular in grassroots motorsport and hillclimbs.",
    "Lightweight design made it surprisingly quick."
  ],
  notable_achievements: [
    "Expanded Sunbeam’s sporting image beyond roadsters.",
    "A cult classic among small‑car enthusiasts."
  ],
  variants: [],
  hero_image: "images/cars/sunbeam/imp-sport/hero.jpg",
  image_gallery: [
    "images/cars/sunbeam/imp-sport/1.jpg",
    "images/cars/sunbeam/imp-sport/2.jpg",
    "images/cars/sunbeam/imp-sport/3.jpg"
  ]
},

  // 23. Triumph
{
  manufacturer: "Triumph",
  slug: "triumph",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Triumph_TR6",
  heritage_group: "classic",
  model: "TR6",
  model_slug: "tr6",
  model_summary: "A classic British roadster powered by a torquey inline‑six, known for its muscular styling and strong enthusiast following.",
  years_produced: "1968–1976",
  engine: "2.5L inline-6",
  horsepower: 150, // UK PI models
  top_speed_mph: 120, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual (optional overdrive)",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Karmann (styling)",
  price_when_new: "≈£1,100",
  current_value_range: "£10,000–£35,000",
  model_type: "sports car",
  tags: ["classic", "inline-6", "roadster"],
  notable_details: [
    "Fuel-injected PI models offered significantly more power.",
    "One of the best-selling TR-series cars."
  ],
  fun_facts: [
    "The TR6’s squared-off tail was designed by Karmann in Germany.",
    "A favorite among collectors for its mechanical simplicity."
  ],
  notable_achievements: [
    "A defining British sports car of the late 1960s and 1970s.",
    "Strong presence in classic car markets worldwide."
  ],
  variants: [],
  hero_image: "images/cars/triumph/tr6/hero.jpg",
  image_gallery: [
    "images/cars/triumph/tr6/1.jpg",
    "images/cars/triumph/tr6/2.jpg",
    "images/cars/triumph/tr6/3.jpg"
  ]
},
{
  manufacturer: "Triumph",
  slug: "triumph",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Triumph_TR7",
  heritage_group: "classic",
  model: "TR7",
  model_slug: "tr7",
  model_summary: "A wedge‑shaped sports car representing the final chapter of the TR series, offering modern styling and improved comfort.",
  years_produced: "1974–1981",
  engine: "2.0L inline-4",
  horsepower: 105, // approx
  top_speed_mph: 110, // approx
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Speke, Canley & Solihull, England",
  designer: "Harris Mann",
  price_when_new: "≈£2,500",
  current_value_range: "£3,000–£10,000",
  model_type: "sports car",
  tags: ["classic", "wedge", "roadster"],
  notable_details: [
    "Known for its distinctive wedge styling.",
    "Later models included a convertible version."
  ],
  fun_facts: [
    "The TR7 was marketed as 'The Shape of Things to Come'.",
    "A V8-powered TR8 variant existed for North America."
  ],
  notable_achievements: [
    "One of the most recognizable British sports cars of the 1970s.",
    "Strong presence in classic car classifieds today."
  ],
  variants: [],
  hero_image: "images/cars/triumph/tr7/hero.jpg",
  image_gallery: [
    "images/cars/triumph/tr7/1.jpg",
    "images/cars/triumph/tr7/2.jpg",
    "images/cars/triumph/tr7/3.jpg"
  ]
},
{
  manufacturer: "Triumph",
  slug: "triumph",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Triumph_Stag",
  heritage_group: "classic",
  model: "Stag",
  model_slug: "stag",
  model_summary: "A stylish 2+2 grand tourer featuring a Triumph-designed V8 and elegant Michelotti styling.",
  years_produced: "1970–1978",
  engine: "3.0L Triumph V8",
  horsepower: 145, // approx
  top_speed_mph: 118, // approx
  body_style: "2-door convertible (with hardtop)",
  drivetrain: "RWD",
  transmission: "4-speed manual / automatic",
  seating: 4,
  production_location: "Coventry, England",
  designer: "Giovanni Michelotti",
  price_when_new: "≈£2,000",
  current_value_range: "£8,000–£25,000",
  model_type: "grand tourer",
  tags: ["classic", "v8", "grand-tourer"],
  notable_details: [
    "Designed to compete with the Mercedes SL.",
    "Known for its distinctive roll hoop and elegant proportions."
  ],
  fun_facts: [
    "The Stag has a passionate enthusiast community.",
    "Its V8 has a unique, unmistakable exhaust note."
  ],
  notable_achievements: [
    "A standout British GT of the 1970s.",
    "Now highly collectible and rising in value."
  ],
  variants: [],
  hero_image: "images/cars/triumph/stag/hero.jpg",
  image_gallery: [
    "images/cars/triumph/stag/1.jpg",
    "images/cars/triumph/stag/2.jpg",
    "images/cars/triumph/stag/3.jpg"
  ]
},
{
  manufacturer: "Triumph",
  slug: "triumph",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Triumph_Spitfire",
  heritage_group: "classic",
  model: "Spitfire",
  model_slug: "spitfire",
  model_summary: "A lightweight British roadster known for its agility, affordability, and long production run across five generations.",
  years_produced: "1962–1980",
  engine: "1.1L–1.5L inline-4",
  horsepower: 75, // approx 1500 model
  top_speed_mph: 100, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "4-speed manual (optional overdrive)",
  seating: 2,
  production_location: "Coventry, England",
  designer: "Giovanni Michelotti",
  price_when_new: "≈£690",
  current_value_range: "£4,000–£15,000",
  model_type: "sports car",
  tags: ["classic", "roadster", "lightweight"],
  notable_details: [
    "Shared components with the Triumph Herald.",
    "Later models featured improved suspension geometry."
  ],
  fun_facts: [
    "A popular entry-level classic sports car today.",
    "Its clamshell bonnet gives excellent engine access."
  ],
  notable_achievements: [
    "One of Triumph’s longest-running sports cars.",
    "Strong presence in classic car markets and clubs."
  ],
  variants: [],
  hero_image: "images/cars/triumph/spitfire/hero.jpg",
  image_gallery: [
    "images/cars/triumph/spitfire/1.jpg",
    "images/cars/triumph/spitfire/2.jpg",
    "images/cars/triumph/spitfire/3.jpg"
  ]
},


  // 24. TVR
{
  manufacturer: "TVR",
  slug: "tvr",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/TVR_Cerbera",
  heritage_group: "modern",
  model: "Cerbera",
  model_slug: "cerbera",
  model_summary: "A brutal, lightweight 2+2 sports car powered by TVR’s own AJP V8 and Speed Six engines, known for extreme performance and raw driving feel.",
  years_produced: "1996–2003",
  engine: "4.2L–4.5L AJP V8 / 4.0L Speed Six",
  horsepower: 360, // approx V8
  top_speed_mph: 185, // approx
  body_style: "2-door coupé",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: "2+2",
  production_location: "Blackpool, England",
  designer: "TVR Design",
  price_when_new: "≈£45,000",
  current_value_range: "£25,000–£60,000",
  model_type: "sports car",
  tags: ["modern", "v8", "speed-six", "lightweight"],
  notable_details: [
    "One of the first TVRs to use the in‑house AJP V8.",
    "Famously aggressive power delivery and handling."
  ],
  fun_facts: [
    "The last Cerbera was auctioned by TVR in 2006.",
    "Named after Cerberus, the three‑headed dog of the underworld."
  ],
  notable_achievements: [
    "A cult icon of 1990s British performance.",
    "Helped define TVR’s reputation for wild, analog sports cars."
  ],
  variants: [],
  hero_image: "images/cars/tvr/cerbera/hero.jpg",
  image_gallery: [
    "images/cars/tvr/cerbera/1.jpg",
    "images/cars/tvr/cerbera/2.jpg",
    "images/cars/tvr/cerbera/3.jpg"
  ]
},
{
  manufacturer: "TVR",
  slug: "tvr",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/TVR_Tuscan",
  heritage_group: "modern",
  model: "Tuscan",
  model_slug: "tuscan",
  model_summary: "A dramatic, curvaceous sports car powered by TVR’s Speed Six engine, famous for its appearance in films and its uncompromising performance.",
  years_produced: "1999–2006",
  engine: "4.0L–4.2L Speed Six",
  horsepower: 360, // approx
  top_speed_mph: 190, // approx
  body_style: "2-door coupé / convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Blackpool, England",
  designer: "TVR Design",
  price_when_new: "≈£50,000",
  current_value_range: "£30,000–£70,000",
  model_type: "sports car",
  tags: ["modern", "speed-six", "lightweight"],
  notable_details: [
    "No ABS, no traction control — pure analog driving.",
    "Distinctive removable targa-style roof panel."
  ],
  fun_facts: [
    "Featured prominently in the movie 'Swordfish'.",
    "Known for its wild color‑shifting paint options."
  ],
  notable_achievements: [
    "One of TVR’s most recognizable modern designs.",
    "A symbol of early‑2000s British performance excess."
  ],
  variants: [],
  hero_image: "images/cars/tvr/tuscan/hero.jpg",
  image_gallery: [
    "images/cars/tvr/tuscan/1.jpg",
    "images/cars/tvr/tuscan/2.jpg",
    "images/cars/tvr/tuscan/3.jpg"
  ]
},
{
  manufacturer: "TVR",
  slug: "tvr",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/TVR_Chimaera",
  heritage_group: "modern",
  model: "Chimaera",
  model_slug: "chimaera",
  model_summary: "A more touring‑friendly TVR powered by Rover V8 engines, offering a blend of comfort and classic TVR performance.",
  years_produced: "1991–2003",
  engine: "4.0L–5.0L Rover V8",
  horsepower: 240, // approx
  top_speed_mph: 160, // approx
  body_style: "2-door convertible",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Blackpool, England",
  designer: "TVR Design",
  price_when_new: "≈£32,000",
  current_value_range: "£12,000–£30,000",
  model_type: "sports car",
  tags: ["modern", "v8", "convertible"],
  notable_details: [
    "Designed as a more usable alternative to the Griffith.",
    "Fiberglass body over a tubular steel chassis."
  ],
  fun_facts: [
    "One of TVR’s best-selling models of the 1990s.",
    "Known for its thunderous Rover V8 soundtrack."
  ],
  notable_achievements: [
    "Helped TVR reach peak production numbers in the 1990s.",
    "A favorite among touring‑oriented TVR owners."
  ],
  variants: [],
  hero_image: "images/cars/tvr/chimaera/hero.jpg",
  image_gallery: [
    "images/cars/tvr/chimaera/1.jpg",
    "images/cars/tvr/chimaera/2.jpg",
    "images/cars/tvr/chimaera/3.jpg"
  ]
},
{
  manufacturer: "TVR",
  slug: "tvr",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/TVR_Griffith",
  heritage_group: "modern",
  model: "Griffith",
  model_slug: "griffith",
  model_summary: "A raw, lightweight V8 roadster that redefined TVR in the 1990s with its stunning looks and explosive performance.",
  years_produced: "1990–2002",
  engine: "4.0L–5.0L Rover V8",
  horsepower: 340, // approx 5.0
  top_speed_mph: 170, // approx
  body_style: "2-door roadster",
  drivetrain: "RWD",
  transmission: "5-speed manual",
  seating: 2,
  production_location: "Blackpool, England",
  designer: "TVR Design",
  price_when_new: "≈£28,000",
  current_value_range: "£20,000–£45,000",
  model_type: "sports car",
  tags: ["modern", "v8", "roadster"],
  notable_details: [
    "One of the most beautiful TVRs ever produced.",
    "Extremely light — around 1,060 kg depending on spec."
  ],
  fun_facts: [
    "The Griffith helped revive TVR’s fortunes in the early 1990s.",
    "A new Griffith revival model has been teased by TVR’s current owners."
  ],
  notable_achievements: [
    "A defining British sports car of the 1990s.",
    "Highly collectible and beloved by enthusiasts."
  ],
  variants: [],
  hero_image: "images/cars/tvr/griffith/hero.jpg",
  image_gallery: [
    "images/cars/tvr/griffith/1.jpg",
    "images/cars/tvr/griffith/2.jpg",
    "images/cars/tvr/griffith/3.jpg"
  ]
},

  // 25. Wolseley
{
  manufacturer: "Wolseley",
  slug: "wolseley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Wolseley_6/80",
  heritage_group: "classic",
  model: "6/80",
  model_slug: "6-80",
  model_summary: "A post‑war executive saloon sharing its body with the Morris Six, known for its police use and smooth six‑cylinder engine.",
  years_produced: "1948–1954",
  engine: "2.2L inline-6",
  horsepower: 72, // approx
  top_speed_mph: 80, // approx
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Cowley, England",
  designer: "Nuffield Organization",
  price_when_new: "≈£760",
  current_value_range: "£4,000–£12,000",
  model_type: "executive saloon",
  tags: ["classic", "inline-6", "post-war"],
  notable_details: [
    "Popular with British police forces in the 1950s.",
    "Shared body panels with the Morris Six."
  ],
  fun_facts: [
    "One of the first Wolseleys produced under the Nuffield/BMC umbrella.",
    "Known for its distinctive illuminated grille badge."
  ],
  notable_achievements: [
    "Helped reestablish Wolseley after WWII.",
    "A staple of British policing during the era."
  ],
  variants: [],
  hero_image: "images/cars/wolseley/6-80/hero.jpg",
  image_gallery: [
    "images/cars/wolseley/6-80/1.jpg",
    "images/cars/wolseley/6-80/2.jpg",
    "images/cars/wolseley/6-80/3.jpg"
  ]
},
{
  manufacturer: "Wolseley",
  slug: "wolseley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Wolseley_6/90",
  heritage_group: "classic",
  model: "6/90",
  model_slug: "6-90",
  model_summary: "Wolseley’s flagship of the 1950s, sharing engineering with the Riley Pathfinder and offering improved performance and refinement.",
  years_produced: "1954–1959",
  engine: "2.6L inline-6",
  horsepower: 95, // approx
  top_speed_mph: 90, // approx
  body_style: "4-door saloon",
  drivetrain: "RWD",
  transmission: "4-speed manual",
  seating: 5,
  production_location: "Cowley, England",
  designer: "BMC",
  price_when_new: "≈£950",
  current_value_range: "£3,500–£10,000",
  model_type: "executive saloon",
  tags: ["classic", "inline-6", "executive"],
  notable_details: [
    "Replaced the 6/80 as Wolseley’s top model.",
    "Shared its chassis with the Riley Pathfinder."
  ],
  fun_facts: [
    "Badged as 'Six-Ninety' on the bonnet.",
    "One of the most collectible post‑war Wolseleys."
  ],
  notable_achievements: [
    "Served as Wolseley’s premium offering during the BMC era.",
    "A respected classic among British saloon enthusiasts."
  ],
  variants: [],
  hero_image: "images/cars/wolseley/6-90/hero.jpg",
  image_gallery: [
    "images/cars/wolseley/6-90/1.jpg",
    "images/cars/wolseley/6-90/2.jpg",
    "images/cars/wolseley/6-90/3.jpg"
  ]
},
{
  manufacturer: "Wolseley",
  slug: "wolseley",
  brand_group: "Sports / Performance",
  brand_url: "https://en.wikipedia.org/wiki/Wolseley_Hornet",
  heritage_group: "classic",
  model: "Hornet",
  model_slug: "hornet",
  model_summary: "A luxury, coachbuilt variant of the classic Mini, featuring an extended boot, premium trim, and the signature Wolseley grille.",
  years_produced: "1961–1969",
  engine: "848cc–998cc inline-4",
  horsepower: 38, // approx
  top_speed_mph: 77, // approx
  body_style: "2-door saloon",
  drivetrain: "FWD",
  transmission: "4-speed manual",
  seating: 4,
  production_location: "Longbridge, England",
  designer: "BMC",
  price_when_new: "≈£695",
  current_value_range: "£5,000–£15,000",
  model_type: "compact saloon",
  tags: ["classic", "mini-based", "luxury"],
  notable_details: [
    "Shared mechanicals with the Mini but added premium features.",
    "Extended boot and upright grille distinguished it from the Mini."
  ],
  fun_facts: [
    "The Wolseley Hornet and Riley Elf were the 'posh Minis'.",
    "Now highly collectible due to low production numbers."
  ],
  notable_achievements: [
    "Expanded the Mini platform into luxury territory.",
    "A beloved part of Wolseley’s final years before the brand ended in 1975."
  ],
  variants: [],
  hero_image: "images/cars/wolseley/hornet/hero.jpg",
  image_gallery: [
    "images/cars/wolseley/hornet/1.jpg",
    "images/cars/wolseley/hornet/2.jpg",
    "images/cars/wolseley/hornet/3.jpg"
  ]
},


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
  "daimler": "#00205B",
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

"daimler": `
Daimler is one of Britain’s oldest and most prestigious motor manufacturers, founded in 1896 and long associated
with royal patronage, stately limousines, and refined engineering. Known for producing luxurious saloons, formal
limousines, and smooth V8-powered models, Daimler became the official supplier of cars to the British Royal Household
for much of the 20th century. The company later became closely linked with Jaguar, sharing platforms and engines while
maintaining its own distinct identity of elegance, craftsmanship, and quiet performance. Daimler’s legacy remains one of
 aristocratic motoring and dignified British luxury.
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
  // SPECIAL BRANDS (boutique, niche, cult-status)
  "bristol": "special",
  "tvr": "special",
  "caterham": "special",
  "morgan": "special",

  // MODERN BRANDS (currently active mainstream manufacturers)
  "aston-martin": "modern",
  "bentley": "modern",
  "jaguar": "modern",
  "land-rover": "modern",
  "lotus": "modern",
  "mclaren": "modern",
  "mini": "modern",
  "rolls-royce": "modern",

  // CLASSIC BRANDS (historic, defunct, legacy marques)
  "ac-cars": "classic",
  "austin": "classic",
  "austin-healey": "classic",
  "hillman": "classic",
  "jensen": "classic",
  "mg": "classic",
  "morris": "classic",
  "reliant": "classic",
  "riley": "classic",
  "rover": "classic",
  "sunbeam": "classic",
  "triumph": "classic",
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
  "daimler": 1896,
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
  "daimler": "Coventry, England",
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
