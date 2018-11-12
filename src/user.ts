interface UserInterface {
  name: string;
  updateName: (name: string) => void;
  getName: () => string;
}

type Sex = 'female' | 'male';

export class User implements UserInterface {
  public name = 'name';

  private readonly sex: Sex;

  constructor(name = 'name', sex: Sex = 'female') {
    this.name = name;
    this.sex = sex;
  }

  public updateName(name: string) {
    this.name = name;
  }

  public getName() {
    return `${this.prefix}${this.name}`;
  }

  private get prefix() {
    return this.sex === 'female' ? 'Ms.' : 'Mr.';
  }
}
