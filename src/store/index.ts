import { writable } from "svelte/store";

const useAuth = () => {
  const { subscribe, set, update } = writable({
    username: null,
    email: null,
  });

  return {
    subscribe,
    login: (username: string, email: string) => {
      set({ username, email });
    },
    logout: () => {
      set({ username: null, email: null });
    },
  };
};

export const auth = useAuth();
