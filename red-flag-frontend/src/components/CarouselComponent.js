import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export default function CarouselComponent({products}) {
    const slides = [
        {
            url: 'https://www.tutiendavegana.es/wp-content/uploads/2022/12/que-es-la-comida-casera.jpg',
        },
        {
            url: 'https://img.freepik.com/fotos-premium/comida-casera-chuleta-cerdo-frita-ensalada-col-rallada-salsa-arroz-tonkatsu_637068-25.jpg',
        },
        {
            url: 'https://www.materialescolar.es/blog/wp-content/uploads/2014/07/Manualidades.png',
        },

        {
            url: 'https://fiestasycumples.com/wp-content/uploads/2021/06/Captura-de-pantalla-2021-06-06-a-las-18.53.22-min.jpg',
        },
        {
            url: 'https://i.ytimg.com/vi/JAFkEgWfwLA/maxresdefault.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-full h-[380px] w-full m-auto relative group pb-6'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full  bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
