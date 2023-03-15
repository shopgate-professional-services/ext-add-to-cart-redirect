import { createSelector } from 'reselect';
import { getProductProperties, getBaseProduct } from '@shopgate/engage/product';
import { isIos, isAndroid } from '@shopgate/pwa-common/selectors/client';
import { config } from './config';

const { redirects } = config;

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
  getDeeplink,
  isIos,
  isAndroid,
  (properties, deeplink, ios, android) => {
    if (!properties || properties.isFetching) {
      return null;
    }

    let result;

    redirects.forEach((redi) => {
      properties.forEach((prop) => {
        if (
          redi.property === prop.label &&
          ['yes', '1'].includes(prop.value.toLowerCase()) &&
          ((ios && redi.ios) || (android && redi.android))
        ) {
          result = {
            url: redi.useDeeplink ? deeplink : redi.url,
            buttonText: redi.buttonText,
            popupHeadline: redi.popupHeadline,
            popupText: redi.popupText,
            noRedirect: redi.noRedirect,
          };
        }
      });
    });

    return result;
  }
);
