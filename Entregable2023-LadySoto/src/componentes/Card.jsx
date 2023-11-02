//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre,pais}) {
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <p>Tu país favorito es:{pais}</p>
    </div>
  );
}

export default Card;
