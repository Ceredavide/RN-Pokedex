export default interface Pokemon {
  weight: number;
  height: number;
  types: Type[];
  abilities: Ability[];
  genera: Genera[];
  moves: Move[];
  stats: Stat[]
}

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Ability = {
  slot: number;
  is_hidden: boolean;
  ability: {
    name: string;
    url: string;
  };
};

export type Genera = {
  genus: string;
  language: {
    name: string;
    url: string;
  };
};

export type Move = {
  move: {
    name: string;
    url: string;
  }
  version_group_details: {
    level_learned_at: number,
    move_learn_method: {
      name: string;
      url: string;
    },
    version_group: {
      name: string;
      url: string;
    }
  }[]
}

export type Stat = {
  base_stat : number
  effort: number;
  stat : {
    name: string;
    url: string;
  }
}
