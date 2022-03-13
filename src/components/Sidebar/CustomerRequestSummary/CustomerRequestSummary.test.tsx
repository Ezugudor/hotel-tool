import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CustomerRequestSummary } from './CustomerRequestSummary';



let customerRequestSummaryCont: ShallowWrapper;

beforeAll(() => {
    customerRequestSummaryCont = shallow(<CustomerRequestSummary />);
});


describe("CustomerRequestSummary Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(customerRequestSummaryCont.html()).toMatchSnapshot();
    })


})
