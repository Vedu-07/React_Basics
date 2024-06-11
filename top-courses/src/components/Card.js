import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Like Logic 
        if(likedCourses.includes(course.id)) {
            // The Data Which Is Already Liked
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("Like Removed !!!");
        }
        else {
            //Those Which are Not Liked and We Have To Insert In Liked Courses Array
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                // Taking Previous Data And Adding New One Into it Along With Previous Data
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt='pic'/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        // For Changing OF Like Icon
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
