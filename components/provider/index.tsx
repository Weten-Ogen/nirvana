import React from 'react';
import NavBar from '../custom/navbar';
import AuthProvider from './authprovider';

interface proprops {
    children: React.ReactNode
}
export default function Providers({children}:proprops) {
  return (
    <AuthProvider>
      <div>
          <NavBar/>
          <div className=''>
              {children}
          </div>
      </div>
    </AuthProvider>
  );
}
