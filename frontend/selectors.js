import { createSelector } from 'reselect';
import { getProductProperties, getBaseProduct, getProduct } from '@shopgate/engage/product';
import { isIos, isAndroid } from '@shopgate/pwa-common/selectors/client';
import { config } from './config';

const { redirects } = config;

/**
 * Searches an array of product properties for a redirect config
 * @param {Array} properties Product properties
 * @param {boolean} ios Whether the current device is an iOS device
 * @param {boolean} android Whether the current device is an Android device
 * @param {string} deeplink Deeplink
 * @returns {Object}
 */
const getRedirectFromProperties = (
  properties = [],
  ios = false,
  android = false,
  deeplink = null
) => {
  let result;

  // Loop through the redirects from the extension config
  for (let redirectIndex = 0; redirectIndex < redirects.length; redirectIndex += 1) {
    const redirect = redirects[redirectIndex];

    // Loop though the properties to search for a redirect
    for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex += 1) {
      const prop = properties[propertyIndex];

      if (
        redirect.property === prop.label &&
        ['yes', '1'].includes(prop.value.toLowerCase()) &&
        ((ios && redirect.ios) || (android && redirect.android))
      ) {
        // Create the redirect object when conditions match
        result = {
          url: redirect.useDeeplink ? deeplink : redirect.url,
          buttonText: redirect.buttonText,
          popupHeadline: redirect.popupHeadline,
          popupText: redirect.popupText,
          noRedirect: redirect.noRedirect,
        };

        // Break inner loop after redirect config was created
        break;
      }
    }

    if (result) {
      // Break outer loop after redirect config was created
      break;
    }
  }

  return result;
};

export const getDeeplink = createSelector(
  getBaseProduct,
  (baseProduct) => {
    if (!baseProduct || baseProduct.isFetching) {
      return null;
    }

    const { productUrl } = baseProduct;

    return productUrl;
  }
);

export const getRedirect = createSelector(
  getProductProperties,
  isIos,
  isAndroid,
  getDeeplink,
  (properties, ios, android, deeplink) => {
    if (!properties || properties.isFetching) {
      return null;
    }

    const result = getRedirectFromProperties(
      properties,
      ios,
      android,
      deeplink
    );

    return result;
  }
);

export const getShowCartButton = createSelector(
  getProduct,
  isIos,
  isAndroid,
  (product, ios, android) => {
    if (!product || product.isFetching) {
      return null;
    }

    const { additionalProperties = [] } = product;

    const show = !getRedirectFromProperties(
      additionalProperties,
      ios,
      android
    );

    return show;
  }
);
