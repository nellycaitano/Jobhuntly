import CategoryHeader from "../globals/CategoryHeader";
import Featuredjobs from "./FeaturesJobs";

function FeaturesSection() {

    const featureSections = [
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Email Marketing',
            subtitle1: 'Revolut',
            subtitle2: 'Madrid, Spain',
            text: 'Revolut is looking for Email Marketing to help team ma ...',
            button1: 'Marketing',
            button2: 'Design'
          },
          buttons: [
            { bgColor: 'yellowlight', textColor: 'yellow', label: 'Marketing' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
          ]
        },

        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Brand Designer',
            subtitle1: 'Dropbox',
            subtitle2: 'San Fransisco, US',
            text: 'Dropbox is looking for Brand Designer to help the team t ...',
            button1: 'Design',
            button2: 'Business'
          },
          buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Design' },
            { bgColor: 'redlight', textColor: 'red', label: 'Business' },
          ]
        },
        
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Email Marketing',
            subtitle1: 'Pitch',
            subtitle2: 'Berlin, Germany',
            text: 'Pitch is looking for Customer Manager to join marketing t ...',
            button1: 'Marketing',
          },
          buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Marketing' },
          ]
        },
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Visual Designer',
            subtitle1: 'Blinklist',
            subtitle2: 'Granada, Spain',
            text: 'Blinkist is looking for Visual Designer to help team desi ...',
            button1: 'Design',
          },
          buttons: [
            { bgColor: 'redlight', textColor: 'red', label: 'Design' },
          ]
        },
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Product Designer',
            subtitle1: 'ClassPass',
            subtitle2: 'Manchester, UK',
            text: 'ClassPass is looking for Product Designer to help us...',
            button1: 'Marketing',
            button2: 'Design'
          },
          buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Marketing' },
            { bgColor: 'redlight', textColor: 'red', label: 'Design' },
          ]
        },
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Lead Designer',
            subtitle1: 'Canva',
            subtitle2: 'Ontario, Canada',
            text: 'Canva is looking for Lead Engineer to help develop n ...',
            button1: 'Design',
            button2: 'Business'
          },
          buttons: [
            { bgColor: 'redlight', textColor: 'red', label: 'Design' },
            { bgColor: 'greenlight', textColor: 'green', label: 'Business' },

          ]
        },
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Brand Strategist',
            subtitle1: 'GoDaddy',
            subtitle2: 'Marseille, France',
            text: 'GoDaddy is looking for Brand Strategist to join the team... ',
            button1: 'Marketing',
          },
          buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Marketing' },
          ]
        },
        {
            featuredJobs: {
            logo: '../src/assets/images/EmailMarketing.svg',
            name: 'Data Analyst',
            subtitle1: 'Twitter',
            subtitle2: 'San Diego, US',
            text: 'Twitter is looking for Data Analyst to help team desi ...',
            button1: 'Technology',
          },
          buttons: [
            { bgColor: 'greenlight', textColor: 'green', label: 'Technology' },
          ]
        },
        
      ];
    return (
      
      <section className="py-6">
       <CategoryHeader 
        textBeforeSpan="Features" 
        spanText="category" 
        // showAllJobsLink="/all-jobs" 
        />

        <div className="grid grid-cols-4 grid-rows-2 gap-8 mt-12">
                {featureSections.map((section, index) => (
                    <Featuredjobs key={index} job={section.featuredJobs} buttons={section.buttons} />
                ))}
        </div>
      </section>
    );
  }
   
  export default FeaturesSection;
  