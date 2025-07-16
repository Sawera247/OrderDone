const products = [
    {
        img: "./img/Mini Crate box.jpg",
        description: "Pack of 4 mini plastic crates — ideal for organizing spices, snacks, or small kitchen items with ease!",
        price:{current: 359, og: 500}
    },
    {
        img: "./img/Storage Jar.jpg",
        description: "3-in-1 storage jar for lentils, spices, snacks, or cereals. Durable plastic, space-saving, random color.",
        price:{current: 499, og: 680}
    },
    {
        img: "./img/Mosquito Racket.jpg",
        description: "Powerful mosquito killer racket with rechargeable battery. Easy to use, comes with protective box for safe storage.",
        price:{current: 1229, og: 1500}
    },
    {
        img: "./img/Organiser Basket.jpg",
        description: "Cute mini cloth basket with random prints — perfect for organizing small items at home or office.",
        price:{current: 159, og: 300}
    },
    {
        img: "./img/Shoe Storage Bag.jpg",
        description: "Durable shoe bag with stylish shoe print — perfect for travel or closet, keeps shoes dust-free and organized.",
        price:{current: 119, og: 277}
    },
    {
        img: "./img/Hanging Garbage.jpg",
        description: "Wall-hanging net bag — stores and dispenses plastic bags, perfect for saving kitchen space.",
        price:{current: 120, og: 250}
    },
    {
        img: "./img/Dino Storage Bag.jpg",
        description: "Spacious dino print bag (48x39cm) — durable, lightweight, ideal for toys, clothes, or laundry.",
        price:{current: 229, og: 410}
    },
    {
        img: "./img/Grids Organiser .jpg",
        description: "24-grid socks organizer — durable, space-saving, perfect for socks, ties, or small items.",
        price:{current: 269, og: 420}
    },
    {
        img: "./img/Black Storage Bag.jpg",
        description: "Spacious black storage bag (20x19in) — durable, easy to carry, perfect for clothes, bedding, or more.",
        price:{current: 169, og: 320}
    },
    {
        img: "./img/Clothes Metal Rod Storage Bag.jpg",
        description: "Fouji metal rod storage bag — thick fabric, visible steel frame, moisture-proof, ideal for clothes. Comes in random colors.",
        price:{current: 599, og: 860}
    },
    {
        img: "./img/Eyebrow Razar.jpg",
        description: "Tinkle Razor (3-pack) — top quality for smooth, precise facial hair and eyebrow grooming.",
        price:{current: 139, og: 289}
    },
    {
        img: "./img/Wellice Onion.jpg",
        description: "Wellice Onion Hair Oil — premium quality, reduces hair fall, boosts growth for stronger, shinier hair.",
        price:{current: 269, og: 440}
    },
    {
        img: "./img/Makeup remover Wipes.jpg",
        description: "Cute Can Makeup Remover Wipes — original, high-quality wipes for gentle, effective daily makeup removal.",
        price:{current: 235, og: 420}
    },
    {
        img: "./img/Sensor Light.jpg",
        description: "Motion Sensor Light for Home  with USB Charging Wireless Self Adhesive LED Body (with box)",
        price:{current: 366, og: 525}
    },
    {
        img: "./img/Marble Sheet.jpg",
        description: "Self-adhesive brown marble sheet (60x200cm) — stylish, heat-resistant, anti-oil, easy to apply for kitchen use.",
        price:{current: 305, og: 489}
    },
    {
        img: "./img/white - Marble Sheet.jpg",
        description: "Self-adhesive white marble sheet (60x200cm) — stylish, heat-resistant, anti-oil, easy to apply for kitchen use.",
        price:{current: 305, og: 489}
    },
    {
        img: "./img/Black Marble Sheet.jpg",
        description: "Self-adhesive black marble sheet (60x200cm) — stylish, heat-resistant, anti-oil, easy to apply for kitchen use.",
        price:{current: 305, og: 489}
    },
    {
        img: "./img/Oil Filter Pot.jpg",
        description: "Kitchen Oil Filter Pot (1.4L) — thick stainless steel with strainer, ideal for safe, easy oil storage and reuse.",
        price:{current: 875, og: 1000}
    },
    {
        img: "./img/Ice Cube Roller.jpg",
        description: "Silicone Ice Cube Roller — soothes puffiness, refreshes skin, and boosts glow. Reusable and easy to use.",
        price:{current: 330, og: 589}
    },
    {
        img: "./img/straightener .jpg",
        description: "5-in-1 Hot Air Styler — straightens, curls, dries, combs, and massages. All-in-one hair tool with box included.",
        price:{current: 2399, og: 3499}
    },
    {
        img: "./img/Crystals Table Lamp.jpg",
        description: "Rechargeable Color-Changing Crystal Lamp — elegant design with soft glow, perfect for bedrooms, decor, or gifting. Box included.",
        price:{current: 850, og: 1000}
    },
    {
        img: "./img/2 In 1 Dumpling Maker.jpg",
        description: "2-in-1 Dumpling Maker — press and mold dough easily for perfect dumplings.",
        price:{current: 229, og: 400}
    },
    {
        img: "./img/5-in-1 Cable Set.jpg",
        description: "5-in-1 60W Charging Cable Set — USB & Type-C combos for all devices. Fast, versatile, and compact.",
        price:{current: 369, og: 550}
    },
    {
        img: "./img/(7 in 1) Multi belt smart watch.jpg",
        description: "7-in-1 Smart Watch — 7 belts, wireless charging, fits S-100/S-200/S-500/S-800. Perfect for daily use or gifting.",
        price:{current: 1720, og: 2000}
    },
    {
        img: "./img/HoneyBee Ice Cube.jpg",
        description: "HoneyBee Ice Cube Tray — cute design with lid, stackable and hygienic. Fun-shaped cubes for any drink!",
        price:{current: 350, og: 520}
    },
    {
        img: "./img/360° Rotating Mop.jpg",
        description: "Triangle Twister Mop 360° Rotating Mop Triangular mop head easy cleaning Automatically twisting water.",
        price:{current: 829, og: 1000}
    },
    {
        img: "./img/Chopper.jpg",
        description: "Speedy Chopper — Good quality plastic, sharp blades for quick chopping, lightweight and handy for everyday use!",
        price:{current: 450, og: 669}
    },
    {
        img: "./img/Steel Thermos Bottle 2.jpg",
        description: "Stainless Steel Thermos (750ml) — durable, stylish, keeps drinks hot or cold for hours. Great for travel and workouts!",
        price:{current: 1000, og: 1399}
    },
    {
        img: "./img/Jewelry Organizer.jpg",
        description: "Large 360° Rotating Makeup Organizer (34x28cm) — spacious, smooth-rotating, and perfect for a neat vanity. Box packed.",
        price:{current: 1750, og: 2000}
    },
    {
        img: "./img/Travel Sling Pack.jpg",
        description: "Chest Bag Crossbody Sling (Random Color) — waterproof, anti-theft, USB port. Lightweight, secure, ideal for travel or daily use.",
        price:{current: 1750, og: 2000}
    },
    {
        img: "./img/paper soap.jpg",
        description: "Flower Soap Tube - Travel Bottle Soap - Steel Cap High Quality.",
        price:{current: 129, og: 200}
    },
    {
        img: "./img/Mini Cooler.jpg",
        description: "2L Zam Zam Mini Cooler with 6 Glasses — keeps water cool and fresh. Compact, stylish, perfect for guests!",
        price:{current: 1329, og: 1600}
    },
    {
        img: "./img/mini washing mashine.jpg",
        description: "Foldable electric mini washing machine, H27cm x W25cm — compact, lightweight, and easy to store for small loads.",
        price:{current: 3000, og: 3599}
    },
    {
        img: "./img/mirror light.jpg",
        description: "LED 10 Pcs Bulb Vanity Mirror Lights — bright, adjustable, and perfect for makeup or dressing tables.",
        price:{current: 1000, og: 1599}
    },
    {
        img: "./img/Kitchen Gloves .jpg",
        description: "2pcs Silicone Kitchen Gloves — soft, multi-use for washing fruits, dishes, and pets (random color).",
        price:{current: 300, og: 599}
    },
    {
        img: "./img/Lighter .jpg",
        description: "Arc USB Lighter — good quality with Type-C charging cable, windproof and rechargeable.",
        price:{current: 399, og: 699}
    },
    {
        img: "./img/foldable table.jpg",
        description: "Foldable wood laptop table — sturdy, portable, and space-saving design for home or office use.",
        price:{current: 1250, og: 1599}
    },
    {
        img: "./img/ice shaver (gola ganda).jpg",
        description: "Premium Quality Ice Shaver — Effortless, fast, and fun way to make refreshing shaved ice at home. Box packed!",
        price:{current: 1350, og: 1699}
    },
    {
        img: "./img/veg cutter.jpg",
        description: "Vegetable Slicer — Slice, shred, and cut veggies fast and evenly. A kitchen essential!",
        price:{current: 1250, og: 1599}
    },
    {
        img: "./img/water mat.jpg",
        description: "Water Play Mat for Kids — Fun, mess-free tummy time and sensory play at home!",
        price:{current: 620, og: 950}
    },
    {
        img: "./img/bubble gun.jpg",
        description: "Bazooka Bubble Gun (32-Hole) — Shoots endless bubbles for nonstop fun! Box included.",
        price:{current: 669, og: 1000}
    },
    {
        img: "./img/jewel box.jpg",
        description: "4-Layer Jewelry Box — Built-in mirror, smart design, and spacious storage. Multicolor (random).",
        price:{current: 620, og: 950}
    },
    {
        img: "./img/rotate jewel box.jpg",
        description: "Large 4-Layer Rotating Jewelry Box — Durable, stackable organizer with spacious storage. (Random color).",
        price:{current: 620, og: 950}
    },
    {
        img: "./img/kids color set.jpg",
        description: "42-Piece Drawing Kit — Complete art set for kids with colors, pencils & more! Random design & colors.",
        price:{current: 500, og: 850}
    },
    {
        img: "./img/sheet.jpg",
        description: "Multi-Purpose Sheet — Use as fridge mat, table cover, or cushion liner. Comes in random colors!",
        price:{current: 259, og: 600}
    },
    {
        img: "./img/dust stopper.jpg",
        description: "Door Bottom Seal Strip (35mm) — Blocks dust & insects. Easy to install. Random color!",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/store box.jpg",
        description: "Panda Storage Box — Foldable, spacious, and perfect for organizing! Random design.",
        price:{current: 220, og: 560}
    },
    {
        img: "./img/shopper storage.jpg",
        description: "Mesh Hanging Kitchen Bag — Perfect for storing plastic bags, or waste. Random color!",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/toy storage.jpg",
        description: "Sturdy Foldable Storage Box — Foldable cardboard design for toys, clothes, or books.",
        price:{current: 220, og: 560}
    },
    {
        img: "./img/plastic stool.jpg",
        description: "Telescopic Folding Stool — Lightweight, foldable, and easy to carry. Comes in a box!",
        price:{current: 1850, og: 2200}
    },
    {
        img: "./img/tiny box.jpg",
        description: "Capto Storage Jar (2800ML) — Large-capacity, airtight, and ideal for kitchen storage!",
        price:{current: 320, og: 680}
    },
    {
        img: "./img/bike cover.jpg",
        description: "Waterproof Bike Cover — Perfect fit for 70cc bikes. Protects against rain, dust, and sun!",
        price:{current: 480, og: 880}
    },
    {
        img: "./img/washing machine cover.jpg",
        description: "Large Washing Machine Cover — Waterproof, dustproof, and perfect for big-size machines!",
        price:{current: 620, og: 980}
    },
    {
        img: "./img/washing machine cover single.jpg",
        description: "Washing Machine Cover — Waterproof, dustproof, and perfect for normal-size machines!",
        price:{current: 460, og: 840}
    },
    {
        img: "./img/cutter with strainer.jpg",
        description: "Vegetable Cutter and Rotating Strainer — 7-in-1 tool includes grater, slicer, and rotating rinse basket.",
        price:{current: 900, og: 1499}
    },
    {
        img: "./img/electric comb.jpg",
        description: "Electric Hair Straightener Brush — smooth, style, and detangle in one go.",
        price:{current: 720, og: 1299}
    },
    {
        img: "./img/cutter 5 in 1.jpg",
        description: "Vegetable Cutter with 5 Stainless Steel Blades — slice, dice, and shred with ease.",
        price:{current: 500, og: 850}
    },
    {
        img: "./img/machine feet.jpg",
        description: "4 Pcs Washing Machine Feet Pads — reduce noise, movement, and floor damage.",
        price:{current: 250, og: 580}
    },
    {
        img: "./img/weight scale.jpg",
        description: "Digital Kitchen Weight Scale — measure ingredients perfectly, accurate and easy-to-use.",
        price:{current: 820, og: 1299}
    },
    {
        img: "./img/water dispenser.jpg",
        description: "Electric Water Dispenser — one-touch pump, mess-free water access.",
        price:{current: 580, og: 899}
    },
    {
        img: "./img/laptop table.jpg",
        description: "Wooden Bed Table — portable and foldable for laptops, meals, or study.",
        price:{current: 1199, og: 1599}
    },
    {
        img: "./img/bottle blender.jpg",
        description: "Mini Juicer Blender — portable, USB-powered, and easy to carry anywhere.",
        price:{current: 860, og: 1299}
    },
    {
        img: "./img/toilet brush.jpg",
        description: "Bathroom Cleaning Brush — non-slip handle and durable plastic bristles.",
        price:{current: 200, og: 499}
    },
    {
        img: "./img/bear wall cup .jpg",
        description: "Bear-Shaped Toothbrush Holder — wall-mounted cup, space-saving, and easy to install.",
        price:{current: 160, og: 380}
    },
    {
        img: "./img/bleach bowl.jpg",
        description: "6-in-1 Facial Mask Set — includes bowl, spatula, brush, puff, and spoon.",
        price:{current: 250, og: 560}
    },
    {
        img: "./img/nail filer.jpg",
        description: "Nail Buffer Set — smooth, shape, and shine with durable sponge files.",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/anti lice comb.jpg",
        description: "Lice Removal Comb — strong grip and fine stainless steel bristles.",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/brush.jpg",
        description: "Hair Dying Brush Kit — includes 3 tools for smooth and even dye application.",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/foot filer.jpg",
        description: "4-in-1 Foot File — callus remover, scrubber, and pedicure tool for smooth feet.",
        price:{current: 150, og: 360}
    },
    {
        img: "./img/foot file.jpg",
        description: "Double-Sided Foot File — professional wooden callus remover for smooth feet.",
        price:{current: 200, og: 480}
    },
    {
        img: "./img/foot scraper.jpg",
        description: "Stainless Steel Foot Care Tool — scraper, clipper, and exfoliator in one",
        price:{current: 200, og: 480}
    }
];

