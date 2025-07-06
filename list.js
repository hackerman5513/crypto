  xor = (str, key) =>
        str
          .match(/.{1,2}/g)
          .map(hex => parseInt(hex, 16) ^ key.charCodeAt())
          .map(n => String.fromCharCode(n))
          .join('')

      get_score = (str) => {
        let hash = {};
        [...str].forEach(c => {
          hash[c] = (hash[c] || 0) + 1
        })

        hash = Object.entries(hash).sort((a, b) => b[1] - a[1])
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

      main = (data) => {
        for (let i = 0; i <= 127; i++) {
          let xor_key = String.fromCharCode(i)
          let xored_str = xor(data, xor_key)
          let score = get_score(xored_str)
          if (score > 3.5)
            buff.push([score, xored_str, xor_key])
        }
      }

      decode_work = (x) => {
        x = x.split('\n')
        for (let i = 0; i < x.length; i++)
          main(x[i])
        
        buff = buff.sort( (a,b)=>b[0]-a[0] )
        
        for (let i = 0; i < buff.length; i++) {
          let e = buff[i]
          document.body.innerHTML += +e[0] + " " + e[1] + " " + e[2] + "<br>"
        }
      }

      url = "https://corsproxy.io/?url=https://cryptopals.com/static/challenge-data/4.txt"

      fetch(url)
        .then(res => res.text())
        .then(x => decode_work(x))
