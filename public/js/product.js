const products = [
    {
        img: [
            "./img/Mini Crate box.jpg", 
            "./img/Mini Crate box 2.jpg", 
            "./img/Mini Crate box 3.jpg", 
            "./img/Mini Crate box 4.jpg"
        ],
        description: "Pack of 4 mini plastic crates — ideal for organizing spices, snacks, or small kitchen items with ease!",
        price:{current: 359, og: 500}
    },
    {
        img: [
            "./img/Storage Jar.jpg",
            "./img/Storage Jar 2.jpg"
        ],
        description: "3-in-1 storage jar for lentils, spices, snacks, or cereals. Durable plastic, space-saving, random color.",
        price:{current: 499, og: 680}
    },
    {
        img: [
            "./img/Mosquito Racket.jpg",
            "./video/Mosquito racket vid.mp4"
        ],
        description: "Powerful mosquito killer racket with rechargeable battery. Easy to use, comes with protective box for safe storage.",
        price:{current: 1229, og: 1500}
    },
    {
        img: ["./img/Organiser Basket.jpg"],
        description: "Cute mini cloth basket with random prints — perfect for organizing small items at home or office.",
        price:{current: 159, og: 300}
    },
    {
        img: ["./img/Shoe Storage Bag.jpg"],
        description: "Durable shoe bag with stylish shoe print — perfect for travel or closet, keeps shoes dust-free and organized.",
        price:{current: 119, og: 277}
    },
    {
        img: ["./img/Hanging Garbage.jpg"],
        description: "Wall-hanging net bag — stores and dispenses plastic bags, perfect for saving kitchen space.",
        price:{current: 120, og: 250}
    },
    {
        img: ["./img/Dino Storage Bag.jpg"],
        description: "Spacious dino print bag (48x39cm) — durable, lightweight, ideal for toys, clothes, or laundry.",
        price:{current: 229, og: 410}
    },
    {
        img: ["./img/Grids Organiser .jpg"],
        description: "24-grid socks organizer — durable, space-saving, perfect for socks, ties, or small items.",
        price:{current: 269, og: 420}
    },
    {
        img: ["./img/Black Storage Bag.jpg"],
        description: "Spacious black storage bag (20x19in) — durable, easy to carry, perfect for clothes, bedding, or more.",
        price:{current: 169, og: 320}
    },
    {
        img: ["./img/Clothes Metal Rod Storage Bag.jpg"],
        description: "Fouji metal rod storage bag — thick fabric, visible steel frame, moisture-proof, ideal for clothes. Comes in random colors.",
        price:{current: 599, og: 860}
    },
    {
        img: ["./img/Eyebrow Razar.jpg"],
        description: "Tinkle Razor (3-pack) — top quality for smooth, precise facial hair and eyebrow grooming.",
        price:{current: 139, og: 289}
    },
    {
        img: ["./img/Wellice Onion.jpg"],
        description: "Wellice Onion Hair Oil — premium quality, reduces hair fall, boosts growth for stronger, shinier hair.",
        price:{current: 269, og: 440}
    },
    {
        img: ["./img/Makeup remover Wipes.jpg"],
        description: "Cute Can Makeup Remover Wipes — original, high-quality wipes for gentle, effective daily makeup removal.",
        price:{current: 235, og: 420}
    },
    {
        img: [
            "./img/Sensor Light.jpg",
            "./video/light sensor.mp4"
        ],
        description: "Motion Sensor Light for Home  with USB Charging Wireless Self Adhesive LED Body (with box)",
        price:{current: 366, og: 525}
    },
    {
        img: [
            "./img/white - Marble Sheet.jpg",
            "./img/Black Marble Sheet.jpg",
            "./img/Marble Sheet.jpg",
            "./video/marble sheet vid.mp4"
        ],
        description: "Self-adhesive marble sheet (60x200cm) — stylish, heat-resistant, anti-oil, easy to apply for kitchen use.",
        price:{current: 305, og: 489},
        color:["white", "Black", "Brown"]
    },
    {
        img: [
            "./img/Oil Filter Pot.jpg",
            "./video/oil strainer vid.mp4"
        ],
        description: "Kitchen Oil Filter Pot (1.4L) — thick stainless steel with strainer, ideal for safe, easy oil storage and reuse.",
        price:{current: 875, og: 1000}
    },
    {
        img: ["./img/Ice Cube Roller.jpg"],
        description: "Silicone Ice Cube Roller — soothes puffiness, refreshes skin, and boosts glow. Reusable and easy to use.",
        price:{current: 330, og: 589}
    },
    {
        img: [
            "./img/straightener .jpg",
            "./video/5 in 1 hot styler vid.mp4"
        ],
        description: "5-in-1 Hot Air Styler — straightens, curls, dries, combs, and massages. All-in-one hair tool with box included.",
        price:{current: 2399, og: 3499}
    },
    {
        img: [
            "./img/Crystals Table Lamp.jpg",
            "./video/lamp vid.mp4"
        ],
        description: "Rechargeable Color-Changing Crystal Lamp — elegant design with soft glow, perfect for bedrooms, decor, or gifting. Box included.",
        price:{current: 850, og: 1000}
    },
    {
        img: [
            "./img/2 In 1 Dumpling Maker.jpg",
            "./video/dumpling maker vid.mp4"
        ],
        description: "2-in-1 Dumpling Maker — press and mold dough easily for perfect dumplings.",
        price:{current: 229, og: 400}
    },
    {
        img: [
            "./img/5-in-1 Cable Set.jpg",
            "./img/5-in-1 Cable Set 2.jpg",
            "./video/cable vid.mp4"
        ],
        description: "5-in-1 60W Charging Cable Set — USB & Type-C combos for all devices. Fast, versatile, and compact.",
        price:{current: 369, og: 550}
    },
    {
        img: ["./img/(7 in 1) Multi belt smart watch.jpg"],
        description: "7-in-1 Smart Watch — 7 belts, wireless charging, fits S-100/S-200/S-500/S-800. Perfect for daily use or gifting.",
        price:{current: 1720, og: 2000}
    },
    {
        img: [
            "./img/HoneyBee Ice Cube.jpg",
            "./video/honey shape ice cube vid.mp4"
        ],
        description: "HoneyBee Ice Cube Tray — cute design with lid, stackable and hygienic. Fun-shaped cubes for any drink!",
        price:{current: 350, og: 520}
    },
    {
        img: [
            "./img/360° Rotating Mop.jpg",
            "./video/mop vid.mp4"
        ],
        description: "Triangle Twister Mop 360° Rotating Mop Triangular mop head easy cleaning Automatically twisting water.",
        price:{current: 829, og: 1000}
    },
    {
        img: [
            "./img/Chopper.jpg",
            "./img/Chopper 2.jpg",
            "./img/Chopper 3.jpg",
            "./img/Chopper 4.jpg",
            "./img/chopper 5.jpg",
            "./img/chopper 6.jpg"
        ],
        description: "Speedy Chopper — Good quality plastic, sharp blades for quick chopping, lightweight and handy for everyday use!",
        price:{current: 450, og: 669}
    },
    {
        img: [
            "./img/Steel Thermos Bottle 2.jpg",
            "./img/Steel Thermos Bottle.jpg",
            "./img/Steel Thermos Bottle 3.jpg",
            "./img/Steel Thermos Bottle 4.jpg"
        ],
        description: "Stainless Steel Thermos (750ml) — durable, stylish, keeps drinks hot or cold for hours. Great for travel and workouts!",
        price:{current: 1000, og: 1399}
    },
    {
        img: [
            "./img/Jewelry Organizer.jpg",
            "./video/360 jewel organizer.mp4"
        ],
        description: "Large 360° Rotating Makeup Organizer (34x28cm) — spacious, smooth-rotating, and perfect for a neat vanity. Box packed.",
        price:{current: 1750, og: 2000}
    },
    {
        img: [
            "./img/Travel Sling Pack.jpg",
            "./img/Travel Sling Pack 2.jpg",
            "./img/Travel Sling Pack 3.jpg",
            "./img/Travel Sling Pack 5.jpg"
        ],
        description: "Chest Bag Crossbody Sling (Random Color) — waterproof, anti-theft, USB port. Lightweight, secure, ideal for travel or daily use.",
        price:{current: 1750, og: 2000}
    },
    {
        img: ["./img/paper soap.jpg"],
        description: "Flower Soap Tube - Travel Bottle Soap - Steel Cap High Quality.",
        price:{current: 129, og: 200}
    },
    {
        img: [
            "./img/Mini Cooler.jpg",
            "./video/zamzam vid.mp4"
        ],
        description: "2L Zam Zam Mini Cooler with 6 Glasses — keeps water cool and fresh. Compact, stylish, perfect for guests!",
        price:{current: 1329, og: 1600}
    },
    {
        img: [
            "./img/mini washing mashine.jpg",
            "./video/mini washing machine .mp4"
        ],
        description: "Foldable electric mini washing machine, H27cm x W25cm — compact, lightweight, and easy to store for small loads.",
        price:{current: 3000, og: 3599}
    },
    {
        img: [
            "./img/mirror light.jpg",
            "./video/mirror bulb.mp4"
        ],
        description: "LED 10 Pcs Bulb Vanity Mirror Lights — bright, adjustable, and perfect for makeup or dressing tables.",
        price:{current: 1000, og: 1599}
    },
    {
        img: [
            "./img/Kitchen Gloves .jpg",
            "./video/silicon glove.mp4"
        ],
        description: "2pcs Silicone Kitchen Gloves — soft, multi-use for washing fruits, dishes, and pets (random color).",
        price:{current: 300, og: 599}
    },
    {
        img: [
            "./img/Lighter .jpg",
            "./video/Lighter.mp4"
        ],
        description: "Arc USB Lighter — good quality with Type-C charging cable, windproof and rechargeable.",
        price:{current: 399, og: 699}
    },
    {
        img: [
            "./img/foldable table.jpg",
            "./video/laptop table.mp4"
        ],
        description: "Foldable wood laptop table — sturdy, portable, and space-saving design for home or office use.",
        price:{current: 1250, og: 1599}
    },
    {
        img: [
            "./img/ice shaver (gola ganda).jpg",
            "./video/Ice Shaver.mp4"
        ],
        description: "Premium Quality Ice Shaver — Effortless, fast, and fun way to make refreshing shaved ice at home. Box packed!",
        price:{current: 1350, og: 1699}
    },
    {
        img: [
            "./img/veg cutter.jpg",
            "./video/veg slicer.mp4"
        ],
        description: "Vegetable Slicer — Slice, shred, and cut veggies fast and evenly. A kitchen essential!",
        price:{current: 1250, og: 1599}
    },
    {
        img: [
            "./img/water mat.jpg",
            "./video/water mat.mp4"
        ],
        description: "Water Play Mat for Kids — Fun, mess-free tummy time and sensory play at home!",
        price:{current: 620, og: 950}
    },
    {
        img: [
            "./img/bubble gun.jpg",
            "./img/bubble gun 2.jpg",
            "./video/bubble gun.mp4"
        ],
        description: "Bazooka Bubble Gun (32-Hole) — Shoots endless bubbles for nonstop fun! Box included.",
        price:{current: 669, og: 1000}
    },
    {
        img: [
            "./img/jewel box.jpg",
            "./img/jewel box 2.jpg",
            "./img/jewel box 3.jpg",
            "./img/jewel box 4.jpg",
            "./video/jewel box.mp4"
        ],
        description: "4-Layer Jewelry Box — Built-in mirror, smart design, and spacious storage. Multicolor (random).",
        price:{current: 620, og: 950}
    },
    {
        img: [
            "./img/rotate jewel box.jpg",
            "./video/jewelry box.mp4"
        ],
        description: "Large 4-Layer Rotating Jewelry Box — Durable, stackable organizer with spacious storage. (Random color).",
        price:{current: 620, og: 950}
    },
    {
        img: [
            "./img/kids color set.jpg",
            "./video/color set.mp4"
        ],
        description: "42-Piece Drawing Kit — Complete art set for kids with colors, pencils & more! Random design & colors.",
        price:{current: 500, og: 850}
    },
    {
        img: ["./img/sheet.jpg"],
        description: "Multi-Purpose Sheet — Use as fridge mat, table cover, or cushion liner. Comes in random colors!",
        price:{current: 259, og: 600}
    },
    {
        img: ["./img/dust stopper.jpg"],
        description: "Door Bottom Seal Strip (35mm) — Blocks dust & insects. Easy to install. Random color!",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/store box.jpg",
            "./video/panda.mp4"
        ],
        description: "Panda Storage Box — Foldable, spacious, and perfect for organizing! Random design.",
        price:{current: 220, og: 560}
    },
    {
        img: ["./img/shopper storage.jpg"],
        description: "Mesh Hanging Kitchen Bag — Perfect for storing plastic bags, or waste. Random color!",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/toy storage.jpg",
            "./img/toy storage 2.jpg",
            "./img/toy storage 3.jpg"
        ],
        description: "Sturdy Foldable Storage Box — Foldable cardboard design for toys, clothes, or books.",
        price:{current: 220, og: 560}
    },
    {
        img: [
            "./img/plastic stool.jpg",
            "./img/plastic stool 2.jpg",
            "./img/plastic stool 3.jpg",
            "./img/plastic stool 4.jpg",
        ],
        description: "Telescopic Folding Stool — Lightweight, foldable, and easy to carry. Comes in a box!",
        price:{current: 1850, og: 2200}
    },
    {
        img: [
            "./img/tiny box.jpg",
            "./img/tiny box 2.jpg"
        ],
        description: "Capto Storage Jar (2800ML) — Large-capacity, airtight, and ideal for kitchen storage!",
        price:{current: 320, og: 680}
    },
    {
        img: ["./img/bike cover.jpg"],
        description: "Waterproof Bike Cover — Perfect fit for 70cc bikes. Protects against rain, dust, and sun!",
        price:{current: 480, og: 880}
    },
    {
        img: [
            "./img/washing machine cover.jpg",
            "./img/washing machine cover 2.jpg",
        ],
        description: "Large Washing Machine Cover — Waterproof, dustproof, and perfect for big-size machines!",
        price:{current: 620, og: 980}
    },
    {
        img: [
            "./img/washing machine cover single.jpg",
            "./img/washing machine cover single 2.jpg",
        ],
        description: "Washing Machine Cover — Waterproof, dustproof, and perfect for normal-size machines!",
        price:{current: 460, og: 840}
    },
    {
        img: [
            "./img/cutter with strainer.jpg",
            "./video/veg cutter.mp4"
        ],
        description: "Vegetable Cutter and Rotating Strainer — 7-in-1 tool includes grater, slicer, and rotating rinse basket.",
        price:{current: 900, og: 1499}
    },
    {
        img: [
            "./img/electric comb.jpg",
            "./video/straight comb.mp4"
        ],
        description: "Electric Hair Straightener Brush — smooth, style, and detangle in one go.",
        price:{current: 720, og: 1299}
    },
    {
        img: [
            "./img/cutter 5 in 1.jpg", 
            "./video/cutter.mp4"
        ],
        description: "Vegetable Cutter with 5 Stainless Steel Blades — slice, dice, and shred with ease.",
        price:{current: 500, og: 850}
    },
    {
        img: ["./img/machine feet.jpg"],
        description: "4 Pcs Washing Machine Feet Pads — reduce noise, movement, and floor damage.",
        price:{current: 250, og: 580}
    },
    {
        img: [
            "./img/weight scale.jpg", 
            "./video/weight scale.mp4"
        ],
        description: "Digital Kitchen Weight Scale — measure ingredients perfectly, accurate and easy-to-use.",
        price:{current: 820, og: 1299}
    },
    {
        img: ["./img/water dispenser.jpg"],
        description: "Electric Water Dispenser — one-touch pump, mess-free water access.",
        price:{current: 580, og: 899}
    },
    {
        img: ["./img/laptop table.jpg"],
        description: "Wooden Bed Table — portable and foldable for laptops, meals, or study.",
        price:{current: 1199, og: 1599}
    },
    {
        img: [
            "./img/bottle blender.jpg",
            "./img/bottle blender 2.jpg"
        ],
        description: "Mini Juicer Blender — portable, USB-powered, and easy to carry anywhere.",
        price:{current: 860, og: 1299}
    },
    {
        img: [
            "./img/toilet brush.jpg",
            "./img/toilet brush 2.jpg",
            "./img/toilet brush 3.jpg",
        ],
        description: "Bathroom Cleaning Brush — non-slip handle and durable plastic bristles.",
        price:{current: 200, og: 499}
    },
    {
        img: [
            "./img/bear wall cup .jpg",
            "./img/bear wall cup 2.jpg",
            "./img/bear wall cup 3.jpg"
        ],
        description: "Bear-Shaped Toothbrush Holder — wall-mounted cup, space-saving, and easy to install.",
        price:{current: 160, og: 380}
    },
    {
        img: [
            "./img/bleach bowl.jpg",
            "./img/bleach bowl 2.jpg",
            "./img/bleach bowl 3.jpg"
        ],
        description: "6-in-1 Facial Mask Set — includes bowl, spatula, brush, puff, and spoon.",
        price:{current: 250, og: 560}
    },
    {
        img: [
            "./img/nail filer.jpg",
            "./img/nail filer 2.jpg",
            "./img/nail filer 3.jpg",
            "./img/nail filer 4.jpg",
        ],
        description: "Nail Buffer Set — smooth, shape, and shine with durable sponge files.",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/anti lice comb.jpg",
            "./img/anti lice comb 2.jpg",
            "./img/anti lice comb 3.jpg",
            "./img/anti lice comb 4.jpg"
        ],
        description: "Lice Removal Comb — strong grip and fine stainless steel bristles.",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/brush.jpg",
            "./img/brush 2.jpg",
            "./img/brush 3.jpg"
        ],
        description: "Hair Dying Brush Kit — includes 3 tools for smooth and even dye application.",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/foot filer.jpg",
            "./img/foot filer 2.jpg"
        ],
        description: "4-in-1 Foot File — callus remover, scrubber, and pedicure tool for smooth feet.",
        price:{current: 150, og: 360}
    },
    {
        img: [
            "./img/foot file.jpg",
            "./img/foot file 2.jpg",
        ],
        description: "Double-Sided Foot File — professional wooden callus remover for smooth feet.",
        price:{current: 200, og: 480}
    },
    {
        img: [
            "./img/foot scraper.jpg",
            "./img/foot scraper 2.jpg",
            "./img/foot scraper 3.jpg",
        ],
        description: "Stainless Steel Foot Care Tool — scraper, clipper, and exfoliator in one.",
        price:{current: 200, og: 480}
    },
    {
        img: ["./img/umrah box.jpg"],
        description: "Wooden Umrah Saving Box with 280-Day Tracker — Perfect for Daily Halal Savings Toward Hajj & Umrah.",
        price:{current: 360, og: 750}
    },
    {
        img: ["./img/brush organizer.jpg"],
        description: "360° Rotating Makeup Organizer – Stylish Brush & Cosmetic Holder for Easy Access and Storage.",
        price:{current: 650, og: 999}
    },
    {
        img: ["./img/cutter and strainer.jpg"],
        description: "(7 in 1) Multifunction Vegetable Cutter with Wet Rotating Drain Basket & Strainer.",
        price:{current: 860, og: 1299}
    },
    {
        img: ["./img/massagerr.jpg"],
        description: "6-Speed Massage Gun with 4 Heads – Rechargeable & Deep Tissue Relief (Premium Box Packaging).",
        price:{current: 2000, og: 2699}
    },
    {
        img: ["./img/360 mop.jpg"],
        description: "360° Triangle Adjustable Mop with Twist Squeeze – Flexible & Easy Cleaning Tool.",
        price:{current: 760, og: 1100}
    },
    {
        img: ["./img/nebulizer.jpg"],
        description: "Rechargeable Portable Mesh Nebulizer – Compact & Quiet Breathing Relief Device.",
        price:{current: 1220, og: 1699}
    },
    {
        img: [
            "./img/hanger.jpg",
            "./img/hanger 2.jpg",
            "./img/hanger 3.jpg",
        ],
        description: "Multipurpose Plastic Children's Clothes Hangers – Pack of 10, Lightweight & Durable.",
        price:{current: 300, og: 700}
    },
    {
        img: ["./img/foldable cup.jpg"],
        description: "Compact Folding Travel Cup – Portable & Lightweight Magic Plastic Glass for On-the-Go Use.",
        price:{current: 100, og: 399}
    },
    {
        img: ["./img/smash.jpg"],
        description: "Stainless Steel Garlic Press – Heavy-Duty Crusher for Effortless Mincing.",
        price:{current: 249, og: 600}
    },
    {
        img: ["./img/puller.jpg"],
        description: "Rubber Tummy Trimmer Puller – Home Workout Equipment for Abs & Core Training.",
        price:{current: 650, og: 1000}
    },
    {
        img: [
            "./img/bottle.jpg",
            "./img/bottle 2.jpg"
        ],
        description: "Plastic Single Flask Water Bottle – Lightweight & Durable (Random Color).",
        price:{current: 220, og: 600}
    },
    {
        img: [
            "./img/mug blender.jpg",
            "./img/mug blender 2.jpg",
            "./img/mug blender 3.jpg",
            "./img/mug blender 4.jpg"
        ],
        description: "Portable Crusher Juicer Blender with Straw Cup – Mini Cordless Juicing Cup for Home & Outdoor Use (Random Color).",
        price:{current: 1000, og: 1499}
    },
    {
        img:[
              "./img/gift set sil 1.jpg",
              "./img/gift set sil 2.jpg", 
              "./img/gift set sil 3.jpg", 
              "./img/gift set sil 4.jpg", 
              "./img/gift set sil 5.jpg"
            ],
        description: "Diamond Stone Jewelry Set – Includes Watch, Bracelet, Locket, Earrings & Ring – Silver, Premium Quality with Box.",
        price:{current: 1500, og: 2000},
        color:['1', '2', '3', '4', '5']
    },
    {
        img: [
            "./img/gift set gold 1.jpg",
            "./img/gift set gold 2.jpg",
            "./img/gift set gold 3.jpg",
            "./img/gift set gold 4.jpg",
            "./img/gift set gold 5.jpg",
            "./img/gift set gold 6.jpg",
            "./img/gift set gold 7.jpg",
            "./img/gift set gold 8.jpg",
            "./img/gift set gold 9.jpg",
            "./img/gift set gold 10.jpg",
        ],
        description: "Diamond Stone Jewelry Set – Includes Watch, Bracelet, Locket, Earrings & Ring – Golden, Premium Quality with Box.",
        price:{current: 1500, og: 2000},
        color:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    {
        img: [
            "./img/aqua gents 1.jpg",
            "./img/aqua gents 2.jpg",
            "./img/aqua gents 3.jpg",
            "./img/aqua gents 4.jpg",
            "./img/aqua gents 5.jpg",
            "./img/aqua gents 6.jpg",
            "./img/aqua gents 7.jpg",
            "./img/aqua gents 8.jpg",
            "./img/aqua gents 9.jpg",
            "./img/aqua gents 10.jpg",
            "./img/aqua gents 11.jpg",
            "./img/aqua gents 12.jpg",
            "./img/aqua gents 13.jpg",
        ],
        description: "Aqua Gants Skamitan Watch – Stylish Dial, Quality Straps, Premium Look & Gift Box Included.",
        price:{current: 750, og: 1199},
        color:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
    },
    {
        img: [
            "./img/couple watch 1.jpg",
            "./img/couple watch 2.jpg",
            "./img/couple watch 3.jpg",
            "./img/couple watch 4.jpg",
        ],
        description: "Rolex Couple Watches – Slim Dial, Quality Strap, Elegant Design – Includes Gift Box (Limited Stock).",
        price:{current: 1100, og: 1599},
        color:['1', '2', '3', '4']
    },
    {
        img: [
            "./img/SILICON RUBBER STREP 1.jpg",
            "./img/SILICON RUBBER STREP 2.jpg",
            "./img/SILICON RUBBER STREP 3.jpg",
            "./img/SILICON RUBBER STREP 4.jpg",
            "./img/SILICON RUBBER STREP 5.jpg",
            "./img/SILICON RUBBER STREP 6.jpg",
        ],
        description: "D.LON Ladies Fancy Strap Collection – Stylish Silicone Strap Watches – Elegant Designs at a Discounted Price.",
        price:{current: 600, og: 950},
        color:['1', '2', '3', '4', '5', '6']
    },
    {
        img: [
            "./img/MEN'S WATCH 1.jpg",
            "./img/MEN'S WATCH 2.jpg",
            "./img/MEN'S WATCH 3.jpg",
            "./img/MEN'S WATCH 4.jpg",
            "./img/MEN'S WATCH 5.jpg",
            "./img/MEN'S WATCH 6.jpg",
            "./img/MEN'S WATCH 7.jpg",
            "./img/MEN'S WATCH 8.jpg",
        ],
        description: "D.LON Men's Watch – Skeleton Dial, Glass Back, Push Button Lock, Stylish Design at a Reasonable Price.",
        price:{current: 800, og: 1299},
        color:['1', '2', '3', '4', '5', '6', '7', '8']
    },
    {
        img: [
            "./img/STEE CHIN 1.jpg",
            "./img/STEE CHIN 2.jpg",
            "./img/STEE CHIN 3.jpg",
            "./img/STEE CHIN 4.jpg",
            "./img/STEE CHIN 5.jpg",
        ],
        description: "Rolex Gift Box Set – Steel Chain Watch with Button Lock, Matching Diamond Bracelet & Ring.",
        price:{current: 1700, og: 2200},
        color:['1', '2', '3', '4', '5']
    },
];

products.forEach((product, index) => {
  product.id = `p${index + 1}`;
});

export { products };