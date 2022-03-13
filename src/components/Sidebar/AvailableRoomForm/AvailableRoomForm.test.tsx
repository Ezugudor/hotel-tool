import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import { AvailableRoomForm } from '.';
import { fireEvent } from '@testing-library/react';



let availableRoomFormCont: any;
let onSubmitHandler: Function;
let economyField: any;
let premiumField: any;
let submitButton: any;

beforeAll(() => {
    onSubmitHandler = jest.fn();
    availableRoomFormCont = mount(<AvailableRoomForm onSubmit={onSubmitHandler} />);
    economyField = availableRoomFormCont.find('#economyRoomField').hostNodes();
    premiumField = availableRoomFormCont.find('#premiumRoomField').hostNodes();
    submitButton = availableRoomFormCont.find('button[type="submit"]').hostNodes();
});


describe("AvailableRoomForm Component Test", () => {
    it('should match with existing snapshot', () => {
        expect(availableRoomFormCont.html()).toMatchSnapshot();
    })

    it('should have an input field with id "economyRoomField"', () => {
        expect(economyField).toHaveLength(1);
    })

    it('should have an input field with id "premiumRoomField"', () => {
        expect(premiumField).toHaveLength(1);
    })

    it('should have a button of type "submit"', () => {
        expect(submitButton).toHaveLength(1);
    })

    it('"economyRoomField" should reject non-digit input', () => {
        const input = "-!@#$%^&*().,;'[]{}\\|'\"`~:abcdefghijklmnopqrstuvwxyz";
        economyField.simulate("change", { target: { value: input } });
        expect((economyField.instance()).value).toEqual("");
    });

    it('"premiumRoomField" should reject non-digit input', () => {
        const input = "-!@#$%^&*().,;'[]{}\\|'\"`~:abcdefghijklmnopqrstuvwxyz";
        premiumField.simulate("change", { target: { value: input } });
        expect((premiumField.instance()).value).toEqual("");
    });

    it('should call submit form handler on form submit', () => {
        availableRoomFormCont.simulate('submit', { preventDefault: () => { } });
        expect(onSubmitHandler).toHaveBeenCalledTimes(1)
    })
})
