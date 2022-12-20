import {createReducer} from '@reduxjs/toolkit';

export const SEARCH_CONTRACTS = 'SEARCH_CONTRACTS';
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_CONTRACTS_SUCCESS = 'SEARCH_CONTRACTS_SUCCESS';
export const SEARCH_CONTRACTS_ERROR = 'SEARCH_CONTRACTS_ERROR';
export const CANCEL_SEARCH = 'CANCEL_SEARCH';

export const changeSearchTerm = (query: string = "") => {
    return {
        type: SEARCH_INPUT_CHANGE,
        payload: query
    }
};

export const cancelSearch = () => {
    return {
        type: CANCEL_SEARCH,

    }
};

export const selectContracts = (state: any) => {
    return state.CONTRACTS;
};


let initialState = {
    items: [],
    searchTerm: '',
    loading: false,
    error: '',
};

export default createReducer(initialState, {
    [SEARCH_INPUT_CHANGE]: (state, action) => {
        state.searchTerm = action.payload;
        state.error = '';
    },
    [SEARCH_CONTRACTS]: (state) => {
        state.loading = true;
    },
    [SEARCH_CONTRACTS_SUCCESS]: (state, action) => {
        state.items = action.payload;
        state.loading = false;
    },
    [CANCEL_SEARCH]: (state) => {
        state.items = [];
        state.searchTerm = '';
        state.error = '';
    },
    [SEARCH_CONTRACTS_ERROR]:(state, action)=>{
        state.error = action.payload;
    },
});