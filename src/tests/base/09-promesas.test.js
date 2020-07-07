import '@testing-library/jest-dom'
import getHeroeByIdAsync from '../../base/09-promesas'
import heroes from '../../data/heroes';

describe('Pruebas generales de las promesas', () => {
    
    test('getHeroeByIdAsync debe regresar un héroe ', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });

    })

    test('Debe de obtener un error si el héroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .then( heroe => {
                console.log(heroe);
                done();
            })
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
    
    
})
