import {Link} from 'react-router-dom';

function Taskbar() {
    const mainStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
      }
      const backgroundStyle = {
        position: "absolute",
        height: "100%",
        width: "110%",
        padding: "1%",
        backgroundColor: "grey",
        opacity: "0.6",
        zIndex: "-1",
      }
      const menuStyle = {
        marginTop: "50px",
        opacity: "0.8",
      }
      const ImgStyles = {
        width: "inherit",
        height: "75px",
        display: "block",
        marginBottom: "50%",
      }
  return (
      <div style={mainStyle}>
        <div style={backgroundStyle}></div>
        <div id="menu" style={menuStyle}>
            <Link to="/" activeStyle>
                <img src="arcReactorIcon1.png" style={ImgStyles} />
            </Link>
            <Link to="/schedule" activeStyle>
                <img src="scheduleIcon.png" style={ImgStyles} />
            </Link>  
        </div> 
      </div>
  );
}

export default Taskbar;
