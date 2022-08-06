import React from 'react';
import loaderNotFound from '../../images/not-found.svg'

export default function PreloaderNotFound() {
    return (
        <section className='preloaderNotFound'>
            <img src={loaderNotFound} className='preloaderNotFound__circle' alt='loader' />
            <h2 className='preloaderNotFound__header'>Nothing found</h2>
            <p className='preloaderNotFound__text'>Sorry, but nothing matched your search terms.</p>
        </section>
    )
}