import {configureStore} from '@reduxjs/toolkit'
import productslice from './product.slice'

const store=configureStore({

        reducer:{productslice}
        
        
    });


export default store;