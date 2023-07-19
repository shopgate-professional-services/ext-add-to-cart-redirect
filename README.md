# ext-add-to-cart-redirect
Replaces the add-to-cart button and redirects to a configured page.

## Config

### redirects (array)

- `property` (string) Property to identify the product that will be redirected. Its value has to be "yes" or "1" to be active.
- `url` (string) The url to which will be redirected.
- `buttonText` (string) Replaces the label of the add-to-cart button on the pdp.
- `useDeeplink` (boolean) Can be `true` or `false`. `true` to redirect to the product deeplink (onlineshop), `false` to redirect to the configured url.
- `popupHeadline` (string) Headline of the popup that will show up after clicking the add-to-cart button.
- `popupText`(string) Information text of the popup.
- `ios` (boolean) Can be `true` or `false`. Activates the redirect for iOS devices.
- `android` (boolean) Can be `true` or `false`. Activates the redirect for Android devices.
- `noRedirect` (boolean) Can be `true` or `false`. Activates the redirect in general. Use `false` to just show a customer information without a redirect.



## Example configuration

```
{
  "config": {
    "redirects": [
      {
        "property": "noRedirectForApple",
        "url": "https://www.test.de/",
        "buttonText": "Test 1",
        "useDeeplink": false,
        "popupHeadline": "Dear Customer",
        "popupText": "This product is not buyable. Continue for more information.",
        "ios": false,
        "android": true
      },
      {
        "property": "noRedirectForGoogle",
        "url": "",
        "buttonText": "Test 2",
        "useDeeplink": true,
        "popupHeadline": "Dear Customer",
        "popupText": "This product is only available via webstore.",
        "ios": true,
        "android": false
      }
    ]
  }
}
```


## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.


## License

Shopgate Cloud - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

