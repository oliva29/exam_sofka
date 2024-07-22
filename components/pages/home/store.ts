import { create } from 'zustand';   
import { PropsItem } from './interface';

export interface HomeState { 
    select: PropsItem | null
    setSelect: (value: PropsItem) => void   
    filter: string | null
    setFilter: (value: string) => void   
    data: PropsItem[]
    setData: (value: PropsItem[]) => void   
}

export const homeStore = create<HomeState>()( 
     (set) => ({
        select:  null,
        setSelect: (value: PropsItem) => set(() => ({select: value})),
        filter:  null,
        setFilter: (value: string) => set(() => ({filter: value})),
        data: [],
        setData: (value: PropsItem[]) => set(() => ({data: value})),
     }), 
     
)
