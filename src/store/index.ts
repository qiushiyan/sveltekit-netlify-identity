import { writable } from "svelte/store";

const useAuth = () => {
  const { subscribe, set, update } = writable({
    username: null,
    email: null,
    token: null,
    authReady: false,
  });

  return {
    subscribe,
    login: (username: string, email: string, token: string) =>
      set({ username, email, token, authReady: true }),
    logout: () =>
      update((old) => ({ ...old, username: null, email: null, token: null })),
    ready: () => update((old) => ({ ...old, authReady: true })),
  };
};

export const auth = useAuth();
