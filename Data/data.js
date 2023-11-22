const dummydata = [
   { id: 1,
        heading:"realme C53 (Champion Black, 64 GB)",
        Brand: "realme",
        Model: " realme C53",
        price: "10,499",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70",
        description: "This phone is slim and easy to hold as it is only 7.99 mm in size and boasts a slim champion design. You can see a C-angle design that is comfortable to carry and the golden glow of this phone gives a rich and classy look.",
        category: "mobile",
      
    }, 
    {
        id:2,
        heading:"realme C53 (Champion Gold, 128 GB)",
        Brand:"realme",
        Model:"realme C53",
        price:"9,999",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70",
        description:"The powerful octa-core chipset available with this phone enhances your performance and productivity. Supported with up to 12 GB of Dynamic RAM and 128 GB of ROM, your phone responds superfast and has massive storage capacity. Powered with a 5000 mAh battery and 18 W fast charger, this phone can be carried anywhere and can be used all day. You can stay updated with the number of steps, daily walking distance etc., with this mini capsule.",
        category:"mobile",
       },
    {
        id:3,
        heading:"realme 11x 5G (Purple Dawn, 128 GB)",
        Brand:"realme ",
        Model:"realme 11x 5G",
        price:"15,999",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70",
        description:"Avail yourself this 5G smartphone that offers a host of interesting features. The powerful MediaTek Dimensity 6100+ 5G chipset delivers a smooth performance. Click beautiful portraits with the 64 MP AI camera that offers exciting features like Street Photography Mode 4.0, Super Nightscape, 2x In-sensor zoom, and more. Equipped by a 5000 mAh long-lasting battery, this phone runs for a longer duration and can be recharged quickly with the 33 W SUPERVOOC charger available along with this device. Boasting a S-curve structure and 7.89 mm ultra-slim body, this phone is sure to turn many heads. The 120 Hz refresh rate and 17.07 cm (6.72) Dynamic smooth display offers you an immersive entertainment experience. With up to 8 GB RAM + 8 GB Dynamic RAM and 128 GB internal memory, this phone is quick to respond and offers a mammoth storage space. ",
        category:"mobile",
        

    }  ,
    {
        id:4,
        heading:"realme 11 5G (Glory Gold, 256 GB) ",
        Brand:"realme",
        Model:"realme 11 5G",
        price:"19,999",
        image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/j/d/-original-imagtqqddnkayg4x.jpeg?q=70",
        description:"8 GB RAM | 256 GB ROM | Expandable Upto 2 TB",
        heading:"",
        category:"mobile",


    }  ,
    {
        id:5,
        heading:"realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display",
        Model:"realme narzo N53 (Feather Black, 4GB+64GB)",
        Brand:"realme ",
        price:" 7,999",
        image:"https://m.media-amazon.com/images/I/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 64GB ROM",
        category:"mobile",
        

    }  ,
    {
        id:6,
        heading:"realme narzo 60X 5G（Nebula Purple 4GB, 128GB Storage） Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
        Model:"	Realme narzo 60x",
        Brand:"	Realme ",
        price:"11,749",
        image:"https://m.media-amazon.com/images/I/41LR8VAZD2L._SX300_SY300_QL70_FMwebp_.jpg",
        description:"With a 33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% battery and full charge in 70 minutes,5000mAh massive battery, without ever being concerned about the battery running out 50MP Primary Camera,street photography high-quality pictures that catch every details with astounding clarity",
        category:"mobile",
       

    }  ,
    {
        id:7,
        heading:"realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W SUPERVOOC Charger",
        Model:"	Realme narzo 60 5G",
        Brand:"Realme",
        price:" 14,999",
        image:"https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY327_FMwebp_QL65_.jpg",
        description:"Immerse yourself in a smooth and responsive visual experience with our vibrant 90Hz Super AMOLED display. Enjoy seamless scrolling, fluid animations, and razor-sharp image quality, bringing your content to life like never before. Whether you're gaming, browsing, or watching videos, every interaction will be a delight for your eyes.",
        category:"mobile",
       

    }  ,
    {
        id:8,
        heading:"realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) Octa Core Processor | 6.5 inch Large Display",
        Model:"Realme narzo 50i",
        Brand:"Realme",
        price:" 6,299",
        image:"https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_UY327_FMwebp_QL65_.jpg",
        description:"2 GB RAM | 32 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch) HD+ Display | 88.7% Screen-to-body Ratio | LCD Multi-touch Display | 1600-by-720-pixel Resolution | 400 nits Max Brightness (Typical)",
        category:"mobile",
      

    }  ,
    {
        id:9,
        heading:"vivo Y27 (Burgundy Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        Model:"	Y27",
        Brand:"Vivo",
        price:"13,999",
        image:"https://m.media-amazon.com/images/I/41N7Ns2G9mL._SY300_SX300_.jpg",
        description:" 50MP+2MP Rear Camera | 8MP Selfie Camera 16.86 cm (6.64 inch) FHD+ Sunlight Display Memory & SIM: 6GB RAM | 128GB internal memory 44W flashCharge with 5000 mAh battery",
        category:"mobile",
        

    }  ,
    {
        id:10,
        heading:"VIVO V27 5G (Magic Blue, 128 GB) (8 GB RAM)",
        Model:"V27 5G",
        Brand:"vivo",
        price:"29,270",
        image:"https://m.media-amazon.com/images/I/41Ivm0JRrNL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"The Vivo V27 5G smartphone features a wide 3D curved display so that you can experience immersive viewing. It has a colour-changing glass which changes the colour of your smartphone as light changes. Its 50 MP camera enables you with the power to capture stunning images even at night. The Vivo V27 5G smartphone is the perfect phone for you to capture the bright Indian weddings in its pure form. The MediaTek Dimensity 7200 processor allows you to experience its fast processing speed. Thanks to its 66 W Flash Charging you can charge your phone up to 50% in about 18 minutes while the phone is not in use.",
        category:"mobile",
        

    },
    {
        id:11,
        heading:"Vivo V29 5G ((Black, 128 GB) (8 GB RAM))",
        Model:"VIVO V29 5G",
        Brand:"Vivo",
        price:"31,938",
        image:"https://m.media-amazon.com/images/I/31yfSwsfgBL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Explore an exciting range of features on this ultra slim smartphone that features a 3D curved display. Available with smart aura light, this phone provides bright light even in low light environments. The 50 MP front camera with improved Field of View and Auto Focus (AF) allows you to capture stunning selfies like never before. Designed with the inspiration of top Indian wedding photographers, this phone lets you capture impressive wedding portraits that you can instantly post on social media. Available with a 80 W fast charge, you can boost up the battery from 1% to 50% in just 18 minutes. Also packed with a 50 MP OIS night camera, you can effortlessly click beautiful moonlight pics.",
        category:"mobile",
      

    }  ,
    {
        id:12,
        heading:"Vivo V29e 5G (Artistic RED, 256) (8 GB RAM)",
        Model:"VIVO V29E 5G",
        Brand:"Vivo",
        price:"27,695",
        image:"https://m.media-amazon.com/images/I/41FbnSiH4uL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Snapdragon 695 Processor 17.22 cm (6.78 inch) Full HD+ Display 64MP + 8MP | 50MP Front Camera 5000 mAh Battery 120 Hz 3D Curved ScreenLight, Sleek and Slim",
        category:"mobile",
     

    }  ,
    {
        id:13,
        heading:"vivo Y200 5G (Jungle Green, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        Model:"	Y200 5G",
        Brand:"	Vivo",
        price:"21,999",
        image:"https://m.media-amazon.com/images/I/41e7ZRlXQmL._SY300_SX300_.jpg",
        description:"The vivo Y200 5G smartphone comes with dual 64MP+2MP rear camera, 16MP Selfie Camera, Octa-core Processor, 8GB RAM, 128GB ROM, 44W fast charging, 16.94cm 6.67 with FHD+ AMOLED Display, 4800 mAh battery (C-Type) and much more.",
        category:"mobile",
        

    }  ,
    {
        id:14,
        heading:"Vivo Y17s (Glitter Purple, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        Model:"Y17s",
        Brand:"	Vivo",
        price:" 11,499",
        image:"https://m.media-amazon.com/images/I/41P7OQTdd6L._SY300_SX300_.jpg",
        description:"The vivo Y17s smartphone comes with 50MP rear camera +2MP Bokeh, 8MP Selfie Camera , MediaTek Helio G85 Processor, 4GB RAM, 64GB ROM, 15W fast charging, 16.55cm 6.56 with LCD (IPS) Display, 5000mAh battery (C-Type) and much more.",
        category:"mobile",
        

    }  ,
    {
        id:15,
        heading:"Vivo Y02t (Sunset Gold, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers",
        Model:"	Y02t",
        Brand:"vivo",
        price:" 8,999",
        image:"https://m.media-amazon.com/images/I/31Exlee4ifL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"The vivo Y02t smartphone comes with 8MP rear camera, 5MP Selfie Camera, Helio P35 Processor, 4GB RAM, 64GB ROM, 10W fast charging, 16.53cm 6.51 with HD+ LCD (IPS) Display, 5000mAh battery (C-Type) and much more.",
        category:"mobile",
        

    }  ,
    {
        id:16,
        heading:"vivo Y36 (Meteor Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        Model:"	Y36",
        Brand:"Vivo",
        price:" 14,999",
        image:"https://m.media-amazon.com/images/I/417t1C2Zs-L._SY300_SX300_.jpg",
        description:"Processor: Octa-core MediaTek Helio G96 gaming processor clocked at 2.05GHz for excellent gaming performance along with a powerful Mali-G57 MC2 GPU.Display: 6.6 inch FHD+ (2412x1080) display comes with an ultra-smooth 120Hz high refresh rate display and a 90.8% Screen-to-body ratio",
        category:"mobile",
        

    }  ,
    {
        id:17,
        heading:"HP 255 G9 (840T7PA) Notebook (AMD Athlon Silver-3050U/ 4GB RAM/ 256GB SSD/DOS/ 15.6 Screen/ 1 Year Warranty, Black",
        Model:"	HP 255 G9",
        Brand:"HP",
        price:" 20,000",
        image:"https://m.media-amazon.com/images/I/411h29MXJOL._SY300_SX300_QL70_FMwebp_.jpg",
        description:"AMD Athlon Silver 3050U ONLY DOS SOFTWARE INBUILT WINDOWS NOT INSTALLED Memory: Configurations: 4 GB DDR4-256 GB PCIe NVMe M2 Value Solid State Drive Weight Starting at 1.47 kg (3.24 lb) | ITS A DOS PRODUCT WINDOWS TO BE INSTALLED BY THE BUYER 15.6 Inch diagonal, HD (1366 x 768), micro-edge, anti-glare, 250 nits, 45% NTSC 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 SuperSpeed USB Type-C 5Gbps signaling rate; 1 RJ-45; 1 headphone/microphone combo; 1 HDMI 1.4b; 1 AC power (HDMI cable sold separately.)",
        category:"laptop",
      

    }  ,  
    {
        id:18,
        heading:"HP Laptop 15, AMD Ryzen 3 7320U, 15.6-inch (39.6 cm), FHD, 8GB LPDDR5, 512GB SSD, AMD Radeon Graphics, FHD Camera w/Privacy Shutter, Thin & Light (Win 11, MSO 2021, Silver, 1.59 kg), fc0025AU",
        Model:"	15-fc0025AU",
        Brand:"HP",
        price:"33,490",
        image:"https://m.media-amazon.com/images/I/41+susYoQdL._SY300_SX300_.jpg",
        description:"The HP 15.6 Laptop PC comes feature-packed for productivity and making your wallet—and the planet—happy. Built with recycled materials, this powerful HP laptop features an AMD Processor[1], ample storage, and mesmerizing graphics—plus, its 85% screen-to-body ratio[2] and 3-sided narrow bezel offer plenty of room to do and see more that matters.",
        category:"laptop",
      

    }  ,  
    {
        id:19,
        heading:"HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 10, MSO 2019, Silver, 1.69 kg), eq2042AU",
        Model:"	15s-eq2042AU",
        Brand:"HP",
        price:" 37,499",
        image:"https://m.media-amazon.com/images/I/71WNievEkfL._SX522_.jpg",
        description:"Stay connected to what matters most with long-lasting battery life and a thin micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 15.6 inch Laptop features reliable performance and an expansive display, so you can stream, surf and speed through tasks. FREE Upgrade to Windows 11* Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue till 2022. Specific timing will vary by device.",
        category:"laptop",
        

    }  ,  
    {
        id:20,
        heading:"Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6 (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 + MSO'21/15 Months McAfee/Backlit KB/Dark Shadow Grey/2.81kg",
        Model:"Dell Gaming G15",
        Brand:"Dell",
        price:" 73,990",
        image:"https://m.media-amazon.com/images/I/3127OeIPwtL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Processor : 12th Gen Intel Core i5-12500H | Up to 4.50 Ghz | 12 cores | 16 Threads | 18 MB Cache | 45 W TDP // Memory : 16 GB, 2 x 8 GB, DDR5, 4800 MHz // Storage :  1TB SSD Display: 15.6 FHD 1920 x 1080 WVA, Non-Touch, Anti-Glare| 120 Hz ( 9ms ) | 250 nits | 45% NTSCGraphics: NVIDIA GeForce RTX 3050 4 GB GDDR6 with max 90 W TGP",
        category:"laptop",
       

    }  ,  
    {
        id:21,
        heading:"Dell Inspiron 3525 Laptop, AMD Ryzen R3-5300U/8GB/512GB SSD/15.6 (39.62CMs) FHD WVA AG Narrow Border 120Hz 250 nits/Windows 11+MSO'21/15 Month McAfee/Carbon Black/1.68KGs",
        Model:"	Inspiron 15 Laptop",
        Brand:"Dell",
        price:"30,990",
        image:"https://m.media-amazon.com/images/I/41JBi58yw6L._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Processor: AMD 5 Series Ryzen R3-5300U (up to 3.85 GHz. 2MB Cache + 4 Cores) // RAM: 8 GB, 1 x 8 GB, DDR4, 3200 MHz // Storage: 512GB SSD Software: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi-Device Security 15-month subscription Display: 15.6 FHD WVA AG Narrow Border 120Hz 250 nits // Graphics: Radeon Graphics",
        category:"laptop",
       

    }  ,  
    {
        id:22,
        heading:"Dell Inspiron 3511 Laptop, Intel Core i5-1135G7, 8GB, 512GB SSD, 15.6 (39.62cm) 3 Sided Narrow Border Design with FHD Display/Windows 11 + MSO'21/McAfee 15 Months/Carbon Black/1.8kg",
        Model:"Inspiron 3511",
        Brand:"Dell",
        price:"47,700",
        image:"https://m.media-amazon.com/images/I/51M0Yi3zmUL._SX679_.jpg",
        description:"Processor: Intel i5-1135G7 (Up to 4.20 Ghz 4 cores 8MB) // RAM & Storage: 8GB, 8Gx1, DDR4, 3200MHz_2666MHz & 512GB SSD Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription Display & Graphics: 15.6 FHD WVA AG Narrow Border & Integrated Graphics.",
        category:"laptop",
       

    }  ,  
    {
        id:23,
        heading:"(Refurbished) DELL Latitude 5490 Core i5 8th Gen Laptop, 16 GB RAM, 512GB SSD, Intel HD Graphics, 14 inch (36.83 cms) HD Screen, Windows 11 (Upgraded), MS Office, Black, Slim",
        Model:"	Latitue 5490",
        Brand:"Dell",
        price:"25,999",
        image:"https://m.media-amazon.com/images/I/31ZL0JFze8L._SY300_SX300_QL70_FMwebp_.jpg",
        description:"All Amazon Renewed purchases will come with accessories that may be not be original, but will be compatible and fully functional. Amazon Renewed products will be packaged in either original packaging or in a new and clean cardboard box. Product will be clean and may have a few visible signs of earlier use. This renewed product is also covered under Amazon.in Return Policy. Product will be restored to its original factory setting",
        category:"laptop",
        

    }  ,
    {
        id:24,
        heading:"Dell 15 Laptop, Intel Core i3-1115G4 Processor/8GB DDR4/512GB SSD/Intel UHD Graphics/15.6 (39.6cm) FHD 120Hz Refresh Rate 250 nits/Thin & Light 1.66kg/Win 11+MSO'21/15 Month McAfee/Carbon Black",
        Model:"	Vostro 3520",
        Brand:"Dell",
        price:"34,990",
        image:"https://m.media-amazon.com/images/I/41JPd7VZ7LL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Processor: Intel Core i3-1115G4 Processor (up to 4.10 GHz, 6MB Cache, 2 Cores)RAM: 8 GB, 1 x 8 GB, DDR4, 3200 MHz // Storage: 512GB SSD Software: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 with lifetime validity| McAfee Multi Device Security 15-month subscription",
        category:"laptop",
      

    }  ,  
    {
        id:25,
        heading:"Dell Inspiron 3520 Laptop,12th Gen Intel Core i3-1215, Windows 11 + MSO'21, McAfee 15 Months, 8GB, 512GB SSD, 15.6 (39.62Cms) 3 Sided Narrow Border Design with 120Hz FHD Display, Black, 1.65Kgs",
        Model:"Inspiron 3520",
        Brand:"Dell",
        price:" 38,850",
        image:"https://m.media-amazon.com/images/I/41UHS4rypFL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Processor: Intel i3-1215U (to 4.40 GHz), 6 Cores & 10MB Cache // RAM & Storage: 8GB, 8Gx1, DDR4, 2666MHz Ach & 512GB SSD Software: Win 11 Home + Office H&S 2021, 15 Months McAfee antivirus subscription, Dell Cinema – Color profile, Dell Cinema – SmartByte, Dell Cinema – Dell Cinema sound, My Dell, Dell Power Manager, McAfee, Support Assist, Dropbox",
        category:"laptop",
       

    }  ,
    {
        id:26,
        heading:"Acer Extensa 15 Intel Core i3 N305 8 core Processor (8 GB/512 GB SSD/Win11 Home/MS Office Home and Student/Intel UHD Graphics/1.7 KG/Silver) EX215-33 FHD Display Laptop",
        Model:"	Extensa",
        Brand:"Acer",
        price:" 35,450",
        image:"https://m.media-amazon.com/images/I/41T8jSlSfSL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"The New Intel N305 Series: Intel Core i3 8-core N305 Processor with Intel UHD Graphics. Max Turbo Frequency - 3.80 GHz Internal Specifications: Single-channel LPDDR5 SDRAM support 8 GB of onboard LPDDR5 system memory.Storage: 512 GB, PCIe Gen4, 16 Gb/s NVMe",
        category:"laptop",
        

    }  ,  
    {
        id:27,
        heading:"Acer Aspire 3 Laptop AMD Ryzen™ 3 7320U Quad-Core Processor (8 GB/512 GB SSD/Windows 11 Home) A315-24P (39.6 cm) 15.6 Inch Full HD Display",
        Model:"	Aspire 3 15",
        Brand:"Acer",
        price:" 27,990",
        image:"https://m.media-amazon.com/images/I/41rwlkAbySL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"New Ryzen Processor: AMD Ryzen 3 7320U with Base Clock 2.4 GHz and Max Boost Clock 4.1 GHz. With AMD Radeon Graphics.Internal Specifications: Single-channel LPDDR5 SDRAM support, 8 GB of onboard LPDDR5 system memory Display: 15.6 FHD 1920 x 1080, high-brightness Acer ComfyView LED-backlit TFT LCD, 16:9 aspect ratio, Ultra-slim design, Mercury free, environment friendly",
        category:"laptop",
      

    }  ,  
    {
        id:28,
        heading:"Acer Aspire 3 Intel Core i5 12th Generation Laptop (Windows 11 Home/16GB/512 GB SSD/MS Office) A315-59 with 39.6 cm (15.6) Full HD Display, 1.7 Kg, Silver",
        Model:"A315-59",
        Brand:"Acer",
        price:"44,064",
        image:"https://images-na.ssl-images-amazon.com/images/I/417WTvxhPBL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"Powerful Productivity: 12th Generation Intel Core i5-1235U processor delivers unmatched speed and intelligence, from streaming to browsing to photo and video editing and more — experience the performance boost you need for your biggest breakthroughs. (10 cores, 3.30 GHz speed, 12MB Intel Smart Cache);Internal Specifications: 16GB DDR4 memory; 512GB NVMe SSD to store your files and media",
        category:"laptop",
      

    }  ,  
    {
        id:29,
        heading:"Acer Nitro V Gaming Laptop 13th Gen Intel Core i5-13420H with RTX 4050 Graphics 6GB VRAM, 144Hz Display (16GB DDR5/512GB SSD/Windows 11 Home/Wi-Fi 6),15.6(39.6cms) FHD ANV15-51",
        Model:"	ANV15-51",
        Brand:"Acer",
        price:"72,990",
        image:"https://m.media-amazon.com/images/I/516qCPpFXkL._SX522_.jpg",
        description:"Processor: Intel Core i5-13420H processor - 8 cores, max turbo up to 4.60 Ghz | RAM : 16 GB of DDR5 system memory, upgradable to 32 GB (Memory Frequency: Up to 5200 MT/s)Display : 15.6 display with IPS (In-Plane Switching) technology, Full HD 1920 x 1080, Acer ComfyView LED-backlit TFT LCD, 16:9 aspect ratio, supporting 144 Hz refresh rate Graphics : NVIDIA GeForce RTX 4050 with 6 GB of dedicated GDDR6",
        category:"laptop",
        

    }  ,  
    {
        id:30,
        heading:"Acer One 14 Laptop Intel Core i3-1115G4 (Windows 11 Home/8 GB RAM/256 GB SSD/Intel UHD Graphics) Z8-415 with 35.56 cm (14.0) Full HD Display, 1.49 KG, Pure Silver",
        Model:"	Acer one 14",
        Brand:"Acer",
        price:"24,990",
        image:"https://m.media-amazon.com/images/I/41Hbfz0KGZL._SX300_SY300_QL70_FMwebp_.jpg",
        description:"High Performance: Intel Core i3 1115G4 Processor with Intel UHD Graphics Internal Specifications: 8 GB DDR4 SDRAM support: Up to 32 GB Display: 14 Full HD 1920 x 1080 resolution Antiglare LED backlit TFT LCD, 16:9 aspect ratio Storage: 256 GB SSD, M.2 Gen 3 PCIe, Various Connectivity Options: 1 x HDMI, 2 x USB 3.2 Gen 1 Type-A ports & 1 x USB 3.2 Gen 1 Type-C port, Fast connectivity through Gigabit Ethernet",
        category:"laptop",
        

    }  ,
    {
        id:31,
        heading:"Fastrack Trendies Analog Black Dial Women's Watch-NL68006PP01/NP68006PP01",
        Model:"Fastrack Trendies Analog",
        Brand:"Fastrack",
        price:"1,535",
        image:"https://m.media-amazon.com/images/I/51CNRm8CzNL._SX679_.jpg",
        description:"dial color: black, case shape: round, dial glass material: acrylic band color: black, band material: plastic ; lock mechanism: push button clasp ; functionality: plain 3-hand ; occasion: casual watch movement type: quartz, watch display type: analog case material: plastic; case diameter: 38 millimeters, case length:44 mm, case thickness: 12.6 mm",
        category:"watches",

    } ,
    {
        id:32,
        heading:"Fastrack Pink Dial Analog Watch for Women -NR6172SL03",
        Model:"Fastrack Pink Dial Analog",
        Brand:"fastrack",
        price:"1,835",
        image:"https://m.media-amazon.com/images/I/61ey-iSMs8S._SX679_.jpg",
        description:"A trendy pink watch designed to get that perfect girly look.Wear this pink watch on your Sunday brunch with your friends.2 Years Warranty for Manufacturing Defects.Ideal for birthday, anniversary and wedding gift",
        category:"watches",

    } ,
    
    {
        id:33,
        heading:"Fastrack Ruffles Analog Beige Dial Women's Watch-6216QM01/NR6216QM01",
        Model:"Fastrack Ruffles Analog Beige",
        Brand:"fastrack",
        price:"2,875",
        image:"https://m.media-amazon.com/images/I/5159txtY55L._SX679_.jpg",
        description:"3 ATM / 30 m water resistance.Stainless steel back cover High precision quartz analogue movement.Warranty: 2 years Calendar Type: Day-Date; Band Width: 18.0; Case Diameter: 35.3 Millimeters; Water Resistance Depth: 30.0 Meters; Clasp Type: Buckle; Dial Window Material Type: Mineral; Target Gender: Female; Band Color: Brown; Department Name: Womens; Item Shape: Round; Case Material Type: Brass",
        category:"watches",

    } ,
    
    {
        id:34,
        heading:"Fastrack Fundamentals Analog Blue Dial Women's Watch-NL68010SM02/NP68010SM02",
        Model:"Fastrack Fundamentals Analog",
        Brand:"fastrack",
        price:"1,186",
        image:"https://m.media-amazon.com/images/I/813A5ZPTe9L._SY879_.jpg",
        description:"Dial Color: Blue, Case Shape: Round, Dial Glass Material: Mineral Band Color: Silver, Band Material: Stainless Steel Watch Movement Type: Quartz, Watch Display Type: Analog Case Material: Brass, Case Diameter: 36 millimeters Water Resistance Depth: 30 meters 24 Months Manufacturer Warranty on manufacturing defects",
        category:"watches",

    } ,
    {
        id:35,
        heading:"Titan Purple Fashion Basics Analog Red Dial Women's Watch-NN2480WM02",
        Model:"Titan Purple Fashion",
        Brand:"Titan",
        price:" 3,122",
        image:"https://m.media-amazon.com/images/I/71kzF3PM4jL._SY879_.jpg",
        description:"This watch is beautifully designed. This is trendy, classy and stylish.",
        category:"watches",
    } ,
    
    {
        id:36,
        heading:"Titan Neo Iv Analog Black Dial Men's Watch-NL1805NM01/NP1805NM01",
        Model:"Titan Neo Iv Analog Black",
        Brand:"Titan",
        price:" 5,416",
        image:"https://m.media-amazon.com/images/I/71xQq6cAhGL._SY879_.jpg",
        description:"Stay fashionable with Quartz watch from Titan available on Amazon. This Analogue watch has Round Black dial with a dial diameter of 49.2 Millimeters . The Black colored straps in the watch are made of Metal . This watch has 24 Months Manufacturer warranty.",
        category:"watches",
    } ,
    
    {
        id:37,
        heading:"Titan Neo Analog Blue Dial Men's Watch - NN1733KL03/NP1733KL03",
        Model:"Titan Neo Analog Blue",
        Brand:"Titan",
        price:"5,995",
        image:"https://m.media-amazon.com/images/I/719Yet7WJwL._SY679_.jpg",
        description:"Dial Color: Blue, Case Shape: Round, Dial Glass Material: Mineral Band Color: Brown, Band Material: Leather, LOCK MECHANISM: Buckle Watch Movement Type: Quartz, Watch Display Type: Analog Case Material: Metal, Case Diameter: 48 millimeters Water Resistance Depth: 50 meters, Buckle Clasp",
        category:"watches",

    } ,
    
    {
        id:38,
        heading:"Titan Neo Analog Green Dial Men's Watch-1802NL02/NR1802NL02",
        Model:"Titan Neo Analog",
        Brand:"Titan",
        price:"2,395",
        image:"https://m.media-amazon.com/images/I/71cMHKKyNdL._SY741_.jpg",
        description:"Get this stylish and trendy watch for you. Enhance your festive look with this.",
        category:"watches",

    } ,
    {
        id:39,
        heading:"Casio Enticer Analog Rose Gold Dial Women LTP-E157MR-9ADF ( A1693 )",
        Model:"Casio Enticer Analog Rose",
        Brand:"Casio",
        price:" 6,295",
        image:"https://m.media-amazon.com/images/I/71bGvFg1F-L._SY879_.jpg",
        description:"Dial Color: Rose Gold, Case Shape: Round, Dial Glass Material: Mineral Band Color: Rose Gold, Band Material: Stainless Steel Watch Movement Type: Quartz, Watch Display Type: Analog Case Material: Stainless Steel, Case Diameter: 32 millimeters Water Resistance Depth: water resistant meters, Fold-Over Clasp,2 years manufacturer warranty on manufacturing defects",
        category:"watches",


    } ,
    
    {
        
        id:40,
        heading:"Casio Enticer Analog Black Dial Women LTP-E154MR-1ADF ( A1853 )",
        Model:"Casio Enticer Analog",
        Brand:"Casio",
        price:"6,564",
        image:"https://m.media-amazon.com/images/I/61dxuDHooAL._SX679_.jpg",
        description:"Case / bezel material: Stainless steel Adjustable Clasp Stainless Steel Mesh Band Mineral Glass Rose gold ion plated band Rose gold ion plated case Water Resistant Regular timekeeping Analog: 3 hands (hour, minute, second) Accuracy: ±20 seconds per month Approx. battery life: 3 years on SR626SW",
        category:"watches",


    } ,
    
    {
       
        id:41,
        heading:"Casio Analog Black Dial Men's Watch-MTP-VD01B-1BVUDF",
        Model:"Casio Analog Black",
        Brand:"Casio",
        price:"2,936",
        image:"https://m.media-amazon.com/images/I/61iSVNJTTdL._SX679_.jpg",
        description:"This sporty and bold design takes on whatever your schedule holds.With water resistance up to 50 meters and easy-read date display for clear visibility, these watches keep you functioning at your peak all day long.",
        category:"watches",


    } ,
    
    {
       
        id:42,
        heading:"Casio Youth Digital Grey Dial Men's Watch-F-200W-1AUDF",
        Model:"Casio Youth Digital",
        Brand:"Casio",
        price:"1,196",
        image:"https://m.media-amazon.com/images/I/91lXRHZTqgL._SY879_.jpg",
        description:"10-year battery life • Water resistant • Dual time • LED backlight Resin Glass / Spherical Glass Water Resistant Case / bezel material: Resin Resin Band LED backlight Afterglow Dual time 1/100-second stopwatch Measuring capacity: 23:59'59.99'' Measuring modes: Elapsed time, split time, 1st-2nd place times Multi-function alarm (One-time or 7-time snooze) Hourly time signal Auto-calendar (to year 2099) 12/24-hour format Regular timekeeping: Hour, minutes, seconds, pm, month, date, day Accuracy: ±30 seconds per month Approx. battery life: 10 years on CR2025 Size of case: 44.1 X 40 X 11.5 mm total weight: 27.3 g",
        category:"watches",


    } ,
    {
        id:73,
        Brand:"Apple",
        Model:"charger",
        heading:"Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
        price:" 1,699",
        image:"https://m.media-amazon.com/images/I/61vtLhO6fDL._SY741_.jpg",
        description:"The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.iPhone Compatability: iPhone 12 Pro, iPhone 12 Pro Max, iPhone 12 mini, iPhone 12, iPhone 11 Pro, iPhone 11 Pro Max, iPhone 11, iPhone SE (2nd generation), iPhone XS, iPhone XS Max, iPhone XR, iPhone X, iPhone 8, iPhone 8 Plus",
        category:"accessories"
           },
           {
               id:74,
               Brand:"	URBN",
               Model:"Power Bank",
               heading:"URBN 20000 mAh Premium Nano Power Bank | 22.5W Super Fast Charging | Smallest Power Bank | Dual Type C Power Delivery (PD) Output + 1 USB Output for Quick Charge | Two-Way Fast Charge (Camo)",
               price:"2,299",
               image:"https://m.media-amazon.com/images/I/31ZUY877N5L._SX300_SY300_QL70_FMwebp_.jpg",
               description:"Small Size, Big Power: Our Nano Power Bank is the smallest and most compact power bank available in the market today. Despite its compact size, this power bank packs a punch with 20000 mAh of power. Whether you're traveling, camping, or simply on the go, this power bank will ensure you never run out of battery again!",
               category:"accessories"
                  },
                  {
                   id:75,
                   Brand:"	Mi",
                   Model:"Power Bank",
                   heading:"MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black",
                   price:" 1,999",
                   image:"https://m.media-amazon.com/images/I/31grUs8OpvL._SX300_SY300_QL70_FMwebp_.jpg",
                   description:"20000mAh Lithium Polymer battery 18W Fast Charging Triple port output Dual input port (Micro-USB/USB-C, Charging Time : 6.9 hours Power Delivery Advanced 12 Layer chip protection Smart power management 6 months domestic warranty",
                   category:"accessories"
                      },
                      {
                       id:76,
                       Brand:"	Mi",
                       Model:"charger",
                       heading:"Mi 5V Charger|10W Wall Charger with USB Cable|Compatible for Mobile, Headphones, TWS, Game Console, Power Banks|Fast Charging + Quick Data Transfer+BIS Certified|(Adapter+USB to Micro USB Cable)-Black",
                       price:"449",
                       image:"https://m.media-amazon.com/images/I/31H8AoDYAYL._SX300_SY300_QL70_FMwebp_.jpg",
                       description:"Compatible with all devices with micro USB port charging port including smart phone, bluetooth headsets, speakers, smartwatches, powerbanks. Output Current : 2 A. Customer Care Output Power : 10W with upto 480 mbps data transfer speed via the cable, Input port : 50 - 60 Hz, 360 degree Protection - 380V Surge protection, BIS Certified",
                       category:"accessories"
                          },
                          {
                           id:77,
                           Brand:"iPhone,",
                           Model:"charger",
                           heading:"Duracell 65W Fast Car Charger Adapter with Dual Output. Quick Charge, Type C PD 45W & Qualcomm Certified 3.0 20W, Compatible for iPhone, All Smartphones, Tablets & More (Copper & Black)",
                           price:"1,385",
                           image:"https://m.media-amazon.com/images/I/415ScE58rCL._SX300_SY300_QL70_FMwebp_.jpg",
                           description:"Ultra Charging Protection Protects From Short Circuit, Over-Temperature Over-Voltage, Over-Current PD Output (Type-C): 3.6V-6.5V/3A, 6.5V-9V/3A, 9V-12V/3A, 15V/3A, 20V/2.25A QC 3.0 Output (USB-A): 3.6V-6.5V/3A, 6.5V-9V/2.22A, 9V-12V/1.67A PD & QC 3.0 Port Can Charge Two Devices Simultaneously Universal Compatible Devices: Smartphones Tablets, Smart watches, Power Bank",
                           category:"accessories"
                              },
                              {
                               id:78,
                               Brand:"	AILKIN",
                               Model:"charger",
                               heading:"20W PD Charger for iPhone Original 20W PD Fast Type C Wall Charger with Charging Cable Compatible with iPhone 15/15 Plus Pro Max/14 Pro Max/14 Mini/13/12 Max/Xs Max/XR/X/8Plus,iPad (Adapter + Cable)",
                  price:"1,120",
                  image:"https://m.media-amazon.com/images/I/519QSNjlxKL._SX679_.jpg",
                  description:"3X FASTER】 : Fast, durable, and dependable, the adaptor is designed to charge your iOS devices 3X faster than regular Model. The PD adaptor is best-suited with cables for Type C to Type C, and Type C to Lightning charging and connectivity. (suitable for iOS). For best results, we recommend the Portronics PD Cable..【20W Fast Charger Adapter】: I Phone Fast Charger equipped with 20W PD 3.0 USB Type C power delivery wall plug, PD 3.0 Quick-Charge USB C port provides Max 20W output power, charge your device up to 3x faster than original 5W charger,charging your iPhone14 / 13 up to 50% in just 30 minutes, saving over 1.5hrs for you.",
                  category:"accessories"
                     },
                     {
                      id:79,
                      Brand:"	KARWAN",
                      Model:"charger",
                      heading:"Karwan® 15W Qi-Certified Fast Wireless Charging Pad | Compatible with iPhone 13/13 Pro/13 Mini/13 ProMax/12/11, Samsung Galaxy S21/S20/Note 10/Edge Note 20Ultra/S10, AirPods Pro-Black",
                      price:"799",
                      image:"https://m.media-amazon.com/images/I/31S5G0fo2hL._SX300_SY300_QL70_FMwebp_.jpg",
                     description:"The Wireless Charger Glass is compatible with a wide range of devices, including smartphones, tablets, and other Qi-enabled devices. Its advanced charging technology delivers fast and efficient charging, ensuring that your device is fully charged in no time. The charger also features built-in safety measures, including over-voltage protection, over-current protection, and short-circuit protection, ensuring that your device is always safe and secure during charging.",
                      category:"accessories"
                         }, {
                          id:80,
                          Brand:"	URBN",
                          Model:"Power Bank",
                          heading:"URBN 65W Laptop Power Bank with 100W Type C to C Premium Charging Cable with E-Marker Chip for Macbooks, iPhones, Smartphones and Other Supported Devices",
                          price:"4,499 ",
                          image:"https://m.media-amazon.com/images/I/61fBkEvFmHL._SX679_.jpg",
                          description:"roduct 1: Proudly Made In India; It will charge a 3000mAh phone battery up to 7.2 times & It will charge a 4000mAh phone battery up to 5.4 times Product 1: Output: 2 USB Ports + 1 Type-C 65W Fast Charging PProduct 1: Included in the box: 1 Powerbank, 1 Type-C Fast Charging Cable (18W Compatible), User Manual & Warranty Card, ||Charger not included||",
                         category:"accessories"
                             },
                 {
                   id:81,
                   heading:"OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)",
                   Model:"BWZ-2",
                   Brand:"	OnePlus",
                   image:"https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg",
                   price:"1,599",
                   description:"A quick 10-minute charge delivers up to 20 hours of immersive audio playback.The flagship-level battery life delivers up to 30 hours of non-stop music on a single charge. A large 12.4 mm bass driver delivers uncompromisingly deep bass for powerful beats. Experience incredibly rich audio detail at every frequency with the titanium coating dome",
                   category:"Headphones"
                 },
                 {
                   id:82,
                   heading:"pTron Bassbuds Plus in Ear True Wireless Stereo Earbuds with Mic, Deep Bass Bluetooth Headphones, Voice Assistance, IPX4 Sweat & Water Resistant TWS, 12Hrs Battery & Fast Charge (Black)",
                   Model:"Bassbuds Plus",
                   Brand:"	PTron",
                   image:"https://m.media-amazon.com/images/I/61PRAZMNyUL._SX679_.jpg",
                   price:"599",
                   description:"In-Ear True Wireless Stereo Earphones with Hi-Fi Audio & High Bass; Built-in Mic in Each Earbud for Stereo Calls; Ergonomic, Lightweight, Secure-fit & IPX4 Water Resistant Earbuds; Made in India On-the earbuds multi-function buttons allow calls & music control for a hands-free experience. Inline Remote : NoBluetooth 5.0; Fast Pairing; 10m Wireless Range; 4 Hours Playback Time (Earbuds) & 8 Hours Extended Playtime using Charging Case; 3.5 Hours Talk-time; 1.2 Hour Charge Time",
                   category:"Headphones"
                 },
                 
                 {
                   id:83,
                   heading:"Mivi Duopods A25 Bluetooth Truly Wireless in Ear Earbuds with Mic with 40Hours Battery, 13Mm Bass Drivers & Made in India. with Immersive Sound Quality, Voice Assistant, Touch Control (Black)",
                   Model:"	Duopods A25",
                   Brand:"	Mivi",
                   image:"https://m.media-amazon.com/images/I/31mCcX7rQlS._SX300_SY300_QL70_FMwebp_.jpg",
                   price:" 699",
                   description:"Made in India : From design to manufacturing, Mivi DuoPods A25 is proudly made in India. It is built locally to compete globally..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ears",
                   category:"Headphones"
                 },
                 
                 {
                   id:84,
                   heading:"pTron Pride Lite HBE (High Bass Earphones) in Ear Wired Earphones with Mic, 10mm Powerful Driver for Stereo Audio, Noise Cancelling Headset with 1.2m Tangle-Free Cable & 3.5mm Aux - (Blue)",
                   Model:"	Pride Lite",
                   Brand:"	PTron",
                   image:"https://m.media-amazon.com/images/I/41Mq61N0xmL._SX300_SY300_QL70_FMwebp_.jpg",
                   price:" 189",
                   description:"Stylish, metallic look, in-ear stereo audio quality wired headphones with an in-line mic for hands-free phone calls.Ergonomic in-ear design allows passive noise cancelation and outstanding sound performance.Lightweight metal earphones come with 10mm dynamic drivers and neodymium magnets for full-range sound.",
                   category:"Headphones"
                 },
                 
                 {
                   id:85,
                   heading:"Sounce AirPods Pro Case, Soft Silicone Skin Case Cover Shock-Absorbing Protective Case with Keychain Compatible with AirPods Pro [Front LED Visible] (Black)",
                   Model:"AirPods Pro (2019)",
                   Brand:"	Sounce",
                   image:"https://m.media-amazon.com/images/I/41dO3M99-PS._SY300_SX300_QL70_FMwebp_.jpg",
                   price:"199",
                   description:"[Designed for AirPods Pro] Only for Apple AirPods Pro (2019), not compatible with AirPods 1st and AirPods 2st. [Premium Skin-Friendly Material] Made of premium grade silicone, which is different from other materials, not easy to age and break, the protection will be better and it will last longer.[Thickened Silicone Layer] 3.0mm thickness, thicker and stronger than other silicone protective cases, 360-degree full protection body to prevent scratch and fall protection.",
                   category:"Headphones"
                 },
                 {
                   id:86,
                   heading:"Sennheiser HD 450SE (ANC) Bluetooth 5.0 Wireless Over Ear Headphone with Mic, Designed in Germany, Alexa Built-in - Active Noise Cancellation, 30h Battery,Fast Charging, Foldable, 2Yr WARRANTY - Black",
                   Model:"HD 450SE",
                   Brand:"	Sennheiser",
                   image:"https://m.media-amazon.com/images/I/41machJsMZL._SX300_SY300_QL70_FMwebp_.jpg",
                   price:" 7,989",
                   description:"Bluetooth 5.0 technology for effortlessly reliable connectivity including AAC and AptX Low Latency codec support Active noise cancellation (ANC) for uninterrupted listening pleasure 30-hour battery life with USB-C fast charging Intuitive controls including Virtual Assistant button for Alexa, Siri and Google Assistant",
                   category:"Headphones"
                 },
                 
                 {
                   id:87,
                   heading:"Sennheiser CX 80S in-Ear Wired Headphones with in-line One-Button Smart Remote with Microphone Black",
                   Model:"	In Ear",
                   Brand:"Sennheiser",
                   image:"https://m.media-amazon.com/images/I/31VnhITYb+L._SY300_SX300_.jpg",
                   price:"1,490",
                   description:"Uncompressed and balanced Sennheiser sound for a unique listening experience Call & music management via smart remote 3 ear tip sizes for excellent fit and perfect ambient noise isolation Sound pressure level (SPL): 119 dB SPL @ 1 kHz, 1V RMS",
                   category:"Headphones"
                 },
                 
                 {
                   id:88,
                   heading:"Sennheiser Momentum 4 Wireless Headphones – Designed in Germany - Bluetooth Adaptive Noise Cancelling-ANC & customizable sound, 4 digital Mics for crystal-clear calls,60h Battery, 2 Yr WARRANTY, White",
                   Model:"MOMENTUM 4 White",
                   Brand:"	Sennheiser",
                   image:"https://m.media-amazon.com/images/I/41lNHVDXPBL._SX300_SY300_QL70_FMwebp_.jpg",
                   price:"24,989",
                   description:"Maximum audio resolution with Sennheiser Signature Sound: Enjoy premium music quality all-day long thanks to the headphone's audiophile-inspired 42mm transducer system and aptX Adaptive.Personalized sound via the Sennheiser Smart Control App: Adjust the sound to your individual listening preferences via the integrated equalizer, presets and sound modes - for a unique sound experience.",
                   category:"Headphones"
                 },
                 
              
]

// const accessories=[
   
//         ]
module.exports= dummydata
