const products = [
  {
    name: "The North Face Stormbreak 2 Tent",
    image: "/images/the-north-face-stormbreak-2-tent.jpeg",
    description:
      "With large doors and 2 multi-configuration vestibules, The North Face Stormbreak 2 tent offers easy access and a great view of the great outdoors for 2 campers through 3 seasons.",
    brand: "The North Face",
    season: "3-season",
    capacity: "2-person",
    packed_weight: "5 lbs. 14.2 oz.",
    packed_size: "7 x 22 inches",
    floor_dimensions: "87 x 50 inches",
    peak_height: "43 inches",
    door_count: "2 doors",
    canopy_fabric: "75-denier polyester taffeta",
    floor_fabric: "68-denier polyester, 3000mm polyurethane coating",
    price: 159.95,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "NEMO Dagger 2 Tent",
    image: "/images/nemo-dagger-2-tent.jpeg",
    description:
      "Light enough for backpacking yet roomy enough inside to comfortably wait out a rainstorm, the 3-season, 2-person NEMO Dagger 2 tent is a quintessential one-tent wonder.",
    brand: "NEMO",
    season: "3-season",
    capacity: "2-person",
    packed_weight: "3 lbs. 14 oz.",
    packed_size: "6.5 x 19.5 inches",
    floor_dimensions: "90 x 50 inches",
    peak_height: "42 inches",
    door_count: "2 doors",
    canopy_fabric: "15-denier ripstop nylon/no-see-um mesh",
    floor_fabric: "30-denier polyurethane-coated ripstop nylon",
    price: 429.95,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Big Agnes Tiger Wall UL2 Tent",
    image: "/images/big-agnes-tiger-wall-ul2-tent.jpeg",
    description:
      "An exceptionally lightweight 3-season backcountry shelter from Big Agnes, the Big Agnes Tiger Wall UL2 tent has 2 doors and 2 vestibules to make tent life a little easier.",
    brand: "Big Agnes",
    season: "3-season",
    capacity: "2-person",
    packed_weight: "2 lbs. 8 oz.",
    packed_size: "5.5 x 18 inches",
    floor_dimensions: "86 x 52/42 (L x W head/foot) inches",
    peak_height: "39 inches",
    door_count: "2 doors",
    canopy_fabric: "Breathable ripstop nylon/polyester mesh",
    floor_fabric: "Silicone-treated ripstop nylon",
    price: 399.95,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Kelty Discovery Dome 4 Tent",
    image: "/images/kelty-discovery-dome-4-tent.jpeg",
    description:
      "Camping shouldn't break the bank, but finding a quality tent at a low price can be hard—till now. Rest easy with 3 friends in the roomy, weatherproof, easy-to-set-up Kelty Discovery Dome 4 tent.",
    brand: "Kelty",
    season: "3-season",
    capacity: "4-person",
    packed_weight: "9 lbs. 8 oz.",
    packed_size: "10 x 25 inches",
    floor_dimensions: "99 x 80.5 inches",
    peak_height: "59 inches",
    door_count: "1 door",
    canopy_fabric: "68-denier polyester with 1,200mm coating/mesh",
    floor_fabric: "68-denier polyester with 1,200mm coating",
    price: 99.95,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Mountain Hardwear Trango 4 Tent",
    image: "/images/mountain-hardwear-trango-4-tent.jpeg",
    description:
      "A durable, comfy, dry and easy-to-assemble choice for mountaineering adventures, the Mountain Hardwear Trango 2 tent is Engineered to shelter up to 4 climbers in unrelenting alpine conditions.",
    brand: "Mountain Hardwear",
    season: "4-season",
    capacity: "4-person",
    packed_weight: "12 lbs. 12.4 oz.",
    packed_size: "9 x 28 inches",
    floor_dimensions: "96 x 94 inches",
    peak_height: "50 inches",
    door_count: "2 doors",
    canopy_fabric: "40-denier ripstop nylon",
    floor_fabric: "70-denier nylon taffeta, rated 10,000mm waterproof",
    price: 929.95,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Black Diamond Fitzroy Tent",
    image: "/images/black-diamond-fitzroy-tent.jpeg",
    description:
      "A waterproof, single-wall expedition tent strong enough to withstand storms, the Black Diamond Fitzroy tent maximizes headroom and comfortable livability with a 4-pole design and steep sides.",
    brand: "Black Diamond",
    season: "4-season",
    capacity: "2-person",
    packed_weight: "7 lbs. 1 oz.",
    packed_size: "9 x 19 inches",
    floor_dimensions: "93 x 60 inches",
    peak_height: "40 inches",
    door_count: "2 doors",
    canopy_fabric: "ToddTex",
    floor_fabric: "Unavailable",
    price: 899.95,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "NEMO Chogori 3 Tent",
    image: "/images/nemo-chogori-3-tent.jpeg",
    description:
      "The 4-season, 3-person NEMO Chogori 3 mountaineering tent sports advanced materials and an integrated fly that trims weight by 25% and allows for faster setup.",
    brand: "NEMO",
    season: "4-season",
    capacity: "3-person",
    packed_weight: "8 lbs. 7 oz.",
    packed_size: "9.5 x 18.9 inches",
    floor_dimensions: "89 x 80.4 inches",
    peak_height: "46.1 inches",
    door_count: "2 doors",
    canopy_fabric: "Ripstop nylon",
    floor_fabric: "PeU nylon (5,000mm)",
    price: 899.95,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Big Agnes Battle Mountain 2 Tent",
    image: "/images/big-agnes-battle-mountain-2-tent.jpeg",
    description:
      "The Big Agnes Battle Mountain 2 tent is a spacious, lightweight 4-season mountaineering shelter that offers full protection in the harshest of backcountry and high-alpine conditions.",
    brand: "Big Agnes",
    season: "4-season",
    capacity: "2-person",
    packed_weight: "7 lbs. 8 oz.",
    packed_size: "9 x 20 inches",
    floor_dimensions: "84 x 54/58/36 (L x W head/middle/foot) inches",
    peak_height: "42 inches",
    door_count: "2 doors",
    canopy_fabric: "Ripstop nylon/polyester mesh",
    floor_fabric: "Nylon taffeta",
    price: 699.95,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
