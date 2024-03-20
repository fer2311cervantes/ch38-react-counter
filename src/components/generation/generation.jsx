/**
 * El nombre del componente debe respetar la convención  UpperCamelCase
 */

const Generation = ( props ) => {
    return <h2>Generation</h2>
}

const Greeting = ( props ) => {
    return (
      <>
        { /* Mi comentario 
        <p style= { {color:props.styleColor} }>Hola { props.name }</p>*/ }
        <p>Hola {props.name}</p>
        
      </>
    );
  };
/* 
Exportación nombrada:
export {Generation}

Exportación por dafault:  (only one default per file)
export default Generation
*/
export default Generation;
export { Greeting };