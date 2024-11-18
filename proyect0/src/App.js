
import './App.css';


function App() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: '#EBEBEB'}}>
    <div style={{width: 1266, height: 88, left: -22, top: -19, position: 'absolute', background: '#0B7FCE', boxShadow: '0px 15px 30px -10px rgba(119, 84, 246, 0.27)', border: '1px solid'}} />
    <div style={{width: 148, height: 88, left: 1359, top: -19, position: 'absolute', background: '#0B7FCE', boxShadow: '0px 15px 30px -10px rgba(119, 84, 246, 0.27)', border: '1px solid'}} />
    <img src='Recurso 2.png'  style={{width: 101, height: 109, left: 1374, top: 604, position: 'absolute'}}/>
    <div style={{width: 501, height: 188, left: 873, top: 399, position: 'absolute', background: '#0B7FCE', boxShadow: '0px 15px 30px -10px rgba(119, 84, 246, 0.27)', borderRadius: 10, border: '1px solid'}} />
    <div style={{width: 590, height: 5, left: 838, top: 312, position: 'absolute', background: '#0B7FCE', boxShadow: '0px 15px 30px -10px rgba(119, 84, 246, 0.27)', borderRadius: 10, border: '1px solid'}} />
    <div style={{width: 590, height: 26, left: 838, top: 345, position: 'absolute', color: 'black', fontSize: 18, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</div>
    <div style={{width: 520, height: 134, left: 842, top: 183, position: 'absolute', color: '#0B7FCE', fontSize: 100, fontFamily: 'Arial', fontWeight: '400', wordWrap: 'break-word'}}>SICRP</div>
    <div style={{width: 536.35, height: 5.17, left: 724.91, top: 158.02, position: 'absolute', transform: 'rotate(90.19deg)', transformOrigin: '0 0', background: '#0B7FCE', boxShadow: '0px 15px 30px -10px rgba(119, 84, 246, 0.27)', borderRadius: 10, border: '1px solid'}} />
    <img src='Recurso 1.png' style={{width: 404, height: 455, left: 166, top: 191, position: 'absolute'}}/>
    <button  style={{//boton
    width: 117,
    height: 42,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    left: 1065,
    top: 604,
    position: 'absolute',
    background: '#0B7FCE',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex',
    border: 'none', // Opcional: eliminar el borde del botón por defecto
    cursor: 'pointer', // Opcional: cambiar el cursor al estilo de botón
}}
>
    <span style={{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    }}>
        INGRESAR
    </span>
</button>

<div style={{//caja de texto 1
    width: 334,
    height: 56,
    left: 957,
    top: 429,
    position: 'absolute'
}}>
    <label style={{
        position: 'absolute',
        top: 21.47,
        left: 0,
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: '400',
        color: '#E71010',
        opacity: 0.80
    }}>
        Name
    </label>
    <input 
        type="text" 
        placeholder="ID PATRULLA" 
        style={{
            width: 334,
            height: 56,
            borderRadius: 4,
            border: '1px solid #D5D8DE',
            padding: '16px',
            fontSize: 16,
            fontFamily: 'Arial',
            fontWeight: '400',
            color: '#323941',
            opacity: 0.80,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'white',
        }} 
    />
</div>


<div style={{//caja de texto 2
    width: 334,
    height: 56,
    left: 957,
    top: 502,
    position: 'absolute'
}}>
    <label style={{
        position: 'absolute',
        top: 21.47,
        left: 0,
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: '400',
        color: '#E71010',
        opacity: 0.80
    }}>
        Name
    </label>
    <input 
        type="text" 
        placeholder="CUADRANTE" 
        style={{
            width: 334,
            height: 56,
            borderRadius: 4,
            border: '1px solid #D5D8DE',
            padding: '16px',
            fontSize: 16,
            fontFamily: 'Arial',
            fontWeight: '400',
            color: '#323941',
            opacity: 0.80,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'white',
        }} 
    />
</div>

</div>
  );
}

export default App;
