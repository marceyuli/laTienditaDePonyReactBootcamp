import moment from "moment";

export default function Comment({avatar, name, userLink, institution, commentDate, children}) {
  return (
    <div>
      <div>
        <img src={avatar} alt={name}></img>
      </div>
      <div>
        <a href={userLink}>{name}</a> - {institution}
      </div>
      <p>{children}</p>
      <p>{moment(commentDate).fromNow(true)}</p>
    </div>
  );
}
