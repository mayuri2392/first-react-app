import React from 'react';

const Wrapper = ({ children }) => {
  return <section class="wrapper">
    <div class="inner">
      <header class="special">
        <h2>Sem turpis amet semper</h2>
        <p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
      </header>
      <div className='highlights'>
        { children }
      </div>
    </div>
  </section>
}
export default Wrapper;