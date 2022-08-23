/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { Typography } from '@strapi/design-system/Typography';

const HomePage = () => {
  return (
    <div>
      <Typography variant="alpha">{ pluginId }</Typography>
    </div>
  );
};

export default HomePage;
