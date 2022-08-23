'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('app')
      .service('myService')
      .getWelcomeMessage();
  },
});
