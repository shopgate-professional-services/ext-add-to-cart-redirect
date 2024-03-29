import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const popupContainer = css({
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  zIndex: '5000',
  height: '100%',
  width: '100%',
  left: '0',
  top: '0',
}).toString();

const popupContent = css({
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px;  top: 25%;  left: 5%; right: 5%',
  padding: '0px 10px 0px 10px',
  fontSize: '.875rem',
  fontWeight: '400',
  lineHeight: '1.5',
}).toString();

const popupButton = css({
  borderRadius: '5px',
  padding: '7px 10px 7px',
  background: themeConfig.colors.cta,
  color: themeConfig.colors.ctaContrast,
  fontSize: '18px',
  fontWeight: '600',
  width: 'auto',
  minHeight: '22px',
  textAlign: 'center',
  lineHeight: 'normal',
}).toString();

const popupClose = css({
  borderRadius: '5px',
  padding: '7px 10px 7px',
  background: themeConfig.colors.cta,
  color: themeConfig.colors.ctaContrast,
  fontSize: '18px',
  fontWeight: '600',
  width: 'auto',
  minHeight: '22px',
  textAlign: 'center',
  lineHeight: 'normal',
}).toString();

const popupBack = css({
  color: themeConfig.colors.cta,
  fontSize: '18px',
  fontWeight: '600',
}).toString();

const popupFooter = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
}).toString();

const popupFooterClose = css({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
}).toString();

export default {
  popupContainer,
  popupContent,
  popupButton,
  popupClose,
  popupBack,
  popupFooter,
  popupFooterClose,
};
