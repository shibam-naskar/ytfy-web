import {create} from 'zustand';

export const useMusicStore = create((set) => ({
  songs: [],
  currentSong: null,
  indexp:0,
  playSong: (song) => set({ currentSong: song }),
  addQueue: (songslist,index)=>set({songs: songslist}),
  setIndexp:(ind)=>set({indexp:ind})
//   addToPlaylist: (song) => set((state) => ({ songs: [...state.songs, song] })),
}));
