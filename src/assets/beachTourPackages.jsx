const beachTourPackages = {
  adventure: {
    type: "Adventure",
    description: "Tours designed for thrill-seekers and explorers who love outdoor activities and challenging environments. Expect high-energy experiences and unforgettable adrenaline rushes.",
    exampleTours: [
      {
        name: "Paris Adventure",
        description: "A mix of sightseeing and adventurous activities like biking through Montmartre, climbing the Eiffel Tower, and exploring hidden caves.",
        price: "$1,200",
        rating: 4.8,
        image: "https://www.tripsavvy.com/thmb/IGFQrFvsnY8gZnNx2U2lyAYxnBg=/1260x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-559699279-58f4f3cb5f9b582c4dfb1b29.jpg",
        duration: "5 days",
        activities: ["Bike tour in Montmartre", "Climb the Eiffel Tower", "Visit hidden caves", "Explore Parisian streets on foot"],
        highlights: ["Unique adventure in a romantic city", "Blend of culture and thrill", "Amazing French cuisine"],
        groupSize: "10-15 people",
        difficulty: "Moderate",
        ageRange: "18-45"
      },
      {
        name: "Safari Adventure",
        description: "Wildlife experiences in Kenya, including safari drives through the Maasai Mara, hot-air balloon rides over the savannah, and meeting indigenous tribes.",
        price: "$3,500",
        rating: 4.9,
        image: "https://basedonatruestory.co.uk/wp-content/uploads/2020/11/BOATS-Kenya-04-resize.jpg",
        duration: "7 days",
        activities: ["Game drives", "Hot air balloon ride", "Cultural interactions with local tribes", "Nature walks"],
        highlights: ["Big 5 sightings", "Stunning landscapes", "Exclusive cultural immersion"],
        groupSize: "8-12 people",
        difficulty: "Moderate",
        ageRange: "25-60"
      },{
        name: "Amazon Rainforest Expedition",
        description: "Explore the Amazon jungle, navigate through the river on a boat, and spot wildlife such as monkeys and exotic birds.",
        price: "$2,800",
        rating: 4.7,
        image: "https://i.pinimg.com/originals/c9/ed/4e/c9ed4eccf757c92192ea5464cba89cbf.jpg",
        duration: "9 days",
        activities: ["Jungle trekking", "River boating", "Wildlife spotting", "Cultural encounters with indigenous tribes"],
        highlights: ["Jungle adventures", "Breathtaking wildlife", "Unique Amazonian culture"],
        groupSize: "6-10 people",
        difficulty: "High",
        ageRange: "18-50"
      },
      {
        name: "Patagonia Adventure",
        description: "Trek through Patagonia's rugged terrain, hike to glaciers, and explore the stunning landscapes of Argentina and Chile.",
        price: "$4,200",
        rating: 5.0,
        image: "https://th.bing.com/th/id/OIP.VHj5Qjw85bnEbepeOg3YaQHaE_?rs=1&pid=ImgDetMain",
        duration: "10 days",
        activities: ["Glacier hiking", "Trekking through Torres del Paine", "Wildlife watching", "Mountain climbing"],
        highlights: ["Stunning Patagonian views", "Epic adventure", "Challenging hikes"],
        groupSize: "6-12 people",
        difficulty: "High",
        ageRange: "25-55"
      },
      {
        name: "Iceland Road Trip",
        description: "Drive through Iceland’s beautiful landscapes, including waterfalls, glaciers, volcanic areas, and geothermal hot springs.",
        price: "$2,400",
        rating: 4.8,
        image: "https://wanderthemap.com/wp-content/uploads/2016/08/Happy_Campers_Road_Trip_Iceland_12-700x467.jpg",
        duration: "8 days",
        activities: ["Road trip through Iceland", "Hike glaciers", "Visit volcanoes", "Soak in hot springs"],
        highlights: ["Spectacular landscapes", "Geothermal experiences", "Epic road trip adventures"],
        groupSize: "4-8 people",
        difficulty: "Moderate",
        ageRange: "18-50"
      },
      {
        name: "New Zealand Adventure",
        description: "Explore New Zealand's adventure capital, Queenstown, with activities like bungee jumping, jet boating, and hiking through stunning alpine landscapes.",
        price: "$3,000",
        rating: 4.9,
        image: "https://th.bing.com/th/id/R.3ff16adb3723d6419fce4cb2f8366e00?rik=TNUzvAChTNGkUQ&riu=http%3a%2f%2fvivaexpeditions.com%2fassets%2fUploads%2fpage-preview-images%2fLake-Erskine.JPG&ehk=yjqk9MCNlOnhrP7c%2b8%2bro3%2b42W3Dk44Wi9V%2b6hWaSoA%3d&risl=&pid=ImgRaw&r=0",
        duration: "6 days",
        activities: ["Bungee jumping", "Jet boating", "Hiking", "Visit Fiordland National Park"],
        highlights: ["Adrenaline-pumping activities", "Majestic scenery", "Adventure capital of the world"],
        groupSize: "8-15 people",
        difficulty: "High",
        ageRange: "20-45"
      },
      {
        name: "Australian Outback Adventure",
        description: "Explore the Australian outback on a 4WD expedition, discovering iconic locations such as Uluru and Kings Canyon while experiencing indigenous culture.",
        price: "$3,100",
        rating: 4.7,
        image: "https://caravanningoz.com.au/ca-site-content/uploads/2020/03/Rawnsley-Park-Station.-Image-c-South-Australian-Tourism-Commission.jpg",
        duration: "7 days",
        activities: ["4WD off-road driving", "Visit Uluru", "Cultural experience with indigenous guides", "Camping under the stars"],
        highlights: ["Stunning desert landscapes", "Cultural immersion", "Adventure in the outback"],
        groupSize: "6-12 people",
        difficulty: "Moderate",
        ageRange: "25-55"
      },
      {
        name: "Alaska Adventure",
        description: "Experience the wild beauty of Alaska with activities like dog sledding, glacier hiking, and wildlife watching in Denali National Park.",
        price: "$4,500",
        rating: 5.0,
        image: "https://snowhookadventures.com/wp-content/uploads/2020/11/Snowhook-Adventure-Guides-ATV-Tours-1280x600-1.jpg",
        duration: "8 days",
        activities: ["Dog sledding", "Glacier hiking", "Wildlife viewing", "Boat tours"],
        highlights: ["Wildlife sightings", "Snow-capped mountains", "Dog sledding on glaciers"],
        groupSize: "6-10 people",
        difficulty: "High",
        ageRange: "25-60"
      },
      {
        name: "Machu Picchu Trek",
        description: "Hike the Inca Trail and reach the ancient ruins of Machu Picchu, while learning about the history and culture of the Incas.",
        price: "$2,900",
        rating: 4.8,
        image: "https://www.gap360.com/tpl/lib/img/private/media/peru-machu-picchu-group-exploring-img7116-lg-rgb.jpeg",
        duration: "7 days",
        activities: ["Hiking the Inca Trail", "Visit Machu Picchu", "Explore Sacred Valley", "Cultural learning sessions"],
        highlights: ["Incredible Inca ruins", "Cultural history", "Breathtaking mountain views"],
        groupSize: "8-16 people",
        difficulty: "Moderate",
        ageRange: "18-50"
      },
      {
        name: "Canadian Rockies Adventure",
        description: "Explore the Canadian Rockies on foot and by canoe, discovering lakes, waterfalls, and glaciers in the heart of Canada's wilderness.",
        price: "$3,200",
        rating: 4.9,
        image: "https://backroads-web.s3.amazonaws.com/images/trips/2018/slideshow/MCNIF-canadian-rockies-multi-adventure-5.jpg",
        duration: "9 days",
        activities: ["Hiking through Banff National Park", "Canoeing on turquoise lakes", "Wildlife viewing", "Glacier exploration"],
        highlights: ["Majestic mountain views", "Crystal-clear lakes", "Unforgettable wildlife encounters"],
        groupSize: "6-10 people",
        difficulty: "Moderate",
        ageRange: "18-60"
      },
      {
        name: "Kilimanjaro Climb",
        description: "Climb Mount Kilimanjaro, Africa's highest peak, with a team of expert guides and experience incredible views of the surrounding wilderness.",
        price: "$4,800",
        rating: 5.0,
        image: "https://i.pinimg.com/originals/61/b2/de/61b2de969b619ab0d65a7d3fb5d296f5.jpg",
        duration: "10 days",
        activities: ["Mountain climbing", "Cultural immersion", "Camping", "Wildlife viewing"],
        highlights: ["Climbing Kilimanjaro", "Stunning African landscapes", "Life-changing adventure"],
        groupSize: "6-8 people",
        difficulty: "High",
        ageRange: "25-55"
      },{
        name: "Mount Everest Base Camp Trek",
        description: "Embark on the legendary trek to Mount Everest Base Camp, where you'll experience high-altitude trekking, incredible views of the Himalayas, and a close-up view of the world's tallest peak.",
        price: "$5,200",
        rating: 4.9,
        image: "https://stingynomads.com/wp-content/uploads/2022/09/namche-bazaar-ebc-routes.jpg",
        duration: "14 days",
        activities: ["Trekking to Everest Base Camp", "Explore Sherpa villages", "Visit Tengboche Monastery", "High-altitude hiking"],
        highlights: ["Stunning views of Mount Everest", "Cultural experiences with Sherpas", "Challenging and rewarding trek"],
        groupSize: "6-12 people",
        difficulty: "High",
        ageRange: "25-60"
      }
      

    ]
  },
  cultural: {
    type: "Cultural",
    description: "Explore heritage, history, and local traditions. These tours immerse you in the culture and past of different destinations, with visits to monuments, museums, and local performances.",
    exampleTours: [
      {
        name: "New York Explorer",
        description: "Visit iconic cultural spots like Times Square, Broadway, and the Museum of Modern Art, along with local neighborhoods rich in history.",
        price: "$1,500",
        rating: 4.7,
        image: "https://i2.wp.com/clubthrifty.com/wp-content/uploads/2018/05/NYC-Explorer-Pass_Featured-Image.jpg",
        duration: "5 days",
        activities: ["Broadway show", "Museum tours", "Walking through historical neighborhoods", "Cultural food experiences"],
        highlights: ["Theater district exploration", "Iconic landmarks", "New York City nightlife"],
        groupSize: "15-20 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Rome Explorer",
        description: "Explore the Colosseum, Vatican, Pantheon, and other ancient Roman landmarks, while learning about Italy's rich cultural and architectural history.",
        price: "$2,200",
        rating: 4.8,
        image: "https://i2.wp.com/clubthrifty.com/wp-content/uploads/2019/10/Go-Rome-Explorer-Pass_Post-Image1-1-735x385.jpg",
        duration: "6 days",
        activities: ["Guided tours of ancient sites", "Vatican City visit", "Pasta making class", "Local wine tasting"],
        highlights: ["Ancient Roman ruins", "Rich Italian culture", "Incredible Italian food"],
        groupSize: "10-15 people",
        difficulty: "Easy",
        ageRange: "18-70"
      },{
        name: "Kyoto Cultural Immersion",
        description: "Discover the ancient capital of Japan, visiting historic temples, traditional tea ceremonies, and the famous Fushimi Inari Shrine.",
        price: "$1,800",
        rating: 4.7,
        image: "https://www.kiwi.com/stories/wp-content/uploads/2017/09/shutterstock_401754184-1920x1280.jpg",
        duration: "6 days",
        activities: ["Temple visits", "Traditional tea ceremony", "Kimono wearing experience", "Cultural performances"],
        highlights: ["Rich Japanese heritage", "Ancient temples and gardens", "Traditional culture"],
        groupSize: "8-12 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Machu Picchu Explorer",
        description: "Visit the ancient Incan city of Machu Picchu and explore the sacred valley, learning about the history and culture of the Inca civilization.",
        price: "$2,800",
        rating: 4.9,
        image: "https://www.princesscruises.de/sites/default/files/styles/header/public/peru_machu_picchu_shutterstock_64481752_0_0.jpg?itok=khQEYE_J",
        duration: "7 days",
        activities: ["Guided Machu Picchu tour", "Sacred Valley exploration", "Visit to local villages", "Cultural immersion"],
        highlights: ["Machu Picchu wonder", "Inca heritage", "Stunning Andean landscapes"],
        groupSize: "6-10 people",
        difficulty: "Moderate",
        ageRange: "25-60"
      },
      {
        name: "Istanbul Cultural Delights",
        description: "Explore Istanbul’s rich history with visits to the Blue Mosque, Hagia Sophia, and the Grand Bazaar, experiencing the blend of European and Asian influences.",
        price: "$1,500",
        rating: 4.8,
        image: "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2018/10/NINTCHDBPICT000439547680.jpg",
        duration: "5 days",
        activities: ["Historic monument visits", "Grand Bazaar shopping", "Traditional Turkish meal experiences", "Bosphorus cruise"],
        highlights: ["Blend of East and West", "Ottoman and Byzantine landmarks", "Delicious Turkish cuisine"],
        groupSize: "10-15 people",
        difficulty: "Easy",
        ageRange: "18-70"
      },
      {
        name: "Cairo & Pyramids Exploration",
        description: "Step into ancient Egypt by visiting the Pyramids of Giza, the Sphinx, and the Egyptian Museum, all while learning about Egypt’s history and culture.",
        price: "$2,000",
        rating: 4.7,
        image: "https://th.bing.com/th/id/OIP.nqx-EA6rZvnV8BfXhkrBvgHaEW?rs=1&pid=ImgDetMain",
        duration: "5 days",
        activities: ["Pyramids of Giza visit", "Egyptian Museum exploration", "Camel rides", "Nile River cruise"],
        highlights: ["Ancient Egyptian wonders", "Rich archaeological heritage", "Local Egyptian cuisine"],
        groupSize: "12-20 people",
        difficulty: "Easy",
        ageRange: "18-70"
      },
      {
        name: "Barcelona Art & Culture",
        description: "Experience the artistic and architectural heritage of Barcelona, with visits to the Sagrada Familia, Park Güell, and local art museums.",
        price: "$1,700",
        rating: 4.8,
        image: "https://www.encirclephotos.com/wp-content/uploads/Spain-Barcelona-Montjuic-National-Art-Museum-1200x630.jpg",
        duration: "5 days",
        activities: ["Sagrada Familia tour", "Art museum visits", "Flamenco dance show", "Local tapas tasting"],
        highlights: ["Gaudí's masterpieces", "Vibrant Catalan culture", "Mediterranean cuisine"],
        groupSize: "10-15 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Athens Ancient Heritage",
        description: "Dive into the history of Greece with a guided tour of the Acropolis, Parthenon, and the Temple of Olympian Zeus.",
        price: "$1,600",
        rating: 4.7,
        image: "https://assets.editorial.aetnd.com/uploads/2010/02/ancient-greece-acropolis-gettyimages-619657840.jpg",
        duration: "4 days",
        activities: ["Acropolis tour", "Visit to the Ancient Agora", "Greek mythology exploration", "Traditional Greek cuisine tasting"],
        highlights: ["Ancient Greek history", "Iconic landmarks", "Greek cultural experiences"],
        groupSize: "10-15 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Parisian Art & Culture",
        description: "Indulge in Paris’s cultural and artistic heritage with visits to the Louvre, Montmartre, and local art galleries.",
        price: "$1,800",
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/A0Phfz38SBjdA8iAWhtRIcfF5VLs4OXhTMwe4sSHnU1HKS4fZNsB8CYQ7ZDPjyZpfijn_89UtfFHAu-7u0D7drE=s750",
        duration: "5 days",
        activities: ["Louvre Museum visit", "Montmartre walking tour", "Art gallery explorations", "Parisian café experiences"],
        highlights: ["Parisian art scene", "Iconic landmarks", "Classic French food"],
        groupSize: "8-15 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Petra & Jordan Cultural Adventure",
        description: "Explore the ancient rock-cut city of Petra and discover the rich history of Jordan with visits to the Dead Sea and Wadi Rum.",
        price: "$3,000",
        rating: 4.8,
        image: "https://www.expedia.com.sg/stories/wp-content/uploads/2022/05/expedia-petra-copy.jpg",
        duration: "7 days",
        activities: ["Petra visit", "Wadi Rum jeep safari", "Dead Sea float", "Cultural visits to ancient sites"],
        highlights: ["Ancient Petra ruins", "Jordanian desert landscapes", "Rich cultural heritage"],
        groupSize: "8-12 people",
        difficulty: "Moderate",
        ageRange: "25-60"
      },
      {
        name: "Cultural Kyoto & Nara Tour",
        description: "Explore Kyoto and Nara’s cultural landmarks, including the Fushimi Inari Shrine, Kinkaku-ji, and Nara’s Great Buddha.",
        price: "$2,100",
        rating: 4.9,
        image: "https://www.japan-guide.com/g20/itinerary_nara_01.jpg",
        duration: "6 days",
        activities: ["Visit Fushimi Inari Shrine", "Explore Kinkaku-ji", "Deer feeding in Nara Park", "Japanese tea ceremony"],
        highlights: ["Ancient temples and shrines", "Cultural immersion", "Traditional tea ceremony"],
        groupSize: "8-12 people",
        difficulty: "Easy",
        ageRange: "18-65"
      },
      {
        name: "Marrakech & Sahara Desert Adventure",
        description: "Experience the vibrant culture of Morocco, from the bustling souks of Marrakech to the serene beauty of the Sahara Desert, with camel rides and traditional Berber village visits.",
        price: "$2,500",
        rating: 4.8,
        image: "https://cherg.com/wp-content/uploads/cherg-expeditions-sahara-desert-moroccan-tours.jpg",
        duration: "6 days",
        activities: ["Marrakech city tour", "Camel ride in the Sahara Desert", "Overnight in a desert camp", "Visit to a Berber village", "Traditional Moroccan cooking class"],
        highlights: ["Sahara Desert sunsets", "Vibrant markets and souks", "Rich Moroccan culture"],
        groupSize: "10-15 people",
        difficulty: "Moderate",
        ageRange: "18-65"
      }
      
    ]
  },
  beach: {
    type: "Beach Holidays",
    description: "Perfect for relaxation and leisure, these tours offer the chance to unwind on pristine beaches in some of the world’s most exotic destinations. Enjoy sun, sand, and sea in a tropical paradise.",
    exampleTours: [
      {
        name: "Bali Escape",
        description: "A peaceful retreat in Bali with beach resorts, private villas, yoga retreats, and beachside dining.",
        price: "$2,000",
        rating: 4.7,
        image: "https://example.com/bali-escape.jpg",
        duration: "7 days",
        activities: ["Yoga on the beach", "Private villa stay", "Water sports", "Balinese massage"],
        highlights: ["Tropical beaches", "Private luxury", "Rich Balinese culture"],
        groupSize: "2-6 people",
        difficulty: "Easy",
        ageRange: "25-50"
      },
      {
        name: "Maldives Paradise",
        description: "Stay in luxurious overwater bungalows, snorkel with vibrant marine life, and relax on white-sand beaches.",
        price: "$4,500",
        rating: 5.0,
        image: "https://example.com/maldives-paradise.jpg",
        duration: "7 days",
        activities: ["Snorkeling", "Private candlelit dinners", "Spa treatments", "Island hopping"],
        highlights: ["Crystal-clear waters", "Exclusivity", "Luxury beachside relaxation"],
        groupSize: "Couples or small groups",
        difficulty: "Easy",
        ageRange: "18-60"
      }
    ]
  },
  cruise: {
    type: "Cruise",
    description: "Travel by sea, visiting multiple destinations while enjoying the luxury and comfort of a cruise ship. These tours offer a blend of relaxation, entertainment, and exploration of exotic ports.",
    exampleTours: [
      {
        name: "Caribbean Cruise",
        description: "Luxury cruises through the Caribbean, stopping at multiple islands for beach days, excursions, and cultural experiences.",
        price: "$2,800",
        rating: 4.6,
        image: "https://example.com/caribbean-cruise.jpg",
        duration: "8 days",
        activities: ["Island hopping", "Onboard entertainment", "Shore excursions", "Fine dining"],
        highlights: ["Exotic Caribbean islands", "Luxurious cruise ship amenities", "Gourmet cuisine onboard"],
        groupSize: "100-300 people",
        difficulty: "Easy",
        ageRange: "18-75"
      }
    ]
  },
  safari: {
    type: "Wildlife Safari",
    description: "Embark on a journey to witness wildlife in their natural habitats. These tours often include guided game drives, nature walks, and opportunities to see some of the world’s most majestic animals in the wild.",
    exampleTours: [
      {
        name: "Safari Adventure",
        description: "Explore the African savannah and see lions, elephants, zebras, and more on a thrilling wildlife safari in Kenya's Maasai Mara or Tanzania's Serengeti.",
        price: "$3,200",
        rating: 4.9,
        image: "https://example.com/safari-adventure-2.jpg",
        duration: "10 days",
        activities: ["Safari game drives", "Cultural visits", "Nature walks", "Bird watching"],
        highlights: ["Big 5 wildlife sightings", "Sunrise and sunset safari", "Luxury lodge accommodations"],
        groupSize: "6-10 people",
        difficulty: "Moderate",
        ageRange: "30-65"
      }
    ]
  },
  luxury: {
    type: "Luxury",
    description: "Exclusive high-end travel experiences, offering premium services, lavish accommodations, and exceptional amenities. Perfect for those seeking comfort and personalized service.",
    exampleTours: [
      {
        name: "London Luxury",
        description: "VIP access to London's best landmarks, including private tours of Buckingham Palace, luxury shopping in Mayfair, and dining at Michelin-starred restaurants.",
        price: "$5,000",
        rating: 5.0,
        image: "https://example.com/london-luxury.jpg",
        duration: "5 days",
        activities: ["Private guided tours", "Luxury shopping experience", "Exclusive afternoon teas", "Private dinners with renowned chefs"],
        highlights: ["Opulent accommodations", "VIP experiences", "Exclusive London attractions"],
        groupSize: "Couples or small groups",
        difficulty: "Easy",
        ageRange: "35-70"
      }
    ]
  },
  city: {
    type: "City Tours",
    description: "Explore vibrant urban destinations, discovering iconic landmarks, local cuisine, cultural hotspots, and hidden gems. These tours are perfect for those who love exploring bustling cities.",
    exampleTours: [
      {
        name: "Sydney Sightseeing",
        description: "Tour the city’s famous landmarks like the Sydney Opera House, Bondi Beach, and the Harbour Bridge, with a mix of outdoor adventures and local dining experiences.",
        price: "$1,800",
        rating: 4.7,
        image: "https://example.com/sydney-sightseeing.jpg",
        duration: "5 days",
        activities: ["Opera House tour", "Harbour Bridge climb", "Bondi Beach visit", "Local cuisine tasting"],
        highlights: ["Iconic Australian landmarks", "Scenic city views", "Vibrant coastal culture"],
        groupSize: "10-20 people",
        difficulty: "Moderate",
        ageRange: "18-65"
      }
    ]
  },
  hiking: {
    type: "Hiking & Trekking",
    description: "For those who enjoy challenging hikes and exploring rugged landscapes. Whether trekking up mountains or through lush forests, these tours offer breathtaking natural beauty and physical challenges.",
    exampleTours: [
      {
        name: "Mount Fuji Trek",
        description: "Trekking through the scenic mountains surrounding Tokyo, with a climb to the summit of Japan’s iconic Mount Fuji.",
        price: "$1,500",
        rating: 4.9,
        image: "https://example.com/fuji-trek.jpg",
        duration: "5 days",
        activities: ["Hiking to Mount Fuji summit", "Exploring surrounding temples", "Local cultural experiences"],
        highlights: ["Stunning views of Mount Fuji", "Cultural immersion", "Majestic hiking trails"],
        groupSize: "5-12 people",
        difficulty: "High",
        ageRange: "18-50"
      }
    ]
  },
  roadTrip: {
    type: "Road Trips",
    description: "Hit the open road and explore diverse destinations by car. These tours allow for flexibility, scenic drives, and the thrill of discovering off-the-beaten-path locations.",
    exampleTours: [
      {
        name: "California Road Trip",
        description: "Drive from LA to San Francisco through scenic routes like Pacific Coast Highway, with stops in Santa Barbara, Big Sur, and Monterey.",
        price: "$1,700",
        rating: 4.7,
        image: "https://example.com/california-road-trip.jpg",
        duration: "7 days",
        activities: ["Scenic coastal drive", "Exploring Big Sur", "Stop in Napa Valley", "Beach visits"],
        highlights: ["Pacific Coast Highway", "Stunning coastal views", "Charming coastal towns"],
        groupSize: "2-6 people",
        difficulty: "Easy",
        ageRange: "18-65"
      }
    ]
  },
  family: {
    type: "Family Tours",
    description: "Fun and relaxing tours for families with kids, designed to keep everyone entertained. These tours feature child-friendly activities, accommodations, and excursions.",
    exampleTours: [
      {
        name: "Disneyland Family Tour",
        description: "A family trip to Disneyland Paris, with visits to theme parks, character meet-and-greets, and special family activities.",
        price: "$2,500",
        rating: 5.0,
        image: "https://example.com/disneyland-family.jpg",
        duration: "5 days",
        activities: ["Disneyland park visits", "Character meet-and-greets", "Parades and shows", "Family-friendly meals"],
        highlights: ["Magical Disneyland experience", "Family-friendly activities", "Iconic Disney attractions"],
        groupSize: "4-8 people",
        difficulty: "Easy",
        ageRange: "All ages"
      }
    ]
  }
};

export default beachTourPackages