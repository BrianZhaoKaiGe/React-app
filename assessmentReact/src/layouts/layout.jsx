// 公用部分
import React, { useEffect, useState } from 'react';
import HeaderPage from './components/Header';
import FooterPage from './components/Footer';

export default function IndexPage(props) {
  return (
    <>
      <HeaderPage />
      {props.children}
      <FooterPage />
    </>
  );
}
