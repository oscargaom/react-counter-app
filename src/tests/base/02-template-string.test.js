import "@testing-library/jest-dom";
import { getSaludo } from '../../base/02-template-string'


describe('Pruebas en archivo 02-template-string', () => {
    test('getSaludo debe retornar Hola Oscar', () => {
        
        const nombre = 'Oscar';
        
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}!`);
    })

    test('getSaludo debe retornar Hola Joaquin! cuando no se envía un nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Joaquin!');
    })
    
})



