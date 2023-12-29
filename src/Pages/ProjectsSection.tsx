import React from 'react';

type ProjectsSectionProps = {
    
};

const ProjectsSection:React.FC<ProjectsSectionProps> = () => {
    
    return <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-black">Projects</h2>
      <p className="text-gray-700">
        Welcome to OceanNGO! We are a passionate group of individuals dedicated to the conservation of our oceans.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget est ut elit bibendum dapibus.
        Maecenas vel nisi vitae sapien luctus fringilla. Integer bibendum aliquet feugiat.
      </p>
    </div>
  </section>
}
export default ProjectsSection;