import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Pruebas generales de async-await ', () => {
    test('Debe regresar una url valida', async () => {
        
        const urlImg = await getImagen();
        
        expect(urlImg.includes('https')).toBe(true);


    })
})
