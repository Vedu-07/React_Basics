import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    // here two foreach loops are used to create a single array i.e. allcourses, the data which we are having is already an array of array
    // So We Want To Get Access To Innermost element so first foreach loop for getting first array and secind for accessing innermost 
    // elements and pushing all values into a single empty array
    function getCourses() {
        // Filter Logic IF Filter == All Then Return Whole Array
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            // Specific Cateogory's Array
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
