// Shared constants for SmartList AI

export const commonFoodItems = {
  dairy: ['milk', 'yogurt', 'cheese', 'butter', 'eggs'],
  produce: ['apples', 'bananas', 'carrots', 'lettuce', 'tomatoes'],
  proteins: ['chicken', 'beef', 'fish', 'tofu', 'beans'],
  pantry: ['bread', 'rice', 'pasta', 'cereal', 'oil'],
  condiments: ['ketchup', 'mustard', 'mayo', 'soy sauce']
};

export const quantityLevels = {
  FULL: { threshold: 0.8, restockPriority: 'low' },
  HALF: { threshold: 0.5, restockPriority: 'medium' },
  LOW: { threshold: 0.2, restockPriority: 'high' },
  EMPTY: { threshold: 0.0, restockPriority: 'urgent' }
};
