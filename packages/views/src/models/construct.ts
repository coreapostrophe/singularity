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
  title?: string;
  features?: Feature[];
  proofs?: Proof[];
}

/// Temporary value for prototype development
const mockConstructs: Construct[] = [
  { id: 'cons-1', features: [], proofs: [], title: 'Construct 1' },
  { id: 'cons-2', features: [], proofs: [], title: 'Construct 2' },
  { id: 'cons-3', features: [], proofs: [], title: 'Construct 3' },
  { id: 'cons-4', features: [], proofs: [], title: 'Construct 4' },
  { id: 'cons-5', features: [], proofs: [], title: 'Construct 5' },
];

export const constructsAtom = atom<Construct[]>(mockConstructs);

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
