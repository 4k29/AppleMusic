export interface ParsedCsv {headers:string[];rows:Record<string,string>[];errors:string[]}
export function parseCsv(input:string):ParsedCsv {
 const text=input.replace(/^\uFEFF/,''); const matrix:string[][]=[]; let row:string[]=[],field='',quoted=false;
 for(let i=0;i<text.length;i++){const c=text[i]; if(quoted){if(c==='"'&&text[i+1]==='"'){field+='"';i++}else if(c==='"')quoted=false;else field+=c;}else if(c==='"')quoted=true;else if(c===','){row.push(field);field=''}else if(c==='\n'){row.push(field.replace(/\r$/,''));matrix.push(row);row=[];field=''}else field+=c;}
 if(field||row.length){row.push(field.replace(/\r$/,''));matrix.push(row)} const errors:string[]=[]; if(quoted) errors.push('閉じられていない引用符があります');
 const headers=(matrix.shift()??[]).map(x=>x.trim()); const rows=matrix.filter(r=>r.some(Boolean)).map((r,ri)=>{if(r.length!==headers.length)errors.push(`${ri+2}行目: 列数が一致しません`);return Object.fromEntries(headers.map((h,i)=>[h,r[i]??'']))});
 return {headers,rows,errors};
}
