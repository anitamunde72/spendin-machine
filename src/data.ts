import { Item } from "./types";

export const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Cars",
  "Bikes",
  "Houses",
  "Luxury Watches",
  "Private Jets",
  "Yachts",
  "Businesses",
  "Tourist Destinations"
];

export const items: Item[] = [
  // Smartphones
  { id: "sp-1", name: "iPhone 15 Pro Max", price: 159900, category: "Smartphones", imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400" },
  { id: "sp-2", name: "Samsung Galaxy S24 Ultra", price: 129999, category: "Smartphones", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400" },
  { id: "sp-3", name: "Google Pixel 8 Pro", price: 106999, category: "Smartphones", imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400" },
  { id: "sp-4", name: "Samsung Galaxy Z Fold 5", price: 154999, category: "Smartphones", imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=400" },
  { id: "sp-5", name: "OnePlus 12", price: 64999, category: "Smartphones", imageUrl: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&q=80&w=400" },

  // Laptops
  { id: "lp-1", name: "MacBook Pro M3 Max", price: 399900, category: "Laptops", imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400" },
  { id: "lp-2", name: "Alienware x16 R1", price: 350000, category: "Laptops", imageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400" },
  { id: "lp-3", name: "Razer Blade 16", price: 329999, category: "Laptops", imageUrl: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=400" },
  { id: "lp-4", name: "Asus ROG Zephyrus Duo", price: 380000, category: "Laptops", imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400" },
  { id: "lp-5", name: "ThinkPad X1 Carbon Gen 11", price: 215000, category: "Laptops", imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400" },

  // Cars
  { id: "cr-1", name: "Porsche 911 GT3 RS", price: 35000000, category: "Cars", imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" },
  { id: "cr-2", name: "Lamborghini Revuelto", price: 89000000, category: "Cars", imageUrl: "https://images.unsplash.com/photo-1544636331-e26879cd3d92?auto=format&fit=crop&q=80&w=400" },
  { id: "cr-3", name: "Rolls Royce Phantom", price: 105000000, category: "Cars", imageUrl: "https://images.unsplash.com/photo-1631558556758-cfff2d25087a?auto=format&fit=crop&q=80&w=400" },
  { id: "cr-4", name: "Ferrari SF90 Stradale", price: 75000000, category: "Cars", imageUrl: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=400" },
  { id: "cr-5", name: "Range Rover SV Autobiography", price: 42000000, category: "Cars", imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0b34?auto=format&fit=crop&q=80&w=400" },

  // Bikes
  { id: "bk-1", name: "Ducati Panigale V4 R", price: 7000000, category: "Bikes", imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3cfc?auto=format&fit=crop&q=80&w=400" },
  { id: "bk-2", name: "Kawasaki Ninja H2R", price: 8000000, category: "Bikes", imageUrl: "https://images.unsplash.com/photo-1627092305785-5b80a65942be?auto=format&fit=crop&q=80&w=400" },
  { id: "bk-3", name: "BMW M 1000 RR", price: 4500000, category: "Bikes", imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400" },
  { id: "bk-4", name: "Harley-Davidson CVO Road Glide", price: 5000000, category: "Bikes", imageUrl: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=400" },
  { id: "bk-5", name: "Triumph Rocket 3 R", price: 2200000, category: "Bikes", imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" },

  // Houses
  { id: "hs-1", name: "Mansion in South Mumbai", price: 500000000, category: "Houses", imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400" },
  { id: "hs-2", name: "Beach Villa in North Goa", price: 150000000, category: "Houses", imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=400" },
  { id: "hs-3", name: "Penthouse looking over Marine Drive", price: 350000000, category: "Houses", imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400" },
  { id: "hs-4", name: "Alibaug Farmhouse", price: 120000000, category: "Houses", imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400" },
  { id: "hs-5", name: "Bungalow in Lutyens' Delhi", price: 800000000, category: "Houses", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400" },

  // Luxury Watches
  { id: "wt-1", name: "Rolex Daytona Ice Blue", price: 12000000, category: "Luxury Watches", imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400" },
  { id: "wt-2", name: "Patek Philippe Nautilus 5711", price: 15000000, category: "Luxury Watches", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400" },
  { id: "wt-3", name: "Audemars Piguet Royal Oak Openworked", price: 11000000, category: "Luxury Watches", imageUrl: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=400" },
  { id: "wt-4", name: "Richard Mille RM 11-03", price: 35000000, category: "Luxury Watches", imageUrl: "https://images.unsplash.com/photo-1614165561149-8d76dbf73e72?auto=format&fit=crop&q=80&w=400" },
  { id: "wt-5", name: "Jacob & Co Astronomia Tourbillon", price: 75000000, category: "Luxury Watches", imageUrl: "https://images.unsplash.com/photo-1587836374828-cb43b092a061?auto=format&fit=crop&q=80&w=400" },

  // Private Jets
  { id: "pj-1", name: "Cessna Citation Longitude", price: 2100000000, category: "Private Jets", imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=400" },
  { id: "pj-2", name: "Gulfstream G280", price: 2000000000, category: "Private Jets", imageUrl: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=400" },
  { id: "pj-3", name: "Embraer Phenom 300E", price: 850000000, category: "Private Jets", imageUrl: "https://images.unsplash.com/photo-1555546205-1a3e6af3322f?auto=format&fit=crop&q=80&w=400" },
  { id: "pj-4", name: "Bombardier Challenger 350", price: 2200000000, category: "Private Jets", imageUrl: "https://images.unsplash.com/photo-1510657904791-eb66465377f0?auto=format&fit=crop&q=80&w=400" },
  { id: "pj-5", name: "HondaJet Elite S", price: 450000000, category: "Private Jets", imageUrl: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=400" },

  // Yachts
  { id: "yc-1", name: "Sunseeker Predator 74", price: 300000000, category: "Yachts", imageUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=400" },
  { id: "yc-2", name: "Azimut Grande 27M", price: 650000000, category: "Yachts", imageUrl: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=400" },
  { id: "yc-3", name: "Princess Y85", price: 550000000, category: "Yachts", imageUrl: "https://images.unsplash.com/photo-1544551101-93c6fd87dcb4?auto=format&fit=crop&q=80&w=400" },
  { id: "yc-4", name: "Ferretti Custom Line 106", price: 850000000, category: "Yachts", imageUrl: "https://images.unsplash.com/photo-1565191428574-8b6a38612f00?auto=format&fit=crop&q=80&w=400" },
  { id: "yc-5", name: "Riva 110 Dolcevita", price: 1100000000, category: "Yachts", imageUrl: "https://images.unsplash.com/photo-1520690045500-1c64eb348b03?auto=format&fit=crop&q=80&w=400" },

  // Businesses
  { id: "bs-1", name: "Major IPL Cricket Franchise", price: 8500000000, category: "Businesses", imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400" },
  { id: "bs-2", name: "Series B AI Tech Startup", price: 2500000000, category: "Businesses", imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" },
  { id: "bs-3", name: "Luxury 5-Star Hotel Chain", price: 7500000000, category: "Businesses", imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400" },
  { id: "bs-4", name: "National Pizzeria Chain", price: 3000000000, category: "Businesses", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" },
  { id: "bs-5", name: "Top-Tier Esports Team", price: 500000000, category: "Businesses", imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" },

  // Tourist Destinations
  { id: "td-1", name: "Make a Movie in Space", price: 2500000000, category: "Tourist Destinations", imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400" },
  { id: "td-2", name: "Private Island in Maldives", price: 4000000000, category: "Tourist Destinations", imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=400" },
  { id: "td-3", name: "Luxury Resort in Swiss Alps", price: 1500000000, category: "Tourist Destinations", imageUrl: "https://images.unsplash.com/photo-1517651034446-fa9ddda0c571?auto=format&fit=crop&q=80&w=400" },
  { id: "td-4", name: "Historic Castle in Scotland", price: 800000000, category: "Tourist Destinations", imageUrl: "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&q=80&w=400" },
  { id: "td-5", name: "Safari Lodge and Reserve in Kenya", price: 1200000000, category: "Tourist Destinations", imageUrl: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&q=80&w=400" }
];
