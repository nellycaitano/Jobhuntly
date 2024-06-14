import Category from "../globals/Category";
import CategoryHeader from "../globals/CategoryHeader";

function CategorySection() {

  const categories = [
    { icon: "material-symbols-light:design-services-outline", categoryName: "Design", jobsNumber: 235 },
    { icon: "mdi:finance", categoryName: "Sales", jobsNumber: 756 },
    { icon: "nimbus:marketing", categoryName: "Marketing", jobsNumber: 140 },
    { icon: "streamline:business-card", categoryName: "Finance", jobsNumber: 325 },
    { icon: "heroicons:computer-desktop", categoryName: "Technology", jobsNumber: 436 },
    { icon: "ph:code", categoryName: "Engineering", jobsNumber: 542 },
    { icon: "icon-park-outline:handbag", categoryName: "Business", jobsNumber: 211 },
    { icon: "foundation:social-myspace", categoryName: "HumanRessource", jobsNumber: 346 },
  ];
    return (
      
      <section className="py-6">
       <CategoryHeader 
        textBeforeSpan="Explore by" 
        spanText="category" 
        // showAllJobsLink="/all-jobs" 
        />

        <div className="grid grid-cols-4 grid-rows-2 gap-8 mt-12">
          {categories.map((category, index) => (
            <Category key={index} icon={category.icon} categoryName={category.categoryName} jobsNumber={category.jobsNumber} />
          ))}   
        </div>
      </section>
    );
  }
   
  export default CategorySection;
  