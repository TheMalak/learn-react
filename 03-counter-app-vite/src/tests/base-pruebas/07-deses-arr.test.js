import {retornaArreglo} from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07 arreglos', () => {
    test('Debe retornar un string y un numero', () => {
        const [letras, numeros] = retornaArreglo();   

        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
        expect(letras).toStrictEqual(expect.any(String));
    }); 
});