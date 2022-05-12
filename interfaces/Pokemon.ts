export default interface IPokemon {
    name: string;
    weight: number;
    height: number;
    flavor_text_entries: IFlavorText[]
    types: IType[];
    abilities: IAbility[];
    genera: IGenera[];
    moves: IMove[];
    stats: IStat[];
  }
  
  export type IType = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
  
  export type IAbility = {
    slot: number;
    is_hidden: boolean;
    ability: {
      name: string;
      url: string;
    };
  };
  
  export type IGenera = {
    genus: string;
    language: ILanguage;
  };
  
  export type IMove = {
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
  
  export type IStat = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  };
  
  export type IFlavorText = {
      flavor_text: string;
      language: ILanguage,
      version: IVersion;
  };
  
  export type ILanguage = {
    name: string;
    url: string;
  };
  
  export type IVersion = {
    name: string;
    url: string;
  };
  