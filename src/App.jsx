import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Cargar el archivo de música desde la carpeta public
    const audio = new Audio('/music.mp3');

    const playAudio = async () => {
      try {
        await audio.play(); // Intenta reproducir la música
      } catch (err) {
        console.log('La reproducción automática fue bloqueada:', err);
      }
    };

    playAudio(); // Llama a la función para reproducir el audio

    // Limpiar al desmontar el componente
    return () => {
      audio.pause(); // Pausar la música
      audio.currentTime = 0; // Reiniciar el tiempo del audio
    };
  }, []);

  return (
    <>
      <div className="container_postif_container">
        <div className="posfif_container">
          <div className="postif">
            <p className="postif_text">
              Love Each Other <br />            
              Even When We
              <br />
              Hate Each Other
              <br />
              No Running
              <br />
              Take Care When We Are Old,
              <br />
              Senile and Smelly <br />
              And it´s forever
            </p>
            
            <p className="postif_person">Derek Shepherd</p>
            <p className="postif_person">Meredith Grey</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
