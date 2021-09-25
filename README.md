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

- Changer de base de données et le PORT n'est pas obligatoire
- Mettre sa base de données dans : `models/dbConfig.js`
- Changer le PORT du back si besoin qui est dans : `index.js` (actuellement 5500)
- Les endroit ou le PORT du back est utilisé dans le front(/client) :
  - `./client/src/pages/Home.js`(ligne 23)
  - `./client/package.json` (ligne 5)

---

### Architecture :

## Le backend:

- Le backend est composée de 2 dossier `./models`, `./routes`, ainsi que le fichier `./index.js`
- Dans le dossier `./models/`:
  - `dbConfig.js` on trouve la connection à la base de données mongodb
  - `postModel.js` on trouve le modele de notre base de données
- Dans le dossier `./routes/`:
  - `postsController.js` on trouve les requetes CRUD faites à la base de donées

## Le Frontend :

- Le frontend est dans le dossier `./client` qui est composée lui meme de 2 dossier `/src`,`/public`

  - Dans le `/src` on vas trouver les dossiers `/components`, `/pages`, `/styles`, aisin que les fichiers `/App.js` et `/index.js`

    - Dans le dossier`/components` :

      - On trouve le boutton delete user `/DeleteUsers.js` qui est utilisé dans `/Users.js` qui est lui même appelé dans `../pages/Home.js`
      - On trouve La Navbar `/Navigation.js`
      - Enfin le fichier `/Users.js` où l'on trouve le tableau qui permet d'afficher les donées de la base de donées et aussi de les modifier

    - Dans le dossier `/pages` :

      - On y trouve le fichier Home `/Home.js` qui est notre page d'aceuil où est affiché notre form pour ajouté des users et aussi le tableau des users qui est dans `../components/Users.js`
      - On y trouve le fichier Home `/NewUsers.js` qui est notre page pour ajouté des users on y toruve donc un form ou lo'n entre les donées d'un nouvelle user
      - Enfin le fichier `/NotFound.js` qui est la page qui s'affichera quand les routes de seront pas bonne (ex: `http://localhost:3000/azeraze` )

    - Dans le dossier `/styles` on y trouve tous le css :

      - Dans `/styles/components`:
        - `_ajoutrapide.scss` qui est le css du form présent dans `../pages/Home.js`
        - `_form.scss` qui est le css du form présent dans `../pages/NewUsers.js`
        - `_navigation.scss` qui est le css de `../components/Navigation.js`
        - `_table.scss` qui est le css du tableau qui affiche les données dans `../pages/Home.js`
      - Le fichier `_settings.css` est la ou nous mettre tous les paramettre de bases qui seront réutilisé partous dans le css
      - Le fichier `index.scss` permet de relier tous les fichier css

    - Dans le fichier `App.js` on y trouve les chemins d'accès
