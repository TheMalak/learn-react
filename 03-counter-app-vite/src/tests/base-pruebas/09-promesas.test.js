import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas'
import heroes from '../../data/heroes'

describe('Prueba 09 en personas', () => {
    test('getheroesbyidasync debe retornar un heroe ', (done) => { //referencia del done es requerido.
            const id = 1;
            getHeroeByIdAsync(id).then(heroes => {

                expect(heroes).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done(); //es para jest, indica que ya heos terminado y nos arroje una respuesta.
            })
    });
    
    test('get heroe by id async debe mandar un error sie le heroe no existe', () => {
        
    });

});