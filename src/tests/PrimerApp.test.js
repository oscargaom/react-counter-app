import React from 'react'
import "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';

describe("Pruebas en el componente <PrimerApp />", () => {
//   test("Debe encontrar el texto: 'Hola, Soy Goku'", () => {
    
//     const saludo = 'Hola, Soy Goku';
//     const { getByText } = render(<PrimeraApp saludo={saludo} />);

//     expect(getByText(`${saludo}`)).toBeInTheDocument();
    
//   });

    test("Debe encontrar el texto: 'Hola, Soy Goku'", () => {
        const saludo = "Hola, Soy Goku";

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test("Debe validar que el subtitulo sea el indicado", () => {
        const saludo = "Hola, Soy Goku";
        const subtitulo = 'Serie: Dragon Ball Z';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />);

        const texto = wrapper.find('p').text();

        expect(texto).toBe(subtitulo);
        
    });

});
