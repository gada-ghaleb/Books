# Books
 
> È un progetto realizzato per start2impact per il corso di JavaScript Advanced
>
**Tecnologie utilizzate**
 - HTML
 - css
 - JavaScript
 - Bootstrap
 - Axios
 - Webpack
 
 ## Informazioni sul progetto
Questo progetto utilizza HTML, CSS, JavaScript e Bootstrap per creare un'applicazione di ricerca libri. Utilizza la libreria JavaScript Axios per effettuare richieste HTTP al server di Openlibrary e ottenere i dati dei libri ricercati. Il layout dell'applicazione è stato progettato utilizzando Bootstrap per garantire un'esperienza utente ottimale su tutte le piattaforme e dispositivi. I file CSS personalizzati sono stati utilizzati per formattare ulteriormente il layout e dare un aspetto unico all'applicazione. I file JavaScript sono stati utilizzati per la logica dell'applicazione e per mostrare i risultati della ricerca in modo dinamico sulla pagina. Webpack viene utilizzato per compilare e assemblare il codice.
   
           

### <a href="https://books-6b908.web.app">Prova ora l'applicazione di ricerca libri</a> 


![scrishot](https://user-images.githubusercontent.com/103994748/211789010-7ca8e922-8388-4c0a-8766-dbc025251b9a.png)



## Struttura delle cartelle
### La struttura delle cartelle è la seguente:
- public/
  - assets/
    - styles/ : contiene tutti i file CSS per formattare il layout dell'applicazione, incluse le classi di Bootstrap
    - scripts/ : contiene tutti i file JavaScript utilizzati nell'applicazione
    - images/ : contiene tutte le immagini utilizzate nell'applicazione

  - dist/
    - main.js/ : un file JavaScript che contiene la logica principale dell'applicazione.
  - index.html/ : il file principale dell'applicazione, che contiene il link per accedere ai file di assets e utilizza la libreria Axios per effettuare richieste HTTP.
  - details.html/ : un file HTML supplementare utilizzato per mostrare i dettagli di un libro.
  
 - src/ 
     - index.js/ : contiene i file principali dell'applicazione




 
## Funzioni di ricerca e descrizione nell'applicazione di libreria
- Il file principale dell'applicazione, index.js, importa due funzioni da due file script diversi: `search` e `description`. La funzione `search viene assegnata al click del bottone con l'ID "get-button" tramite un evento listener. La funzione description viene poi richiamata alla fine del file. Queste funzioni forniscono la logica dell'applicazione e sono responsabili rispettivamente di effettuare la ricerca dei libri e di visualizzare la descrizione dei risultati della ricerca.

```javaScript
import search from '../assets/scripts/search';
import description from '../assets/scripts/description';

document.getElementById('get-button').addEventListener('click', search);

description();
};
```
- Questa funzione cerca libri in base all'input dell'utente e visualizza i risultati con informazioni sull'autore. Se si verifica un errore, viene visualizzato un messaggio di errore.
```javaScript
export default function search() {.... 
 try {
       axios.get(`https://openlibrary.org/subjects/${input}.json`)
         .then((response) => {....
 catch (error) {....      
```
 
- Questa funzione ottiene la descrizione di un libro dall'API utilizzando un codice dall'URL e la visualizza. In caso di errore, viene visualizzato un messaggio di errore. 
```javaScript
export default function description() {....
  try {
         axios.get(`https://openlibrary.org${code}.json`)
           .then((response) => {....
  catch (error) {.....         

```

 
