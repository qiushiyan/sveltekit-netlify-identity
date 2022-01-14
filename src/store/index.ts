import { writable } from "svelte/store";

const useAuth = () => {
  const { subscribe, set, update } = writable({
    user: null,
    authReady: false,
  });

  return {
    subscribe,
    login: (user) => update((auth) => (auth.user = user)),
    logout: () => {
      (auth) => (auth.user = null);
    },
  };
};

export const auth = useAuth();
