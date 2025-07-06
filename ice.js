line = `Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal`;

xor = (str, keys) => [...str].map((c, i) => c.charCodeAt() ^ keys[i % 3].charCodeAt()).map(n => n.toString(16).padStart(2, '0')).join('')

//xor(line,"ICE")
