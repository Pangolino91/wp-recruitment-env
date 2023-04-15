import React, { useContext, useEffect, useState } from 'react';
import { ACFContext } from '@src/scripts/react-hero/store/store.js';

const Gallery = () => {
  const { acfData, isLoading } = useContext(ACFContext);
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    setGalleryData(acfData?.gallery);
  }, [acfData]);

  return (
    <div className="flex flex-wrap container mx-auto justify-between">
      <div className="w-full md:w-1/3 mb-8 text-center">
        <img
          src={galleryData?.first_card?.image}
          alt="Image 1"
          className="w-full mb-4 mx-auto p-3"
        />
          <img
            src={galleryData?.first_card?.icon}
            alt="Image"
            className="block max-w-[130px] mx-auto py-8"
          />
        <div className="flex items-center justify-center mb-4">
          <div>
            <h3 className="text-lg font-medium mb-1">
              {galleryData?.first_card?.title}
            </h3>
            <p className="text-gray-500">{galleryData?.first_card?.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mb-8 text-center">
        <img
          src={galleryData?.second_card?.image}
          alt="Image 2"
          className="w-full mb-4 mx-auto p-3"
        />
          <img
            src={galleryData?.second_card?.icon}
            alt="Image"
            className="block max-w-[130px] mx-auto py-8"
          />
        <div className="flex items-center justify-center mb-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Image Title 2</h3>
            <p className="text-gray-500">Image subtitle 2</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mb-8 text-center">
        <img
          src={galleryData?.third_card?.image}
          alt="Image 3"
          className="w-full mb-4 mx-auto p-3"
        />
          <img
            src={galleryData?.third_card?.icon}
            alt="Image"
            className="block max-w-[130px] mx-auto py-8"
          />
        <div className="flex items-center justify-center mb-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Image Title 3</h3>
            <p className="text-gray-500">Image subtitle 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
