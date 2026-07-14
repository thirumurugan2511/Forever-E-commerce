import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia non illum velit aspernatur. Delectus pariatur, voluptate nihil, earum laborum recusandae fugit beatae sapiente quasi nostrum libero voluptatum culpa temporibus possimus vitae voluptate vel animi, molestiae sequi aliquam itaque autem, sint recusandae. Quas tenetur, ab facere dolore, distinctio velit accusamus iusto placeat hic doloremque dicta itaque repellat. Ullam molestias assumenda sapiente?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos quod recusandae similique molestias perferendis velit aspernatur hic aperiam optio? Perspiciatis dolorem illo blanditiis aspernatur veniam placeat porro quidem similique ex fuga, dolore ipsum iure tempore iusto architecto sapiente odio debitis earum, voluptatem in praesentium. Cum optio dolores repudiandae repellat.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia ea porro doloremque atque eaque alias minus ad veniam perferendis.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta earum nam laudantium dolorem incidunt quasi? Architecto ratione iure nisi recusandae dolores ipsam ex, eum minus facere, vitae facilis quam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta earum nam laudantium dolorem incidunt quasi? Architecto ratione iure nisi recusandae dolores ipsam ex, eum minus facere, vitae facilis quam.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta earum nam laudantium dolorem incidunt quasi? Architecto ratione iure nisi recusandae dolores ipsam ex, eum minus facere, vitae facilis quam.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About