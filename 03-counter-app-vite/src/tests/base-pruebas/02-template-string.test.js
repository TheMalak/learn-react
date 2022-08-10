import {getSaludo} from '../../../src/base-pruebas/02-template-string';

describe('Prueba de saludo', () => {
    test('get saludo debe retornan "Hola David"', () => {
        const name = 'David';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});