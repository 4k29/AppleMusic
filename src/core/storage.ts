import type {Dataset} from './types'; const KEY='music-lens-dataset-v1';
export const saveDataset=(d:Dataset)=>{try{localStorage.setItem(KEY,JSON.stringify(d));return {ok:true as const}}catch(e){return {ok:false as const,error:e instanceof Error?e.message:'保存容量が不足しています'}}};
export const loadDataset=():Dataset|null=>{try{const s=localStorage.getItem(KEY);return s?JSON.parse(s):null}catch{return null}};export const clearDataset=()=>localStorage.removeItem(KEY);
