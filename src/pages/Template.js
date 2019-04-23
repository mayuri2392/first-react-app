import React from 'react';
import  Header  from '../components/Header';
import  Banner from '../components/Banner';
import Navigate  from '../components/Navigation';
import  Wrapper  from '../components/Wrapper';
import { Box} from '../components/HighlightBox';

//import './Template.css';
const Template = () => {
  const items = [
    {
      icon: 'fa-vcard-o',
      header: 'Awesome header'
    },
    {
      icon: 'fa-vcard-o',
      header: 'Awesome header'
    },
    {
      icon: 'fa-vcard-o',
      header: 'Awesome header'
    },
    {
      icon: 'fa-vcard-o',
      header: 'Awesome header'
    }
  ];
  return <>
    <Header />
    <Navigate />
    <Banner />
    <Wrapper>
      {items.map(item => <Box item={item} />)}
    </Wrapper>
  </>
}

export default Template;