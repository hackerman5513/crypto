hex = '1c0111001f010100061a024b53535009181c'
key = '686974207468652062756c6c277320657965'
xor_str = (x, y) =>x.split('').map((bit, i) => (parseInt(bit,16) ^ parseInt(y[i],16)).toString(16)).join('')
