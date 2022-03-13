import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Sidebar } from '.';
import { CustomerRequestSummary } from './CustomerRequestSummary';
import { AvailableRoomForm } from './AvailableRoomForm';


let sideBarCont: ShallowWrapper;
let customerRequestSummaryCont: ShallowWrapper;
let availableRoomFormCont: ShallowWrapper;

beforeAll(() => {
    sideBarCont = shallow(<Sidebar />);
    customerRequestSummaryCont = sideBarCont.find(CustomerRequestSummary)
    availableRoomFormCont = sideBarCont.find(AvailableRoomForm)
});


describe("Sidebar Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(sideBarCont.html()).toMatchSnapshot();
    })

    it("should render single CustomerRequestSummary component", () => {
        expect(customerRequestSummaryCont).toHaveLength(1)
    })

    it("should render single AvailableRoomForm component", () => {
        expect(availableRoomFormCont).toHaveLength(1);
    })

})
