## Qwest Tv test

### React / Express / MongoDB /

### instalation :

Instalation server : `npm i`

Instalation client : `cd client` + `npm i`

### Lancement projet :

Start server : `npm start`

Start client : `cd client` + `npm start`

---

### Back config :

- Mettre sa base de donnée dans : `models/dbConfig.js`
- Changer le PORT du back si besoin qui est dans : `index.js` (actuellement 5500)
- Les endroit ou le PORT du back est utilisé dans le front(/client) :
  - `./client/src/pages/Home.js`(ligne 23)
  - `./client/package.json` (ligne 5)
