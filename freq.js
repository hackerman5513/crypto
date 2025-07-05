data = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'
xor = (str,key)=>str.match(/.{1,2}/g).map(hex=>parseInt(hex,16)^key.charCodeAt()).map(n=>String.fromCharCode(n)).join('')
get_score = (str) => {
  let hash = {};
  [...str].forEach(c => {hash[c] = (hash[c] || 0) + 1})

hash =  Object.entries(hash).sort((a, b) => b[1] - a[1])
let score = 0
let template = "ETAOINSHRDLU"
  
for (let index in hash) {
  let char = hash[index][0].toUpperCase()
  let pos = template.indexOf(char)
  if (pos !== -1) 
    score += 1 / (1 + Math.abs(index - pos)) 
}
 return score.toFixed(1)
}

buff = []

for(let i = 0; i <= 127; i++)
 { let xor_key = String.fromCharCode(i)
   let xored_str = xor(data,xor_key)
   let score = get_score(xored_str)
   buff.push([score,xored_str,xor_key])
 }

buff = buff.sort((a, b) => b[0] - a[0])
for(let e of buff)
 document.body.innerHTML+=+e[0]+" "+e[1]+" "+e[2]+"<br>"







