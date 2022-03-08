import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import { Layout } from './components';
import { CustomerProvider, CustomerProviderProps } from './context';

let AppCont: ShallowWrapper;
let LayoutCont: ShallowWrapper;
let CustomerProviderCont: ShallowWrapper<CustomerProviderProps>;

beforeAll(() => {
  AppCont = shallow(<App />);
  CustomerProviderCont = AppCont.find(CustomerProvider);
  LayoutCont = CustomerProviderCont.find(Layout);
});


describe("App Component Test", () => {
  it('should match with existing snapshot', () => {
    expect(AppCont.html()).toMatchSnapshot();
  })

  it("should render single App component", () => {
    expect(AppCont).toHaveLength(1)
  })

  it("renders single CustomerProvider component", () => {
    expect(CustomerProviderCont).toHaveLength(1);
  })

  it("renders single Layout component within CustomerProvider component", () => {
    expect(LayoutCont).toHaveLength(1);
  })

})
