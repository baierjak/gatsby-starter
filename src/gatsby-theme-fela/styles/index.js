import layout from '!css-loader!./layout.css';
import reset from '!css-loader!./reset.css';
import customStaticStyles from '!css-loader!./customStaticStyles.css';

//TODO remove this whne production ready
import datGui from 'react-dat-gui/dist/index.css';

export { default as theme } from './theme';

export default [reset, layout, customStaticStyles, datGui];
