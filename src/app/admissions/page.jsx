import React from 'react'
import Header from '../../Components/Header/Header'
import Image from 'next/image';
import one from "../../../public/one.png"
import two from "../../../public/two.png"
import three from "../../../public/three.png"
import four from "../../../public/four.png"
import five from "../../../public/five.png"


import admisiions from "../../../public/admissions.png"
import Footer from '@/Components/Footer/Footer';

const Page = () => {
  return (
    <>

      <Header />
      <div className="flex flex-wrap py-8 px-0 md:px-12 sm:px-24 pr-0">
        <div className="w-full md:w-1/2  p-4">
          <h2 className="text-xl font-bold chancelorheading">Find the Course that Charts Your Path of Success</h2>
          <p className="mt-2 chancelorparagraph">
            Pick the course that suits your desire to  build a career in Mass Communication, Animation, Design, Fashion, Fine Arts, Journalism, and Commerce, easily to turn your Passion into Profession!
          </p>
          <div className='flex pt-8'>
            <button className="text-white px-4 py-2 vp focus:outline-none"><a href='/contact'>Apply Now</a></button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">

          <Image src={admisiions} alt="Image Description"
            className="max-w-full h-auto" />
          <div className="w-full inset-0 flex items-center justify-center ">
            <h1 className="  tpip">
              Ace Your Career, Gyanarthi Way!                        </h1>
          </div>

        </div>

      </div>

      <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 ">
        <div className="w-full md:w-full container  p-0 md:p-2 sm:p-4">
          <h2 className="lifetime mb-4">Eligibility Criteria </h2>
          <p className="lifetimepara">
            At Gyanarthi, the prime eligibility criteria for a course is the intensity of interest in it! We accept students of different educational background and potentials. The basic eligibility condition for Graduate Courses is to have passed Class 12 from a recognized board of education with at least 40% marks. However, the students should have passed their 12th standard from a recognized board of education. There are no further conditions of eligibility that the students must satisfy in order to fnd their place at the Gyanarthi Media College.

            For the Post Graduate Courses, the students must

          </p>
        </div>
      </div>
      <div className=" py-8 px-6 md:px-12 sm:px-24">
        <div className="container mx-auto">
          <div className=" mb-8">
            <h2 className="UG">Undergraduate (UG)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">Bachelor of Commerce</h3>

            </div>
            <div >
              <h3 className="UGcourse mb-4">B Com - Taxation</h3>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">B Com - Banking and Finance    </h3>

            </div>
            <div >
              <h3 className="UGcourse mb-4">   B Com - Financial Accounting</h3>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">B Com - International Business </h3>

            </div>
            <div >
              <h3 className="UGcourse mb-4"> BSc Fashion Designingn</h3>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">BA Animation and Design</h3>

            </div>
            <div >
              <h3 className="UGcourse mb-4"> BA Journalism and Mass Communication</h3>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">Bachelor of Fine Arts</h3>

            </div>

          </div>


        </div>
      </div>
      <div className=" py-12 py-8 px-6 md:px-12 sm:px-24">
        <div className="container mx-auto">
          <div className=" mb-8">
            <h2 className="UG">Post Graduate (PG)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">MA Animation and Design</h3>

            </div>
            <div >
              <h3 className="UGcourse mb-4">  MA Journalism and Mass Communication</h3>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
            <div >
              <h3 className="UGcourse mb-4">MSc Fashion Designing  </h3>

            </div>

          </div>





        </div>
      </div>
      <div className="flex flex-wrap py-8 px-6 md:px-12 sm:px-24 ">
        <div className="w-full md:w-full  p-0 md:p-2 sm:p-4">
          <h2 className="lifetime mb-4">Admission Process </h2>
          <p className="lifetimepara">
            Gyanarthi Media College, located in Kashipur , is established in the Industrial City of Uttarakhand with a purpose of building a community of professionals who can adapt the course of industry practices and integrate them into their education. We aim at offering education that is backed by practical adaptability of the theoretical concepts. Most importantly, it is highly necessary for the students to be able to understand how they can turn their fields of passion into successful career paths. As an institute for Mass Communication, Commercial Studies, Journalism, Design, Animation, and Fashion Studies, Gyanarthi Media College has excelled in unprecedented ways, so far. We strive each day to grow further as we integrate expertise with education.<br></br><br></br>
            The admission process at the Gyanarthi Media College commences in the month of March. The students are able to apply for the eclectic courses at the Gyanarthi till the end of July. Each of Courses have  limited occupancy and we are always seeking to bring in students who have a drive for their fields of interests. If you feel Gyanarthi is the right choice for you, check the subsequent process of Admissions.
          </p>
        </div>
      </div>
      <div className="flex justify-center py-8 px-6 md:px-12 sm:px-24">
        <div className="flex container gap-5">
          {/* First column (Image) */}
          <div className="w-full md:w-1/12 sm:w-1/12">
            <Image src={one} alt="Image" className="one h-auto" />
          </div>
          {/* Second column (Paragraph) */}
          <div className="w-9/10">
            <p className="lifetimepara">The Gyanarthi Media College portal has a built-in application form. The form is available on the Home Page of this Website. The students are required to check their preferred course and accordingly fill out their details in the application form. It  must be noted that the students can directly visit or contact the Admissions team in order to register for their desired courses. </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-16 py-8 px-6 md:px-12 sm:px-24">
        <div className="flex container gap-5">
          {/* First column (Image) */}
          <div className="w-full md:w-1/12 sm:w-1/12">
            <Image src={two} alt="Image" className="one h-auto" />
          </div>
          {/* Second column (Paragraph) */}
          <div className="w-9/10">
            <p className="lifetimepara">At Gyanarthi, Admissions are decided on the basis of the prime eligibility criteria which is 40% marks or aggregate in the last attended level of schooling. For undergraduate students, it is imperative to matching the passing the eligibility irrespective the subject combinations they have had in the Class 12. Even for the Post Graduate courses, the basic eligibility is Bachelors in any discipline. </p>
          </div>
        </div>
      </div><div className="flex justify-center pt-16 py-8 px-6 md:px-12 sm:px-24">
        <div className="flex container gap-5">
          {/* First column (Image) */}
          <div className="w-full md:w-1/12 sm:w-1/12">
            <Image src={three} alt="Image" className="one h-auto" />
          </div>
          {/* Second column (Paragraph) */}
          <div className="w-9/10">
            <p className="lifetimepara">Gyanarthi Media College promotes education in the most holistic way. We offer numerous scholarships to the students to ensure that finances are never barriers in the path of knowledge for students who are bright and passionate for their  fields. Our scholarships are open to students who excel in knowledge or even sports. Additionally, we also support financially backward students by offering them aid. </p>
          </div>
        </div>
      </div><div className="flex justify-center pt-16 py-8 px-6 md:px-12 sm:px-24">
        <div className="flex container gap-5">
          {/* First column (Image) */}
          <div className="w-full md:w-1/12 sm:w-1/12">
            <Image src={four} alt="Image" className="one h-auto" />
          </div>
          {/* Second column (Paragraph) */}
          <div className="w-9/10">
            <p className="lifetimepara"> Along with Bachelor Degree in Journalism and Mass Communication, Fashion Design, Animation and Design,  and Fine Arts, our courses in Commerce are also very specific. They are more inclined towards offering profound insights into fields such as Taxation, Banking and Finance, Financial Accounting, and International Business which gives out students an edge over normal B Com degrees.  </p>
          </div>
        </div>
      </div><div className="flex justify-center pt-16 py-8 px-6 md:px-12 sm:px-24">
        <div className="flex container gap-5">
          {/* First column (Image) */}
          <div className="w-full md:w-1/12 sm:w-1/12">
            <Image src={five} alt="Image" className="one h-auto" />
          </div>
          {/* Second column (Paragraph) */}
          <div className="w-9/10">
            <p className="lifetimepara">Gyanarthi Media College admission process is extremely easy. There are no competitive examinations that students must compulsorily attend to in order to gain eligibility for admissions. Students can simply fill out the application with all their correct details and the admissions team shall contact them accordingly. Thus, it is easy to pursue your dreams with Gyanarthi! </p>
          </div>
        </div>
      </div>
      <section className=" py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl font-bold md:text-left text-center mb-4 md:mb-0">Start Your Gyanarthi Journey</h2>
          </div>
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
              <div className="p-8">
                <h3 className=" text-center mb-4 text-white journeyheading">Apply</h3>
                <p className="text-center mb-6 text-white journeypara">Fill out the Application Form for the upcoming session at Gyanarthi Media College for the year 2024!</p>
                <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block"><a href='/contact'>Apply Now</a></button>
              </div>
            </div>
            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
              <div className="p-8">
                <h3 className=" text-center mb-4 text-white journeyheading">Connect</h3>
                <p className="text-center mb-6 text-white journeypara">Reach Out to Gyanarthi’s Admission Team to secure your place at the College for the upcoming session.</p>
                <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Talk Now</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 applycard hover:bg-yellow-500 transition duration-300 ease-in-out  mb-4 md:mb-0">
              <div className="p-8">
                <h3 className="text-center mb-4 text-white journeyheading">Brochure</h3>
                <p className="text-center mb-6 text-white journeypara">Download the 2024 Brochure of the Gyanarthi Media College and explore the Courses and College Life.</p>
                <button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-semibold py-2 px-4 border border-white hover:border-transparent rounded-full mx-auto block">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>)
}

export default Page