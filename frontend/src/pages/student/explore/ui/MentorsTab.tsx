import { Link } from "react-router-dom";
import { useMentors } from "../../../../entities/mentor/api/useMentors";
import { StudentMentorCard } from "../../../../entities/mentor/ui/StudentMentorCard";

export const MentorsTab = () => {
  const { data: mentors, isLoading, error } = useMentors();

  if (isLoading) return <div className="p-8 text-center text-gray-500">Memuat daftar mentor...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Gagal memuat mentor: {error}</div>;

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
