import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });
    it('Should show correct guess count', () => {
        let count = 5;
        
        const wrapper = shallow(<GuessCount guessCount={count}/>);
        expect(wrapper.text()).toEqual(`You've made ${count} guesses!`);
    });
});