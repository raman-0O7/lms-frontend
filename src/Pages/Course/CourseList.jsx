import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../components/CourseCard";
import { getAllCourses } from "../../Redux/Slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  const {courseData} = useSelector((state) => state.course)

  async function loadingCourses() {
    await dispatch(getAllCourses());
  }

  useEffect(()=> {
    loadingCourses();
  },[]);
  return (
    <div className="min-h-[90vh] pt-12 pl-20 flex flex-col text-white gap-10">
      <h1 className="text-center text-3xl font-semibold mb-5">
        Explore the courses createdBy <span className="text-yellow-500 font-bold "> Industry Experts</span>.
      </h1>
      <div className="mb-10 flex flex-wrap gap-14">
        {courseData?.map((element) => <CourseCard key={element._id} data={element}/>)}
      </div>
    </div>
  )
}
export default CourseList;