function remainingApples(totalApples, givenAway) {
    // Return totalApples minus givenAway
    if (givenAway > totalApples) {
          throw new Error("You cannot give away more apples than you have!");
      }
    
    return totalApples-givenAway;
  
    
  }
  const total = 20; // Total apples in the basket initially
  const given = 5;  // Apples given to the neighbor
  const remaining = remainingApples(total, given);
  console.log(`Remaining apples in the basket: ${remaining}`);