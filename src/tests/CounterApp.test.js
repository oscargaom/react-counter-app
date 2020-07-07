import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el componente <CounterApp />', () => {

    let wrapper= shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
        // console.log('beforeEach', wrapper.find('h2').text())
    });

    test('Validar el componente <CounterApp />', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Validar que el contador sea el indicado', () => {
        const wrapper100 = shallow(<CounterApp value={100} />);

        const contadorValue = wrapper100.find('h2').text().trim();

        expect(contadorValue).toBe('100');
    })

    test('Validar el botón de incrementar +1', () => {
        let contadorValue;
        //console.log('+1', wrapper.find('h2').text())

        wrapper.find('button').at(0).simulate('click');
        contadorValue = wrapper.find('h2');
        
        //console.log('+1', wrapper.find('h2').text())
        
        wrapper.find('button').at(0).simulate('click');
        contadorValue = wrapper.find('h2');

        // console.log('+1', wrapper.find('h2').text())

        expect(contadorValue.text().trim()).toBe('12');

    })

    test('Validar el botón de decrementar -1', () => {
                
        // console.log('-1', wrapper.find('h2').text())
        
        wrapper.find('button').at(2).simulate('click');
        let contadorValue = wrapper.find('h2');
        
        // console.log('-1', wrapper.find('h2').text())
        
        expect(contadorValue.text().trim()).toBe('9');
    })
    
    test('Validar que el botón setea valor por default', () => {
        let contadorValue;
        
        const wrapper150 = shallow(<CounterApp value={150} />);
        
        wrapper150.find('button').at(0).simulate('click');
        // console.log('+1', wrapper150.find('h2').text())
        
        wrapper150.find('button').at(0).simulate('click');
        // console.log('+1', wrapper150.find('h2').text())
        
        wrapper150.find('button').at(1).simulate('click');
        // console.log('Reset', wrapper150.find('h2').text())

        contadorValue = wrapper150.find('h2');
        
        expect(contadorValue.text().trim()).toBe('150');
    })
        
})

