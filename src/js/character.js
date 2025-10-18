export default class Character {
  constructor(name, type) {
    this.validateName(name);
    this.validateType(type);

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  validateName(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }
  }

  validateType(type) {
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!allowedTypes.includes(type)) {
      throw new Error(`Тип должен быть одним из: ${allowedTypes.join(', ')}`);
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }

    this.level += 1;

    if (this.attack !== null) {
      this.attack = Math.round(this.attack * 1.2);
    }

    if (this.defence !== null) {
      this.defence = Math.round(this.defence * 1.2);
    }

    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) return;

    const damage = points * (1 - (this.defence ?? 0) / 100);
    this.health = Math.max(this.health - damage, 0);
  }
}
