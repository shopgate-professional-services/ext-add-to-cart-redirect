import { createSelector } from 'reselect';
import { getProductProperties, getBaseProduct, getProduct } from '@shopgate/engage/product';
import { isIos } from '@shopgate/pwa-common/selectors/client';
import { config } from './config';

const { redirects } = config;

export const getShowCartButton = createSelector(
  getProduct,
  isIos,
  (product, ios) => {
    if (!product || product.isFetching) {
      return null;
    }

    const { additionalProperties = [] } = product;

    const os = ios ? 'ios' : 'android';

    let showCartButton = true;

    redirects.map((redi) => {
      additionalProperties.map((prop) => {
        if (
          redi.property === prop.label &&
          (prop.value.toLowerCase() === 'yes' || prop.value === '1') &&
          ((os === 'ios' && redi.ios === true) || (os === 'android' && redi.android === true))
        ) {
          showCartButton = false;
        }
        return showCartButton;
      });
      return showCartButton;
    });

    return showCartButton;
  }
);

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
  (properties, deeplink, ios) => {
    if (!properties || properties.isFetching) {
      return null;
    }

    const os = ios ? 'ios' : 'android';

    let redirect;

    redirects.map((redi) => {
      properties.map((prop) => {
        if (
          redi.property === prop.label &&
          (prop.value.toLowerCase() === 'yes' || prop.value === '1') &&
          ((os === 'ios' && redi.ios === true) || (os === 'android' && redi.android === true))
        ) {
          redirect = {
            url: redi.useDeeplink ? deeplink : redi.url,
            buttonText: redi.buttonText,
            popupHeadline: redi.popupHeadline,
            popupText: redi.popupText,
          };
        }
        return redirect;
      });
      return redirect;
    });

    return redirect;
  }
);
