import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  // Load progress from localStorage or initialize empty
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('javasheet-progress');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever completedItems changes
  useEffect(() => {
    localStorage.setItem('javasheet-progress', JSON.stringify(completedItems));
  }, [completedItems]);

  // Mark item as completed
  const markAsCompleted = (itemId) => {
    if (!completedItems.includes(itemId)) {
      setCompletedItems([...completedItems, itemId]);
    }
  };

  // Mark item as incomplete
  const markAsIncomplete = (itemId) => {
    setCompletedItems(completedItems.filter(id => id !== itemId));
  };

  // Toggle completion status
  const toggleCompletion = (itemId) => {
    if (completedItems.includes(itemId)) {
      markAsIncomplete(itemId);
    } else {
      markAsCompleted(itemId);
    }
  };

  // Check if item is completed
  const isCompleted = (itemId) => {
    return completedItems.includes(itemId);
  };

  // Get progress for a category
  const getCategoryProgress = (categoryItems) => {
    const completed = categoryItems.filter(item => completedItems.includes(item)).length;
    return {
      completed,
      total: categoryItems.length,
      percentage: categoryItems.length > 0 ? Math.round((completed / categoryItems.length) * 100) : 0
    };
  };

  // Get overall progress
  const getOverallProgress = () => {
    // Define all your course items
    const allItems = [
      'introduction',
      'variables', 'datatypes', 'operators', 'controlflow', 'loops', 'branching',
      'typecasting', 'arrays', 'methods', 'accessmodifiers', 'inout',
      'classobject', 'methodoverloading', 'constructor', 'static', 'thiskeyward', 'methodoverriding',
      'inheritance', 'polymorphism', 'encapsulation', 'AbstractClassMethods', 'javaSuper', 'interface',
      'video-tutorials'
    ];

    const completed = completedItems.length;
    const total = allItems.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
  };

  // Reset all progress
  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompletedItems([]);
      localStorage.removeItem('javasheet-progress');
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        completedItems,
        markAsCompleted,
        markAsIncomplete,
        toggleCompletion,
        isCompleted,
        getCategoryProgress,
        getOverallProgress,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};