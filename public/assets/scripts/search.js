//This function searches for books based on user input and displays the results with author information.If an error occurs, an error message is shown.
export default function search() {
  const showData = document.getElementById('show-data');
  const loading = document.getElementById('loading');
  const input = document.getElementById('search_data').value;

  if (!input) {
    showData.style.display = 'block';
    loading.style.display = 'none';
    showData.innerHTML = 'Inserisci una parola chiave valida per la ricerca.';
    return;
  }

  showData.style.display = 'none';
  loading.style.display = 'block';

  axios.get(`https://openlibrary.org/subjects/${input}.json`)
    .then((response) => {
      const category = response.data.works;
      const workCount = response.data.work_count;

      if (workCount === 0) {
        showData.innerHTML = 'La categoria di ricerca non ha prodotto alcun risultato.';
      } else {
        showData.innerHTML = '';
        for (const works of category) {
          const mainDiv = document.createElement('div');
          mainDiv.className = 'container text-center border border-1 rounded mt-3 p-2';

          const title = document.createElement('h3');
          title.innerHTML = works.title ?? 'Titolo non disponibile';
          mainDiv.appendChild(title);

          const authorsName = document.createElement('p');
          authorsName.innerHTML = works.authors?.[0]?.name ?? 'Autore non disponibile';
          mainDiv.appendChild(authorsName);

          const theUrl = document.createElement('a');
          theUrl.innerHTML = 'Details';
          theUrl.className = 'navbar-brand details p-2';
          theUrl.href = `details.html?code=${works.key}`;
          mainDiv.appendChild(theUrl);

          showData.appendChild(mainDiv);
        }
      }
    })
    .catch((error) => {
      console.error(error);
      showData.innerHTML = 'Si è verificato un errore nella ricerca. Riprovare più tardi';
    })
    .finally(() => {
      showData.style.display = 'block';
      loading.style.display = 'none';
    });
}
