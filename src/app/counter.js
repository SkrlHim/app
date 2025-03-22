"use client"

export async function getStats() {
  try {
    // Simplified implementation for demo purposes
    return {
      count: 0,
      recentAccess: []
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      count: 0,
      recentAccess: []
    };
  }
}

export async function incrementAndLog() {
  try {
    // Simplified implementation for demo purposes
    const count = 1;
    const recentAccess = [{ accessed_at: new Date().toISOString() }];
    
    return {
      count,
      recentAccess
    };
  } catch (error) {
    console.error('Error incrementing count:', error);
    return {
      count: 0,
      recentAccess: []
    };
  }
}
