import { connectFela } from '../dependencies';

import Text from './Text';
import * as Styles from './Text.styles';

export { default as TextTypes } from './Text.types';
export default connectFela(Styles)(Text);
