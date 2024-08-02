'use client'
import React, { useState } from "react";
import "./RentalProperties.css";
import Link from "next/link";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
const RentalProperties = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [properties] = useState([
    {
      id: 1,
      image: "https://ipropertymedia.com/wp-content/uploads/2016/09/Emaar-Properties-Dubai-Hills-Estate-Sidra-Townhouses-Exterior.jpg",
      name: "Property 1",
      address: "1455 Oakdale Drive, San Antonio, TX 78232",
      bedroom: 2,
      price: "$1000",
      description: "This is a beautiful property with 2 bedrooms and 1 bathroom."
    },

    {
      id: 2,
      image: "https://agoldbergphoto.com/wp-content/uploads/residential/Residential-13-2000x1333.jpg",
      name: "Property 2",
      address: "3421 W 95th Street, Chicago, IL 60643",
      bedroom: 3,
      price: "$1500",
      description: "This is a luxurious property with 3 bedrooms and 2 bathrooms."
    },
    {
      id: 3,
      image: "https://i2.au.reastatic.net/800x600/93763ed090faff85eef52bd61b0438bc7e9f3e1ba1b8496aaa5f9cc518f67c09/image.jpg",
      name: "Property 3",
      address: "1911 Sycamore Street, Newark, CA 94560",
      bedroom: 1,
      price: "$800",
      description: "This is a cozy property with 1 bedroom and 1 bathroom."
    },
    {
      id: 4,
      image: "https://wallpaperaccess.com/full/3434330.jpg",
      name: "Property 4",
      address: "4755 E 42nd Street, Tulsa, OK 74135",
      bedroom: 2,
      price: "$1200",
      description: "This is a spacious property with 2 bedrooms and 2 bathrooms."
    },
    {
      id: 5,
      image: "https://valroofing.com/wp-content/uploads/2019/10/lpc_42577388501-e1572358549496-1030x590.jpg",
      name: "Property 5",
      address: "2111 W 11th Street, Little Rock, AR 72201",
      bedroom: 3,
      price: "$1800",
      description: "This is a modern property with 3 bedrooms and 3 bathrooms."
    },
    {
      id: 6,
      image: "https://images.squarespace-cdn.com/content/v1/52fe340ae4b074ebcf59ad44/1547497831337-WH9ECQVHX7SNZ1T17KOH/Avon3+01.jpg",
      name: "Property 6",
      address: "3555 N 12th Street, Phoenix, AZ 85006",
      bedroom: 1,
      price: "$900",
      description: "This is a charming property with 1 bedroom and 1 bathroom."
    },
    {
      id: 7,
      image: "https://www.mashvisor.com/blog/wp-content/uploads/2018/09/bigstock-Cozy-house-with-beautiful-land-84075557.jpg",
      name: "Property 7",
      address: "1415 S 3rd Street, Louisville, KY 40208",
      bedroom: 2,
      price: "$1100",
      description: "This is a comfortable property with 2 bedrooms and 1 bathroom."
    },
    {
      id: 8,
      image: "https://th.bing.com/th/id/R.79a70a523f8f31d9b2c24b3a196a1c94?rik=t97Y2vWM9lphXA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Rx4RyWtBLMY%2fVTtrVUOGj1I%2fAAAAAAAAD9s%2f8_nVeIgRQLQ%2fs1600%2f1.jpg&ehk=zT7cSyZKfke8pXbLDRR95hoq2ccyXG3Of2NF91avYyU%3d&risl=&pid=ImgRaw&r=0",
      name: "Property 8",
      address: "2811 E 55th Street, Cleveland, OH 44104",
      bedroom: 3,
      price: "$1600",
      description: "This is a stylish property with 3 bedrooms and 2 bathrooms."
    },
    {
      id: 9,
      image: "https://th.bing.com/th/id/R.ff20b5ef8b0405610b226866b74b12f2?rik=eGIy74viLRY%2b%2bA&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2015%2f03%2f02%2f12556168%2fGeneva_Q1_Facade.jpg&ehk=JPpfgQiaCOhK7BwYU8TBB6FCKISsQc%2fvK6kd9ElEKGs%3d&risl=1&pid=ImgRaw&r=0",
      name: "Property 9",
      address: "4955 W 63rd Street, Chicago, IL 60638",
      bedroom: 2,
      price: "$1400",
      description: "This is a lovely property with 2 bedrooms and 2 bathrooms."
    },
    {
      id: 10,
      image: "https://blog.hdestates.com/wp-content/uploads/2020/04/HD-Real-Estate-Photography-scaled.jpg",
      name: "Property 10",
      address: "1111 N 15th Street, Philadelphia, PA 19122",
      bedroom: 4,
      price: "$2000",
      description: "This is a luxurious property with 4 bedrooms and 3 bathrooms."
    }
  ]);
  const [priceFilter, setPriceFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [bedroomsFilter, setBedroomsFilter] = useState("");
  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
    scroll.scrollToTop();
  };

  const filteredProperties = properties.filter((property) => {
    let priceMatch = false;

    if (priceFilter === "0-1000") {
      priceMatch = parseInt(property.price.replace("$", "")) >= 0 && parseInt(property.price.replace("$", "")) <= 1000;
    } else if (priceFilter === "1001-1500") {
      priceMatch = parseInt(property.price.replace("$", "")) >= 1001 && parseInt(property.price.replace("$", "")) <= 1500;
    } else if (priceFilter === "1501-2000") {
      priceMatch = parseInt(property.price.replace("$", "")) >= 1501 && parseInt(property.price.replace("$", "")) <= 2000;
    } else {
      priceMatch = true;
    }
    const locationMatch = locationFilter === "" || property.address.toLowerCase().includes(locationFilter.toLowerCase());
    const bedroomsMatch = bedroomsFilter === "" || property.description.toLowerCase().includes(bedroomsFilter.toLowerCase());

    return priceMatch && locationMatch && bedroomsMatch;
  });

  return (
    <div className="head">
      <div className="filter animate__animated animate__fadeInDown">
        <h1>Rental Properties</h1>
        <button className="btn " onClick={handleToggleFilters}>
          Filters
        </button>
        {showFilters && (
          <div className="filter-options animate__animated animate__fadeInUp">
            <label>
              Price:
              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="pri" >
                <option value="">All</option>
                <option value="0-1000">$0 - $1000</option>
                <option value="1001-1500">$1001 - $1500</option>
                <option value="1501-2000">$1501 - $2000</option>
              </select>
            </label>
            <label>
              Location:
              <input type="text" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="imp" />
            </label>
            <label>
              Bedrooms:
              <input type="text" value={bedroomsFilter} onChange={(e) => setBedroomsFilter(e.target.value)} className="inp" />
            </label>
          </div>
        )}
      </div>
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div key={property.id} className="property animate__animated animate__fadeInUp">
            <Image src={property.image} alt={property.name} width="300" height="200" className="property-image" />
            <h2>{property.name}</h2>
            <h2>{property.address}</h2>
            <p>Bedroom:{property.bedroom}</p>
            <p>Price: {property.price}</p>
            <p>Description: {property.description}</p>
            <Link href={`/booking?id=${property.id}`}>
              <button className="btn btn-primary">
                Book Now
              </button>
            </Link>
            <hr style={{ borderTop: "2px solid #333", margin: "1rem 0" }} />
          </div>
        ))
      ) : (
        <p>No properties found matching your filter criteria.</p>
      )}
    </div>
  );
};

export default RentalProperties;