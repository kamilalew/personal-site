import React from 'react';
import './Main.scss'

export default function Main() {
    return (
        <div className='Main-wrapper'>
            <div className='Heading'>
                <div className='Name'>Kamila Lewicka</div>
                <div className='Description'>Main page</div>
            </div>
            <div className='Middle-section-wrapper'>
                <div className='Red-background'></div>
                <div className='Menu-wrapper'>
                    <div className='Menu-icon'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" alt='menu' />
                    </div>
                    <div className='Menu'>Menu</div>
                </div>
                <div className='Hello-wrapper'>
                    <div className='Square'>
                        <div className='Inside-square'></div>
                    </div>
                    <div className='Hello-message part-1'>He</div>
                    <div className='Hello-message part-2'>llo<span>.</span></div>
                </div>
            </div>
        </div>
    );
}