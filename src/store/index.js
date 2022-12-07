import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import file from './file';

const store = configureStore({
  reducer: {
    file,
  },
  middleware: [logger],
});

export default store;
