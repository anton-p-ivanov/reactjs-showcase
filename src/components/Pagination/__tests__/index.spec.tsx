import React from 'react';
import { Provider } from 'react-redux';

import { mount, shallow } from 'enzyme';
import store from 'store';

import Pagination from '../index';

describe('Pagination', () => {

  it('simulates next page click', () => {
    const navigate = (page: number) => {
      store.dispatch({ type: 'listView/navigateToPage', payload: page });
    };

    const wrapper = mount(<Provider store={store}><Pagination resultsTotal={100} navigate={navigate} /></Provider>);

    wrapper.find('button').last().simulate('click');
    expect(store.getState().listView.pagination.page).toEqual(2);
  });

  it('is rendering 2 buttons', () => {
    const wrapper = mount(<Pagination resultsTotal={100} navigate={() => ({})} />);
    expect(wrapper.find('button').length).toEqual(2);
  });

  it('first button is disabled on first page', () => {
    const buttons = mount(<Pagination resultsTotal={100} page={1} navigate={() => ({})} />).find('button');
    expect(buttons.first().props().disabled).toBe(true);
    expect(buttons.last().props().disabled).toBe(false);
  });

  it('last button is disabled on last page', () => {
    const buttons = mount(<Pagination resultsTotal={100} page={10} navigate={() => ({})} />).find('button');
    expect(buttons.first().props().disabled).toBe(false);
    expect(buttons.last().props().disabled).toBe(true);
  });

  it('page could not be less than 1', () => {
    const wrapper = () => shallow(<Pagination resultsTotal={100} page={0} navigate={() => ({})} />);
    expect(wrapper).toThrowError();
  });

  it('page could not be greater than pages count', () => {
    const wrapper = () => shallow(<Pagination resultsTotal={100} page={11} navigate={() => ({})} />);
    expect(wrapper).toThrowError();
  });
});

