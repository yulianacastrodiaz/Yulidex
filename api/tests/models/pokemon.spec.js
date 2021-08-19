// const { Pokemon, conn } = require('../../src/db.js');
// const { expect } = require('chai');

// describe('Pokemon model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     beforeEach(() => Pokemon.sync({ force: true }));
//     describe('name', () => {
//       // it("User should have the correct fields", function (done) {
//       //   Pokemon.create({
//       //     id: '1b',
//       //     name: null,
//       //     vida: 20,
//       //     fuerza: 30,
//       //     defensa: 25,
//       //     velocidad: 34,
//       //     altura: 1.50
//       //   }).then(function (result) {
//       //     expect(result.pack()).to.include.all.keys(
//       //           ["id", "name", "email", "intro"]
//       //     );
//       //     done();
//       //   });
//       // it('should throw an error if name is null', (done) => {
//       //   Pokemon.create({
//       //     id: '1b',
//       //     name: null,
//       //     vida: 20,
//       //     fuerza: 30,
//       //     defensa: 25,
//       //     velocidad: 34,
//       //     altura: 1.50
//       //   })
//       //   .then((result) => {
//       //     expect.fail()
//       //     done();
//       //   })
//       //   .catch(e => {
//       //     console.log("hola")
//       //     expect(e).to.be.equal("SequelizeValidationError: notNull Violation: El nombre no debe estar vacio")
//       //     done();
//       //   })
//         //  expect(conn.SequelizeValidationError).to.Throw(Error, "El nombre no debe estar vacio")
//       });
//       it('should work when its a valid name', () => {
//         Pokemon.create({ name: 'Pikachu' , vida: null })
//           .then(() => done(new Error('Debería ser un entero')))
//           .catch(() => done());
//       });
//       // it('should trhow an error if id is a only number', () => {
//       //   Pokemon.create({id: 2})
//       //     .then(() => done((new Error('el id debería contener al menos un número y una letra'))))
//       //     .catch(() => done());
//       // });
//       // it('should trhow an error if id is a string with number', () => {
//       //   Pokemon.create({id: "2a3"})
//       //     .then(() => done((new Error('el id debería contener al menos un número y una letra'))))
//       //     .catch(() => done());
//       // })
//     });
//   });
// });
