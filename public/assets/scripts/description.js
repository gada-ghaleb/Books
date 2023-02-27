// This function gets the description of a book from the API using a code from the URL and displays it. If there's an error, it displays an error message.
export default function description() {
  if (window.location.href.includes('details.html')) {
    const loading = document.getElementById('loading');
    const p = document.getElementById('description');
    const code = new URLSearchParams(window.location.search).get('code');

    loading.style.display = 'block';
    
    axios.get(`https://openlibrary.org${code}.json`)
      .then((response) => {
        if (response.status !== 200) {
          p.innerHTML = 'Si è verificato un errore durante il recupero della descrizione. Riprovare più tardi.';
          return;
        }

        const details = response.data;
        const description = details.description?.value ?? details.description ?? 'Nessuna descrizione disponibile';
        p.innerHTML = description;
      })
      .catch((error) => {
        console.error(error);
        p.innerHTML = 'Si è verificato un errore durante il recupero della descrizione. Riprovare più tardi.';
      })
      .finally(() => {
        loading.style.display = 'none';
      });
  }
}

