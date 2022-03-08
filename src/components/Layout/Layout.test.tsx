import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Layout } from '.';
import { Sidebar } from '../Sidebar';
import { Dashboard } from '../Dashboard';


let LayoutCont: ShallowWrapper;
let sideBarCont: ShallowWrapper;

beforeAll(() => {
    LayoutCont = shallow(<Layout />);
    sideBarCont = LayoutCont.find(Sidebar);

});


describe("Layout Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(LayoutCont.html()).toMatchSnapshot();
    })

    it("should render single Layout component", () => {
        expect(LayoutCont).toHaveLength(1)
    })

    it("should render Sidebar component", () => {
        expect(sideBarCont).toHaveLength(1);
    })

    it("should render Dashboard component", () => {
        const dashboardCont = LayoutCont.find(Dashboard);
        expect(dashboardCont).toHaveLength(1);
    })


})
