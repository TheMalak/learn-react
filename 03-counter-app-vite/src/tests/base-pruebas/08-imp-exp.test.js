import {
    getHeroeById,
    getHeroesByOwner
} from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';


describe('get heroe by id debe retornar un heroe por id', () => {
    test('obtener un heroe por id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        // expect(hero).toEqual({
        //     id: 1,
        //     name: 'Batman',
        //     owner: 'DC'
        // });

        expect(hero).toBeFalsy();

    });

    test('obtener los héros de dc o marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toStrictEqual(2);
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    });

})