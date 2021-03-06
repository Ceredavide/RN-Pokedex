import React from "react";
import { SvgProps } from "react-native-svg";

import BugIcon from "../../assets/icons/types/bug.svg";
import DarkIcon from "../../assets/icons/types/dark.svg";
import DragonIcon from "../../assets/icons/types/dragon.svg";
import ElectricIcon from "../../assets/icons/types/electric.svg";
import FairyIcon from "../../assets/icons/types/fairy.svg";
import FightingIcon from "../../assets/icons/types/fighting.svg";
import FireIcon from "../../assets/icons/types/fire.svg";
import FlyingIcon from "../../assets/icons/types/flying.svg";
import GhostIcon from "../../assets/icons/types/ghost.svg";
import GrassIcon from "../../assets/icons/types/grass.svg";
import GroundIcon from "../../assets/icons/types/ground.svg";
import IceIcon from "../../assets/icons/types/ice.svg";
import NormalIcon from "../../assets/icons/types/normal.svg";
import PosionIcon from "../../assets/icons/types/poison.svg";
import PsychicIcon from "../../assets/icons/types/psychic.svg";
import RockIcon from "../../assets/icons/types/rock.svg";
import SteelIcon from "../../assets/icons/types/steel.svg";
import WaterIcon from "../../assets/icons/types/water.svg";

// TODO: https://medium.com/bam-tech/add-custom-icons-to-your-react-native-application-f039c244386c
// convertire icone in set ed usare vector-icons

const typeIcons: typeIcon = {
  bug: <BugIcon />,
  dark: <DarkIcon />,
  dragon: <DragonIcon />,
  electric: <ElectricIcon />,
  fairy: <FairyIcon />,
  fighting: <FightingIcon />,
  fire: <FireIcon />,
  flying: <FlyingIcon />,
  ghost: <GhostIcon />,
  grass: <GrassIcon />,
  ground: <GroundIcon />,
  ice: <IceIcon />,
  normal: <NormalIcon />,
  poison: <PosionIcon />,
  psychic: <PsychicIcon />,
  rock: <RockIcon />,
  steel: <SteelIcon />,
  water: <WaterIcon />,
};

type typeIcon = {
  [key: string]: React.FC<SvgProps>;
};

export default typeIcons;
