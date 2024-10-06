import { atom } from 'jotai';
import { useImmerAtom } from 'jotai-immer';

export interface Feature {
  name: string;
  filePath: string;
}

export interface Proof {
  name: string;
  filePath: string;
}

export interface Construct {
  id: string;
  title: string;
  features: Feature[];
  proofs: Proof[];
}

export const constructsAtom = atom<Construct[]>([]);

export const useConstructs = () => {
  const [constructs, setConstructs] = useImmerAtom(constructsAtom);

  const addConstruct = (construct: Construct) => {
    setConstructs((draft) => {
      draft.push(construct);
    });
  };

  const removeConstruct = (id: string) => {
    setConstructs((draft) => {
      const newDraft = draft.filter((construct) => construct.id !== id);
      draft = newDraft;
    });
  };

  return {
    constructs,
    addConstruct,
    removeConstruct,
  };
};
