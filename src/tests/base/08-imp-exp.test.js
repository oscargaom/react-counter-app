import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';



describe('Pruebas de héroes', () => {
    test('Debe retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
        
    })

    test('Debe retornar undefined si el héroe no existe  ', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesOwner =  getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner);

        expect(heroesData).toEqual(heroesOwner);
    })
    
    test('Debe retornar un arreglo con los hérores de Marvel ', () => {
        const owner = 'Marvel';
        const heroesOwner =  getHeroesByOwner(owner);

        console.log(heroesOwner.length);

        expect(heroesOwner.length).toBe(2);
    })
    
    
    
})
