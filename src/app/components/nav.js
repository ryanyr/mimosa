import {Link} from "react-router";
export default React.createClass({
    render(){
        return (
            <footer className="footer">
                <div className="footer_box">
                    <div className="footer_box_left">
                        <Link to="bzhome" activeClassName="active">
                            <div></div>
                            <p>首页</p>
                        </Link>
                    </div>
                    <div className="footer_box_line">
                        <img src="images/homeimages/u97.png" />
                    </div>
                    <div className="footer_box_right">
                        <Link to="my" activeClassName="active">
                            <div></div>
                            <p>我的</p>
                        </Link>
                    </div>
                </div>
            </footer>
        )
    }
})