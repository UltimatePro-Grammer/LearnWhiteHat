import create from 'zustand'
type levelState = {
    currentLevel: number
    increaseLevel: Function
    currentXP: number
    increaseXP: (amount: number)=>void
    maxXP: number
    setMaxXP: (newVal: number)=>void
}
const useLevels = create<levelState>(set => ({
    currentLevel: 1,
    increaseLevel: () => set(state=>({ currentLevel: state.currentLevel + 1 })),
    currentXP: 0,
    increaseXP: (amount) => {
        return set((state)=>{
            let newXP: number = state.currentXP + amount;
            while(newXP >= state.maxXP) {
                newXP -= state.maxXP;
                state.increaseLevel();
            }
            return ({ currentXP: newXP })
        })
    },
    maxXP: 10,
    setMaxXP: (newVal) => set(()=>({ maxXP: newVal }))
}));
export default useLevels;