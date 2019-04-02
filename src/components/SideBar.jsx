import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends PureComponent {
	render() {
		const  { collapse } = this.props;
		return (
			<div className={`sidebar ${collapse ? 'side-bar-collapse' : ''}`}>
				<ul className="sidebar__block">
					<NavLink
					to="/"
					className="sidebar__link-active"
					>
						
						<li>
							<i className="fa fa-tachometer" aria-hidden="true"></i>
							<span>Dashboard</span>
						</li>
					</NavLink>
					<NavLink
					to="/"
					className="sidebar_link"
					>
						<li>
							<i className="fa fa-tachometer" aria-hidden="true"></i>
							<span>Dummy</span>
						</li>
					</NavLink>
				</ul>
			</div>
		);
	}
}

export default SideBar;
