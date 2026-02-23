import { Link } from "react-router-dom";
import { mentors } from "../../../../entities/mentor/model/mockData";
import { StudentMentorCard } from "../../../../entities/mentor/ui/StudentMentorCard";

export const MentorsTab = () => {
  return (
    <div className="p-8 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor) => (
          <Link to={`/student/mentor/${mentor.id}`} key={mentor.id} className="block h-full">
            <StudentMentorCard mentor={mentor} />
          </Link>
        ))}
      </div>
    </div>
  );
};
