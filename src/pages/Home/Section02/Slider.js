import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import books from './data'

const Slider = () => {

    const [product, setProduct] = useState(books)
    const [index, setIndex] = React.useState(0)

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > product.length - 1) {
                index = 0
            }
            return index
        })
    }
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = product.length - 1
            }
            return index
        })
    }

    return (
        <section className='product-section'>
            <div className='product-section-center'>
                {product.map((person, personIndex) => {
                    const { id, book, name, price} = person
                    let position = 'nextSlide'
                    if (personIndex === (index - 1) || (index === 0 && personIndex === product.length - 1)){
                        position = 'lastSlide'
                    }

                    if (personIndex === index) {
                        position = 'activePrimeSlide'
                    }


                    if (personIndex === (index + 1) || (index === product.length -1 && personIndex === 0)){
                        position = 'activeSecondSlide'
                    }


                    if (personIndex === (index + 2) || (index === product.length -2 && personIndex === 0) || (index === product.length - 1 && personIndex == 1)){
                        position = 'activeThirdSlide'
                    }


                    return (
                        <article className={position} key={id}>
                            <img src={book} alt={name} className='product-img'/>
                            <h4>{name}</h4>
                            <h5>{price}</h5>
                        </article>
                    )
                })}
            </div>
            <div className='product-btn'>
                <button onClick={prevSlide} className='prev'>
                    <FiChevronLeft />
                </button>
                <button onClick={nextSlide} className='next'>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slider