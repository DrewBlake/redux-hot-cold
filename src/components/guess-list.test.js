import React from 'react';
import {shallow} from 'enzyme';
import {GuessList} from './guess-list';

describe('<GuessList', () => {
    it('Should render without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });
    it('Should hold array of guesses', () => {
        const values = [5, 6, 44];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(values.length).toEqual(items.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        }); 
    });
});