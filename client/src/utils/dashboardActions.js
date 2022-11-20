import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats, MdLowPriority } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: 5,
    text: "priority jobs",
    path: "priority-jobs",
    icon: <MdLowPriority />,
  },
  {
    id: 4,
    text: "edit profile",
    path: "profile",
    icon: <ImProfile />,
  },
];

export default links;
