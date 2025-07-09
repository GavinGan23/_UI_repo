"use client"

import Link from "next/link";

interface ProductProps {
  location:string, 
  imageSrc:string, 
  title:string, 
  date:string, 
  description1:string, 
  description2:string 
}
function Product({ 
  location, 
  imageSrc, 
  title, 
  date, 
  description1, 
  description2 
}:ProductProps) {
  return (
    <div className="post">
      <div className="thumb_image">
        <div className="post-img">
          <img src="/locate.webp" alt="" className="w-4 h-4"/>
          <a href="#">{location}</a>
        </div>
        <img src={imageSrc} alt="" />
      </div>

      <div className="post-title">{title}</div>
      <div className="post-time">Posted on {date}</div>

      <div className="post-body">
        <p>{description1}</p>
        <p>{description2}</p>

        <div className="read-more">
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default function Coffeeshops() {
  const coffeeShopData = {
    location: "Ann arbor, MI",
    imageSrc: "/vertex.webp",
    title: "Vertex coffee",
    date: "10th Oct, 2020",
    description1: "This coffee shop is an absolute gem! The atmosphere is cozy and inviting, with just the right amount of background chatter and soft music. I ordered a vanilla latte, and it was perfectly balanced—smooth espresso, creamy milk, and just the right touch of sweetness. The barista was friendly and took the time to make sure everything was to my liking. Whether you're looking for a quiet spot to work or a place to catch up with friends, this café nails it. Highly recommend their fresh pastries too—the almond croissant was divine!",
    description2: "I really enjoyed my visit here! The coffee is top-notch, with a rich, bold flavor that stands out. The minimalist decor and ample seating make it a great place to focus or relax. My only small suggestion would be to offer more plant-based milk options (oat milk would be amazing!). Still, the service was quick, and the vibe was perfect for a mid-day break. Will definitely be back to try their cold brew next time!"
  };
    const coffeeShopData2 = {
    location: "Ann arbor, MI",
    imageSrc: "/UMMA.jpg",
    title: "UMMA Cafe",
    date: "2th May, 2023",
    description1: "This café is a delightful retreat with a warm, welcoming atmosphere. The interior blends rustic charm with modern touches—think exposed brick walls, cozy wooden tables, and soft ambient lighting. Their signature espresso drinks are expertly crafted, with a velvety smooth texture and rich, balanced flavor. I especially loved their honey lavender latte, which had just the right amount of sweetness and floral notes. The baristas are friendly and clearly passionate about coffee, taking the time to ensure each cup is perfect. Whether you're stopping by for a morning pick-me-up or settling in for an afternoon of work, this spot offers the ideal blend of comfort and quality.",
    description2: "I really enjoyed my visit here! The coffee is top-notch, with a rich, bold flavor that stands out. The minimalist decor and ample seating make it a great place to focus or relax. My only small suggestion would be to offer more plant-based milk options (oat milk would be amazing!). Still, the service was quick, and the vibe was perfect for a mid-day break. Will definitely be back to try their cold brew next time!"
  };

  return (
    <div className="post-con sec">
      <div className="sec-title">
        Find your Favorite cafe!
      </div>
      <section className="posts-sec">

        <Product 
          location={coffeeShopData.location}
          imageSrc={coffeeShopData.imageSrc}
          title={coffeeShopData.title}
          date={coffeeShopData.date}
          description1={coffeeShopData.description1}
          description2={coffeeShopData.description2}
        />
        <Product 
          location={coffeeShopData2.location}
          imageSrc={coffeeShopData2.imageSrc}
          title={coffeeShopData2.title}
          date={coffeeShopData2.date}
          description1={coffeeShopData2.description1}
          description2={coffeeShopData2.description2}
        />

      </section>
    </div>
  );
}
