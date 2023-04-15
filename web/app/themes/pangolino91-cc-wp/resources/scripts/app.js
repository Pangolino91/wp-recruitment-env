import domReady from '@roots/sage/client/dom-ready';
import React from 'react';
import Hero from '@src/scripts/react-hero/components/Hero';
import { createRoot } from 'react-dom';

/**
 * Application entrypoint
 */
domReady(async () => {
  createRoot(document.getElementById('root')).render(<Hero />);
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
