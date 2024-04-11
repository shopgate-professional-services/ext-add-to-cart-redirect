import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const button = css({
  borderRadius: '5px',
  padding: '16px',
  background: themeConfig.colors.cta,
  color: themeConfig.colors.ctaContrast,
  fontSize: '18px',
  fontWeight: '700',
  width: '100%',
  minHeight: '22px',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'normal',
}).toString();

const buttonWrapper = css({
  padding: 0,
}).toString();

export default {
  button,
  buttonWrapper,
};
