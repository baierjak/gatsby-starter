import { connectFela } from '../dependencies';
import * as styles from './Title.styles';

import Title from './Title';

export { default as TitleTypes } from './Title.sizes';
export default connectFela(styles)(Title);
