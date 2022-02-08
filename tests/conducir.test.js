const conducir=require('../scripts/conducir');

test('puede conducir',() => {
    expect(conducir(18)).toBe("puede conducir");
} )

test('no puede conducir',() => {
    expect(conducir(10)).toBe("no puede conducir");
} )