/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom'
import Layout from 'src/app/Layout'
import './index.css'

export const Mainpage = () => {
  return (
    <Layout>
      <section aria-label='Intro'>
        <div
          css={{
            display: 'grid',
            gridGap: 'var(--layout-gap)',
            gridTemplateColumns: 'repeat(7, 1fr)',
            padding: '6rem',
          }}>
          <div css={{ gridColumn: '1 / 5' }}>
            <h2>Build Natural Language Interfaces for Your Data</h2>
            <p>
              We would like to introduce a no-code Pipeline designer to deepset Cloud where you can connect different
              nodes and design your Pipelines.
            </p>
            <ul
              css={{
                display: 'flex',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'left',
                marginBottom: '-1.5rem',
              }}
              aria-label='CTAs'>
              <li>
                <Link
                  target='_self'
                  to='/editor'
                  rel='noreferrer'
                  color='green'
                  aria-label='Learn more'
                  className='button_link'
                  css={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: 'fit-content',
                    marginTop: '2rem',
                    justifyContent: 'center',
                    padding: '0.375rem 0.8125rem 0.3125rem',
                    background: 'var(--green)',
                    borderRadius: '0.125rem',
                    transition: 'background var(--fast-transition) var(--ease)',
                  }}>
                  <div className='button_wrapper'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 13 14'
                      role='presentation'
                      focusable='false'
                      className='button_arrow first'>
                      <path
                        d='M6.33.8a.43.43 0 01.61 0l5.93 6.05c.09.09.13.21.13.32 0 .11-.04.23-.13.31l-5.93 6.05a.43.43 0 01-.61 0L5.31 12.5a.44.44 0 010-.62L8.62 8.5c.05-.06.02-.15-.06-.15H.43A.44.44 0 010 7.91V6.44C0 6.2.19 6 .43 6h8.14c.08 0 .12-.09.06-.15L5.31 2.46a.44.44 0 010-.62L6.33.8z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'></path>
                    </svg>
                    <div className='button_text-wrapper'>
                      <span>Create new pipeline</span>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 13 14'
                      role='presentation'
                      focusable='false'
                      className='button_arrow second'>
                      <path
                        d='M6.33.8a.43.43 0 01.61 0l5.93 6.05c.09.09.13.21.13.32 0 .11-.04.23-.13.31l-5.93 6.05a.43.43 0 01-.61 0L5.31 12.5a.44.44 0 010-.62L8.62 8.5c.05-.06.02-.15-.06-.15H.43A.44.44 0 010 7.91V6.44C0 6.2.19 6 .43 6h8.14c.08 0 .12-.09.06-.15L5.31 2.46a.44.44 0 010-.62L6.33.8z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'></path>
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className='sidenote'>
            <p
              css={{
                width: 'fit-content',
                padding: '0.125rem 0.5rem 0.0625rem',
                border: '0.125rem solid var(--grey-border)',
                borderRadius: '0.125rem',
                fontSize: 'var(--label-text-size)',
                letterSpacing: '.06rem',
                textTransform: 'uppercase',
                color: 'var(--medium-grey)',
              }}>
              Quick start
            </p>
            <h3>How It Looks Like?</h3>
            <Link
              target='_self'
              to='/editor/123'
              rel='noreferrer'
              className='link_container sidenote-link'
              aria-label='See example'
              color='blue'>
              <div className='link_wrapper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 13 14'
                  role='presentation'
                  focusable='false'
                  className='link_arrow first'>
                  <path
                    d='M6.33.8a.43.43 0 01.61 0l5.93 6.05c.09.09.13.21.13.32 0 .11-.04.23-.13.31l-5.93 6.05a.43.43 0 01-.61 0L5.31 12.5a.44.44 0 010-.62L8.62 8.5c.05-.06.02-.15-.06-.15H.43A.44.44 0 010 7.91V6.44C0 6.2.19 6 .43 6h8.14c.08 0 .12-.09.06-.15L5.31 2.46a.44.44 0 010-.62L6.33.8z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'></path>
                </svg>
                <div className='link_text-wrapper'>
                  <span>See example</span>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 13 14'
                  role='presentation'
                  focusable='false'
                  className='link_arrow second'>
                  <path
                    d='M6.33.8a.43.43 0 01.61 0l5.93 6.05c.09.09.13.21.13.32 0 .11-.04.23-.13.31l-5.93 6.05a.43.43 0 01-.61 0L5.31 12.5a.44.44 0 010-.62L8.62 8.5c.05-.06.02-.15-.06-.15H.43A.44.44 0 010 7.91V6.44C0 6.2.19 6 .43 6h8.14c.08 0 .12-.09.06-.15L5.31 2.46a.44.44 0 010-.62L6.33.8z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Mainpage
