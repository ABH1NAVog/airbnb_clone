const listings = [
  {
    city: "Delhi",
    listings: [
      {
        id: 101,
        title: "Luxury Studio at Connaught Place",
        location: "Connaught Place, New Delhi",
        price: 3200,
        rating: 4.8,
        reviews: 134,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "2 km from center",
        images: {
          main: "PROMPT: A luxurious modern studio apartment interior in Connaught Place New Delhi, warm lighting, stylish furniture, large windows showing city view, photorealistic, Airbnb listing style",
          img2: "PROMPT: Spacious bedroom in a Delhi studio apartment with king-size bed, white linen, wooden floors, soft lighting, photorealistic interior photography",
          img3: "PROMPT: Modern kitchen in a New Delhi apartment, marble countertops, stainless steel appliances, clean and minimalist, photorealistic",
          img4: "PROMPT: Clean modern bathroom in a Delhi apartment, white tiles, glass shower, luxury toiletries, bright lighting, photorealistic",
          img5: "PROMPT: Aerial view of Connaught Place New Delhi at sunset, circular road layout, city lights beginning to glow, photorealistic drone shot"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Free Parking", "TV", "Washing Machine"],
        host: { name: "Rahul", joinedYear: 2019, responseRate: "98%" }
      },
      {
        id: 102,
        title: "Cozy Heritage Home in Old Delhi",
        location: "Chandni Chowk, Old Delhi",
        price: 1800,
        rating: 4.5,
        reviews: 89,
        beds: 2,
        guests: 3,
        bathrooms: 1,
        isSuperHost: false,
        distance: "1 km from Red Fort",
        images: {
          main: "PROMPT: Charming heritage haveli room in Old Delhi Chandni Chowk, traditional Indian decor, wooden carved furniture, warm colors, photorealistic Airbnb listing",
          img2: "PROMPT: Traditional Indian bedroom with colorful rajasthani bedding, antique wooden furniture, warm ambient lighting, photorealistic",
          img3: "PROMPT: Narrow vibrant street of Chandni Chowk Old Delhi, colorful shops, street food stalls, busy atmosphere, photorealistic",
          img4: "PROMPT: Rooftop terrace of a Delhi haveli with view of Red Fort in background, evening sky, string lights, photorealistic",
          img5: "PROMPT: Traditional Indian courtyard inside an Old Delhi haveli, potted plants, mosaic floor tiles, open sky above, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Breakfast Included", "Rooftop Access"],
        host: { name: "Vikram", joinedYear: 2021, responseRate: "90%" }
      },
      {
        id: 103,
        title: "Modern Flat in South Delhi",
        location: "Hauz Khas, South Delhi",
        price: 2700,
        rating: 4.6,
        reviews: 112,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "3 km from Hauz Khas Village",
        images: {
          main: "PROMPT: Sleek modern apartment living room in South Delhi Hauz Khas, minimalist decor, large sofa, city view through glass windows, photorealistic Airbnb style",
          img2: "PROMPT: Modern master bedroom in a South Delhi flat, white walls, designer furniture, warm lighting, photorealistic",
          img3: "PROMPT: Open plan kitchen and dining area in a Delhi apartment, wooden dining table, pendant lights, photorealistic",
          img4: "PROMPT: Hauz Khas Village Delhi, lakeside view with ancient ruins, cafes and boutiques, golden hour lighting, photorealistic",
          img5: "PROMPT: Private balcony of a Delhi flat with cushioned seating, potted plants, overlooking green neighborhood, photorealistic"
        },
        amenities: ["WiFi", "Pool", "Gym", "Air Conditioning", "Kitchen", "Parking"],
        host: { name: "Priya", joinedYear: 2018, responseRate: "97%" }
      },
      {
        id: 104,
        title: "Budget Room near Metro",
        location: "Lajpat Nagar, Delhi",
        price: 900,
        rating: 4.1,
        reviews: 67,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.5 km from Metro",
        images: {
          main: "PROMPT: Clean budget hotel room near Delhi metro, simple modern furniture, single bed, tidy and bright, photorealistic Airbnb listing",
          img2: "PROMPT: Simple clean bathroom in a Delhi budget room, white tiles, basic amenities, well lit, photorealistic",
          img3: "PROMPT: Delhi metro station entrance, busy commuters, modern architecture, daytime, photorealistic",
          img4: "PROMPT: Lajpat Nagar market Delhi, colorful fabric shops, busy street, vibrant atmosphere, photorealistic",
          img5: "PROMPT: Small cozy reading nook in a Delhi room, bookshelf, warm lamp, window with curtains, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "TV"],
        host: { name: "Suresh", joinedYear: 2022, responseRate: "85%" }
      },
      {
        id: 105,
        title: "Penthouse with Skyline View",
        location: "Aerocity, New Delhi",
        price: 6500,
        rating: 4.9,
        reviews: 201,
        beds: 3,
        guests: 6,
        bathrooms: 3,
        isSuperHost: true,
        distance: "5 min from Airport",
        images: {
          main: "PROMPT: Stunning penthouse living room in Delhi Aerocity, floor to ceiling windows, panoramic city skyline view, luxury furniture, night lighting, photorealistic",
          img2: "PROMPT: Luxury penthouse master bedroom, king bed, city skyline view through large windows, elegant decor, photorealistic",
          img3: "PROMPT: Rooftop infinity pool of a Delhi penthouse at night, city lights reflection, luxury loungers, photorealistic",
          img4: "PROMPT: High-end open kitchen in a Delhi penthouse, quartz countertops, wine rack, island seating, photorealistic",
          img5: "PROMPT: Delhi Aerocity at night, modern buildings illuminated, wide roads, airport visible in distance, aerial photorealistic shot"
        },
        amenities: ["WiFi", "Private Pool", "Gym", "Air Conditioning", "Kitchen", "Parking", "Concierge"],
        host: { name: "Ananya", joinedYear: 2017, responseRate: "99%" }
      },
      {
        id: 106,
        title: "Artist Loft in Shahpur Jat",
        location: "Shahpur Jat, Delhi",
        price: 2100,
        rating: 4.4,
        reviews: 53,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "4 km from center",
        images: {
          main: "PROMPT: Bohemian artist loft apartment in Shahpur Jat Delhi, exposed brick walls, colorful artwork, eclectic furniture, bright natural light, photorealistic Airbnb listing",
          img2: "PROMPT: Creative workspace in a Delhi artist loft, wooden desk, paintings on wall, natural light from skylight, photorealistic",
          img3: "PROMPT: Shahpur Jat Delhi street art village, murals on walls, indie cafes, young crowd, vibrant atmosphere, photorealistic",
          img4: "PROMPT: Cozy loft bedroom with mezzanine, fairy lights, boho decor, plush rugs, photorealistic",
          img5: "PROMPT: Rooftop cafe in Shahpur Jat Delhi, plants everywhere, string lights, indie music vibe, photorealistic"
        },
        amenities: ["WiFi", "Art Supplies", "Kitchen", "Bicycle Rental"],
        host: { name: "Meera", joinedYear: 2020, responseRate: "92%" }
      },
      {
        id: 107,
        title: "Serviced Apartment in Dwarka",
        location: "Dwarka Sector 10, Delhi",
        price: 1600,
        rating: 4.3,
        reviews: 78,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "8 km from center",
        images: {
          main: "PROMPT: Clean serviced apartment living room in Dwarka Delhi, comfortable sofa, TV unit, neat and modern decor, photorealistic Airbnb listing",
          img2: "PROMPT: Twin bedroom in a Delhi serviced apartment, two single beds, white linen, storage wardrobe, photorealistic",
          img3: "PROMPT: Modern apartment complex in Dwarka Delhi, manicured gardens, parking area, daytime photorealistic exterior",
          img4: "PROMPT: Well-equipped kitchen in a Delhi serviced apartment, microwave, fridge, dining table for four, photorealistic",
          img5: "PROMPT: Evening view of Dwarka Delhi residential area, wide roads, apartment towers with lights on, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Daily Housekeeping"],
        host: { name: "Amit", joinedYear: 2019, responseRate: "88%" }
      },
      {
        id: 108,
        title: "Boutique Room in Diplomatic Enclave",
        location: "Chanakyapuri, New Delhi",
        price: 4100,
        rating: 4.7,
        reviews: 99,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near India Gate",
        images: {
          main: "PROMPT: Elegant boutique hotel room in Chanakyapuri New Delhi, diplomatic enclave area, colonial-modern decor, luxurious bedding, photorealistic Airbnb style",
          img2: "PROMPT: Luxury bathroom in a Delhi boutique room, freestanding bathtub, marble tiles, high-end toiletries, photorealistic",
          img3: "PROMPT: India Gate New Delhi at sunset, iconic war memorial, orange sky, manicured lawns, photorealistic",
          img4: "PROMPT: Tree-lined Chanakyapuri boulevard in New Delhi, embassies visible behind walls, quiet elite neighborhood, photorealistic",
          img5: "PROMPT: Boutique hotel garden seating area in Delhi, white garden furniture, lush greenery, morning light, photorealistic"
        },
        amenities: ["WiFi", "Room Service", "Breakfast", "Air Conditioning", "Parking"],
        host: { name: "Neha", joinedYear: 2016, responseRate: "99%" }
      },
      {
        id: 109,
        title: "Compact Studio near IIT Delhi",
        location: "Safdarjung Enclave, Delhi",
        price: 1400,
        rating: 4.2,
        reviews: 44,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "1 km from IIT Delhi",
        images: {
          main: "PROMPT: Compact studio apartment near IIT Delhi, modern student-friendly decor, study desk, single bed, clean and bright, photorealistic Airbnb listing",
          img2: "PROMPT: Study workspace in a compact Delhi studio, wooden desk, laptop, bookshelves, good natural light, photorealistic",
          img3: "PROMPT: IIT Delhi campus main gate, green campus, students walking, daytime photorealistic",
          img4: "PROMPT: Small modern kitchen in a Delhi studio apartment, compact appliances, efficient layout, photorealistic",
          img5: "PROMPT: Safdarjung Enclave Delhi neighborhood, tree-lined residential streets, morning walk atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Study Desk", "Kitchen"],
        host: { name: "Kavya", joinedYear: 2023, responseRate: "80%" }
      },
      {
        id: 110,
        title: "Traditional Haveli Stay",
        location: "Civil Lines, Old Delhi",
        price: 2900,
        rating: 4.6,
        reviews: 155,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "3 km from Red Fort",
        images: {
          main: "PROMPT: Grand traditional haveli interior in Civil Lines Old Delhi, ornate arches, Mughal-inspired decor, central courtyard, warm lighting, photorealistic Airbnb listing",
          img2: "PROMPT: Ornate Mughal-style bedroom in an Old Delhi haveli, carved wooden bed, silk curtains, chandelier, photorealistic",
          img3: "PROMPT: Haveli rooftop Delhi at night with view of old city, distant minarets, lantern lighting, photorealistic",
          img4: "PROMPT: Traditional Indian dining room in a haveli, low wooden table, floor cushions, brass utensils, warm decor, photorealistic",
          img5: "PROMPT: Haveli courtyard in Old Delhi with a central fountain, potted plants, mosaic tiles, natural sunlight, photorealistic"
        },
        amenities: ["WiFi", "Breakfast Included", "Air Conditioning", "Heritage Tour", "Rooftop Access"],
        host: { name: "Rajiv", joinedYear: 2015, responseRate: "96%" }
      }
    ]
  },

  {
    city: "Punjab",
    listings: [
      {
        id: 201,
        title: "Golden Temple View Guesthouse",
        location: "Amritsar, Punjab",
        price: 2200,
        rating: 4.9,
        reviews: 310,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "0.3 km from Golden Temple",
        images: {
          main: "PROMPT: Cozy guesthouse room with window view of Golden Temple Amritsar at golden hour, traditional Punjabi decor, warm interiors, photorealistic Airbnb listing",
          img2: "PROMPT: Golden Temple Amritsar reflection in sacred pool at sunset, golden glow on water, pilgrims around, photorealistic",
          img3: "PROMPT: Traditional Punjabi bedroom with phulkari embroidery cushions, wooden furniture, warm lighting, photorealistic",
          img4: "PROMPT: Amritsar street near Golden Temple, langar food stalls, busy devotees, vibrant atmosphere, photorealistic",
          img5: "PROMPT: Rooftop view of Amritsar old city with Golden Temple dome visible, evening sky, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Air Conditioning", "Temple View"],
        host: { name: "Gurpreet", joinedYear: 2018, responseRate: "99%" }
      },
      {
        id: 202,
        title: "Farmhouse Stay near Ludhiana",
        location: "Ludhiana Outskirts, Punjab",
        price: 3100,
        rating: 4.7,
        reviews: 88,
        beds: 4,
        guests: 8,
        bathrooms: 3,
        isSuperHost: true,
        distance: "15 km from Ludhiana city",
        images: {
          main: "PROMPT: Beautiful Punjabi farmhouse exterior, lush green mustard fields, traditional architecture, golden sunlight, photorealistic Airbnb listing",
          img2: "PROMPT: Farmhouse bedroom in Punjab, rustic wooden decor, handwoven blankets, window with mustard field view, photorealistic",
          img3: "PROMPT: Outdoor barbecue setup at a Punjab farmhouse, bonfire, clay pots, rural Punjab landscape, photorealistic",
          img4: "PROMPT: Traditional Punjabi kitchen with tandoor oven, clay pots, a woman making roti, warm rural atmosphere, photorealistic",
          img5: "PROMPT: Punjab mustard fields at sunrise, bright yellow flowers, misty morning, farmer in background, photorealistic"
        },
        amenities: ["WiFi", "Bonfire", "Breakfast", "Farm Activities", "Parking"],
        host: { name: "Harjinder", joinedYear: 2020, responseRate: "95%" }
      },
      {
        id: 203,
        title: "Modern Apartment in Chandigarh",
        location: "Sector 17, Chandigarh",
        price: 2400,
        rating: 4.5,
        reviews: 102,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Central Chandigarh",
        images: {
          main: "PROMPT: Modern apartment living room in Sector 17 Chandigarh, clean minimalist design, large windows, city view, photorealistic Airbnb listing",
          img2: "PROMPT: Master bedroom in a Chandigarh apartment, contemporary furniture, warm tones, city view balcony, photorealistic",
          img3: "PROMPT: Chandigarh Sector 17 plaza, wide pedestrian walkway, fountains, modern buildings, people walking, photorealistic",
          img4: "PROMPT: Sukhna Lake Chandigarh, calm water, Shivalik hills in background, morning joggers, photorealistic",
          img5: "PROMPT: Rock Garden Chandigarh, sculptures made from industrial waste, colorful mosaic, unique installation art, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Gym"],
        host: { name: "Simran", joinedYear: 2019, responseRate: "93%" }
      },
      {
        id: 204,
        title: "Heritage Haveli in Patiala",
        location: "Patiala Old City, Punjab",
        price: 2800,
        rating: 4.6,
        reviews: 74,
        beds: 3,
        guests: 5,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Qila Mubarak",
        images: {
          main: "PROMPT: Royal heritage haveli room in Patiala Punjab, Sikh-Rajput architecture, ornate ceilings, royal decor, photorealistic Airbnb listing",
          img2: "PROMPT: Patiala haveli courtyard with royal arches, flowering creepers, vintage brass lamps, afternoon light, photorealistic",
          img3: "PROMPT: Qila Mubarak Patiala Punjab, historic fort exterior, arched gateways, Punjabi architecture, photorealistic",
          img4: "PROMPT: Patiala style bedroom, rich silk bedding, mirror work cushions, royal blue and gold tones, photorealistic",
          img5: "PROMPT: Patiala old city bazaar, traditional shops, embroidered Patiala suits on display, busy street, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Heritage Tour", "Rooftop"],
        host: { name: "Balwinder", joinedYear: 2017, responseRate: "91%" }
      },
      {
        id: 205,
        title: "Cozy Room near Wagah Border",
        location: "Attari, Amritsar District",
        price: 1200,
        rating: 4.3,
        reviews: 56,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "2 km from Wagah Border",
        images: {
          main: "PROMPT: Cozy budget guesthouse room near Wagah Border Amritsar, clean simple decor, Indian flag painting on wall, photorealistic Airbnb listing",
          img2: "PROMPT: Wagah Border ceremony Punjab India Pakistan border, soldiers marching, crowd cheering, flags, photorealistic",
          img3: "PROMPT: Small guesthouse courtyard near Amritsar, plastic chairs, jasmine plants, evening light, photorealistic",
          img4: "PROMPT: Local Punjabi dhaba near Wagah, dal makhani, tandoori roti, traditional food spread, photorealistic",
          img5: "PROMPT: Punjab countryside road near Attari, flat agricultural land, tractors, sunny day, photorealistic"
        },
        amenities: ["WiFi", "Parking", "Breakfast"],
        host: { name: "Manjeet", joinedYear: 2022, responseRate: "82%" }
      },
      {
        id: 206,
        title: "Luxury Villa in Mohali",
        location: "Phase 7, Mohali",
        price: 5500,
        rating: 4.8,
        reviews: 143,
        beds: 4,
        guests: 8,
        bathrooms: 4,
        isSuperHost: true,
        distance: "Near PCA Stadium",
        images: {
          main: "PROMPT: Luxury villa exterior in Mohali Punjab, large front garden, modern architecture, swimming pool visible, evening lighting, photorealistic Airbnb listing",
          img2: "PROMPT: Luxury villa living room in Mohali, high ceilings, designer sofa, home theatre, marble flooring, photorealistic",
          img3: "PROMPT: Private swimming pool in a Mohali villa, turquoise water, sun loungers, palm trees, photorealistic",
          img4: "PROMPT: Master bedroom in Mohali villa, king bed, walk-in closet, spa bathroom attached, photorealistic",
          img5: "PROMPT: Mohali Punjab cityscape, wide roads, IT companies, modern buildings, daytime aerial photorealistic shot"
        },
        amenities: ["WiFi", "Private Pool", "Gym", "Air Conditioning", "Kitchen", "BBQ", "Parking"],
        host: { name: "Navdeep", joinedYear: 2016, responseRate: "98%" }
      },
      {
        id: 207,
        title: "Homestay near Anandpur Sahib",
        location: "Anandpur Sahib, Punjab",
        price: 1500,
        rating: 4.4,
        reviews: 39,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "1 km from Takht",
        images: {
          main: "PROMPT: Warm Punjabi homestay room near Anandpur Sahib, traditional wooden furniture, Sikh art on wall, homely atmosphere, photorealistic",
          img2: "PROMPT: Anandpur Sahib Gurdwara majestic view, white domes, Shivalik hills backdrop, pilgrims, photorealistic",
          img3: "PROMPT: Punjabi home kitchen with fresh roti on tawa, dal, pickles, homemade food, warm lighting, photorealistic",
          img4: "PROMPT: Anandpur Sahib landscape, Sutlej river visible below, hill fort, lush trees, photorealistic",
          img5: "PROMPT: Hola Mohalla festival glimpse Anandpur Sahib, Nihang Sikhs in traditional blue dress, horses, photorealistic"
        },
        amenities: ["WiFi", "Home Cooked Meals", "Air Cooling", "Parking"],
        host: { name: "Sukhwinder", joinedYear: 2021, responseRate: "87%" }
      },
      {
        id: 208,
        title: "Studio Flat in Jalandhar",
        location: "Model Town, Jalandhar",
        price: 1100,
        rating: 4.0,
        reviews: 29,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "3 km from Jalandhar center",
        images: {
          main: "PROMPT: Clean studio flat in Model Town Jalandhar Punjab, simple modern furniture, neat bedroom, good natural light, photorealistic Airbnb listing",
          img2: "PROMPT: Studio apartment workspace in Jalandhar, small desk, chair, window with garden view, photorealistic",
          img3: "PROMPT: Model Town Jalandhar residential area, tree-lined streets, bungalows, peaceful neighborhood, photorealistic",
          img4: "PROMPT: Simple bathroom in a Jalandhar studio flat, clean white tiles, shower, basic amenities, photorealistic",
          img5: "PROMPT: Jalandhar sports goods market, cricket bats and equipment on display, busy street shops, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen"],
        host: { name: "Diljit", joinedYear: 2023, responseRate: "78%" }
      },
      {
        id: 209,
        title: "Eco Cottage near Ropar Wetlands",
        location: "Ropar, Punjab",
        price: 2600,
        rating: 4.7,
        reviews: 61,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Ropar Wetland Bird Sanctuary",
        images: {
          main: "PROMPT: Eco cottage exterior near Ropar Punjab wetlands, bamboo walls, thatched roof, surrounded by trees and birds, photorealistic Airbnb listing",
          img2: "PROMPT: Eco cottage interior Punjab, natural wooden furniture, handwoven fabrics, earth tones, birdwatching binoculars on shelf, photorealistic",
          img3: "PROMPT: Ropar Wetland Punjab, migratory birds flying over lake water, misty morning, nature photography style, photorealistic",
          img4: "PROMPT: Outdoor sit-out at a Punjab eco cottage, wooden chairs, fire pit, surrounded by wild bushes and trees, photorealistic",
          img5: "PROMPT: Sutlej river banks near Ropar at sunset, golden water, fishermen, peaceful rural landscape, photorealistic"
        },
        amenities: ["WiFi", "Bird Watching", "Bonfire", "Organic Breakfast", "Cycling"],
        host: { name: "Kulwant", joinedYear: 2019, responseRate: "96%" }
      },
      {
        id: 210,
        title: "Business Hotel Room in Ludhiana",
        location: "Ferozepur Road, Ludhiana",
        price: 1900,
        rating: 4.2,
        reviews: 83,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Industrial Hub",
        images: {
          main: "PROMPT: Business hotel room in Ludhiana Punjab, clean and professional interior, work desk, double bed, city view, photorealistic Airbnb listing",
          img2: "PROMPT: Hotel room work desk in Ludhiana, laptop setup, ergonomic chair, phone, notepad, photorealistic",
          img3: "PROMPT: Ludhiana city view from hotel window, busy Ferozepur Road, industrial city atmosphere, daytime photorealistic",
          img4: "PROMPT: Hotel bathroom in Ludhiana Punjab, clean white tiles, shower, good lighting, toiletries, photorealistic",
          img5: "PROMPT: Ludhiana hosiery market, woolen garment shops, busy commercial area, Punjab textile hub vibes, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Room Service", "Parking", "Laundry"],
        host: { name: "Paramjit", joinedYear: 2020, responseRate: "89%" }
      }
    ]
  },

  {
    city: "Chennai",
    listings: [
      {
        id: 301,
        title: "Beachside Villa on ECR",
        location: "East Coast Road, Chennai",
        price: 4500,
        rating: 4.8,
        reviews: 187,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Directly on beach",
        images: {
          main: "PROMPT: Stunning beachside villa on East Coast Road Chennai Tamil Nadu, white exterior, palm trees, Bay of Bengal visible, golden sunset, photorealistic Airbnb listing",
          img2: "PROMPT: Villa living room with sea view, rattan furniture, open doors to beach, ocean breeze feel, photorealistic",
          img3: "PROMPT: Private beach in front of an ECR Chennai villa, golden sand, calm sea, beach chairs and umbrella, photorealistic",
          img4: "PROMPT: Master bedroom in a Chennai beach villa, white linen, ceiling fan, sound of waves, sea view window, photorealistic",
          img5: "PROMPT: East Coast Road Chennai at sunrise, long coastal highway, sea on one side, palms on the other, photorealistic"
        },
        amenities: ["WiFi", "Private Beach", "Air Conditioning", "Kitchen", "BBQ", "Parking"],
        host: { name: "Arjun", joinedYear: 2017, responseRate: "97%" }
      },
      {
        id: 302,
        title: "Traditional Tamil Home in Mylapore",
        location: "Mylapore, Chennai",
        price: 2100,
        rating: 4.6,
        reviews: 131,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Kapaleeshwarar Temple",
        images: {
          main: "PROMPT: Traditional Tamil Nadu home interior in Mylapore Chennai, Chettinad-style decor, antique wooden furniture, brass lamps, kolam on floor, photorealistic Airbnb listing",
          img2: "PROMPT: Kapaleeshwarar Temple Mylapore Chennai, colorful gopuram with sculptures, morning light, devotees, photorealistic",
          img3: "PROMPT: Traditional Tamil bedroom with wooden carved bed, silk pillow covers, jasmine flowers in a vase, photorealistic",
          img4: "PROMPT: Mylapore street morning, flower sellers, small tea stalls, temple tank visible, vibrant Tamil culture, photorealistic",
          img5: "PROMPT: Traditional South Indian courtyard home in Chennai, central open courtyard, tulsi plant, mosaic floor, photorealistic"
        },
        amenities: ["WiFi", "South Indian Breakfast", "Air Conditioning", "Courtyard Access"],
        host: { name: "Lakshmi", joinedYear: 2018, responseRate: "96%" }
      },
      {
        id: 303,
        title: "Modern Flat in Anna Nagar",
        location: "Anna Nagar, Chennai",
        price: 2600,
        rating: 4.5,
        reviews: 94,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "4 km from center",
        images: {
          main: "PROMPT: Modern flat living room in Anna Nagar Chennai, clean white walls, comfortable sofa, Tamil movie poster art, photorealistic Airbnb listing",
          img2: "PROMPT: Apartment bedroom in Anna Nagar Chennai, queen bed, light curtains, ceiling fan, photorealistic",
          img3: "PROMPT: Anna Nagar Tower Park Chennai, large public park, families walking, evening light, photorealistic",
          img4: "PROMPT: Modern Chennai apartment kitchen, gas stove, banana leaf on counter, South Indian groceries, photorealistic",
          img5: "PROMPT: Anna Nagar Chennai street, wide roads, restaurants and shops, evening Chennai atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "TV", "Parking"],
        host: { name: "Karthik", joinedYear: 2020, responseRate: "91%" }
      },
      {
        id: 304,
        title: "Budget Hostel near Marina Beach",
        location: "Triplicane, Chennai",
        price: 750,
        rating: 4.0,
        reviews: 220,
        beds: 1,
        guests: 1,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.8 km from Marina Beach",
        images: {
          main: "PROMPT: Clean budget hostel private room near Marina Beach Chennai, simple bed, locker, bright lights, backpacker vibe, photorealistic Airbnb listing",
          img2: "PROMPT: Marina Beach Chennai at sunrise, world's longest urban beach, joggers, golden light on waves, photorealistic",
          img3: "PROMPT: Common area in a Chennai hostel, backpackers chatting, bean bags, world map on wall, photorealistic",
          img4: "PROMPT: Chennai street food stall near Marina, murukku, sundal, juice, evening beach crowd, photorealistic",
          img5: "PROMPT: Triplicane Chennai neighborhood, narrow streets, old buildings, cycle rickshaws, morning activity, photorealistic"
        },
        amenities: ["WiFi", "Shared Kitchen", "Lockers", "Common Area"],
        host: { name: "Senthil", joinedYear: 2021, responseRate: "83%" }
      },
      {
        id: 305,
        title: "Luxury Apartment in OMR Tech Park",
        location: "Old Mahabalipuram Road, Chennai",
        price: 3800,
        rating: 4.7,
        reviews: 166,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near IT Corridor",
        images: {
          main: "PROMPT: Luxury apartment living room on OMR Chennai IT corridor, modern decor, large LED TV, city view, photorealistic Airbnb listing",
          img2: "PROMPT: Chennai OMR tech park skyline, glass buildings of IT companies, wide road, evening lights, photorealistic aerial view",
          img3: "PROMPT: Apartment gym and pool complex in OMR Chennai, rooftop pool, fitness center, modern amenities, photorealistic",
          img4: "PROMPT: Modern apartment bedroom near OMR Chennai, king bed, blackout curtains, work desk, photorealistic",
          img5: "PROMPT: Chennai sunrise from high-rise apartment OMR, Bay of Bengal visible in distance, golden morning light, photorealistic"
        },
        amenities: ["WiFi", "Pool", "Gym", "Air Conditioning", "Kitchen", "Parking", "24hr Security"],
        host: { name: "Deepa", joinedYear: 2018, responseRate: "98%" }
      },
      {
        id: 306,
        title: "Chettinad Style Heritage Stay",
        location: "T. Nagar, Chennai",
        price: 3200,
        rating: 4.8,
        reviews: 109,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Pondy Bazaar",
        images: {
          main: "PROMPT: Stunning Chettinad heritage home interior in T Nagar Chennai, antique Burma teak furniture, ornate pillars, mosaic floor, warm lighting, photorealistic Airbnb listing",
          img2: "PROMPT: Chettinad style bedroom in Chennai, antique four-poster bed, terracotta tiles, handpainted walls, photorealistic",
          img3: "PROMPT: T Nagar Pondy Bazaar Chennai, busy shopping street, silk sarees, gold shops, vibrant Tamil Nadu commerce, photorealistic",
          img4: "PROMPT: Traditional Chettinad courtyard in Chennai, open roof, brass pots, vintage furniture, photorealistic",
          img5: "PROMPT: Authentic Chettinad cuisine spread, idiyappam, prawn curry, kottu, banana leaf serving, photorealistic food"
        },
        amenities: ["WiFi", "Chettinad Breakfast", "Air Conditioning", "Heritage Decor", "Shopping Nearby"],
        host: { name: "Meenakshi", joinedYear: 2016, responseRate: "99%" }
      },
      {
        id: 307,
        title: "Studio near IIT Madras",
        location: "Adyar, Chennai",
        price: 1300,
        rating: 4.1,
        reviews: 47,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "1 km from IIT Madras",
        images: {
          main: "PROMPT: Simple studio apartment in Adyar Chennai near IIT Madras, student-friendly, clean study space, single bed, photorealistic Airbnb listing",
          img2: "PROMPT: IIT Madras campus with deer walking on path, lush greenery, colonial buildings, photorealistic",
          img3: "PROMPT: Adyar beach Chennai, quiet neighborhood beach, fishing boats, morning calm, photorealistic",
          img4: "PROMPT: Studio apartment bathroom in Chennai Adyar, clean tiles, shower, small mirror, photorealistic",
          img5: "PROMPT: Besant Nagar Elliott's Beach Chennai, evening crowd, food stalls, sea breeze, photorealistic"
        },
        amenities: ["WiFi", "Study Desk", "Air Conditioning", "Kitchen"],
        host: { name: "Ravi", joinedYear: 2022, responseRate: "84%" }
      },
      {
        id: 308,
        title: "Serene Room near Mahabalipuram",
        location: "Mahabalipuram, Chennai Region",
        price: 2900,
        rating: 4.7,
        reviews: 138,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Shore Temple",
        images: {
          main: "PROMPT: Serene boutique room near Mahabalipuram Shore Temple, sea view, terracotta decor, Tamil Nadu coastal vibe, photorealistic Airbnb listing",
          img2: "PROMPT: Mahabalipuram Shore Temple UNESCO heritage site, ancient stone carvings, sea behind, morning light, photorealistic",
          img3: "PROMPT: Scenic boutique resort room in Mahabalipuram, four-poster bed, mosquito net, stone wall, photorealistic",
          img4: "PROMPT: Mahabalipuram beach at sunrise, fishermen laying nets, golden horizon, photorealistic",
          img5: "PROMPT: Arjuna's Penance Mahabalipuram, giant bas-relief stone carving, tourists photographing, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Air Conditioning", "Heritage Site Access", "Cycling"],
        host: { name: "Parvathi", joinedYear: 2019, responseRate: "97%" }
      },
      {
        id: 309,
        title: "High-Rise Flat in Nungambakkam",
        location: "Nungambakkam, Chennai",
        price: 3500,
        rating: 4.6,
        reviews: 72,
        beds: 2,
        guests: 3,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near US Consulate",
        images: {
          main: "PROMPT: High-rise luxury flat living area in Nungambakkam Chennai, panoramic city view, modern decor, evening lights, photorealistic Airbnb listing",
          img2: "PROMPT: Nungambakkam Chennai neighborhood, embassy buildings, upscale restaurants, elite neighborhood atmosphere, photorealistic",
          img3: "PROMPT: High-rise apartment bedroom Chennai with city view, designer furniture, blackout blinds, photorealistic",
          img4: "PROMPT: Modern kitchen in a Nungambakkam Chennai apartment, island counter, pendant lights, photorealistic",
          img5: "PROMPT: Chennai Nungambakkam shopping street, boutiques and cafes, tree-lined footpath, evening walk, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Gym", "Concierge"],
        host: { name: "Vasanth", joinedYear: 2017, responseRate: "93%" }
      },
      {
        id: 310,
        title: "Backwater Cottage near Pichavaram",
        location: "Pichavaram, Tamil Nadu",
        price: 3700,
        rating: 4.9,
        reviews: 95,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Mangrove Forest",
        images: {
          main: "PROMPT: Romantic cottage on backwater edge near Pichavaram mangrove forest Tamil Nadu, wooden deck, water all around, lush greenery, photorealistic Airbnb listing",
          img2: "PROMPT: Pichavaram mangrove forest boat ride, narrow water channels through dense green trees, sunrise light, photorealistic",
          img3: "PROMPT: Cottage bedroom near Pichavaram backwaters, net curtains, wooden furniture, sounds of nature, photorealistic",
          img4: "PROMPT: Sunrise over Pichavaram backwaters Tamil Nadu, birds flying, mist on water, fishing boats, photorealistic",
          img5: "PROMPT: Outdoor deck of a backwater cottage Pichavaram, chairs facing water, mangrove reflections, evening, photorealistic"
        },
        amenities: ["WiFi", "Boat Ride", "Fishing", "Organic Meals", "Nature Walk"],
        host: { name: "Muthu", joinedYear: 2018, responseRate: "98%" }
      }
    ]
  },

  {
    city: "Bhopal",
    listings: [
      {
        id: 401,
        title: "Lakeside Villa near Upper Lake",
        location: "VIP Road, Bhopal",
        price: 3400,
        rating: 4.7,
        reviews: 103,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Directly on Upper Lake",
        images: {
          main: "PROMPT: Elegant lakeside villa near Upper Lake Bhopal Madhya Pradesh, green lawn, jetty, calm water reflection, photorealistic Airbnb listing",
          img2: "PROMPT: Upper Lake Bhopal at golden sunrise, vast water body, mist, birds flying, photorealistic",
          img3: "PROMPT: Lakeside villa living room Bhopal, large windows with lake view, comfortable furniture, photorealistic",
          img4: "PROMPT: Private boat dock of a Bhopal villa, small rowboat tied, lake all around, evening light, photorealistic",
          img5: "PROMPT: Bhopal Upper Lake sunset, orange sky, silhouettes of trees and birds, boating in distance, photorealistic"
        },
        amenities: ["WiFi", "Boating", "Lake View", "Kitchen", "Parking", "BBQ"],
        host: { name: "Abhishek", joinedYear: 2017, responseRate: "96%" }
      },
      {
        id: 402,
        title: "Heritage Stay near Taj-ul-Masajid",
        location: "Old Bhopal",
        price: 1900,
        rating: 4.5,
        reviews: 67,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.5 km from Taj-ul-Masajid",
        images: {
          main: "PROMPT: Traditional Nawabi architecture guesthouse interior in Old Bhopal, carved wooden doors, Indo-Islamic decor, warm lighting, photorealistic Airbnb listing",
          img2: "PROMPT: Taj-ul-Masajid Bhopal, one of India's largest mosques, white minarets, reflecting pool, blue sky, photorealistic",
          img3: "PROMPT: Old Bhopal chowk area, Nawabi era buildings, busy bazaar, evening lanterns, photorealistic",
          img4: "PROMPT: Heritage bedroom in Old Bhopal guesthouse, four-poster bed, punkha fan decor, antique mirror, photorealistic",
          img5: "PROMPT: Bhopal old city rooftop, minaret and lake view, evening azaan atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Heritage Tour", "Rooftop"],
        host: { name: "Shahnawaz", joinedYear: 2019, responseRate: "90%" }
      },
      {
        id: 403,
        title: "Modern Flat in New Bhopal",
        location: "Arera Colony, Bhopal",
        price: 1800,
        rating: 4.3,
        reviews: 58,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "3 km from Bhopal center",
        images: {
          main: "PROMPT: Modern apartment in Arera Colony Bhopal, spacious living room, contemporary furniture, good ventilation, photorealistic Airbnb listing",
          img2: "PROMPT: Bhopal Arera Colony neighborhood, tree-lined residential street, bungalows and apartments, clean area, photorealistic",
          img3: "PROMPT: Apartment bedroom Bhopal, queen bed, study desk, bright morning light, photorealistic",
          img4: "PROMPT: Modern kitchen in a Bhopal flat, clean countertops, Indian cooking setup, photorealistic",
          img5: "PROMPT: View from Bhopal Arera Colony apartment balcony, city greenery, distant lakes visible, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking"],
        host: { name: "Pooja", joinedYear: 2021, responseRate: "88%" }
      },
      {
        id: 404,
        title: "Forest Retreat near Ratapani",
        location: "Ratapani, near Bhopal",
        price: 4200,
        rating: 4.8,
        reviews: 89,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Ratapani Wildlife Sanctuary",
        images: {
          main: "PROMPT: Safari-style forest cottage near Ratapani Wildlife Sanctuary Bhopal, tented lodge, surrounded by Sal trees, wildlife atmosphere, photorealistic Airbnb listing",
          img2: "PROMPT: Ratapani forest Bhopal, dappled sunlight through Sal trees, tiger paw print on mud track, photorealistic",
          img3: "PROMPT: Jungle lodge bedroom Ratapani, canvas walls, camp bed, mosquito net, lantern light, photorealistic",
          img4: "PROMPT: Forest campfire evening at Ratapani, log seating, tea in clay cups, jungle sounds, photorealistic",
          img5: "PROMPT: Ratapani lake inside forest, reflection of trees, deer drinking water, golden morning light, photorealistic"
        },
        amenities: ["WiFi", "Jeep Safari", "Bonfire", "Organic Meals", "Nature Walk"],
        host: { name: "Sanjay", joinedYear: 2018, responseRate: "97%" }
      },
      {
        id: 405,
        title: "Budget Room near Bus Stand",
        location: "Nadra Bus Stand, Bhopal",
        price: 700,
        rating: 3.9,
        reviews: 43,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Bus Stand",
        images: {
          main: "PROMPT: Clean budget hotel room near Bhopal bus stand, simple bed, fan, basic amenities, well lit, photorealistic Airbnb listing",
          img2: "PROMPT: Bhopal bus stand area, busy road, rickshaws, tea stalls, typical Indian small city transport hub, photorealistic",
          img3: "PROMPT: Small hotel room bathroom in Bhopal, basic tiles, bucket bath option, functional, photorealistic",
          img4: "PROMPT: Bhopal local street food, poha jalebi breakfast stall, morning crowd, photorealistic",
          img5: "PROMPT: Bhopal city view from rooftop, mosque minarets, lake glint in distance, midday photorealistic"
        },
        amenities: ["WiFi", "Fan", "TV"],
        host: { name: "Ramesh", joinedYear: 2022, responseRate: "77%" }
      },
      {
        id: 406,
        title: "Eco Stay near Bhojpur Temple",
        location: "Bhojpur, Bhopal District",
        price: 2200,
        rating: 4.5,
        reviews: 51,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "1 km from Bhojeshwar Temple",
        images: {
          main: "PROMPT: Eco stay cottage near Bhojpur temple Madhya Pradesh, stone and mud walls, garden, peaceful countryside, photorealistic Airbnb listing",
          img2: "PROMPT: Bhojeshwar Temple Bhojpur MP, massive Shiva lingam visible through doorway, ancient stone temple, photorealistic",
          img3: "PROMPT: Eco cottage bedroom Bhojpur, natural wood furniture, local art on walls, serene atmosphere, photorealistic",
          img4: "PROMPT: Betwa river near Bhojpur Bhopal, clear water, rocks, green banks, sunset, photorealistic",
          img5: "PROMPT: Archaeological site of Bhojpur Cyclopean dam ruins, massive ancient engineering, MP countryside, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Temple Walk", "Nature Trails"],
        host: { name: "Mahesh", joinedYear: 2020, responseRate: "91%" }
      },
      {
        id: 407,
        title: "Royal Mansion near Van Vihar",
        location: "Shyamla Hills, Bhopal",
        price: 5200,
        rating: 4.9,
        reviews: 127,
        beds: 4,
        guests: 8,
        bathrooms: 3,
        isSuperHost: true,
        distance: "Near Van Vihar National Park",
        images: {
          main: "PROMPT: Royal mansion exterior in Shyamla Hills Bhopal, colonial-Nawabi architecture, large garden, sunset backdrop, photorealistic Airbnb listing",
          img2: "PROMPT: Royal mansion interior Bhopal, grand staircase, chandelier, vintage photographs, polished floor, photorealistic",
          img3: "PROMPT: Van Vihar National Park Bhopal, lions and tigers in natural enclosure, Upper Lake background, photorealistic",
          img4: "PROMPT: Mansion bedroom in Bhopal, royal canopy bed, antique writing desk, courtyard window view, photorealistic",
          img5: "PROMPT: Shyamla Hills Bhopal panorama, Upper Lake, Tribal Museum, greenery, morning mist, photorealistic aerial"
        },
        amenities: ["WiFi", "Chef", "Garden", "Air Conditioning", "Parking", "Heritage Library"],
        host: { name: "Zubair", joinedYear: 2015, responseRate: "99%" }
      },
      {
        id: 408,
        title: "Cozy Apartment near Indira Gandhi National Museum",
        location: "Shamla Hills, Bhopal",
        price: 2000,
        rating: 4.4,
        reviews: 49,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Tribal Museum",
        images: {
          main: "PROMPT: Cozy apartment in Shamla Hills Bhopal, overlooking green hills, warm interior, comfortable living space, photorealistic Airbnb listing",
          img2: "PROMPT: Indira Gandhi Rashtriya Manav Sangrahalaya Bhopal, tribal art installations in open air, lush green campus, photorealistic",
          img3: "PROMPT: Apartment bedroom Bhopal hills area, window with treetop view, simple modern furniture, photorealistic",
          img4: "PROMPT: Bhopal hills walking trail, tribal artifacts displayed outdoors, forested path, visitors exploring, photorealistic",
          img5: "PROMPT: Evening in Shamla Hills Bhopal, amber streetlights, quiet residential roads, lake visible below, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Museum Nearby"],
        host: { name: "Alka", joinedYear: 2021, responseRate: "86%" }
      },
      {
        id: 409,
        title: "Peaceful Homestay in Kerwa Village",
        location: "Kerwa, Bhopal Outskirts",
        price: 1600,
        rating: 4.6,
        reviews: 38,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Kerwa Dam",
        images: {
          main: "PROMPT: Peaceful village homestay near Kerwa Dam Bhopal, mud house exterior, trees, birds, fresh country air atmosphere, photorealistic Airbnb listing",
          img2: "PROMPT: Kerwa Dam Bhopal, small reservoir in forest, walking trails, picnic families, photorealistic",
          img3: "PROMPT: Village homestay bedroom Bhopal, charpai bed, handmade quilt, oil lamp, rustic decor, photorealistic",
          img4: "PROMPT: Home garden of a Bhopal village homestay, vegetable patch, guava tree, morning dew, photorealistic",
          img5: "PROMPT: Bhopal village sunrise, mud homes, cows on road, mist in trees, serene rural MP India, photorealistic"
        },
        amenities: ["Home Cooked Meals", "Farm Walk", "Bonfire", "Village Cycling"],
        host: { name: "Geeta", joinedYear: 2023, responseRate: "81%" }
      },
      {
        id: 410,
        title: "Smart Studio near DB City Mall",
        location: "MP Nagar, Bhopal",
        price: 1500,
        rating: 4.2,
        reviews: 61,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near DB City Mall",
        images: {
          main: "PROMPT: Smart studio apartment in MP Nagar Bhopal near DB City Mall, modern smart home decor, work friendly, photorealistic Airbnb listing",
          img2: "PROMPT: DB City Mall Bhopal exterior, modern shopping mall, busy entrance, evening lights, photorealistic",
          img3: "PROMPT: Studio apartment workstation setup Bhopal, monitor, plants, wooden desk, window light, photorealistic",
          img4: "PROMPT: Compact studio kitchen Bhopal, microwave, induction stove, neat setup, photorealistic",
          img5: "PROMPT: MP Nagar Bhopal commercial area, wide roads, restaurants and shops, evening crowd, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Smart TV", "Laundry"],
        host: { name: "Vivek", joinedYear: 2022, responseRate: "89%" }
      }
    ]
  },

  {
    city: "Lucknow",
    listings: [
      {
        id: 501,
        title: "Nawabi Haveli in Hazratganj",
        location: "Hazratganj, Lucknow",
        price: 3600,
        rating: 4.8,
        reviews: 143,
        beds: 3,
        guests: 5,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near British Residency",
        images: {
          main: "PROMPT: Grand Nawabi haveli interior in Hazratganj Lucknow, ornate arches, Persian carpet, chandeliers, Indo-Islamic architecture, photorealistic Airbnb listing",
          img2: "PROMPT: Bara Imambara Lucknow, iconic Nawabi monument, crowded entrance, photorealistic",
          img3: "PROMPT: Nawabi bedroom in a Lucknow haveli, carved wooden bed, silk cushions, gold-accented walls, photorealistic",
          img4: "PROMPT: Hazratganj Lucknow promenade, colonial buildings, book shops, evening crowd, photorealistic",
          img5: "PROMPT: Lucknow Rumi Darwaza, iconic Turkish gateway, evening illumination, photorealistic"
        },
        amenities: ["WiFi", "Nawabi Breakfast", "Air Conditioning", "Heritage Tour", "Rooftop"],
        host: { name: "Nawab", joinedYear: 2016, responseRate: "98%" }
      },
      {
        id: 502,
        title: "Modern Service Apartment in Gomti Nagar",
        location: "Gomti Nagar, Lucknow",
        price: 2300,
        rating: 4.5,
        reviews: 97,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Gomti Riverfront",
        images: {
          main: "PROMPT: Contemporary service apartment in Gomti Nagar Lucknow, modern living area, Gomti river view, clean decor, photorealistic Airbnb listing",
          img2: "PROMPT: Gomti Riverfront Lucknow, evening lights reflected on river, footpath, families strolling, photorealistic",
          img3: "PROMPT: Service apartment bedroom Lucknow, king bed, blackout curtains, modern wardrobe, photorealistic",
          img4: "PROMPT: Modern kitchen in Lucknow service apartment, fully equipped, clean countertops, photorealistic",
          img5: "PROMPT: Gomti Nagar Lucknow commercial hub, wide streets, malls, restaurants, evening light, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Gym"],
        host: { name: "Tanvir", joinedYear: 2019, responseRate: "92%" }
      },
      {
        id: 503,
        title: "Boutique Stay near Aminabad Market",
        location: "Aminabad, Lucknow",
        price: 1700,
        rating: 4.4,
        reviews: 81,
        beds: 2,
        guests: 3,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Inside Old Lucknow",
        images: {
          main: "PROMPT: Boutique stay room in Aminabad Lucknow, chikankari fabric decor, traditional UP interior, courtyard visible, photorealistic Airbnb listing",
          img2: "PROMPT: Aminabad market Lucknow, chikankari shops, busy lanes, embroidery on display, photorealistic",
          img3: "PROMPT: Boutique room Lucknow, white chikankari bedsheet, carved mirror, brass lamps, photorealistic",
          img4: "PROMPT: Lucknow Tunday Kababi famous shop, seekh kebabs on grill, smoke, crowd outside, photorealistic",
          img5: "PROMPT: Lucknow rooftop view old city, narrow lanes, mosques, Imambaras, evening azan time, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Chikankari Shopping Nearby", "Breakfast"],
        host: { name: "Farida", joinedYear: 2020, responseRate: "90%" }
      },
      {
        id: 504,
        title: "Spacious Villa in Viraj Khand",
        location: "Viraj Khand, Lucknow",
        price: 5000,
        rating: 4.8,
        reviews: 132,
        beds: 4,
        guests: 8,
        bathrooms: 4,
        isSuperHost: true,
        distance: "Near Indira Gandhi Pratishthan",
        images: {
          main: "PROMPT: Spacious modern villa exterior in Viraj Khand Lucknow, large garden, private pool, evening lit facade, photorealistic Airbnb listing",
          img2: "PROMPT: Villa living room Lucknow, double height ceiling, leather sofa, chandelier, photorealistic",
          img3: "PROMPT: Private garden pool of a Lucknow villa, lush green lawn, BBQ corner, daytime photorealistic",
          img4: "PROMPT: Villa master bedroom Lucknow, king bed, attached dressing room, walk-in wardrobe, photorealistic",
          img5: "PROMPT: Viraj Khand Lucknow upscale neighborhood, wide tree-lined roads, bungalows, morning atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Private Pool", "Chef", "Gym", "Parking", "BBQ"],
        host: { name: "Raheel", joinedYear: 2017, responseRate: "97%" }
      },
      {
        id: 505,
        title: "Budget Stay near Charbagh Station",
        location: "Charbagh, Lucknow",
        price: 850,
        rating: 3.8,
        reviews: 55,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.3 km from Charbagh Railway",
        images: {
          main: "PROMPT: Clean budget guesthouse near Charbagh Railway Station Lucknow, simple tidy room, fan, easy access location, photorealistic Airbnb listing",
          img2: "PROMPT: Charbagh Railway Station Lucknow, one of India's most beautiful stations, Rajput-Mughal architecture, photorealistic",
          img3: "PROMPT: Budget hotel room interior Lucknow, single bed, TV, simple decor, decent lighting, photorealistic",
          img4: "PROMPT: Lucknow street food near Charbagh, biryani stalls, kulfi vendors, evening activity, photorealistic",
          img5: "PROMPT: Lucknow Charbagh area at night, station illuminated, auto rickshaws lined up, photorealistic"
        },
        amenities: ["WiFi", "Fan", "TV", "24hr Checkout"],
        host: { name: "Arvind", joinedYear: 2023, responseRate: "79%" }
      },
      {
        id: 506,
        title: "Garden Cottage in Sitapur Road Zone",
        location: "Sitapur Road, Lucknow",
        price: 2700,
        rating: 4.6,
        reviews: 68,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Lucknow Zoo",
        images: {
          main: "PROMPT: Charming garden cottage in Sitapur Road Lucknow, white cottage exterior, flower garden, morning sun, photorealistic Airbnb listing",
          img2: "PROMPT: Garden cottage bedroom Lucknow, floral bedsheets, curtains with garden view, wooden floor, photorealistic",
          img3: "PROMPT: Lucknow Zoo Prince of Wales garden entrance, old British-era architecture, trees, photorealistic",
          img4: "PROMPT: Private garden of a Lucknow cottage, rose beds, sitting area, evening light, photorealistic",
          img5: "PROMPT: Lucknow morning, wide tree-canopied road, cycling, peaceful neighborhood, photorealistic"
        },
        amenities: ["WiFi", "Garden Access", "Breakfast", "Air Conditioning", "Parking"],
        host: { name: "Sunita", joinedYear: 2018, responseRate: "94%" }
      },
      {
        id: 507,
        title: "Rooftop Studio in Old Lucknow",
        location: "Nakkhas, Lucknow",
        price: 1400,
        rating: 4.3,
        reviews: 44,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Chota Imambara",
        images: {
          main: "PROMPT: Quirky rooftop studio in old Lucknow Nakkhas area, heritage building, Nawabi city view, twinkling lights, photorealistic Airbnb listing",
          img2: "PROMPT: Chota Imambara Lucknow Hussainabad, golden domes, chandelier light, evening illumination, photorealistic",
          img3: "PROMPT: Rooftop studio room Lucknow, minimalist decor, skylight, old city visible from window, photorealistic",
          img4: "PROMPT: Lucknow old city evening aerial, minarets, bazaar streets, warm streetlights, photorealistic",
          img5: "PROMPT: Nakkhas antique market Lucknow, vintage items, old furniture, colonial era artifacts, photorealistic"
        },
        amenities: ["WiFi", "Air Cooling", "Rooftop View", "Nearby Heritage Sites"],
        host: { name: "Waris", joinedYear: 2021, responseRate: "85%" }
      },
      {
        id: 508,
        title: "Corporate Flat in Aliganj",
        location: "Aliganj, Lucknow",
        price: 2100,
        rating: 4.2,
        reviews: 73,
        beds: 2,
        guests: 3,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near SGPGI Hospital",
        images: {
          main: "PROMPT: Clean corporate apartment in Aliganj Lucknow, professional interior, work desk setup, near hospital zone, photorealistic Airbnb listing",
          img2: "PROMPT: SGPGI Hospital Lucknow complex, large medical campus, greenery, modern buildings, photorealistic",
          img3: "PROMPT: Corporate apartment bedroom Lucknow, neat queen bed, desk, attached bathroom, photorealistic",
          img4: "PROMPT: Aliganj Lucknow residential area, markets, schools, busy weekday morning, photorealistic",
          img5: "PROMPT: Corporate flat kitchen Lucknow, induction cooktop, microwave, small dining table, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Laundry", "Parking"],
        host: { name: "Sanjeev", joinedYear: 2020, responseRate: "88%" }
      },
      {
        id: 509,
        title: "Eco Resort near Kukrail Forest",
        location: "Kukrail Reserve Forest, Lucknow",
        price: 3900,
        rating: 4.8,
        reviews: 91,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Kukrail Forest Zone",
        images: {
          main: "PROMPT: Eco resort cottage inside Kukrail Reserve Forest Lucknow, wooden bungalow, dense trees, crocodile sanctuary nearby, photorealistic Airbnb listing",
          img2: "PROMPT: Kukrail Picnic Spot Lucknow, forest path, families on picnic, dappled light through trees, photorealistic",
          img3: "PROMPT: Eco cottage bedroom inside Lucknow forest, bamboo furniture, nature art, sounds of birds, photorealistic",
          img4: "PROMPT: Kukrail Gharial Crocodile Rehabilitation Centre, crocodiles near water, forest setting, photorealistic",
          img5: "PROMPT: Evening bonfire at Kukrail forest Lucknow resort, logs, clay cups, crickets chirping, photorealistic"
        },
        amenities: ["WiFi", "Nature Walk", "Bonfire", "Organic Meals", "Bird Watching"],
        host: { name: "Deepak", joinedYear: 2019, responseRate: "96%" }
      },
      {
        id: 510,
        title: "Smart Stay in Indira Nagar",
        location: "Indira Nagar, Lucknow",
        price: 1600,
        rating: 4.1,
        reviews: 59,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "5 km from Lucknow center",
        images: {
          main: "PROMPT: Smart compact stay in Indira Nagar Lucknow, cheerful colorful decor, single room, comfortable and modern, photorealistic Airbnb listing",
          img2: "PROMPT: Indira Nagar Lucknow main market, momo stalls, fashion shops, young crowd, evening photorealistic",
          img3: "PROMPT: Smart room Lucknow Indira Nagar, LED lighting, smart speaker, minimalist, photorealistic",
          img4: "PROMPT: Compact bathroom in Lucknow smart stay, white tiles, rain shower, photorealistic",
          img5: "PROMPT: Lucknow evening city lights, wide boulevard, traffic, festive lights, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Smart TV", "Kitchen"],
        host: { name: "Ishita", joinedYear: 2022, responseRate: "83%" }
      }
    ]
  },

  {
    city: "Jaipur",
    listings: [
      {
        id: 601,
        title: "Heritage Haveli in Old City",
        location: "Near Hawa Mahal, Jaipur",
        price: 4200,
        rating: 4.9,
        reviews: 289,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "0.2 km from Hawa Mahal",
        images: {
          main: "PROMPT: Majestic pink heritage haveli interior in Old Jaipur Rajasthan, mirror-inlaid walls, carved stone arches, royal decor, photorealistic Airbnb listing",
          img2: "PROMPT: Hawa Mahal Jaipur sunrise, famous honeycomb pink facade, street below, morning light, photorealistic",
          img3: "PROMPT: Haveli rooftop Jaipur with Hawa Mahal in background, evening lights, Rajasthani decor, sunset, photorealistic",
          img4: "PROMPT: Royal Rajasthani bedroom in Jaipur haveli, Jodhpuri bed, embroidered mirror cushions, earthy tones, photorealistic",
          img5: "PROMPT: Jaipur old city street, pink stone buildings, camel, turbaned men, bazaar activity, photorealistic"
        },
        amenities: ["WiFi", "Rajasthani Breakfast", "Rooftop View", "Heritage Tour", "Air Conditioning"],
        host: { name: "Thakur", joinedYear: 2015, responseRate: "99%" }
      },
      {
        id: 602,
        title: "Boutique Desert Camp near Jaipur",
        location: "Sanganer Outskirts, Jaipur",
        price: 3500,
        rating: 4.7,
        reviews: 167,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "20 km from Jaipur center",
        images: {
          main: "PROMPT: Luxury boutique desert camp near Jaipur Rajasthan, Swiss tents, bonfire, star-filled sky, camel silhouette, photorealistic Airbnb listing",
          img2: "PROMPT: Desert camp Swiss tent interior Rajasthan, ethnic bed, Rajasthani decor, lanterns, photorealistic",
          img3: "PROMPT: Camel ride at sunset near Jaipur desert camp, golden dunes, rider silhouette, photorealistic",
          img4: "PROMPT: Rajasthani folk dance performance at desert camp Jaipur, fire dance, musicians, audience circle, photorealistic",
          img5: "PROMPT: Night sky above Rajasthan desert camp near Jaipur, Milky Way visible, bonfire glow, photorealistic"
        },
        amenities: ["WiFi", "Camel Ride", "Bonfire", "Folk Performance", "Rajasthani Dinner"],
        host: { name: "Bhawani", joinedYear: 2017, responseRate: "97%" }
      },
      {
        id: 603,
        title: "Modern Flat in Malviya Nagar",
        location: "Malviya Nagar, Jaipur",
        price: 1900,
        rating: 4.4,
        reviews: 78,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "5 km from center",
        images: {
          main: "PROMPT: Modern apartment in Malviya Nagar Jaipur, contemporary decor, spacious living area, photorealistic Airbnb listing",
          img2: "PROMPT: Jaipur Malviya Nagar residential area, wide roads, malls nearby, busy evening, photorealistic",
          img3: "PROMPT: Apartment bedroom in Jaipur, queen bed, wooden wardrobe, light decor, photorealistic",
          img4: "PROMPT: Modern kitchen in Jaipur apartment, gas stove, microwave, Indian cookware, photorealistic",
          img5: "PROMPT: Jaipur city sunset from apartment balcony, distant Amber Fort hills, orange sky, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Gym"],
        host: { name: "Govind", joinedYear: 2019, responseRate: "88%" }
      },
      {
        id: 604,
        title: "Palace Room in Amber Area",
        location: "Near Amber Fort, Jaipur",
        price: 6000,
        rating: 4.9,
        reviews: 214,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Amber Fort",
        images: {
          main: "PROMPT: Converted palace room near Amber Fort Jaipur Rajasthan, royal decor, elephant mural, carved window, mountain view, photorealistic Airbnb listing",
          img2: "PROMPT: Amber Fort Jaipur at sunrise, reflecting in Maota Lake, Aravalli hills, photorealistic",
          img3: "PROMPT: Palace bedroom Jaipur Amber, royal canopy bed, mirror work walls, traditional Rajput decor, photorealistic",
          img4: "PROMPT: Elephant ride path near Amber Fort Jaipur, decorated elephant, tourists, morning golden hour, photorealistic",
          img5: "PROMPT: Jaipur Amber area aerial view, hilltop fort, lake, village, lush hills, photorealistic"
        },
        amenities: ["WiFi", "Fort Tour", "Elephant Ride", "Breakfast", "Air Conditioning", "Private Courtyard"],
        host: { name: "Pratap", joinedYear: 2014, responseRate: "99%" }
      },
      {
        id: 605,
        title: "Budget Room near Railway Station",
        location: "Jaipur Railway Station Area",
        price: 700,
        rating: 3.8,
        reviews: 62,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.4 km from Railway Station",
        images: {
          main: "PROMPT: Simple clean budget room near Jaipur Railway Station, neat bed, pink wall typical of Jaipur, fan, photorealistic Airbnb listing",
          img2: "PROMPT: Jaipur Railway Station exterior, grand pink sandstone facade, Rajasthani architecture, busy forecourt, photorealistic",
          img3: "PROMPT: Budget hotel room interior Jaipur, single bed, color TV, small window, decent condition, photorealistic",
          img4: "PROMPT: Jaipur station street food, mirchi bada, pyaaz kachori, chai stalls, morning crowd, photorealistic",
          img5: "PROMPT: Jaipur old city views from rooftop near station, minarets and temples, pink buildings, photorealistic"
        },
        amenities: ["WiFi", "Fan", "TV"],
        host: { name: "Chotu", joinedYear: 2023, responseRate: "76%" }
      },
      {
        id: 606,
        title: "Rooftop Villa near City Palace",
        location: "City Palace Area, Jaipur",
        price: 4800,
        rating: 4.8,
        reviews: 176,
        beds: 3,
        guests: 5,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near City Palace",
        images: {
          main: "PROMPT: Stunning rooftop villa in Jaipur City Palace area, terrace with pink palace views, Rajasthani luxury decor, photorealistic Airbnb listing",
          img2: "PROMPT: Jaipur City Palace complex, ornate gates, Rajput-Mughal architecture, tourists, blue sky, photorealistic",
          img3: "PROMPT: Rooftop villa Jaipur, outdoor dining table with City Palace view, evening candles, photorealistic",
          img4: "PROMPT: Royal villa bedroom Jaipur, Rajasthani fresco on wall, four-poster bed, silk covers, photorealistic",
          img5: "PROMPT: Jantar Mantar Jaipur, giant astronomical instruments, tourists exploring, morning light, photorealistic"
        },
        amenities: ["WiFi", "Rooftop Pool", "Rajasthani Breakfast", "Heritage Walk", "Air Conditioning"],
        host: { name: "Shyamlal", joinedYear: 2016, responseRate: "98%" }
      },
      {
        id: 607,
        title: "Artist Homestay in Sanganer",
        location: "Sanganer, Jaipur",
        price: 2000,
        rating: 4.5,
        reviews: 57,
        beds: 2,
        guests: 3,
        bathrooms: 1,
        isSuperHost: false,
        distance: "12 km from Jaipur center",
        images: {
          main: "PROMPT: Artist homestay in Sanganer Jaipur, hand-block print fabrics on walls, colorful boho decor, printing workshop visible, photorealistic Airbnb listing",
          img2: "PROMPT: Sanganer block printing workshop Jaipur, artisan stamping intricate patterns on fabric, photorealistic",
          img3: "PROMPT: Artist homestay bedroom Jaipur, tie-dye bedspread, hand-printed curtains, earthen flooring, photorealistic",
          img4: "PROMPT: Sanganer Jaipur paper making street, handmade paper drying on racks, village artisans working, photorealistic",
          img5: "PROMPT: Sanganer Jain temple near Jaipur, white carved marble, intricate architecture, peaceful setting, photorealistic"
        },
        amenities: ["WiFi", "Block Printing Workshop", "Breakfast", "Art Studio Access"],
        host: { name: "Ratan", joinedYear: 2019, responseRate: "93%" }
      },
      {
        id: 608,
        title: "Luxe Suite in Jawahar Nagar",
        location: "Jawahar Nagar, Jaipur",
        price: 3100,
        rating: 4.6,
        reviews: 92,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Rambagh Palace",
        images: {
          main: "PROMPT: Luxe suite exterior in Jawahar Nagar Jaipur, pink sandstone villa, lush garden, evening lighting, photorealistic Airbnb listing",
          img2: "PROMPT: Rambagh Palace Jaipur, opulent Taj heritage hotel, manicured lawns, Rajput grandeur, photorealistic",
          img3: "PROMPT: Suite bedroom Jaipur Jawahar Nagar, luxury mattress, royal cushions, walk-in wardrobe, photorealistic",
          img4: "PROMPT: Suite bathroom Jaipur, freestanding bathtub, mosaic tiles, luxury toiletries, photorealistic",
          img5: "PROMPT: Jaipur polo ground evening, green manicured field, pink city backdrop, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Breakfast", "Parking", "Spa"],
        host: { name: "Devi", joinedYear: 2017, responseRate: "95%" }
      },
      {
        id: 609,
        title: "Camping Retreat near Nahargarh",
        location: "Nahargarh Hills, Jaipur",
        price: 2900,
        rating: 4.7,
        reviews: 115,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Nahargarh Forest",
        images: {
          main: "PROMPT: Adventure camping retreat inside Nahargarh Forest Jaipur, dome tents, starry sky, rocky Aravalli landscape, photorealistic Airbnb listing",
          img2: "PROMPT: Nahargarh Fort Jaipur, hilltop fort with Jaipur city spreading below, photorealistic aerial view",
          img3: "PROMPT: Glamping tent interior Nahargarh Jaipur, cozy bedding, lantern, forest view from tent opening, photorealistic",
          img4: "PROMPT: Sunset from Nahargarh Hill Jaipur, golden pink city below, silhouette of fort walls, photorealistic",
          img5: "PROMPT: Morning yoga session at Nahargarh hills camp Jaipur, sunrise, Aravalli hills, mist, photorealistic"
        },
        amenities: ["WiFi", "Trekking", "Campfire", "Sunrise View", "Organic Meals"],
        host: { name: "Vikramaditya", joinedYear: 2018, responseRate: "96%" }
      },
      {
        id: 610,
        title: "Simple Stay near Bapu Bazaar",
        location: "Bapu Bazaar Area, Jaipur",
        price: 1100,
        rating: 4.0,
        reviews: 47,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Inside Bapu Bazaar",
        images: {
          main: "PROMPT: Simple cozy room near Bapu Bazaar Jaipur, basic pink walls, Rajasthani bedsheet, clean and tidy, photorealistic Airbnb listing",
          img2: "PROMPT: Bapu Bazaar Jaipur, famous shopping market, mojri shoes, lac bangles, printed textiles on display, photorealistic",
          img3: "PROMPT: Simple hotel bathroom Jaipur, clean tiles, bucket and mug, basic amenities, photorealistic",
          img4: "PROMPT: Jaipur street snacks near bazaar, ghevar sweet, kachori chaat, chai, photorealistic",
          img5: "PROMPT: Jaipur Pink City lane near Bapu Bazaar, pink plaster walls, flower sellers, morning activity, photorealistic"
        },
        amenities: ["WiFi", "Fan", "Air Cooler", "Nearby Shopping"],
        host: { name: "Munni", joinedYear: 2022, responseRate: "81%" }
      }
    ]
  },

  {
    city: "Kochi",
    listings: [
      {
        id: 701,
        title: "Houseboat Stay on Vembanad Lake",
        location: "Kumarakom, near Kochi",
        price: 5500,
        rating: 4.9,
        reviews: 302,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "On Vembanad Lake",
        images: {
          main: "PROMPT: Luxury Kerala houseboat kettuvallam on Vembanad Lake at sunset, coir thatched roof, glassy backwater, coconut palms, photorealistic Airbnb listing",
          img2: "PROMPT: Kerala houseboat interior, carved wooden cabin, cushioned sitting, backwater view through windows, photorealistic",
          img3: "PROMPT: Vembanad Lake Kerala sunrise, mist on water, cormorant birds, fishing canoes, photorealistic",
          img4: "PROMPT: Kerala houseboat bedroom, white linen, low wooden bed, small porthole window to backwater, photorealistic",
          img5: "PROMPT: Houseboat deck with wicker chairs at sunset, coconut palms passing slowly, backwater channels, photorealistic"
        },
        amenities: ["WiFi", "AC", "Kerala Meals", "Fishing", "Village Walk"],
        host: { name: "Shibu", joinedYear: 2016, responseRate: "99%" }
      },
      {
        id: 702,
        title: "Heritage Home in Fort Kochi",
        location: "Fort Kochi, Ernakulam",
        price: 3100,
        rating: 4.8,
        reviews: 188,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Chinese Fishing Nets",
        images: {
          main: "PROMPT: Colonial heritage home interior in Fort Kochi Kerala, Portuguese-Dutch architecture, antique furniture, high ceilings, sea breeze, photorealistic Airbnb listing",
          img2: "PROMPT: Chinese Fishing Nets Fort Kochi at sunset, silhouettes on water, fishermen, Arabian Sea, photorealistic",
          img3: "PROMPT: Fort Kochi heritage bedroom, four-poster teak bed, whitewashed walls, ceiling fan, old photographs, photorealistic",
          img4: "PROMPT: Fort Kochi street art lane, colorful murals, cafes, tourists, bicycles, photorealistic",
          img5: "PROMPT: St Francis Church Fort Kochi, oldest European church India, whitewashed exterior, green lawn, photorealistic"
        },
        amenities: ["WiFi", "Breakfast", "Bicycle Rental", "Heritage Walk", "Air Conditioning"],
        host: { name: "Roshan", joinedYear: 2017, responseRate: "97%" }
      },
      {
        id: 703,
        title: "Modern Flat in Marine Drive",
        location: "Marine Drive, Kochi",
        price: 2800,
        rating: 4.6,
        reviews: 121,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Directly on Marine Drive",
        images: {
          main: "PROMPT: Modern apartment with sea view in Marine Drive Kochi Kerala, floor to ceiling windows, blue water, photorealistic Airbnb listing",
          img2: "PROMPT: Marine Drive Kochi promenade at night, necklace of lights, couples walking, backwaters visible, photorealistic",
          img3: "PROMPT: Apartment bedroom Marine Drive Kochi, sea view, white decor, morning light on ocean, photorealistic",
          img4: "PROMPT: Modern kitchen in Kochi apartment, sea-facing window, Indian appliances, clean countertops, photorealistic",
          img5: "PROMPT: Kochi Metro bridge above backwaters, modern infrastructure, evening golden light, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Sea View", "Parking"],
        host: { name: "Asha", joinedYear: 2018, responseRate: "94%" }
      },
      {
        id: 704,
        title: "Treehouse in Munnar Hills",
        location: "Munnar, near Kochi",
        price: 4000,
        rating: 4.8,
        reviews: 144,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Tea Plantation",
        images: {
          main: "PROMPT: Romantic treehouse in Munnar Kerala tea plantation, wooden elevated cabin, misty green hills, photorealistic Airbnb listing",
          img2: "PROMPT: Munnar tea estate rolling green hills, morning mist, tea pickers in distance, photorealistic",
          img3: "PROMPT: Treehouse bedroom Munnar, cozy single bed, round window with misty valley view, photorealistic",
          img4: "PROMPT: Treehouse deck in Munnar plantation, hammock, misty mountains, tea bushes below, photorealistic",
          img5: "PROMPT: Munnar Eravikulam National Park, Nilgiri tahr on rocky hill, mountain fog, Kerala wildlife, photorealistic"
        },
        amenities: ["WiFi", "Tea Tour", "Organic Breakfast", "Hiking", "Bonfire"],
        host: { name: "Jithin", joinedYear: 2019, responseRate: "98%" }
      },
      {
        id: 705,
        title: "Budget Homestay in Ernakulam",
        location: "Ernakulam Town, Kochi",
        price: 900,
        rating: 4.0,
        reviews: 83,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Ernakulam Junction",
        images: {
          main: "PROMPT: Clean simple homestay room in Ernakulam Kochi Kerala, typical Kerala home, wooden furniture, green plants outside window, photorealistic Airbnb listing",
          img2: "PROMPT: Kerala traditional home courtyard, tulsi plant, clay pots, sunny morning, photorealistic",
          img3: "PROMPT: Ernakulam Junction railway station Kochi, busy platform, Kerala landscape, photorealistic",
          img4: "PROMPT: Kerala breakfast spread, puttu kadala, idli sambar, banana, steel plate, homemade, photorealistic",
          img5: "PROMPT: Ernakulam main road Kochi, busy traffic, coconut vendors, Kerala everyday life, photorealistic"
        },
        amenities: ["WiFi", "Home Cooked Meals", "Air Cooler"],
        host: { name: "Lekha", joinedYear: 2021, responseRate: "85%" }
      },
      {
        id: 706,
        title: "Backwater Villa in Alleppey",
        location: "Alappuzha (Alleppey), Kerala",
        price: 4700,
        rating: 4.9,
        reviews: 219,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "On Alleppey Backwaters",
        images: {
          main: "PROMPT: Luxury villa on Alleppey backwater banks Kerala, private jetty, coconut palms, mirror-like water, photorealistic Airbnb listing",
          img2: "PROMPT: Alleppey backwaters Kerala, boat gliding through narrow canals, village life on banks, photorealistic",
          img3: "PROMPT: Villa bedroom with backwater view Alleppey, mosquito net, wooden bed, lush view, photorealistic",
          img4: "PROMPT: Private villa pool Alleppey overlooking backwaters, turquoise water, palm trees, photorealistic",
          img5: "PROMPT: Alleppey Nehru Trophy Boat Race, snake boats racing, huge crowd, festive atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Private Pool", "Canoe", "Kerala Dinner", "Air Conditioning", "Fishing"],
        host: { name: "Binu", joinedYear: 2016, responseRate: "99%" }
      },
      {
        id: 707,
        title: "Spice Garden Stay in Thekkady",
        location: "Thekkady, Idukki District",
        price: 3200,
        rating: 4.7,
        reviews: 98,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Inside Spice Plantation",
        images: {
          main: "PROMPT: Romantic spice garden cottage in Thekkady Kerala, surrounded by cardamom and pepper vines, natural stone architecture, photorealistic Airbnb listing",
          img2: "PROMPT: Thekkady Periyar National Park, wild elephants near water, Kerala forest, photorealistic wildlife",
          img3: "PROMPT: Spice plantation bedroom Thekkady, bamboo furniture, monsoon sound, earthy decor, photorealistic",
          img4: "PROMPT: Kerala spice tour, guide showing cardamom pods, cloves, nutmeg on plantation, photorealistic",
          img5: "PROMPT: Periyar Lake Thekkady, bamboo rafting tourists, dense forest banks, photorealistic"
        },
        amenities: ["WiFi", "Spice Tour", "Ayurvedic Massage", "Organic Meals", "Wildlife Safari"],
        host: { name: "Anil", joinedYear: 2018, responseRate: "96%" }
      },
      {
        id: 708,
        title: "Seaside Cottage in Cherai Beach",
        location: "Cherai Beach, Kochi",
        price: 2500,
        rating: 4.6,
        reviews: 136,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Steps from Cherai Beach",
        images: {
          main: "PROMPT: Seaside cottage on Cherai Beach Kochi Kerala, steps from sea, lush palms, white sand visible, photorealistic Airbnb listing",
          img2: "PROMPT: Cherai Beach Kochi, calm clean shore, seashells on sand, fishing boats, morning light, photorealistic",
          img3: "PROMPT: Beach cottage bedroom Kerala, bamboo ceiling, sea breeze from window, colorful curtains, photorealistic",
          img4: "PROMPT: Cherai Beach sunset, silhouette of palms and horizon, orange sky, Kerala coast, photorealistic",
          img5: "PROMPT: Cottage backyard Cherai Kochi, hammock between coconut palms, backwater on one side beach on other, photorealistic"
        },
        amenities: ["WiFi", "Beach Access", "Bicycle Rental", "Seafood Meals", "Hammock"],
        host: { name: "Tomy", joinedYear: 2019, responseRate: "93%" }
      },
      {
        id: 709,
        title: "Hilltop Bungalow in Wayanad",
        location: "Wayanad, Kerala",
        price: 3800,
        rating: 4.8,
        reviews: 163,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Inside Wayanad Forest",
        images: {
          main: "PROMPT: Hilltop bungalow in Wayanad Kerala, mist-covered green valleys, British colonial bungalow style, morning fog, photorealistic Airbnb listing",
          img2: "PROMPT: Wayanad forest trail, teak and bamboo trees, tribal artwork on tree, misty morning, photorealistic",
          img3: "PROMPT: Bungalow bedroom Wayanad, British-era wooden furniture, thick fog outside window, fireplace, photorealistic",
          img4: "PROMPT: Pookode Lake Wayanad, rowboats on glassy water, dense forest around, photorealistic",
          img5: "PROMPT: Wayanad sunrise from hilltop, layered green valley, mist rising, tribal village below, photorealistic"
        },
        amenities: ["WiFi", "Tribal Tour", "Trekking", "Organic Meals", "Bonfire", "Wildlife Watch"],
        host: { name: "Sreekanth", joinedYear: 2017, responseRate: "97%" }
      },
      {
        id: 710,
        title: "City Apartment in Kakkanad IT Hub",
        location: "Kakkanad, Kochi",
        price: 2000,
        rating: 4.3,
        reviews: 74,
        beds: 2,
        guests: 3,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Infopark Kochi",
        images: {
          main: "PROMPT: Modern apartment in Kakkanad Kochi near Infopark IT hub, corporate area, spacious living room, photorealistic Airbnb listing",
          img2: "PROMPT: Infopark Kochi campus, IT company buildings, green landscape, employees walking, photorealistic",
          img3: "PROMPT: Apartment bedroom Kakkanad Kochi, simple modern decor, good natural light, photorealistic",
          img4: "PROMPT: Kitchen in Kakkanad Kochi apartment, Kerala style cooking setup, coconut oil and spices, photorealistic",
          img5: "PROMPT: Kakkanad Kochi area evening, wide roads, tech parks with lights on, metro station nearby, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Gym"],
        host: { name: "Nidhin", joinedYear: 2020, responseRate: "89%" }
      }
    ]
  },

  {
    city: "Kolkata",
    listings: [
      {
        id: 801,
        title: "Heritage Home in North Kolkata",
        location: "Shyambazar, North Kolkata",
        price: 2400,
        rating: 4.7,
        reviews: 162,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Shyambazar 5-Point Crossing",
        images: {
          main: "PROMPT: Crumbling romantic heritage home interior in North Kolkata, terracotta tiles, old wooden furniture, Durga idol corner, warm light, photorealistic Airbnb listing",
          img2: "PROMPT: Kolkata tram on street near Shyambazar, yellow colonial building, noon light, nostalgic atmosphere, photorealistic",
          img3: "PROMPT: Heritage home bedroom Kolkata, iron cot with mosquito net, old ventilation window, sepia tones, photorealistic",
          img4: "PROMPT: North Kolkata narrow lane, old mansions, cycle rickshaw, morning puja flowers on doorstep, photorealistic",
          img5: "PROMPT: Kolkata terrace evening, old buildings, kabutar flying, city hum, golden sky, photorealistic"
        },
        amenities: ["WiFi", "Bengali Breakfast", "Heritage Walk", "Rooftop Access"],
        host: { name: "Deb", joinedYear: 2017, responseRate: "96%" }
      },
      {
        id: 802,
        title: "Modern Flat in Salt Lake City",
        location: "Sector V, Salt Lake, Kolkata",
        price: 2200,
        rating: 4.5,
        reviews: 98,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near IT Hub",
        images: {
          main: "PROMPT: Contemporary apartment in Salt Lake Sector V Kolkata IT hub, modern living room, spacious, photorealistic Airbnb listing",
          img2: "PROMPT: Salt Lake Sector V Kolkata, tech company buildings, wide tree-lined roads, employees commuting, photorealistic",
          img3: "PROMPT: Apartment bedroom Salt Lake Kolkata, queen bed, light decor, work desk, photorealistic",
          img4: "PROMPT: Apartment kitchen Salt Lake Kolkata, modern appliances, dining table, photorealistic",
          img5: "PROMPT: Eco Park Kolkata New Town, large lake, families on picnic, modern park infrastructure, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Gym"],
        host: { name: "Sourav", joinedYear: 2019, responseRate: "91%" }
      },
      {
        id: 803,
        title: "Artistic Stay near Kumartuli",
        location: "Kumartuli, North Kolkata",
        price: 1900,
        rating: 4.6,
        reviews: 77,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Inside Kumartuli",
        images: {
          main: "PROMPT: Artistic guesthouse room in Kumartuli Kolkata, Durga idol clay workshop visible, artistic decor, creative atmosphere, photorealistic Airbnb listing",
          img2: "PROMPT: Kumartuli Kolkata potters making Durga Maa clay idols, intricate work, workshop lanes, photorealistic",
          img3: "PROMPT: Artistic room Kolkata, Tagore portrait, terracotta lamps, muslin curtains, warm atmosphere, photorealistic",
          img4: "PROMPT: Kumartuli ghat Kolkata, idol immersion post-Durga Puja, Hooghly River, morning activity, photorealistic",
          img5: "PROMPT: Kolkata rooftop Kumartuli area, clay idol workshops visible, Howrah Bridge in distance, photorealistic"
        },
        amenities: ["WiFi", "Art Workshop", "Bengali Breakfast", "Ghat Walk"],
        host: { name: "Indrani", joinedYear: 2020, responseRate: "92%" }
      },
      {
        id: 804,
        title: "Luxury Suite in Park Street",
        location: "Park Street, Kolkata",
        price: 4500,
        rating: 4.8,
        reviews: 143,
        beds: 2,
        guests: 3,
        bathrooms: 2,
        isSuperHost: true,
        distance: "In the heart of Park Street",
        images: {
          main: "PROMPT: Luxury suite on Park Street Kolkata, colonial building facade, plush interior, jazz-age Kolkata vibe, photorealistic Airbnb listing",
          img2: "PROMPT: Park Street Kolkata evening, famous restaurants and bars lit up, colonial architecture, neon lights, photorealistic",
          img3: "PROMPT: Suite bedroom Park Street Kolkata, luxury bedding, black and white city photos on wall, photorealistic",
          img4: "PROMPT: Flurys Tea Room Park Street Kolkata, iconic patisserie, cake display, old world charm, photorealistic",
          img5: "PROMPT: Park Street area Kolkata night, Victoria Memorial glowing in background, festive atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Room Service", "Air Conditioning", "Concierge", "Breakfast"],
        host: { name: "Mita", joinedYear: 2015, responseRate: "99%" }
      },
      {
        id: 805,
        title: "Budget Stay near Howrah Bridge",
        location: "Howrah, Kolkata",
        price: 800,
        rating: 3.9,
        reviews: 72,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.5 km from Howrah Bridge",
        images: {
          main: "PROMPT: Budget guesthouse room in Howrah near Howrah Bridge Kolkata, clean simple setup, old fan, single bed, photorealistic Airbnb listing",
          img2: "PROMPT: Howrah Bridge Kolkata at dawn, cables silhouette, fishing boats on Hooghly River, mist, photorealistic",
          img3: "PROMPT: Budget hotel room Howrah Kolkata, basic amenities, wooden floor, small window, photorealistic",
          img4: "PROMPT: Howrah flower market Kolkata, marigold mountains, traders, morning chaos, photorealistic",
          img5: "PROMPT: Kolkata Howrah station exterior, huge Victorian railway station, busy forecourt, taxis, photorealistic"
        },
        amenities: ["WiFi", "Fan", "TV"],
        host: { name: "Bablu", joinedYear: 2023, responseRate: "75%" }
      },
      {
        id: 806,
        title: "Riverside Flat in Princep Ghat Area",
        location: "Strand Road, Kolkata",
        price: 3200,
        rating: 4.7,
        reviews: 109,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Princep Ghat",
        images: {
          main: "PROMPT: Riverside flat near Princep Ghat Kolkata, Hooghly River view, colonial-modern decor, evening lit interior, photorealistic Airbnb listing",
          img2: "PROMPT: Princep Ghat Kolkata, romantic river promenade, boats on Hooghly, Victoria Memorial glow in background, photorealistic",
          img3: "PROMPT: Riverside flat bedroom Kolkata, river view window, cream decor, ceiling fan, photorealistic",
          img4: "PROMPT: Hooghly River Kolkata sunset, ferry boats, Howrah Bridge far, orange sky, photorealistic",
          img5: "PROMPT: Kolkata evening Strand Road, couples walking, heritage buildings, riverfront ambiance, photorealistic"
        },
        amenities: ["WiFi", "River View", "Air Conditioning", "Kitchen", "Ferry Access"],
        host: { name: "Sanjukta", joinedYear: 2018, responseRate: "95%" }
      },
      {
        id: 807,
        title: "Creative Loft in Ballygunge",
        location: "Ballygunge, South Kolkata",
        price: 2700,
        rating: 4.5,
        reviews: 88,
        beds: 2,
        guests: 3,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Rabindra Sarovar",
        images: {
          main: "PROMPT: Creative loft apartment in Ballygunge South Kolkata, exposed brick, Rabindranath Tagore quotes on wall, artistic South Kolkata vibe, photorealistic Airbnb listing",
          img2: "PROMPT: Rabindra Sarovar Lake Kolkata, morning walkers, birds on water, foggy winter morning, photorealistic",
          img3: "PROMPT: Loft bedroom Ballygunge Kolkata, mezzanine bed, books everywhere, skylight, photorealistic",
          img4: "PROMPT: South Kolkata street near Ballygunge, heritage houses, peepal trees, Bengali lifestyle, photorealistic",
          img5: "PROMPT: Kolkata Coffee House type adda corner at home, old chairs, chai, books, intellectual atmosphere, photorealistic"
        },
        amenities: ["WiFi", "Art Books", "Air Conditioning", "Kitchen", "Bicycle"],
        host: { name: "Aritra", joinedYear: 2020, responseRate: "90%" }
      },
      {
        id: 808,
        title: "Comfortable Flat in New Town",
        location: "Action Area 1, New Town, Kolkata",
        price: 2100,
        rating: 4.3,
        reviews: 65,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Eco Park",
        images: {
          main: "PROMPT: Comfortable apartment in New Town Kolkata Action Area 1, spacious interior, modern furniture, photorealistic Airbnb listing",
          img2: "PROMPT: New Town Kolkata Eco Park, large lake, modern park, families, green infrastructure, photorealistic",
          img3: "PROMPT: New Town Kolkata IT buildings, wide planned roads, smart city infrastructure, photorealistic",
          img4: "PROMPT: Apartment bedroom New Town Kolkata, light decor, double bed, wardrobe, photorealistic",
          img5: "PROMPT: Biswa Bangla Gate New Town Kolkata, iconic new landmark, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Pool"],
        host: { name: "Nilanjana", joinedYear: 2021, responseRate: "87%" }
      },
      {
        id: 809,
        title: "Garden Room in Alipore",
        location: "Alipore, Kolkata",
        price: 3600,
        rating: 4.7,
        reviews: 119,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Alipore Zoo",
        images: {
          main: "PROMPT: Garden room in bungalow Alipore Kolkata, South Kolkata elite neighborhood, British bungalow style, lush garden, photorealistic Airbnb listing",
          img2: "PROMPT: Alipore Zoo Kolkata, historic zoo, white tiger enclosure, colonial era buildings, photorealistic",
          img3: "PROMPT: Garden bungalow bedroom Alipore Kolkata, wooden floor, colonial furniture, garden view, photorealistic",
          img4: "PROMPT: Beautiful garden in Alipore Kolkata bungalow, lawn, old mango tree, iron gate, photorealistic",
          img5: "PROMPT: Alipore neighborhood Kolkata, elite residential area, wide roads, old bungalows, morning photorealistic"
        },
        amenities: ["WiFi", "Garden", "Air Conditioning", "Breakfast", "Parking"],
        host: { name: "Ranjit", joinedYear: 2016, responseRate: "97%" }
      },
      {
        id: 810,
        title: "Cozy Stay near Victoria Memorial",
        location: "Maidan Area, Kolkata",
        price: 2900,
        rating: 4.6,
        reviews: 94,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.5 km from Victoria Memorial",
        images: {
          main: "PROMPT: Cozy colonial guesthouse room near Victoria Memorial Kolkata, white marble memorial visible from window, heritage decor, photorealistic Airbnb listing",
          img2: "PROMPT: Victoria Memorial Kolkata at dusk, white marble glowing, reflection pool, visitors, photorealistic",
          img3: "PROMPT: Heritage guesthouse bedroom Kolkata Maidan area, iron lattice windows, Calcutta-era photographs, photorealistic",
          img4: "PROMPT: Maidan Kolkata open green ground, horse-drawn carriage, Victoria Memorial in distance, photorealistic",
          img5: "PROMPT: Kolkata biriyani stall near Maidan, aluminum containers, biryani steam, evening crowd, photorealistic"
        },
        amenities: ["WiFi", "Heritage View", "Air Conditioning", "Breakfast"],
        host: { name: "Subho", joinedYear: 2019, responseRate: "91%" }
      }
    ]
  },

  {
    city: "Bangalore",
    listings: [
      {
        id: 901,
        title: "Startup Loft in Indiranagar",
        location: "Indiranagar, Bangalore",
        price: 3100,
        rating: 4.7,
        reviews: 198,
        beds: 2,
        guests: 3,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near 100 Feet Road",
        images: {
          main: "PROMPT: Hip startup-friendly loft apartment in Indiranagar Bangalore, coworking vibes, industrial decor, craft beer fridge, photorealistic Airbnb listing",
          img2: "PROMPT: Indiranagar 100 Feet Road Bangalore, vibrant cafes and bars, evening crowd, tech bro culture, photorealistic",
          img3: "PROMPT: Loft bedroom Indiranagar Bangalore, brick wall, designer lamp, startup posters, photorealistic",
          img4: "PROMPT: Rooftop bar in Indiranagar Bangalore, string lights, Bangalore skyline, young professionals, photorealistic",
          img5: "PROMPT: Indiranagar metro station Bangalore, sleek elevated metro, morning commuters, photorealistic"
        },
        amenities: ["WiFi", "Coworking Space", "Air Conditioning", "Kitchen", "Gym"],
        host: { name: "Aryan", joinedYear: 2018, responseRate: "95%" }
      },
      {
        id: 902,
        title: "Garden Apartment in Koramangala",
        location: "Koramangala, Bangalore",
        price: 2900,
        rating: 4.6,
        reviews: 154,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Forum Mall",
        images: {
          main: "PROMPT: Garden apartment in Koramangala Bangalore, apartment complex with green garden courtyard, modern design, photorealistic Airbnb listing",
          img2: "PROMPT: Koramangala Bangalore startup district, busy cafe street, people working on laptops, photorealistic",
          img3: "PROMPT: Garden apartment bedroom Bangalore, large windows with garden view, modern furniture, photorealistic",
          img4: "PROMPT: Apartment garden in Koramangala Bangalore, manicured hedges, morning yoga space, photorealistic",
          img5: "PROMPT: Bangalore Koramangala food street at night, lit restaurants, barbeque smoke, young crowd, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Parking", "Garden"],
        host: { name: "Preethi", joinedYear: 2019, responseRate: "93%" }
      },
      {
        id: 903,
        title: "Studio near MG Road",
        location: "MG Road, Bangalore",
        price: 2200,
        rating: 4.4,
        reviews: 107,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "On MG Road",
        images: {
          main: "PROMPT: Modern studio apartment on MG Road Bangalore central, city view, minimalist design, photorealistic Airbnb listing",
          img2: "PROMPT: MG Road Bangalore, heritage boulevard, UB City in distance, metro tracks, evening crowd, photorealistic",
          img3: "PROMPT: Studio apartment interior Bangalore MG Road, white walls, floating shelves, compact desk, photorealistic",
          img4: "PROMPT: Cubbon Park Bangalore, lush green park, red gothic buildings, joggers, photorealistic",
          img5: "PROMPT: Bangalore city at night from MG Road height, tech city lights, UB City glowing, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Metro Nearby"],
        host: { name: "Kiran", joinedYear: 2020, responseRate: "89%" }
      },
      {
        id: 904,
        title: "Tech Villa in Whitefield",
        location: "Whitefield, Bangalore",
        price: 5200,
        rating: 4.8,
        reviews: 177,
        beds: 4,
        guests: 8,
        bathrooms: 3,
        isSuperHost: true,
        distance: "Near ITPL",
        images: {
          main: "PROMPT: Modern tech villa in Whitefield Bangalore, glass and concrete exterior, smart home features, large garden, pool, photorealistic Airbnb listing",
          img2: "PROMPT: ITPL Whitefield Bangalore, tech park campus, Google and Samsung offices, wide campus roads, photorealistic",
          img3: "PROMPT: Villa living room Whitefield Bangalore, designer interior, home theatre, marble floors, photorealistic",
          img4: "PROMPT: Smart villa bedroom Bangalore, automated blinds, mood lighting, king bed, walk-in wardrobe, photorealistic",
          img5: "PROMPT: Villa pool Whitefield Bangalore, infinity pool overlooking IT park, evening lights, photorealistic"
        },
        amenities: ["WiFi", "Smart Home", "Pool", "Gym", "EV Charging", "Chef", "Parking"],
        host: { name: "Vikash", joinedYear: 2016, responseRate: "98%" }
      },
      {
        id: 905,
        title: "Budget PG near Electronic City",
        location: "Electronic City, Bangalore",
        price: 750,
        rating: 3.8,
        reviews: 53,
        beds: 1,
        guests: 1,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Inside Electronic City Phase 1",
        images: {
          main: "PROMPT: Clean PG single room near Electronic City Bangalore, simple student-friendly room, desk, fan, photorealistic Airbnb listing",
          img2: "PROMPT: Electronic City Bangalore, Infosys and Wipro campus gates, morning IT crowd, photorealistic",
          img3: "PROMPT: Simple PG room Bangalore Electronic City, clean bed, study area, basic decor, photorealistic",
          img4: "PROMPT: Electronic City flyover Bangalore, elevated highway, traffic, IT buildings, photorealistic",
          img5: "PROMPT: Bangalore South canteen style mess food, idli vada, sambar, steel plate, photorealistic"
        },
        amenities: ["WiFi", "Fan", "Study Desk", "Shared Kitchen"],
        host: { name: "Suresh", joinedYear: 2023, responseRate: "76%" }
      },
      {
        id: 906,
        title: "Countryside Home near Nandi Hills",
        location: "Nandi Hills, Chikballapur",
        price: 4300,
        rating: 4.9,
        reviews: 201,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "Near Nandi Hills",
        images: {
          main: "PROMPT: Charming countryside bungalow near Nandi Hills Bangalore, morning mist, green tea estate, colonial bungalow style, photorealistic Airbnb listing",
          img2: "PROMPT: Nandi Hills Bangalore sunrise, paraglider launching, clouds below, ancient Tipu Sultan's summer retreat, photorealistic",
          img3: "PROMPT: Countryside bungalow bedroom Nandi Hills, fireplace, wooden floor, misty window, photorealistic",
          img4: "PROMPT: Nandi Hills cycling trail Bangalore, cyclists on early morning winding road, misty hills, photorealistic",
          img5: "PROMPT: Bhoga Nandeeshwara temple near Nandi Hills, ancient Dravidian temple, stream, lush landscape, photorealistic"
        },
        amenities: ["WiFi", "Cycling", "Sunrise Trek", "Campfire", "Organic Meals", "Paragliding"],
        host: { name: "Ranveer", joinedYear: 2017, responseRate: "99%" }
      },
      {
        id: 907,
        title: "Boutique Stay in Jayanagar",
        location: "Jayanagar, Bangalore",
        price: 2400,
        rating: 4.5,
        reviews: 84,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Jayanagar Shopping",
        images: {
          main: "PROMPT: Boutique stay in Jayanagar Bangalore, charming old Bangalore bungalow style, jacaranda trees outside, photorealistic Airbnb listing",
          img2: "PROMPT: Jayanagar 4th Block Bangalore park, families in evening, jacaranda blooms on ground, photorealistic",
          img3: "PROMPT: Boutique room Jayanagar Bangalore, vintage Bangalore photos on wall, wooden furniture, photorealistic",
          img4: "PROMPT: Jayanagar Bangalore shopping complex, old-Bangalore stores, filter coffee stalls, photorealistic",
          img5: "PROMPT: Lalbagh Botanical Garden Bangalore, glasshouse, flowering trees, morning walkers, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Filter Coffee", "Bicycle", "Kitchen"],
        host: { name: "Shobha", joinedYear: 2018, responseRate: "92%" }
      },
      {
        id: 908,
        title: "Penthouse in UB City Area",
        location: "Vittal Mallya Road, Bangalore",
        price: 7500,
        rating: 4.9,
        reviews: 167,
        beds: 3,
        guests: 5,
        bathrooms: 3,
        isSuperHost: true,
        distance: "Near UB City",
        images: {
          main: "PROMPT: Ultra-luxury penthouse near UB City Bangalore, rooftop terrace, panoramic city view, glass walls, photorealistic Airbnb listing",
          img2: "PROMPT: UB City Bangalore, luxury mall and high-rises, Vittal Mallya Road, evening glow, photorealistic",
          img3: "PROMPT: Penthouse bedroom Bangalore, designer bed, smart lighting, dressing room, photorealistic",
          img4: "PROMPT: Penthouse rooftop terrace Bangalore, infinity jacuzzi, city view, champagne setup, photorealistic",
          img5: "PROMPT: Bangalore city skyline at night from penthouse, lights of Koramangala to Whitefield, photorealistic"
        },
        amenities: ["WiFi", "Rooftop Jacuzzi", "Butler", "Chef", "Gym", "Valet Parking"],
        host: { name: "Mallika", joinedYear: 2014, responseRate: "99%" }
      },
      {
        id: 909,
        title: "Cozy Flat in HSR Layout",
        location: "HSR Layout, Bangalore",
        price: 1800,
        rating: 4.3,
        reviews: 91,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near HSR Sector 7",
        images: {
          main: "PROMPT: Cozy 1BHK flat in HSR Layout Bangalore, clean modern decor, houseplants, bright morning light, photorealistic Airbnb listing",
          img2: "PROMPT: HSR Layout Bangalore residential area, wide roads, families, evening bike ride, photorealistic",
          img3: "PROMPT: HSR flat bedroom Bangalore, queen bed, reading lamp, balcony door, photorealistic",
          img4: "PROMPT: Bangalore craft beer café near HSR, tap beers, young crowd, wooden tables, photorealistic",
          img5: "PROMPT: HSR Layout Bangalore morning, MTR type breakfast restaurant, idli coffee queue, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Balcony"],
        host: { name: "Anuj", joinedYear: 2021, responseRate: "86%" }
      },
      {
        id: 910,
        title: "Resort Stay near Bannerghatta",
        location: "Bannerghatta, South Bangalore",
        price: 3700,
        rating: 4.7,
        reviews: 138,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: true,
        distance: "Near Bannerghatta National Park",
        images: {
          main: "PROMPT: Eco resort near Bannerghatta National Park Bangalore, forest bungalow, wildlife atmosphere, butterfly garden, photorealistic Airbnb listing",
          img2: "PROMPT: Bannerghatta Biological Park Bangalore, lion safari bus, thick forest, photorealistic",
          img3: "PROMPT: Resort room near Bannerghatta, nature decor, bamboo furniture, forest sounds, photorealistic",
          img4: "PROMPT: Butterfly enclosure Bannerghatta Bangalore, colorful butterflies, flowering bushes, glass dome, photorealistic",
          img5: "PROMPT: Forest resort campfire near Bangalore Bannerghatta, stars visible, tree canopy, night photography, photorealistic"
        },
        amenities: ["WiFi", "Wildlife Safari", "Nature Walk", "Organic Meals", "Bonfire", "Butterfly Garden"],
        host: { name: "Rekha", joinedYear: 2018, responseRate: "97%" }
      }
    ]
  },

  {
    city: "Hyderabad",
    listings: [
      {
        id: 1001,
        title: "Royal Suite near Charminar",
        location: "Old City, Hyderabad",
        price: 3800,
        rating: 4.8,
        reviews: 211,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: true,
        distance: "0.3 km from Charminar",
        images: {
          main: "PROMPT: Royal suite interior near Charminar Hyderabad, Nizami decor, arched windows, bidriware and ikat fabrics, photorealistic Airbnb listing",
          img2: "PROMPT: Charminar Hyderabad at night, illuminated four minarets, bustling bazaar below, photorealistic",
          img3: "PROMPT: Nizami style bedroom near Charminar, carved wood bed, silk drapes, antique mirror, photorealistic",
          img4: "PROMPT: Laad Bazaar Hyderabad, famous bangles market near Charminar, colorful glass bangles, photorealistic",
          img5: "PROMPT: Charminar area at dawn Hyderabad, street cleaners, pearl sellers, minarets glowing, photorealistic"
        },
        amenities: ["WiFi", "Nizami Breakfast", "Heritage Tour", "Air Conditioning", "Rooftop"],
        host: { name: "Nawab", joinedYear: 2015, responseRate: "99%" }
      },
      {
        id: 1002,
        title: "Modern Flat in HITEC City",
        location: "HITEC City, Hyderabad",
        price: 2600,
        rating: 4.6,
        reviews: 142,
        beds: 2,
        guests: 4,
        bathrooms: 2,
        isSuperHost: false,
        distance: "Near Microsoft Campus",
        images: {
          main: "PROMPT: Modern apartment in HITEC City Hyderabad, Cyberabad skyline view, sleek interior, corporate chic, photorealistic Airbnb listing",
          img2: "PROMPT: HITEC City Hyderabad Cyberabad, Microsoft Google offices, wide tech city roads, photorealistic",
          img3: "PROMPT: Apartment bedroom HITEC City Hyderabad, king bed, dark wood furniture, photorealistic",
          img4: "PROMPT: Hyderabad HITEC City evening, IT towers lit up, Durgam Cheruvu lake visible, photorealistic",
          img5: "PROMPT: Apartment kitchen HITEC Hyderabad, fully equipped, breakfast counter, photorealistic"
        },
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "Gym", "Parking"],
        host: { name: "Rahul", joinedYear: 2018, responseRate: "93%" }
      },
      {
        id: 1003,
        title: "Heritage Haveli in Banjara Hills",
        location: "Banjara Hills, Hyderabad",
        price: 4900,
        rating: 4.8,
        reviews: 131,
        beds: 3,
        guests: 6,
        bathrooms: 3,
        isSuperHost: true,
        distance: "Near Road No. 12",
        images: {
          main: "PROMPT: Opulent heritage haveli in Banjara Hills Hyderabad, Nizami architecture, infinity pool, lush garden, elite neighborhood, photorealistic Airbnb listing",
          img2: "PROMPT: Banjara Hills Hyderabad, luxury area, art galleries and designer stores, rock formations, photorealistic",
          img3: "PROMPT: Haveli bedroom Hyderabad, Bidri crafts on wall, royal bed, mashrabiya lattice window, photorealistic",
          img4: "PROMPT: Infinity pool Banjara Hills Hyderabad villa, Hussain Sagar lake visible in distance, evening, photorealistic",
          img5: "PROMPT: KBR National Park Hyderabad, lush urban forest, morning joggers, deer, photorealistic"
        },
        amenities: ["WiFi", "Infinity Pool", "Chef", "Gym", "Heritage Decor", "Parking"],
        host: { name: "Azeez", joinedYear: 2014, responseRate: "98%" }
      },
      {
        id: 1004,
        title: "Lakefront Room near Hussain Sagar",
        location: "Hussain Sagar Lake, Hyderabad",
        price: 3200,
        rating: 4.7,
        reviews: 99,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "On Hussain Sagar Lakefront",
        images: {
          main: "PROMPT: Hotel room with Hussain Sagar Lake view Hyderabad, window facing giant Buddha statue, twilight, photorealistic Airbnb listing",
          img2: "PROMPT: Hussain Sagar Lake Hyderabad, giant Buddha statue in center, boating, tank bund promenade, photorealistic",
          img3: "PROMPT: Lake view room Hyderabad, clean modern interior, large window with water view, photorealistic",
          img4: "PROMPT: Tank Bund Hyderabad evening, lit promenade, statues of Telugu legends, photorealistic",
          img5: "PROMPT: Hyderabad NTR Gardens next to Hussain Sagar, colorful flower gardens, families, evening photorealistic"
        },
        amenities: ["WiFi", "Lake View", "Air Conditioning", "Breakfast", "Boating Access"],
        host: { name: "Sridhar", joinedYear: 2019, responseRate: "91%" }
      },
      {
        id: 1005,
        title: "Budget Stay near Secunderabad",
        location: "Secunderabad, Hyderabad",
        price: 850,
        rating: 3.9,
        reviews: 61,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Secunderabad Station",
        images: {
          main: "PROMPT: Budget guest house near Secunderabad Railway Station Hyderabad, simple room, twin bed, clean condition, photorealistic Airbnb listing",
          img2: "PROMPT: Secunderabad Railway Station Hyderabad, British-era terminus, busy morning crowd, photorealistic",
          img3: "PROMPT: Budget hotel room Secunderabad Hyderabad, fan, TV, single window, photorealistic",
          img4: "PROMPT: Hyderabad Irani chai shop Secunderabad, traditional Osmania biscuits, chai in glass, photorealistic",
          img5: "PROMPT: Secunderabad cantonment area Hyderabad, colonial buildings, wide avenues, military presence, photorealistic"
        },
        amenities: ["WiFi", "Fan", "TV"],
        host: { name: "Krishnamurthy", joinedYear: 2022, responseRate: "79%" }
      },
      {
        id: 1006,
        title: "Golconda View Guesthouse",
        location: "Near Golconda Fort, Hyderabad",
        price: 2800,
        rating: 4.6,
        reviews: 88,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "0.5 km from Golconda Fort",
        images: {
          main: "PROMPT: Guesthouse exterior near Golconda Fort Hyderabad, ancient fort walls visible, bougainvillea creepers, photorealistic Airbnb listing",
          img2: "PROMPT: Golconda Fort Hyderabad, massive medieval fort, tourists climbing ramparts, dramatic sky, photorealistic",
          img3: "PROMPT: Guesthouse bedroom Golconda area, Hyderabad fort view from window, Deccani decor, photorealistic",
          img4: "PROMPT: Golconda Fort sound and light show Hyderabad, illuminated fort, audience seated outside, photorealistic",
          img5: "PROMPT: Qutb Shahi Tombs Hyderabad, grand Persian-Islamic domes, manicured gardens, photorealistic"
        },
        amenities: ["WiFi", "Fort View", "Breakfast", "Heritage Walk", "Air Conditioning"],
        host: { name: "Ibrahim", joinedYear: 2020, responseRate: "90%" }
      },
      {
        id: 1007,
        title: "Tech Studio in Gachibowli",
        location: "Gachibowli, Hyderabad",
        price: 2000,
        rating: 4.4,
        reviews: 76,
        beds: 1,
        guests: 2,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Financial District",
        images: {
          main: "PROMPT: Smart studio apartment in Gachibowli Hyderabad Financial District, minimalist tech-bro decor, laptop setup, city view, photorealistic Airbnb listing",
          img2: "PROMPT: Gachibowli Hyderabad, Financial District skyline, glass towers, Durgam Cheruvu bridge, photorealistic",
          img3: "PROMPT: Tech studio bedroom Hyderabad, smart bulbs, compact bed, automated blinds, photorealistic",
          img4: "PROMPT: Durgam Cheruvu Hidden Lake Hyderabad, rocky landscape, boating, Gachibowli towers background, photorealistic",
          img5: "PROMPT: Studio kitchen Gachibowli Hyderabad, compact design, Hyderabadi biryani takeout on counter, photorealistic"
        },
        amenities: ["WiFi", "Smart Home", "Air Conditioning", "Kitchen", "Gym"],
        host: { name: "Ajay", joinedYear: 2021, responseRate: "87%" }
      },
      {
        id: 1008,
        title: "Farmstay near Chevella",
        location: "Chevella, Hyderabad Outskirts",
        price: 3400,
        rating: 4.7,
        reviews: 69,
        beds: 3,
        guests: 6,
        bathrooms: 2,
        isSuperHost: true,
        distance: "45 km from Hyderabad",
        images: {
          main: "PROMPT: Farmstay bungalow near Chevella Hyderabad outskirts, red soil Deccan plateau, mango orchard, bullock carts, photorealistic Airbnb listing",
          img2: "PROMPT: Deccan plateau sunrise near Hyderabad, rocky terrain, orange sky, solitary Banyan tree, photorealistic",
          img3: "PROMPT: Farmstay bedroom Telangana, Ikat fabric bedspread, mud plastered walls, old Deccan wooden furniture, photorealistic",
          img4: "PROMPT: Mango orchard Telangana farmstay, Alphonso mangoes on trees, farmer, golden afternoon light, photorealistic",
          img5: "PROMPT: Village bonfire Telangana farmstay night, tribal Bathukamma flowers in background, community music, photorealistic"
        },
        amenities: ["WiFi", "Farm Activities", "Organic Meals", "Bullock Cart", "Bonfire", "Orchard Walk"],
        host: { name: "Ramaiah", joinedYear: 2018, responseRate: "96%" }
      },
      {
        id: 1009,
        title: "Skyline Apartment in Jubilee Hills",
        location: "Jubilee Hills, Hyderabad",
        price: 4600,
        rating: 4.8,
        reviews: 148,
        beds: 3,
        guests: 5,
        bathrooms: 3,
        isSuperHost: true,
        distance: "Near Road No. 36",
        images: {
          main: "PROMPT: Luxury high-rise apartment in Jubilee Hills Hyderabad, panoramic city view, modern design, glass balcony, photorealistic Airbnb listing",
          img2: "PROMPT: Jubilee Hills Hyderabad, luxury neighborhood, film stars and IT moguls area, designer shops, photorealistic",
          img3: "PROMPT: Apartment master bedroom Jubilee Hills Hyderabad, designer decor, automated curtains, king bed, photorealistic",
          img4: "PROMPT: City view from Jubilee Hills Hyderabad apartment balcony, HITEC City towers visible, sunset, photorealistic",
          img5: "PROMPT: Hyderabad fine dining restaurant Jubilee Hills, Deccani cuisine plating, biryani and haleem, photorealistic food"
        },
        amenities: ["WiFi", "Rooftop Pool", "Gym", "Air Conditioning", "Chef", "Valet"],
        host: { name: "Farida", joinedYear: 2016, responseRate: "98%" }
      },
      {
        id: 1010,
        title: "Biryani Belt Homestay",
        location: "Tolichowki, Hyderabad",
        price: 1600,
        rating: 4.5,
        reviews: 83,
        beds: 2,
        guests: 4,
        bathrooms: 1,
        isSuperHost: false,
        distance: "Near Famous Biryani Spots",
        images: {
          main: "PROMPT: Warm Hyderabadi Muslim household homestay in Tolichowki, biryani aroma in air, traditional decor, khatam inlay furniture, photorealistic Airbnb listing",
          img2: "PROMPT: Hyderabadi dum biryani being served from handi, layers of rice and meat, saffron color, steel plate, photorealistic",
          img3: "PROMPT: Homestay bedroom Tolichowki Hyderabad, Deccani fabric bedspread, Islamic geometric pattern wallpaper, photorealistic",
          img4: "PROMPT: Tolichowki Hyderabad street, biryani restaurants row, evening crowd, families eating outside, photorealistic",
          img5: "PROMPT: Hyderabadi haleem in a bowl, rich dark stew, garnished with lime and ghee, traditional serving, photorealistic"
        },
        amenities: ["WiFi", "Home Cooked Hyderabadi Meals", "Air Cooler", "Biryani Trail"],
        host: { name: "Saleema", joinedYear: 2020, responseRate: "92%" }
      }
    ]
  }
];

export default listings;