import React from 'react';
const Box = ({ item }) => {
  return <section>
  <div className="content">
    <header>
      <a href="#" className={`icon ${item.icon}`}><span className="label">Icon</span></a>
      <h3>{item.header}</h3>
    </header>
    <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
  </div>
</section>
}

export { Box }