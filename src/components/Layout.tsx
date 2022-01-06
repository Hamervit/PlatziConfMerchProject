import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
