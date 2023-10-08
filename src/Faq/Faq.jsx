

const Faq = () => {
    return (
        <div className="h-[100vh] w-full ">
           <div className="text-center mb-16"> <h1 className="text-3xl font-bold underline text-blue-600 ">FAQ’s</h1>
            <p className="mt-3 text-xl font-semibold">Thank you for your interest in Medical Health Care.</p></div>
            <div className="flex ">
                <div className="w-[600px]">
                <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Is Medical Health Care a government agency?
  </div>
  <div className="collapse-content"> 
    <p>No, Community Health Care is a 501 (c)3 non-profit network of community-based Federally Qualified Health Centers (FQHC) offering comprehensive medical, dental, pharmacy and behavioral health, and specialty healthcare services in Pierce County. Community Health Care is a HRSA FTCA deemed facility</p>
  </div>
         </div>
     <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Are Providers (doctors/dentists) volunteers, part-time or full-time employees?
  </div>
  <div className="collapse-content"> 
    <p>All of our medical and dental providers are employees of Community Health Care. Most work full-time but some work only part-time due to the program in which they work. We also have some volunteer providers who provide specialty care.</p>
  </div>
       </div>
    <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How many doctors and/or providers?
  </div>
  <div className="collapse-content"> 
    <p>Currently there are more than 100 providers at six Community Health Care locations. These include Doctors, Nurse Practitioners, Physician Assistants, Dentists and Hygienists</p>
  </div>
       </div>
       <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">

What happens if a patient needs a specialist?
  </div>
  <div className="collapse-content"> 
    <p>
    For insured patients, a referral is made by the patient’s physician and the cost is paid through the patient’s insurance.
We continue to expand services. We provide limited specialty services at the Hilltop Regional Health Center. Please call if the service you are interested in is not listed.
    </p>
  </div>
       </div>

                </div>
                <div className="ml-10">
               <img  src="https://img.freepik.com/premium-vector/people-ask-questions-man-women-ask-finding-solution-answer-question-business_159757-1334.jpg" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Faq;