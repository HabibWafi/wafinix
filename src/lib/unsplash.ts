// Free Unsplash stock photo by id (verified URLs). Centralized so demo imagery
// is easy to swap for the user's own assets later.
export const ux = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
