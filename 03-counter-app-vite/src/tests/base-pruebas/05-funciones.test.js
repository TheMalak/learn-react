import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones';

describe('Prueba en 05 funciones', () => {
    test('get user debe de retornar un objeto ', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        //un objeto no puede ser comparado con otro objeto, ya que la comparación es por la ubicación en memoria 
        //y no de la data que este contiene.

        expect(testUser).toEqual(user);

    });

    test('se espera un objeto con una variable de tipo string en la llave nombre', () => {

        const nombre = 'David';

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        };

        const exportUsuarioActivo = getUsuarioActivo(nombre);

        expect(testUsuarioActivo).toEqual(exportUsuarioActivo);

     })

});