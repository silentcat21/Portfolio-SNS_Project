// configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from '../reducers'

const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
      //dispatch 하면 리듀서로 전달이 됨

    return store
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development' //디버그 트루로 해놓으면 오류관리를 좀더 자세히 해줌
});

export default wrapper;