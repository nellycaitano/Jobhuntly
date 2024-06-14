import PostJobs from '../../components/globals/PostJobs'
import CategorySection from '../../components/home/CategorySection'
import FeaturesSection from '../../components/home/FeaturesSection'
// import CompanySection from '../../components/home/CompanySection'
import HeroSection from '../../components/home/HeroSection'
import LeatestSection from '../../components/home/LeatestSection'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'

function HomePage() {
  return (
    <>
      <div className=''>

        <section className=" bg-[url('/img/BG.png')]">

          <div className='max-w-[1440px] md:py-6 md:px-[124px] md:mx-auto'>
            <Header/>
            <HeroSection />
          </div>
          
        </section>  

        <section className='max-w-[1440px] md:px-[124px] py-8 md:mx-auto'>
           <CategorySection/>
          <div className='flex md:items-center md:justify-center'>
           <PostJobs/>
          </div>
          <FeaturesSection/>
        </section>
        <LeatestSection/>
        <Footer/>



      </div>
    </>
  )
}

export default HomePage