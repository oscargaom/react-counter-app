import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas de desestructuración', () => {
    test('retornaArreglo debe regresar un arreglo de texto y enteros', () => {
        
        const arr = ['ABC', 123];
        const [item1, item2] = retornaArreglo();

               
        expect(retornaArreglo()).toEqual(arr);

        expect(item1).toBe('ABC');
        expect(typeof item1).toBe('string');

        expect(item2).toBe(123);
        expect(typeof item2).toBe('number');
    })
})