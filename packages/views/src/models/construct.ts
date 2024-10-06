export interface Feature {
  name: string;
  content: string;
}

export interface Proof {
  name: string;
  content: string;
}

export interface Construct {
  feature: Feature[];
  proofs: Proof[];
}
