// MajorCredits interface with brand property
export interface MajorCredits {
  credits: number;
  _brand: 'major'; // Brand property for nominal typing
}

// MinorCredits interface with brand property
export interface MinorCredits {
  credits: number;
  _brand: 'minor'; // Brand property for nominal typing
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major',
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor',
  };
}