import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>AcademicSemester</h1>
        </div>
    );
};

export default AcademicSemester;