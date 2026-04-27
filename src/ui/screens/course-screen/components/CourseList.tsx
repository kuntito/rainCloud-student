import { Course } from "../../../../models/course"
import ItemList from "../../../components/AppItemList"
import CourseItem from "./course-item/CourseItem"

interface Props {
    courses: Course[]
}

const CourseList = ({ courses }: Props ) => {
    return (
        <ItemList
            data={courses}
            renderItem={(item) => (
                <CourseItem
                    key={item.id}
                    course={item}
                />
            )}
            gap="32px"
        />
    )
}

export default CourseList;