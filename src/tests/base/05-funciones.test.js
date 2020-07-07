import "@testing-library/jest-dom"
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas unitarias del archivo 05-funciones.js', () => {
    
    test('getUser debe retornar un valor válido ', () => {
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toStrictEqual(usuario);
    })

    test('getUsuarioActivo debe retornar un usuario activo', () => {
        
        const usuarioActivo = getUsuarioActivo('Oscar');

        expect(usuarioActivo).toStrictEqual({
            uid: 'ABC567',
            username: 'Oscar'            
        });


    })
    
    
})


