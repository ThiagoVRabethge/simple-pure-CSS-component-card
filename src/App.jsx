import './App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='card-body'>
        <div className="card-header">
          <h1 className='mb-3'>Wanda</h1>
          <p className='italic mb-3'>Our amazing favorite witcher</p>
        </div>
        <div className="card-main">
          <img 
            src='src\assets\doutor_estranho_no_multiverso_da_loucura_wanda_maximoff_feiticeira_escarlate__2s5q2wm-1210x544.webp' 
            alt='imagem da personagem Wanda'
            className='card-icon'
          />
        </div>
        <div className='card-footer'>
          <h2>Know more about her history</h2>
          <button className='btn-witch text-end'>Read complete history</button>
        </div>
      </div>
    </div>
  );
};

export default App;