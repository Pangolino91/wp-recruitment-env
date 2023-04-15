import React, { useContext, useEffect, useState } from 'react';
import { ACFContext } from '@src/scripts/react-hero/store/store.js';

const TopHeadings = () => {
  const { acfData, isLoading } = useContext(ACFContext);
  const [headingsData, setHeadingsData] = useState([]);
  useEffect(() => {
    setHeadingsData(acfData?.header);
  }, [acfData]);

  return (
    <section className="relative py-20">
      <div style={{zIndex: '-1', height: '84vh'}} className="absolute inset-0 bg-backgroundHero"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h6 className="text-xs text-pinkish font-bold uppercase py-2">
            {headingsData?.top_title}
          </h6>
          <h1 className="text-4xl sm:text-7xl font-semibold py-6">
            {headingsData?.main_title}
          </h1>
          <p className="text-base font-light text-gray-700 mb-4 max-w-lg mx-auto py-6">
            {headingsData?.subtitle}
          </p>
          <div className="flex justify-center gap-12">
            <button
              style={{
                backgroundColor:
                  headingsData?.first_button?.background_color ?? 'transparent',
              }}
              className="text-white uppercase font-bold py-4 px-6 rounded-full focus:outline-none focus:shadow-outline text-xs"
            >
              {headingsData?.first_button?.button_label}
            </button>
            <button
              style={{
                backgroundColor: headingsData?.second_button?.background_color ?? 'backgroundHero',
                borderColor: '#D9D9D9',
              }}
              className="text-black uppercase font-bold py-4 px-6 rounded-full border-gray-400 text-xs border-2"
            >
              {headingsData?.second_button?.button_label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeadings;
