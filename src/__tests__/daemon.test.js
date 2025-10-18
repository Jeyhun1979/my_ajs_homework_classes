import Daemon from '../js/daemon';

describe('Daemon class', () => {
  test('should create Daemon with correct properties', () => {
    const unit = new Daemon('Inferno');

    expect(unit).toEqual({
      name: 'Inferno',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('should level up correctly', () => {
    const unit = new Daemon('Inferno');
    unit.levelUp();

    expect(unit.level).toBe(2);
    expect(unit.health).toBe(100);
    expect(unit.attack).toBe(12); 
    expect(unit.defence).toBe(48); 
  });

  test('should throw error if trying to level up dead unit', () => {
    const unit = new Daemon('Inferno');
    unit.health = 0;

    expect(() => unit.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
  });

  test('should apply damage correctly', () => {
    const unit = new Daemon('Inferno');
    unit.damage(50);

    expect(unit.health).toBe(70);
  });

  test('should not reduce health below 0', () => {
    const unit = new Daemon('Inferno');
    unit.damage(999);

    expect(unit.health).toBe(0);
  });

  test('should not apply damage if health is 0', () => {
    const unit = new Daemon('Inferno');
    unit.health = 0;
    unit.damage(50);

    expect(unit.health).toBe(0);
  });
});
