type CoursePageType={
  params:{
    institute: string,
    course:string
  }
}

export default function CoursePage({ params }:CoursePageType) {
  const { institute, course } = params;

  return (
    <div>
      <h1>Institute: {institute}</h1>
      <h2>Course: {course}</h2>
    </div>
  );
}
