interface MajorCredits {
  credits: number;
  // Nominal typing using a unique brand
  readonly __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  // Nominal typing using a unique brand
  readonly __brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}
