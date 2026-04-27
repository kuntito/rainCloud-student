import { Flex } from "@chakra-ui/react"
import { Course } from "../../../../models/course"
import ItemList from "../../../components/AppItemList"
import CourseItem from "./course-item/CourseItem"

interface Props {
    courses: Course[]
}

const CourseList = ({ courses }: Props ) => {
    return (
        <Flex
            h={"100%"}
            align={ courses.length == 1 ? "center": "flex-start" }
            overflow={"auto"}
        >
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
        </Flex>
    )
}

export default CourseList;