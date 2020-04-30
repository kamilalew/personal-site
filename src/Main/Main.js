import React from 'react';
import './Main.scss'

export default function Main() {
    return (
        <div className='main-wrapper'>
            <div className='gold-background'></div>
            <div className='heading'>
                <div className='name'>Kamila Lewicka</div>
                <div className='description'>Main page</div>
            </div>
            <div className='middle-section-wrapper'>
                <div className='menu-wrapper'>
                    <div className='menu-icon'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" alt='menu' />
                    </div>
                    <div className='menu'>Menu</div>
                </div>
                <div className='hello-wrapper'>
                    <div className='square'>
                        <div className='inside-square'></div>
                    </div>
                    <div className='hello-message part-1'>He</div>
                    <div className='hello-message part-2'>llo<span>.</span></div>
                </div>
            </div>
        </div>
    );
}