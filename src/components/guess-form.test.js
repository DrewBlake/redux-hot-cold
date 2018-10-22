import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should dispatch make guess when form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = 22;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
    });
    it('Should reset input after submit', () => {
        const wrapper = mount(<GuessForm dispatch={() => {}}/>);
        
        const input = wrapper.find('input[type="number"]');
        input.instance().value = '22';
    
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});