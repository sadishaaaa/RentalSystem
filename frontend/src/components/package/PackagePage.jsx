import React from 'react';
import PackageCard from './PackageCard';
import PackageDetails from './PackageDetails';

const packages = [
  {
    id: 1,
    name: "Adventure Package",
    description: "Explore the great outdoors with our adventure package. Includes camping gear, hiking equipment, and more!",
    image: "https://via.placeholder.com/286x180.png",
    items: [
      {
        id: 1,
        name: "Tent",
        quantity: 1,
        price: 50
      },
      {
        id: 2,
        name: "Sleeping Bag",
        quantity: 2,
        price: 30
      },
      {
        id: 3,
        name: "Backpack",
        quantity: 1,
        price: 25
      },
      {
        id: 4,
        name: "Hiking Boots",
        quantity: 2,
        price: 40
      }
    ]
  },
  {
    id: 2,
    name: "Beach Package",
    description: "Enjoy the sun, sand, and surf with our beach package. Includes beach chairs, umbrellas, and more!",
    image: "https://via.placeholder.com/286x180.png",
    items: [
      {
        id: 5,
        name: "Beach Chair",
        quantity: 2,
        price: 10
      },
      {
        id: 6,
        name: "Umbrella",
        quantity: 1,
        price: 20
      },
      {
        id: 7,
        name: "Beach Towel",
        quantity: 4,
        price: 5
      }
    ]
  }
];

const PackagePage = () => {
  return (
    <div>
      <h1>Packages</h1>
      <div className="row">
        {packages.map(pkg => (
          <div className="col-sm-4 mb-3" key={pkg.id}>
            <PackageCard packageData={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagePage;