const expect = chai.expect;

describe('index.js', () => {
  describe('drivers', () => {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', () => {
      expect(drivers).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
    });

    it('is declared with const', () => {
      expect(() => {
        drivers = [];
      }).to.throw(TypeError);
    });
  });

  describe('Array functions', () => {
    beforeEach(() => {
      drivers.length = 0;

      drivers.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendDriver(name)', () => {
      it('appends a driver to the end of the drivers array', () => {
        destructivelyAppendDriver('Ralph');

        expect(drivers).to.have.ordered.members([
          'Milo',
          'Otis',
          'Garfield',
          'Ralph',
        ]);
      });
    });

    describe('destructivelyPrependDriver(name)', () => {
      it('prepends a driver to the beginning of the drivers array', () => {
        destructivelyPrependDriver('Bob');

        expect(drivers).to.have.ordered.members([
          'Bob',
          'Milo',
          'Otis',
          'Garfield',
        ]);
      });
    });

    describe('destructivelyRemoveLastDriver()', () => {
      it('removes the last driver from the drivers array', () => {
        destructivelyRemoveLastDriver();

        expect(drivers)
          .to.have.ordered.members(['Milo', 'Otis'])
          .and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstDriver()', () => {
      it('removes the First driver from the drivers array', () => {
        destructivelyRemoveFirstDriver();

        expect(drivers)
          .to.have.ordered.members(['Otis', 'Garfield'])
          .and.to.not.include('Milo');
      });
    });

    describe('appendDriver(name)', () => {
      it('appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', () => {
        expect(appendDriver('Broom')).to.have.ordered.members([
          'Milo',
          'Otis',
          'Garfield',
          'Broom',
        ]);

        expect(drivers).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('prependDriver(name)', () => {
      it('prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged', () => {
        expect(prependDriver('Arnold')).to.have.ordered.members([
          'Arnold',
          'Milo',
          'Otis',
          'Garfield',
        ]);

        expect(drivers).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('removeLastDriver()', () => {
      it('removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged', () => {
        expect(removeLastDriver()).to.have.ordered.members(['Milo', 'Otis']);

        expect(drivers).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });

    describe('removeFirstDriver()', () => {
      it('removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged', () => {
        expect(removeFirstDriver()).to.have.ordered.members([
          'Otis',
          'Garfield',
        ]);

        expect(drivers).to.have.ordered.members(['Milo', 'Otis', 'Garfield']);
      });
    });
  });
});
