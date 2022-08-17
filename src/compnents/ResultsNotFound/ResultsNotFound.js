import React from 'react';
import loaderNotFound from '../../images/not-found.svg'

export default function ResultsNotFound() {
    return (
        <section className='resultsNotFound'>
            <img src={loaderNotFound} className='resultsNotFound__circle' alt='loader' />
            <h2 className='resultsNotFound__header'>Nothing found</h2>
            <p className='resultsNotFound__text'>Sorry, but nothing matched your search terms.</p>
        </section>
    )
}