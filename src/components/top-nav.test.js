import React from 'react';
import {shallow, mount} from 'enzyme';
import {TopNav} from './top-nav';

describe('<TopNav', () => {
    it('Should render without crashing', () => {
        shallow(<TopNav />);
    });
    it('Should dispatch restartGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
    });
    it('Should dispatch generateAuralUpdate when Hear state is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
    });
});