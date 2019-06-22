import { createStore } from 'redux';
//const createStore = require('redux').createStore;

const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');

// 액션 타입 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 액션 생성함수 정의
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increment = diff => ({ type: INCREMENT, diff });
const decrement = () => ({ type: DECREMENT });

// 초깃값 설정
const initialState = {
    light: true,
    counter: 123
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
    switch (action.type) {
    case TOGGLE_SWITCH:
        return {
            ...state, // 기존의 값은 그대로 두면서
            light: !state.light // light 값 반전시키기
        };
    case INCREMENT:
        return {
            ...state,
            counter: state.counter + action.diff
        };
    case DECREMENT:
        return {
            ...state,
            counter: state.counter - 1
        };
    default:
        // 지원하지 않는 액션의 경우 상태 유지
        return state;
    }
}

// 스토어 만들기
const store = createStore(reducer);

// render 함수 만들기
const render = () => {
    const state = store.getState();
    const { light, counter } = state;
    if (light) {
        lightDiv.style.backgroud = 'green';
        switchButton.innerText = '끄기';
    } else {
        lightDiv.style.backgroud = 'red';
        switchButton.innerText = '켜기';
    }
    counterHeadings.innerText = counter;
    console.log('실행주우우ㅜ우ㅜ웅');
};

render();

// 구독하기
store.subscribe(render);

// 이벤트 달아주기, 액션 발생 시키기
switchButton.onclick = () => {
    store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
    store.dispatch(increment(5));
}

minusButton.onclick = () => {
    store.dispatch(decrement());
}