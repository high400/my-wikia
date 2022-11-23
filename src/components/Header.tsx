import "../App.css";

type Props = {
  title: string,
};
// You fix this "title" problem by typing in the "type Props {}" right there. What a pain in the butt

const Header = (props: Props) => {
  // Keep in mind, in typescript, we cannot call title the way we do in Javascript files
  const headerStyle = {
    backgroundColor: "#000080",
    // The "#0000cd" code is for "medium blue"
    color: "#edeaed",
    // The "#F0F8FF" code is for "alice blue"
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    fontSize: "14px",
    placeContent: "center", 
    // The "place content" is the one that can align your text in the center, not "text align"
    padding: "0.25em",
  };

  return (
    <div style={headerStyle}>
      {props.title}
    </div>
  );
};

export default Header;
