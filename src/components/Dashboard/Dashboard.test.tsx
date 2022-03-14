import React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Dashboard } from './Dashboard';
import { StatBox, StatBoxProps } from './StatBox';
import { RoomAggregate } from '../../models';
import { AvailableRoomForm } from '../Sidebar/AvailableRoomForm';

let DashboardCont: any;
let StatBoxCont: ShallowWrapper;
let StatBoxWrapper: ShallowWrapper<StatBoxProps>;

let availableRoomFormCont: any;
let economyField: any;
let premiumField: any;
let submitButton: any;
let form: any;

beforeAll(() => {
    DashboardCont = mount(<Dashboard />);
    StatBoxCont = DashboardCont.find('#stat-box-cont').hostNodes();
    StatBoxWrapper = StatBoxCont.find(StatBox);

    availableRoomFormCont = mount(<AvailableRoomForm />);
    economyField = availableRoomFormCont.find('#economyRoomField').hostNodes();
    premiumField = availableRoomFormCont.find('#premiumRoomField').hostNodes();
    submitButton = availableRoomFormCont.find('button[type="submit"]').hostNodes();
    form = availableRoomFormCont.find('form').hostNodes();
});


describe("Dashboard Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(DashboardCont.html()).toMatchSnapshot();
    })

    it('should not render main dashboard content when no value is provided for both room categories. Render placeholder instead', () => {
        economyField.simulate("change", { target: { value: '0' } });
        premiumField.simulate("change", { target: { value: '0' } });
        availableRoomFormCont.simulate('submit', { preventDefault: () => { } });
        expect(DashboardCont.find('#dashboard')).toHaveLength(0);
        expect(DashboardCont.find('#placeholder')).toHaveLength(1);
    });

    // it("should render 3 StatBox components inside an element with id 'stat-box-cont' ", () => {
    //     expect(StatBoxCont).toHaveLength(1)
    //     expect(StatBoxWrapper).toHaveLength(3)
    // })

    // it("Each of the 3 StatBox components should have a prop 'data' of type 'Aggregate'", () => {
    //     const statBox1: RoomAggregate = StatBoxWrapper.at(0).prop('data');
    //     const statBox2: RoomAggregate = StatBoxWrapper.at(1).prop('data');
    //     const statBox3: RoomAggregate = StatBoxWrapper.at(2).prop('data');
    //     const expected = ["roomCount", "amount"];
    //     expect(Object.keys(statBox1)).toEqual(expect.arrayContaining(expected))
    //     expect(Object.keys(statBox2)).toEqual(expect.arrayContaining(expected))
    //     expect(Object.keys(statBox3)).toEqual(expect.arrayContaining(expected))
    // })

})


