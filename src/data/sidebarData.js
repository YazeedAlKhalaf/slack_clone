import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    text: "Thread",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions & Reactions",
  },
  {
    icon: <BookmarkBorderIcon />,
    text: "Saved Items",
  },
  {
    icon: <PeopleIcon />,
    text: "Peoples & Groups",
  },
  {
    icon: <AppsIcon />,
    text: "More",
  },
];
