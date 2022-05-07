export default interface Pokemon {
    name: string;
    weight: number;
    height: number;
    flavor_text_entries: FlavorText[]
    types: Type[];
    abilities: Ability[];
    genera: Genera[];
    moves: Move[];
    stats: Stat[];
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
    language: Language;
  };
  
  export type Move = {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  };
  
  export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
  
  export type FlavorText = {
      flavor_text: string;
      language: Language,
      version: Version;
  };
  
  export type Language = {
    name: string;
    url: string;
  };
  
  export type Version = {
    name: string;
    url: string;
  };
  