export type DataKind='event'|'summary'; export type TimeUnit='seconds'|'milliseconds'|'minutes';
export interface Mapping {title:string;artist?:string;album?:string;playedAt?:string;duration?:string;count?:string;eventId?:string}
export interface ImportOptions {kind:DataKind;unit:TimeUnit;timeZone:string;summaryMode:'add'|'replace'}
export interface RecordRow {title:string;artist:string;album:string;playedAt?:string;durationSeconds?:number;count:number;eventId?:string;source:string;kind:DataKind}
export interface ImportStats {read:number;accepted:number;failed:number;duplicates:number;files:number}
export interface Dataset {records:RecordRow[];stats:ImportStats;demo:boolean;timeZone:string;createdAt:string;fileHashes?:string[]}
