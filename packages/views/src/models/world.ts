import { atom, useAtomValue } from 'jotai';
import { Construct, constructsAtom } from './construct';

export interface World {
  constructs: Construct[];
}

export const worldAtom = atom<World>((get) => {
  const constructs = get(constructsAtom);
  return {
    constructs,
  };
});

export const useWorld = () => {
  const world = useAtomValue(worldAtom);
  return { world };
};
