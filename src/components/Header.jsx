import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { toggleSideBar } from '../actions/DashboardActions';

class Header extends PureComponent {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className='header'>
      	<button onClick={this.props.toggleSideBar}>
      		<i className="fa fa-bars" aria-hidden="true"></i>
      	</button>
      	<p className="d-inline-block logo">
      		<i className="fa fa-snowflake-o" aria-hidden="true"></i>
        	Logo Image
      	</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
	toggleSideBar: () => {
    dispatch(toggleSideBar())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
