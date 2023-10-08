

const About = () => {
    return (
        <div className="mt-7 mb-5">
            <h1 className="underline text-center text-3xl font-bold text-blue-600">About us</h1>

          <div className="flex mt-20 gap-4 mb-20">
          <div className=" border-2 border-green-400 p-2">
               <h2 className="text-center text-xl font-bold ">Welcome to Medical help center.</h2>
               <p className="mt-3 text-gray-500">Our facility is located on a 15-acre campus.From screenings and diagnostics to life-saving, intensive care, our patients can count on a patient-centric approach that puts their comfort and well-being at the forefront of everything we do.Our medical center serves as a regional referral, teaching hospital and provides renowned care for cardiac patients, women and infants, and those in needed of emergency services. Our facility is also outfitted with the latest technologies to assist our professionals in providing the highest standard of care for patients of all ages. Our buildings were designed with patient comfort in mind, as well as offering spacious accommodations, natural light, and soothing views of the Statue of Liberty.</p>
               </div>
               <div>
                    <img className="w-[5000px]" src="https://s3.us-east-2.amazonaws.com/files.fisher.osu.edu/leadreadtoday/public/styles/blog_featured_image/public/2022-01/trust-word-concepts-banner-vector-id1175873327.jpg?VersionId=rL4F.f8f1e9DpKpqx4BAWIvxY573d69C&h=657bedfd&itok=T8EoAlnE" alt="" />
               </div>
          </div>
        </div>
    );
};

export default About;