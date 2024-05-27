import "./reset.css";

function App() {
  return (
    <div>
      <header>
        <h1>Crie e compartilhe seu evento.</h1>
        <p>O primeiro passo é preencher esse formulário de inscrição.</p>
      </header>
      <form>
        <h1>Informações do Evento</h1>
        <div>
          <label htmlFor="title">Título do evento (mínimo 8 caracteres)</label>
          <input type="text" id="title" />
        </div>
        <div>
          <label htmlFor="link">Link do evento (comece com https://)</label>
          <input type="text" id="link" />
        </div>
        <div>
          <label htmlFor="whatsapp">Whatsapp para contato</label>
          <input type="text" id="whatsapp" />
        </div>
        <div>
          <label htmlFor="extra">Informações extras</label>
          <textarea id="extra" />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select id="category">
            <option value="">Tipo do evento</option>
            <option value="1">Categoria 1</option>
          </select>
        </div>
        <h1>Privacidade</h1>
        <div>
          <label htmlFor="email">E-mail do administrador (digite um email válido)</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Senha de acesso para os participantes (mínimo 8 caracteres)</label>
          <input type="password" id="password" />
        </div>
        <div>
          <input type="checkbox" id="privado" />
          <label htmlFor="privado">Evento privado</label>
        </div>
        <h1>Dia e hora</h1>
        <div>
          <label htmlFor="date">Data</label>
          <input type="date" id="date" />
          <input type="time" className="time" />
          <input type="time" className="time" />
        </div>
        <footer>
          <button type="submit">Salvar evento</button>
        </footer>
      </form>
    </div>
  );
}

export default App;
