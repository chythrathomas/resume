import {configureStore} from '@reduxjs/toolkit';
/*import entrySlice from './entry-slice';*/
import resumeListSlice from './resumelist-slice';

import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {ui:uiSlice.reducer, resumeList: resumeListSlice.reducer}
});

export default store;
