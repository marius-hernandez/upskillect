import { Navbar } from "@/app/components/Navbar";

type CoursePageType={
    params:{
      institute: string,
      course:string
    }
  }
  
  export default function CoursePage({ params }:CoursePageType) {
    const { institute, course } = params;
  
    return (
      <>
        <Navbar />
        <section>
          
        </section>
        
      </>
    );
  }
  