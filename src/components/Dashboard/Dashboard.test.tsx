import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Dashboard } from './Dashboard';
import { StatBox, StatBoxProps } from './StatBox';
import { RoomAggregate } from '../../models';

let DashboardCont: ShallowWrapper;
let StatBoxCont: ShallowWrapper;
let StatBoxWrapper: ShallowWrapper<StatBoxProps>;

beforeAll(() => {
    DashboardCont = shallow(<Dashboard />);
    StatBoxCont = DashboardCont.find('#stat-box-cont').hostNodes();
    StatBoxWrapper = StatBoxCont.find(StatBox);
});


describe("Dashboard Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(DashboardCont.html()).toMatchSnapshot();
    })

    it("should render 3 StatBox components inside an element with id 'stat-box-cont' ", () => {
        expect(StatBoxCont).toHaveLength(1)
        expect(StatBoxWrapper).toHaveLength(3)
    })

    it("Each of the 3 StatBox components should have a prop 'data' of type 'Aggregate'", () => {
        const statBox1: RoomAggregate = StatBoxWrapper.at(0).prop('data');
        const statBox2: RoomAggregate = StatBoxWrapper.at(1).prop('data');
        const statBox3: RoomAggregate = StatBoxWrapper.at(2).prop('data');
        const expected = ["roomCount", "amount"];
        expect(Object.keys(statBox1)).toEqual(expect.arrayContaining(expected))
        expect(Object.keys(statBox2)).toEqual(expect.arrayContaining(expected))
        expect(Object.keys(statBox3)).toEqual(expect.arrayContaining(expected))
    })

})


