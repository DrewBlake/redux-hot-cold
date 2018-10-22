import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Should Render without crashing', () => {
        shallow(<Game />);
    });
});