base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
data = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'

hex_to_bin = (data)=>[...data].map(c=>parseInt(c, 16).toString(2).padStart(4, '0')).join('')
bin_to_base64 = (data)=>data.match(/.{1,6}/g).map(b_seq=>base64[parseInt(b_seq,2)]).join('')

hex_to_b64 = (x)=>bin_to_base64(hex_to_bin(data))
console.log(hex_to_b64(data))

