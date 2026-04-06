export interface PracticeArea {
  id: number;
  title: string;
  category: "dispute" | "corporate";
  description: string;
  icon: string;
}

export interface Partner {
  name: string;
  title: string;
  bio: string[];
  specializations: string[];
  education: string;
  courts: string[];
}

export interface Office {
  city: string;
  address: string[];
}
