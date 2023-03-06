import React from 'react';
import Feature from '../feature/Feature';
import './wbotube.css';

const Wbotube = () => {
  return (
    <div className='botube__wbotube section__padding' id='wbotube'>
      <div className='botube__wbotube-feature'>
        <Feature title='What is Botube' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className='botube__wbotube-heading'>
        <h1 className='gradient__text'>The Possiblites are beyond your Imagination</h1>
        <p>Explore to Future World</p>
      </div>
      <div className='botube__features-container'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
      </div>
    </div>
  )
}

export default Wbotube
