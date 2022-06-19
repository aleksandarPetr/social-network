import React from 'react'
import styles from '../styles/Paragraph.module.css'

export function Paragraph() {
    return (
        <div className={styles.paragraph}>
            <h2 className={styles.title}>
                Examine our network
            </h2>
            <p className={styles.text}>
                Choose a person from Meet App group and we will display all the following information about that person.            </p>
        </div>
    )
}

// export function ArticleContent() {
//     return (
//         <div className="article--content pb-16 pr-20 pt-11 lg:pt-16">
//             <div className="mx-auto w-full max-w-3xl">
//                     <header>
//                         <h1 className="mt-12 mb-3 text-4xl font-bold lg:text-5xl lg:leading-tight">
//
//                         </h1>
//                     </header>
//
//                 <div className="prose mb-8 md:px-16 lg:prose-xl lg:px-0">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export function ArticleMedia() {
//     return (
//         <div className="article--media relative -right-10 py-10 lg:right-0 lg:w-full lg:py-0">
//             <span className="inline-flex">Hi</span>
//         </div>
//     )
// }
